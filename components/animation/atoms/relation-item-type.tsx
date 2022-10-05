import styled from '@emotion/styled';

interface Props {
  children?: string;
}

const RelationItemType = ({ children }: Props) => {
  return <StyledRelationItemType>{children}</StyledRelationItemType>;
};

const StyledRelationItemType = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 10px 0;
  text-align: center;
  font-size: 14px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
`;

export default RelationItemType;
