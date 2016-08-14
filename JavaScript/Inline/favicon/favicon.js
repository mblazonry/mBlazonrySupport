(function(skuid){
	var $ = skuid.$;
	$(document.body).one('pageload',function(){
        var link = document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        //link.href = 'http://www.mblazonry.com/wp-content/uploads/2016/03/mblazonry_logo_only_64px_byhand_halo_favicon.ico';
        link.href = 'https://mblazonry--c.na16.visual.force.com/resource/1459455794000/mblazonry_64px_byhand_halo_favicon';
        document.getElementsByTagName('head')[0].appendChild(link);
	});
})(skuid);