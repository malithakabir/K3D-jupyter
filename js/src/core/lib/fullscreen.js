'use strict';

var screenfull = require('screenfull');

function fullscreenGUI(container, gui, currentWindow) {
    var obj = {
        fullscreen: false
    };

    gui.add(obj, 'fullscreen').name('Full screen').listen().onChange(function (value) {
        if (value) {
            screenfull.request(container);
        } else {
            screenfull.exit();
        }
    });

    currentWindow.addEventListener(screenfull.raw.fullscreenchange, function () {
        obj.fullscreen = screenfull.isFullscreen;
        currentWindow.dispatchEvent(new Event('resize'));
    });
}

module.exports = {
    isAvailable: function () {
        return screenfull.enabled;
    },

    initialize: fullscreenGUI
};
