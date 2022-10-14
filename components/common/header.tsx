import styled from '@emotion/styled';
import Link from 'next/link';

interface Props {
  main?: boolean;
}

const Header = ({ main }: Props) => {
  if (main) {
    return (
      <MainpageHeaderContainer>
        <Link href="/">
          <span>Animation</span>
        </Link>
      </MainpageHeaderContainer>
    );
  }
  return (
    <HeaderContainer>
      <Link href="/">
        <span>Animation</span>
      </Link>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 230px;
  margin-bottom: 80px;
  background-color: #24292f;
  position: absolute;
  top: 0;
  opacity: 0.2;
  & span {
    font-weight: bold;
    font-size: 25px;
    color: white;
    cursor: pointer;
  }
  transition: 0.5s;
  :hover {
    opacity: 0.8;
  }
`;

const MainpageHeaderContainer = styled(HeaderContainer)`
  opacity: 1;
  :hover {
    opacity: 1;
  }
`;

export default Header;
