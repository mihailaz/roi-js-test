/**
 * User: Michael Lazarev mihailaz.90@gmail.com
 * Date: 11.08.15
 * Time: 19:07
 */

define(['backbone', 'Model/Size'], function(Backbone, Size){
	"use strict";

	return Backbone.Collection.extend({
		model     : Size,
		initialize: function(params){
			if (!params.photo_id){
				throw new Error('Photo id is required');
			}
			this.photo_id = params.photo_id;
		},
		parse     : function(response){
			if (response.stat != 'ok'){
				throw new Error('Request error' + response.message ? ': ' + response.message : '');
			}
			return response.sizes.size;
		},
		url       : function(){
			return 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes' +
			'&api_key=' + app.get('api_key') +
			'&photo_id=' + this.photo_id +
			'&format=json&nojsoncallback=1';
		},
		getOptimal: function(){
			var optimal = this.at(0),
				max_width = app.get('modal_max_width');
			this.each(function(s){
				if (Math.abs(s.get('width') - max_width) < Math.abs(optimal.get('width') - max_width) ||
					(s.get('width') > max_width && optimal.get('width') < max_width)){
					optimal = s;
				}
			});
			return optimal;
		}
	});
});