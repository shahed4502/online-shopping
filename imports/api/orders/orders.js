import { Meteor } from 'meteor/meteor';

import { Mongo } from 'meteor/mongo';

import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { check } from 'meteor/check';


export const Orders = new Mongo.Collection('orders');

Orders.schema = new SimpleSchema({
  orderNo: {type: Number},
  orderedItems: {type: Number},
  orderedValue: {type: Number},
  orderedBy: {type: String},
  orderedName: {type: String},
  createdAt: {type: Date},
});
