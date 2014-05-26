function constructEmailFromTemplate (template) {
    var mailData = {
        from: template.find('.js-from').value,
        to: template.find('.js-to').value,
        cc: template.find('.js-cc').value,
        bcc: template.find('.js-bcc').value,
        subject: template.find('.js-subject').value,
        html: template.find('.js-html').value,
        text: template.find('.js-text').value,
        tags: template.find('.js-tags').value.split(','),
        testmode: template.find('.js-testmode').checked
    };

    if(mailData.to === '') {
        delete mailData.to;
    }
    if(mailData.cc === '') {
        delete mailData.cc;
    }
    if(mailData .bcc === '') {
        delete mailData.bcc;
    }

    return mailData;
}

Template.send.events({
    'click .js-btn-client': function (event, template) {
        Meteor.call('send', getLoginData(), constructEmailFromTemplate(template), function (error, result) {
            console.log(result);
            if (!result.error) {
                mailGunLog.insert({message: result.response.message});
            } else {
                mailGunLog.insert({message: result.error, error: true});
            }
        });
    }
});