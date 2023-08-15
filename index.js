// Initialize and add the map

import street_light_data from './street_lights.json' assert { type: "json" };
import energy_consumed_data from './energy_consumed.json' assert { type: "json" };

import street_to_device from './streetToDevice.json' assert { type: "json"}; 
let map;
const { GoogleMap } = await google.maps.importLibrary("maps");
const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

const {encoding} = await google.maps.importLibrary("geometry");
const geocoder = new google.maps.Geocoder();
let streetToDeviceMap = new Map();
let deviceToLocationMap = new Map();
let total_min_dist = 0;
let counter = 0;

async function initMap() {
  // The location of Uluru
  const initial_position = { lat: 12.842193, lng: 77.66409 };
  // Request needed libraries.
  //@ts-ignore

  var latlng_blr = new google.maps.LatLng(initial_position);
  var mapOptions = {
    zoom: 15,
    center: latlng_blr
  }
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
  street_light_data.forEach(street_lamp => {

  var latlng = new google.maps.LatLng(street_lamp.location_coordinates[1],street_lamp.location_coordinates[0]);
  //var marker = new google.maps.Marker({
  //    position: latlng,
  //    title:street_lamp.deviceID
  //});
  
  /*var marker = new google.maps.Marker({
      position: latlng,
      title:street_lamp.deviceID
  });*/
  //marker.setMap(map);
  deviceToLocationMap.set(street_lamp.deviceID, street_lamp.location_coordinates);
});
}

function addMarker(latLng, color) {
  let url = "images/";
  url = url + color + ".png";

  let marker = new google.maps.Marker({
    map: map,
    position: latLng,
    icon: url    
  });
  marker.setMap(map);

};








function compute_distance(initial_position, dest_position){  
  var destCord = new google.maps.LatLng(initial_position);
  var srcCord = new google.maps.LatLng (dest_position);
  var distance = google.maps.geometry.spherical.computeDistanceBetween(destCord, srcCord)
  //console.log(distance);
  return distance;
  
}

async function compute_power(){
    
  var sorted = energy_consumed_data.sort(function sortByDeviceID(a, b) { // non-anonymous as you ordered...
    return b.deviceID < a.deviceID ?  1 // if b should come earlier, push a to end
         : b.deviceID > a.deviceID ? -1 // if b should come later, push a to begin
         : 0;                   // a and b are equal
    });

   let device_energy = new Map();
   energy_consumed_data.forEach(device_record => {
      var total_power = device_energy.get(device_record.deviceID);
      if (!total_power) {
        total_power = 0;
      }
      device_energy.set(device_record.deviceID, device_record.powerConsumption + total_power);
   });
   device_energy.forEach(function(value, key) {
      console.log("Device ID " + key + " total Power: " + value);
      street_light_data.forEach(record => {

        var latlng = new google.maps.LatLng(record.location_coordinates[1],record.location_coordinates[0]);

        if (key === record.deviceID) {
          if (value === 0) {
            addMarker(latlng, "grey")
          }
          else if (value > 0 && value < 801) {
            addMarker(latlng, "yellow")
          }
          else if (value > 800 && value < 1701) {
            addMarker(latlng, "orange")
          }
          else {
            addMarker(latlng, "red")
          }

          }
        })
      })

   }




function map_to_street(latLng, deviceID){
  geocoder
  .geocode({ location: latLng })
  .then((response) => {
    if (response.results[0]) {
      //console.log(response.results[0]);

      const typeContainsStreetAdd = (elem) => elem.types.includes("route");

      const addrComponentRoute = (elem) => elem.types.includes("route");

      var indx = response.results.findIndex(typeContainsStreetAdd);
    
      var streetName = "";
      if (indx !== -1){
        console.log(response.results[indx]);
        var routeIndx = response.results[indx].address_components.findIndex(addrComponentRoute);
        if (routeIndx !== -1){
          console.log(response.results[indx].address_components[routeIndx]);
          streetName = response.results[indx].address_components[routeIndx].long_name;
        }
      }
      var deviceIDs = streetToDeviceMap.get(streetName);
      if(!deviceIDs){
        deviceIDs = [];
      }
      deviceIDs.push(deviceID);
      streetToDeviceMap.set(streetName, deviceIDs);
    }
    else {
      console.log("No results found");
    }
  }
  )

}


async function reverse_geocode(lowIndex, highIndex){
  var counter = 0;
  //console.log('total streets ' + street_light_data.length);
  for (let i = lowIndex; i <= highIndex; i++) {
    const geocoder = new google.maps.Geocoder();

    const latlng = {
      lat: street_light_data[i].location_coordinates[1],
      lng: street_light_data[i].location_coordinates[0]

    };
    map_to_street(latlng, street_light_data[i].deviceID);
    }
}

function computeMinDistDevice(listOfLights) {
  for (let j = 0; j < listOfLights.length; j++) {
    var point1 = deviceToLocationMap.get(listOfLights[j]);
    var min_distance = 100000;
    var latlng1 = new google.maps.LatLng(point1[1],point1[0]);
    for (let k = 0; k < (listOfLights.length); k++) {
      if(j !== k ){
        var point2 = deviceToLocationMap.get(listOfLights[k]);
        if (point1!== null && point2 !== null){
          var latlng2 = new google.maps.LatLng(point2[1],point2[0]);
          let dist = compute_distance(latlng1, latlng2);
          if (dist < min_distance) {
            min_distance = dist;
          }
        }
      }
       
    }
    //console.log(listOfLights[j]);
    //console.log(' the minimum distance was '+ min_distance); 
    if (listOfLights.length > 1){
      counter = counter + 1;
      total_min_dist = total_min_dist + min_distance;
    }
    //console.log('counter is ' + counter)
    
  }    
}



initMap();
//compute_distance();
compute_power();
/*reverse_geocode(0, 299);
setTimeout(() => {
  console.log('after a min');
  reverse_geocode(300, 533);
}, 65000);
setTimeout(() => {
  json = JSON.stringify(Object.fromEntries(streetToDeviceMap));
  console.log('all done');
}, 120000)*/



var loadedStrDeviceMap = new Map(Object.entries(street_to_device));

//console.log('before all min computation');
let total_distance = 0;
let min_distance = [];
let total_devices = 0;
loadedStrDeviceMap.forEach(function(value, key) {
	console.log(key + " = " + value);
  //call another function passing street name and list of device ids
  total_devices = total_devices + value.length;
  computeMinDistDevice(value);
})
console.log('average distance is '+ (total_min_dist/counter));
//21.234865686762436
//ddMarker({lat: -34.597, lng: 150.844}, "orange");
