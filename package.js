Package.describe({
  name: 'clinical:keybindings',
  version: '1.4.2',
  summary: 'Keybindings modal for  ClinicalFramework apps.',
  git: 'https://github.com/clinical-meteor/keybindings',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');
  api.use('session');
  api.use('mousetrap:mousetrap@1.4.6');

  api.addFiles('client/keybindings.js', 'client');
});
