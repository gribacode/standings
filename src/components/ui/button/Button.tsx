import { useThemeSelector } from "@/root/main";

export const Button: Component.Button = ({ title, ...props }) => {
  const type = useThemeSelector((state) => state.type);

  return (
    <button
      className={`px-12 py-6 w-fit rounded-2xl text-2xl uppercase font-bold leading-tight ${
        type === "Dark" ? "text-black bg-orange" : "text-white bg-black"
      }`}
      {...props}>
      {title}
    </button>
  );
};
