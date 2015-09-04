var LZCONF = {};
LZCONF.baseUrl = {
    LZPROD: {
        api: 'http://linguazone.com/api/v2',
        games: 'http://linguazone.s3.amazonaws.com/games',
        lang: 'http://linguazone.com/games',
        mma: 'http://linguazone.s3.amazonaws.com'
    },
    LZDEV: {
        api: 'http://localhost:3000/api/v2',
        games: 'http://lz-staging.s3.amazonaws.com/games',
        lang: 'http://lz-staging.herokuapp.com/games',
        mma: 'http://lz-staging.s3.amazonaws.com'
    },
    LZSTAGING: {
      api: 'http://lz-staging.herokuapp.com/api/v2',
      games: 'http://lz-staging.s3.amazonaws.com/games',
      lang: 'http://lz-staging.herokuapp.com/games',
      mma: 'http://lz-staging.s3.amazonaws.com'
    }
};
var K =  {};

K.baseUrl = LZCONF.baseUrl.LZSTAGING;


