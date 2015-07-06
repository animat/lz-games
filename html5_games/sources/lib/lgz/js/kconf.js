/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var LZCONF = {};
LZCONF.baseUrl = {
    LZPROD: {
        api: 'http://linguazone.com/api/v2',
        games: 'http://linguazone.s3.amazonaws.com/games',
        lang: 'http://linguazone.com/lang',
        mma: 'http://linguazone.s3.amazonaws.com/mma'
    },
    IVANIXPUB1: {
        api: 'http://lgz.ivanix.com/api/v2',
        games: 'http://lgz.ivanix.com/games',
        lang: 'http://lgz.ivanix.com/lang',
        mma: 'http://lgz.ivanix.com/mma'
    },
    IVANIXPRIV1: {
        api: 'http://lgz.ivanix.com/api/v2',
        games: 'http://192.168.0.10/Projects/Clients/LinguaZone/lz-games/html5_games/sources',
        lang: 'http://lgz.ivanix.com/lang',
        mma: 'http://lgz.ivanix.com/mma'
    },
    IVANIXPRIV2: {
        api: 'http://lgz.ivanix.com/api/v2',
        games: 'http://192.168.2.20/Projects/Clients/LinguaZone/lz-games/html5_games/sources',
        lang: 'http://lgz.ivanix.com/lang',
        mma: 'http://lgz.ivanix.com/mma'
    }
};
var K =  {};

K.baseUrl = LZCONF.baseUrl.IVANIXPUB1;


