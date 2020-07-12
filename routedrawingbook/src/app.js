const m = require('mithril');

var app = (function() {
  var model = {};

  return {
    getModel: function() {
      return model;
    },
    setModel: function(mdl) {
      model = mdl;
    },
    view: function(vnode) {
      return m("div", "Hey, this is routedrawer! Can belive it, or not?");
    }
  }
})();
export default app;
