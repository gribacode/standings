export const MainScreen = () => {
  return (
    <div className="flex md:flex-row md:gap-y-0 gap-y-20 flex-col items-center md:justify-between justify-center xl:pl-40 xl:pr-80 md:px-20 px-2">
      <div className="lg:max-w-3xl md:max-w-xl max-w-full gap-y-5 flex flex-col md:order-1 order-2 md:text-left text-center">
        <h1 className="lg:text-8xl md:text-7xl sm:text-5xl text-4xl leading-tight uppercase font-bold">
          Football Standings
        </h1>
        <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl leading-tight font-normal">
          Сome in not to miss the main events in the world of football
        </p>
      </div>
      <div className="select-none flex-shrink-0 md:order-2 order-1">
        <img src="/footballer.png" alt="Football player" className="sm:w-auto sm:h-auto w-36 h-96" />
      </div>
    </div>
  );
};
