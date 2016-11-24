import { Meteor } from 'meteor/meteor';

import { Mongo } from 'meteor/mongo';

import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { check } from 'meteor/check';

import { Products } from './products.js'

Meteor.methods({

  'products.insert'(text,category,unit,price,quantity,image) {
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    if(Meteor.users.findOne(this.userId).username!="admin"){
      throw new Meteor.Error('not-authorized');
    }

    const list = {
      text: text,
      category: category,
      unit: unit,
      price: price,
      quantity: quantity,
      image: image,
    };

    Products.schema.validate(list);

     Products.insert({
      text,
      category,
      unit,
      price,
      quantity,
      image,
    });
  },

  'products.remove'(taskId) {
    check(taskId, String);
    Products.remove(taskId);
  },

  'products.setQuantity'(productId, newQuantity) {
    check(productId, String);
    Products.update(productId, { $set: { quantity: newQuantity } });
  },

});