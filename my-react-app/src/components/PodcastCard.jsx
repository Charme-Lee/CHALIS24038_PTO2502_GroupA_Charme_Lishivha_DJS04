import react from "react";
import { GenreService } from "../utils/GenreService";
import { DateUtils } from "../utils/Dateutils";

const PodcastCard = ({ podcast, onSelect, genres }) => {
  const genreNames = GenreService.getNames(podcast.genre || [], genres || []); // Uses genres prop
  const updatedDate = DateUtils.format(
    podcast.updated || new Date().toISOString()
  );
  console.log( "Podcast in Card:", podcast );
  
  let seasonCount =podcast.seasons && Array.isArray(poddcast.seasons) ? (typeof podcast.seasons === 'number' ? podcast.seasons : 0);

  return (
    <div>
      
    </div>
  )




};

export default PodcastCard;
