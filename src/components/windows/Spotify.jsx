import "./spotify.scss";
import MacWindow from "./MacWindow";

const Spotify = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow width="25vw" windowName={windowName} setWindowsState={setWindowsState}>
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderradius: "12px" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1E4CUrkGzn1VSI?utm_source=generator&theme=0&si=a2a066c19ac14fee"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;
