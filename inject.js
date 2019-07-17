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

var observer;

setSyncDefaults(createButtons);

function createButtons(){
    if($('tv-grid-row').length === 0){
        window.setTimeout(createButtons, 2000);
    }else{
        if(debug) console.log('create buttons');
        createButtons2();
    }
}

function fixTvGridRowHeights(){
    var top = 0;
    $('tv-grid-row:visible').each(function(){
        $(this).attr('style','top:' + top + "px;");
        top = top + 65;
    });
}

function createButtons2() { 
    setTimer();  
    
    $('#linear-placeholder').attr('style', 'height:0px;');
    $('#tve-placeholder').hide();
    
    $('html').attr('style', 'overflow-y:scroll;');
    $('#dialogToggle').attr('style', 'margin-right:20px;');

    if(debug){
        createButton('htvlPrintSync', 'Print Sync');
        createButton('htvlClearSync', 'Clear Sync');
        createButton('htvlScript', 'Script');
    };
    
    $('#filters').parent().append('<button id="htvlOptions"><a href="' + chrome.extension.getURL('htvlOptions.html') + '" target="_blank" style="color:rgb(166,166,166);text-decoration:none;">htvlOptions</a></button>'); 
    $('#filters').parent().prepend('<button id="htvlLoading">Loading</button>'); 

    createButton('htvlHide', 'Hidden');
    createButton('htvl09', '0-9');
    
    if(enableFavorites === 1){
        createButton('htvlFavorite', 'Favorites');
        darkButton('#htvlFavorite');
    }
    
    darkButton('#htvlOptions');
    $('#htvlOptions').attr('style', $('#htvlOptions').attr('style') + ";margin-left:20px;");
    orangeButton('#htvlLoading');
    darkButton('#htvlHide');
    darkButton('#htvlAZ');
    darkButton('#htvl09');
    darkButton('#htvlPrintSync');
    darkButton('#htvlClearSync');
    darkButton('#htvlScript');

    $('#htvlScript').click(function(){
        $('.HideMe').hide();
        fixTvGridRowHeights();
        if($('#collapse').attr('style') == 'top:0px'){

        }else{
            var collapseT = parseInt($('#collapse').attr('style').replace('px;', '').replace('top',''));
            var originalT = 0;
            var x = 0;
            $('tv-grid-row').each(function(){
                originalT = parseInt($(this).attr('style').replace('px;', '').replace('top', ''));
                if(originalT < collapseT){
                    $(this).attr('style', 'top:' + x + 'px;');
                    x = x + 65;

                }else if(originalT == collapseT){
                    x = x + 316
                    $(this).attr('style', 'top:' + x + 'px;');
                }else{
                    $(this).attr('style', 'top:' + x + 'px;');
                    x = x + 65;                
                } 
            });   
        }
    });

    $('#htvlFavorite').click(function(){
        //observer.disconnect();
        observerOff();
        if (debug) console.log ('showing favorites');
        $('tv-grid-row').hide();
        clearFilters();
        $('#htvlHide').text('Showing');
        blueButton($(this));
        $('path[d="M7.5,0.5L5.7,5.9H0.1l4.5,3.3l-1.8,5.4l4.6-3.3l4.6,3.3l-1.8-5.4l4.6-3.3H9.3L7.5,0.5L7.5,0.5z"]').parent().parent().parent().parent().parent().parent('.ShowMe').show(); 
        fixTvGridRowHeights();
        observerOn();
    });

    $('#htvlHide').click(function(){
        //observer.disconnect();
        observerOff();
        var text = $('#htvlHide').text();
        if (debug) console.log (text);
        $('tv-grid-row').show();
        clearFilters();
        if(text === 'Hidden'){
            $(this).text('Showing');
            $('.HideMe').show();
            var h = 0;
            $('tv-grid-row').each(function () {
                $(this).removeAttr('style').attr('style', 'top: ' + h + 'px;');
                h = h + 65;
            });
            orangeButton('#htvlHide');
        }else{
            $(this).text('Hidden');
            $('.HideMe').hide();
            var h = 0;
            $('tv-grid-row.ShowMe').each(function () {
                $(this).removeAttr('style').attr('style', 'top: ' + h + 'px;');
                h = h + 65;
            });
            blueButton('#htvlHide');
        }
        observerOn();
    });

    $('#htvl09').click(function(){
        observerOff();
        var top = 0;
        if($(this).text()==='0-9'){
            if(debug) console.log('sorting by letter');
            $(this).text('A-Z');
            $('tv-grid-row').tsort({attr:'htvlcall'});
              fixTvGridRowHeights();
        }else{
            if (debug) console.log('sorting by number');
            $(this).text('0-9');
            $('tv-grid-row').tsort({attr:'htvlnumber'});
              fixTvGridRowHeights();
        }
        observerOn();
    });
    
    $('#htvlPrintSync').click(function(){
        printSync(true);
    });
    
    $('#htvlClearSync').click(function(){
        chrome.storage.sync.clear();
        if(debug) console.log('cleared');
    });
    
    //sports filters
    for(var i = 0; i < 10; ++i){
        if(eval('b' + i) === 0) continue;
        var title = eval('btitle' + i);
        if(title.length === 0) title = 'No Title Entered';
        createButton('b' + i, title);
        darkButton('#b' + i);
        $('#b' + i).addClass('htvlSports');
        $('#b' + i).attr('searchTerms', eval('bterms' + i));
        $('#b' + i).click(function(){
            observerOff();
            clearFilters();
            $('#htvlHide').text('Showing');
            blueButton($(this));
            $('tv-grid-row').hide();
            var arr = $(this).attr('searchTerms').split(';');
            for(var i = arr.length - 1; i >= 0; --i){
                $('span.style-scope.tv-grid-row:contains(' + arr[i] + ')').parent().parent().parent('.ShowMe').show();
            }
            fixTvGridRowHeights();
            $('#lnkLoading').hide();
            observerOn();
            if(debug) console.log('searchTerms: ' + $(this).attr('searchTerms'));
        });
    }
        
    //recording
    if(lnkRecording === 1){
       createButton('htvlRecording', 'Recording');
       darkButton('#htvlRecording');
       $('#htvlRecording').click(function(){
            //observer.disconnect();
            observerOff();
            clearFilters();
            blueButton($(this));
            $('tv-grid-row').hide();
            if(recordingShows !== ''){
                var arr = recordingShows.split(';');
                for(var i = arr.length - 1; i >= 0; --i){
                     $('span.style-scope.tv-grid-row:contains(' + arr[i] + ')').parent().parent().parent('.ShowMe').show();
                }       
            }
            //observe();
            observerOn();
       });
    };
    //startObserving();
    processChannels();
}

