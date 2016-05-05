import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Binaries } from '../binaries.js';

Meteor.publish('binaries.all', function () {

  return Binaries.find();

});
