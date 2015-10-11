Meteor.startup(function () {
  Session.setDefault('show_keybindings', false);
  Session.setDefault('mainPanelIsCard', true);
  Session.setDefault('showSearchbar', true);
  Session.setDefault('showNavbars', true);

  Mousetrap.bind('ctrl+command+k', function () {
    Session.toggle('show_keybindings');
    Session.toggle('show_reactive_overlay');
  });
  Mousetrap.bind('ctrl+command+l', function () {
    Session.toggle('showInboxCard');
    Session.toggle('showOutboxCard');
    Session.toggle('showFormBuilderCard');
  });
  Mousetrap.bind('ctrl+command+r', function () {
    Session.toggle('showAccountCard');
    Session.toggle('showThemeCard');
    Session.toggle('showProfileCard');
  });
  Mousetrap.bind('ctrl+command+n', function () {
    Session.toggle('showNavbars');
  });
  Mousetrap.bind('ctrl+command+s', function () {
    Session.toggle('showSearchbar');
  });
  Mousetrap.bind('ctrl+command+c', function () {
    Session.toggle('mainPanelIsCard');
  });

});


Template.keybindingsModal.events({
  "click #modalOkButton": function (event, template) {
    Session.set('show_keybindings', false);
    Session.set('show_reactive_overlay', false);
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
