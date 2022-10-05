import styled from '@emotion/styled';

export const AnimationListItemContainer = styled.div<{ skeleton?: boolean }>`
  cursor: ${(props) => (props.skeleton ? 'default' : 'pointer')};
  width: 185px;
`;
