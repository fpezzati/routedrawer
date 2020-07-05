var tape = require('tape');

tape('ever passing dummy test', function(assert){
  assert.equal(1, 1, 'Dummy test, I told you.');
  assert.end();
});
