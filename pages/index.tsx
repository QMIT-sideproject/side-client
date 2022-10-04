import type { NextPage } from 'next';
import styled from '@emotion/styled';
import MainLayout from '../components/mainpage/templates/layout-main';

const MainpageWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const MainPage: NextPage = () => {
  return (
    <MainpageWrapper>
      <MainLayout />
    </MainpageWrapper>
  );
};

export default MainPage;
