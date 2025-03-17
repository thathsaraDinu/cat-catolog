"use client";

import { useState, useEffect } from "react";
import CatCard from "@/components/cat-card";
import SearchBar from "@/components/search-bar";
import { CatBreed } from "@/types/alltypes";

async function getCatBreeds() {
  const res = await fetch("/api/catbreeds"); // Ensure this matches your API route

  if (!res.ok) throw new Error("Failed to fetch cat breeds");

  return res.json(); // Parse the JSON response
}

export default function Home() {
  const [breeds, setBreeds] = useState<CatBreed[]>([]);
  const [filteredBreeds, setFilteredBreeds] = useState<CatBreed[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch breeds when component mounts
  useEffect(() => {
    getCatBreeds()
      .then((data) => {
        setBreeds(data);
        setFilteredBreeds(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = (query: string) => {
    const filtered = breeds.filter(
      (breed) =>
        breed.name.toLowerCase().includes(query.toLowerCase()) ||
        breed.description.toLowerCase().includes(query.toLowerCase()) ||
        breed.temperament.toLowerCase().includes(query.toLowerCase()) ||
        breed.origin.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBreeds(filtered);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Cat Breeds Catalog
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover various cat breeds and their unique characteristics
          </p>
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Show loading state */}
        {loading && (
          <div className="text-center text-gray-600 mt-8">
            Loading cat breeds...
          </div>
        )}

        {/* Show error if fetching fails */}
        {error && (
          <div className="text-center text-red-600 mt-8">Error: {error}</div>
        )}

        {/* Show breeds if available */}
        {!loading && !error && (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBreeds.map((breed) => (
              <CatCard key={breed.id} breed={breed} />
            ))}
          </div>
        )}

        {!loading && !error && filteredBreeds.length === 0 && (
          <div className="text-center text-gray-600 mt-8">
            No cat breeds found matching your search.
          </div>
        )}
      </div>
    </main>
  );
}
