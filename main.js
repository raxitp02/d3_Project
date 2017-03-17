var app =  angular.module("d3App",[]);
            app.controller("myController" ,function($scope){

              var opsMetrics = [
                   { 'GSP': "Russia",      'systemAvailability': "99.40%", 'ProductionIncidents': 0 ,   'ProdIncidentsYTD': 7 },
                   { 'GSP': "USSD",        'systemAvailability': "100%",   'ProductionIncidents': 1 ,   'ProdIncidentsYTD': 3 },
                   { 'GSP': "Colombia",    'systemAvailability': "100%",   'ProductionIncidents': 1 ,   'ProdIncidentsYTD': 2 },
                   { 'GSP': "Vietnam",     'systemAvailability': "100%",   'ProductionIncidents': 10 ,  'ProdIncidentsYTD': 148 },
                   { 'GSP': "China-ADD",   'systemAvailability': "100%",   'ProductionIncidents': 1 ,   'ProdIncidentsYTD': 93 },
                   { 'GSP': "CAT",         'systemAvailability': "100%",   'ProductionIncidents': 5 ,   'ProdIncidentsYTD': 46 },
                   { 'GSP': "Banca Gulf",  'systemAvailability': "100%",   'ProductionIncidents': 2 ,   'ProdIncidentsYTD': 27 },
                   { 'GSP': "US/Expat",    'systemAvailability': "100%",   'ProductionIncidents': 0 ,   'ProdIncidentsYTD': 6 },
                   { 'GSP': "China",       'systemAvailability': "100%",   'ProductionIncidents': 2 ,   'ProdIncidentsYTD': 66 },
                   { 'GSP': "Turkey",      'systemAvailability': "100%",   'ProductionIncidents': 0 ,   'ProdIncidentsYTD': 1 },
                   { 'GSP': "Italy",       'systemAvailability': "99.70%", 'ProductionIncidents': 0 ,   'ProdIncidentsYTD': 2 },

                             ];

                             $scope.opsMetrics = opsMetrics;

            });




/*



var app = angular.module('d3App', []);
app.controller('myController',['$scope','$http', function($scope, $http) {
    $http.get("opsMetrics.json").success(function(opsMetrics){
       $scope.opsMetrics = opsMetrics;
    });

}]);







var appBusiness =  angular.module("d3App",[]);
            appBusiness.controller("myControllerBusiness" ,function($scope){
            var businessMetrics = [
                 { "Launch TimeFrame " : "Jun-13", "Channel" : "Banca",   "GSP" : "Russia",     "Program to Date" : 345.672,  "Quotes" : 3.377,   "Apps" : 1.658, "Quote to App Conversion Rate" : "49%", "Issued Premium USD" : "$22,000",     "# Agents Using Platform" : "14.295" },
                 { "Launch TimeFrame " : "Jun-13", "Channel" : "DTC",     "GSP" : "USSD",       "Program to Date" : 195.861,  "Quotes" : 2.498,   "Apps" : 1.943, "Quote to App Conversion Rate" : "78%", "Issued Premium USD" : "$21,000",     "# Agents Using Platform" : "14.295" },
                 { "Launch TimeFrame " : "Aug-14", "Channel" : "Agency",  "GSP" : "Columbia",   "Program to Date" : 521.077,  "Quotes" : 17.318,  "Apps" : 1.330, "Quote to App Conversion Rate" : "8%",  "Issued Premium USD" : "$4,000,000",  "# Agents Using Platform" : "14.295" },
                 { "Launch TimeFrame " : "Nov-14", "Channel" : "Banca",   "GSP" : "Vietnam",    "Program to Date" : 72.754,   "Quotes" : 1.871,   "Apps" : 194,   "Quote to App Conversion Rate" : "10%", "Issued Premium USD" : "",            "# Agents Using Platform" : "14.295" },
                 { "Launch TimeFrame " : "Oct-14", "Channel" : "DTC",     "GSP" : "China-ADD",  "Program to Date" : 9.264,    "Quotes" : 531,     "Apps" : 20,    "Quote to App Conversion Rate" : "4%",  "Issued Premium USD" : "$5,000",      "# Agents Using Platform" : "14.295" },
                 { "Launch TimeFrame " : "Aug-15", "Channel" : "Group",   "GSP" : "CAT",        "Program to Date" : 507,      "Quotes" : 419,     "Apps" : 88,    "Quote to App Conversion Rate" : "21%", "Issued Premium USD" : "$0",          "# Agents Using Platform" : "14.295" },
                 { "Launch TimeFrame " : "May-16", "Channel" : "Group",   "GSP" : "Banca Gulf", "Program to Date" : 235,      "Quotes" : 14,      "Apps" : 7,     "Quote to App Conversion Rate" : "50%", "Issued Premium USD" : "$0",          "# Agents Using Platform" : "14.295" },
                                ];
                        $scope.businessMetrics = businessMetrics;
                });



var appBusinessInfo =  angular.module("d3App",[])
                        .controller("myControllerBusinessInfo" ,function($scope){
            var businessMetrics_info =
                [
                       { 'LaunchTimeFrame' : ‘Jul-14’, 'Channel' : ‘‘, 'GSvP' : ‘US/Expat’, 'Register' : ‘327’, 'Claims' : ‘8617’, 'Docs/Forms' : ‘698’ },
                       { 'LaunchTimeFrame' : ‘Nov-14’, 'Channel' : ‘‘, 'GSvP' : ‘China’,    'Register' : ‘N/A’, 'Claims' : ‘N/A’,  'Docs/Forms' : ‘N/A’ },
                       { 'LaunchTimeFrame' : ‘Aug-13’, 'Channel' : ‘‘, 'GSvP' : ‘Turkey’,   'Register' : ‘N/A’, 'Claims' : ‘N/A’,  'Docs/Forms' : ‘N/A’ },
                       { 'LaunchTimeFrame' : ‘Aug-13’, 'Channel' : ‘‘, 'GSvP' : ‘Italy’,    'Register' : ‘N/A’, 'Claims' : ‘N/A’,  'Docs/Forms' : ‘1461’ },

                          $scope.businessMetrics_infom = businessMetrics_info;
                ];

/*

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



$.each(opsMetrics, function(i, item) {
    console.log(item);
});
$.each(businessMetrics, function(i, item1) {
  console.log(item1);
});$.each(businessMetrics_info, function(i, item2) {
    console.log(item2);
});
*/
