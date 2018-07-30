// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth': {
        'clientID': '283266445562322', // your App ID
        'clientSecret': '8eec14cef5b76700c061e19a3995322b', // your App Secret
        'callbackURL': 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields': ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

    //not setup yet
    'twitterAuth': {
        'consumerKey': 'your-consumer-key-here',
        'consumerSecret': 'your-client-secret-here',
        'callbackURL': 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth': {
        'clientID': '385283821329-sdqluv922269u373p26rnmq7nurj24l8.apps.googleusercontent.com',
        'clientSecret': 'q9V2rNEa8LBNw1Zthn1UckQU',
        'callbackURL': 'http://localhost:8080/auth/google/callback'
    }

};