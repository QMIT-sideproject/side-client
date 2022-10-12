import styled from '@emotion/styled';

interface Props {
  children: string;
}

const PopupRating = ({ children }: Props) => {
  return <Rating>Average Score : {children}</Rating>;
};

const Rating = styled.div`
  color: #777;
`;

export default PopupRating;
