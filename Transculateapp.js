var app = angular.module('myCards', []);

app.directive('myCard', function() {
  //   scope: {
  //     title: '=myTitle',
  //     pic: '=myPic',
  //   },
  //   transclude: true,
  //   templateUrl: 'myCard',
  //    link: function(scope, el, attrs, ctrl, $transclude) {
  //     transclude without $ will also work fine.
  //    scope.text = $transclude();
  //    console.log(scope.text);
  //    el.find('.content').append(scope.text);
  //  }
  //   controller: function($element,$transclude) {
  //     console.log("inside the controller");
  //    $element.find('.content').append($transclude());
  //  }

        //  we not using jquery to select the element

  return {
 scope: {},
 controllerAs:'ctrl',
 bindToController: {
   title: '=myTitle',
   pic: '=myPic'
 },
 templateUrl: 'myCard',
 transclude: true,
 controller: function() { },
  };
});


//
// app.directive('myContentTransclusionPoint', function() {
//   return {
//     link: function(scope, el, attr, ctrl, transclude) {
//       el.append(transclude());
//     }
//   };

// we can also use ng-transculade  instead of myContentTransclusionPoint.
         //See Transculate.html
