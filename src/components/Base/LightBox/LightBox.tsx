/* eslint-disable react-hooks/exhaustive-deps */
import { IGallery } from "interfaces/photo";
import * as React from "react";
import ReactImageVideoLightbox from "react-image-video-lightbox";

interface IProps {
  gallery: IGallery[];
  currentIndex: number;
  onClose: (value: number) => void;
  onEscape: (value: boolean) => void;
}

export default function LightBox({
  gallery,
  currentIndex,
  onClose,
  onEscape,
}: IProps) {
  React.useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        onEscape(false);
      }
    });
  }, []);
  return (
    <ReactImageVideoLightbox
      data={gallery}
      startIndex={currentIndex}
      showResourceCount={true}
      onCloseCallback={onClose}
    />
  );
}
