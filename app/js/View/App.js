/**
 * User: Michael Lazarev mihailaz.90@gmail.com
 * Date: 11.08.15
 * Time: 10:10
 */

define(['backbone'], function(Backbone){
	"use strict";

	return Backbone.View.extend({
		el: '.main-view',
		childView: null,
		initialize: function(params){
			if (params.childView){
				this.childView = params.childView;
			}
		},
		render: function(){
			this.$el.empty();
			if (this.childView){
				this.$el.append(this.childView.render().el);
			}
			return this;
		}
	});
});