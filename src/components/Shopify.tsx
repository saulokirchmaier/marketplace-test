import Image from "next/image";
import styled from "styled-components";

import data from "@/data/popular-shopify.json";
import { Card } from "./ui/Card";
import { Box } from "./ui/Box";
import { P } from "./ui/P";
import { Link } from "./ui/Link";
import { ArrowRight } from "./ui/Arrow-right";

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

const GuideBox = styled.div`
  width: 318.25px;
  min-height: 262.38px;
  padding: 24px;
  background-color: #FF7578;
  border-radius: 8px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Shopify = () => {
  return (
    <Container>
      <Box $direction="column" $alignItems="flex-start" $gap={24.37} style={{ flex: 1 }}>
        <Title>Popular with merchants across Shopify</Title>
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
      <GuideBox>
        <Box $direction="column" $gap={16} $alignItems="flex-start" $justifyContent="flex-start">
          <P $size="large">Guide</P>
          <P $size="extraLarge">Bring customers back with apps that let you get creative with store credit.</P>
        </Box>
        <Box $alignItems="center" $direction="row" $gap={8} $justifyContent="flex-start">
          <Link $size="medium">Give them credit</Link>
          <ArrowRight />
        </Box>
      </GuideBox>
    </Container>
  );
};
