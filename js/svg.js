/*
    Fix CSS shortcomings in older browsers. Specifically fix the width of the objects container
    to be the same width as the object.
*/

if (!!(
    document.body.style.msTouchSelect !== undefined /* IE10+ */
 || (document.all && document.addEventListener && !window.atob) /* IE9 */
 || Object.prototype.toString.call(window.operamini) === '[object OperaMini]' /* Opera Mini */
)) {

    //console.log('Applying inline-block fix');

    window.onload = (function(onload) {
        return function(event) {

            var objs = document.getElementsByTagName('object');
            var i = 0
              , l = objs.length
              , data
              , obj;

            for (i; i < l; i++) {
                obj = objs[i];
                // Check object is inside of an .svg__link and
                // not inside of an .svg--fluid
                if (obj.parentNode.className.indexOf('svg__link') == -1 || obj.parentNode.parentNode.className.indexOf('svg--fluid') >= 0) {
                    continue;
                }
                
                
                // If the .svg container has a width of 'auto', things don't work, so we need to 
                // temporarily set the width to 100% so the children can expand to their natural
                // width:
                var svg = obj.parentNode.parentNode;
                // Is the width 'auto' or not set.
                if (svg.style.width == '' || svg.style.width == 'auto') {
                    svg.style.width  = '100%';
                }
                
                
                // Also, if there's an auto width parent to the .svg container (e.g. for styling a
                // box or whatever) we need to do the same. Apply the .svg-container class to that
                // element.
                var container = svg.parentNode;
                // Is the width 'auto' or not set.
                if (container.className.indexOf('svg-container') > 0 && (container.style.width == '' || container.style.width == 'auto')) {
                    container.style.width  = '100%';
                }
                
                
                obj.style.maxWidth         = 'none';
                obj.style.minWidth         = '0';
                obj.parentNode.style.width = '100%';
                obj.parentNode.style.width = obj.offsetWidth + 'px';
                obj.style.maxWidth         = '100%';
                

                // Reset the container width:
                container.style.width  = '';
                
                
                // Reset the svg width:
                svg.style.width  = '';
            }
        }
    }(window.onload));
}
