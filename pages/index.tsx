import type { NextPage } from 'next';
import MainLayout from '../components/mainpage/templates/layout-main';
import { useGetAnimations } from 'hooks/get-animations';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { DataType } from 'components/mainpage/templates/main-query';

const MainpageWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const MainPage: NextPage = () => {
  const { data, loading, error } = useGetAnimations(1);

  return (
    <MainpageWrapper>
      <MainLayout data={data} loading={loading} error={error} />
    </MainpageWrapper>
  );
};

export default MainPage;
