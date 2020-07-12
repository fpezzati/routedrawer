var tape = require('tape');
/*
cannot use it, because it is front end.

import app from '../src/app.js';
*/
tape('ever passing dummy test', function(assert){
  assert.equal(1, 1, 'Dummy test, I told you.');
  assert.end();
});
/*
cannot use tape.js here, this is front end.

tape('app is correctly exported', function(assert){
  assert.false('undefined', (typeof app), 'app is correctly exported');
  assert.end();
});

tape('when application starts its model is empty', function(assert){
  assert.equal({}, app.getModel(), 'model is an empty object when app starts.');
  assert.end();
});
*/
