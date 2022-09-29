import type { NextPage } from 'next';
import styled from '@emotion/styled';
import MainLayout from '../components/mainpage/templates/layout-main';

const MainpageContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const MainPage: NextPage = () => {
  return (
    <MainpageContainer>
      <MainLayout />
    </MainpageContainer>
  );
};

export default MainPage;
