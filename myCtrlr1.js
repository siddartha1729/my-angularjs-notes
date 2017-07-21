/*
 AngularJS Controller
 AngularJS controllers control AngularJS applications.
 Controllers always belong to a module.
 Applications in AngularJS are controlled by controllers.
 AngularJS controllers control the data of AngularJS applications.
 AngularJS controllers are regular JavaScript Objects.
 AngularJS applications are controlled by controllers.
 The ng-controller directive defines the application controller.
 A controller is a JavaScript Object, created by a standard JavaScript object constructor.

 $scope
 application object (the owner of application variables and functions).
 - has properties (variables)
 The scope is the binding part between the HTML (view) and the JavaScript (controller).
 The scope is an object with the available properties and methods.
 The scope is available for both the view and the controller.

 adding properties to the $scope object in the controller
 - the view (HTML) gets access to these properties.
 - In the view, prefix $scope is not needed, just refer to a propertyname, like {{carname}}


 Scope
 ????????????
 If we consider an AngularJS application to consist of:
 1. View, which is the HTML.
 2. Model, which is the data available for the current view.
 3. Controller, which is the JavaScript function that makes/changes/removes/controls the data.
 Then the scope is the Model. ????????????
 ????????????

 The scope is a JavaScript object with properties and methods, which are available for both the view and the controller.


 */

app
    .controller('myCtrl1', function($scope, $http) {
      $scope.color = 'myCtrl1\'s $scope.color - Red'; // properties (variables)
    });

app
    .controller('myCtrl2', function($scope, $http) {
      $scope.color = 'myCtrl2\'s $scope.color - Blue'; // properties (variables)
    });

app
    .controller('filterCtrl', function($scope, $http) {
      $scope.firstName2 = 'Johnny';
    });

app
    .controller('personController', function($scope, $http) {
      $scope.quantity = 11; // variable in AngularJS // properties (variables)
      $scope.price = 11; // properties (variables)

      $scope.names = ['Jani', 'Hege', 'Kai'];
      $scope.names2 = [
        {name: 'Jani', country: 'Norway'},
        {name: 'Hege', country: 'Sweden'},
        {name: 'Kai', country: 'Denmark'}
      ];

      $scope.setQuantity = function(quantity1) {  // method
        $scope.quantity = quantity1;
      };
      $scope.setPrice = function(price1) {    // method
        $scope.price = price1;
      };
    });

app
    .controller('myCtrl99', function($scope, $http) {
      $scope.color = 'myCtrl99\'s $scope.color - Green';

      let options = {
        method: 'GET' // 'POST';
        , url: 'https://wdnrvm61mi.execute-api.us-west-2.amazonaws.com/dev/samplee/servicee1'
        , headers: {
          'Content-Type': 'application/json'
          , "Authorization": 'eyJraWQiOiJtV2NzRGdzS1dhXC95TTE1YlRJV1F1Nm1cL3hzcllxa0xcL3BnXC9hQ0RjUnBHOD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI4ZGE0YjFmMi1hYTk4LTQzZjQtOTg5Yi1jMWM2ODQ1NTc5MjgiLCJhdWQiOiI2b2dpbzRkZ29wdjExOGcxazhtZTRtZzVsciIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTQ5ODIxMTgyNiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tXC91cy13ZXN0LTJfNXJ0Z1czQ1lGIiwiY29nbml0bzp1c2VybmFtZSI6InRlbGVtZXRyeXVzZXIxIiwiZXhwIjoxNDk4MjE1NDI2LCJpYXQiOjE0OTgyMTE4MjYsImVtYWlsIjoiVGVhbS1HSVMtQW1hem9uV2ViU2VydmljZXNBZG1pbnNAY2EuY29tIn0.PwR7Lo1WZXABpMbQ8XcninSUwxTO_uqLO3gCcNkY1_H2iaz0__KMbI7Hj-xbE9focE6DKbc4YdLlGqGYmFO-6MRfy4EbJE_0G0amkNBkVNCVy0LMfpPXtGd-viT-HUWNpw-Y5GF2pHfkMm4fIibZUzlL7aCG2pzzC4WS5hzHCxK5-rr78t3vdFTUNHjG6LjeM5vlrStcC2x1iaLVmA3UkZc8jSoZTUvLbaGPESWTfMlBsFOunSdCSEoQi4BASwZ3GH3jRgmbxb1iEBbbrH54i-cRvRfMwRWHl8JTjnPzlQm_6gClNBcAAoYlgMITBdLyPKhMAMPhOCO8oKZpSjpiYQ'
        }
        , data: {"userId": "peey01"}
      };

      return callApi1($scope, $http, options);
    });


function callApi1($scope, $http, options1) {

  return;

  $scope.lblOptions1 = options1;
  $scope.lblStatus1 = '-';
  $scope.lblData1 = '-';
  $scope.lblError1 = '-';

  $http(options1)
      .success(function(data, status) {
        $scope.lblStatus1 = status;
        $scope.lblData1 = JSON.stringify(data);
      })
      .error(function(data, status) {
        $scope.lblStatus1 = status;
        $scope.lblError1 = JSON.stringify(data);
      });
}

