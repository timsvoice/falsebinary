import './home.html';

import { Meteor } from 'meteor/meteor';
import { addBinary } from '../../api/binaries/methods.js';

Template.Topbar.events({
  'click #binaryAdd'() {
    $('#binaryReveal').foundation('open');
  }
})

Template.Topbar.helpers({

})

Template.Topbar.onRendered(function () {
  this.subscribe('binaries.all');
  this.newBinary = new Foundation.Reveal($('#binaryReveal'));
});