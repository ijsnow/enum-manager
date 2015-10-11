Package.describe({
  name: 'ijsnow:enum-manager',
  version: '0.0.1',
  summary: 'A simple package to keep track of enums',
  git: 'https://github.com/ijsnow/enum-manager.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');

  // Dependency
  api.use('ijsnow:enum-object@0.0.1');

  api.addFiles('enum-manager.js');

  api.export("EnumManager");
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ijsnow:enum-manager');
  api.addFiles('enum-manager-tests.js');
});
