import { IPlayer } from '../../panda-score/interfaces';
import { Player } from '../models';
import { pandaScoreTeamToTeam } from './panda-score-team-to-team';
import { pandaScoreVideogameToVideogame } from './panda-score-videogame-to-videogame';

export function pandaScorePlayerToPlayer(player: IPlayer): Player {
  const gqlPlayer: Player = {
    id: player.id,
    birthday: player.birthday,
    birthdayYear: player.birthday
      ? new Date(player.birthday).getFullYear()
      : null,
    firstName: player.first_name,
    lastName: player.last_name,
    slug: player.slug,
    name: player.name,
    image: player.image_url,
    nationality: player.nationality,
  };

  if (player.current_team) {
    gqlPlayer.team = pandaScoreTeamToTeam(player.current_team);
  }

  if (player.current_videogame) {
    gqlPlayer.videogame = pandaScoreVideogameToVideogame(
      player.current_videogame,
    );
  }
  return gqlPlayer;
}
