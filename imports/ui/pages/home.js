import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

import Draggable from 'draggable';

import './home.html';
import './topbar.html';
import { Binaries } from '../../api/binaries/binaries.js';
import { addBinary } from '../../api/binaries/methods.js';
import { addResponse } from '../../api/responses/methods.js';

Template.Home.events({
  'click #responseSubmit'() {
    // get relevant widths
    const totalWidth = $(window).width();
    const optionOneWidth = $('.binary-colors-left').width();
    const optionTwoWidth = $('.binary-colors-right').width();
    
    const optionOneWord = $('#optionOneWord').text();
    const optionTwoWord = $('#optionTwoWord').text();

    // calculate each options percentage based on width
    const optionOnePercentage = Math.round((optionOneWidth/totalWidth)*100);
    const optionTwoPercentage = Math.round((optionTwoWidth/totalWidth)*100);
    
    const response = {
      option_one: {
        word: optionOneWord,
        percentage: optionOnePercentage
      },
      option_two: {
        word: optionTwoWord,
        percentage: optionTwoPercentage
      },

    }
    Meteor.call('add.response', response, function(err, res) {
      if (!err) {
        FlowRouter.go('/response/' + res);
      }      
    });    
  },
  'click #binaryAdd'() {
    $('#binaryReveal').foundation('open');
  },
})

Template.Home.helpers({
  appName() {
    return 'False Binary'
  },
  options() {
    const binaries = Binaries.find().fetch();    
    const optionOne = binaries[Math.floor(Math.random() * binaries.length)];
    const optionTwo = binaries[Math.floor(Math.random() * binaries.length)];

    return { optionOne, optionTwo }

  },
  formCollection() {
    return Binaries;
  },
  binary() {
    return Binaries.findOne();
  },
})

Template.Home.onRendered(function () {
  const element = document.getElementById('sliderHandle');
  const upperLimit = $(window).width() - 32;
  const options = {
    limit: {
      x: [-32, upperLimit],
      y: '50%'
    },
    onDrag(element, x, y, event) {
      const leftValue = Math.max((x / ($(window).width() - 64)) * 100, 0);
      const rightValue = Math.min(100 - leftValue, 100);      
      $('.binary-colors-left').css('flex-basis', leftValue + '%');
      $('.binary-colors-right').css('flex-basis', rightValue + '%');
    },
  }
  new Draggable (element, options);  
  this.subscribe('binaries.all');
  this.newBinary = new Foundation.Reveal($('#binaryReveal'));
});