// <editor-fold defaultstate="collapsed" desc=" common v3 ">
"use strict";
var chrome;

var debug = false;

var autoReload = true;

var enableFavorites = 1;
var strFavorites = '';

var lnkHd = 1;
var lnkFavorites = 1;
var lnkRemoveAllFavorites = 1;
var lnkHideChannels = 1;

var lnkLast = 1;
var lastChannels = '';

var lnkRecording = 0;
var recordingShows = 'CNN Newsroom;SportsCenter';

var lnkMostWatched = 1;
var mostWatchedChannels = '';

var strHidden = '0';
//var strHidden='001;002;003;004;005;006;007;008;009;010;011;013;014;015;016;017;018;019;021;023;024;025;026;027;028;029;030;031;032;033;034;035;036;037;038;040;041;043;044;045;046;047;049;050;051;052;053;054;055;056;057;058;060;063;064;065;066;069;072;089;095;096;098;099;100;106;108;109;110;111;113;114;115;116;117;119;123;128;130;141;146;148;150;151;155;157;164;180;184;186;189;190;191;192;193;196;198;1998;205;269;291;298;315;319;320;321;322;324;325;327;328;329;340;350;366;401;402;403;404;405;406;407;408;409;410;411;412;413;414;415;416;417;418;419;420;421;422;423;424;425;426;427;428;429;430;431;432;433;434;435;436;437;438;439;440;441;442;443;444;445;446;447;448;449;450;480;487;488;490;491;498;499;502;540;542;543;544;545;547;548;549;550;561;562;564;565;566;567;568;570;575;577;579;583;584;585;586;587;588;590;592;593;597;601;602;604;611;612;615;617;618;620;621;622;627;630;633;636;641;643;645;647;648;649;651;654;661;662;667;669;670;680;682;690;691;693;695;696;710;713;714;720;721;722;725;726;730;732;735;738;739;751;752;753;754;755;756;757;758;759;760;775;785;787;801;855;860;861;862;864;888;901;960;970;971;986;987;989;991;992;993';

var b0 = 1;
var btitle0 = 'NCAAM';
var bterms0 = 'College Baseball';

var b1 = 1;
var btitle1 = 'MLB';
var bterms1 = 'MLB Baseball;World Series';

var b2 = 1;
var btitle2 = 'NBA';
var bterms2 = 'NBA Playoff';

var b3 = 1;
var btitle3 = 'NHL';
var bterms3 = 'Stanley Cup Playoff;Stanley Cup Final;NHL Hockey';

var b4 = 1;
var btitle4 = 'NFL';
var bterms4 = 'NFL Draft;NFL Football;Sunday Night Football;Thursday Night Football;Monday Night Football';

var b5 = 1;
var btitle5 = 'NCAAF';
var bterms5 = 'College Football';

var b6 = 0;
var btitle6 = '';
var bterms6 = '';

var b7 = 0;
var btitle7 = '';
var bterms7 = '';

var b8 = 0;
var btitle8 = '';
var bterms8 = '';

var b9 = 0;
var btitle9 = 'test';
var bterms9 = 'Weatherscan;Paid Programming;CNN Newsroom;Community Channel';

var numOfChannels = 0;

