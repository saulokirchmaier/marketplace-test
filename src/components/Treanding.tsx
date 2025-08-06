import styled from "styled-components";

import data from "@/data/treanding.json";
import { Card } from "./ui/Card";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24.37px;
  width: 100%;
  min-height: 314px;
  max-width: 1297px;
  margin: 0 auto;
  
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
  color: #000000;
`;

export const TreandingSection = () => {
  return (
    <Container>
      <Title>Trending this May</Title>
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
    </Container>
  );
};
