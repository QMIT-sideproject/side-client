import { gql } from '@apollo/client';

export interface AniType {
  title: {
    english: string;
    native: string;
  };
  coverImage: {
    large: string;
  };
  genres: string[];
  averageScore: number;
  id: number;
}

export interface DataType {
  Page: {
    media: AniType[];
  };
}

export interface GenreType {
  GenreCollection: string[];
}

export interface VariablesType {
  page: number;
  perPage: number;
  sort: string;
  search: string | string[] | undefined;
  isAdult: boolean;
  status: string | string[] | undefined;
  genre: string | string[] | undefined;
  licensedBy: string | string[] | undefined;
}

export const GET_ANI_LIST = gql`
  query Page($status: MediaStatus, $isAdult: Boolean, $genre: String, $page: Int, $perPage: Int, $sort: [MediaSort], $search: String, $licensedBy: String) {
    Page(page: $page, perPage: $perPage) {
      media(licensedBy: $licensedBy, status: $status, isAdult: $isAdult, genre: $genre, sort: $sort, search: $search) {
        title {
          english
          native
        }
        coverImage {
          large
        }
        genres
        averageScore
        id
      }
    }
  }
`;

export const GET_ANI_GENRE = gql`
  query Query {
    GenreCollection
  }
`;

export const airingTypes = ['any', 'RELEASING', 'FINISHED', 'NOT_YET_RELEASED', 'CANCELLED', 'HIATUS'];

export const streamingSites = [
  'any',
  'Crunchyroll',
  'Hulu',
  'Funimation',
  'Netflix',
  'YouTube',
  'HIDIVE',
  'Amazon',
  'Vimeo',
  'VRV',
  'HBO Max',
  'Wakanim',
  'RetroCrush',
  'Adult Swim',
  'Japanese Film Archives',
  'Tubi TV',
  'Sony Crackle',
  'AsianCrush',
  'Midnight Pulp',
  'CONtv',
  'Fakku',
  'Bilibili',
  'Disney Plus',
  'Bilibili TV',
  'Tencent Video',
  'iQ',
  'Youku',
  'WeTV',
  'Niconico Video',
  'Rooster Teeth',
  'iQlYl',
];
