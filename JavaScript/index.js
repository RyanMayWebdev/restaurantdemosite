// [START maps_add_map]
// Initialize and add the map
function initMap() {
  // [START maps_add_map_instantiate_map]

  const Toronto = {
    lat: 43.64870266670145,
    lng: -79.38019635675967
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: Toronto,
  });
  // [END maps_add_map_instantiate_map]
  // [START maps_add_map_instantiate_marker]

  const marker = new google.maps.Marker({
    position: Toronto,
    map: map,
  });
  // [END maps_add_map_instantiate_marker]
}
// [END maps_add_map]


// Add click listening events to all of the menu page titles

var menuLinks = document.querySelectorAll(".menuOption");
var navLinks = document.querySelectorAll(".navlink");
document.querySelector("#menuDrop").addEventListener("click", mobileMenuShow);

for (let x = 0; x < menuLinks.length; x++) {
  menuLinks[x].addEventListener("click", displayMenu);
}

for (let x = 0; x < navLinks.length; x++) {
  navLinks[x].addEventListener("click", mobileMenuHide);
}


// This makes the related menu visible when its relative title is clicked and makes all other menus invisible

function displayMenu() {
  var menuId = this.id;
  document.getElementById("entrees").classList.remove("visible");
  document.getElementById("appetizers").classList.remove("visible");
  document.getElementById("rolls").classList.remove("visible");
  document.getElementById("desserts").classList.remove("visible");

  if (menuId.includes("appetizerLink")) {
    document.getElementById("appetizers").classList.add("visible");
  } else if (menuId.includes("entreeLink")) {
    document.getElementById("entrees").classList.add("visible");
  } else if (menuId.includes("rollLink")) {
    document.getElementById("rolls").classList.add("visible");
  } else if (menuId.includes("dessertLink")) {
    document.getElementById("desserts").classList.add("visible");
  }

}

function mobileMenuShow() {
  document.querySelector(".mobiledropdown").classList.remove("mobileMenuHide");
  document.querySelector(".mobiledropdown").classList.add("mobileMenuReveal");
  document.querySelector("#Main").addEventListener("click",mobileMenuHide);
}

function mobileMenuHide () {
  document.querySelector(".mobiledropdown").classList.add("mobileMenuHide");
  document.querySelector(".mobiledropdown").classList.remove("mobileMenuReveal");
}