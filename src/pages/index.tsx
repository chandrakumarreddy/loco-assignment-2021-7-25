import * as React from "react";
import Home from "containers/Home/Home";
import Layout from "components/Layout/Layout";
import { IPhoto } from "interfaces/photo";
import PhotosContext from "store/PhotosContext";
import { fetchPhotos } from "api/fetchPhotos";
import getPhotos from "containers/Home/getPhotos";

export interface IProps {
  data: IPhoto[];
}

const Index = ({ data }: IProps) => {
  const [photos, setPhotos] = React.useState<IPhoto[][]>(() => getPhotos(data));
  const updatePhotos = (values: IPhoto[]) => {
    const newPhotos = getPhotos(values);
    setPhotos(photos.map((_photo, index) => _photo.concat(newPhotos[index])));
  };
  return (
    <PhotosContext.Provider value={{ photos, updatePhotos }}>
      <Home />
    </PhotosContext.Provider>
  );
};

Index.layout = Layout;

export async function getServerSideProps() {
  const data = await fetchPhotos(1);
  return {
    props: { data },
  };
}

export default Index;
