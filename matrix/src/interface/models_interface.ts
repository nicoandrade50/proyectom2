

export interface IFilm {
  id: number;
  title: string;
  release_year: number; 
}



export interface IScene {
  id: number;
  description: string;
}



export interface ICharacter {
  id: number;
  description: string;
  physical_status: string;
gender: string;
}