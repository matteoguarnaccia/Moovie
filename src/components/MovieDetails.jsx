import { useLocation } from "react-router";
import styled from "styled-components";
import { useGetDetailsQuery } from "../services/tmdbApi";

const MovieDetails = () => {
  const id = useLocation().pathname;
  const { data, isFetching } = useGetDetailsQuery(id);
  const genres = [];
  console.log(data);
  if (isFetching) return "Loading...";
  for (let i in data.genres) {
    genres.push(data.genres[i].name);
  }

  return (
    <>
      <Poster
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
      />
      <DetailCard>
        <div className="main-info">
          <div className="poster-container">
            <img
              src={`https://image.tmdb.org/t/p/w400/${data.poster_path}`}
              alt={data.title}
            />
          </div>
          <div className="detail-info">
            <h3>{data.title || data.name}</h3>
            <p>
              {data.release_date?.split("-")[0] ||
                data.first_air_date?.split("-")[0]}
            </p>
            <span>|</span>
            <p>{genres.join("/")}</p> <span>|</span>
            <p>
              {data.runtime
                ? `${Math.floor(data.runtime / 60)}h${data.runtime % 60}m`
                : ""}
            </p>
          </div>
        </div>
        <div className="synopsis">
          <h4>Sinossi</h4>
          <p>{data.overview}</p>
        </div>
      </DetailCard>
    </>
  );
};

const Poster = styled.img`
  position: fixed;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: top;
  z-index: 1;
`;

const DetailCard = styled.div`
  padding: 2rem;
  position: absolute;
  top: 90%;
  left: 10%;
  width: 80%;
  z-index: 2;
  background: #0a0818;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  ::-webkit-scrollbar {
    display: none;
  }
  .main-info {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    h3 {
      margin-left: 0.5rem;
      font-size: 2rem;
    }
    p {
      display: inline-block;
      margin: 1rem 0.5rem;
      opacity: 0.5;
    }
    span {
      opacity: 0.5;
    }
  }
  .poster-container {
    width: 30%;
    min-width: 100px;
    overflow: hidden;
    border-radius: 15px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .detail-info {
    margin-left: 2rem;
  }
  .synopsis {
    margin-top: 2rem;
    p {
      margin-top: 1rem;
      opacity: 0.5;
    }
  }
  @media (max-width: 800px) {
    width: 90%;
    left: 5%;
    .poster-container {
      width: 100%;
    }
    .detail-info {
      margin-left: 0;
      margin-top: 1rem;
    }
  }
`;

export default MovieDetails;
