//외부 a link에 자동으로 noopener 붙이기  
$(document).ready(function(){
    $('a[href^="http"]').not('a[href*="' + location.hostname + '"]').attr({target: "_blank", rel: "noopener"});
    $('a[href^="//"]').not('a[href*="' + location.hostname + '"]').attr({target: "_blank", rel: "noopener"});
});
Math.secureRandom = function() {
    var rng = window.crypto || window.msCrypto;
    if (rng === undefined)
        return console.log( 'No suitable RNG found' );

    // Lazy-load this if- branch
    Math.secureRandom = function() {
        // More secure implementation of Math.random (https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues#Examples)
        return rng.getRandomValues(new Uint32Array(1))[0] / 4294967296;
    };

    return Math.secureRandom();
};