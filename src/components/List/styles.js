import styled from 'styled-components';

export const ListWrapper = styled.div`
  padding: 0 14px;
  height: 100%;

  flex: 0 0 320px;

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }
`;
