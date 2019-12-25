$('document').ready(function(){

	$('.comfirm').on('click',function(){
		var nick, comment, clear,w,h;
		clear = ''
		nick = $('.input_name').val();
		comment = $('.input_comment').val();
		if ($('.input_name').val().length === 0 || $('.input_comment').val().length === 0){
			alert('Please fill blanks: Your name and/or Your Comment.')
		}
		/*if ($('.input_comment').val().length === 0){
			alert('Please fill blanks: Your name and/or Your Comment.')
		}
		*/
		if ($('.input_name').val().length > 0 && $('.input_comment').val().length > 0 ){
			$('.zone_comments').append('<p>'+'<strong>'+nick+'</strong>'+'<br>'+'<br>'+comment)
		}
		w = $('body').innerWidth();
		h = $('body').innerHeight();
		if (w <= 320){
			$('p').css({'color':'white',
			'width':'303px',
			'height':'60px',
			'height':'auto',
			'font-family':'Ubuntu',
			'margin-left':'10px',
			'text-align':'top',
			'transition':'0.5s',
			'border-radius':'8px',
			'background-color':'#00D3B2',
			'color':'black'});
		}
		else{
			$('p').css({'color':'white',
			'width':'1280px',
			'height':'60px',
			'height':'auto',
			'font-family':'Ubuntu',
			'margin-left':'10px',
			'text-align':'top',
			'transition':'0.5s',
			'border-radius':'8px',
			'background-color':'#00D3B2',
			'color':'black'});
		}
		$('p').mouseover(function(){
			$('p').css({'background-color':'#D910B2','color':'white'});
		}).mouseout(function(){
			$('p').css({'background-color':'#00D3B2','color':'black'});
		})
		$('.input_name').val(clear);
		$('.input_comment').val(clear);
	})
	$('.shop_button').on('click',function(){
	})
})