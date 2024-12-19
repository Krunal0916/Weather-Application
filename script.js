const city = document.getElementById("city-span");
const date = document.getElementById("date-span");
const temp = document.getElementById("temp-span");
const cityInput = document.getElementById("city-input");


           async function getWeatherData() {
            const userCityInput = cityInput.value;

            if(!userCityInput){
                alert("Please Enter a City Name");
                return;
            }

            const dateObj = new Date();

            const year = dateObj.getFullYear();
            const month = dateObj.getMonth() + 1;
            const todayDate = dateObj.getDate();
   try{
         const res = await fetch(
                `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userCityInput}/${year}-${month}-${todayDate}?key=B8E4Q5CCEVR3ATDUTSE27YJW9`);
           
            const data = await res.json();

            console.log(data);
            city.innerText = data.resolvedAddress;
            date.innerText = data.days[0].datetime;
            temp.innerText = `${data.currentConditions.temp} deg F `;
            }catch (error){
                console.log(error);
            }    
            
            cityInput.value = "";
   }
            

          
           