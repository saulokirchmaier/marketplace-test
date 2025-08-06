import styled from "styled-components";
import { DemoBox } from "../DemoBox";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 41.5px;
  height: 779px;
  width: 100%;
  z-index: 10;
`;

export const HeroSection = () => {
  return (
    <Container>
      <DemoBox
        $mainImageSrc="/image-321.png"
        $imageSrc="/ceaser-checkouts.png"
        $title="Caesar Checkouts"
        $rating={4.5}
        $evaluators={24}
        $availability="Free trial available"
        $description="North America's lowest transaction fees. Powering 500+ businesses."
        $disabled={true}
      />
      <DemoBox
        $mainImageSrc="/image-319.png"
        $imageSrc="/ceaser-checkouts.png"
        $title="Caesar Checkouts"
        $rating={4.5}
        $evaluators={24}
        $availability="Free trial available"
        $description="North America's lowest transaction fees. Powering 500+ businesses."
      />
      <DemoBox
        $mainImageSrc="/image-318.png"
        $imageSrc="/ceaser-checkouts.png"
        $title="Caesar Checkouts"
        $rating={4.5}
        $evaluators={24}
        $availability="Free trial available"
        $description="North America's lowest transaction fees. Powering 500+ businesses."
      />
    </Container>
  );
};
