import { Genre } from './genre.model';

export interface MoviesResponseItem {
  poster_path: string;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  title: string;
  vote_average: number;
}

export interface MoviesResponse {
  page: 1;
  results: MoviesResponseItem[];
  total_results: number;
  total_pages: number;
}

export interface MovieDetailsResponse {
  budget: number;
  genres: Genre[];
  id: number;
  overview: string;
  poster_path: null | string;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  title: string;
  vote_average: number;
}

export interface ImagesResponse {
  id: number;
  posters: ImagesResponseItem[];
}

export interface ImagesResponseItem {
  height: number;
  file_path: string;
  width: number;
}

export interface CreditsResponse {
  id: number;
  cast: CreditsResponseItem[];
}

export interface CreditsResponseItem {
  id: number;
  name: string;
  profile_path: string | null;
  character: string;
}
