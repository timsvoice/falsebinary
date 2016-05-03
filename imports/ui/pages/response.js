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
    console.log(responseID);
    return Responses.findOne(responseID);
  }
})

Template.Response.onRendered(function () {
  this.subscribe('responses.all');
});