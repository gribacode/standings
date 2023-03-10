import type { IRoundProps, IRenderSeedProps } from "react-brackets";

import { Bracket as ReactBracket, Seed, SeedItem, SeedTeam } from "react-brackets";

import { useThemeSelector } from "@/root/main";
import { IconPack } from "@/ui/icon_pack/IconPack";
import { convertStringToCamelCase } from "@/utils/convertStringToCamelCase";

const rounds: IRoundProps[] = [
  {
    title: "1/8 finals",
    seeds: [
      {
        id: 1,
        teams: [{ name: "Brazil" }, { name: "Chile" }],
      },
      {
        id: 2,
        teams: [{ name: "Colombia" }, { name: "Uruguay" }],
      },
      {
        id: 3,
        teams: [{ name: "France" }, { name: "Nigeria" }],
      },
      {
        id: 4,
        teams: [{ name: "Germany" }, { name: "Algeria" }],
      },
      {
        id: 5,
        teams: [{ name: "The Netherlands" }, { name: "Mexico" }],
      },
      {
        id: 6,
        teams: [{ name: "Costa Rica" }, { name: "Greece" }],
      },
      {
        id: 7,
        teams: [{ name: "Argentina" }, { name: "Switzerland" }],
      },
      {
        id: 8,
        teams: [{ name: "Belgium" }, { name: "United States" }],
      },
    ],
  },
  {
    title: "Quarter-finals",
    seeds: [
      {
        id: 9,
        teams: [{ name: "Brazil" }, { name: "Colombia" }],
      },
      {
        id: 10,
        teams: [{ name: "France" }, { name: "Germany" }],
      },
      {
        id: 11,
        teams: [{ name: "The Netherlands" }, { name: "Costa Rica" }],
      },
      {
        id: 12,
        teams: [{ name: "Argentina" }, { name: "Belgium" }],
      },
    ],
  },
  {
    title: "Semifinals",
    seeds: [
      {
        id: 13,
        teams: [{ name: "Brazil" }, { name: "Germany" }],
      },
      {
        id: 14,
        teams: [{ name: "The Netherlands" }, { name: "Argentina" }],
      },
    ],
  },
  {
    title: "Finale",
    seeds: [
      {
        id: 15,
        teams: [{ name: "Germany" }, { name: "Argentina" }],
      },
    ],
  },
];

export const Bracket = () => {
  const type = useThemeSelector((state) => state.type);
  const is2xlResponsive = 1840;

  return (
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
                className={`p-4 flex flex-col gap-y-4 whitespace-nowrap shadow-lg rounded-xl sm:text-4xl text-3xl ${
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
  );
};
