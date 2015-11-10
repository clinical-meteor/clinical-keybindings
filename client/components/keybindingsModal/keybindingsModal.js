
Template.keybindingsModal.events({
  "click #modalOkButton": function (event, template) {
    Session.set('show_keybindings', false);
    Session.set('showReactiveOverlay', false);
  }
});

Template.keybindingsModal.helpers({
  getVisibility: function () {
    if (Session.get('show_keybindings')) {
      return "visible";
    } else {
      return "fade";
    }
  }
});
