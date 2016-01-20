exports.command = function (sessionVarName, expectedValue) {
  var client = this;
  this
    .execute(function (data) {
      return Session.get(data);
    }, [sessionVarName], function (result) {
      // client.assert.ok(result.value);
      // if (expectedValue) {
      //   client.assert.equal(result.value, expectedValue);
      // }
    }).pause(1000);

  return this;
};
