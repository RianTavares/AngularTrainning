angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {
  var ddo = {}; //ddo directive definition object
  ddo.restrict = "AE"; //A de atributo e E de elemento
  /* Isso significa que a diretiva pode
    ser usada como atributo em uma tag
    ou como um elemento, ou seja, uma tag */
  ddo.scope = {
    titulo: '@titulo'
  };

  ddo.transclude = true;

  ddo.templateUrl = 'js/directives/meu-painel.html'

         return ddo;
     });
