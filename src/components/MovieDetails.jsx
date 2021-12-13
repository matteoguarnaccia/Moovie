import { useLocation } from "react-router";
import styled from "styled-components";
import {
  useGetDetailsQuery,
  useGetCastQuery,
  useGetProvidersQuery,
} from "../services/tmdbApi";
import { useGetAvailabilityQuery } from "../services/streamingApi";
import { generateStreamingIcon, streamingFormatter } from "../util";
import avatar from "../images/avatar_default.png";

const MovieDetails = () => {
  const id = useLocation().pathname;
  const { data, isFetching } = useGetDetailsQuery(id);
  const { data: castData, isFetching: castIsFetching } = useGetCastQuery(id);
  const { data: streamingData, isFetching: streamingIsFetching } =
    useGetAvailabilityQuery(id.substring(1));
  const { data: providersData, isFetching: providersIsFetching } =
    useGetProvidersQuery(id);

  const genres = [];

  //console.log(data);
  if (
    isFetching ||
    castIsFetching ||
    streamingIsFetching ||
    providersIsFetching
  )
    return "Loading...";
  for (let i in data.genres) {
    genres.push(data.genres[i].name);
  }
  const providers = streamingFormatter(
    providersData?.results?.IT?.flatrate,
    streamingData?.streamingInfo
  );
  console.log(providers);
  return (
    <>
      <Poster
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
      />
      <DetailCard>
        {providers && providers.length !== 0 && (
          <Streaming>
            <div className="streaming-header">
              <h3>Servizi di Streaming</h3>
            </div>
            <div className="streaming-icons">
              {providers?.map(({ name, link }) =>
                generateStreamingIcon(name, link)
              )}
            </div>
          </Streaming>
        )}
        <div className="main-info">
          <Left>
            <MovieMain>
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
                <p className="genres">{genres.join("/")}</p> <span>|</span>
                <p>
                  {data.runtime
                    ? `${Math.floor(data.runtime / 60)}h${data.runtime % 60}m`
                    : ""}
                </p>
                <LanguageInfo>
                  <h3 className="language-header">Lingue disponibili:</h3>
                  <div className="languages">
                    {data?.spoken_languages?.map((language) => (
                      <div className="language" key={language.english_name}>
                        <p>{language.english_name}</p>
                      </div>
                    ))}
                  </div>
                </LanguageInfo>
              </div>
            </MovieMain>
          </Left>
          <Right>
            <CastInfo>
              <div className="cast-header">
                <h3>Cast</h3>
              </div>
              <div className="actors">
                {castData?.cast?.map((actor) => {
                  if (actor.known_for_department === "Acting") {
                    return (
                      <div className="actor-card" key={actor.id}>
                        <div className="profile-container">
                          <img
                            src={
                              actor?.profile_path
                                ? `https://image.tmdb.org/t/p/w200${actor?.profile_path}`
                                : avatar
                            }
                            alt=""
                          />
                        </div>
                        <div className="actor-info">
                          <p>{actor.character}</p>
                          <h4>{actor.name}</h4>
                        </div>
                      </div>
                    );
                  } else {
                    return "";
                  }
                })}
              </div>
            </CastInfo>
          </Right>
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
  background: linear-gradient(
    to right bottom,
    rgba(10, 8, 24, 0.7),
    rgba(10, 8, 24, 0.3)
  );
  backdrop-filter: blur(2rem);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  ::-webkit-scrollbar {
    display: none;
  }
  .main-info {
    display: flex;
    gap: 1rem;
    h3 {
      margin-left: 0.5rem;
    }
    p {
      display: inline-block;
      margin: 1rem 0.5rem;
      opacity: 0.5;
    }
    span {
      opacity: 0.5;
    }
    @media (max-width: 1200px) {
      flex-wrap: wrap;
    }
    @media (max-width: 720px) {
      justify-content: center;
    }
  }
  .poster-container {
    max-width: 40%;
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
    min-width: 33%;
    h3 {
      font-size: 2rem;
    }
  }
  .synopsis {
    margin-top: 2rem;
    p {
      margin-top: 1rem;
      opacity: 0.5;
    }
  }
  @media (max-width: 720px) {
    width: 96%;
    left: 2%;
    .detail-info {
      margin-left: 1rem;
      margin-top: 1rem;
    }
  }
`;
const Streaming = styled.div`
  width: 100%;
  .streaming-icons {
    display: flex;
    margin: 1rem 0rem;
    .streaming-icon {
      width: 4.8rem;
      height: 4.8rem;
      margin: 0rem 0.5rem;
      overflow: hidden;
      border-radius: 50%;
      img {
        width: 100%;
      }
    }
    p {
      opacity: 0.5;
      width: 100%;
      text-align: center;
      font-weight: 600;
      margin: 0.5rem 0rem 0rem 0rem;
    }
  }
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  min-width: 60%;
  overflow-x: hidden;
`;
const MovieMain = styled.div`
  display: flex;
  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
const Right = styled.div`
  max-height: 80vh;
  max-wi
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
    flex-wrap: wrap;
    margin: 1rem 0rem;
    .language {
      background: #1e1e20;
      border-radius: 10px;
      margin: 0.25rem 0.25rem;
      p {
        margin: 0.5rem;
        opacity: 0.7;
        font-weight: 600;
      }
    }
  }
`;

const CastInfo = styled.div`
  height: 100%;
  max-width: 100%;
  min-width: 33%;
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
