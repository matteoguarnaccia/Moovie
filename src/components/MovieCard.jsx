import styled from "styled-components";
import { Link } from "react-router-dom";
import default_poster from "../images/poster_default.jpg";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const MovieCard = ({ title, poster, release, rating, id, type }) => {
  const poster_path = `https://image.tmdb.org/t/p/w200${poster}`;
  return (
    <StyledMovieCard>
      <Link to={`/${type}/${id}`}>
        <div className="poster-container">
          <img src={poster ? poster_path : default_poster} alt={title} />
          <div className="rating">
            <StarRoundedIcon fontSize="small" />
            {rating ? rating : "N.D"}
          </div>
        </div>
        <div className="movie-info">
          <h3>{title}</h3>
          <p>{release?.split("-")[0]}</p>
        </div>
      </Link>
    </StyledMovieCard>
  );
};

const StyledMovieCard = styled.div`
  cursor: pointer;
  width: 200px;
  .poster-container {
    position: relative;
    width: 100%;
    height: 300px;
    border-radius: 15px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 1200px) {
      height: 225px;
    }
  }
  .movie-info {
    margin-top: 1rem;
    width: 100%;
    h3 {
      font-size: 1rem;
      margin-bottom: 0.2rem;
    }
    p {
      opacity: 0.5;
      font-weight: 600;
    }
  }
  .rating {
    padding: 0.5rem;
    border-radius: 10px;
    position: absolute;
    bottom: 5%;
    right: 5%;
    background: #1e1e20;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    font-weight: 600;
    letter-spacing: 0.1rem;
    opacity: 0.8;
  }
  @media (max-width: 1200px) {
    width: 150px;
  }
`;

export default MovieCard;
