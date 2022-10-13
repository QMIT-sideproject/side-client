import ImageComponent from 'next/image';

interface Props {
  imgUrl: string;
  alt: string;
}

const Image = ({ imgUrl, alt }: Props) => {
  return <ImageComponent src={imgUrl} alt={alt} layout="fill" objectFit="cover" />;
};

export default Image;
