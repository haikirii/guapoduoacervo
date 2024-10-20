/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'brand\'">' + entity + '</span>' + html;
	}
	var icons = {
		'logo-alipay': '&#xe900;',
		'logo-amazon': '&#xe901;',
		'logo-amplify': '&#xe902;',
		'logo-android': '&#xe903;',
		'logo-angular': '&#xe904;',
		'logo-ao3': '&#xe905;',
		'logo-appflow': '&#xe906;',
		'logo-apple-appstore': '&#xe907;',
		'logo-apple-ar': '&#xe908;',
		'logo-apple': '&#xe909;',
		'logo-behance': '&#xe90a;',
		'logo-bitbucket': '&#xe90b;',
		'logo-bitcoin': '&#xe90c;',
		'logo-bsky': '&#xe90d;',
		'logo-buffer': '&#xe90e;',
		'logo-capacitor': '&#xe90f;',
		'logo-chrome': '&#xe910;',
		'logo-closed-captioning': '&#xe911;',
		'logo-codepen': '&#xe912;',
		'logo-css3': '&#xe913;',
		'logo-designernews': '&#xe914;',
		'logo-deviantart': '&#xe915;',
		'logo-discord': '&#xe916;',
		'logo-docker': '&#xe917;',
		'logo-dribbble': '&#xe918;',
		'logo-dropbox': '&#xe919;',
		'logo-edge': '&#xe91a;',
		'logo-electron': '&#xe91b;',
		'logo-euro': '&#xe91c;',
		'logo-facebook': '&#xe91d;',
		'logo-figma': '&#xe91e;',
		'logo-firebase': '&#xe91f;',
		'logo-firefox': '&#xe920;',
		'logo-flickr': '&#xe921;',
		'logo-foursquare': '&#xe922;',
		'logo-github': '&#xe923;',
		'logo-gitlab': '&#xe924;',
		'logo-google-playstore': '&#xe925;',
		'logo-google': '&#xe926;',
		'logo-hackernews': '&#xe927;',
		'logo-html5': '&#xe928;',
		'logo-instagram': '&#xe929;',
		'logo-ionic': '&#xe92a;',
		'logo-ionitron': '&#xe92b;',
		'logo-javascript': '&#xe92c;',
		'logo-laravel': '&#xe92d;',
		'logo-linkedin': '&#xe92e;',
		'logo-markdown': '&#xe92f;',
		'logo-mastodon': '&#xe930;',
		'logo-medium': '&#xe931;',
		'logo-microsoft': '&#xe932;',
		'logo-no-smoking': '&#xe933;',
		'logo-nodejs': '&#xe934;',
		'logo-npm': '&#xe935;',
		'logo-octocat': '&#xe936;',
		'logo-paypal': '&#xe937;',
		'logo-pinterest': '&#xe938;',
		'logo-playstation': '&#xe939;',
		'logo-pwa': '&#xe93a;',
		'logo-python': '&#xe93b;',
		'logo-react': '&#xe93c;',
		'logo-reddit': '&#xe93d;',
		'logo-rss': '&#xe93e;',
		'logo-sass': '&#xe93f;',
		'logo-skype': '&#xe940;',
		'logo-slack': '&#xe941;',
		'logo-snapchat': '&#xe942;',
		'logo-soundcloud': '&#xe943;',
		'logo-spirit': '&#xe944;',
		'logo-stackoverflow': '&#xe945;',
		'logo-steam': '&#xe946;',
		'logo-stencil': '&#xe947;',
		'logo-tableau': '&#xe948;',
		'logo-tiktok': '&#xe949;',
		'logo-trapeze': '&#xe94a;',
		'logo-tumblr-box': '&#xe94b;',
		'logo-tumblr': '&#xe94c;',
		'logo-tux': '&#xe94d;',
		'logo-twitch': '&#xe94e;',
		'logo-twitter': '&#xe94f;',
		'logo-usd': '&#xe950;',
		'logo-venmo': '&#xe951;',
		'logo-vercel': '&#xe952;',
		'logo-vimeo': '&#xe953;',
		'logo-vk': '&#xe954;',
		'logo-vue': '&#xe955;',
		'logo-wattpad': '&#xe956;',
		'logo-web-component': '&#xe957;',
		'logo-wechat': '&#xe958;',
		'logo-whatsapp': '&#xe959;',
		'logo-windows': '&#xe95a;',
		'logo-wordpress': '&#xe95b;',
		'logo-x': '&#xe95c;',
		'logo-xbox': '&#xe95d;',
		'logo-xing': '&#xe95e;',
		'logo-yahoo': '&#xe95f;',
		'logo-yen': '&#xe960;',
		'logo-youtube': '&#xe961;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/logo-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
