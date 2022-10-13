import styled from '@emotion/styled';
import Text from '../atoms/text';

interface Props {
  label: string;
  value: string;
}

const AdditionalInfo = ({ label, value }: Props) => {
  return (
    <AdditionalInfoContainer>
      <InfoLabel>{label}</InfoLabel>
      <InfoText>{value.replaceAll('_', ' ')}</InfoText>
    </AdditionalInfoContainer>
  );
};

const AdditionalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InfoLabel = styled(Text)`
  font-weight: bold;
  color: #000;
`;

const InfoText = styled(Text)`
  color: #777;
`;

export default AdditionalInfo;
