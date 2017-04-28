webpackChunk([1,2],[
/* 0 */
/***/ (function(module, exports) {

function Hello ( msg ) {
    console.log( 'Hello '+ msg + '!' );
}
Hello.prototype.apply = function(complier){
    complier.plugin('run', function(complier, callback){
        console.log('I am in Hello!');
        callback();
    })
}
module.exports = Hello;

/***/ })
]);