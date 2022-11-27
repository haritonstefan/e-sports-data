import { TeamService } from '../services';
import DataLoader from 'dataloader';
import { Team } from '../models';
import { listToMap } from '../helpers';

export function createTeamLoader(teamService: TeamService) {
  return new DataLoader<number, Team>(async (keys) => {
    const players = await teamService.getTeams(100, 1, { id: [...keys] });

    const teamsMap = listToMap(players, (team) => team.id);

    return keys.map((key) => teamsMap[key]);
  });
}
