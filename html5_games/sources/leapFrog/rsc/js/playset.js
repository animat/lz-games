/*global
    $: true,
    Phaser: true,
    K: true,
    console: true,
    window: true,
    LgzLib: true
 */
/*jslint  nomen: true */
var Lgz = Lgz || {};
Lgz.PlaySet = function (scene) {
    'use strict';
    var thisObj;       
    thisObj = this;
    thisObj.scene = scene;
    thisObj.lgzMgr = scene.lgzMgr;
    thisObj.game = thisObj.lgzMgr.game;
    thisObj.nm = thisObj.lgzMgr.nm;
    thisObj.cont = false;

    thisObj.rscload = function () {
        //thisObj.lgzMgr.rscAtlas('molecharacter');
        //thisObj.lgzMgr.rscAtlas('mallet');
        //thisObj.lgzMgr.rscAudio('sfx', true); 
    };

    thisObj.create = function () {
       var sprite;
       thisObj.sprites = {};
       thisObj.cont = true;
       thisObj.nm.reset();
       //thisObj.sfx = thisObj.lgzMgr.rscAudioTracks('sfx');
       thisObj.load();
    };
    thisObj.update = function () {

    };
    thisObj.pause = function () {
        
    };
    thisObj.resume = function () {
        
    };    
    thisObj.start = function () {
        thisObj.nm.reset();
        return;
    };    
    thisObj.load = function () {
        var question, answer, i, substext;
        console.debug('Lgz.PlaySet.load:');
        question  = {};
        question.node = thisObj.nm.getQuestion();
        question.display = new LgzLib.DisplayNodeBox(thisObj.game, question.node, 175, 50, 300, 50 );
        answer  = {};
        answer.node = thisObj.nm.getResponse();
        answer.text = answer.node.getAttribute('content');
        
        thisObj.question = question;
        thisObj.answer = answer;
        thisObj.cont = true;
    };
    thisObj.eventNodeBeforeNext = function () {
        thisObj.question.display.visible = false;
    };
    thisObj.eventNodeAfterNext = function () {
        thisObj.load();
    };
    thisObj.eventNodeFinish = function () {
 
    };    
};
