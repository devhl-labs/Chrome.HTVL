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

setSyncDefaults(start);

$('#lnkEnableButtons').click();

function start() {
    if (debug) console.log('sync values have been retrieved.');

    if (debug) $('#debug').prop('checked', true);
    if (autoReload) $('#autoReload').prop('checked', true);
//     if(lnkHd) $('#lnkHd').prop('checked', true);
//     if(lnkFavorites) $('#lnkFavorites').prop('checked', true);
//     if(lnkRemoveAllFavorites) $('#lnkRemoveAllFavorites').prop('checked', true);
//     if(lnkLast) $('#lnkLast').prop('checked', true);
//     if(lnkMostWatched) $('#lnkMostWatched').prop('checked', true);

    if (enableFavorites) $('#enableFavorites').prop('checked', true);
    if (lnkRecording) $('#lnkRecording').prop('checked', true);

    if (b0) $('#b0').prop('checked', true);
    if (b1) $('#b1').prop('checked', true);
    if (b2) $('#b2').prop('checked', true);
    if (b3) $('#b3').prop('checked', true);
    if (b4) $('#b4').prop('checked', true);
    if (b5) $('#b5').prop('checked', true);
    if (b6) $('#b6').prop('checked', true);
    if (b7) $('#b7').prop('checked', true);
    if (b8) $('#b8').prop('checked', true);
    if (b9) $('#b9').prop('checked', true);

    var arr = recordingShows.split(';');
    for (var i = 0; i <= arr.length - 1; ++i) {
        addRecordingRow(arr[i]);
    }
    addRecordingRow();
    addRecordingRow();
    addRecordingRow();

    var arrHidden = strHidden.split(';').sort().reverse();
    console.log('length: ' + arrHidden.length);
    for (i = arrHidden.length - 1; i > -1; --i) {
        $('#hiddenChannels').append(arrHidden[i] + '<br />');
    }

    $('#btitle0').val(btitle0);
    if($('#btitle0').val() === 'btitle0') reloadPage();    
    arr = bterms0.split(';');
    for (i = 0; i <= arr.length - 1; ++i) {
        addSearchTerm($('#tblb0'), 0, arr[i]);
    }

    $('#btitle1').val(btitle1);
    arr = bterms1.split(';');
    for (i = 0; i <= arr.length - 1; ++i) {
        addSearchTerm($('#tblb1'), 1, arr[i]);
    }

    $('#btitle2').val(btitle2);
    arr = bterms2.split(';');
    for (i = 0; i <= arr.length - 1; ++i) {
        addSearchTerm($('#tblb2'), 2, arr[i]);
    }

    $('#btitle3').val(btitle3);
    arr = bterms3.split(';');
    for (i = 0; i <= arr.length - 1; ++i) {
        addSearchTerm($('#tblb3'), 3, arr[i]);
    }

    $('#btitle4').val(btitle4);
    arr = bterms4.split(';');
    for (i = 0; i <= arr.length - 1; ++i) {
        addSearchTerm($('#tblb4'), 4, arr[i]);
    }

    $('#btitle5').val(btitle5);
    arr = bterms5.split(';');
    for (i = 0; i <= arr.length - 1; ++i) {
        addSearchTerm($('#tblb5'), 5, arr[i]);
    }

    $('#btitle6').val(btitle6);
    arr = bterms6.split(';');
    for (i = 0; i <= arr.length - 1; ++i) {
        addSearchTerm($('#tblb6'), 6, arr[i]);
    }

    $('#btitle7').val(btitle7);
    arr = bterms7.split(';');
    for (i = 0; i <= arr.length - 1; ++i) {
        addSearchTerm($('#tblb7'), 7, arr[i]);
    }

    $('#btitle8').val(btitle8);
    arr = bterms0.split(';');
    for (i = 0; i <= arr.length - 1; ++i) {
        addSearchTerm($('#tblb8'), 8, arr[i]);
    }

    $('#btitle9').val(btitle9);
    arr = bterms9.split(';');
    for (i = 0; i <= arr.length - 1; ++i) {
        addSearchTerm($('#tblb9'), 9, arr[i]);
    }

    //add three blank rows for each custom filter
    for (var x = 0; x < 10; ++x) {
        addSearchTerm($('#tblb' + x), x);
        addSearchTerm($('#tblb' + x), x);
        addSearchTerm($('#tblb' + x), x);
    }

    $('option[value=0]').text(btitle0);
    $('option[value=1]').text(btitle1);
    $('option[value=2]').text(btitle2);
    $('option[value=3]').text(btitle3);
    $('option[value=4]').text(btitle4);
    $('option[value=5]').text(btitle5);
    $('option[value=6]').text(btitle6);
    $('option[value=7]').text(btitle7);
    $('option[value=8]').text(btitle8);
    $('option[value=9]').text(btitle9);
}

