import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';


import "./Home.scss";

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClickScroll = () => {
    const element = document.getElementById("solutions");
    const headerHeight = document.getElementById("header").offsetHeight;
    if (element) {
      window.scroll({
        top: element.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="wave-animation">
        <Image src="/images/wave-animation.svg" alt="animation" />
      </div>
      <section className="banner-section">
        <div className="top-v-border"></div>
        <div className="banner-content">
          <h1>
            Full Dedicated & Experienced Devel{" "}
            <Image src="/images/icons/pencil-icon.svg" alt="Icon" /> per
          </h1>
          <p>
            Daily position tracking & competitor tracking, anytime, anywhere!
          </p>
          <button
            onClick={handleClickScroll}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="btn"
          >
            Enter The Experience
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 211.6 75.729"
              data-v-7ab2290a=""
            >
              <defs data-v-7ab2290a="">
                <clipPath id="clippy" data-v-7ab2290a="">
                  <rect
                    x="0"
                    y={isHovered ? "0" : "-100%"}
                    width="211.6"
                    height="75.729"
                    data-v-7ab2290a=""
                    style={{
                      transition: "y 0.3s ease",
                    }}
                  ></rect>
                </clipPath>
              </defs>
              <path
                d="M472.41,2695.516h150.52v-61.339l-17.431-12.39H413.329v61.043l17.857,12.686H472.41Z"
                transform="translate(-412.329 -2620.787)"
                strokeMiterlimit="10"
                strokeWidth="2"
                data-v-7ab2290a=""
                style={{ fill: "#000030" }}
              ></path>
              <g clipPath="url(#clippy)" className="clip" data-v-7ab2290a="">
                <path
                  d="M472.41,2695.516h150.52v-61.339l-17.431-12.39H413.329v61.043l17.857,12.686H472.41Z"
                  transform="translate(-412.329 -2620.787)"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  data-v-7ab2290a=""
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </section>

      <section className="our-solutions-section" id="solutions">
        <div className="container">
          <div className="section-title">
            <h2>Our Eminent Solutions</h2>
            <p>
              The exciting part of what we do is delivering creative strategies,
              tactics and approachesthat help our clients grow their business.
              Take a look at some examples below:
            </p>
          </div>
          <Swiper
            modules={[Navigation, Autoplay, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            // navigation={{ clickable: true }}
            navigation={{
              prevEl: ".swiper-custom-button-prev",
              nextEl: ".swiper-custom-button-next",
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            className="solutions-slider"
          >
            <SwiperSlide>
              <div className="slide-item-box">
                <div className="solutions-image">
                  <Image
                    src="/images/microsoft-technologies.svg"
                    alt="Microsoft Technologies"
                  />
                </div>
                <div className="solutions-detail">
                  <h3>Microsoft Technologies</h3>
                  <p>
                    iShivax specialises in Microsoft development and consulting
                    to drive innovation and growth…
                  </p>
                  <Link href="" className="btn btn-arrow">
                    Read More
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14.958"
                        height="11.11"
                        viewBox="0 0 14.958 11.11"
                      >
                        <path
                          d="M8.873,10.891a.749.749,0,0,1,0-1.06L12.4,6.305H.75a.75.75,0,0,1,0-1.5H12.4L8.873,1.281A.75.75,0,1,1,9.933.22l4.805,4.805a.751.751,0,0,1,0,1.061L9.933,10.891a.75.75,0,0,1-1.06,0Z"
                          transform="translate(0 0)"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item-box">
                <div className="solutions-image">
                  <Image
                    src="/images/digital-marketing.svg"
                    alt="Digital Marketing"
                  />
                </div>
                <div className="solutions-detail">
                  <h3>Digital Marketing</h3>
                  <p>
                    iShivax provides Digital Marketing services and virtual
                    assistants that can engage users,…
                  </p>
                  <Link href="" className="btn btn-arrow">
                    Read More
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14.958"
                        height="11.11"
                        viewBox="0 0 14.958 11.11"
                      >
                        <path
                          d="M8.873,10.891a.749.749,0,0,1,0-1.06L12.4,6.305H.75a.75.75,0,0,1,0-1.5H12.4L8.873,1.281A.75.75,0,1,1,9.933.22l4.805,4.805a.751.751,0,0,1,0,1.061L9.933,10.891a.75.75,0,0,1-1.06,0Z"
                          transform="translate(0 0)"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item-box">
                <div className="solutions-image">
                  <Image src="/images/iot.svg" alt="IOT Internet of Things" />
                </div>
                <div className="solutions-detail">
                  <h3>IOT Internet of Things</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's...
                  </p>
                  <Link href="" className="btn btn-arrow">
                    Read More
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14.958"
                        height="11.11"
                        viewBox="0 0 14.958 11.11"
                      >
                        <path
                          d="M8.873,10.891a.749.749,0,0,1,0-1.06L12.4,6.305H.75a.75.75,0,0,1,0-1.5H12.4L8.873,1.281A.75.75,0,1,1,9.933.22l4.805,4.805a.751.751,0,0,1,0,1.061L9.933,10.891a.75.75,0,0,1-1.06,0Z"
                          transform="translate(0 0)"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item-box">
                <div className="solutions-image">
                  <Image
                    src="/images/app-development.svg"
                    alt="App Development"
                  />
                </div>
                <div className="solutions-detail">
                  <h3>App Development</h3>
                  <p>
                    We harness the latest technologies, tools, frameworks and
                    SDKs to develop custom…
                  </p>
                  <Link href="" className="btn btn-arrow">
                    Read More
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14.958"
                        height="11.11"
                        viewBox="0 0 14.958 11.11"
                      >
                        <path
                          d="M8.873,10.891a.749.749,0,0,1,0-1.06L12.4,6.305H.75a.75.75,0,0,1,0-1.5H12.4L8.873,1.281A.75.75,0,1,1,9.933.22l4.805,4.805a.751.751,0,0,1,0,1.061L9.933,10.891a.75.75,0,0,1-1.06,0Z"
                          transform="translate(0 0)"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item-box">
                <div className="solutions-image">
                  <Image src="/images/web-designing.svg" alt="Web Designing" />
                </div>
                <div className="solutions-detail">
                  <h3>Web Designing</h3>
                  <p>
                    iShivax collaborates with start-ups, entrepreneurs &
                    businesses to develop and innovate revolutionary…
                  </p>
                  <Link href="" className="btn btn-arrow">
                    Read More
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14.958"
                        height="11.11"
                        viewBox="0 0 14.958 11.11"
                      >
                        <path
                          d="M8.873,10.891a.749.749,0,0,1,0-1.06L12.4,6.305H.75a.75.75,0,0,1,0-1.5H12.4L8.873,1.281A.75.75,0,1,1,9.933.22l4.805,4.805a.751.751,0,0,1,0,1.061L9.933,10.891a.75.75,0,0,1-1.06,0Z"
                          transform="translate(0 0)"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item-box">
                <div className="solutions-image">
                  <Image src="/images/automation.svg" alt="Automation" />
                </div>
                <div className="solutions-detail">
                  <h3>Automation</h3>
                  <p>
                    iShivax collaborates with start-ups, entrepreneurs &
                    businesses to develop and innovate revolutionary…
                  </p>
                  <Link href="" className="btn btn-arrow">
                    Read More
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14.958"
                        height="11.11"
                        viewBox="0 0 14.958 11.11"
                      >
                        <path
                          d="M8.873,10.891a.749.749,0,0,1,0-1.06L12.4,6.305H.75a.75.75,0,0,1,0-1.5H12.4L8.873,1.281A.75.75,0,1,1,9.933.22l4.805,4.805a.751.751,0,0,1,0,1.061L9.933,10.891a.75.75,0,0,1-1.06,0Z"
                          transform="translate(0 0)"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item-box">
                <div className="solutions-image">
                  <Image src="/images/crm-services.svg" alt="CRM Services" />
                </div>
                <div className="solutions-detail">
                  <h3>CRM Services</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's...
                  </p>
                  <Link href="" className="btn btn-arrow">
                    Read More
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14.958"
                        height="11.11"
                        viewBox="0 0 14.958 11.11"
                      >
                        <path
                          d="M8.873,10.891a.749.749,0,0,1,0-1.06L12.4,6.305H.75a.75.75,0,0,1,0-1.5H12.4L8.873,1.281A.75.75,0,1,1,9.933.22l4.805,4.805a.751.751,0,0,1,0,1.061L9.933,10.891a.75.75,0,0,1-1.06,0Z"
                          transform="translate(0 0)"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item-box">
                <div className="solutions-image">
                  <Image src="/images/consulting.svg" alt="Consulting" />
                </div>
                <div className="solutions-detail">
                  <h3>Consulting</h3>
                  <p>
                    iShivax offers the option to hire a dedicated development
                    team to bridge…
                  </p>
                  <Link href="" className="btn btn-arrow">
                    Read More
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14.958"
                        height="11.11"
                        viewBox="0 0 14.958 11.11"
                      >
                        <path
                          d="M8.873,10.891a.749.749,0,0,1,0-1.06L12.4,6.305H.75a.75.75,0,0,1,0-1.5H12.4L8.873,1.281A.75.75,0,1,1,9.933.22l4.805,4.805a.751.751,0,0,1,0,1.061L9.933,10.891a.75.75,0,0,1-1.06,0Z"
                          transform="translate(0 0)"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <div className="slider-buttons">
              <div className="swiper-custom-button-prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13.542"
                  height="10.099"
                  viewBox="0 0 13.542 10.099"
                >
                  <path
                    d="M7.961,9.879a.75.75,0,0,1,0-1.06L10.981,5.8H.75a.75.75,0,0,1,0-1.5H10.98L7.961,1.281A.75.75,0,0,1,9.023.22l4.3,4.3a.751.751,0,0,1,0,1.061l-4.3,4.3a.751.751,0,0,1-1.061,0Z"
                    transform="translate(13.542 10.099) rotate(-180)"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="swiper-custom-button-next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13.542"
                  height="10.099"
                  viewBox="0 0 13.542 10.099"
                >
                  <path
                    d="M7.961,9.879a.75.75,0,0,1,0-1.06L10.981,5.8H.75a.75.75,0,0,1,0-1.5H10.98L7.961,1.281A.75.75,0,0,1,9.023.22l4.3,4.3a.751.751,0,0,1,0,1.061l-4.3,4.3a.751.751,0,0,1-1.061,0Z"
                    transform="translate(0 0)"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </Swiper>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7">
              <div className="section-title text-left mb-0">
                <h2>
                  Explore What <br /> We Have Done
                </h2>
                <p>
                  Check how ishivax help clients achieve their goals and stay
                  ahead in the digital age.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="our-work-btn">
                <Link to="" className="btn btn-arrow">
                  Our Work
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14.958"
                      height="11.11"
                      viewBox="0 0 14.958 11.11"
                    >
                      <path
                        d="M8.873,10.891a.749.749,0,0,1,0-1.06L12.4,6.305H.75a.75.75,0,0,1,0-1.5H12.4L8.873,1.281A.75.75,0,1,1,9.933.22l4.805,4.805a.751.751,0,0,1,0,1.061L9.933,10.891a.75.75,0,0,1-1.06,0Z"
                        transform="translate(0 0)"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Autoplay, A11y]}
          // spaceBetween={30}
          slidesPerView={3.5}
          slidesPerGroup={1}
          centeredSlides
          loop={true}
          // navigation={{ clickable: true }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          className="our-work-slider"
        >
          <SwiperSlide>
            <div className="design-box-3d">
              <div className="slide-item-box">
                <div className="corner-design">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="portfolio-header">
                  <h3>Landor</h3>
                  <Link to="/" className="portfolio-link-btn">
                    View Live Site
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13.542"
                      height="10.099"
                      viewBox="0 0 13.542 10.099"
                    >
                      <path
                        id="Path_712"
                        data-name="Path 712"
                        d="M7.961,9.879a.75.75,0,0,1,0-1.06L10.981,5.8H.75a.75.75,0,0,1,0-1.5H10.98L7.961,1.281A.75.75,0,0,1,9.023.22l4.3,4.3a.751.751,0,0,1,0,1.061l-4.3,4.3a.751.751,0,0,1-1.061,0Z"
                        transform="translate(0 0)"
                        fill="#fff"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="portfolio-image">
                  <div className="image-wrapper">
                    <Image src="/images/our-work/landor.png" alt="Landor" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="design-box-3d">
              <div className="slide-item-box">
                <div className="corner-design">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="portfolio-header">
                  <h3>Financial Forward</h3>
                  <Link to="/" className="portfolio-link-btn">
                    View Live Site
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13.542"
                      height="10.099"
                      viewBox="0 0 13.542 10.099"
                    >
                      <path
                        id="Path_712"
                        data-name="Path 712"
                        d="M7.961,9.879a.75.75,0,0,1,0-1.06L10.981,5.8H.75a.75.75,0,0,1,0-1.5H10.98L7.961,1.281A.75.75,0,0,1,9.023.22l4.3,4.3a.751.751,0,0,1,0,1.061l-4.3,4.3a.751.751,0,0,1-1.061,0Z"
                        transform="translate(0 0)"
                        fill="#fff"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="portfolio-image">
                  <div className="image-wrapper">
                    <Image
                      src="/images/our-work/financial-forward.png"
                      alt="Financial Forward"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="design-box-3d">
              <div className="slide-item-box">
                <div className="corner-design">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="portfolio-header">
                  <h3>Quilla</h3>
                  <Link to="/" className="portfolio-link-btn">
                    View Live Site
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13.542"
                      height="10.099"
                      viewBox="0 0 13.542 10.099"
                    >
                      <path
                        id="Path_712"
                        data-name="Path 712"
                        d="M7.961,9.879a.75.75,0,0,1,0-1.06L10.981,5.8H.75a.75.75,0,0,1,0-1.5H10.98L7.961,1.281A.75.75,0,0,1,9.023.22l4.3,4.3a.751.751,0,0,1,0,1.061l-4.3,4.3a.751.751,0,0,1-1.061,0Z"
                        transform="translate(0 0)"
                        fill="#fff"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="portfolio-image">
                  <div className="image-wrapper">
                    <Image src="/images/our-work/quilla.png" alt="Quilla" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="design-box-3d">
              <div className="slide-item-box">
                <div className="corner-design">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="portfolio-header">
                  <h3>Quilla</h3>
                  <Link to="/" className="portfolio-link-btn">
                    View Live Site
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13.542"
                      height="10.099"
                      viewBox="0 0 13.542 10.099"
                    >
                      <path
                        id="Path_712"
                        data-name="Path 712"
                        d="M7.961,9.879a.75.75,0,0,1,0-1.06L10.981,5.8H.75a.75.75,0,0,1,0-1.5H10.98L7.961,1.281A.75.75,0,0,1,9.023.22l4.3,4.3a.751.751,0,0,1,0,1.061l-4.3,4.3a.751.751,0,0,1-1.061,0Z"
                        transform="translate(0 0)"
                        fill="#fff"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="portfolio-image">
                  <div className="image-wrapper">
                    <Image src="/images/our-work/quilla.png" alt="Quilla" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="design-box-3d">
              <div className="slide-item-box">
                <div className="corner-design">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="portfolio-header">
                  <h3>Quilla</h3>
                  <Link to="/" className="portfolio-link-btn">
                    View Live Site
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13.542"
                      height="10.099"
                      viewBox="0 0 13.542 10.099"
                    >
                      <path
                        id="Path_712"
                        data-name="Path 712"
                        d="M7.961,9.879a.75.75,0,0,1,0-1.06L10.981,5.8H.75a.75.75,0,0,1,0-1.5H10.98L7.961,1.281A.75.75,0,0,1,9.023.22l4.3,4.3a.751.751,0,0,1,0,1.061l-4.3,4.3a.751.751,0,0,1-1.061,0Z"
                        transform="translate(0 0)"
                        fill="#fff"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="portfolio-image">
                  <div className="image-wrapper">
                    <Image src="/images/our-work/quilla.png" alt="Quilla" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="design-box-3d">
              <div className="slide-item-box">
                <div className="corner-design">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="portfolio-header">
                  <h3>Financial Forward</h3>
                  <Link to="/" className="portfolio-link-btn">
                    View Live Site
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13.542"
                      height="10.099"
                      viewBox="0 0 13.542 10.099"
                    >
                      <path
                        id="Path_712"
                        data-name="Path 712"
                        d="M7.961,9.879a.75.75,0,0,1,0-1.06L10.981,5.8H.75a.75.75,0,0,1,0-1.5H10.98L7.961,1.281A.75.75,0,0,1,9.023.22l4.3,4.3a.751.751,0,0,1,0,1.061l-4.3,4.3a.751.751,0,0,1-1.061,0Z"
                        transform="translate(0 0)"
                        fill="#fff"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="portfolio-image">
                  <div className="image-wrapper">
                    <Image
                      src="/images/our-work/financial-forward.png"
                      alt="Financial Forward"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="client-testimonails-section">
        <div className="container">
          <div className="section-title text-left">
            <h2>
              Hear What Our Clients <br /> Say About Us
            </h2>
          </div>
          <Swiper
            modules={[Navigation, Autoplay, A11y]}
            slidesPerView={1}
            loop={true}
            // navigation={{ clickable: true }}
            navigation={{
              prevEl: ".swiper-custom-button-prev",
              nextEl: ".swiper-custom-button-next",
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            className="client-testimonails-slider"
          >
            <SwiperSlide>
              <div className="slide-item-box">
                <p>
                  “I've been hearing great things about this company as of
                  recent and decided to finally visit your site and I'm
                  impressed! It's well-designed;easy to navigate; and offers
                  plenty of services that I foresee myself using to take my
                  business to the next level. Kudos!”
                </p>
                <div className="star-rating">
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="client-detail">
                  <div className="client-name">
                    <h3>Quincy</h3>
                    <p>Client</p>
                  </div>
                  <div className="client-profile">
                    <span></span>
                    <Image
                      src="/images/client/client-profile.png"
                      alt="Client"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item-box">
                <p>
                  “I've been hearing great things about this company as of
                  recent and decided to finally visit your site and I'm
                  impressed! It's well-designed;easy to navigate; and offers
                  plenty of services that I foresee myself using to take my
                  business to the next level. Kudos!”
                </p>
                <div className="star-rating">
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="client-detail">
                  <div className="client-name">
                    <h3>Quincy</h3>
                    <p>Client</p>
                  </div>
                  <div className="client-profile">
                    <span></span>
                    <Image
                      src="/images/client/client-profile.png"
                      alt="Client"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <div className="slider-buttons">
              <div className="swiper-custom-button-prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13.542"
                  height="10.099"
                  viewBox="0 0 13.542 10.099"
                >
                  <path
                    d="M7.961,9.879a.75.75,0,0,1,0-1.06L10.981,5.8H.75a.75.75,0,0,1,0-1.5H10.98L7.961,1.281A.75.75,0,0,1,9.023.22l4.3,4.3a.751.751,0,0,1,0,1.061l-4.3,4.3a.751.751,0,0,1-1.061,0Z"
                    transform="translate(13.542 10.099) rotate(-180)"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="swiper-custom-button-next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13.542"
                  height="10.099"
                  viewBox="0 0 13.542 10.099"
                >
                  <path
                    d="M7.961,9.879a.75.75,0,0,1,0-1.06L10.981,5.8H.75a.75.75,0,0,1,0-1.5H10.98L7.961,1.281A.75.75,0,0,1,9.023.22l4.3,4.3a.751.751,0,0,1,0,1.061l-4.3,4.3a.751.751,0,0,1-1.061,0Z"
                    transform="translate(0 0)"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </Swiper>
        </div>
        <div className="logos-section">
          <div className="logos-slider">
            <div className="logos-slider-left">
              <Image src="/images/logos/spotify.png" alt="Spotify" />
              <Image src="/images/logos/binance.png" alt="Binance" />
              <Image src="/images/logos/amazon.png" alt="Amazon" />
              <Image src="/images/logos/freefire.png" alt="freeFire" />
              <Image src="/images/logos/spike.png" alt="Spike" />
              <Image src="/images/logos/spotify.png" alt="Spotify" />
              <Image src="/images/logos/binance.png" alt="Binance" />
              <Image src="/images/logos/amazon.png" alt="Amazon" />
              <Image src="/images/logos/freefire.png" alt="freeFire" />
              <Image src="/images/logos/spike.png" alt="Spike" />
            </div>
            <div className="logos-slider-left">
              <Image src="/images/logos/spotify.png" alt="Spotify" />
              <Image src="/images/logos/binance.png" alt="Binance" />
              <Image src="/images/logos/amazon.png" alt="Amazon" />
              <Image src="/images/logos/freefire.png" alt="freeFire" />
              <Image src="/images/logos/spike.png" alt="Spike" />
              <Image src="/images/logos/spotify.png" alt="Spotify" />
              <Image src="/images/logos/binance.png" alt="Binance" />
              <Image src="/images/logos/amazon.png" alt="Amazon" />
              <Image src="/images/logos/freefire.png" alt="freeFire" />
              <Image src="/images/logos/spike.png" alt="Spike" />
            </div>
          </div>
          <div className="logos-slider2">
            <div className="logos-slider-right">
              <Image src="/images/logos/spotify.png" alt="Spotify" />
              <Image src="/images/logos/binance.png" alt="Binance" />
              <Image src="/images/logos/amazon.png" alt="Amazon" />
              <Image src="/images/logos/freefire.png" alt="freeFire" />
              <Image src="/images/logos/spike.png" alt="Spike" />
              <Image src="/images/logos/spotify.png" alt="Spotify" />
              <Image src="/images/logos/binance.png" alt="Binance" />
              <Image src="/images/logos/amazon.png" alt="Amazon" />
              <Image src="/images/logos/freefire.png" alt="freeFire" />
              <Image src="/images/logos/spike.png" alt="Spike" />
            </div>
            <div className="logos-slider-right">
              <Image src="/images/logos/spotify.png" alt="Spotify" />
              <Image src="/images/logos/binance.png" alt="Binance" />
              <Image src="/images/logos/amazon.png" alt="Amazon" />
              <Image src="/images/logos/freefire.png" alt="freeFire" />
              <Image src="/images/logos/spike.png" alt="Spike" />
              <Image src="/images/logos/spotify.png" alt="Spotify" />
              <Image src="/images/logos/binance.png" alt="Binance" />
              <Image src="/images/logos/amazon.png" alt="Amazon" />
              <Image src="/images/logos/freefire.png" alt="freeFire" />
              <Image src="/images/logos/spike.png" alt="Spike" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
