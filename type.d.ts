import type { FC, ReactNode } from "react";
declare global {
  type IconPackNames =
    | "soccerBall"
    | "instagram"
    | "youtube"
    | "twitter"
    | "google"
    | "sun"
    | "moon"
    | "brazilFlag"
    | "chileFlag"
    | "colombiaFlag"
    | "uruguayFlag"
    | "franceFlag"
    | "nigeriaFlag"
    | "germanyFlag"
    | "algeriaFlag"
    | "netherlandsFlag"
    | "mexicoFlag"
    | "costaRicoFlag"
    | "greeceFlag"
    | "argentinaFlag"
    | "switzerlandFlag"
    | "belgiumFlag"
    | "unitedStatesFlag";

  namespace React {
    type ButtonElement = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

    type DivElement = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

    type ImageElement = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

    type Setter<T> = Dispatch<SetStateAction<T>>;
  }

  namespace Context {
    type Theme = {
      type: "Light" | "Dark";
    };
  }

  namespace Component {
    type IconPack = FC<
      {
        name: IconPackNames;
        fillColor?: string;
        strokeColor?: string;
      } & React.ImageElement
    >;

    type Button = FC<
      {
        title: string;
      } & React.ButtonElement
    >;

    type Meta = FC<{
      title: string;
      description: string;
      image: string;
      children: ReactNode;
    }>;
  }
}
