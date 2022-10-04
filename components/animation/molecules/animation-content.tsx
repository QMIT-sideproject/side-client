import styled from '@emotion/styled';
import AnimationDescription from '../atoms/animation-description';
import AnimationTitle from '../atoms/animation-title';

interface AnimationContentProps {
  title: string;
  description: string;
}

const AnimationContent = ({ title, description }: AnimationContentProps) => {
  return (
    <ContentLayout>
      <AnimationTitle title={title} />
      <AnimationDescription description={description} />
    </ContentLayout>
  );
};

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export default AnimationContent;
