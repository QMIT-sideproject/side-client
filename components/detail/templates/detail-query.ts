import { gql } from '@apollo/client';

type AnimationStatus = 'FINISHED' | 'RELEASING' | 'NOT_YET_RELEASED' | 'CANCELLED' | 'HIATUS';

export type AnimationRelationType =
  | 'ADAPTATION'
  | 'PREQUEL'
  | 'SEQUEL'
  | 'PARENT'
  | 'SIDE_STORY'
  | 'CHARACTER'
  | 'SUMMARY'
  | 'ALTERNATIVE'
  | 'SPIN_OFF'
  | 'OTHER'
  | 'SOURCE'
  | 'COMPILATION'
  | 'CONTAINS';

export interface AnimationDetailType {
  id: number;
  title: {
    english: string;
    native: string;
  };
  description: string;
  bannerImage: string;
  coverImage: {
    large: string;
  };

  status: AnimationStatus;
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
  averageScore: number;
  episodes: number;
  stats: {
    scoreDistribution: [
      {
        score: number;
        amount: number;
      },
    ];
    statusDistribution: [
      {
        status: string;
        amount: number;
      },
    ];
  };
  relations: {
    edges: [
      {
        relationType: AnimationRelationType;
        node: {
          id: number;
          title: {
            english: string;
            native: string;
          };
          coverImage: {
            large: string;
          };
          averageScore: number;
          genres: string[];
        };
      },
    ];
  };
  recommendations: {
    nodes: [
      {
        id: number;
        mediaRecommendation: {
          id: number;
          title: {
            english: string;
            native: string;
          };
          coverImage: {
            large: string;
          };
          averageScore: number;
          genres: string[];
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
  page: number;
  perPage: number;
}

export const GET_ANIMATION_DETAIL = gql`
  query Media($mediaId: Int, $version: Int, $page: Int, $perPage: Int) {
    Media(id: $mediaId) {
      id
      title {
        english
        native
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
      averageScore
      episodes
      stats {
        scoreDistribution {
          score
          amount
        }
        statusDistribution {
          status
          amount
        }
      }
      relations {
        edges {
          relationType(version: $version)
          node {
            id
            title {
              english
              native
            }
            coverImage {
              large
            }
            averageScore
            genres
          }
        }
      }
      recommendations(page: $page, perPage: $perPage) {
        nodes {
          id
          mediaRecommendation {
            id
            title {
              english
              native
            }
            coverImage {
              large
            }
            averageScore
            genres
          }
        }
      }
    }
  }
`;
