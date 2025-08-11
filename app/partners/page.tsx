"use client"
import Image from "next/image";
import Hero from "../components/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Footer from "../components/Footer";

const duplicatedImages = [
  "/partner.png",
  "/partner.png",
  "/partner.png",
  "/partner.png",
  "/partner.png",
  "/partner.png",
  "/partner.png",
  "/partner.png",
  "/partner.png",
  "/partner.png",
  "/partner.png",
  "/partner.png",
  "/partner.png",
  "/partner.png",
  "/partner.png",
  "/partner.png",
  "/partner.png",
  "/partner.png",
  "/partner.png",
  "/partner.png",
];
const Partners = () => {
  return (
    <>
      <div className="pb-[100px]">
        <Hero
          title=" Years of Partnerships & Impact"
          description="Our journey has been powered by visionary partners who believe in innovation, entrepreneurship, and the future of technology in Northern Nigeria."
        />

        <div className="my-[75px] px-5 flex-col lg:flex-row container mx-auto flex justify-between items-center gap-10 lg:gap-[70px]">
          <div className="lg:w-1/2 text-center text-[#000000A6] lg:text-left lg:text-[24px]">
            <p>
              Over the past decade, nHub has thrived because of the unwavering
              support of our partner, organizations, institutions, and
              individuals committed to driving innovation, entrepreneurship, and
              digital transformation in Northern Nigeria.
            </p>{" "}
            <br />
            <br className="hidden lg:block" />
            <p>
              As we celebrate 10 years of impact, we honor those who have walked
              this journey with us, supporting programs, sponsoring events,
              mentoring startups, and helping us scale our mission.
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image
              src={"/partners.png"}
              alt="partners"
              width={630}
              height={320}
              className="w-full"
            />
          </div>
        </div>

        <div className="mt-10 lg:mt-[90px] flex flex-col gap-10 lg:gap-[70px] justify-center items-center">
          <div className="text-center space-y-4 px-5">
            <h2 className="text-[36px] lg:text-[45px] font-medium">
              Strategic Partners
            </h2>
            <p className="text-[#000000A6] lg:text-[24px]">
              These organizations have played a pivotal role in shaping our{" "}
              <br className="hidden lg:block" />
              ecosystem and championing tech growth over the past decade.
            </p>
          </div>

          <div className="w-full bg-white relative -mt-1 overflow-x-hidden h-full">
            <Swiper
              modules={[Autoplay, FreeMode]}
              loop={true}
              speed={4500}
              freeMode={true}
              // freeModeMomentum={false}
              slidesPerView="auto"
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
            >
              {duplicatedImages.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className="!w-[150px] lg:!w-[200px] flex-shrink-0 mx-1"
                >
                  <Image
                    loading="lazy"
                    src={image}
                    alt={`Slide ${index}`}
                    className="w-full h-auto object-contain"
                    width={100}
                    height={100}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="mt-10 lg:mt-[90px] flex flex-col gap-10 lg:gap-[70px] justify-center items-center">
          <div className="text-center space-y-4 px-5">
            <h2 className="text-[36px] lg:text-[45px] font-medium">
              Event Sponsors
            </h2>
            <p className="text-[#000000A6] lg:text-[24px]">
              Hackjos 2025 and nHub anniversary celebration is made <br  className="hidden lg:block"/>{" "}
              possible through the generous support of our sponsors.
            </p>
          </div>

          <div className="w-full bg-white relative -mt-1 overflow-x-hidden h-full">
            <Swiper
              modules={[Autoplay, FreeMode]}
              loop={true}
              speed={4500}
              freeMode={true}
              // freeModeMomentum={false}
              slidesPerView="auto"
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
            >
              {duplicatedImages.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className="!w-[150px] lg:!w-[200px] flex-shrink-0 mx-1"
                >
                  <Image
                    loading="lazy"
                    src={image}
                    alt={`Slide ${index}`}
                    className="w-full h-auto object-contain"
                    width={100}
                    height={100}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="mt-10 lg:mt-[160px] mb-10 lg:mb-[80px] flex justify-center items-center mx-auto px-5">
          <div className="lg:w-[50%] shadow-lg rounded-[20px] p-6 flex flex-col items-center gap-[30px]">
            <div className="space-y-6">
              <h1 className="text-center text-[36px] lg:text-[45px] font-[500]">
                Join Our Mission
              </h1>
              <p className="text-center text-[#000000A6] lg:text-[22px]">
                We're always looking for passionate individuals who share our
                vision of transforming technology. If you're interested in
                making a difference, we'd love to hear from you.
              </p>
            </div>

            <button className="bg-[#33C36C] rounded-[20px] h-[50px] lg:h-[65px] px-[56px] flex justify-center items-center gap-3 text-white font-medium lg:text-[20px]">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V17.25C2.75 18.9069 4.09315 20.25 5.75 20.25H18.25C19.9069 20.25 21.25 18.9069 21.25 17.25V7.75C21.25 6.09315 19.9069 4.75 18.25 4.75Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.75 8.5L11.165 12.366C11.4269 12.4863 11.7118 12.5486 12 12.5486C12.2882 12.5486 12.5731 12.4863 12.835 12.366L21.25 8.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Partners;
