import { ReactNode } from 'react';

interface Props {
  children: string | ReactNode;
}

const Text = ({ ...props }: Props) => {
  return <div {...props} />;
};

export default Text;
