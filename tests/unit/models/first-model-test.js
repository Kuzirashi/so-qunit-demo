import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('first-model', 'Unit | Model | first model', {
  // Specify the other units that are required for this test.
  needs: ['model:second-model']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('#foo', function(assert) {
  var store = this.store();
  var model = this.subject();

  Ember.run(function() {
    assert.expect(1);

    var secondModel = store.createRecord('second-model', { foo: 'bar' });
    model.set('secondModel', secondModel);
    var foo = model.get('secondModel.foo');

    assert.equal(foo, 'bar');
  });
});
