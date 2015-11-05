/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var LgzLib = LgzLib || {};
var g = g || {};

LgzLib.Hints = function (mgr) {
    'use strict';
    var thisObj, hud;

    thisObj = this;
    hud = mgr.hud;
    
    thisObj.event = function (type, punit, pval) {
        hud.winCloseAll('winHint', false);

        thisObj.eventPenalty(punit, pval);
        switch (type) {
        case 'giveup':
            thisObj.eventGiveUp();
            break;
        case 'movetoend':
            thisObj.eventMoveToEnd();
            break;
        case 'nextletter':
            thisObj.eventNextLetter();
            break;
        }
        
    };
    thisObj.add = function ($winHintAvl, $hintnode) {
        var i,  type,   $btn, btn, encpenalty, decpenalty, txtpenalty, regval, punit, pval;
        console.log('LgzLib.Hints.add: $hintnode: ' + $hintnode);
        type = $hintnode.text();
        console.log('LgzLib.Hints.add: type: ' + type);
        $btn = $winHintAvl.find('[subref=' + type + ']');
        
        if (!$btn.length) {
            console.error('LgzLib.Hints.add: no hint button for type: ' + type);
            return;
        }
        console.log('LgzLib.Hints.add: $btn.length: ' + $btn.length);

        $btn.css('display', 'inline');

        encpenalty = $hintnode.attr('penalty');
        decpenalty = decodeURIComponent(encpenalty);
        console.log('LgzLib.Hints.add: decpenalty: ' + decpenalty);

        if (decpenalty === 'undefined') {
            return;
        }
        $btn[0].innerHTML = decpenalty;
        txtpenalty = $btn.text();

        regval = txtpenalty.match(/second|point/);
        if(regval) {
            punit = regval[0];
        }

        regval = txtpenalty.match(/[0-9]+/);
        if(regval) {
            pval = regval[0];
        } else {
            pval = 0;
        }

        $btn.click(
            function () {
                thisObj.event(type, punit, pval);
            }
        );



    };
    thisObj.init = function () {
        //note: must be called AFTER nodemgr has loaded xml file
        var i, hlist, $winHintAvl, $lgzGameDesc, gameDesc;
        
        hlist = mgr.nm.dataFind('hints').find('type');
        if (!hlist.length) {
            $('#winHint [subref=none]').css('display','block');
            return;
        }
        $winHintAvl = $('#winHint [subref=avail]');

        gameDesc = mgr.nm.dataFind('description').find('text').text();
        $lgzGameDesc = $winHintAvl.find('[resname=lgzGameDesc]');
        $lgzGameDesc.text(gameDesc);


        $winHintAvl.css('display','block');
        for(i =0; i < hlist.length; i += 1) {
            thisObj.add($winHintAvl, $(hlist[i]));
        }
            
    };
    
};
LgzLib.Hints.prototype.eventPenalty = function (unit, value) {
    //note: register event 
};
LgzLib.Hints.prototype.eventMoveToEnd = function () {
    //note: register event    
    console.debug('LgzLib.Hints.prototype.eventMoveToEnd: OVERRIDE!');
};
LgzLib.Hints.prototype.eventNextLetter = function () {
    //note: register event    
    console.debug('LgzLib.Hints.prototype.eventNextLetter: OVERRIDE!');
};
LgzLib.Hints.prototype.eventGiveUp = function () {
    //note: register event         
    console.debug('LgzLib.Hints.prototype.eventGiveUp: OVERRIDE!');
};
