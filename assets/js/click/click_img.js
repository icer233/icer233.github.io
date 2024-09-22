!function(e, t, a) {
    function n() {
        c(".image{width: 80px;height: 80px;position: fixed;filter: drop-shadow(0 0 10px);}.image:after,.image:before{content: '';position: fixed;}"),
        o(),
        r()
    }
    function r() {
        for (var e = 0; e < d.length; e++) d[e].alpha <= 0 ? (t.body.removeChild(d[e].el), d.splice(e, 1)) : (d[e].y--, d[e].scale += .004, d[e].alpha -= .013, d[e].el.style.cssText = "left:" + d[e].x + "px;top:" + d[e].y + "px;opacity:" + d[e].alpha + ";transform:scale(" + d[e].scale + "," + d[e].scale + ");filter: drop-shadow(0 0 10px " + d[e].color + ");z-index:99999");
        requestAnimationFrame(r)
    }
    function o() {
        var t = "function" == typeof e.onclick && e.onclick;
        e.onclick = function(e) {
            t && t(),
            i(e)
        }
    }
    function i(e) {
        var a = t.createElement("img");
        a.src = "https://icer233.github.io/assets/img/gyf.png"; 
        a.className = "image",
        d.push({
            el: a,
            x: e.clientX - 25,
            y: e.clientY - 25,
            scale: 1,
            alpha: 1,
            color: s()
        }),
        t.body.appendChild(a)
    }
    function c(e) {
        var a = t.createElement("style");
        a.type = "text/css";
        try {
            a.appendChild(t.createTextNode(e))
        } catch(t) {
            a.styleSheet.cssText = e
        }
        t.getElementsByTagName("head")[0].appendChild(a)
    }
    function s() {
        return "rgb(" + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + ")"
    }
    var d = [];
    e.requestAnimationFrame = function() {
        return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame ||
        function(e) {
            setTimeout(e, 1e3 / 60)
        }
    } (),
    n()
} (window, document);
