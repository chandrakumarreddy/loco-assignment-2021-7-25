import * as React from "react";
import { IPhoto } from "interfaces/photo";
import { Grid, Image } from "./Home.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface IProps {
  photos: IPhoto[];
}

const Loading = () => <>"loading"</>;

export default function Photos({ photos }: IProps) {
  return (
    <Grid>
      {photos.map((photo) => (
        <LazyLoadImage
          effect="blur"
          src={photo.urls.raw}
          key={photo.id}
          alt={photo.description}
          width="100%"
          height="100%"
          placeholder={<Loading />}
        />
      ))}
    </Grid>
  );
}
