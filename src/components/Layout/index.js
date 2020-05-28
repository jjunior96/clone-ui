import React from 'react';

import Header from '../Header';

import GlobalStyle from '../../styles/global';
import * as S from './styles';

const Layout = () => {
  return (
    <>
      <Header />
      <S.LayoutWrapper>
        <h1>Testando 1</h1>
        <GlobalStyle />
      </S.LayoutWrapper>
    </>
  );
};

export default Layout;
