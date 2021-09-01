import {Movie} from './movie';

export interface Cinema {
  id?: number;
  code?: string;
  movie?: Movie;
  dateTime?: string;
  ticket?: number;
}
