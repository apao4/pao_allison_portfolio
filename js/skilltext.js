'use strict';

var app = {

  chars: ['javascript','css','HTML5','final cut pro','photoshop','illustrator','sass','github','wordpress','gulp','vue','mailchimp','after effects','cinema 4d','in design','XD','microsoft office'],

  init: function () {
    app.container = document.createElement('div');
    app.container.className = 'skills';
    document.body.appendChild(app.container);
    window.setInterval(app.add, 100);
  },

  add: function () {
    var element = document.createElement('span');
    app.container.appendChild(element);
    app.animate(element);
  },

  animate: function (element) {
    var character = app.chars[Math.floor(Math.random() * app.chars.length)];
    var duration = Math.floor(Math.random() * 15) + 1;
    var offset = Math.floor(Math.random() * (50 - duration * 2)) + 3;
    var size = 10 + (15 - duration);
    element.style.cssText = 'right:'+offset+'vw; font-size:'+size+'px;animation-duration:'+duration+'s';
    element.innerHTML = character;
    window.setTimeout(app.remove, duration * 1000, element);
  },

  remove: function (element) {
    element.parentNode.removeChild(element);
  },

};

document.addEventListener('DOMContentLoaded', app.init);