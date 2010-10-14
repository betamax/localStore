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

Notes
-----

See my other project, $.getImageData, which provides a solution to the canvas error 'Security error code: 1000' when trying to access the data of an image from another domain, at: [http://www.maxnov.com/getimagedata/][project_url].

[project_url]: http://www.maxnov.com/getimagedata/

To Do
-----

 * Add information about specifying a custom server using the `server` parameter.
 * Add information about the server examples to the website.
 * Add more server examples - the more the better!
 * Add fallback servers so if the Google App Engine is down for whatever reason (quota exceeded) then it can fallback to one of them - **Please let me know if you can host one**.
 * More demos that show of a bit more what is possible *(Idea: 3D cube with images from Flickr on it)*.

Changelog
---------

Version 0.2 - 13/09/10

 * Added two example servers, written in PHP and Python - **Please contribute by adding your own!!**
 * Added ability to specify the server URL using the `server` parameter

Version 0.1 - 3/09/10

 * Created script and Google App Engine Back-end