function clearFilters(){
    $('.htvlSports').each(function(){
        darkButton('#' + $(this).attr('id'));
    });  
    darkButton('#htvlRecording');
    darkButton('#htvlFavorite');
    darkButton('#htvlHide');
}

function startObserving(){
    observer = new MutationObserver(function() {
        processChannels();
    });
    observerOn();
}

function observerOn(){
    if (debug) console.log('observer is on');
    observer.observe(document, { childList: true, subtree: true });
}

function observerOff(){
    if (debug) console.log('observer is off');
    observer.disconnect();
}

$('#grid > tv-grid-row > div').live('click', function(){
    $('.HideMe').hide();
    fixTvGridRowHeights();
    if($('#collapse').attr('style') == 'top:0px'){
        
    }else{
        var h = parseInt($(this).parent().attr('style').replace("px;", "").replace("top:", ""));
        console.log('!!!!!!!!!!!!!!!!!!' + h);
        h = h + 65;
        var top = 0;
        $('tv-grid-row:visible').each(function(){
            var oldT = parseInt($(this).attr('style').replace('top:', "").replace('px;'));
            if(oldT > top){oldT = oldT + 316;}
            $(this).attr('style','top:' + oldT + "px;");
            top = top + 65;
        });
        $('#collapse').attr('style', 'top:' + h + "px;");  
     
    }
    
    
});
    
