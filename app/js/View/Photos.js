/**
 * User: Michael Lazarev mihailaz.90@gmail.com
 * Date: 11.08.15
 * Time: 10:10
 */

define(['backbone', 'View/Thumbnail'], function(Backbone, PhotoView){
	"use strict";

	return Backbone.View.extend({
		tagName  : 'table',
		className: 'table collection-view',
		per_row  : 6,
		render   : function(){
			if (!this.collection){
				throw new Error('Collection is required');
			}

			this.$el.empty();

			var tr = this.addRow(),
			    counter = 0;

			this.collection.each(function(photo){
				var photoView = new PhotoView({model: photo});
				if (counter >= this.per_row){
					tr = this.addRow();
					counter = 0;
				}
				++counter;
				tr.append(photoView.render().el);
			}, this);

			return this;
		},
		addRow   : function(){
			var row = $('<tr></tr>');
			this.$el.append(row);
			return row;
		}
	});
});