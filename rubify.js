// Many Marcos
var links = [];
links.push('https://upload.wikimedia.org/wikipedia/commons/8/88/MarcoRubioColorEnhanced112thCongress.jpg');
links.push('http://a.abcnews.go.com/images/Politics/ap_marco_rubio_speaks_jc_150413_16x9_992.jpg');
links.push('http://daily.swarthmore.edu/wp-content/uploads/2016/02/Rubio10.jpg');
links.push('http://a1.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE4MDAzNDEwODQ2MjU0NjA2.jpg');
links.push('http://www.breitbartunmasked.com/wp-content/uploads/2015/10/rubio.jpg');
links.push('http://inauguralclock.com/wp-content/uploads/2015/07/168241349.jpg');
links.push('http://cbsnews1.cbsistatic.com/hub/i/r/2015/03/29/f1e69d9e-3a82-4dd4-9a28-c2d53c720201/thumbnail/620x350/e770bbd9217218dfb7c80457cd2f0fae/464616192.jpg');
links.push('http://www.slate.com/content/dam/slate/articles/news_and_politics/politics/2015/02/150220_POL_MarcoRubio.jpg.CROP.promo-mediumlarge.jpg');
links.push('http://media.washtimes.com.s3.amazonaws.com/media/image/2015/08/18/3dba019803d468257f0f6a706700f884.jpg');
links.push('https://espnfivethirtyeight.files.wordpress.com/2016/01/ap_42189727159.jpg?w=575');
links.push('http://www.gannett-cdn.com/-mm-/5b26a0e89009525e9cd37f453f6b5af618384fde/c=0-0-2996-1693&r=x633&c=1200x630/local/-/media/2015/01/14/USATODAY/USATODAY/635568354123993728-marco-rubio.jpg');
links.push('http://mediad.publicbroadcasting.net/p/michigan/files/201508/rubio_vadon_flickr.jpg');
links.push('http://a.abcnews.go.com/images/Politics/AP_Marco_Rubio_flag_emd_20140916_16x9_992.jpg');
links.push('http://www.trbimg.com/img-536fbe8f/turbine/la-pn-rubio-denies-climate-change-20140511-001/650/650x366');

// Pick one
function getLink() {
	return links[Math.floor(Math.random() * (links.length))];
}

// Get images
var img = document.getElementsByTagName('img');

// Get Rubio up in there
Array.prototype.forEach.call(img, function(ele) {ele.src = getLink()});

// First Name
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Ben|Ted|Jeb|Carly|Rand", "g"), "Marco");

// Last Name
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Carson|Cruz|Bush|Fiorina|Paul|Huckabee|Perry|Jindal|Santorum|Kasich|Christie|Gilmore", "g"), "Rubio");

// Trump
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Donald J. Trump", "g"), "Marco Rubio");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Trump", "g"), "Rubio");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Donald", "g"), "Marco");
