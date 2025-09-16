import Image from "next/image";
import { useState } from "react";

export const Carousel = () => {
  const [stopScroll, setStopScroll] = useState(false);
  const cardData = [
    {
      title: "Unlock Your Creative Flow",
      image: "/img1.jpg",
    },
    {
      title: "Design Your Digital Future",
      image: "/img2.jpg",
    },
    {
      title: "Build with Passion, Ship with Pride",
      image: "/img3.jpg",
    },
    {
      title: "Think Big, Code Smart",
      image: "/img4.jpg",
    },
    {
      title: "Think Big, Code Smart1",
      image: "/img5.jpg",
    },
    {
      title: "Think Big, Code Smart6",
      image: "/img6.jpg",
    },
  ];

  return (
    <>
      <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

      <div
        className="overflow-hidden w-full relative max-w-6xl mx-auto"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: cardData.length * 2500 + "ms",
          }}
        >
          <div className="flex">
            {[...cardData, ...cardData].map((card, index) => (
              <div
                key={index}
                className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300"
              >
                <Image
                  src={card.image}
                  alt="card"
                  className="w-full h-full object-cover"
                />
                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                  <p className="text-white text-lg font-semibold text-center">
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
      </div>
    </>
  );
};
