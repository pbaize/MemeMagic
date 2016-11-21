'use strict';

var memeMagic = angular.module('memeMagic', ['ui.router']);

memeMagic.run(function ($rootScope) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    console.error('Error transitioning from "' + fromState.name + '" to "' + toState.name + '":', error);
  });
});

memeMagic.factory('Socket', function () {
  if (!window.io) throw new Error('socket.io not found!');
  return window.io(window.location.origin);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsInNvY2tldHMvc29ja2V0LmZhY3RvcnkuanMiXSwibmFtZXMiOlsibWVtZU1hZ2ljIiwiYW5ndWxhciIsIm1vZHVsZSIsInJ1biIsIiRyb290U2NvcGUiLCIkb24iLCJldmVudCIsInRvU3RhdGUiLCJ0b1BhcmFtcyIsImZyb21TdGF0ZSIsImZyb21QYXJhbXMiLCJlcnJvciIsImNvbnNvbGUiLCJuYW1lIiwiZmFjdG9yeSIsIndpbmRvdyIsImlvIiwiRXJyb3IiLCJsb2NhdGlvbiIsIm9yaWdpbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFBQSxZQUFBQyxRQUFBQyxNQUFBLENBQUEsV0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLENBQUE7O0FBRUFGLFVBQUFHLEdBQUEsQ0FBQSxVQUFBQyxVQUFBLEVBQUE7QUFDQUEsYUFBQUMsR0FBQSxDQUFBLG1CQUFBLEVBQUEsVUFBQUMsS0FBQSxFQUFBQyxPQUFBLEVBQUFDLFFBQUEsRUFBQUMsU0FBQSxFQUFBQyxVQUFBLEVBQUFDLEtBQUEsRUFBQTtBQUNBQyxZQUFBRCxLQUFBLENBQUEsK0JBQUFGLFVBQUFJLElBQUEsR0FBQSxRQUFBLEdBQUFOLFFBQUFNLElBQUEsR0FBQSxJQUFBLEVBQUFGLEtBQUE7QUFDQSxHQUZBO0FBR0EsQ0FKQTs7QUNGQVgsVUFBQWMsT0FBQSxDQUFBLFFBQUEsRUFBQSxZQUFBO0FBQ0EsTUFBQSxDQUFBQyxPQUFBQyxFQUFBLEVBQUEsTUFBQSxJQUFBQyxLQUFBLENBQUEsc0JBQUEsQ0FBQTtBQUNBLFNBQUFGLE9BQUFDLEVBQUEsQ0FBQUQsT0FBQUcsUUFBQSxDQUFBQyxNQUFBLENBQUE7QUFDQSxDQUhBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1lbWVNYWdpYyA9IGFuZ3VsYXIubW9kdWxlKCdtZW1lTWFnaWMnLCBbJ3VpLnJvdXRlciddKTtcclxuXHJcbm1lbWVNYWdpYy5ydW4oZnVuY3Rpb24gKCRyb290U2NvcGUpIHtcclxuICAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlRXJyb3InLCBmdW5jdGlvbiAoZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMsIGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB0cmFuc2l0aW9uaW5nIGZyb20gXCInICsgZnJvbVN0YXRlLm5hbWUgKyAnXCIgdG8gXCInICsgdG9TdGF0ZS5uYW1lICsgJ1wiOicsIGVycm9yKTtcclxuICB9KTtcclxufSk7XHJcbiIsIm1lbWVNYWdpYy5mYWN0b3J5KCdTb2NrZXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKCF3aW5kb3cuaW8pIHRocm93IG5ldyBFcnJvcignc29ja2V0LmlvIG5vdCBmb3VuZCEnKTtcclxuICByZXR1cm4gd2luZG93LmlvKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pO1xyXG59KTtcclxuIl19