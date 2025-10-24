import react from "react";
import { GenreService } from "../utils/GenreService";
import { DateUtils } from "../utils/Dateutils";

const PodcastCard = ({ podcast, onSelect, genres }) => {
  const genreNames = GenreService.getNames(podcast.genre || [], genres || []); // Uses genres prop
  const updatedDate = DateUtils.format(
    podcast.updated || new Date().toISOString()
  );
  console.log("Podcast in Card:", podcast);

  let seasonCount = typeof podcast.seasons === "number" ? podcast.seasons : 0;

  return (
    <div className="card" onClick={() => onSelect(podcast)}>
      <img
        src={podcast.image || ""}
        alt={`${podcast.title || "Podcast"} cover`}
      />
      <h3>{podcast.title || "No Title"}</h3>
      <p className="seasons">
        {seasonCount} season{seasonCount > 1 ? "s" : ""}
      </p>
      <div className="tags">
        {genreNames.length > 0 ? (
          genreNames.map((genre) => (
            <span key={genre} className="tag">
              {genre}
            </span>
          ))
        ) : (
          <span className="tag">No genres available</span>
        )}
      </div>
      <p className="updated-text">{updatedDate}</p>
    </div>
  );
};

export default PodcastCard;
