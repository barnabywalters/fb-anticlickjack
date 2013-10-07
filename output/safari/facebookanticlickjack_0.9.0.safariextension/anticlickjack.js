// ==UserScript==
// @include facebook.com
// ==/UserScript

setInterval(function () {
	var l = document.querySelectorAll('a[onclick^=Linkshim]');
	for (var i=0; i<l.length; i++) {
		l[i].setAttribute('onclick', '');
		l[i].setAttribute('onmouseover', '');
	}
}, 1000);