function addSearchTerm($tbl, x, value) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var input = document.createElement('input');
    var text = document.createTextNode('term');
    input.setAttribute('type', 'text');
    input.className = 'b' + x + 'term';
    $tbl.append(tr);
    tr.appendChild(td);
    td.appendChild(text);
    td = document.createElement('td');
    tr.appendChild(td);
    td.appendChild(input);
    if (value !== undefined)
        input.value = value;
    input.onchange = function () {
        var str = '';
        var len = $('.b' + x + 'term').length;
        $('.b' + x + 'term').each(
                function (i) {
                    if ($(this).val())
                        str += $(this).val() + ';';
                }
        );
        str = str.slice(0, -1);
        setKey('bterms' + x, str);
    };
}

function addRecordingRow(value) {
    console.log('adding row');
    var $table = $('#tblRecording');
    var tr = document.createElement('tr');

    $table.append(tr);
    var td = document.createElement('td');
    tr.appendChild(td);
    var input = document.createElement('input');
    input.className = 'recording';
    if (typeof value === 'string')
        input.value = value;
    td.appendChild(input);
    var str = '';
    input.onchange = function () {
        str = '';
        $('.recording').each(function (i) {
            if ($(this).val().length > 0)
                str += $(this).val() + ';';
        });
        str = str.slice(0, -1);
        setKey('recordingShows', str);
    };

}

function hideMenus() {
    $('#pgSettings').hide();
    $('#pgHidden').hide();
    $('#pgDeveloper').hide();
    $('#pgHelp').hide();
    $('#pgDeveloper').hide();
}

////////////////Bindings////////////////////////////////
$('.title').bind('change', function () {
    setKey($(this).attr('id'), $(this).val());
});

$('.toggle').bind('change', function () {
    var value = 0;
    if ($(this).attr('checked') === 'checked') {
        value = 1;
    } else {
        value = 0;
    }

    setKey(this.id, value);
    console.log(this.id + ' ' + value);
});

$('#ClearHidden').bind('click', function () {
    if (confirm('Click ok to erase all hidden channels.\nYou will have to manually set all hidden channels.')) {
        setKey('strHidden', '0');
    };
});

$('#ClearFavorites').bind('click', function () {
    if (confirm('Click ok to erase all favorite channels.\nYou will have to manually set all favorite channels.')) {
        setKey('strFavorites', '0');
    };
});

$('#btnMoreFromDeveloper').bind('click', function () {
    //window.location = chrome.extension.getURL('appsFromDeveloper/appsFromDeveloper.html');
    chrome.tabs.update({
        url: "http://www.devhl.com/"
    });
});

$('#clearChannelNumber').bind('click', function () {
    setKey('numOfChannels', 0);
    numOfChannels = 0;
    if (debug) console.log(numOfChannels);
});

$('#btnSettings').bind('click', function () {
    $('*').removeClass('selected');
    $(this).addClass('selected');
    hideMenus();
    $('#pgSettings').show();
//    $('#customFilters').show();
//    $('#customFilters *').show();
//    $('#filterFields * ').hide();
//    $('#0, #0 *').show();
});

$('SELECT').on('change', function () {
    $('.customFilter').hide();
    $('#f' + $(this).attr('value') + ', ' + '#f' + $(this).attr('value') + ' *').show();
});

//$('#lnkEnableButtons').bind('click', function () {
//    $('*').removeClass('selected');
//    $(this).addClass('selected');
//    hideMenus();
//    $('#controls').show();
//    $('#controls *').show();
//    $('#recordings').show();
//    $('#recordings *').show();
//    $('#customFilters').show();
//    $('#customFilters *').show();
//    $('#filterFields * ').hide();
//    $('#filterFields > select').show();
//    $('#filterFields > select > *').show();
//    $('#0, #0 *').show();
//});

$('#btnHidden').bind('click', function () {
    $('*').removeClass('selected');
    $(this).addClass('selected');
    hideMenus();
    $('#pgHidden').show();
    $('#pgHidden *').show();
});

$('#btnDeveloper').bind('click', function () {
    console.log('trying');
    $('*').removeClass('selected');
    $(this).addClass('selected');
    hideMenus();
    $('#pgDeveloper').show();
    $('#pgDeveloper *').show();
});

$('#clearSync').click(function () {
    if(confirm('Click \'Ok\' to clear your settings.')){
        chrome.storage.sync.clear(reloadPage());
    }
});

function reloadPage(){
    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
        chrome.tabs.reload(arrayOfTabs[0].id);
    });
}

$('#printSync').click(function () {
    printSync('a');
});

//$('#lnkRecordings').bind('click', function () {
//    $('*').removeClass('selected');
//    $(this).addClass('selected');
//    hideMenus();
//    $('#recordings').show();
//    $('#recordings *').show();
//});

$('#btnHelp').bind('click', function () {
    $('*').removeClass('selected');
    $(this).addClass('selected');
    hideMenus();
    $('#pgHelp').show();
    $('#pgHelp *').show();
});

//$('#lnkRecordings').bind('click', function () {
//    $('*').removeClass('selected');
//    $(this).addClass('selected');
//    hideMenus();
//    $('#recordings').show();
//    $('#recordings *').show();
//});

$('#btnHelp').bind('click', function () {
    $('*').removeClass('selected');
    $(this).addClass('selected');
    hideMenus();
    $('#pgHelp').show();
    $('#pgHelp *').show();
});

$('#btnSettings').click();