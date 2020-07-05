const m = require('mithril');

var app = (function() {
  var model = {};

  function getModel() {
    return model;
  }

  function setModel(mdl) {
    return model = mdl;
  }

  return {
    view: function(vnode) {
      return m("div", "Hey, this is routedrawer!");
    }
  }
})();

m.mount(document.body, app);
