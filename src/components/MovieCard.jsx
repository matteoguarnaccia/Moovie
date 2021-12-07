import styled from "styled-components";
import { Link } from "react-router-dom";

const MovieCard = ({ title, poster, release, rating, id, type }) => {
  const poster_path = `https://image.tmdb.org/t/p/w200${poster}`;
  return (
    <StyledMovieCard>
      <Link to={`/${type}/${id}`}>
        <div className="poster-container">
          <img src={poster_path} alt={title} />
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
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
  @media (max-width: 1200px) {
    width: 150px;
  }
`;

export default MovieCard;
