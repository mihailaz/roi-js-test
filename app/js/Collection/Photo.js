/**
 * User: Michael Lazarev mihailaz.90@gmail.com
 * Date: 10.08.15
 * Time: 21:24
 */

define(['backbone', 'Model/Photo'], function(Backbone, Photo){
	"use strict";

	return Backbone.Collection.extend({
		model   : Photo,
		page    : 1,
		per_page: 102,
		parse   : function(response){
			if (response.stat != 'ok'){
				throw new Error('Request error' + response.message ? ': ' + response.message : '');
			}
			return response.photos.photo;
		},
		url     : function(){
			return 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent' +
			'&api_key=' + app.get('api_key') +
			'&page=' + this.page +
			'&per_page=' + this.per_page +
			'&extras=url_t&format=json&nojsoncallback=1';
		}
	});
});