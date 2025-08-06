import styled from "styled-components";

import data from "@/data/treanding.json";
import { P } from "../ui/P";
import { Card } from "../ui/Card";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24.37px;
  width: 100%;
  height: 314px;
  max-width: 1297px;
  margin: 0 auto;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: start;
  gap: 20px 10px;
  width: 100%;

  @media (max-width: 1439px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
