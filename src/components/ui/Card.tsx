import Image from "next/image";
import styled from "styled-components";
import { P } from "./P";

interface CardProps {
  $imageSrc: string;
  $title: string;
  $rating?: number | null;
  $evaluators?: number | null;
  $availability: string;
  $description: string;
  $build?: string | null;
}

const CardContainer = styled.div`
  position: relative;
  width: 300.25px;
  min-height: 72.68px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const CardIcon = styled.img`
  margin-top: 3px;
  width: 52px;
  height: 52px;
`;

const CardContent = styled.div`
  width: 100%;
  min-height: 71.68px;
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
  vertical-align: top;
  color: #000000;
`;

const CardRatting = styled.p`
  display: flex;
  direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  font-style: medium;
  vertical-align: top;
  color: #56524E;
`;

const BuildBox = styled.div`
  height: 19px;
  display: flex;
  direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;
  background-color: #e0f0ff;
  border-radius: 4px;
  padding: 4px;
`;

const BoxStar = styled.span`
  width: 11.99px;
  height: 11.07px;
  display: flex;
  direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Card = ({
  $imageSrc,
  $title,
  $rating,
  $evaluators,
  $availability,
  $description,
  $build,
}: CardProps) => {
  return (
    <CardContainer>
      <CardIcon src={$imageSrc} alt="CardIcon" />
      <CardContent>
        <CardTitle>{$title}</CardTitle>
        {$rating && (
          <CardRatting>
            <span>
              {$rating}
            </span>
            <BoxStar>
              <Image src="/star.svg" alt="star" width={11.99} height={11.07} />
            </BoxStar>
            <span>
              ({$evaluators})
            </span>
            <span>
              •
            </span>
            <span>
              {$availability}
            </span>
          </CardRatting>
        )}
        <P $size="small" $color="secondary">
          {$description}
        </P>
        {$build && (
          <BuildBox>
            <Image src="/diamond.png" alt="build" width={10.29} height={9} />
            <P $size="small" $color="secondary">
              {$build}
            </P>
          </BuildBox>
        )}
      </CardContent>
    </CardContainer>
  );
};
