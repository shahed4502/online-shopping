import { Meteor } from 'meteor/meteor';

import { Mongo } from 'meteor/mongo';

import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { check } from 'meteor/check';



export const Products = new Mongo.Collection('products');

Products.schema = new SimpleSchema({
  text: {type: String},
  category: {type: String},
  unit: {type: String},
  price: {type: String},
  quantity: {type: String},
  image: {type: String},
});


