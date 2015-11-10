Meteor.startup(function () {
  Session.setDefault('show_keybindings', false);
  Session.setDefault('mainPanelIsCard', true);

  Session.setDefault('showSearchbar', false);
  Session.setDefault('showNavbars', true);
  Session.setDefault('showSidebar', false);

  Mousetrap.bind('ctrl+command+k', function () {
    Session.toggle('show_keybindings');
    Session.toggle('showReactiveOverlay');
  });
  Mousetrap.bind('ctrl+command+l', function () {
    Session.toggle('showInboxCard');
    Session.toggle('showOutboxCard');
    Session.toggle('showFormBuilderCard');
  });
  Mousetrap.bind('ctrl+command+i', function () {
    Session.toggle('showInboxCard');
  });
  Mousetrap.bind('ctrl+command+r', function () {
    Session.toggle('showAccountCard');
    Session.toggle('showThemeCard');
    Session.toggle('showProfileCard');
  });
  Mousetrap.bind('ctrl+command+n', function () {
    Session.toggle('showNavbars');
  });
  Mousetrap.bind('ctrl+command+m', function () {
    Session.toggle('showSidebar');
  });
  Mousetrap.bind('ctrl+command+s', function () {
    Session.toggle('showSearchbar');
  });
  Mousetrap.bind('ctrl+command+c', function () {
    Session.toggle('mainPanelIsCard');
  });
  Mousetrap.bind('ctrl+command+w', function () {
    Session.toggle('wideCard');
  });

  Mousetrap.bind('ctrl+command+y', function () {
    Session.toggle('showOutboxCard');
    Session.toggle('outboxCardOpen');
  });
  Mousetrap.bind('ctrl+command+g', function () {
    Session.toggle('hasPageBorder');
  });
  Mousetrap.bind('ctrl+command+p', function () {
    Session.toggle('hasPagePadding');
  });
  Mousetrap.bind('ctrl+command+o', function () {
    Session.toggle('pageBackgroundIsWhite');
  });
  Mousetrap.bind('ctrl+command+b', function () {
    Session.toggle('formBuilderPanelVisible');
  });

  Mousetrap.bind('ctrl+command+f', function () {
    Session.toggle('navIsFullscreen');
  });
  Mousetrap.bind('ctrl+command+h', function () {
    Session.toggle('pageLeftToWestRule');
  });
  Mousetrap.bind('ctrl+command+j', function () {
    Session.toggle('pageIsWide');
  });
});
