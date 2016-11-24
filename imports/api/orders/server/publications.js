import { Meteor } from 'meteor/meteor';

import { Orders } from '../orders.js'

Meteor.publish('orders', function tasksPublication() {
    return Orders.find();
  });