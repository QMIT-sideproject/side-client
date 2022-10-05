import Image from 'next/image';

interface Props {
  cover: string;
}

const AnimationCover = ({ cover }: Props) => {
  return <Image src={cover} alt="커버 이미지" layout="fill" objectFit="cover" />;
};

export default AnimationCover;
