// interfaces for popular movies & tv shows

export interface IPartialMovie{
  results: IMovie[]
}

export interface IMovie {
  id: number;
  overview: string;
  original_title: string;
  poster_path: string;
  name: string;
  title: string;
  first_air_date: Date;
  release_date: Date;
  vote_average: number;
  genre_ids: [];
  backdrop_path: string;
}

export class Movie {
  protected constructor(
    public id = 0,
    public overview = '',
    public original_title = '',
    public poster_path = '',
    public name = '',
    public title = '',
    public first_air_date = new Date,
    public release_date = new Date,
    public vote_average = 0,
    public genre_ids = [],
    public backdrop_path = ''
  ){}

  public static Build(movie: IMovie){
    return new this(
      movie.id,
      movie.overview,
      movie.original_title,
      `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      movie.name,
      movie.title,
      movie.first_air_date,
      movie.release_date,
      movie.vote_average,
      movie.genre_ids,
      `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    )
  }

}


// interfaces for modal details

export interface IDetails {
  backdrop_path : string;
  genres : IGenres[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  production_companies: IProductionCompanies[];
  production_countries: IProductionCountries[];
  release_date: Date;
  runtime: number;
  spoken_languages: ISpokenLanguages[];
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name:string;
  first_air_date: string;
  number_of_episodes: number;
  number_of_seasons: number;
}

export class Details {
  protected constructor(
    public backdrop_path = '',
    public genres = [{ id : 0, name : ''}],
    public id = 0,
    public original_language = '',
    public original_title = '',
    public overview = '',
    public poster_path = '',
    public production_companies = [{}],
    public production_countries = [{}],
    public release_date = new Date,
    public runtime = 0,
    public spoken_languages = [{}],
    public title = '',
    public video = false,
    public vote_average = 0,
    public vote_count = 0,
    public name = '',
    public first_air_date = '',
    public number_of_episodes = 0,
    public number_of_seasons = 0
  ) {}

  public static Build(details: IDetails){
    return new this(
      details.backdrop_path,
      details.genres,
      details.id,
      details.original_language,
      details.original_title,
      details.overview,
      details.poster_path,
      details.production_companies,
      details.production_countries,
      details.release_date,
      details.runtime,
      details.spoken_languages,
      details.title,
      details.video,
      details.vote_average,
      details.vote_count,
      details.name,
      details.first_air_date,
      details.number_of_episodes,
      details.number_of_seasons
    )
  }
}

export interface IGenres {
  id : number;
  name : string;
}

export interface IProductionCompanies {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

export interface IProductionCountries {
  iso_3166_1: string;
  name: string;
}

export interface ISpokenLanguages {
  iso_639_1: string;
  name: string;
}
