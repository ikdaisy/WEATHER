 async function fetchData(){
    try{
       const cityName=document.getElementById("search-input").value;
        console.log(cityName);
        
        
        const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7cc0348e76f90221953aeabad3e9266f`)
        // console.log(res);
        
        // console.log(res.status);
        if(res.status==404){
            console.log(res.status);
            document.getElementById("main-card").innerHTML=`
            <div class="not-found-card">
                <h1>404</h1>
                <h3>Location Not Found</h3>
                <a onclick="reloadPage()"><p>Try Again </p></a>               
            </div>
            `
            document.getElementById("main-card").style.backgroundImage="url('./images/pic1.jpeg')";
            

            
        }
        else{
            const data=await res.json()
            console.log(data);
            document.getElementById("weather-display").innerHTML=
            ` <h3 class="city-name">${data.name}</h3>
                <div class="card"  >
                     <img  class="icon" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="icon">

                    <h2 class="temp">${Math.ceil(data.main.temp-273.15)}<sup style="font-size:20px;">°C</sup></h2>

                    
                    <h3 class="type">${data.weather[0].main}</h3>
                     <h5 class="date" id="date"></h5>

                     
                   
                   

                </div>`

                document.getElementById("weather-details").innerHTML=` 
                <table>
                        <tr>
                            <td>
                                <p>Feels like</p>
                                <h3>${Math.ceil(data.main.feels_like-273.15)}<sup style="font-size:12px;">°C</sup></h3>
                            </td>
                            <td>
                                <p>Wind</p>
                                <h3>${data.wind.speed}km/hr</h3>
                            </td>
                            <td>
                                <p>humidity</p>
                                <h3>${data.main.humidity}</h3>
                            </td>
                            <td>
                                <p>Air Pressure</p>
                                <h3>${data.main.pressure} hPa</h3>
                            </td>
                            <td>
                                <p>Visibilty</p>
                                <h3>${data.visibility/1000}km</h3>
                            </td>
                        </tr>
                    </table>`
                    
                    let imageLocation="";
                   
                    if(data.weather[0].main=="Clouds"){
                        imageLocation="url('./images/pexels-pixabay-268917.jpg')"

                    }
                    else if(data.weather[0].main=="Rain"){

                        imageLocation="url('./images/seoul-rain.jpeg')"
                    }
                    else if(data.weather[0].main=="Haze"){
            
                        imageLocation="url('./images/haze.webp')"

                    }
                    else if(data.weather[0].main=="Snow"){
                        
                        imageLocation="url('./images/snow.jpeg')";

                    }
                    else if(data.weather[0].main=="Clear"){
                       
                        imageLocation="url('./images/clear.webp')"

                    }
                    else if(data.weather[0].main=="Thunderstorm"){
                        // console.log(data.weather[0].main);
                      
                        imageLocation="url('./images/thunderstorm.jpeg')";

                    }
                    else if(data.weather[0].main=="Atmosphere"){
                        // console.log(data.weather[0].main);
                    
                        imageLocation="url('./images/atmosphere.webp')"
                    }
                    else{
                        imageLocation="url('./images/atmosphere.webp')";

                    }
                    document.getElementById("main-card").style.backgroundImage=imageLocation;
                    document.getElementById("main-card").style.backgroundPosition="cover";
                    document.getElementById("main-card").style.backgroundRepeat="no-repeat";
                    document.getElementById("main-card").style.backgroundSize="cover";
            document.getElementById("main-card").style.backgroundColor="white";




                 let date=new Date()
                document.getElementById("date").textContent=` ${putZero(date.getDate())}-${putZero(date.getMonth()+1)}-${date.getFullYear()}`

               
        }
        
       


    }
    catch(error){
        console.log(error);
        
    }
}

function putZero(date){
    return date<10?"0"+date:date;

}

function reloadPage(){
    window.location.reload()
}