function processChannels (){
    if(debug) console.log('channels being processed: ' + $('tv-grid-row').not('.processed').length);

    $('#htvlLoading').html('Processing');
    
    
    
    
    
    
    $('.HideMe').hide();
    fixTvGridRowHeights();
    if($('#collapse').attr('style') == 'top:0px'){
        
    }else{
//        var h = parseInt($(this).parent().attr('style').replace("px;", "").replace("top:", ""));
//        console.log('!!!!!!!!!!!!!!!!!!' + h);
//        h = h + 65;
//        var top = 0;
//        $('tv-grid-row:visible').each(function(){
//            var oldT = parseInt($(this).attr('style').replace('top:', "").replace('px;'));
//            if(oldT > top){oldT = oldT + 316;}
//            $(this).attr('style','top:' + oldT + "px;");
//            top = top + 65;
//        });
//        $('#collapse').attr('style', 'top:' + h + "px;");  
     
        var collapseT = parseInt($('#collapse').attr('style').replace('px;', '').replace('top',''));
        var originalT = 0;
        var x = 0;
        $('tv-grid-row').each(function(){
            originalT = parseInt($(this).attr('style').replace('px;', '').replace('top', ''));
            if(originalT < collapseT){
                $(this).attr('style', 'top:' + x + 'px;');
                x = x + 65;
                
            }else if(originalT == collapseT){
                x = x + 316
                $(this).attr('style', 'top:' + x + 'px;');
            }else{
                $(this).attr('style', 'top:' + x + 'px;');
                x = x + 65;                
            } 
        });   
    }
    
    
    
    
    
    
    
    
    $('tv-grid-row > a > span').each(function () {
        if (isNaN($(this).text())) {
            $(this).parent().parent().attr('htvlcall', $(this).text());
        } else {
            $(this).parent().parent().attr('htvlnumber', $(this).text());
        }
    });
    

    
    $('tv-grid-row').not('.processed').each(function(){
        if(strHidden.indexOf($(this).attr('htvlnumber')) !== -1){
            $(this).remove();
//            $(this).addClass('HideMe processed');
//            $(this).children('div').children().each(function(){
//                $(this).attr('style', $(this).attr('style') + ';background: rgba(128, 128, 128, 0.25);');
//            });
//            var $btn = $('<input type="button" class="hideme" style="position:fixed;right:0px;" value="O"/>'); 
        }else{
            $(this).addClass('ShowMe processed');
            $(this).children('div').children().each(function(){
                $(this).attr('style', $(this).attr('style') + ';background: rgb(18, 18, 18)');
            });
            var $btn = $('<input type="button" class="hideme" style="position:fixed;right:0px;" value="X"/>'); 
       // }
            $btn.appendTo($(this).children(':last-child'));
            $btn.click(function(){
                if($btn.val()==="X"){
                    $btn.val('O');
                    $btn.siblings().not('.htvlFavBtn').each(function () {
                        $(this).attr('style', $(this).attr('style') + ';background: rgba(128, 128, 128, 0.25);');
                    });
                    $btn.parent().parent().removeClass('ShowMe').addClass('HideMe');
                    strHidden = strHidden +  ";" + $btn.parent().parent().attr('htvlnumber');
                    setKey('strHidden', strHidden);
                }else{
                    $btn.val('X');
                    $btn.siblings().not('.htvlFavBtn').each(function(){
                        $(this).attr('style', $(this).attr('style') + ';background: rgb(18, 18, 18)');
                    });
                    $btn.parent().parent().removeClass('HideMe').addClass('ShowMe');
                    //this removes the channel id from the string if it is not the first one in the array
                    if(strHidden.indexOf(';' + $btn.parent().parent().attr('htvlnumber')) !== -1){  
                         strHidden = strHidden.replace(';' + $btn.parent().parent().attr('htvlnumber'), '');
                         setKey('strHidden', strHidden);
                    }
                    //this handles removing the channel when it is first in the array
                    if(strHidden.indexOf($btn.parent().parent().attr('htvlnumber') + ';') !== -1){  
                         strHidden = strHidden.replace($btn.parent().parent().attr('htvlnumber') + ';', '');
                         setKey('strHidden', strHidden);
                    }                
                }
            });
        }
        
// <editor-fold defaultstate="collapsed" desc="old code for Favorites">
//	if(enableFavorites){
//            if(strFavorites.indexOf($(this).attr('htvlnumber')) !== -1){
//                $(this).addClass('htvlFavorite');
//                var $btnFav = $('<input type="button" class="htvlFavBtn" style="margin-left:40px;position:fixed;right:35px;" value="-"/>');            
//            }else{
//                var $btnFav = $('<input type="button" class="htvlFavBtn" style="margin-left:40px;position:fixed;right:35px;" value="+"/>'); 
//            }
//            //$btnFav.appendTo($(this).children(':last-child').children(':last-child'));
//            $btnFav.appendTo($(this).children(':last-child'));
//            $btnFav.click(function(){
//                if($btnFav.val()==="+"){
//                    $btnFav.val('-');
//                    $btnFav.parent().parent().parent().addClass('htvlFavorite');
//                    strFavorites = strFavorites +  ";" + $btnFav.parent().parent().parent().attr('htvlnumber');
//                    setKey('strFavorites', strFavorites);
//                }else{
//                    $btnFav.val('+');
//                    $btnFav.parent().parent().parent().removeClass('htvlFavorite');
//                    //this removes the channel id from the string if it is not the first one in the array
//                    if(strFavorites.indexOf(';' + $btnFav.parent().parent().parent().attr('htvlnumber')) !== -1){  
//                         strFavorites = strFavorites.replace(';' + $btnFav.parent().parent().parent().attr('htvlnumber'), '');
//                         setKey('strFavorites', strFavorites);
//                    }
//                    //this handles removing the channel when it is first in the array
//                    if(strFavorites.indexOf($btnFav.parent().parent().parent().attr('htvlnumber') + ';') !== -1){  
//                         strFavorites = strFavorites.replace($btnFav.parent().parent().parent().attr('htvlnumber') + ';', '');
//                         setKey('strFavorites', strFavorites);
//                    }                
//                }
//            });
//	}

//    });
//    $('#grid > tv-grid-row > div > a').click(function(){
//    
//
//        var h = parseInt($(this).parent().parent().attr('style').replace("px;", "").replace("top:", ""));
//        h = h + 65;
//
//
//        var top = 0;
//        $('tv-grid-row:visible').each(function(){
//            var oldT = parseInt($(this).attr('style').replace('top:', "").replace('px;'));
//            if(oldT => top){oldT = oldT + 316;}
//            $(this).attr('style','top:' + oldT + "px;");
//            top = top + 65;
//        });
//        $('#collapse').attr('style', 'top:' + h + "px;");        
//        if($('#htvlHide').html() == 'Hidden'){
//            window.setTimeout(HideChannels, 2000);
//            //$('.HideMe').hide();
//            console.log('hiding');
//        }
//    });
// </editor-fold> 

//    var h = 0;
//    $('tv-grid-row.ShowMe').each(function () {
//        $(this).removeAttr('style').attr('style', 'top: ' + h + 'px;');
//        h = h + 65;
//    });

    });
    
    
    $('.HideMe').hide();  
    fixTvGridRowHeights();
    $('#htvlLoading').hide(); 
    startObserving();
}

