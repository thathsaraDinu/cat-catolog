export interface CatBreed {
  id: string
  name: string
  description: string
  temperament: string
  origin: string
  image: {
    url: string
  }
}

export interface CatDetailsDialogProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  breed: CatBreed;
}

// Define the structure of the API response
export interface BreedImageResponse {
  id: string;
  url: string;
  breeds: Array<any>;
}

export interface CatCardProps {
  breed: CatBreed;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
}