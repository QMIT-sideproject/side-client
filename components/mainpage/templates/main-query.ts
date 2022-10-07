import { gql } from '@apollo/client';

export interface AniType {
  title: {
    english: string;
  };
  coverImage: {
    large: string;
  };
  id: number;
}

export interface DataType {
  Page: {
    media: AniType[];
  };
}

export interface VariablesType {
  page: number;
  perPage: number;
  sort: string;
  search: string | string[] | undefined
}

export const GET_TRENDING_ANI_LIST = gql`
query ($page: Int, $perPage: Int, $search: String, $sort: [MediaSort]) {
  Page(page: $page, perPage: $perPage) {
    media(search: $search, sort: $sort) {
      title {
        english
      }
      coverImage {
        large
      }
      id
    }
  }
}
`;