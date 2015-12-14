angular.module('AngularScaffold.Controllers')
  .controller('adminController', ['$state','$scope', 'adminService', 'indexService','$rootScope', '$sessionStorage',
   function ($state,$scope, adminService, indexService, $rootScope, $sessionStorage) {

    $scope.gousuario = function(){
          $state.go('users');
    }

  }]);
