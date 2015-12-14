angular.module('AngularScaffold.Controllers')
  .controller('usuarioController', ['$state','$scope', 'usuarioService', function ($state,$scope, usuarioService) {
  
    $scope.user={};
    $scope.user2={};
    $scope.user_show={};
    $scope.user_tabla = [];
    $scope.users=[];

      $scope.Postusuario = function(){
        console.log($scope.user + " soy frontend controller");
        usuarioService.Postusuario($scope.user).then(function(response){
          alert("Posted to /usuario");
          $scope.getusuario();
        }).catch(function(err){
          alert("Error posting to usuario");
        });
      }

      //Para El Fondo
      $scope.viewBackground = "background-usuario";

      function setHeight() {
        windowHeight = $(window).innerHeight();
        $('#body_facturacion').css('min-height', windowHeight);
      };
      setHeight();

      $(window).resize(function() {
        setHeight();
      });
  }]);
