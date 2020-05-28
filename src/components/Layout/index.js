import React from 'react';

import Header from '../Header';
import Board from '../Board';

import GlobalStyle from '../../styles/global';
import * as S from './styles';

const Layout = () => {
  return (
    <>
      <Header />
      <Board />
      <S.LayoutWrapper>
        <h1>Layout</h1>
        <GlobalStyle />
      </S.LayoutWrapper>
    </>
  );
};

export default Layout;
