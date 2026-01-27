const helloWorld = function() {
  return 'Hello, World!'
};

/* Makes this function available to other files, and
  When someone requires this file, ONLY give them this 
  specific thing: */

module.exports = helloWorld;
