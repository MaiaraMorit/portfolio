import { HomeIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";

export const Header = ({ darkMode, toggleTheme }) => {
  const arrayBtnsLeft = [
    <HomeIcon className="w-6 h-6" />,
    darkMode ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />,
  ];

  const arrayBtnsRight = ["Projetos", "Formação", "Experiências"];

  const navBarDivsClassName = "lg:flex lg:flex-1";

  return (
    <div>
      <header
        id="header"
        className={`bg-orange shadow-md pb-2 ${darkMode ? "dark bg-gray-800" : ""}`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className={`${navBarDivsClassName} lg:justify-start`}>
            {arrayBtnsLeft.map((botao, index) => (
              <div
                key={`header-btns-left-${index}`}
                className={`cursor-pointer inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${
                  darkMode ? "dark:text-white" : ""
                }`}
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleTheme}
              >
                {botao}
              </div>
            ))}
          </div>
          <div className={`${navBarDivsClassName} lg:justify-end`}>
            {arrayBtnsRight.map((botao, index) => (
              <div
                key={`header-btns-right-${index}`}
                className="cursor-pointer inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {botao}
              </div>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
};

