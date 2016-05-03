import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Responses = new Mongo.Collection('Responses');

// Deny all client-side updates since we will be using methods to manage this collection
Responses.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Responses.schema = new SimpleSchema({
  'options_one': {
    type: Object,
  },
  'options_one.word': {
    type: String,
  },
  'options_one.percentage': {
    type: String,
  },  
  'options_two': {
    type: Object,
  },
  'options_two.word': {
    type: String,
  },
  'options_two.percentage': {
    type: String,
  },  
})