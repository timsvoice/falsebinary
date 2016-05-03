import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Binaries = new Mongo.Collection('Binaries');

// Deny all client-side updates since we will be using methods to manage this collection
Binaries.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Binaries.schema = new SimpleSchema({
  'word': {
    type: String,
    label: 'Word',
    unique: true    
  },
  'color': {
    type: String,
    label: 'Color',   
  }, 
})