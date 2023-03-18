import { IconPack } from "@/ui/iconPack/IconPack";
import { useThemeSelector, useThemeUpdate } from "@/root/main";

export const Header = () => {
  const updateTheme = useThemeUpdate();
  const type = useThemeSelector((state) => state.type);

  return (
    <header className="h-32 w-full flex items-center justify-between md:px-20 px-2">
      <a href="/" className="flex items-center gap-x-4 cursor-pointer select-none group">
        <IconPack
          name="soccerBall"
          fillColor={type === "Light" ? "#1E1E1E" : "#FFAA00"}
          className="sm:w-auto sm:h-auto w-10 h-10 group-hover:opacity-75 duration-500"
        />
        <h2 className="font-bold sm:text-3xl text-2xl uppercase group-hover:opacity-75 duration-500">Standings</h2>
      </a>
      <div className="cursor-pointer select-none">
        {type === "Light" ? (
          <div onClick={() => updateTheme({ type: "Dark" })}>
            <IconPack name="sun" className="sm:w-auto sm:h-auto w-10 h-10 hover:opacity-75 duration-500" />
          </div>
        ) : (
          <div onClick={() => updateTheme({ type: "Light" })}>
            <IconPack
              name="moon"
              strokeColor="#FFAA00"
              className="sm:w-auto sm:h-auto w-10 h-10 hover:opacity-75 duration-500"
            />
          </div>
        )}
      </div>
    </header>
  );
};
