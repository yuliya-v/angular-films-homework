import { Genre } from './genre.model';

export interface MovieDetails {
  budget: number;
  genres: Genre[];
  id: number;
  overview: string;
  posterPath: string | null;
  releaseDate: string;
  revenue: number;
  runtime: number;
  tagline: string;
  title: string;
  voteAverage: number;
}
