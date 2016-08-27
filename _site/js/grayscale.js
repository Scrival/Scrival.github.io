/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});
(function() {

    "use strict";

    // Methods/polyfills.

        // classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
            !function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();

        // canUse
            window.canUse=function(p){if(!window._canUse)window._canUse=document.createElement("div");var e=window._canUse.style,up=p.charAt(0).toUpperCase()+p.slice(1);return p in e||"Moz"+up in e||"Webkit"+up in e||"O"+up in e||"ms"+up in e};

        // window.addEventListener
            (function(){if("addEventListener"in window)return;window.addEventListener=function(type,f){window.attachEvent("on"+type,f)}})();

    // Vars.
        var $body = document.querySelector('body');

    // Disable animations/transitions until everything's loaded.
        $body.classList.add('is-loading');

        window.addEventListener('load', function() {
            window.setTimeout(function() {
                $body.classList.remove('is-loading');
            }, 100);
        });
// Signup Form.
        (function() {

            // Vars.
                var $form = document.querySelectorAll('#signup-form')[0],
                    $submit = document.querySelectorAll('#signup-form input[type="submit"]')[0],
                    $message;

            // Bail if addEventListener isn't supported.
                if (!('addEventListener' in $form))
                    return;

            // Message.
                $message = document.createElement('span');
                    $message.classList.add('message');
                    $form.appendChild($message);

                $message._show = function(type, text) {

                    $message.innerHTML = text;
                    $message.classList.add(type);
                    $message.classList.add('visible');

                    window.setTimeout(function() {
                        $message._hide();
                    }, 3000);

                };

                $message._hide = function() {
                    $message.classList.remove('visible');
                };

           

        })();
})();

