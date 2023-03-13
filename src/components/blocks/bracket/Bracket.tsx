import type { IRoundProps, IRenderSeedProps } from "react-brackets";

import { Bracket as ReactBracket, Seed, SeedItem, SeedTeam } from "react-brackets";
import { useEffect, useState } from "react";

import { useThemeSelector } from "@/root/main";
import { IconPack } from "@/ui/icon_pack/IconPack";
import { convertStringToCamelCase } from "@/utils/convertStringToCamelCase";
import { TeamService } from "@/services/Team.service";
import { generateTeamsGroups } from "@/utils/generateTeamsGroups";
import { Button } from "@/ui/button/Button";

export const Bracket = () => {
  const type = useThemeSelector((state) => state.type);
  const is2xlResponsive = 1840;

  const [teams, setTeams] = useState<string[]>([]);
  const [rounds, setRounds] = useState<IRoundProps[]>([]);
  const [buttonTitle, setButtonTitle] = useState<"Play" | "Reset">("Play");

  useEffect(() => {
    const getGroupStageTeamsData = async () => {
      const teamsList = await TeamService.getTeams();
      const groupTeams = generateTeamsGroups(teamsList);

      setTeams(teamsList);
      setRounds(
        rounds.concat({
          title: "1/8 finals",
          seeds: groupTeams,
        }),
      );
    };

    getGroupStageTeamsData();
  }, []);

  const playMatch = (teams: string[], stage = 0): void => {
    if (teams.length === 1) {
      return;
    }

    const winnersList = Array(teams.length / 2);
    const stages = ["Quarter-finals", "Semifinals", "Finale", "Winner"];

    for (let i = 0, j = 0; i < teams.length; i += 2, ++j) {
      winnersList[j] = teams[i + (Math.floor(Math.random() * 99 + 1) % 2)];
    }

    setRounds((rounds) => [
      ...rounds,
      {
        title: stages[stage],
        seeds: generateTeamsGroups(winnersList),
      },
    ]);

    if (stages[stage].at(-1)) {
      setButtonTitle("Reset");
    }

    return playMatch(winnersList, stage + 1);
  };

  const resetMatch = () => {
    setRounds([
      {
        title: "1/8 finals",
        seeds: generateTeamsGroups(teams),
      },
    ]);

    setButtonTitle("Play");
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <Button title={buttonTitle} onClick={() => (buttonTitle === "Play" ? playMatch(teams) : resetMatch())} />
      </div>
      <ReactBracket
        bracketClassName="2xl:pl-40 md:px-20 px-2"
        mobileBreakpoint={is2xlResponsive}
        roundClassName="sm:text-xl text-lg"
        swipeableProps={{
          enableMouseEvents: true,
          animateHeight: true,
        }}
        rounds={rounds}
        renderSeedComponent={({ seed }: IRenderSeedProps) => {
          return (
            <Seed mobileBreakpoint={is2xlResponsive}>
              <SeedItem
                style={{
                  borderRadius: "12px",
                  backgroundColor: "transparent",
                  border: `${type === "Light" ? "1px solid #707070" : "1px solid transparent"}`,
                }}>
                <div
                  className={`p-4 flex flex-col whitespace-nowrap shadow-lg rounded-xl sm:text-4xl text-3xl ${
                    type === "Light" ? "bg-white" : "bg-ash"
                  }`}>
                  <div className="flex items-center">
                    <div>
                      <IconPack
                        name={
                          `${convertStringToCamelCase(
                            String(seed.teams[0]?.name),
                          )}Flag` as (typeof IconPackNames)[keyof typeof IconPackNames]
                        }
                      />
                    </div>
                    <SeedTeam className={type === "Light" ? "text-black" : "text-orange"}>{seed.teams[0]?.name}</SeedTeam>
                  </div>
                  <div className="flex items-center">
                    <div>
                      <IconPack
                        name={
                          `${convertStringToCamelCase(
                            String(seed.teams[1]?.name),
                          )}Flag` as (typeof IconPackNames)[keyof typeof IconPackNames]
                        }
                      />
                    </div>
                    <SeedTeam className={type === "Light" ? "text-ash opacity-75" : "text-white"}>
                      {seed.teams[1]?.name}
                    </SeedTeam>
                  </div>
                </div>
              </SeedItem>
            </Seed>
          );
        }}
      />
    </>
  );
};
