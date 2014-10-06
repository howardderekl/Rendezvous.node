$(document).ready(function(){

    $('.color-picker-toggler').click(function(){
        if($('#color-picker').next('div').css('display') == 'none'){
            $('#color-picker').next('div').addClass('visible_cp');
            $('#color-picker').next('div').fadeIn();
            $('.color_codes').fadeOut();
            $(this).css('opacity','1');
        } else {
            $('#color-picker').next('div').fadeOut();
            $('#color-picker').next('div').removeClass('visible_cp');
            $(this).css('opacity','0.5');
        }
    });

    $('.color_codes_trigger').click(function(e){
        e.preventDefault();

        if($('#color-picker').next('div').hasClass('visible_cp')){
            $('#color-picker').next('div').fadeOut();
        }

        if($('.color_codes').css('display') == 'none'){
            $('.color_codes').fadeIn();
        }else{
            $('.color_codes').fadeOut();
        }
    });

    $('#color-picker').iris({
        hide: true,
        palettes: true,
        change: function(event, ui) {
            // event = standard jQuery event, produced by whichever control was changed.
            // ui = standard jQuery UI object, with a color member containing a Color.js object
            // change the headline color
            $(this).prev('div').css( 'background-color', ui.color.toString());
            var color = ui.color.toString();
            var rgb = hexToRgb(color);
            var style = '';

            style = '.met_bgcolor,.met_bgcolor_transition:hover,.met_audio_current_progress';
            style = style + '{background-color: '+color+'}';
            style += '.met_color,.met_color_transition:hover,.met_title_with_pager nav a.selected';
            style = style + '{color: '+color+'}';
            style += '.met_bgcolor_trans';
            style = style + '{background-color: rgba('+rgb+',0.8)}';
            style += '.met_blog_list_preview aside:after,.met_blog_comments_title:before';
            style = style + '{border-top-color: '+color+'}';
            style += '.met_blog_comment_count';
            style = style + '{border-left-color: '+color+'}';
            style += '#ascrail2000 div';
            style = style + "{background-color: "+color+"!important;}";

            $('.iframe').contents().find('head').children('#colorChanges').html(style);
            $('.color_codes').val(style);
            var colorCombination = color + ' ' + rgb;

            $.ajax({
                type: "POST",
                url: 'register_color_schemes.php',
                data: 'theme='+theme+'&t_palette='+colorCombination
            }).done(function(){				});		}
    });

    $('.menu_type_choice').on('change', function(){
        var iframe = $('.iframe');
        var val = $(this).val();
        var body = iframe.contents().find('body');
        $.ajax({
            type: "POST",
            url: 'register_color_schemes.php',
            data: 'theme='+theme+'&menu_type='+val
        }).done(function(){
            document.getElementById('iframe').contentDocument.location.reload(true);
        });
    });

    $('.layout-choice').on('change',function(){
        var iframe = $('.iframe');
        var body = iframe.contents().find('body');
        var t_layout = $(this).val();

        $.ajax({
            type: "POST",
            url: 'register_color_schemes.php',
            data: 'theme='+theme+'&t_layout='+t_layout
        }).done(function(){
            t_layout == 'Boxed' ?
                body.children('.met_page_wrapper').addClass('met_boxed_layout')	: body.children('.met_page_wrapper').removeClass('met_boxed_layout');
        });
    });

    $('.t_bg_pattern .panel-box,.t_bg_image .panel-box').bind('click', function(){
        var clickedClass = $(this).attr('class').split(' ')[2];
        var iframe = $('.iframe');
        var body = iframe.contents().find('body');
        body.removeClass(body.attr('class'));
        if($(this).parent('div').hasClass('t_bg_pattern')){
            $.ajax({
                type: "POST",
                url: 'register_color_schemes.php',
                data: 'theme='+theme+'&bgPattern='+clickedClass
            }).done(function(){
                if(body.find('#met_fullScreenImg').length > 0){
                    body.find('#met_fullScreenImg').remove();
                }					body.addClass('clearfix '+ clickedClass);
            });
        }else if($(this).parent('div').hasClass('t_bg_image')){
            var bgImage = $(this).css('background-image').replace('../','').replace('url(','').replace(')','' ).replace('thumbs/','');

            $.ajax({
                type: "POST",
                url: 'register_color_schemes.php',
                data: 'theme='+theme+'&bgImage='+bgImage
            }).done(function(){					body.removeClass();

                if(iframe.contents().find('#met_fullScreenImg').length > 0){
                    iframe.contents().find('#met_fullScreenImg').attr('src',bgImage);
                }else{
                    body.prepend('<img src="'+bgImage+'" alt="fullscreenbg" id="met_fullScreenImg" />');
                }
            });
        }
    });

});