var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-dimmer',
  summary : 'Semantic UI - Dimmer (official): Single component release of dimmer',
  version : '1.9.0',
  git     : 'git://github.com/Semantic-Org/UI-Dimmer.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
