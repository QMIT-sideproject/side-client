import Image from 'next/image';

interface Props {
  img: string;
  width: string;
  height: string;
}

const Img = ({ img, width, height }: Props) => {
  return <Image src={img} alt="" width={width} height={height} />;
};

export default Img;
