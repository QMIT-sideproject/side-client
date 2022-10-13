interface Props {
  name: string;
}

const Name = ({ name }: Props) => {
  return <span style={{ fontSize: '15px' }}>{name}</span>;
};

export default Name;
