import { gql } from '@apollo/client';

enum AnimationStatus {
  'FINISHED',
  'RELEASING',
  'NOT_YET_RELEASED',
  'CANCELLED',
  'HIATUS',
}

enum AnimationRelationType {
  'ADAPTATION',
  'PREQUEL',
  'SEQUEL',
  'PARENT',
  'SIDE_STORY',
  'CHARACTER',
  'SUMMARY',
  'ALTERNATIVE',
  'SPIN_OFF',
  'OTHER',
  'SOURCE',
  'COMPILATION',
  'CONTAINS',
}

type Status = keyof typeof AnimationStatus;

type RelationType = keyof typeof AnimationRelationType;

export interface AnimationDetailType {
  id: number;
  title: {
    english: string;
  };
  description: string;
  bannerImage: string;
  coverImage: {
    large: string;
  };

  status: Status;
  genres: string[];
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  endDate: {
    year: number;
    month: number;
    day: number;
  };
  episodes: number;
  relations: {
    edges: [
      relatonType: RelationType,
      node: {
        id: number;
        title: {
          english: string;
        };
        description: string;
        coverImage: {
          large: string;
        };
        bannerImage: string;
        trailer: {
          id: string;
          site: string;
        };
      },
    ];
  };
}

export interface AnimationDetailData {
  Media: AnimationDetailType;
}

export interface AnimationDetailVars {
  mediaId: number | undefined;
  version: number;
}

export const GET_ANIMATION_DETAIL = gql`
  query Media($mediaId: Int, $version: Int) {
    Media(id: $mediaId) {
      id
      title {
        english
      }
      description
      bannerImage
      coverImage {
        large
      }
      status
      genres
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      episodes
      relations {
        edges {
          relationType(version: $version)
          node {
            id
            title {
              english
            }
            description
            coverImage {
              large
            }
            bannerImage
            trailer {
              id
              site
            }
          }
        }
      }
    }
  }
`;
