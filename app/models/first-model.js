import DS from 'ember-data';

export default DS.Model.extend({
  secondModel: DS.belongsTo('second-model')
});
