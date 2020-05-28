import React from 'react';

import List from '../List';

import * as S from './styles';

const Board = () => {
  return (
    <S.BoardWrapper>
      <h1>Board</h1>
      <List />
    </S.BoardWrapper>
  );
};

export default Board;
