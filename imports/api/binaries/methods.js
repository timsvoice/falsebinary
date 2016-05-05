import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Binaries } from './binaries.js';

export const addBinary = new ValidatedMethod({
  name: 'add.binary',
  validate: null,
  run({ word, color }) {    
    const binary = { word: word, color: color };
    const result = Binaries.insert(binary);
  }
});
