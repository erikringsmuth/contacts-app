(function(window, document, undefined) {
  'use strict';

  // Install Service Worker
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/worker.js').then(function(reg) {
      console.log('◕‿◕', reg);
    }, function(err) {
      console.log('ಠ_ಠ', err);
    });
  }

  // Set duration for core-animated-pages transitions
  CoreStyle.g.transitions.duration = '0.2s';

})(window, document);
