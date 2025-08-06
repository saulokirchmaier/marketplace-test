import { ReactNode } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface CarouselProps {
  children: ReactNode[];
}

const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding: 0 calc((100% - 901px) / 2);

  .swiper-slide {
    transition: opacity 0.3s ease;
    opacity: 0.62;

    &.swiper-slide-active {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    padding: 0 calc((100% - 700px) / 2);
  }

  @media (max-width: 768px) {
    padding: 0 calc((100% - 500px) / 2);
  }

  @media (max-width: 480px) {
    padding: 0 calc((100% - 300px) / 2);
  }
`;

export const Carousel = ({ children }: CarouselProps) => {
  return (
    <StyledSwiper
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      spaceBetween={20}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index} style={{ width: "fit-content" }}>
          {child}
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};