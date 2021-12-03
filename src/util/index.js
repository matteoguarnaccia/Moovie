import netflix from "../images/netflix_icon.png";
import prime from "../images/amazon_icon.png";
import disney from "../images/disney_icon.png";
import now from "../images/now_icon.png";
import apple from "../images/apple_icon.png";

export const generateStreamingIcon = (name, info) => {
  switch (name) {
    case "netflix":
      return (
        <a href={info?.it?.link} target="_blank" rel="noreferrer" key={name}>
          <div className="streaming-icon">
            <img src={netflix} alt={name} />
          </div>
          <p>Netflix</p>
        </a>
      );
    case "prime":
      return (
        <a href={info?.it?.link} target="_blank" rel="noreferrer" key={name}>
          <div className="streaming-icon">
            <img src={prime} alt={name} />
          </div>
          <p>Prime Video</p>
        </a>
      );
    case "disney":
      return (
        <a href={info?.it?.link} target="_blank" rel="noreferrer" key={name}>
          <div className="streaming-icon">
            <img src={disney} alt={name} />
          </div>
          <p>Disney+</p>
        </a>
      );
    case "now":
      return (
        <a href={info?.it?.link} target="_blank" rel="noreferrer" key={name}>
          <div className="streaming-icon">
            <img src={now} alt={name} />
          </div>
          <p>Now TV</p>
        </a>
      );
    case "apple":
      return (
        <a href={info?.it?.link} target="_blank" rel="noreferrer" key={name}>
          <div className="streaming-icon">
            <img src={apple} alt={name} />
          </div>
          <p>Apple TV</p>
        </a>
      );
    default:
      return <div>{name}</div>;
  }
};
