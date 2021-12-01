import { castDraft } from "@reduxjs/toolkit/node_modules/immer";
import { useLocation } from "react-router";
import styled from "styled-components";
import { useGetDetailsQuery, useGetCastQuery } from "../services/tmdbApi";

const MovieDetails = () => {
  const id = useLocation().pathname;
  const { data, isFetching } = useGetDetailsQuery(id);
  const { data: castData, isFetching: castIsFetching } = useGetCastQuery(id);
  const genres = [];
  //console.log(data);
  if (isFetching || castIsFetching) return "Loading...";
  for (let i in data.genres) {
    genres.push(data.genres[i].name);
  }
  console.log(castData);
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
            <LanguageInfo>
              <h3 className="language-header">Lingue disponibili:</h3>
              <div className="languages">
                {data?.spoken_languages?.map((language) => (
                  <div className="language">
                    <p>{language.english_name}</p>
                  </div>
                ))}
              </div>
            </LanguageInfo>
          </div>
          <CastInfo>
            <div className="cast-header">
              <h3>Cast</h3>
            </div>
            <div className="actors">
              {castData?.cast?.map((actor) => {
                if (actor.known_for_department === "Acting") {
                  return (
                    <div className="actor-card">
                      <div className="profile-container">
                        <img
                          src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                          alt=""
                        />
                      </div>
                      <div className="actor-info">
                        <p>{actor.character}</p>
                        <h4>{actor.name}</h4>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </CastInfo>
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
  margin-top: -10%;
  position: fixed;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: top;
  z-index: 1;
  @media (max-width: 1000px) {
    margin-top: -30%;
  }
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
    justify-content: space-between;
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
    @media (max-width: 700px) {
      display: none;
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
    .detail-info {
      margin-left: 0;
      margin-top: 1rem;
    }
  }
`;

const LanguageInfo = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  h3.language-header {
    font-size: 1rem;
    font-weight: 600;
    opacity: 0.5;
  }
  .languages {
    display: flex;
    .language {
      background: #1e1e20;
      border-radius: 10px;
      margin: 1rem 0.5rem;
      p {
        margin: 0.5rem;
        opacity: 0.7;
        font-weight: 600;
      }
    }
  }
`;

const CastInfo = styled.div`
  max-height: 80vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  .actor-card {
    display: flex;
    align-items: center;
    margin: 1.5rem 0rem 1.5rem auto;
    .profile-container {
      max-width: 4.8rem;
      max-height: 4.8rem;
      overflow: hidden;
      border-radius: 50%;
      img {
        width: 100%;
      }
    }
  }
  .actor-info {
    margin-left: 1rem;
    p {
      margin-left: 0;
      font-weight: 600;
      font-size: 0.8rem;
    }
  }
`;

export default MovieDetails;
