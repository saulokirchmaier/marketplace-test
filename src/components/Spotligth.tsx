import styled from "styled-components";

import data from "@/data/spotlight.json";
import { Card } from "./ui/Card";
import { Box } from "./ui/Box";
import { P } from "./ui/P";
import { Link } from "./ui/Link";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 24.37px;
  width: 100%;
  max-width: 1297px;
  margin: 10px auto;
  
  @media (max-width: 1439px) {
    padding: 20px 40px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  font-size: 22.5px;
  font-weight: 700;
  line-height: 28.75px;
  letter-spacing: -0.23px;
  vertical-align: middle;
`;

const FeaturedBox = styled.div`
  width: 100%;
  max-width: 636.5px;
  height: 100%;
  max-height: 272.1px;
  padding: 24px;
  background-color: #A689FA;
  border-radius: 8px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 0 0 24px 24px;

  @media (max-width: 768px) {
    width: 318.25px;
    max-height: none;
    height: auto;
    padding: 24px;
    flex-direction: column;
    gap: 24px;
  }
`;

const FeaturedContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  padding-top: 24px;

  @media (max-width: 768px) {
    padding-top: 0;
  }
`;

const FeaturedImage = styled.img`
  width: 100%;
  max-width: 318.25px;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
  }
`;


export const Spotlight = () => {
  return (
    <Container>
      <Box $direction="column" $alignItems="flex-start" $gap={24.37} style={{ flex: 1 }}>
        <Title>In the spotlight</Title>
        <Content>
          {data.map((item, index) => (
            <Card
              key={index}
              $imageSrc={item.imageSrc}
              $title={item.title}
              $rating={item.rating}
              $evaluators={item.evaluators}
              $availability={item.availability}
              $description={item.description}
              $build={item.build}
            />
          ))}
        </Content>
      </Box>
      <FeaturedBox>
        <FeaturedContent>
          <Box $direction="column" $gap={16} $alignItems="flex-start" $justifyContent="flex-start">
            <P $size="large">Featured app</P>
            <P $size="extraLarge">Help customers find the right fit with size charts and guides.</P>
          </Box>
          <Box $direction="column" $gap={16} $alignItems="flex-start" $justifyContent="flex-end">
          </Box>
          <Link $size="medium">{`Give them credit >`}</Link>
        </FeaturedContent>
        <FeaturedImage src="/spotlight/featured.png" />
      </FeaturedBox>
    </Container>
  );
};
