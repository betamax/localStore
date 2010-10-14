/*
*
* LocalStore - LocalStorage helper with cookie fallback
*
* Written by Max Novakovic (http://www.maxnov.com/)
* Date: Thu Oct 14 2010
*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
* Copyright 2010, Max Novakovic
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://www.maxnov.com/getimagedata/MIT-License.txt
* http://www.maxnov.com/getimagedata/GPL-License.txt
*
*/
var localStore = function() {
	this.isStorage = false;
	try {
		typeof(localStorage);
		this.isStorage = true;
	}catch(e){}
};
localStore.prototype = {
	set: function(key, value){
		if(this.isStorage){ 
			localStorage.setItem(key, value); 
		} else {
			document.cookie = key+"="+value+"; path=/";
		}
	},
	get: function(key) {
		if(this.isStorage) {
			return localStorage.getItem(key);
		} else {
			var key_equals = key + "=",
			cookies = document.cookie.split(';');
			for(var i=0, j = cookies.length; i < j; i++) {
				var this_cookie = cookies[i];
				while (this_cookie.charAt(0) == ' ') {
					this_cookie = this_cookie.substring(1, this_cookie.length);
				}
				if (this_cookie.indexOf(key_equals) == 0) {
					return this_cookie.substring(key_equals.length, this_cookie.length);
				}
			}
			return null;
			
		}
	},
	del: function(key) {
		if(this.isStorage) {
			localStorage.removeItem(key);
		} else {
			this.set(key,"");
		}
	},
	clear: function() {
		if(this.isStorage) {
			localStorage.clear();
		} else {	
			var cookies = document.cookie.split(';');
			for(var i=0, j = cookies.length; i < j; i++) {
				var this_cookie = cookies[i];
				var equals_position = this_cookie.indexOf("=");
				var name = equals_position > -1 ? this_cookie.substr(0, equals_position) : this_cookie;
				document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
			}

		}
	}
};