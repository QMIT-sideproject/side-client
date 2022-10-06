interface Props {
  children: string;
}

const SubTitle = ({ ...props }: Props) => {
  return <h2 {...props} />;
};

export default SubTitle;
