function getFilter (template) {
    var filter;

    filter = jQuery.parseJSON(template.find('.js-filter').value);

    return filter;
}

Template.status.events({
    'click .js-btn-client': function (event, template) {
        Meteor.call('getEvents', getLoginData(), getFilter(template), function (error, result) {
            console.log(result.response);
            if (!result.error) {
                mailGunLog.insert({message: JSON.stringify(result.response)});
            } else {
                mailGunLog.insert({message: result.error, error: true});
            }
        });
    }
});