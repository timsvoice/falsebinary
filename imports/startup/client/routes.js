import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';

import  '../../ui/pages/home.js';

FlowRouter.route('/', {
  name: 'app.home',
  action: function (params, queryParams) {    
    BlazeLayout.render('Home')
  }
})

FlowRouter.route('/response/:id', {
  name: 'app.response',
  action: function (params, queryParams) {    
    BlazeLayout.render('Response')
  }
})