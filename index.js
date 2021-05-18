


function receivesAFunction(callback) {
    callback();
}

function fn (name) {
    return `${name}`;
}

function returnsANamedFunction() {
    return fn;
}

// function fx (name) {
//     return ('');
// }

// function returnsAnAnonymousFunction() {
//     return fx;
// }

function returnsAnAnonymousFunction(){
    return () => fn
 }