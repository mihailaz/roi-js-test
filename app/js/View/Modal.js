/**
 * User: Michael Lazarev mihailaz.90@gmail.com
 * Date: 11.08.15
 * Time: 16:43
 */

define(['backbone', 'underscore', 'bootstrap'], function(Backbone, _){
	"use strict";

	return Backbone.View.extend({
		el: '#modal',
		events: {
			'hide.bs.modal': 'onHide'
		},
		initialize: function(){
			this.body = this.$('.modal-body');
		},
		onHide: function(){
			history.back();
		},
		show: function(view){
			if (view){
				if (_.isFunction(view.setModal)){
					view.setModal(this);
				}
				this.body.empty();
				this.body.append(view.render().el);
			}
			this.$el.modal('show');
		},
		hide: function(){
			this.$el.modal('hide');
		}
	});
});