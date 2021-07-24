import { PHOTOS_URL } from "constants/constants";

export async function fetchPhotos(page: number) {
  const response = await fetch(
    `${PHOTOS_URL}&page=${page}&client_id=${process.env.NEXT_PUBLIC_PRIVATE_KEY}`
  );
  return await response.json();
}
