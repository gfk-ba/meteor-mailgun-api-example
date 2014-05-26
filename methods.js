/*
    For trust reasons this meteor method is shared with the client
    That way a user can see what happens with his mailgun api info
 */
if(Meteor.isServer) {
    Meteor.methods({
        'send':  function(loginData, mailData)
        {
            var emailApiWrapper = new Mailgun(loginData);
            var options = {
                testmode: mailData.testmode
            };

            delete mailData.testmode;

            var res = emailApiWrapper.send(mailData, options).wait();

            //Meteor methods do not allow error objects to be returned so have to convert it to a string
            if (_.isObject(res.error)) {
                res.error = res.error.toString();
            }

            return res;
        },
        'getEvents':  function(loginData, filter)
        {
            var emailApiWrapper = new Mailgun(loginData);

            var res = emailApiWrapper.getEvents(filter).wait();

            //Meteor methods do not allow error objects to be returned so have to convert it to a string
            if (_.isObject(res.error)) {
                res.error = res.error.toString();
            }

            return res;
        }
    });
}
