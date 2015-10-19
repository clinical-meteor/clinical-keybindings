Package.describe({
  name: 'clinical:keybindings',
  version: '1.0.8',
  summary: 'Keybindings modal for  ClinicalFramework apps.',
  git: 'https://github.com/clinical-meteor/clinical-keybindings',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');
  api.use('grove:less@0.1.1');
  api.use('awatson1978:fonts-helveticas@1.0.4');
  api.use('clinical:modals@1.0.5');
  api.use('mousetrap:mousetrap@1.4.6');

  api.addFiles('client/keybindingsModal/keybindingsModal.html', 'client');
  api.addFiles('client/keybindingsModal/keybindingsModal.js', 'client');
  api.addFiles('client/keybindingsModal/keybindingsModal.less', 'client');

  api.export('keybindingsModal');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:keybindings');
  api.addFiles('tests/keybindings.js');
});
