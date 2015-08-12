/**
 * User: Michael Lazarev mihailaz.90@gmail.com
 * Date: 10.08.15
 * Time: 17:48
 */

require(
	['jquery', 'backbone', 'Collection/Photo', 'Model/App', 'config', 'View/App', 'View/Photos', 'Router', 'errorHandler'],
	function($, Backbone, Photos, App, config, AppView, PhotosView, Router, errorHandler){
		"use strict";

		$(function(){
			window.app = new App(config);
			app.photos = new Photos();
			errorHandler.handle();

			app.photos.fetch().then(function(){
				var appView = new AppView({
					childView: new PhotosView({
						collection: app.photos
					})
				});
				appView.render();
			});
			app.router = new Router();
			Backbone.history.start();
		});
	}
);