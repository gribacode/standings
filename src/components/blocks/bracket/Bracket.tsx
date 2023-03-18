import type { IRoundProps, IRenderSeedProps } from "react-brackets";

import { Bracket as ReactBracket, Seed, SeedItem, SeedTeam } from "react-brackets";
import { useEffect, useState } from "react";

import { useThemeSelector } from "@/root/main";
import { IconPack } from "@/ui/iconPack/IconPack";
import { convertStringToCamelCase } from "@/utils/convertStringToCamelCase";
import { TeamService } from "@/services/Team.service";
import { Button } from "@/ui/button/Button";

export const Bracket = () => {
  const type = useThemeSelector((state) => state.type);
  const is2xlResponsive = 1840;

  const [teams, setTeams] = useState<string[]>([]);
  const [rounds, setRounds] = useState<IRoundProps[]>([]);
  const [buttonTitle, setButtonTitle] = useState<"Start" | "Play" | "Restart">("Start");
  const [step, setStep] = useState<number>(0);

  const playMatch = () => {
    const stages: string[] = ["1/8 finals", "Quarter-finals", "Semifinals", "Finale", "Winner"];
    const round: IRoundProps = {
      title: "",
      seeds: [],
    };

    if (teams.length === 1 && step) {
      setRounds((rounds) =>
        rounds.concat({
          title: String(stages.at(-1)),
          seeds: [
            {
              id: step,
              teams: [{ name: teams[0] }],
            },
          ],
        }),
      );

      setButtonTitle("Restart");
      setStep(0);
    } else if (teams && teams.length % 2 === 0) {
      const winnersList: string[] = Array(teams.length / 2);

      for (let i = 0, j = 0; i < teams.length; i += 2, ++j) {
        round.title = stages[step];
        round.seeds = (round.seeds ?? []).concat({
          id: j,
          teams: [
            {
              name: teams[i],
            },
            { name: teams[i + 1] },
          ],
        });
        winnersList[j] = teams[i + (Math.floor(Math.random() * 99 + 1) % 2)];
      }
      setTeams(winnersList);
      setStep(step + 1);
    } else {
      throw Error("Wrong number of commands");
    }

    if (!step) {
      setRounds((rounds) => rounds.splice(0, rounds.length));
      setButtonTitle("Play");
    }

    setRounds((rounds) => rounds.concat(round));
  };

  useEffect(() => {
    const getGroupStageTeamsData = async () => {
      const teamsList = await TeamService.getTeams();

      if (buttonTitle === "Restart" || !teams.length) {
        setTeams(teamsList);
      }
    };

    getGroupStageTeamsData();
  }, [buttonTitle]);

  return (
    <>
      <div className="flex items-center justify-center">
        <Button title={buttonTitle} onClick={() => playMatch()} />
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
                      <IconPack name={`${convertStringToCamelCase(String(seed.teams[0]?.name))}Flag` as IconPackNames} />
                    </div>
                    <SeedTeam className={type === "Light" ? "text-black" : "text-white"}>{seed.teams[0]?.name}</SeedTeam>
                  </div>
                  <div className="flex items-center">
                    <div>
                      <IconPack name={`${convertStringToCamelCase(String(seed.teams[1]?.name))}Flag` as IconPackNames} />
                    </div>
                    <SeedTeam className={type === "Light" ? "text-ash opacity-75" : "text-white opacity-75"}>
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
