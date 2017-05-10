/****************************************************************
 * rfduino
 */

if (!window.plugins) {
    window.plugins = {};
}

var rfduino = {};

rfduino.discover = function (seconds, successCallback, failureCallback) {

    var devices = [{name:"simblee", uuid:"BD922605-1B07-4D55-8D09-B66653E51BBA"}, {name:"TV", uuid:"BD922605-1B07-4D55-8P09-B66653E51BBA"}];
    return devices;
};

rfduino.connect = function (result) {
    var promise = new Promise(function(resolve, reject) {
        if (result) {
            resolve(true);
        }
        else {
            reject(Error(false));
        }
    });

    return promise;
};

rfduino.isEnabled = function (result) {
    var promise = new Promise(function(resolve, reject) {
        if (result) {
            resolve(true);
        }
        else {
            reject(Error(false));
        }
    });

    return promise;
};

rfduino.isConnected = function (result) {
    var promise = new Promise(function(resolve, reject) {
        if (result) {
            resolve(true);
        }
        else {
            reject(Error(false));
        }
    });

    return promise;
};

rfduino.checkBattery = function (result) {
    return (Math.random(1, 100)*100).toFixed(0);
};

rfduino.onData = function () {
    var resArr = [
        true,
        false,
        12,
        "f3",
        "pz",
        +new Date(),
        +new Date(),
        Math.random(0,10)*10,
        Math.random(0,10)*10
    ];

    var res = resArr.join(',');

    var promise = new Promise(function(resolve) {
        resolve(res);

    });

    return promise;
};

window.plugins['rfduino'] = rfduino;

window.rfduino = rfduino;
