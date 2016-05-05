import { Meteor } from 'meteor/meteor';

import './binary.reveal.html';

import { Binaries } from '../../api/binaries/binaries.js';
import { addBinary } from '../../api/binaries/methods.js';

Template.BinaryForm.events({
  'click .binary-color-box'(event) {
    const color = $(event.currentTarget).attr('id');
    Session.set('color', color);
  },
  'click #binaryFormSubmit'(event) {
    const word = $('#binaryWordInput').val();
    const color = Session.get('color');
    const binary = {
      word: word,
      color: color
    }
    Meteor.call('add.binary', binary);
    $('#binaryReveal').foundation('close');
  }
})

Template.BinaryForm.helpers({
  colors() {
    const colors = [
      {name: 'red', value: '#F44336'},
      {name: 'pink', value: '#E91E63'},
      {name: 'purple', value: '#9C27B0'},
      {name: 'indigo', value: '#3F51B5'},
      {name: 'blue', value: '#2196F3'},
      {name: 'cyan', value: '#00BCD4'},
      {name: 'teal', value: '#009688'},
      {name: 'gray', value: '#607D8B'},
      {name: 'light-green', value: '#8BC34A'},
      {name: 'lime', value: '#CDDC39'},
      {name: 'yellow', value: '#FFEB3B'},
      {name: 'orange', value: '#FF9800'},      
    ];
    return colors;
  }
})

Template.BinaryForm.onRendered(function () {
  console.log('hello');
});