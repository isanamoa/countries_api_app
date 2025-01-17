import { useContext } from "react";
import { MdArrowBack } from "react-icons/md";

import Data from '../utils/data.json';
//import useCountryDataAPI from "../api/useCountryDataAPI";
//import Loading from "./Loading";
import { darkModeContext } from "../App";

const Details = () => {
    const modeContext = useContext(darkModeContext);
    //const countryDataAPI = useCountryDataAPI();
    //const { isLoading, countryDetails, fetchDisplayCountryData } = countryDataAPI;
    //const router = useRouter();

    /*const pathSplit = window.location.pathname.split("/");
    const  countryName = pathSplit[2];
    console.log(countryName);
    console.log(Data[0].name)
    const countryDetails = Data.filter(value => {
        return value.name === countryName;
    });
    console.log(countryDetails);

    grid grid-cols-2 sm:grid-cols-3 md:grid
    */
   /*
    useEffect(()=>{
        //const pathSplit pathSplit[2]= window.location.pathname.split("/");
        const  countryName = modeContext.country;
        console.log(countryName)
        fetchDisplayCountryData(countryName);
    },[])*/
    let { countryDetails, setCountryDetails } = modeContext;

    function convertAlphaCodeToName(AlphaCode) {
        const country = Data.filter((value) => (
            value.alpha3Code === AlphaCode ));
        return country[0].name;
    }

    const viewDetailHandle = (countryName) => {
        //router.push(`/countries/${countryName}`);
        //console.log(countryName)
        setCountryDetails(Data.filter((country) => country.name === countryName));
    }

    return (
        <div className={`pb-16 ${modeContext.darkMode ? 'bg-[#2B3844] border border-transparent text-white' : 'bg-white border border-transparent text-black'}`} >
            { (countryDetails || countryDetails != undefined) && 
            <>
                <button onClick={()=>modeContext.divDisplay()} className="w-[100px] mb-10 py-2 px-5 flex items-center gap-2 bg-transparent border border-gray-200"> <MdArrowBack /> Back</button>
                <section className='flex flex-col mx-auto gap-16 md:flex-row '>
                    <img className='flex-1 w-full sm:w-full md:w-1/2 py-5 px-10 md:px-0' src={countryDetails[0]?.flags.svg} alt='country flag' width={50} height={50} loading="lazy" />
                    <div className='flex-1 flex flex-col gap-5 p-10 text-left'>
                        <div className="mb-5">
                            <h4 className=" font-bold py-4">{countryDetails[0]?.name}</h4>
                            <div className="flex flex-col justify-between gap-3 md:flex-row text-sm">
                                <div>
                                    <p className="py-2">Native Name: {countryDetails[0]?.nativeName}</p>
                                    <p className="py-2">Population: {countryDetails[0]?.population.toLocaleString()}</p>
                                    <p className="py-2">Region: {countryDetails[0]?.region}</p>
                                    <p className="py-2">Sub Region: {countryDetails[0]?.subregion}</p>
                                    <p className="py-2">Capital: {countryDetails[0]?.capital}</p>
                                </div>
                                <div>
                                    <p className="py-2">Top Level Domain: {countryDetails[0]?.topLevelDomain}</p>
                                    <p className="py-2">Currency: {countryDetails[0]?.currencies[0].name}</p>
                                    <p className="py-2">Languages: {countryDetails[0]?.languages[0].name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-col md:flex-row text-sm gap-3">
                            <p className="py-2">Border Countries:</p>
                            <div className="flex flex-wrap gap-2">
                                { countryDetails[0]?.borders && countryDetails[0]?.borders.map((border, index) => (
                                    <button key={index} onClick={()=>viewDetailHandle(convertAlphaCodeToName(border))} className="bg-transparent border border-gray-200 py-2 px-4"> {convertAlphaCodeToName(border)} </button>) )}
                            </div>
                        </div>
                    </div>
                </section>
            </>
            
            }
        </div>
    )
}

export default Details;
