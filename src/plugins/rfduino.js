/****************************************************************
 * rfduino
 */

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

window.rfduino = rfduino;
