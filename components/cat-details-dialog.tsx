"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import { BreedImageResponse, CatDetailsDialogProps } from "@/types/alltypes";
import Image from "next/image";

const CatDetailsDialog: React.FC<CatDetailsDialogProps> = ({
  isOpen,
  setIsOpen,
  breed,
}) => {
  const [breedImages, setBreedImages] = useState<BreedImageResponse[]>([]);

  useEffect(() => {
    if (isOpen) {
      fetch(`/api/breedimages/${breed.id}`)
        .then((res) => res.json())
        .then((data) => setBreedImages(data))
        .catch((error) => console.error(error));
    }
  }, [isOpen, breed.id]);

  // Carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="hidden">Open Dialog</button>
      </DialogTrigger>
      <DialogContent className="max-w-xl max-h-[90vh] w-full overflow-auto">
        <DialogTitle>{breed.name}</DialogTitle>
        <DialogDescription className="overflow-hidden">
          {/* Image Carousel */}
          <div className="mb-4">
            {breedImages.length > 0 ? (
              <div className="carousel-wrapper">
                <style jsx global>{`
                  /* Fix for arrows */
                  .slick-prev,
                  .slick-next {
                    z-index: 10;
                    width: 30px;
                    height: 30px;
                  }
                  .slick-prev {
                    left: 10px;
                  }
                  .slick-next {
                    right: 10px;
                  }
                  .slick-prev:before,
                  .slick-next:before {
                    font-size: 30px;
                    opacity: 0.75;
                    color: #fff;
                    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
                  }
                  /* Fix for container */
                  .slick-slider {
                    margin-bottom: 0;
                  }
                  /* Fix for dots */
                  .slick-dots {
                    bottom: 10px;
                  }
                  .slick-dots li button:before {
                    color: white;
                    opacity: 0.75;
                  }
                  .slick-dots li.slick-active button:before {
                    opacity: 1;
                  }
                `}</style>
                <Slider {...sliderSettings}>
                  {breedImages.map((image) => (
                    <div key={image.id}>
                      <div className="relative h-64 w-full">
                        <Image
                          src={image.url}
                          alt={breed.name}
                          fill
                          className="rounded-md object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center bg-gray-100 rounded-md">
                <p className="text-center">Loading images...</p>
              </div>
            )}
          </div>

          <p>{breed.description}</p>
          <div className="flex items-center mt-3 gap-2">
            <span className="text-gray-500">Origin:</span>{" "}
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {breed.origin}
            </span>
          </div>
          <div className="flex items-center mt-3 gap-2">
            <span className="text-gray-500">life span:</span>{" "}
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
              {breed.life_span}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {breed.temperament.split(",").map((trait) => (
              <span
                key={trait}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
              >
                {trait.trim()}
              </span>
            ))}
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default CatDetailsDialog;
