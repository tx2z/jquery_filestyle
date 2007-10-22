/*
 * Style File - jQuery plugin for styling file input elements
 *  
 * Copyright (c) 2007 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Based on work by Shaun Inman
 *   http://www.shauninman.com/archive/2007/09/10/styling_file_inputs_with_css_and_the_dom
 *
 * Revision: $Id$
 *
 */

(function($) {
    
    $.fn.stylefile = function(options) {
                
        var settings = {
            width : 250
        };
                
        if(options) {
            $.extend(settings, options);
        };
                
        return this.each(function() {
            
            var self = this;
            var wrapper = $("<div>")
                            .css("width", settings.image_width)
                            .css("height", settings.image_height + "px")
                            .css("background", "url(" + settings.image + ") 0 0 no-repeat")
                            .css("background-position", "right")
                            .css("display", "inline")
                            .css("overflow", "hidden")
                            .css("cursor", "pointer");
                            
            var filename = $("<input>")
                             .css("display", "inline")
                             .css("width", settings.width + "px")
                             .css("font-size", "10px");

            $(self).before(filename);
            $(self).wrap(wrapper);

            $(self).css("position", "relative")
                   .css("height", settings.image_height + "px")
                   .css("margin-left", settings.image_width - settings.width + "px")
                   .css("width", "250px")
                   .css("display", "inline")
                   .css("opacity", "0.0");

            $(self).bind("change", function() {
                filename.val($(self).val());
            });
      
        });
        

    };
    
})(jQuery);