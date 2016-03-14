function isArrayEmpty(arr) {
  var r;
  if(typeof arr ==='object' && arr instanceof Array ){
     if(!arr.length){
        r = true;
     }else{
        if (arr[0] == null) {
          r = true;
        }
        else {
          r = false;
        }
     }
    }else{
     r = true;
  }
  return !r;
}

var app = angular.module('myApp', []);

app.controller('commentsCtrl', function($scope, $http) {
  $http.get("comment-data/A40H3T1iunU.json")
  .then(function (response) {
      $scope.data = response.data;
      $scope.comments = response.data.comments;
      $scope.check = isArrayEmpty;
      $scope.pxp = [
      	{name : "Previous experience", color : "blue", code : 1},
      	{name : "No previous experience", color : "red", code: 2},
      	{name : "N.A.", color : "green", code : 3},
      ];	
      $scope.motivation = [
        {name : "Positive motivation", color : "blue", code : 1},
        {name : "Negative motivation", color : "red", code: 2},
        {name : "N.A.", color : "green", code : 3},
      ];
  }, function (response) {
  	  $scope.data = "Error reading JSON file";
  });
});