const submit=document.getElementById("submitbtn");
const cityid=document.getElementById("CityName");
const city_out=document.getElementById("city_name");
const temp=document.getElementById("num");
const temp_stat=document.getElementById("temp_stat");
const hide=document.querySelector(".middle_layer");

const day=document.getElementById("day");
const date=document.getElementById("date");
const getDayAndDate=()=>{
    const days=new Date();
    var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    day.innerHTML=`${daylist[days.getDay()]}`; 
    date.innerHTML=`${days.getDate()}/${days.getMonth()+1}/${days.getFullYear()}`;   
}
getDayAndDate();

//function on click
const getinfo=async(event)=>{
    event.preventDefault();

    let cityVal=cityid.value;
    if(cityVal===" ")
    {   hide.classList.add("data_hide");
        city_name.innerText=`please write the name of the city`;
        
    }
    else{
        try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=120db43a2f90b8476dc604b556dfe60c`;
        const response=await fetch(url);
         const objData=await response.json();   //res.json used with async await
            const arrData=[objData];
            console.log(arrData[0].weather[0].main);
            const tempMood=arrData[0].weather[0].main;
            hide.classList.remove("data_hide");
            temp.innerText=`${arrData[0].main.temp}`;
            city_out.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            if(tempMood=="clear")
            {
                temp_stat.innerHTML='<i class="fas fa-sun    "></i>';
            }
            else if(tempMood=="Clouds")
            {
                temp_stat.innerHTML='<i class="fas fa-cloud" aria-hidden="true"></i>'
            }
            else if(tempMood=="Rain")
            {
                temp_stat.innerHTML='<i class="fas fa-cloud-rain    "></i>'
            }
            else if(tempMood=="Misty")
            {
                temp_stat.innerHTML='<i class="fas fa-cloud-fog"></i>'
            }
            else{
                temp_stat.innerHTML='<i class="fas fa-cloud" aria-hidden="true"></i>'
            }
        }
        catch{
            city_out.innerText=`please enetr the name of the city`;
            hide.classList.add("data_hide");// hidden class
        }
       
    }

}
submit.addEventListener('click',getinfo);
