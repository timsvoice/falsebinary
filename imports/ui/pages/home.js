import './home.html'

import { Meteor } from 'meteor/meteor';
import Draggable from 'draggable';

Template.Home.events({
  'click #sliderHandle'() {
    console.log($('#sliderHandle'));
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
      console.log(leftValue, rightValue);
      $('.binary-colors-left').css('flex-basis', leftValue + '%');
      $('.binary-colors-right').css('flex-basis', rightValue + '%');
    },
  }
  new Draggable (element, options);  
});