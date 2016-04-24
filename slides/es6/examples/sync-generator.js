var longRequest = function(msg) {
    console.log(msg);
    return new Promise(function(res, rej) {
        setTimeout(res, 2000);
    });
};

var completed = function() {
    console.log('world');
};


function synchronous(gen) {
    let iterable, resume;
    resume = function(err, retVal) {
        iterable.next(retVal);
    };

    iterable = gen(resume);
    iterable.next();
}

synchronous(function* (resume) {
    console.log(1);
    let longRequest1 = yield longRequest('hello').then(completed).then(resume);
    console.log(2);
    let longRequest2 = yield longRequest('goodbye').then(completed).then(resume);
    let finalYield   = yield console.log(3);
    console.log(4); //I'll never run
});


setTimeout(function(){console.log(1)},1000);
setTimeout(function(){console.log(2)},4000);
setTimeout(function(){console.log(3)},1000);
