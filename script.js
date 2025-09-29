searchBtn.addEventListener("click", async () => {

    try{
    const userInput = countryInput.value.trim();

    if(!userInput){
        countryDisplay.innerHTML = `<p style = "color:red;">Please enter a country</p>`
        return;
    }
    const url = `https://restcountries.com/v3.1/${userInput}/mexico`

   
    const response = axios.get(url);

    if(!response.ok){throw new Error("Input value not found!")}


    const responseData = response.data[0];

    const name = responseData.name.common;

    const capital = responseData.capital[0]

    const population = responseData.population.toLocaleString();

    const flags = responseData.flags.svg;

    countryDisplay.innerHTML = `<div>
                                <img src="${flags}" alt ="Flag of ${name}">
                                <h3>${name}</h3>
                                <p>Capital: ${capital}</p>
                                <p>Population: ${population}</p>
                                </div>`



    } catch (error) {
        countryDisplay.innerHTML = `<p style = "color:red;>Error finding the country please try again</p>`;
    }
});