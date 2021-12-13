import SwiperCore, { Autoplay, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.min.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";

const HeroSlide = ({ data }) => {
  SwiperCore.use([Autoplay, Lazy]);
  console.log(data);
  return (
    <StyledHeroSlide>
      <Swiper
        autoplay={{ delay: 5000 }}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        lazy={true}
      >
        {data?.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => <HeroSlideItem item={item} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledHeroSlide>
  );
};

const HeroSlideItem = ({ item, className }) => {
  const background = `https://image.tmdb.org/t/p/w1280/${item?.backdrop_path}`;
  const navigate = useNavigate();
  return (
    <StyledHeroItem style={{ backgroundImage: `url(${background})` }}>
      <div className="hero-item-info">
        <div className="hero-item-header">
          <h3>{item.title || item.name}</h3>
        </div>
        <div className="hero-item-btns">
          <div className="hero-btn">
            <PlayCircleOutlineOutlinedIcon />
            <p>Trailer</p>
          </div>
          <div
            className="hero-btn"
            onClick={() => navigate(`/${item.media_type}/${item.id}`)}
          >
            <PendingOutlinedIcon />
            <p>Dettagli</p>
          </div>
        </div>
        <div className="hero-item-overview">
          <p>{item.overview}</p>
        </div>
      </div>
    </StyledHeroItem>
  );
};

const StyledHeroSlide = styled.div`
  .swiper {
    height: 80vh;
    @media (max-width: 1000px) {
      height: 70vh;
    }
    @media (max-width: 480px) {
      height: 50vh;
    }
  }
`;
const StyledHeroItem = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-position-y: top;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  .hero-item-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 2rem;
    height: 80%;
    width: 50%;
    .hero-item-header {
      margin: 1rem;
      opacity: 0.8;
      h3 {
        font-size: 3rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        @media (max-width: 480px) {
          font-size: 2rem;
        }
      }
    }
    .hero-item-btns {
      display: flex;
      .hero-btn {
        cursor: pointer;
        opacity: 0.8;
        display: flex;
        align-items: center;
        background: #1e1e20;
        padding: 0.7rem;
        margin: 0.5rem;
        border-radius: 15px;
        p {
          margin-left: 0.5rem;
          font-weight: 600;
        }
        :hover {
          opacity: 1;
        }
      }
    }
    .hero-item-overview {
      padding: 2rem;
      height: auto;
      background: linear-gradient(
        to right bottom,
        rgba(10, 8, 24, 0.8),
        rgba(10, 8, 24, 0.3)
      );
      backdrop-filter: blur(1rem);
      border-radius: 15px;
      box-shadow: 2px -2px 50px 10px rgba(52, 51, 54, 0.5);
      p {
        opacity: 0.7;
        display: -webkit-box;
        line-height: 1.3rem;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
    @media (max-width: 480px) {
      width: 75%;
      justify-content: space-evenly;
      .hero-item-overview {
        display: none;
      }
    }
  }
`;

export default HeroSlide;
