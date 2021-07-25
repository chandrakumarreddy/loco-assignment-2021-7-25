interface IUrl {
  regular: string;
}
export interface IPhoto {
  urls: IUrl;
  description: string;
  id: string;
}

export interface IGallery {
  url: string;
  altTag: string;
  type: string;
}
