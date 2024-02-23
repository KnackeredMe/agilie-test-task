import {IImages} from "./images.model";

export interface IGif {
  type: string;
  id: string;
  slug: string;
  url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  rating: string;
  content_url: string;
  user: IUser;
  source_tld: string;
  source_post_url: string;
  update_datetime: string;
  create_datetime: string;
  import_datetime: string;
  trending_datetime: string;
  images: IImages;
  title: string;
  alt_text: string;
}

export interface IUser {
  avatar_url: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string
}
