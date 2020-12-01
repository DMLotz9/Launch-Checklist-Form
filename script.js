window.onload=function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
      document.getElementById("missionTarget").innerHTML= `      <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[2].name}</li>
         <li>Diameter: ${json[2].diameter}</li>
         <li>Star: ${json[2].star}</li>
         <li>Distance from Earth: ${json[2].distance}</li>
         <li>Number of Moons: ${json[2].moons}</li>
      </ol>
      <img src="${json[2].image}"></img>`;
      }); 
   });
};