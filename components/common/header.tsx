import styled from '@emotion/styled';
import Link from 'next/link';

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <span>⍮⍮⍮⍮⍮⍮⍮</span>
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
  background-color: #edb5da;
  & span {
    font-size: 25px;
    color: white;
    cursor: pointer;
  }
`;

export default Header;
