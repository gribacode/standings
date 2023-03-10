import type { DetailedHTMLProps, HTMLAttributes, ButtonHTMLAttributes, Dispatch, SetStateAction, FC } from "react";

declare global {
  const IconPackNames = {
    SOCCER_BALL: "soccerBall",
    INSTAGRAM: "instagram",
    YOUTUBE: "youtube",
    TWITTER: "twitter",
    GOOGLE: "google",
    SUN: "sun",
    MOON: "moon",
    BRAZIL_FLAG: "brazilFlag",
    CHILE_FLAG: "chileFlag",
    COLOMBIA_FLAG: "colombiaFlag",
    URUGUAY_FLAG: "uruguayFlag",
    FRANCE_FLAG: "franceFlag",
    NIGERIA_FLAG: "nigeriaFlag",
    GERMANY_FLAG: "germanyFlag",
    ALGERIA_FLAG: "algeriaFlag",
    THE_NETHERLANDS_FLAG: "theNetherlandsFlag",
    MEXICO_FLAG: "mexicoFlag",
    COSTA_RICA_FLAG: "costaRicaFlag",
    GREECE_FLAG: "greeceFlag",
    ARGENTINA_FLAG: "argentinaFlag",
    SWITZERLAND_FLAG: "switzerlandFlag",
    BELGIUM_FLAG: "belgiumFlag",
    UNITED_STATES_FLAG: "unitedStatesFlag",
  } as const;

  declare namespace React {
    type ButtonElement = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

    type DivElement = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

    type ImageElement = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

    type Setter<T> = Dispatch<SetStateAction<T>>;
  }

  declare namespace Context {
    type Theme = {
      type: "Light" | "Dark";
    };
  }

  declare namespace UI {
    type IconPack = FC<
      {
        name: (typeof IconPackNames)[keyof typeof IconPackNames];
        fillColor?: string;
        strokeColor?: string;
      } & React.ImageElement
    >;
  }
}
