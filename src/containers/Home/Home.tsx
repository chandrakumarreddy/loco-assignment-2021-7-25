/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { Container, HomeWrapper, Divider } from "./Home.css";
import { IPhoto, IGallery } from "interfaces/photo";
import Photos from "./Photos";
import { usePhotos } from "store/PhotosContext";
import { fetchPhotos } from "api/fetchPhotos";
import LightBox from "components/Base/LightBox/LightBox";
import Loader from "./Loader";
import LastElement from "./LastElement";
import Header from "./Header/Header";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [gallery, setGallery] = React.useState<IGallery[]>([]);
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const [loading, setLoading] = React.useState(false);
  const { photos, updatePhotos } = usePhotos();
  const observer = React.useRef<IntersectionObserver>();
  const lastElement = React.useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting) {
          setLoading(true);
          const resp = await fetchPhotos(pageNumber + 1);
          setPageNumber(pageNumber + 1);
          updatePhotos(resp);
          setLoading(false);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, pageNumber, photos]
  );
  const handleClick = (index: number) => (n: number) => {
    setOpen((c) => !c);
    setCurrentIndex(n);
    setGallery(
      photos[index].map((_photo: IPhoto) => ({
        url: _photo.urls.regular,
        altTag: _photo.description,
        type: "photo",
      }))
    );
  };
  return (
    <HomeWrapper>
      <Header />
      <Container>
        {photos.map((_photos, index: number) => (
          <React.Fragment key={String(index)}>
            <Photos
              photos={_photos}
              key={String(index)}
              handleClick={handleClick(index)}
            />
            <Divider />
          </React.Fragment>
        ))}
        {!loading && <LastElement lastElement={lastElement} />}
      </Container>
      {(loading || !photos.length) && <Loader />}
      {open && (
        <LightBox
          gallery={gallery}
          currentIndex={currentIndex}
          onClose={handleClick(0)}
          onEscape={setOpen}
        />
      )}
    </HomeWrapper>
  );
};

export default Home;
