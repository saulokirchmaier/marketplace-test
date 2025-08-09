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
  margin-top: 4px;
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

const CardRatting = styled.div`
  display: flex;
  direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
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
        <CardRatting>
          {$rating && (
            <>
              <P $size="small" $color="secondary">
                {$rating}
              </P>
              <Image src="/star.svg" alt="star" width={11.99} height={11.07} />
              <P $size="small" $color="secondary">
                ({$evaluators})
              </P>
              <P $size="small" $color="secondary">
                •
              </P>
            </>
          )}
          <P $size="small" $color="secondary">
            {$availability}
          </P>
        </CardRatting>
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
