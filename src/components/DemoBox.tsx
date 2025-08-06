import styled from "styled-components";

import { Box } from "./ui/Box";
import { P } from "./ui/P";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

export interface DemoBoxProps {
  $mainImageSrc: string;
  $imageSrc: string;
  $title: string;
  $rating: number;
  $evaluators: number;
  $availability: string;
  $description: string;
  $disabled?: boolean;
}

const DemoBoxContainer = styled(Box) <{ $disabled?: boolean }>`
  min-width: 901px;
  height: 696px;
  border-radius: 50px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  padding: 0;
  ${(props) =>
    props.$disabled &&
    `
    opacity: 63%;
  `}
`;

const DemoBoxImage = styled.div<{ $url: string }>`
  width: 100%;
  height: 572px;
  background-image: url(${(props) => props.$url});
  background-size: cover;
  border-radius: 50px 50px 0 0;
  margin: 0 auto;
`;

const DemoBoxContent = styled(Box)`
  width: 100%;
  max-width: 896px;
  height: 124px;
  padding: 28px 69px 28px 69px;
  background-color: #ffffff;
  border-radius: 0 0 50px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DemoBoxButton = styled(Box)`
  height: 69px;
`;

export const DemoBox: React.FC<DemoBoxProps> = ({
  $mainImageSrc,
  $imageSrc,
  $title,
  $rating,
  $evaluators,
  $availability,
  $description,
  $disabled,
}) => {
  return (
    <DemoBoxContainer $direction="column" $disabled={$disabled}>
      <DemoBoxImage $url={$mainImageSrc} />
      <DemoBoxContent>
        <Card
          $imageSrc={$imageSrc}
          $title={$title}
          $rating={$rating}
          $evaluators={$evaluators}
          $availability={$availability}
          $description={$description}
        />
        <DemoBoxButton
          $direction="column"
          $justifyContent="space-between"
          $alignItems="center"
          $padding={0}
        >
          <Button $disabled={$disabled}>BOOK A DEMO</Button>
          <P $size="small" $color="secondary">
            Third-Party Redirection
          </P>
        </DemoBoxButton>
      </DemoBoxContent>
    </DemoBoxContainer>
  );
};
