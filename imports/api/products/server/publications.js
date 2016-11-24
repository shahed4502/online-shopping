import { Meteor } from 'meteor/meteor';

import { Products } from '../products.js'

Meteor.publish('products', function tasksPublication() {
    return Products.find();
  });