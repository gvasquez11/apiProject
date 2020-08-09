//full request link 
//    https://weather.visualcrossing.com/VisualCrossingWebServices/
//    rest/services/weatherdata/forecast?location=LosAngeles,CA&aggregateHours
//    =24&unitGroup=us&shortColumnNames=false&contentType=csv&key=DKGYT53L5UYUDZD74ACI1RD2C

const api = {

    key: "895a3462adae3829d5d832c2bc0482c5",
    base: "https://api.openweathermap.org/data/2.5/weather?q="
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(eve){
    if(eve.keyCode == 13){
        getData(searchbox.value)
        console.log(searchbox.value)
    }

}

function getData(query){

    fetch(`${api.base}${query}&units=imperial&appid=${api.key}`)
        .then(weather =>{
            return weather.json();
        }).then(displayResults);
}

function displayResults(weather){
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let data = document.querySelector('.location .date');
    data.innerText = dateFunction(now);
}

function dateFunction(currentDate){
    let months = ["January", "February", "March", "April", "May", "June","July",
        "August", "September", "October", "November", "December"]
    let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let day = days[currentDate.getDay()];
    let month = months[currentDate.getMonth()];
    let date = currentDate.getDate();
    let year = currentDate.getFullYear();

    return `${day} ${month} ${date} ${year}`;
}

