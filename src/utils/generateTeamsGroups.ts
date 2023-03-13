import type { ISeedProps } from "react-brackets";

export const generateTeamsGroups = (teams: string[]) => {
  const teamsGroup: ISeedProps[] = [];

  if (teams.length === 1) {
    teamsGroup.push({
      id: 0,
      teams: [
        {
          name: teams[0],
        },
      ],
    });
  } else if (teams && teams.length % 2 === 0) {
    for (let i = 0, j = 0; i + 1 < teams.length; i += 2, ++j) {
      teamsGroup.push({
        id: j,
        teams: [
          {
            name: teams[i],
          },
          {
            name: teams[i + 1],
          },
        ],
      });
    }
  } else {
    throw Error("Wrong number of commands");
  }

  return teamsGroup;
};
