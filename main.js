/*
$.getJSON( "main.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "main.json", true);
  xhttp.send();
}

console.log(loadDoc);

*/

var opsMetrics = {
  "GSP":["Russia","USSD","Colombia","Vietnam","China-ADD","CAT","Banca Gulf","US/Expat","China","Turkey","Italy"],
  "System Availability":["99.40%","100%","100%","100%","100%","100%","100%","100%","100%","100%","99.70%"],
  "Production Incidents":[0,1,1,10,1,5,2,0,2,0,0],
  "Prod Incidents YTD":[7,3,2,148,93,46,27,6,66,1,2]
}

//Business Metrics Json data



var businessMetrics = {
  "Launch TimeFrame":["Jun-13","Jun-13","Aug-14","Nov-14","Oct-14","Aug-15","May-16"],
  "Channel":["Banca","DTC","Agency","Banca","DTC","Group","Group"],
  "GSP":["Russia","USSD","Colombia","Vietnam","China-ADD","CAT","Banca Gulf"],
  "Program to Date":[345.672,195.861,521.077,72.754,9.264,507,235],
  "Quotes":[3.377,2.498,17.318,1.871,531,419,14],
  "Apps ":[1.658,1.943,1.330,194,20,88,7],
  "Quote to App Conversion Rate":["49%","78%","8%","10%","4%","21%","50%"],
  "Issued Premium USD":["$22,000","$21,000","$4,000,000","","$5,000","$0","$0"],
  "# Agents Using Platform":["14.295","305","2.223","3.058","**","4.640","40"]
}

var businessMetrics_info = {
  "Launch TimeFrame":["Jul-14","Nov-14","Aug-13","Aug-13"],
  "Channel":[0,0,0,0],
  "GSvP":["US/Expat","China","Turkey","Italy"],
  "Register":["327","N/A","N/A","820"],
  "Claims":["8617","N/A","N/A","N/A"],
  "Docs/Forms":["698","N/A","N/A","1461"]
}
console.log(opsMetrics);
console.log(businessMetrics);
console.log(businessMetrics_info);
