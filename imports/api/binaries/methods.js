import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Binaries } from './binaries.js';

export const addBinary = new ValidatedMethod({
  name: 'add.binary',
  validate: null,
  run({ name, color }) {
    const binary = { name: name, color: color };
    const result = Binaries.insert(binary);
  }
});
