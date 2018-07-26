'use strict';

define('queueapp/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/search-comp.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/search-comp.js should pass ESLint\n\n8:16 - \'item\' is defined but never used. (no-unused-vars)\n28:29 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n28:29 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('components/textfield-qentry.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/textfield-qentry.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/entry.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/entry.js should pass ESLint\n\n');
  });

  QUnit.test('routes/hello.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/hello.js should pass ESLint\n\n');
  });

  QUnit.test('routes/search.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/search.js should pass ESLint\n\n');
  });

  QUnit.test('services/search-cart.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/search-cart.js should pass ESLint\n\n');
  });

  QUnit.test('services/shopping-cart.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/shopping-cart.js should pass ESLint\n\n');
  });
});
define('queueapp/tests/integration/components/search-comp-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | search-comp', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "s4xmgy/n",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"search-comp\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "d0a7eQAj",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"search-comp\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('queueapp/tests/integration/components/textfield-qentry-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | textfield-qentry', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "jr9Q4y6u",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"textfield-qentry\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "vD+GEo8B",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"textfield-qentry\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('queueapp/tests/test-helper', ['queueapp/app', 'queueapp/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('queueapp/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/search-comp-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/search-comp-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/textfield-qentry-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/textfield-qentry-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/entry-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/entry-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/hello-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/hello-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/search-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/search-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/search-cart-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/search-cart-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/shopping-cart-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/shopping-cart-test.js should pass ESLint\n\n');
  });
});
define('queueapp/tests/unit/routes/entry-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | entry', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:entry');
      assert.ok(route);
    });
  });
});
define('queueapp/tests/unit/routes/hello-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | hello', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:hello');
      assert.ok(route);
    });
  });
});
define('queueapp/tests/unit/routes/search-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | search', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:search');
      assert.ok(route);
    });
  });
});
define('queueapp/tests/unit/services/search-cart-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | search-cart', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:search-cart');
      assert.ok(service);
    });
  });
});
define('queueapp/tests/unit/services/shopping-cart-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | shopping-cart', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:shopping-cart');
      assert.ok(service);
    });
  });
});
define('queueapp/config/environment', [], function() {
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

require('queueapp/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
