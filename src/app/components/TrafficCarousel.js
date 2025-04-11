import Slider from 'react-slick';
import TrafficImageFade from './utils/TrafficImageFade';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function TrafficCarousel() {
  const slides = [
    {
      imageSrc: '/prob-3-image.png',
      heading: 'Air Pollution',
      description:
        'India continues to grapple with air pollution, with approximately 1.3 billion, or 96% of its population, exposed to PM2.5 levels, seven times more than WHO’s guidelines.',
      largeNumber: '1',
    },
    {
      imageSrc: '/prob-2-image.png',
      heading: 'UK Traffic',
      description:
        'London’s roads have the most congestion in the world. Last year drivers in the city spent an average of 156 hours stuck in traffic.',
      largeNumber: '2',
    },
    {
      imageSrc: '/prob-1-image.png',
      heading: 'Traffic congestion in India',
      description:
        'Traffic congestion remains a significant challenge in India’s urban areas, with overcrowded roads, long commute times, and inadequate public transport.',
      largeNumber: '3',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
    cssEase: 'ease-in-out',
    customPaging: () => (
      <div
        style={{
          width: '2.4rem',
          height: '0.6rem',
          backgroundColor: '#f97316', // orange-400
          opacity: 0.5,
          borderRadius: '0.2rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
      />
    ),
    appendDots: dots => (
      <ul
        style={{
          position: 'relative', // ⬅️ fixed to viewport, not carousel
          bottom: '2rem',
          left: '40rem',
          display: 'flex',
          gap: '0.8rem',
          zIndex: 50,
          backgroundColor: 'transparent',
          padding: '0.5rem 0.75rem',
          borderRadius: '0.5rem',
          listStyle: 'none',
          margin: 0,
        }}
      >
        {dots}
      </ul>
    ),
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-screen h-screen">
            <TrafficImageFade
              imageSrc={slide.imageSrc}
              heading={slide.heading}
              description={slide.description}
              largeNumber={slide.largeNumber}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
