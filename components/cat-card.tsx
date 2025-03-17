"use client";

import { useState } from "react";
import { CatCardProps } from "@/types/alltypes";
import CatDetailsDialog from "./cat-details-dialog";

export default function CatCard({ breed }: CatCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {breed.name}
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {breed.origin}
            </span>
            {breed.temperament
              .split(",")
              .slice(0, 2)
              .map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                >
                  {trait.trim()}
                </span>
              ))}
          </div>
        </div>
      </div>
      <CatDetailsDialog isOpen={isOpen} setIsOpen={setIsOpen} breed={breed} />
    </>
  );
}
