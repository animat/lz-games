var LZCONF = {};
LZCONF.baseUrl = {
    LZPROD: {
        api: 'http://www.linguazone.com/api/v2',
        post: 'http://www.linguazone.com',
        games: 'http://linguazone.s3.amazonaws.com/games',
        lang: 'http://www.linguazone.com/games',
        mma: 'http://linguazone.s3.amazonaws.com'
    },
    LZDEV: {
        api: 'http://localhost:3000/api/v2',
        post: 'http://localhost:3000',
        games: 'http://lz-staging.s3.amazonaws.com/games',
        lang: 'http://lz-staging.herokuapp.com/games',
        mma: 'http://lz-staging.s3.amazonaws.com'
    },
    LZSTAGING: {
      api: 'http://lz-staging.herokuapp.com/api/v2',
      post: 'http://lz-staging.herokuapp.com',
      games: 'http://lz-staging.s3.amazonaws.com/games',
      lang: 'http://lz-staging.herokuapp.com/games',
      mma: 'http://lz-staging.s3.amazonaws.com'
    },
    IVX_DEBUG_PROD: {
        api: 'http://www.linguazone.com/api/v2',
        post: 'http://www.linguazone.com',
        games: 'http://tw.ivanix.com/test/lgz/games',
        lang: 'http://www.linguazone.com/games',
        mma: 'http://linguazone.s3.amazonaws.com'
    },
    IVX_DEBUG_STAGING: {
      api: 'http://lz-staging.herokuapp.com/api/v2',
      post: 'http://lz-staging.herokuapp.com',
      games: 'http://192.168.0.11/test/lgz/games',
      lang: 'http://lz-staging.herokuapp.com/games',
      mma: 'http://lz-staging.s3.amazonaws.com'
    }
};
var K =  {};
K.baseUrl = LZCONF.baseUrl.IVX_DEBUG_STAGING;


