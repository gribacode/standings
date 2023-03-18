import { Bracket } from "@/blocks/bracket/Bracket";
import { Footer } from "@/blocks/footer/Footer";
import { Header } from "@/blocks/header/Header";
import { MainScreen } from "@/blocks/mainScreen/MainScreen";
import { Meta } from "@/layout/Meta";
import { useThemeSelector } from "./main";

function App() {
  const type = useThemeSelector((state) => state.type);

  return (
    <Meta title="Home Page" description="Welcome to the Standings website" image="/preview.jpg">
      <div
        className={`h-full flex flex-col md:gap-y-40 gap-y-20 ${
          type === "Light" ? "bg-white text-black" : "bg-black text-white"
        }`}>
        <Header />
        <MainScreen />
        <Bracket />
        <Footer />
      </div>
    </Meta>
  );
}

export default App;
