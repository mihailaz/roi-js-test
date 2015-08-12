/**
 * User: Michael Lazarev mihailaz.90@gmail.com
 * Date: 11.08.15
 * Time: 17:11
 */

define(['backbone'], function(Backbone){
	"use strict";

	return Backbone.View.extend({
		className: 'item-view',
		template: _.template($('#photo-template').html()),
		events: {
			'click img': 'onClick'
		},
		render: function(){
			if (!this.model){
				throw new Error('Model is required');
			}
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		onClick: function(){
			if (!this._modal){
				return;
			}
			this._modal.hide();
		},
		setModal: function(modal){
			this._modal = modal;
		}
	});
});