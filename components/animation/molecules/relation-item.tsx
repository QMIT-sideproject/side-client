import styled from '@emotion/styled';
import Image from '../atoms/image';
import { AnimationDetailType, AnimationRelationType } from '../templates/detail-query';

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
  };
}

const RelationItem = ({ relationType, node }: Props) => {
  return (
    <RelationItemContainer key={node.id}>
      <Image imgUrl={node.coverImage.large} alt="커버 이미지" />
      <RelationType>{relationType}</RelationType>
    </RelationItemContainer>
  );
};

const RelationItemContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  cursor: pointer;
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
