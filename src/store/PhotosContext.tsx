import * as React from "react";
import { IPhoto } from "interfaces/photo";

interface IPhotosContext {
  photos: IPhoto[];
  setPhotos: React.Dispatch<React.SetStateAction<IPhoto[]>>;
}

const PhotosContext = React.createContext<IPhotosContext>({
  photos: [],
  setPhotos: () => {},
});

export const usePhotos = () => {
  return React.useContext(PhotosContext);
};

export default PhotosContext;
