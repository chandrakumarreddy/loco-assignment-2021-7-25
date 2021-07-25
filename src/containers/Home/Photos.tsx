import * as React from "react";
import { IPhoto } from "interfaces/photo";
import { Grid, Image } from "./Home.css";

interface IProps {
  photos: IPhoto[];
  handleClick: (index: number) => void;
}

function Photos({ photos, handleClick }: IProps) {
  return (
    <Grid>
      {photos.map((photo: IPhoto, index: number) => (
        <div key={photo.id}>
          <Image
            src={photo.urls.regular}
            alt={photo.description}
            width="100%"
            height="100%"
            onClick={() => handleClick(index)}
          />
        </div>
      ))}
    </Grid>
  );
}

export default Photos;
