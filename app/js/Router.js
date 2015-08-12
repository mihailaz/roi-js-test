/**
 * User: Michael Lazarev mihailaz.90@gmail.com
 * Date: 11.08.15
 * Time: 15:34
 */

define(['backbone', 'Collection/Size', 'View/Modal', 'View/Photo'], function(Backbone, Sizes, Modal, PhotoView){
	"use strict";

	return Backbone.Router.extend({
		routes  : {
			'photo:id': 'show'
		},
		show    : function(id){
			var sizes = new Sizes({photo_id: id}),
			    self = this;
			sizes.fetch().then(function(){
				self.getModal().show(new PhotoView({model: sizes.getOptimal()}));
			});
		},
		getModal: function(){
			if (!this._modal){
				this._modal = new Modal();
			}
			return this._modal;
		}
	});
});