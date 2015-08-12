/**
 * User: Michael Lazarev mihailaz.90@gmail.com
 * Date: 12.08.15
 * Time: 14:46
 */

define(['jquery'], function($){
	"use strict";

	return {
		handle: function(){
			$(document).ajaxError(function(){
				alert('Internet connection error!');
			});
		}
	};
});