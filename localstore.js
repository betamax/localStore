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

/**
 * Added extra methods for instantiating session storage as well as local storage.
 *
 *
 * Extended by Andrew Lowther <http://www.github.com/AndrewLowther>
 * Date: Thu Oct 14 2010
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
	/**
	 * @method add
	 * @param type string "local", "session"
	 * @param key mixed
	 * @param data mixed
	 */
	setExt: function(type, key, data) {
		switch(type) {
			case 'session':
				sessionStorage.setItem(key, data);
				break;
			case 'local':
			default:
				localStorage.setItem(key, data);
				break;
		}
	},
	/**
	 * @method setObject
	 * @param type string "local", "session"
	 * @param key mixed
	 * @param data mixed
	 */
	setObject: function(type, key, data) {
		switch(type) {
			case 'session':
				sessionStorage.setItem(key, JSON.stringify(data))
				break;
			case 'local':
			default:
				localStorage.setItem(key, JSON.stringify(data));
				break;
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
	/**
	 * @method get
	 * @param type string "local", "session"
	 * @param key mixed
	 */
	getExt: function(type, key) {
		switch(type) {
			case 'session':
				return sessionStorage.getItem(key_name);
				break;
			case 'local':
			default:
				return localStorage.getItem(key_name);
				break;
		}
	},
	/**
	 * @method getObject
	 * @param type string "local", "session"
	 * @param key mixed
	 */
	getObject: function(type, key) {
		switch(type) {
			case 'session':
				return sessionStorage.getItem(key_name) && JSON.parse(sessionStorage.getItem(key_name));
				break;
			case 'local':
			default:
				return localStorage.getItem(key_name) && JSON.parse(localStorage.getItem(key_name));
				break;
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
	},
	/**
	 * @method clearExt
	 * @param void
	 * @return void
	 */
	clearExt: function() {
		sessionStorage.clear();
		localStorage.clear();
	},
	/**
	 * @method length
	 * @param type string "local", "session"
	 * @return storage length
	 */
	length: function(type) {
		switch(type) {
			case 'session':
				return sessionStorage.length;
				break;
			case 'local':
			default:
				return localStorage.length;
				break;
		}
	},
	/**
	 * @method getcache_status
	 * @param applicationCache object
	 * @return status
	 */
	getcache_status: function(cache_object) {
		switch(cache_object.status) {
			case 0:
				return 'uncached';
				break;
			case 1:
				return 'idle';
				break;
			case 2:
				return 'checking';
				break;
			case 3:
				return 'downloading';
				break;
			case 4:
				return 'updateread'
				break;
			case 5:
				return 'obsolete';
				break;
			default:
				return 'unknown';
				break;
		}
	},
	/**
	 * @method update_cache_items
	 * @param void
	 * @return void
	 */
	update_cache_items: function() {
		this.webcache.swapCache();
		// Reload the page after swapping the cache, or the user will see nothng.
		window.location.reload();
	},
	/**
	 * @method log_error
	 * @param error object
	 * @return void
	 */
	log_error: function(error) {
		if(typeof(console) != 'undefined') {
			console.log(error);
		}
	}
};