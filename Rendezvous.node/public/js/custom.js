if(parent.location!=self.location){
    window.parent.location=self.location;
}else{
}

function heightCalc(){
    var top = 50;

    var iframeHeight = parseInt( $(window).height() ) - top;

    $('.iframe').css('height',iframeHeight+'px');
}

$(document).ready(function(){

    if( $('html').hasClass('touch') && $('.iframe').length > 0 ) {
        window.location=$('.iframe').attr('src');
    }

    $('.panel-toggler').click(function(){

        if($(this).parent().hasClass('hidden-panel')){
            $(this).parent().removeClass('hidden-panel');
            sw = '';
        }else{
            $(this).parent().addClass('hidden-panel');
            sw = 'hidden-panel';
        }
        $.ajax({
            type: "POST",
            url: 'register_color_schemes.php',
            data: 'theme='+theme+'&style_switcher='+sw
        });

    });

    $('[class*="bgpattern"],[class*="bgimage"]').on('click',function(){

        var obi = $('.layout-choice').val();

    });

    /*
     * Palette Change
     * */
    $('.palette-choice').on('change', function(){
        $('.iframe').attr('src', $(this).attr('data-url')+'?paletteName='+$(this).val());
    });

    /*
     * Panel Color Choice
     * */

    $('.t_color .panel-box').on('click',function(){

        var t_color     = $(this).css('background-color');
        var colorText   = '.st_color,.st_color:hover{color: '+t_color+';}' +
            '.st_social-icons li a:hover,.st_bgcolor{background-color: '+t_color+';}' +
            '.st_hero_unit:after{border-top-color: '+t_color+';}' +
            '.st_bordercolor{border-color: '+t_color+';}' +
            '.st_bordercolor_right{border-right-color: '+t_color+';}' +
            'li.comment:nth-child(even){border-left-color: '+t_color+';}';

        $.ajax({
            type: "POST",
            url: 'register_color_schemes.php',
            data: 'theme='+theme+'&colorText='+colorText
        }).done(function(){
            $('.iframe').contents().find('head').children('#customized_styles').html(colorText);
        });

    });

    /*$('.t_bg_pattern .panel-box,.t_bg_image .panel-box,.t_header_bg_image .panel-box').click(function(){

     var clickedClass = $(this).attr('class').split(' ')[2];
     var iframe = $('.iframe');
     var body = iframe.contents().find('body');
     body.removeClass();

     if($(this).parent('div').hasClass('t_bg_pattern')){
     $.ajax({
     type: "POST",
     url: 'register_color_schemes.php',
     data: 'theme='+theme+'&bgPattern='+clickedClass
     }).done(function(){

     if(body.find('#st_fullScreenImg').length > 0){
     body.find('#st_fullScreenImg').remove();
     }
     body.removeClass().addClass(clickedClass);

     });
     }else if($(this).parent('div').hasClass('t_bg_image')){

     var bgImage = $(this).css('background-image').replace('../','').replace('url(','').replace(')','' ).replace('thumbs/','');

     $.ajax({
     type: "POST",
     url: 'register_color_schemes.php',
     data: 'theme='+theme+'&bgImage='+bgImage
     }).done(function(){

     body.removeClass();
     if(iframe.contents().find('#st_fullScreenImg').length > 0){
     iframe.contents().find('#st_fullScreenImg').attr('src',bgImage);
     }else{
     console.log(bgImage);
     body.prepend('<img src="'+bgImage+'" alt="fullscreenbg" id="st_fullScreenImg" />');
     }

     });
     }else if($(this).parent('div').hasClass('t_header_bg_image')){

     $.ajax({
     type: "POST",
     url: 'register_color_schemes.php',
     data: 'theme='+theme+'&t_header_bg_image='+clickedClass
     }).done(function(){
     body.children('#st_page_wrapper').children('.st_headbg').removeClass().addClass('st_headbg '+ clickedClass);
     });
     }
     });*/

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
                body.children('.n_page_wrapper').addClass('n_page_wrapper_boxed n_shadowed')
                : body.children('.n_page_wrapper').removeClass('n_page_wrapper_boxed n_shadowed');

        });

    });

    $('.body-font-choice').on('change',function(){

        var iframe = $('.iframe');
        var body = iframe.contents().find('body');
        var head = iframe.contents().find('head');
        var t_body_font = $(this).val();

        $.ajax({
            type: "POST",
            url: 'register_color_schemes.php',
            data: 'theme='+theme+'&t_body_font='+t_body_font
        }).done(function(){
            if(head.children('#t_body_font').length > 0){
                head.children('#t_body_font').attr("href","http://fonts.googleapis.com/css?family="+t_body_font);
            }else{
                head.append("<link href='http://fonts.googleapis.com/css?family="+t_body_font+"' rel='stylesheet' type='text/css' id='t_body_font'>");
            }

            if(head.children('#t_body_font_style').length > 0){
                head.children('#t_body_font_style').html("body{font-family: '"+t_body_font.replace(/\+/g,' ' ).split(':')[0]+"'!important}")
            }else{
                head.append("<style type='text/css' rel='stylesheet' id='t_body_font_style'>body{font-family: '"+t_body_font.replace(/\+/g,' ').split(':')[0]+"'!important}</style>");
            }
        });

    });

    $('.headings-font-choice').on('change',function(){

        var iframe = $('.iframe');
        var body = iframe.contents().find('body');
        var head = iframe.contents().find('head');
        var t_headings_font = $(this).val();

        $.ajax({
            type: "POST",
            url: 'register_color_schemes.php',
            data: 'theme='+theme+'&t_headings_font='+t_headings_font
        }).done(function(){
            if(head.children('#t_headings_font').length > 0){
                head.children('#t_headings_font').attr("href","http://fonts.googleapis.com/css?family="+t_headings_font);
            }else{
                head.append("<<link href='http://fonts.googleapis.com/css?family="+t_headings_font+"' rel='stylesheet' type='text/css' id='t_headings_font'>");
            }

            if(head.children('#t_headings_font_style').length > 0){
                head.children('#t_headings_font_style').html("h1,h2,h3,h4,h5,h6{font-family: '"+t_headings_font.replace(/\+/g,' ').split(':')[0]+"'!important}")
            }else{
                head.append("<style type='text/css' rel='stylesheet' id='t_headings_font_style'>h1,h2,h3,h4,h5,h6{font-family: '"+t_headings_font.replace(/\+/g,' ').split(':')[0]+"'!important}</style>");
            }
        });

    });

    $('.reset_changes' ).click(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: 'register_color_schemes.php',
            data: 'reset_changes=1'
        }).done(function(){
            document.location.reload(true);
        });
    });


    $('#close-button').click(function(e){

        window.location = $('.iframe').attr('src');

        e.preventDefault();
    });

    heightCalc();
    $(window).bind('resize', heightCalc);

    $('.sizes').click(function(e){

        var size = $(this).attr('href').replace('#','');

        if(size == 'desktop'){
            size = '100%';
        }else{
            size = size+'px';
        }

        $('.iframe').css('width',size);

        if(theme == 'santone' || theme == 'santonewp'){
            document.getElementById('iframe').contentDocument.location.reload(true);
        }

        e.preventDefault();

    });

    $('.dropdowner,.item_title').on('click',function(e){
        e.preventDefault();
        var $toggle = $('.dropdowner i');

        if($('.select-dropdown').css('display') == 'none'){
            $('.select-dropdown').slideDown();
            $toggle.removeClass('fa-toggle-off').addClass('fa-toggle-on');
        }else{
            $('.select-dropdown').slideUp();
            $toggle.removeClass('fa-toggle-on').addClass('fa-toggle-off');
        }

    });

    $('#themeModifyBoxTrigger').click(function(){

        var themeModifyBox = $('#themeModifyBox');

        if(themeModifyBox.hasClass('themeModifyBoxOpen')){

            themeModifyBox.removeClass('themeModifyBoxOpen');

        }else{

            themeModifyBox.addClass('themeModifyBoxOpen');

        }

    });

    if($('#colorpicker').length > 0){
        $('#colorpicker').farbtastic(function(color){

            var rgb = hexToRgb(color);

            if(theme == 'metro' || theme == 'metrov2'){

                var styl = '.color{color: '+color+'!important;}.background-color{background-color: '+color+'!important;}.background-color-trans {background-color: rgba('+rgb+',0.8)!important;}.background-color-darker{background-color: '+color+'!important;}.border-color{border-color: '+color+'!important;}.border-left-color{border-left-color: '+color+'!important;}.border-top-color{border-top-color: '+color+'!important;}.border-color-darker{border-color: '+color+'!important;}::selection {background: '+color+';}';

                $('#colorcodes').val(styl);

                $('.iframe').contents().find('head').append('<style>'+styl+'</style>');

            }else if(theme == 'wetro'){

                var styl = '.color{color: '+color+'!important;}.background-color{background-color: '+color+'!important;}.background-color-trans {background-color: rgba('+rgb+',0.8)!important;}.background-color-darker{background-color: '+color+'!important;}.border-color{border-color: '+color+'!important;}.border-left-color{border-left-color: '+color+'!important;}.border-top-color{border-top-color: '+color+'!important;}.border-color-darker{border-color: '+color+'!important;}::selection {background: '+color+';}';

                $('#colorcodes').val(styl);

                if($('.iframe').contents().find('head').children('#colorChanges').length < 1){
                    $('.iframe').contents().find('head').append('<style type="text/css" id="colorChanges"></style>');
                }
                $('.iframe').contents().find('head').children('#colorChanges').html(styl);

            }else if(theme == 'metroonepage'){
                var rgb_darker  = shadeColor(color,-50);

                var styl = '.color{color: '+color+'!important;}.button,.tabs dd.active, .tabs li.active, ul.accordion > li.active,.panel.callout {border-color: '+rgb_darker+';}.button:hover{background-color: '+rgb_darker+';}.bgcolor,.button,.panel.callout {background-color: '+color+';}.bgcolor-trans {background-color: rgba('+rgb+',0.8)!important;}.background-color-darker{background-color: '+color+'!important;}.border-color{border-color: '+color+';}::selection {background: '+color+';}';

                $('#colorcodes').val(styl);

                $('.iframe').contents().find('head').children('#colorChanges').html(styl);

            }else if(theme == 'cherry'){

                var rgb_lighter = shadeColor(color,50);
                var rgb_darker  = shadeColor(color,-50);

                var styl = 'a,.read-more,.nav-menu > li:hover > a, .nav-menu > li.active > a,a:hover,.footer-blog-writer,.footer-contact-icon-title,.blog-bubble-comments,.site-color, .title-with-star,.title-with-star::before,.portfolio-categories li.active-li a:first-child, .blog-categories li::before {color: '+color+'!important} .bottom-line,.form-button,.accordion-toggle::before,.tags:hover,::selection,body::after,.directioner-prev, .directioner-next,.bottom-titles,.colored-background,.blog-bubble,.tags:hover,bottom-line,.nivo-controlNav.nivo-thumbs-enabled a::before,.nivo-controlNav.nivo-thumbs-enabled a::after,.breadcrumb, .accordion-toggle.minus::before,.accordion-toggle.minus::after,.arrow-in-the-leest::before,.round-shaped-accordion::before, .colored-background-accordion,.blog-specs { background-color: '+color+'!important} .bottom-titles { background-color: rgba('+rgb+',0.7)!important} .arrow-cont::before,footer .container > .row::after,.breadcrumb::after,.portfolio-categories-arrow-cont-active::before {border-color: '+color+' transparent transparent '+color+'!important;} textarea:focus, input[type="text"]:focus, input[type="password"]:focus, input[type="datetime"]:focus, input[type="datetime-local"]:focus, input[type="date"]:focus, input[type="month"]:focus, input[type="time"]:focus, input[type="week"]:focus, input[type="number"]:focus, input[type="email"]:focus, input[type="url"]:focus, input[type="search"]:focus, input[type="tel"]:focus, input[type="color"]:focus, .uneditable-input:focus { border-color: rgba('+rgb+',0.8)!important; outline: 0; outline: thin dotted 9; -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba('+rgb+',.6)!important; -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba('+rgb+',.6)!important; box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba('+rgb+',.6)!important; } footer,.portfolio-categories li.active-li,.comments li:nth-child(even),.map-container {border-color: '+color+'!important} .blog-specs .horizontal-splitter,.blog-specs .vertical-splitter{background-color: '+rgb_darker+'!important} .blog-specs .horizontal-splitter,.blog-specs .vertical-splitter{border-color: '+rgb_lighter+'!important}.breadcrumb li a:hover,.breadcrumb li a,.pricing-sign-up,#bottom-menu div div .bottom-menu-item,.tags {color: white!important;}.portfolio-categories li a:nth-child(2){color: #A1A1A1!important;}'+
                    '.portfolio-categories li a:first-child{color: #000000!important;}.portfolio-categories li a:first-childÃ‡:hover{color: '+color+'!important}.blog-categories li a{color: #676767!important;}.gray-background-accordion::before,.gray-background-accordion.minus::before{background-color: #353535!important}.colored-background-accordion{color: #FFFFFF!important}.nav-menu > li > a{color: #000000!important;}.dropdown-menu li a{color: #6D6D6D!important}.nav-menu > li > a:hover,.dropdown-menu li a:hover{color: '+color+'!important;}';

                $('#colorcodes').val(styl);

                if($('.iframe').contents().find('head').children('style').length > 0){
                    $('.iframe').contents().find('head').children('style').html('<style>'+styl+'</style>');
                }else{
                    $('.iframe').contents().find('head').append('<style>'+styl+'</style>');
                }

            }

        });
    }

});

function hexToRgb(hex) {

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);

    return r+','+g+','+b;

}

function shadeColor(color, porcent) {

    var R = parseInt(color.substring(1,3),16)
    var G = parseInt(color.substring(3,5),16)
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + porcent) / 100);
    G = parseInt(G * (100 + porcent) / 100);
    B = parseInt(B * (100 + porcent) / 100);

    R = (R<255)?R:255;
    G = (G<255)?G:255;
    B = (B<255)?B:255;

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}/**
 * Created by derekh on 10/6/2014.
 */
