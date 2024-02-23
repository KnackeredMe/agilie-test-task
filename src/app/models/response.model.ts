import {IGif} from "./gif.model";

export interface IResponse {
  data: IGif;
  pagination: IPagination;
  meta: IMeta;
}

export interface IPagination {
  offset: string;
  total_count: string;
  count: number;
}

export interface IMeta {
  msg: string;
  status: number;
  response_id: string;
}


