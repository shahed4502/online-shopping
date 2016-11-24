import { Meteor } from 'meteor/meteor';

import { Mongo } from 'meteor/mongo';

import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { check } from 'meteor/check';

import { Orders } from './orders.js'

Meteor.methods({
  'orders.insert'(orderNo,orderedItems,orderedValue,orderedBy,orderedName) {
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    const list = {
      orderNo: orderNo,
      orderedItems: orderedItems,
      orderedValue: orderedValue,
      orderedBy: orderedBy,
      orderedName: orderedName,
      createdAt: new Date(),
    };

     Orders.insert({
      orderNo,
      orderedItems,
      orderedValue,
      orderedBy,
      orderedName,
      createdAt: new Date(),
    });
  },

});