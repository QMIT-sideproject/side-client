import styled from '@emotion/styled';
import Image from 'next/image';

interface Props {
  cover: string;
}

const RelationItemCover = ({ cover }: Props) => {
  return <Image src={cover} alt="커버 이미지" layout="fill" />;
};

export default RelationItemCover;
