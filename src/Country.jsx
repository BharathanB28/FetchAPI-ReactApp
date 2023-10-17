import './App.css';

function Country({country}){
    return(

        <div className="country-div">
        <h2>{country.name.common}</h2>
        <hr/>
        <img className="img" src={country.flags.png}/>
        <h4>Capital: {country.capital}</h4>
        <h4>Regoin: {country.region}</h4>
        <h4>Country Code: {country.cca3}</h4>
       </div>
    )
}

export default Country;