/**
 * User: Michael Lazarev mihailaz.90@gmail.com
 * Date: 10.08.15
 * Time: 17:48
 */

require(
	['jquery', 'backbone', 'Collection/Photo', 'Model/App', 'config', 'View/App', 'View/Photos', 'Router'],
	function($, Backbone, Photos, App, config, AppView, PhotosView, Router){
		"use strict";

		$(function(){
			window.app = new App(config);
			app.photos = new Photos();

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