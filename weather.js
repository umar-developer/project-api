$(document).ready(function(){
  $('#submitWeather').click(function(){
  var city = $("#city").val();
  if(city !=''){
    
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + 
      "&APPID=084ace18e267fcf69f06bcd71b7d1c2a",
      type: "GET",
      dataType: "JSON",
      success: function(data){
        var widget = show(data);
      
      $("#show").html(widget);
       $("#city").val();
    }
    });
  }
  else{
    $("#error").html('Field cannot be empty');
  }
});
});

function show(data){
 

  return "<h2>Current temprature for " + data.main.temp +  "</h2>";
   "<h3>current weather for " + data.main.weather +  "</h3>";
   "<h3>pressure" + data.main.pressure + "</h3>";
   "<h3>wind speed " + data.main.wind_speed + "</h3>";



}