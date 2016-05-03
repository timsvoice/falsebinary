import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Responses } from '../responses.js';

Meteor.publish('responses.all', function () {
  return Responses.find();
});
