/**
 * User: Michael Lazarev mihailaz.90@gmail.com
 * Date: 11.08.15
 * Time: 10:08
 */

define(['backbone', 'underscore', 'jquery'], function(Backbone, _, $){
	"use strict";

	return Backbone.View.extend({
		tagName: 'td',
		className: 'item-view',
		template: _.template($('#photo-thumb-template').html()),
		render: function(){
			if (!this.model){
				throw new Error('Model is required');
			}
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
});