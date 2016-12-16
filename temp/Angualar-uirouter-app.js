
var app = angular.module("angular-ui",["ui.router"]);
console.log("javascipt");

function routeConfig($urlRouterProvider,$stateProvider) {

  console.log("Inside the function");
  $urlRouterProvider.when("/", "/welcome");

  $stateProvider.state("default",{
    url:"/welcome",
    controller:"",
    templateUrl:"home.html"
  })
}


app.config(routeConfig);
