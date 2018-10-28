var frameModule = require('ui/frame');

function onTap(){
    var navigationEntry ={
        moduleName: './views/home/home',
        transition: {
            name: 'flipRight'
        }
    };
    frameModule.getFrameById('topmost').navigate(navigationEntry);
}


exports.onTap = onTap;
