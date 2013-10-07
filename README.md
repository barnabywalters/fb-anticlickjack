fb-anticlickjack
================

A cross-browser extension which automatically undoes facebook’s downright shady link destination swapping. More at waterpigs.co.uk/notes/4SRLft/

## How to Install

fb-anticlickjack is cross-browser (courtesy of [Kango](http://kangoextensions.com)) and can be installed on Safari, Firefox, Chrome or Opera.

1. Clone the repo (downloads offered soon)
1. Navigate to /output

Then, depending on your browser:

* Chrome:
	1. Navigate to chrome://extensions
	1. If not already enabled, enable Dev Mode (top right)
	1. Load Unpacked Extension, and select /output/chrome
	1. fb-clickjack should pop up in the list of extensions. yay!
* Safari:
	1. Open /output/fbanticlickjack.safariext
	1. Trust the extension and it shall be installed
* Firefox:
	1. Tools -> Addons
	1. Extensions
	1. Little cog in the top right -> Install Add-on From File
	1. Select /output/fbanticlickjack_0.9.0.xpi
	1. Trust it
	1. Restart it
	1. Configure it
* Opera:
	1. Open /output/fbanticlickjack_0.9.0.oex
	2. It will install and show you where the button is
	
## Why?
	
Facebook does some über shady stuff. Take a look at this link markup:
	
	<a href="http://action.sumofus.org/a/world-food-prize-monsanto-syngenta/5/4/?sub=fb"
		target="_blank"
		rel="nofollow"
		onmouseover="LinkshimAsyncLink.swap(this, &quot;http:\/\/action.sumofus.org\/a\/world-food-prize-monsanto-syngenta\/5\/4\/?sub=fb&quot;);"
		onclick="LinkshimAsyncLink.swap(this, &quot;http:\/\/www.facebook.com\/l.php?u=http\u00253A\u00252F\u00252Faction.sumofus.org\u00252Fa\u00252Fworld-food-prize-monsanto-syngenta\u00252F5\u00252F4\u00252F\u00253Fsub\u00253Dfb&amp;h=vAQGPZeS2&amp;enc=AZPU8l070clXWw6LHhO4o4DptNXHUJ-arcfAYrU_b9C9hbEWvbrlI_MaFREKw0ndh6ayQWiStDoBTzV4G_UAy8yAuDGtTxEFHVQMr7kfTgP0ummGczPBxRufyw3VG5TX_gA&amp;s=1&quot;);">They're giving the "Nobel Prize of Agriculture" to... Monsanto??</a>

Messy, huh? The point is, whilst the source of the link is perfectly legit, Facebook added some code which changes where the link points to *as you click it*. Predictably, it’s routed through their `l.php` redirector, which is tracking you.

Now, Facebook is more than likely already tracking everything you do, but there’s no reason to hand it over on a silver platter when it’s so easy to prevent.