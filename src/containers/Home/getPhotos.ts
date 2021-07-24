import { IPhoto } from "interfaces/photo";

function getPhotos(photos: IPhoto[]) {
  const count = Math.floor(photos.length / 3);
  return [
    photos.slice(0, count),
    photos.slice(count, count * 2),
    photos.slice(count * 2),
  ];
}

export default getPhotos;
