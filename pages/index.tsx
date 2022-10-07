import type { NextPage } from 'next';
import MainLayout from '../components/mainpage/templates/layout-main';
import { GetAnimationsHook } from 'hooks/get-animations';
import styled from '@emotion/styled';

const MainpageWrapper = styled.div`
  width : 100%;
  height: 100vh;
`;

const MainPage: NextPage = () => {
  const { data, loading, error } = GetAnimationsHook();

  return (
    <MainpageWrapper>
      <MainLayout data={data} loading={loading} error={error}/>
    </MainpageWrapper>
  );
};

export default MainPage;