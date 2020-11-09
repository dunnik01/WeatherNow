$(".cityName").keydown(function(event){

  if(event.which==13){
    logic();
  }
});
$("button").click(function(){
    logic();
});

function logic(){

  var cityNameInput=$(".cityName").val();
  var letters = /^[A-Za-z]+$/;
  var units="metric";
  const appid= "590531830d5c27633143060bdee42fe1";


  if(cityNameInput.length<1){
    console.log("here2");
    invalidInput();
  }else{
   if((!/[^a-zA-Z]/.test(cityNameInput)))
     {
       var url ="https://api.openweathermap.org/data/2.5/weather?q="+ cityNameInput+"&appid="+appid+"&units="+units;
       console.log(url);
  fetch(url).then(function(response) {

  return response.json();
}).then(function(data) {
  var temperature=data.main.temp;
  var weatherImage=data.weather[0].icon;
  var weatherConditionURL= " http://openweathermap.org/img/wn/"+ weatherImage+"@2x.png"
  var weatherDescription=data.weather[0].description;
  $(".weather-desc").text("Current weather is  : " + weatherDescription );
$(".weather-temp").text("Current temperature in " +cityNameInput + " is "+ temperature + " C");
$(".icon").attr("src",weatherConditionURL);
}).catch(function() {

  invalidInput();
});
    // }
    }
   else
     {

     invalidInput();
     }
  }
}
function invalidInput(){
$(".cityName").val('');
  alert("Sorry! Please enter a valid city name");
}
