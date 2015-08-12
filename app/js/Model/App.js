/**
 * User: Michael Lazarev mihailaz.90@gmail.com
 * Date: 10.08.15
 * Time: 21:33
 */

define(['backbone', 'underscore', 'helpers'], function(Backbone, _, helpers){
	"use strict";

	var App = Backbone.Model.extend({});
	_.extend(App.prototype, helpers);
	return App;
});