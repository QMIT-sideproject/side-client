import styled from '@emotion/styled';
import Link from 'next/link';
import Image from '../atoms/image';
import { AnimationRelationType } from '../templates/detail-query';
import AnimationPopup from './animation-popup';

interface Props {
  relationType: AnimationRelationType;
  node: {
    id: number;
    title: {
      english: string;
    };
    coverImage: {
      large: string;
    };
    averageScore: number;
    genres: string[];
  };
}

const RelationItem = ({ relationType, node }: Props) => {
  return (
    <RelationItemContainer>
      <Link href={`/animation/${node.id}`}>
        <a>
          <ReloationCoverWrapper>
            <Image imgUrl={node.coverImage.large} alt="relation-cover" />
          </ReloationCoverWrapper>
          <RelationType>{relationType}</RelationType>
        </a>
      </Link>
      <AnimationPopup position="160" title={node.title.english} score={node.averageScore} genreList={node.genres} />
    </RelationItemContainer>
  );
};

const RelationItemContainer = styled.div`
  cursor: pointer;

  position: relative;
  &:hover .popup {
    opacity: 1;
  }
`;

const ReloationCoverWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const RelationType = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 10px 0;
  text-align: center;
  font-size: 14px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
`;

export default RelationItem;
