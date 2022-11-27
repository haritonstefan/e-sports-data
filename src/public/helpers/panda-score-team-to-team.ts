import { ITeam } from '../../panda-score/interfaces';
import { Team } from '../team/team';
import pandaScorePlayerToPlayer from './panda-score-player-to-player';
import pandaScoreVideogameToVideogame from './panda-score-videogame-to-videogame';

export default function pandaScoreTeamToTeam(team: ITeam): Team {
  const gqlTeam: Team = {
    id: team.id,
    slug: team.slug,
    acronym: team.acronym,
    name: team.name,
    location: team.location,
    image: team.image_url,
  };

  if (team.players) {
    gqlTeam.players = team.players?.map(pandaScorePlayerToPlayer);
  }

  if (team.current_videogame) {
    gqlTeam.videogame = pandaScoreVideogameToVideogame(team.current_videogame);
  }

  return gqlTeam;
}
