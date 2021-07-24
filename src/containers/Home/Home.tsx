/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { Container } from "./Home.css";
import { IPhoto } from "interfaces/photo";
import Photos from "./Photos";
import { usePhotos } from "store/PhotosContext";
import getPhotos from "./getPhotos";
import { fetchPhotos } from "api/fetchPhotos";

interface IProps {
  photos: IPhoto[];
}

const Home = () => {
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const [loading, setLoading] = React.useState(false);
  const { photos, setPhotos } = usePhotos();
  const observer = React.useRef<IntersectionObserver>();
  const lastElement = React.useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber((p) => p + 1);
          setLoading(true);
          const resp = await fetchPhotos(pageNumber);
          setPhotos(photos.concat(resp));
          setLoading(false);
        }
      });
      if (node) observer.current.observe(node);
    },
    [pageNumber, photos]
  );
  const newPhotos = getPhotos(photos);
  return (
    <Container>
      {newPhotos.map((_photos, index) => (
        <Photos photos={_photos} key={String(index)} />
      ))}
      <div ref={lastElement} />
    </Container>
  );
};

export default Home;
