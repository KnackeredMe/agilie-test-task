import {IImages} from "./images.model";

export interface IGif {
  type: string;
  id: string;
  slug: string;
  url: string;
  bitlyUrl: string;
  embedUrl: string;
  username: string;
  source: string;
  rating: string;
  contentUrl: string;
  user: IUser;
  sourceTld: string;
  sourcePostUrl: string;
  updateDatetime: string;
  createDatetime: string;
  importDatetime: string;
  trendingDatetime: string;
  images: IImages;
  title: string;
  altText: string;
}

export interface IUser {
  avatarUrl: string;
  bannerUrl: string;
  profileUrl: string;
  username: string;
  displayName: string
}
