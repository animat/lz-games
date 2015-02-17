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
    thisObj.add = function ($winHintAvl, hintnode) {
        var i,  type,   $btn, $penalty, $para, punit, pval;
        type = hintnode.getAttribute('type');
        $btn = $winHintAvl.find('[subref=' + type + ']');
        
        if (!$btn.length) {
            //todo: log error
            return;
        }

        $btn.css('display', 'inline');
        $penalty = $(hintnode).find('penalty');
        if ($penalty.length) {
            punit = $penalty.attr('unit');
            pval =  $penalty.attr('value');
        }

        $btn.click(
            function () {
                thisObj.event(type, punit, pval);
            }
        );
        if (!$penalty.length) {
            return;
        }
        $para = $btn.find('p')[1];
        if (!$para) {
            return;
        }

        $para.textContent = '+' + pval + ' ' + punit + ' penalty';

    };
    thisObj.init = function () {
        //note: must be called AFTER nodemgr has loaded xml file
        var hlist, $winHintAvl, i;
        
        hlist = mgr.nm.dataFind('hint');
        if (!hlist.length) {
            $('#winHint [subref=none]').css('display','block');
            return;
        }
        $winHintAvl = $('#winHint [subref=avail]');
        $winHintAvl.css('display','block');
        for(i =0; i < hlist.length; i += 1) {
            thisObj.add($winHintAvl, hlist[i]);
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
