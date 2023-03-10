import { Bracket } from "@/blocks/bracket/Bracket";
import { Footer } from "@/blocks/footer/Footer";
import { Header } from "@/blocks/header/Header";
import { MainScreen } from "@/blocks/main_screen/MainScreen";
import { useThemeSelector } from "./main";

function App() {
  const type = useThemeSelector((state) => state.type);

  return (
    <div
      className={`h-full flex flex-col md:gap-y-40 gap-y-20 ${
        type === "Light" ? "bg-white text-black" : "bg-black text-white"
      }`}>
      <Header />
      <MainScreen />
      <Bracket />
      <Footer />
    </div>
  );
}

export default App;
