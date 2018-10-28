var frameModule = require('ui/frame');

function onTap(){
    var navigationEntry ={
        moduleName: './views/about/about',
        transition: {
            name: 'flipRight'
        }
    };
    frameModule.getFrameById('topmost').navigate(navigationEntry);
}


exports.onTap = onTap;
