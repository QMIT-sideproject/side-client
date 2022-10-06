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
}

export const GET_TRENDING_ANI_LIST = gql`
  query ($page: Int, $perPage: Int, $sort: [MediaSort]) {
    Page(page: $page, perPage: $perPage) {
      media(sort: $sort) {
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
