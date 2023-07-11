import React, {useContext} from 'react'
//import HomePage from "./countries/page";
import Nav from "./Nav";
import CountryCard from "./CountryCard";
import CountryDetails from "./CountryDetails";

import { darkModeContext } from "../App";

const Home = () => {
    const modeContext = useContext(darkModeContext);

    return (
      <>
          <div className={`${modeContext.divMode ? 'hidden': 'text-[16px]'}`}>
            <Nav />
          </div>
          <div className={`${modeContext.divMode ? 'hidden': 'grid grid-cols-1 gap-10 justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 text-sm'}`}>
            <CountryCard />
          </div>
          <div className={`${modeContext.divMode ? 'text-[16px]': 'hidden'}`}>
            <CountryDetails />
          </div>
      </>
    );
}

export default Home;
