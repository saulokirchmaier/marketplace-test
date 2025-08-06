import Image from "next/image";
import styled from "styled-components";
import { P } from "./P";

interface CardProps {
  $imageSrc: string;
  $title: string;
  $rating: number;
  $evaluators: number;
  $availability: string;
  $description: string;
}

const CardContainer = styled.div`
  position: relative;
  width: 300.25px;
  height: 72.68px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const CardIcon = styled.img`
  width: 52px;
  height: 52px;
`;

const CardContent = styled.div`
  width: 100%;
  height: 71.68px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2px;
`;

const CardTitle = styled.p`
  font-size: 13.7px;
  font-weight: 500;
  line-height: 20.3px;
  letter-spacing: 0px;
  font-style: medium;
  vertical-align: middle;
  color: #000000;
`;

const CardRatting = styled.div`
  display: flex;
  direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
`;

export const Card = ({
  $imageSrc,
  $title,
  $rating,
  $evaluators,
  $availability,
  $description,
}: CardProps) => {
  return (
    <CardContainer>
      <CardIcon src={$imageSrc} alt="CardIcon" />
      <CardContent>
        <CardTitle>{$title}</CardTitle>
        <CardRatting>
          <P $size="small" $color="secondary">
            {$rating}
          </P>
          <Image src="/star.svg" alt="star" width={16} height={16} />
          <P $size="small" $color="secondary">
            ({$evaluators})
          </P>
          <P $size="small" $color="secondary">
            •
          </P>
          <P $size="small" $color="secondary">
            {$availability}
          </P>
        </CardRatting>
        <P $size="small" $color="secondary">
          {$description}
        </P>
      </CardContent>
    </CardContainer>
  );
};
