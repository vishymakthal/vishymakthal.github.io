var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() {
  if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
    var location = JSON.parse(xmlHttp.responseText);
    if(location.longitude > -10 && location.longitude < 45 && location.latitude > 35) { // true if in Europe
      document.getElementById("directions").innerHTML = " <iframe width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/directions?key=AIzaSyDvsONygj5EuKTvRMA_NvPDBTH2K4LGNu4&destination=Vi%C5%9Fnezade%20Mahallesi%2C%20BJK%20Vodafone%20Park%2C%20Be%C5%9Fikta%C5%9F%2FIstanbul%2C%20Turkey&origin=" + location.city + "+" + location.region + "\"allowfullscreen></iframe>";
    }
    else{ // not in Europe
      document.getElementById("directions").innerHTML = " <iframe width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/directions?key=AIzaSyDvsONygj5EuKTvRMA_NvPDBTH2K4LGNu4&destination=Vi%C5%9Fnezade%20Mahallesi%2C%20BJK%20Vodafone%20Park%2C%20Be%C5%9Fikta%C5%9F%2FIstanbul%2C%20Turkey&origin=" + location.city + "+" + location.region + "&mode=flying\"allowfullscreen></iframe>";
    }
  }
}
xmlHttp.open("GET", "https://ipapi.co/json/", true); // true for asynchronous
xmlHttp.send(null);
