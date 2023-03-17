import { useThemeSelector } from "@/root/main";
import { IconPack } from "@/ui/icon_pack/IconPack";

const socialMediaLinks = ["instagram", "youtube", "twitter", "google"] as const;

export const Footer = () => {
  const type = useThemeSelector((state) => state.type);

  return (
    <footer className="flex items-center justify-center sm:gap-x-14 gap-x-7 py-28">
      {socialMediaLinks.map((link) => (
        <a href="#" key={link}>
          <IconPack
            name={link}
            fillColor={type === "Light" ? "#1E1E1E" : "#FFAA00"}
            className="sm:w-auto sm:h-auto w-10 h-10 hover:opacity-75 duration-500 select-none"
          />
        </a>
      ))}
    </footer>
  );
};
