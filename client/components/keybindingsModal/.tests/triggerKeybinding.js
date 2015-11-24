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



// // async version calls method on the server
// exports.command = function (keybindingCommand) {
//   var client = this;
//
//   this
//     .timeoutsAsyncScript(5000)
//     .executeAsync(function (data, meteorCallback) {
//       //return HipaaLogger.logEventObject(data);
//       Meteor.call("triggerKeybinding", data, function (meteorError, meteorResult) {
//         var response = (meteorError ? {
//           error: meteorError
//         } : {
//           result: meteorResult
//         });
//         meteorCallback(response);
//       });
//     }, [keybindingCommand], function (result) {
//       //console.log("result.value", result.value);
//       //client.assert.ok(result.value);
//     }).pause(1000);
//   return this;
// };
