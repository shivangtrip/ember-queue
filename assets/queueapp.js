"use strict";



;define('queueapp/app', ['exports', 'queueapp/resolver', 'ember-load-initializers', 'queueapp/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('queueapp/components/search-comp', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        cart: Ember.inject.service('shopping-cart'),
        binu: Ember.inject.service('search-cart'),
        actions: {
            search(item) {
                //console.log('inside search..');
                let itemName = this.get('itemToBeSearched');
                let precart = this.get('cart').items;
                let filtered = precart.filter(function checkItem(item) {
                    return item.includes(itemName);
                });
                this.set('binu.items', filtered);
                //this.set(this.get('binu').items, filtered);
                //this.get('binu').items = filtered;
                //alert(filtered);
                //alert(this.get('cart').items);
            },
            remove(item) {
                this.get('cart').remove(item);
                this.get('binu').remove(item);
            },
            clear() {
                this.get('binu').empty();
                var textFiled = $("#searchInput");

                textFiled.val("");
            }

        }
    });
});
;define('queueapp/components/textfield-qentry', ['exports'], function (exports) {
   'use strict';

   Object.defineProperty(exports, "__esModule", {
      value: true
   });
   exports.default = Ember.Component.extend({
      cart: Ember.inject.service('shopping-cart'),
      actions: {
         //this actions get the name from the text field
         send: function () {
            //document.write('Name is: ' + this.get('itemToBeAdded'));
            let itemName = this.get('itemToBeAdded');
            this.get('cart').add(itemName);
            var textFiled = Ember.$("#input");

            textFiled.val("");
            //alert(itemName);
         },
         remove(item) {
            this.get('cart').remove(item);
         },
         clear() {
            this.get('cart').empty();
         }
      }

   });
});
;define('queueapp/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('queueapp/helpers/app-version', ['exports', 'queueapp/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('queueapp/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('queueapp/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('queueapp/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'queueapp/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('queueapp/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('queueapp/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('queueapp/initializers/export-application-global', ['exports', 'queueapp/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define("queueapp/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
;define('queueapp/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('queueapp/router', ['exports', 'queueapp/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('hello');
    this.route('search');
    this.route('entry');
  });

  exports.default = Router;
});
;define('queueapp/routes/entry', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('queueapp/routes/hello', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('queueapp/routes/search', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('queueapp/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define('queueapp/services/search-cart', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    items: null,

    init() {
      this._super(...arguments);
      this.set('items', []);
    },

    add(item) {
      this.get('items').pushObject(item);
    },

    remove(item) {
      this.get('items').removeObject(item);
    },

    empty() {
      this.get('items').clear();
    }
  });
});
;define('queueapp/services/shopping-cart', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    items: null,

    init() {
      this._super(...arguments);
      this.set('items', []);
    },

    add(item) {
      this.get('items').pushObject(item);
    },

    remove(item) {
      this.get('items').removeObject(item);
    },

    empty() {
      this.get('items').clear();
    },
    displaycart() {
      return this.get('items');
    }
  });
});
;define("queueapp/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vyMy7vmb", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"Welcome To Queue\"],[10],[0,\"\\n\"],[4,\"link-to\",[\"entry\"],null,{\"statements\":[[0,\" \"],[7,\"button\"],[11,\"type\",\"button\"],[9],[0,\"Add/Remove\"],[10],[0,\" \"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"link-to\",[\"search\"],null,{\"statements\":[[0,\" \"],[7,\"button\"],[11,\"type\",\"button\"],[9],[0,\"Search\"],[10],[0,\" \"]],\"parameters\":[]},null],[0,\"\\n\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "queueapp/templates/application.hbs" } });
});
;define("queueapp/templates/components/search-comp", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xfW3AiDz", "block": "{\"symbols\":[\"item\"],\"statements\":[[0,\"Enter Query: \"],[1,[27,\"input\",null,[[\"key-press\",\"id\",\"type\",\"placeholder\",\"value\"],[\"search\",\"searchInput\",\"text\",\"Search cart..\",[23,[\"itemToBeSearched\"]]]]],false],[0,\"\\n\"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"clear\"]],[9],[0,\"Clear Search\"],[10],[0,\"\\n\\n\\n\\n\"],[7,\"ul\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"binu\",\"items\"]]],null,{\"statements\":[[0,\"    \"],[7,\"li\"],[9],[0,\"\\n      \"],[1,[22,1,[]],false],[0,\"\\n      \"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"remove\",[22,1,[]]]],[9],[0,\"Remove\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "queueapp/templates/components/search-comp.hbs" } });
});
;define("queueapp/templates/components/textfield-qentry", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ck+xvcmN", "block": "{\"symbols\":[\"item\"],\"statements\":[[0,\"Enter Item And Press Enter: \"],[1,[27,\"input\",null,[[\"enter\",\"id\",\"type\",\"placeholder\",\"value\"],[\"send\",\"input\",\"text\",\"Enter the item\",[23,[\"itemToBeAdded\"]]]]],false],[0,\"\\n\"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"clear\"]],[9],[0,\"Clear Queue\"],[10],[0,\"\\n\\n\\n\\n\"],[7,\"ul\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"cart\",\"items\"]]],null,{\"statements\":[[0,\"    \"],[7,\"li\"],[9],[0,\"\\n      \"],[1,[22,1,[]],false],[0,\"\\n      \"],[7,\"button\"],[3,\"action\",[[22,0,[]],\"remove\",[22,1,[]]]],[9],[0,\"Remove\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "queueapp/templates/components/textfield-qentry.hbs" } });
});
;define("queueapp/templates/entry", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pIj6FAJ8", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"textfield-qentry\"],false],[0,\"\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "queueapp/templates/entry.hbs" } });
});
;define("queueapp/templates/hello", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cZdDrhHI", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "queueapp/templates/hello.hbs" } });
});
;define("queueapp/templates/search", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xh3vUO5S", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"search-comp\"],false],[0,\"\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "queueapp/templates/search.hbs" } });
});
;

;define('queueapp/config/environment', [], function() {
  var prefix = 'queueapp';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("queueapp/app")["default"].create({"name":"queueapp","version":"0.0.0+d55181a7"});
          }
        
//# sourceMappingURL=queueapp.map
