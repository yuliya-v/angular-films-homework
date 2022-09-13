import { Genre } from './genre.model';

export interface MovieDetails {
  budget: number;
  genres: Genre[];
  id: number;
  overview: string;
  posterPath: string;
  releaseDate: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  voteAverage: number;
}
