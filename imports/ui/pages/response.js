import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Responses } from '../../api/responses/responses.js';
import './response.html';

Template.Response.events({
  'click #playAgain'() {
    FlowRouter.go('/');
  }
})

Template.Response.helpers({
  response() {
    const responseID = FlowRouter.current().params.id;
    const response = Responses.findOne(responseID)
    const x = parseInt(response.option_one.percentage) / 100;

    const leftValue = response.option_one.percentage;
    const rightValue = response.option_two.percentage;      
    console.log(response);
    $('.binary-colors-left').css('flex-basis', leftValue + '%');
    $('.binary-colors-right').css('flex-basis', rightValue + '%');

    return response;
  }
})

Template.Response.onRendered(function () {
  this.subscribe('responses.all');
});