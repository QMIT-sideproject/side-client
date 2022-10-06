import LinkComponent from 'next/link';

interface Props {
  href: string;
  children: string;
}

const Link = ({ href, ...props }: Props) => {
  return (
    <LinkComponent href={href}>
      <a {...props} />
    </LinkComponent>
  );
};

export default Link;
