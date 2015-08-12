/**
 * User: Michael Lazarev mihailaz.90@gmail.com
 * Date: 11.08.15
 * Time: 11:32
 */

define(['underscore'], function(_){
	"use strict";

	var entityReg = /[&<>"'\/]/g,
	    entityMap = {
		    "&": "&amp;",
		    "<": "&lt;",
		    ">": "&gt;",
		    '"': '&quot;',
		    "'": '&#39;',
		    "/": '&#x2F;'
	    };

	return {
		escapeHtml: function(string){
			return string.replace(entityReg, function(s){
				return entityMap[s];
			});
		}
	};
});