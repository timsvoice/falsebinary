import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Responses } from './responses.js';

export const addResponse = new ValidatedMethod({
  name: 'add.response',
  validate: null,
  run({ option_one, option_two }) {
    const response = { 
      option_one: {
        word: option_one.word, 
        percentage: option_one.percentage
      },
      option_two: {
        word: option_two.word, 
        percentage: option_two.percentage
      }      
    };
    const result = Responses.insert(response);
    return result;
  }
});
