
// constructs g.settings object
module.exports = function() {
  var appRoot = m.path.normalize(__dirname +'/');
  
  g.settings = {
    appRoot: appRoot,
    classLoader: {
      baseDir: m.path.join(appRoot,'classes/'),
      toLoad: [
        'Server',
        'DB',
        'REST',
        'REST2',
        'SQL',
        'Login',
        'DummyGenerator'
      ]
    },
    Server: {
      endpoint: '*',
      webroot: 'www',
      indexFile: 'index.html',
      port: 3000
    },
    DB: {
      host: '127.0.0.1',
      db: 'bilverkstadDB',
      modelDir: m.path.join(appRoot,'models/')
    },
    SQL:{
      host: "127.0.0.1",
      user: "root",
      database: "bilverkstadDB",
      password: ""
    },
    REST : {
      route : '/rest/:model/:modelID?'
    },
    REST2 : {
      route : '/sql/:table/:tableID?'
    },  
    Login: {
      route: '/rest/login'
    },
    DummyGenerator: {
      route: '/rest/generate/:model'
    }
  };
};