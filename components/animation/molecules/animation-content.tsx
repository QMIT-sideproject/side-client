import styled from '@emotion/styled';
import parse from 'html-react-parser';
import SubTitle from '../atoms/subtitle';
import Text from '../atoms/text';

interface Props {
  title: string;
  description: string;
}

const AnimationContent = ({ title, description }: Props) => {
  return (
    <AnimationContentContainer>
      <AnimationTitle>{title}</AnimationTitle>
      <AnimationDescription>{parse(description)}</AnimationDescription>
    </AnimationContentContainer>
  );
};

const AnimationContentContainer = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
`;

const AnimationTitle = styled(SubTitle)`
  margin-bottom: 20px;
`;

const AnimationDescription = styled(Text)`
  font-size: 18px;
  color: #777;
  line-height: 24px;
`;

export default AnimationContent;