function setSyncDefaults(callback){
   
    if(debug) console.log('setSyncDefaults');
	chrome.storage.sync.get(null, function (result) {
          debug = setSyncDefaultsSub(result, debug, 'debug');

          autoReload = setSyncDefaultsSub(result, autoReload, 'autoReload');

	  enableFavorites = setSyncDefaultsSub(result, enableFavorites, 'enableFavorites');
	  strFavorites = setSyncDefaultsSub(result, strFavorites, 'strFavorites');

          lnkHd = setSyncDefaultsSub(result, lnkHd, 'lnkHd');
          lnkFavorites = setSyncDefaultsSub(result, lnkFavorites, 'lnkFavorites');
          lnkRemoveAllFavorites = setSyncDefaultsSub(result, lnkRemoveAllFavorites, 'lnkRemoveAllFavorites');
          lnkHideChannels = setSyncDefaultsSub(result, lnkHideChannels, 'lnkHideChannels');

          lnkLast = setSyncDefaultsSub(result, lnkLast, 'lnkLast');
          lastChannels = setSyncDefaultsSub(result, lastChannels, 'lastChannels');

          //remove the recording shows feature until xfinity shows a new tag in the guide.
          lnkRecording = false;
          //lnkRecording = setSyncDefaultsSub(result, lnkRecording, 'lnkRecording');
          recordingShows = setSyncDefaultsSub(result, recordingShows, 'recordingShows');

          lnkMostWatched = setSyncDefaultsSub(result, lnkMostWatched, 'lnkMostWatched');
          mostWatchedChannels = setSyncDefaultsSub(result, mostWatchedChannels, 'mostWatchedChannels');

//          lnkMovies = lnkMovies = setSyncDefaultsSub(result, lnkMovies, 'lnkMovies');
//          lnkSports = setSyncDefaultsSub(result, lnkSports, 'lnkSports');
//          lnkKids = setSyncDefaultsSub(result, lnkKids, 'lnkKids');


          strHidden = setSyncDefaultsSub(result, strHidden, 'strHidden');

          b0 = setSyncDefaultsSub(result, b0, 'b0');
          btitle0 = setSyncDefaultsSub(result, btitle0, 'btitle0');
          bterms0 = setSyncDefaultsSub(result, bterms0, 'bterms0');

          b1 = setSyncDefaultsSub(result, b1, 'b1');
          btitle1 = setSyncDefaultsSub(result, btitle1, 'btitle1');
          bterms1 = setSyncDefaultsSub(result, bterms1, 'bterms1');


          b2 = setSyncDefaultsSub(result, b2, 'b2');
          btitle2 = setSyncDefaultsSub(result, btitle2, 'btitle2');
          bterms2 = setSyncDefaultsSub(result, bterms2, 'bterms2');

          b3 = setSyncDefaultsSub(result, b3, 'b3');
          btitle3 = setSyncDefaultsSub(result, btitle3, 'btitle3');
          bterms3 = setSyncDefaultsSub(result, bterms3, 'bterms3');

          b4 = setSyncDefaultsSub(result, b4, 'b4');
          btitle4 = setSyncDefaultsSub(result, btitle4, 'btitle4');
          bterms4 = setSyncDefaultsSub(result, bterms4, 'bterms4');

          b5 = setSyncDefaultsSub(result, b5, 'b5');
          btitle5 = setSyncDefaultsSub(result, btitle5, 'btitle5');
          bterms5 = setSyncDefaultsSub(result, bterms5, 'bterms5');

          b6 = setSyncDefaultsSub(result, b6, 'b6');
          btitle6 = setSyncDefaultsSub(result, btitle6, 'btitle6');
          bterms6 = setSyncDefaultsSub(result, bterms6, 'bterms6');

          b7 = setSyncDefaultsSub(result, b7, 'b7');
          btitle7 = setSyncDefaultsSub(result, btitle7, 'btitle7');
          bterms7 = setSyncDefaultsSub(result, bterms7, 'bterms7');

          b8 = setSyncDefaultsSub(result, b8, 'b8');
          btitle8 = setSyncDefaultsSub(result, btitle8, 'btitle8');
          bterms8 = setSyncDefaultsSub(result, bterms8, 'bterms8');

          b9 = setSyncDefaultsSub(result, b9, 'b9');
          btitle9 = setSyncDefaultsSub(result, btitle9, 'btitle9');
          bterms9 = setSyncDefaultsSub(result, bterms9, 'bterms9');

//          numOfChannels = setSyncDefaultsSub(result, numOfChannels, 'numOfChannels');
          
          
          if(callback) callback();
        });
}

function setSyncDefaultsSub(result, varVariable, strVariable){
    if(result[strVariable] === undefined){
        setKey(strVariable, varVariable);
        return strVariable;
    }else{
        return result[strVariable];
    }
}

function setKey(key, value){
    var obj = {};
    obj[key] = value;
    chrome.storage.sync.set(obj);
}

function printSync(detail){
    if(typeof detail === 'undefined'){
        chrome.storage.sync.get(null, function (data) { console.info(data); });
    }else{
        chrome.storage.sync.get(null, function (items) {
            for(var key in items){
                console.log(key + ' ' + items[key]);
            }
        });
    }
}

// </editor-fold>

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//    var boo = false;
//    if(!localStorage['htvlVersion']) {
//         localStorage['htvlVersion'] = 2.0;
//         boo = true;
//    }
//    if(localStorage['htvlVersion'] !== request.version){
//         localStorage['htvlVersion'] = request.version;
//         boo = true;
//    }
//    if (boo) sendResponse({farewell: "goodbye"});




//    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
//        chrome.tabs.reload(arrayOfTabs[0].id);
//    });
});

chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason === "install"){
        setSyncDefaults();
        alert('Thank you for installing htvl.  \nNavigate to \'https://tv.xfinity.com/listings\' to see it in action.');
    }else if(details.reason === "update"){
        //var thisVersion = chrome.runtime.getManifest().version;
        setSyncDefaults();
    }
});

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if( details.url == "https://tv.xfinity.com/elements.html" ){
            console.log('match');
            return {redirectUrl: chrome.extension.getURL('fixedElements.html') };
        }else{
            console.log("not a match");
            console.log( chrome.extension.getURL('fixedElements.html'));
        }
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
);