import React, { useState } from 'react';
import HeaderComp from './components/HeaderComp';
import useCountryDataAPI from "./api/useCountryDataAPI";
import Home from './components/Home';

export let darkModeContext = React.createContext();
export let countryContext = React.createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [divMode, setDivMode] = useState(false);
  const [country, setCountry] = useState(null);
  const [countryDetails, setCountryDetails] = useState(null);
  const countryDataAPI = useCountryDataAPI();

  const mode =()=> {
    setDarkMode(prev => !prev);
  }
  const divDisplay =()=> {
    setDivMode(prev => !prev);
  }

  return (
    <darkModeContext.Provider value={{darkMode, divMode, country, countryDetails, mode, divDisplay, setCountry, setCountryDetails}}>
      <countryContext.Provider value={countryDataAPI}>
        <div className={`relative  min-h-screen pt-10 font-nunitoSan ${darkMode ? 'bg-[#202C36]' : 'bg-[hsl(0, 0%, 98%)]'}`}>
          <HeaderComp />
          <main className="static mt-24 w-full px-5 md:px-20">
            <Home />
          </main>
        </div>
      </countryContext.Provider>
    </darkModeContext.Provider>
  );
}

export default App;
