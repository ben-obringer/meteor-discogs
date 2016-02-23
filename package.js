Package.describe({
  name: 'obringer20:meteor-discogs',
  version: '1.1.0',
  summary: 'Retrieves music data from Discogs.',
  documentation: 'README.md',
  git: 'https://github.com/ben-obringer/meteor-discogs.git'
});

Npm.depends({ disconnect: '0.6.8' });

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use('ecmascript', 'server');

  api.addFiles('meteor-discogs.js', 'server');

  api.export('Discogs', 'server');
});

Package.onTest(function(api) {
  const packages = [
    'obringer20:meteor-discogs',
    'ecmascript',
    'sanjo:jasmine@0.20.3'
  ];
  api.use(packages, 'server');

  api.addFiles('meteor-discogs-tests.js', 'server');
});
