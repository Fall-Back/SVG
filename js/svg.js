/*
    Fix CSS shortcomings in older browsers. Specifically fix the width of the objects container
    to be the same width as the object.
*/
window.onload = function() {

    if (!(
        document.body.style.msTouchSelect !== undefined /* IE10+ */
     || (document.all && document.addEventListener && !window.atob) /* IE9 */
     || Object.prototype.toString.call(window.operamini) === '[object OperaMini]' /* Opera Mini */
    )) {
        return;
    }
    console.log('Applying inline-block fix');

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
        obj.style.maxWidth          = 'none';
        obj.style.minWidth          = '0';
        obj.parentNode.style.width  = '100%';
        obj.parentNode.style.width  = obj.offsetWidth + 'px';
        obj.style.maxWidth          = '100%';
    }
    
}