('use strict')
$(function(){
	var coordsButtonForPress = document.getElementById('load_post').getBoundingClientRect();
	var valForShowButtonForPress = false;
	if ((coordsButtonForPress.top > 60) && (coordsButtonForPress.top < $(window).height() - 60)){
		$('#load_post').popover('show');
		valForShowButtonForPress = true;
	}
	$(window).on('scroll', function(){
		coordsButtonForPress = document.getElementById('load_post').getBoundingClientRect();
		if ((coordsButtonForPress.top > 60) && (coordsButtonForPress.top < $(window).height() - 60)){
			if (!valForShowButtonForPress) {
				$('#load_post').popover('show');
				valForShowButtonForPress = true;
			}
		}
		else {
			if (valForShowButtonForPress) {
				$('#load_post').popover('hide');
				valForShowButtonForPress = false;
			}
		}
	})
	// leaveAComment();
	var val_for_not_reajaxing = false;
	$('#load_post, .section_main .post_link > a').on('click', function(e){
		e.preventDefault();
		if (val_for_not_reajaxing) return;
		$('.section_1, .response, .section_2, #load_post').animate({opacity: 0}, 600);
		$('#load_post').popover('destroy');
		setTimeout(leaveAComment, 650);
		val_for_not_reajaxing = true;
	})
})



function leaveAComment(){
	var sectionPost = document.createElement('div');
	sectionPost.classList.add('load_section');
	document.getElementsByClassName('section_main')[0].appendChild(sectionPost);
	var otherPost = document.createElement('div');
	otherPost.classList.add('load_article');
	document.getElementsByTagName('article')[0].appendChild(otherPost);
	$('.load_section').load('mainAjax.html', function(response, status, xhr){
		$('.section_1, .response, .section_2, #load_post').hide();
		if (status == "error"){
			$('.load_section').html('<img src="imgs/photo_1/photo1_med.jpg"srcset="imgs/photo_1/photo1_low.jpg 400w,imgs/photo_1/photo1_med.jpg 700w,imgs/photo_1/photo1_high.jpg 1000w,imgs/photo_1/photo1_very_high.jpg 1500w"sizes="100vw"alt="img-style-1" width=100% class="jpeg_img"><img src="imgs/photo_2/photo2_med.jpg"srcset="imgs/photo_2/photo2_low.jpg 400w,imgs/photo_2/photo2_med.jpg 700w,imgs/photo_2/photo2_high.jpg 1000w,imgs/photo_2/photo2_very_high.jpg 1500w"sizes="100vw"alt="img-style-1" width=100%class="jpeg_img"><img src="imgs/photo_3/photo3_med.jpg"srcset="imgs/photo_3/photo3_low.jpg 400w,imgs/photo_3/photo3_med.jpg 700w,imgs/photo_3/photo3_high.jpg 1000w,imgs/photo_3/photo3_very_high.jpg 1500w"sizes="100vw"alt="img-style-1" width=100%class="jpeg_img"><blockquote class="quote_main">"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."</blockquote><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <b>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </b>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><br><br><div class="btn-group pull-right btn_group_link"><span class="btn btn-group-text chapter_link chapter_link_btn" >SHARE</span><a class="btn btn-default" href="#"><img src="imgs/icons_social/icons_0005_fb.png" alt="facebook_link"></a><a class="btn btn-default" href="#"><img src="imgs/icons_social/icons_0010_tw.png" alt="twitter_link"></a><a class="btn btn-default" href="#"><img src="imgs/icons_social/icons_0009_g+.png" alt="google_link"></a><a class="btn btn-default" href="#"><img src="imgs/icons_social/icons_0008_tumblr.png" alt="tumblr_link"></a><a class="btn btn-default" href="#"><img src="imgs/icons_social/icons_0006_pinterest.png" alt="pinterest_link"></a></div>');
		}
	});
	$('.load_article').load('otherAjax.html', function(response, status, xhr){
		if (status == "error"){
			$('.load_article').html('<div class="jumbotron"><div class="container-fluid"><div class="row"><div class="col-xs-12 col-md-12 col-lg-12 col-sm-12"><h4><span class="small_heading">You may also like</span></h4></div></div><br><div class="row"><div class="col-xs-4 col-md-4 col-lg-4 col-sm-4"><img src="imgs/row_3/img_2/img2_med.jpg"srcset="imgs/row_3/img_2/img2_low.jpg 400w,imgs/row_3/img_2/img2_med.jpg 700w,imgs/row_3/img_2/img2_high.jpg 1000w,imgs/row_3/img_2/img2_very_high.jpg 1500w"sizes="100vw"alt="1-img-jumbotron"class="img-responsive"><h4 class="post_link"><a href="#">Cold winter days</a></h4></div><div class="col-xs-4 col-md-4 col-lg-4 col-sm-4"><img src="imgs/row_2/img_2/img2_med.jpg"srcset="imgs/row_2/img_2/img2_low.jpg 400w,imgs/row_2/img_2/img2_med.jpg 700w,imgs/row_2/img_2/img2_high.jpg 1000w,imgs/row_2/img_2/img2_very_high.jpg 1500w"sizes="100vw"alt="1-img-jumbotron"class="img-responsive"><h4 class="post_link"><a href="#">A day exploring the Alps</a></h4></div><div class="col-xs-4 col-md-4 col-lg-4 col-sm-4"><img src="imgs/row_2/img_1/img1_med.jpg"srcset="imgs/row_2/img_1/img1_low.jpg 400w,imgs/row_2/img_1/img1_med.jpg 700w,imgs/row_2/img_1/img1_high.jpg 1000w,imgs/row_2/img_1/img1_very_high.jpg 1500w"sizes="100vw"alt="3-img-jumbotron"class="img-responsive"><h4 class="post_link"><a href="#">American dream</a></h4></div></div></div></div><form class="section_comment"><div class="container-fluid"><div class="row"><div class="col-xs-12 col-md-12 col-lg-12 col-sm-12"><br><p class="small_heading text-uppercase">2 comments</p><br><div class="media-list"><div class="media"><div class="media-left"><a href="#"><img src="imgs/icon_users/user/user.png" alt="user-1" class="media-object user_image"></a></div><div class="media-body"><h4 class="media-heading"><b class="user_fullname">John Doe</b></h4><p class="user_comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo!</p><p><a href="#" class="text-uppercase reply chapter_link">reply</a></p></div></div><div class="media"><div class="media-left"><a href="#"><img src="imgs/icon_users/JD_blue/jd.png"></a></div><div class="media-body"><h4 class="media-heading"><b class="user_fullname">John Doe</b></h4><p class="user_comment">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo!</p><p><a href="#" class="text-uppercase reply chapter_link">reply</a></p></div></div><div class="media"><div class="media-left"><a href="#"><img src="imgs/icon_users/JD_grey/jd.png"></a></div><div class="media-body"><div class="form-group"><textarea class="form-control" placeholder="JOIN THE DISCUSSION" rows=3></textarea></div></div></div></div><div class="pull-right btn-group connected_group"><span class="btn text-uppercase btn-group-text chapter_link chapter_link_btn" >connected with</span><a href="#" class="btn btn-default"><img src="imgs/icons_social/icons_0010_tw.png" alt="twitter_link"></a><a href="#" class="btn btn-default"><img src="imgs/icons_social/icons_0005_fb.png" alt="facebook_link"></a></div></div></div></div></form>');
		}
	});
}