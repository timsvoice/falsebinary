import './home.html'

import { Meteor } from 'meteor/meteor';
import Draggable from 'draggable';

Template.Home.events({
  'moved.zf.slider'() {
    const leftValue = $('.slider-handle').attr('aria-valuenow');
    const rightValue = 100 - leftValue;
    console.log(rightValue);
    $('.binary-colors-left').css('flex-basis', leftValue + '%');
    $('.binary-colors-right').css('flex-basis', rightValue + '%');
  }
  // this.binarySlider.$handle.attr('aria-valuenow')
})

Template.Home.helpers({
  appName() {
    return 'False Binary'
  },
  optionOne() {
    return 'bird';
  },
  optionTwo() {
    return 'mindful';
  }
})

Template.Home.onRendered(function () {
  this.binarySlider = new Foundation.Slider($('#binarySlider'));
  
});