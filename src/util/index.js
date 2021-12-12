import netflix from "../images/netflix_icon.png";
import prime from "../images/amazon_icon.png";
import disney from "../images/disney_icon.png";
import now from "../images/now_icon.png";
import apple from "../images/apple_icon.png";
import mediaset from "../images/mediaset_icon.png";
import sky from "../images/sky_icon.png";
import tim from "../images/tim_icon.jpg";

export const streamingFormatter = (streaming1, streaming2) => {
  const streamArray = [];
  if (streaming2 && Object.keys(streaming2).length !== 0) {
    Object.entries(streaming2).forEach(([name, info]) => {
      switch (name) {
        case "netflix":
          streamArray.push({ name: "netflix", link: info?.it?.link });
          break;
        case "prime":
          streamArray.push({ name: "prime", link: info?.it?.link });
          break;
        case "disney":
          streamArray.push({ name: "disney", link: info?.it?.link });
          break;
        case "now":
          streamArray.push({ name: "now", link: info?.it?.link });
          break;
        case "apple":
          streamArray.push({ name: "apple", link: info?.it?.link });
          break;
        default:
          break;
      }
    });
  }
  if (streaming1 && streaming1.length !== 0) {
    streaming1.forEach(({ provider_name }) => {
      switch (provider_name) {
        case "Netflix":
          if (!streamArray.some((e) => e.name === "netflix")) {
            streamArray.push({ name: "netflix", link: null });
          }
          break;
        case "Amazon Prime Video":
          if (!streamArray.some((e) => e.name === "prime")) {
            streamArray.push({ name: "prime", link: null });
          }
          break;
        case "Disney Plus":
          if (!streamArray.some((e) => e.name === "disney")) {
            streamArray.push({ name: "disney", link: null });
          }
          break;
        case "Apple TV Plus":
          if (!streamArray.some((e) => e.name === "apple")) {
            streamArray.push({ name: "apple", link: null });
          }
          break;
        case "Now TV":
          if (!streamArray.some((e) => e.name === "now")) {
            streamArray.push({ name: "now", link: null });
          }
          break;
        case "Sky Go":
          streamArray.push({ name: "skygo", link: null });
          break;
        case "Infinity":
          streamArray.push({ name: "infinity", link: null });
          break;
        case "Mediaset Play":
          streamArray.push({ name: "mediaset", link: null });
          break;
        case "Timvision":
          streamArray.push({ name: "timvision", link: null });
          break;
        case "Rai Play":
          streamArray.push({ name: "rai", link: null });
          break;

        default:
          break;
      }
    });
  }
  return streamArray;
};

export const generateStreamingIcon = (name, link) => {
  switch (name) {
    case "netflix":
      return (
        <a href={link} target="_blank" rel="noreferrer" key={name}>
          <div className="streaming-icon">
            <img src={netflix} alt={name} />
          </div>
          <p>Netflix</p>
        </a>
      );
    case "prime":
      return (
        <a href={link} target="_blank" rel="noreferrer" key={name}>
          <div className="streaming-icon">
            <img src={prime} alt={name} />
          </div>
          <p>Prime Video</p>
        </a>
      );
    case "disney":
      return (
        <a href={link} target="_blank" rel="noreferrer" key={name}>
          <div className="streaming-icon">
            <img src={disney} alt={name} />
          </div>
          <p>Disney+</p>
        </a>
      );
    case "now":
      return (
        <a href={link} target="_blank" rel="noreferrer" key={name}>
          <div className="streaming-icon">
            <img src={now} alt={name} />
          </div>
          <p>Now TV</p>
        </a>
      );
    case "apple":
      return (
        <a href={link} target="_blank" rel="noreferrer" key={name}>
          <div className="streaming-icon">
            <img src={apple} alt={name} />
          </div>
          <p>Apple TV</p>
        </a>
      );
    case "mediaset":
      return (
        <a href={link} target="_blank" rel="noreferrer" key={name}>
          <div className="streaming-icon">
            <img src={mediaset} alt={name} />
          </div>
          <p>Mediaset Play</p>
        </a>
      );
    case "infinity":
      return (
        <a href={link} target="_blank" rel="noreferrer" key={name}>
          <div className="streaming-icon">
            <img src={mediaset} alt={name} />
          </div>
          <p>Infinity+</p>
        </a>
      );
    case "skygo":
      return (
        <a href={link} target="_blank" rel="noreferrer" key={name}>
          <div className="streaming-icon">
            <img src={sky} alt={name} />
          </div>
          <p>Sky Go</p>
        </a>
      );
    case "timvision":
      return (
        <a href={link} target="_blank" rel="noreferrer" key={name}>
          <div className="streaming-icon">
            <img src={tim} alt={name} />
          </div>
          <p>Timvision</p>
        </a>
      );
    default:
      return <div>{name}</div>;
  }
};
