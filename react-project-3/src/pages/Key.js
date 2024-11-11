
//https://app.freecurrencyapi.com/dashboard

const APIKEY = fca_live_C2su03vbd3I3vDXWwhHFqGQT92BskHNUYnoabFY0;

//const movieDataList = document.getElementById("movieDataList");
//const movieBox = document.getElementById("movie_box"); // Removed unused elements

//movieDataList.addEventListener("change", () => { // Using "change" for user experience
//  const movie = movieDataList.value;

 // if (movie) {
    const apiUrl = `https://api.freecurrencyapi.com/v1/latest?apikey={APIKEY}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        
        console.log(); 

});