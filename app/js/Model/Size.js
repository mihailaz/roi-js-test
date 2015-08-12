/**
 * User: Michael Lazarev mihailaz.90@gmail.com
 * Date: 11.08.15
 * Time: 19:48
 */

define(['backbone'], function(Backbone){
	"use strict";

	return Backbone.Model.extend({
		defaults: {
			source: '',
			label: ''
		},
		idAttribute: 'label'
	});
});