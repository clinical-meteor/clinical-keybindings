Meteor.methods({
  triggerKeybinding:function (keybindingCommand){
    if (keybindingCommand === 'ctrl+command+k') {
      Session.toggle('show_keybindings');
      Session.toggle('showReactiveOverlay');
    } else if (keybindingCommand === 'ctrl+command+l') {
      Session.toggle('showInboxCard');
      Session.toggle('showOutboxCard');
      Session.toggle('showFormBuilderCard');
    } else if (keybindingCommand === 'ctrl+command+i') {
      Session.toggle('showInboxCard');
    } else if (keybindingCommand === 'ctrl+command+r') {
      Session.toggle('showAccountCard');
      Session.toggle('showThemeCard');
      Session.toggle('showProfileCard');
    } else if (keybindingCommand === 'ctrl+command+n') {
      Session.toggle('showNavbars');
    } else if (keybindingCommand === 'ctrl+command+m') {
      Session.toggle('showSidebar');
    } else if (keybindingCommand === 'ctrl+command+s') {
      Session.toggle('showSearchbar');
    } else if (keybindingCommand === 'ctrl+command+a') {
      Session.toggle('useHierarchicalLayout');
    } else if (keybindingCommand === 'ctrl+command+c') {
      Session.toggle('mainPanelIsCard');
    } else if (keybindingCommand === 'ctrl+command+w') {
      Session.toggle('wideCard');
    } else if (keybindingCommand === 'ctrl+command+y') {
      Session.toggle('showOutboxCard');
      Session.toggle('outboxCardOpen');
    } else if (keybindingCommand === 'ctrl+command+g') {
      Session.toggle('hasPageBorder');
    } else if (keybindingCommand === 'ctrl+command+p') {
      Session.toggle('hasPagePadding');
    } else if (keybindingCommand === 'ctrl+command+o') {
      Session.toggle('pageBackgroundIsWhite');
    } else if (keybindingCommand === 'ctrl+command+b') {
      Session.toggle('formBuilderPanelVisible');
    } else if (keybindingCommand === 'ctrl+command+f') {
      Session.toggle('navIsFullscreen');
    } else if (keybindingCommand === 'ctrl+command+h') {
      Session.toggle('pageLeftToWestRule');
    } else if (keybindingCommand  === 'ctrl+command+j') {
      Session.toggle('pageIsWide');
    }
  }
});
