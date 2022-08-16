import { Genre } from './genre.model';

export interface MovieDetails {
  backdrop_path: string;
  budget: number;
  genres: Genre[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
}
