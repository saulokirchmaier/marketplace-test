import styled from "styled-components";
import { DemoBox } from "../DemoBox";
import { Carousel } from "../ui/Carousel";

const Container = styled.div`
  padding: 41.5px 0;
  max-height: 779px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  z-index: 10;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const HeroSection = () => {
  return (
    <div>
      <Container>
        <Carousel>
          <DemoBox
            $mainImageSrc="/image-321.png"
            $imageSrc="/ceaser-checkouts.png"
            $title="Caesar Checkouts"
            $rating={4.5}
            $evaluators={24}
            $availability="Free trial available"
            $description="North America's lowest transaction fees. Powering 500+ businesses."
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
        </Carousel>
      </Container>
    </div>
  );
};
