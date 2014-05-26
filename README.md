notifications-example
-------------

Very simple example application demonstrating [mailgun-api Atmosphere](https://atmospherejs.com/package/mailgun-api) [mailgun-api Github](https://github.com/gfk-ba/meteor-mailgun-api).

This example is deployed at [meteor.com](http://mailgun-api-example.meteor.com)

You can run the example locally using:
``` sh
mrt install
meteor
```

When running locally you can add a LoginFile.js to the client with the following code:

``` javascript
LoginData = {
    domain: '#YOURDOMAIN#',
    apiKey: '#YOURAPIKEY#'
};
```

This way you dont have to re-enter your api info upon every refresh