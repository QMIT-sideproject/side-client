import { ReactNode } from 'react';
import LinkComponent from 'next/link';

interface Props {
  href: string;
  children: string | ReactNode;
}

const Link = ({ href, children, ...props }: Props) => {
  return (
    <LinkComponent href={href}>
      <a {...props}>{children}</a>
    </LinkComponent>
  );
};

export default Link;
