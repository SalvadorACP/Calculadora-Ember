import { module, test } from 'qunit';
import { setupRenderingTest } from 'calculadora/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | calculadora', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Calculadora />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Calculadora>
        template block text
      </Calculadora>
    `);

    assert.dom().hasText('template block text');
  });
});
