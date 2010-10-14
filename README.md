localStore
==============
*Version: 0.1*

localStore is a tiny (999 bytes compressed, 1,799 bytes uncompressed) helper function that aims to simplify use of localStorage and also provide a fallback to users whose browsers don't support localStorage.

Usage
-----

Firstly, include the javascript file on your page just below the final `</body>` tag like so:

	<script src="http://github.com/betamax/localStore/raw/master/localstore.min.js"></script>

Then you need to initialise the function into a variable in your javascript code:

	var ls = new LocalStore;

Now that everything is set up, you can start using the function! It consists of 'set', 'get', 'del' and 'clear' methods.

#### localStore.set(key (String), val (String))

This method _requires_ a key and a value. The key is a unique (to your domain) identifier that will be used when getting, setting or deleting the item. The value is the data that you are storing. Example:

	ls.set("userid", "203948");

Now stored on the users computer using either localStorage or a cookie will be the item 'userid' with the value '203948'.

#### localStore.get(key (String))

This method _requires_ a key; it _returns_ a string or null. Use this method to fetch the value of an item in the storage that you have already set. For example to get the value of the "userid" key that was set above:

	var user_id = ls.get("userid");

The `user_id` variable will now contain the `203948` value that was set earlier. If the value was not ever set then `user_id` would be `null`.

#### localStore.del(key (String))

This method _requires_ a key. It will attempt to delete an item in the storage with the key you specified. To delete the userid item that we have been using as an example, do the following:

	ls.del("userid");

There will now be no reference to the userid value stored for this user.

#### localStore.clear()

This method will clear all values stored on this users computer for this domain. An example:

	ls.clear();

Notes
-----

See my other project, $.getImageData, which provides a solution to the canvas error 'Security error code: 1000' when trying to access the data of an image from another domain, at: [http://www.maxnov.com/getimagedata/][project_url].

[project_url]: http://www.maxnov.com/getimagedata/

To Do
-----

 * Possibly create more methods to help with various storage issues _(Any ideas what would be useful?)_

Changelog
---------

Version 0.1 - 14/10/10

 * Added the script to GitHub