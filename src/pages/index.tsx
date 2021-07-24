import * as React from "react";
import Home from "containers/Home/Home";
import Layout from "components/Layout/Layout";
import { IPhoto } from "interfaces/photo";
import PhotosContext from "store/PhotosContext";
import { fetchPhotos } from "api/fetchPhotos";

export interface IProps {
  data: IPhoto[];
}

const Index = ({ data }: IProps) => {
  const [photos, setPhotos] = React.useState<IPhoto[]>(data);
  return (
    <PhotosContext.Provider value={{ photos, setPhotos }}>
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
