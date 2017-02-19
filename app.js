(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.dishes = "";

  $scope.checkIfTooMuch = function()
  {
     if($scope.dishes === "")
     {
       $scope.message = "Please enter data first" ;

     }
     else{
       var dishArray = $scope.dishes.split(',');


       if(dishArray.length > 3)
       {
         $scope.message = "Too much!" ;
       }
       else {
         {
           $scope.message = "Enjoy!";
         }
       }
     }

     return $scope.message;


  };
}

})();
