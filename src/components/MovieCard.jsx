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
          <p>{release}</p>
        </div>
      </Link>
    </StyledMovieCard>
  );
};

const StyledMovieCard = styled.div`
  cursor: pointer;
  margin-right: 1rem;
  max-width: 200px;
  .poster-container {
    border-radius: 15px;
    overflow: hidden;
  }
  .movie-info {
    margin-top: 1rem;
    h3 {
      font-size: 1rem;
      margin-bottom: 0.2rem;
    }
    width: 100%;
  }
`;

export default MovieCard;
