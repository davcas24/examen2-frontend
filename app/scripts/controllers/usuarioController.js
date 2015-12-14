angular.module('AngularScaffold.Controllers')
  .controller('usuarioController', ['$state','$scope', 'usuarioService', function ($state,$scope, usuarioService) {

    $scope.user={};

      $scope.Postusuario = function(){
        console.log($scope.user + " soy frontend controller");
        usuarioService.Postusuario($scope.user).then(function(response){
          alert("Posted to /usuario");
        
        }).catch(function(err){
          alert("Error posting to usuario");
        });
      }

  }]);
