Package.describe({
  name: 'ijsnow:enum-manager',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A simple package to keep track of enums',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');

  // Dependency
  api.use('ijsnow:enum-object');

  api.addFiles('enum-manager.js');

  api.export("EnumManager");
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('enum-manager');
  api.addFiles('enum-manager-tests.js');
});
