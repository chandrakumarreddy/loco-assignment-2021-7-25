import * as React from "react";
import { IPhoto } from "interfaces/photo";

interface IPhotosContext {
  photos: IPhoto[][];
  updatePhotos: (photos: IPhoto[]) => void;
}

const PhotosContext = React.createContext<IPhotosContext>({
  photos: [],
  updatePhotos: () => {},
});

export const usePhotos = () => {
  return React.useContext(PhotosContext);
};

export default PhotosContext;