function HideChannels(){
    $('.HideMe').hide();
    console.log('delayed hide');
}

function blueButton(btn){
    $(btn).removeAttr('style');
    $(btn).attr('style', 'background: rgb(46, 160, 221); border-radius: 3px; width:auto; height: 34px;color:rgb(214,236,249);border:0;cursor: pointer;margin-right:20px;');
}

function darkButton(btn){
    $(btn).removeAttr('style');
    $(btn).attr('style', 'background: rgb(30, 30, 30);border-radius: 3px;width:auto;height: 34px;color:rgb(166,166,166);border:0;cursor: pointer;margin-right:20px;');
}

function orangeButton(btn){
    $(btn).removeAttr('style');
    $(btn).attr('style', 'background: rgb(255, 51, 0);border-radius: 3px;width:auto;height: 34px;color:rgb(214,236,249);border:0;cursor: pointer;margin-right:20px;');
}

function createButton(id, content){
    $('#filters').parent().append('\
    <button id="' + id + '">' + content +'</button>'); 
}

function setTimer() {
     if(!autoReload) return;
     var d = new Date(),
     h = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), (d.getMinutes() - (d.getMinutes() % 30)) + 30, 0, 0),
     e = h - d;
     window.setTimeout(function(){
            if(window.location == 'https://tv.xfinity.com/listings'){
                location.reload();        
            }else{
                setTimer();
            }
              
            
     }, e);
}

////     chrome.runtime.sendMessage({version: 1.1}, 
////          function(response) {
////               if(response.farewell) alert('Thank you for updating htvl.\nButtons have been tweeked.\nSorting by name or channel is an option now.');
////          }
////     );
////
////     var s = document.createElement('script');
////     s.src = chrome.extension.getURL('injected.js');
////     s.onload = function() {
////          this.parentNode.removeChild(this);
////     };
////     (document.head||document.documentElement).appendChild(s);
//
if(debug) console.log('end inject.js');

