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

function onTapContact(){
    var navigationEntry ={
        moduleName: './views/contact-us/contact-us',
        transition: {
            name: 'flipRight'
        }
    };
    frameModule.getFrameById('topmost').navigate(navigationEntry);
}


exports.onTap = onTap;
exports.onTapContact = onTapContact;
