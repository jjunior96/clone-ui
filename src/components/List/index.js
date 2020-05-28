import React from 'react';

import { MdAdd } from 'react-icons/md';

import * as S from './styles';

const List = () => {
  return (
    <S.ListWrapper>
      <h2>Tarefas</h2>
      <button type="button">
        <MdAdd size={24} color="FFF" />
      </button>
    </S.ListWrapper>
  );
};

export default List;
