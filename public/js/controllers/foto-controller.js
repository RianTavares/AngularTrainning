angular.module('alurapic').controller('FotosController', function($scope, $http) {

  $scope.fotos = [];
  $scope.filtro = '';


  $http.get('v1/fotos')
  .success(function(data) { /* valor dentro da function corresponde a resposta da rota*/
    $scope.fotos = data;
  })
  .error(function(erro) {
    console.log(erro);
  });


/*
  var promise = $http.get('v1/fotos');
  promise.then(function(retorno){
    $scope.fotos = retorno.data;
  }).catch(function(error){
    console.log(error);
  });
*/
});
