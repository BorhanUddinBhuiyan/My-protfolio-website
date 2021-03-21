function borhan_tm_imgtosvg(){"use strict";jQuery("img.svg").each(function(){var e=jQuery(this),t=e.attr("class"),r=e.attr("src");jQuery.get(r,function(r){var a=jQuery(r).find("svg");void 0!==t&&(a=a.attr("class",t+" replaced-svg")),a=a.removeAttr("xmlns:a"),e.replaceWith(a)},"xml")})}function borhan_tm_responsive(){"use strict";var e=jQuery(".borhan_tm_leftpart_wrap"),t=jQuery(".borhan_tm_rightpart"),r=jQuery(window).width();r<1040?(e.addClass("hide"),t.addClass("full")):(e.removeClass("hide"),t.removeClass("full"))}function borhan_tm_magnific_popup(){"use strict";jQuery(".open-popup-link").magnificPopup({type:"inline",midClick:!0}),jQuery(".gallery").each(function(){jQuery(this).magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}})}),jQuery(".gallery_zoom").each(function(){jQuery(this).magnificPopup({delegate:"a.zoom",type:"image",gallery:{enabled:!0},removalDelay:300,mainClass:"mfp-fade"})}),jQuery(".popup-youtube").each(function(){jQuery(this).magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1})})}function borhan_tm_jarallax(){"use strict";jQuery(".jarallax").each(function(){var e=jQuery(this),t=e.data("speed");t="undefined"!==t&&""!==t?t:.5,e.jarallax({speed:t,automaticResize:!0})})}function borhan_tm_list_height(){"use strict";var e=jQuery(".about_short_contact_wrap"),t=e.find("li:nth-of-type(2n)");t.after("<div class='clearfix'></div>")}function borhan_tm_portfolio(){"use strict";if(jQuery().isotope){var e=jQuery(".borhan_tm_portfolio_list"),t=jQuery(".borhan_tm_portfolio_filter");t.length&&(t.find("a").on("click",function(){var t=jQuery(this).attr("data-filter");return e.isotope({filter:t,animationOptions:{duration:750,easing:"linear",queue:!1}}),!1}),t.find("a").on("click",function(){return t.find("a").removeClass("current"),jQuery(this).addClass("current"),!1}))}}function borhan_tm_projects(){"use strict";jQuery(".borhan_tm_portfolio_animation_wrap").each(function(){jQuery(this).on("mouseenter",function(){jQuery(this).data("title")&&(jQuery(".borhan_tm_portfolio_titles").html(jQuery(this).data("title")+'<span class="work__cat">'+jQuery(this).data("category")+"</span>"),jQuery(".borhan_tm_portfolio_titles").addClass("visible")),jQuery(document).on("mousemove",function(e){jQuery(".borhan_tm_portfolio_titles").css({left:e.clientX-10,top:e.clientY+25})})}).on("mouseleave",function(){jQuery(".borhan_tm_portfolio_titles").removeClass("visible")})})}function borhan_tm_anchor(){"use strict";jQuery(".anchor_nav").onePageNav();var e=0;jQuery(".anchor a").on("click",function(t){return t.preventDefault(),jQuery("html,body").scrollTo(this.hash,this.hash,{gap:{y:-e-85},animation:{duration:1500,easing:"easeInOutExpo"}}),!1})}function borhan_tm_contact_form(){"use strict";jQuery(".contact_form #send_message").on("click",function(){var e=jQuery(".contact_form #name").val(),t=jQuery(".contact_form #email").val(),r=jQuery(".contact_form #message").val(),a=jQuery(".contact_form #subject").val(),o=jQuery(".contact_form .returnmessage").data("success");return jQuery(".contact_form .returnmessage").empty(),""===e||""===t||""===r?jQuery("div.empty_notice").slideDown(500).delay(2e3).slideUp(500):jQuery.post("modal/contact.php",{ajax_name:e,ajax_email:t,ajax_message:r,ajax_subject:a},function(e){jQuery(".contact_form .returnmessage").append(e),jQuery(".contact_form .returnmessage span.contact_error").length?jQuery(".contact_form .returnmessage").slideDown(500).delay(2e3).slideUp(500):(jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+o+"</span>"),jQuery(".contact_form .returnmessage").slideDown(500).delay(4e3).slideUp(500)),""===e&&jQuery("#contact_form")[0].reset()}),!1})}function borhan_tm_owl_carousel(){"use strict";var e=jQuery(".borhan_tm_services_wrap .owl-carousel");e.owlCarousel({loop:!0,items:3,lazyLoad:!0,margin:30,autoplay:!1,autoplayTimeout:6e3,smartSpeed:2e3,dots:!0,nav:!1,navSpeed:!0,responsive:{0:{items:1},480:{items:2},768:{items:3},1040:{items:3},1200:{items:3},1600:{items:3},1920:{items:3}}}),jQuery(".borhan_tm_services_wrap .custom_nav > a.prev").on("click",function(){return e.trigger("prev.owl.carousel"),!1}),jQuery(".borhan_tm_services_wrap .custom_nav > a.next").on("click",function(){return e.trigger("next.owl.carousel"),!1}),borhan_tm_imgtosvg();var t=jQuery(".borhan_tm_testimonial_wrap .owl-carousel");t.owlCarousel({loop:!0,autoplay:!1,autoWidth:!1,nav:!1,items:1})}function tdProgress(e){"use strict";e.find(".borhan_tm_progress").each(function(e){var t=jQuery(this),r=parseInt(t.data("value"),10),a=t.data("color"),o=t.find(".borhan_tm_bar_wrap"),n=t.find(".borhan_tm_bar");n.css({width:r+"%",backgroundColor:a}),setTimeout(function(){o.addClass("open")},500*e)})}function borhan_tm_miniboxes(){"use strict";var e=jQuery(".borhan_tm_miniboxes");e.length&&e.each(function(e,t){var r=jQuery(t).find(".borhan_tm_minibox");r.css({height:"auto"});var a=jQuery(window).width();if(a>480){var o=r.map(function(){return jQuery(this).outerHeight()}).get(),n=Math.max.apply(null,o);r.css({height:n+"px"})}})}function borhan_tm_isotope(){"use strict";jQuery(".masonry").isotope({itemSelector:".masonry_item",masonry:{}})}function borhan_tm_totop(){"use strict";jQuery(".borhan_tm_totop").on("click",function(e){return e.preventDefault(),jQuery("html, body").animate({scrollTop:0},"slow"),!1})}function borhan_tm_totop_myhide(){"use strict";var e=jQuery(".borhan_tm_totop");if(e.length){var t=e.offset().top;t>1e3?e.addClass("opened"):e.removeClass("opened")}}function borhan_tm_animate_text(){"use strict";var e=jQuery(".borhan_tm_animation_text_word");e.typed({strings:["an Engineering Student","a Web Developer","a Freelancer"],loop:!0,startDelay:1e3,backDelay:2e3})}function borhan_tm_popup_blog(){"use strict";var e=jQuery(".borhan_tm_list_wrap.blog_list .inner_list"),t=jQuery("#borhan_tm_popup_blog"),r=t.find(".inner_popup"),a=t.find(".close");e.each(function(){var e=jQuery(this),a=e.find(".read_more a,.title_holder a,.link_news"),o=e.html(),n=e.find(".news_image"),i=n.data("url"),s=e.find(".title_holder h3"),u=e.find(".title_holder h3 a").html();n.css({backgroundImage:"url("+i+")"}),a.on("click",function(){return t.addClass("opened"),r.html(o),n=r.find(".news_image"),n.css({backgroundImage:"url("+i+")"}),s=r.find(".title_holder h3"),s.html(u),!1})}),a.on("click",function(){return t.removeClass("opened"),r.html(""),!1})}function borhan_tm_popupscroll(){"use strict";var e=jQuery(window).height(),t=jQuery(".scrollable"),r=jQuery(".borhan_tm_popup_blog .inner_popup");r.css({height:e-100}),t.each(function(){var e=jQuery(this),t=jQuery(window).height();e.css({height:t-100}),e.niceScroll({touchbehavior:!1,cursorwidth:0,autohidemode:!0,cursorborder:"0px solid #fff"})})}function borhan_tm_kenburn_slider(){"use strict";jQuery(function(){jQuery(".borhan_tm_hero_header_wrap .overlay_slider").vegas({timer:!1,animation:["kenburnsUp","kenburnsLeft","kenburnsRight"],delay:7e3,slides:[{src:"img/hero/1.jpg"},{src:"img/hero/2.jpg"},{src:"img/hero/3.jpg"}]})})}function borhan_tm_ripple(){"use strict";jQuery("#ripple").ripples({resolution:500,dropRadius:20,perturbance:.04}),jQuery("#ripple_testimonial").ripples({resolution:500,dropRadius:20,perturbance:.04})}function borhan_tm_switcher(){"use strict";var e=jQuery(".borhan_tm_resize"),t=jQuery(".borhan_tm_leftpart_wrap .borhan_tm_resize i"),r=jQuery(".borhan_tm_leftpart_wrap"),a=jQuery(".borhan_tm_rightpart");e.on("click",function(){return e.hasClass("opened")?(e.removeClass("opened"),t.removeClass("opened"),r.removeClass("opened"),a.removeClass("opened")):(e.addClass("opened"),t.addClass("opened"),r.addClass("opened"),a.addClass("opened")),setTimeout(function(){jQuery("#ripple").ripples("updateSize")},101),setTimeout(function(){jQuery("#ripple").ripples("updateSize")},201),setTimeout(function(){jQuery("#ripple").ripples("updateSize")},301),jQuery(".jarallax").length&&(jQuery(".jarallax").jarallax("destroy"),setTimeout(function(){borhan_tm_jarallax()},300)),!1})}function borhan_tm_data_images(){"use strict";var e=jQuery("*[data-img-url]");e.each(function(){var e=jQuery(this),t=e.data("img-url");e.css({backgroundImage:"url("+t+")"})})}function borhan_tm_about_animation(){"use strict";if($(".parallax").length>0){var e=$(".parallax").get(0);new Parallax(e,{relativeInput:!0,onReady:function(){console.log("ready!")}})}}function borhan_tm_hamburger(){"use strict";var e=jQuery(".hamburger"),t=jQuery(".borhan_tm_mobile_menu_wrap");e.on("click",function(){var e=jQuery(this);return e.hasClass("is-active")?(e.removeClass("is-active"),t.slideUp()):(e.addClass("is-active"),t.slideDown()),!1})}jQuery(document).ready(function(){"use strict";borhan_tm_responsive(),borhan_tm_imgtosvg(),borhan_tm_magnific_popup(),borhan_tm_jarallax(),borhan_tm_list_height(),borhan_tm_portfolio(),borhan_tm_anchor(),borhan_tm_contact_form(),borhan_tm_owl_carousel(),borhan_tm_animate_text(),borhan_tm_projects(),borhan_tm_miniboxes(),borhan_tm_isotope(),borhan_tm_totop(),borhan_tm_totop_myhide(),borhan_tm_animate_text(),borhan_tm_popup_blog(),borhan_tm_popupscroll(),borhan_tm_about_animation(),borhan_tm_kenburn_slider(),borhan_tm_ripple(),borhan_tm_switcher(),borhan_tm_data_images(),borhan_tm_hamburger(),jQuery(window).on("scroll",function(){borhan_tm_totop_myhide()}),jQuery(window).on("resize",function(){borhan_tm_miniboxes(),borhan_tm_isotope(),borhan_tm_responsive()}),jQuery(window).load("body",function(){setTimeout(function(){jQuery(".borhan_tm_preloader").addClass("loaded")},1e3)})}),(new WOW).init(),jQuery(".borhan_tm_progress_wrap").each(function(){"use strict";var e=jQuery(this);e.waypoint({handler:function(){tdProgress(e)},offset:"90%"})}),jQuery(".borhan_tm_counter").each(function(){"use strict";var e=jQuery(this);e.waypoint({handler:function(){e.hasClass("stop")||e.addClass("stop").countTo({refreshInterval:50,formatter:function(e,t){return e.toFixed(t.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g,",")}})},offset:"80%"})});