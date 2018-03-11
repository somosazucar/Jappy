riot.tag2('tool-bar', '<div id="main-toolbar" class="toolbar"> <button class="toolbutton" id="activity-button" title="{_(\'Jappy Activity\')}"></button> <hr> <button class="toolbutton" id="example-button" title="{_(\'Load an example\')}" ref="examplebutton"></button> <button show="{location.hash}" class="toolbutton" id="workspace-button" title="{_(\'Workspace\')}" ref="workspacebutton"></button> <hr> <button class="toolbutton {colored: window.state!=\'run\'}" id="run-button" title="{_(\'Execute\')}" ref="runbutton"></button> <button class="toolbutton {colored: window.state==\'run\'}" id="break-button" title="{_(\'Break execution\')}" ref="breakbutton"></button> <button class="toolbutton {colored: window.state!=\'clean\'}" id="erase-button" title="{_(\'Clear the canvas\')}" ref="erasebutton"></button> <button class="toolbutton {hidden: window.state==\'run\'}" id="start-button" title="{_(\'Start fullscreen\')}" ref="startbutton"></button> <button class="toolbutton {hidden: window.state==\'stopped\'} {hidden: window.state==\'clean\'}" id="full-button" title="{_(\'View fullscreen\')}" ref="fullbutton"></button> <button class="toolbutton" id="export-button" title="{_(\'Export or publish\')}" ref="exportbutton"></button> <button class="toolbutton pull-right" id="stop-button" title="{_(\'Stop\')}" ref="stopbutton"></button> </div>', 'tool-bar #main-toolbar #run-button,[data-is="tool-bar"] #main-toolbar #run-button{ background-image: url(icons/run_bw.svg); } tool-bar #main-toolbar #run-button.colored,[data-is="tool-bar"] #main-toolbar #run-button.colored{ background-image: url(icons/run_color.svg); } tool-bar #main-toolbar #break-button,[data-is="tool-bar"] #main-toolbar #break-button{ background-image: url(icons/stopit_bw.svg); } tool-bar #main-toolbar #break-button.colored,[data-is="tool-bar"] #main-toolbar #break-button.colored{ background-image: url(icons/stopit_color.svg); } tool-bar #main-toolbar #erase-button,[data-is="tool-bar"] #main-toolbar #erase-button{ background-image: url(icons/eraser_bw.svg); } tool-bar #main-toolbar #erase-button.colored,[data-is="tool-bar"] #main-toolbar #erase-button.colored{ background-image: url(icons/eraser_color.svg); } tool-bar #main-toolbar #example-button,[data-is="tool-bar"] #main-toolbar #example-button{ background-image: url(icons/load-example.svg); } tool-bar #main-toolbar #workspace-button,[data-is="tool-bar"] #main-toolbar #workspace-button{ background-image: url(icons/user-documents.svg); } tool-bar #main-toolbar #start-button,[data-is="tool-bar"] #main-toolbar #start-button{ background-image: url(icons/activity-start.svg); } tool-bar #main-toolbar #full-button,[data-is="tool-bar"] #main-toolbar #full-button{ background-image: url(icons/view-fullscreen.svg); } tool-bar #main-toolbar #export-button,[data-is="tool-bar"] #main-toolbar #export-button{ background-image: url(icons/export-or-publish.svg); } tool-bar .hidden,[data-is="tool-bar"] .hidden{ display: none !important; }', '', function(opts) {
var ρσ_modules = {};
ρσ_modules.re = {};
ρσ_modules.elementmaker = {};
ρσ_modules.gettext = {};

(function(){
    var _ALIAS_MAP, _ASCII_CONTROL_CHARS, _HEX_PAT, _NUM_PAT, _GROUP_PAT, _NAME_PAT, I, IGNORECASE, L, LOCALE, M, MULTILINE, D, DOTALL, U, UNICODE, X, VERBOSE, DEBUG, A, ASCII, supports_unicode, _RE_ESCAPE, _re_cache_map, _re_cache_items, error, has_prop;
    _ALIAS_MAP = (function(){
        var ρσ_d = {};
        ρσ_d["null"] = 0;
        ρσ_d["nul"] = 0;
        ρσ_d["start of heading"] = 1;
        ρσ_d["soh"] = 1;
        ρσ_d["start of text"] = 2;
        ρσ_d["stx"] = 2;
        ρσ_d["end of text"] = 3;
        ρσ_d["etx"] = 3;
        ρσ_d["end of transmission"] = 4;
        ρσ_d["eot"] = 4;
        ρσ_d["enquiry"] = 5;
        ρσ_d["enq"] = 5;
        ρσ_d["acknowledge"] = 6;
        ρσ_d["ack"] = 6;
        ρσ_d["alert"] = 7;
        ρσ_d["bel"] = 7;
        ρσ_d["backspace"] = 8;
        ρσ_d["bs"] = 8;
        ρσ_d["character tabulation"] = 9;
        ρσ_d["horizontal tabulation"] = 9;
        ρσ_d["ht"] = 9;
        ρσ_d["tab"] = 9;
        ρσ_d["line feed"] = 10;
        ρσ_d["new line"] = 10;
        ρσ_d["end of line"] = 10;
        ρσ_d["lf"] = 10;
        ρσ_d["nl"] = 10;
        ρσ_d["eol"] = 10;
        ρσ_d["line tabulation"] = 11;
        ρσ_d["vertical tabulation"] = 11;
        ρσ_d["vt"] = 11;
        ρσ_d["form feed"] = 12;
        ρσ_d["ff"] = 12;
        ρσ_d["carriage return"] = 13;
        ρσ_d["cr"] = 13;
        ρσ_d["shift out"] = 14;
        ρσ_d["locking-shift one"] = 14;
        ρσ_d["so"] = 14;
        ρσ_d["shift in"] = 15;
        ρσ_d["locking-shift zero"] = 15;
        ρσ_d["si"] = 15;
        ρσ_d["data link escape"] = 16;
        ρσ_d["dle"] = 16;
        ρσ_d["device control one"] = 17;
        ρσ_d["dc1"] = 17;
        ρσ_d["device control two"] = 18;
        ρσ_d["dc2"] = 18;
        ρσ_d["device control three"] = 19;
        ρσ_d["dc3"] = 19;
        ρσ_d["device control four"] = 20;
        ρσ_d["dc4"] = 20;
        ρσ_d["negative acknowledge"] = 21;
        ρσ_d["nak"] = 21;
        ρσ_d["synchronous idle"] = 22;
        ρσ_d["syn"] = 22;
        ρσ_d["end of transmission block"] = 23;
        ρσ_d["etb"] = 23;
        ρσ_d["cancel"] = 24;
        ρσ_d["can"] = 24;
        ρσ_d["end of medium"] = 25;
        ρσ_d["eom"] = 25;
        ρσ_d["substitute"] = 26;
        ρσ_d["sub"] = 26;
        ρσ_d["escape"] = 27;
        ρσ_d["esc"] = 27;
        ρσ_d["information separator four"] = 28;
        ρσ_d["file separator"] = 28;
        ρσ_d["fs"] = 28;
        ρσ_d["information separator three"] = 29;
        ρσ_d["group separator"] = 29;
        ρσ_d["gs"] = 29;
        ρσ_d["information separator two"] = 30;
        ρσ_d["record separator"] = 30;
        ρσ_d["rs"] = 30;
        ρσ_d["information separator one"] = 31;
        ρσ_d["unit separator"] = 31;
        ρσ_d["us"] = 31;
        ρσ_d["sp"] = 32;
        ρσ_d["delete"] = 127;
        ρσ_d["del"] = 127;
        ρσ_d["padding character"] = 128;
        ρσ_d["pad"] = 128;
        ρσ_d["high octet preset"] = 129;
        ρσ_d["hop"] = 129;
        ρσ_d["break permitted here"] = 130;
        ρσ_d["bph"] = 130;
        ρσ_d["no break here"] = 131;
        ρσ_d["nbh"] = 131;
        ρσ_d["index"] = 132;
        ρσ_d["ind"] = 132;
        ρσ_d["next line"] = 133;
        ρσ_d["nel"] = 133;
        ρσ_d["start of selected area"] = 134;
        ρσ_d["ssa"] = 134;
        ρσ_d["end of selected area"] = 135;
        ρσ_d["esa"] = 135;
        ρσ_d["character tabulation set"] = 136;
        ρσ_d["horizontal tabulation set"] = 136;
        ρσ_d["hts"] = 136;
        ρσ_d["character tabulation with justification"] = 137;
        ρσ_d["horizontal tabulation with justification"] = 137;
        ρσ_d["htj"] = 137;
        ρσ_d["line tabulation set"] = 138;
        ρσ_d["vertical tabulation set"] = 138;
        ρσ_d["vts"] = 138;
        ρσ_d["partial line forward"] = 139;
        ρσ_d["partial line down"] = 139;
        ρσ_d["pld"] = 139;
        ρσ_d["partial line backward"] = 140;
        ρσ_d["partial line up"] = 140;
        ρσ_d["plu"] = 140;
        ρσ_d["reverse line feed"] = 141;
        ρσ_d["reverse index"] = 141;
        ρσ_d["ri"] = 141;
        ρσ_d["single shift two"] = 142;
        ρσ_d["single-shift-2"] = 142;
        ρσ_d["ss2"] = 142;
        ρσ_d["single shift three"] = 143;
        ρσ_d["single-shift-3"] = 143;
        ρσ_d["ss3"] = 143;
        ρσ_d["device control string"] = 144;
        ρσ_d["dcs"] = 144;
        ρσ_d["private use one"] = 145;
        ρσ_d["private use-1"] = 145;
        ρσ_d["pu1"] = 145;
        ρσ_d["private use two"] = 146;
        ρσ_d["private use-2"] = 146;
        ρσ_d["pu2"] = 146;
        ρσ_d["set transmit state"] = 147;
        ρσ_d["sts"] = 147;
        ρσ_d["cancel character"] = 148;
        ρσ_d["cch"] = 148;
        ρσ_d["message waiting"] = 149;
        ρσ_d["mw"] = 149;
        ρσ_d["start of guarded area"] = 150;
        ρσ_d["start of protected area"] = 150;
        ρσ_d["spa"] = 150;
        ρσ_d["end of guarded area"] = 151;
        ρσ_d["end of protected area"] = 151;
        ρσ_d["epa"] = 151;
        ρσ_d["start of string"] = 152;
        ρσ_d["sos"] = 152;
        ρσ_d["single graphic character introducer"] = 153;
        ρσ_d["sgc"] = 153;
        ρσ_d["single character introducer"] = 154;
        ρσ_d["sci"] = 154;
        ρσ_d["control sequence introducer"] = 155;
        ρσ_d["csi"] = 155;
        ρσ_d["string terminator"] = 156;
        ρσ_d["st"] = 156;
        ρσ_d["operating system command"] = 157;
        ρσ_d["osc"] = 157;
        ρσ_d["privacy message"] = 158;
        ρσ_d["pm"] = 158;
        ρσ_d["application program command"] = 159;
        ρσ_d["apc"] = 159;
        ρσ_d["nbsp"] = 160;
        ρσ_d["shy"] = 173;
        ρσ_d["latin capital letter gha"] = 418;
        ρσ_d["latin small letter gha"] = 419;
        ρσ_d["cgj"] = 847;
        ρσ_d["alm"] = 1564;
        ρσ_d["syriac sublinear colon skewed left"] = 1801;
        ρσ_d["kannada letter llla"] = 3294;
        ρσ_d["lao letter fo fon"] = 3741;
        ρσ_d["lao letter fo fay"] = 3743;
        ρσ_d["lao letter ro"] = 3747;
        ρσ_d["lao letter lo"] = 3749;
        ρσ_d["tibetan mark bka- shog gi mgo rgyan"] = 4048;
        ρσ_d["fvs1"] = 6155;
        ρσ_d["fvs2"] = 6156;
        ρσ_d["fvs3"] = 6157;
        ρσ_d["mvs"] = 6158;
        ρσ_d["zwsp"] = 8203;
        ρσ_d["zwnj"] = 8204;
        ρσ_d["zwj"] = 8205;
        ρσ_d["lrm"] = 8206;
        ρσ_d["rlm"] = 8207;
        ρσ_d["lre"] = 8234;
        ρσ_d["rle"] = 8235;
        ρσ_d["pdf"] = 8236;
        ρσ_d["lro"] = 8237;
        ρσ_d["rlo"] = 8238;
        ρσ_d["nnbsp"] = 8239;
        ρσ_d["mmsp"] = 8287;
        ρσ_d["wj"] = 8288;
        ρσ_d["lri"] = 8294;
        ρσ_d["rli"] = 8295;
        ρσ_d["fsi"] = 8296;
        ρσ_d["pdi"] = 8297;
        ρσ_d["weierstrass elliptic function"] = 8472;
        ρσ_d["micr on us symbol"] = 9288;
        ρσ_d["micr dash symbol"] = 9289;
        ρσ_d["leftwards triangle-headed arrow with double vertical stroke"] = 11130;
        ρσ_d["rightwards triangle-headed arrow with double vertical stroke"] = 11132;
        ρσ_d["yi syllable iteration mark"] = 40981;
        ρσ_d["presentation form for vertical right white lenticular bracket"] = 65048;
        ρσ_d["vs1"] = 65024;
        ρσ_d["vs2"] = 65025;
        ρσ_d["vs3"] = 65026;
        ρσ_d["vs4"] = 65027;
        ρσ_d["vs5"] = 65028;
        ρσ_d["vs6"] = 65029;
        ρσ_d["vs7"] = 65030;
        ρσ_d["vs8"] = 65031;
        ρσ_d["vs9"] = 65032;
        ρσ_d["vs10"] = 65033;
        ρσ_d["vs11"] = 65034;
        ρσ_d["vs12"] = 65035;
        ρσ_d["vs13"] = 65036;
        ρσ_d["vs14"] = 65037;
        ρσ_d["vs15"] = 65038;
        ρσ_d["vs16"] = 65039;
        ρσ_d["byte order mark"] = 65279;
        ρσ_d["bom"] = 65279;
        ρσ_d["zwnbsp"] = 65279;
        ρσ_d["cuneiform sign nu11 tenu"] = 74452;
        ρσ_d["cuneiform sign nu11 over nu11 bur over bur"] = 74453;
        ρσ_d["byzantine musical symbol fthora skliron chroma vasis"] = 118981;
        ρσ_d["vs17"] = 917760;
        ρσ_d["vs18"] = 917761;
        ρσ_d["vs19"] = 917762;
        ρσ_d["vs20"] = 917763;
        ρσ_d["vs21"] = 917764;
        ρσ_d["vs22"] = 917765;
        ρσ_d["vs23"] = 917766;
        ρσ_d["vs24"] = 917767;
        ρσ_d["vs25"] = 917768;
        ρσ_d["vs26"] = 917769;
        ρσ_d["vs27"] = 917770;
        ρσ_d["vs28"] = 917771;
        ρσ_d["vs29"] = 917772;
        ρσ_d["vs30"] = 917773;
        ρσ_d["vs31"] = 917774;
        ρσ_d["vs32"] = 917775;
        ρσ_d["vs33"] = 917776;
        ρσ_d["vs34"] = 917777;
        ρσ_d["vs35"] = 917778;
        ρσ_d["vs36"] = 917779;
        ρσ_d["vs37"] = 917780;
        ρσ_d["vs38"] = 917781;
        ρσ_d["vs39"] = 917782;
        ρσ_d["vs40"] = 917783;
        ρσ_d["vs41"] = 917784;
        ρσ_d["vs42"] = 917785;
        ρσ_d["vs43"] = 917786;
        ρσ_d["vs44"] = 917787;
        ρσ_d["vs45"] = 917788;
        ρσ_d["vs46"] = 917789;
        ρσ_d["vs47"] = 917790;
        ρσ_d["vs48"] = 917791;
        ρσ_d["vs49"] = 917792;
        ρσ_d["vs50"] = 917793;
        ρσ_d["vs51"] = 917794;
        ρσ_d["vs52"] = 917795;
        ρσ_d["vs53"] = 917796;
        ρσ_d["vs54"] = 917797;
        ρσ_d["vs55"] = 917798;
        ρσ_d["vs56"] = 917799;
        ρσ_d["vs57"] = 917800;
        ρσ_d["vs58"] = 917801;
        ρσ_d["vs59"] = 917802;
        ρσ_d["vs60"] = 917803;
        ρσ_d["vs61"] = 917804;
        ρσ_d["vs62"] = 917805;
        ρσ_d["vs63"] = 917806;
        ρσ_d["vs64"] = 917807;
        ρσ_d["vs65"] = 917808;
        ρσ_d["vs66"] = 917809;
        ρσ_d["vs67"] = 917810;
        ρσ_d["vs68"] = 917811;
        ρσ_d["vs69"] = 917812;
        ρσ_d["vs70"] = 917813;
        ρσ_d["vs71"] = 917814;
        ρσ_d["vs72"] = 917815;
        ρσ_d["vs73"] = 917816;
        ρσ_d["vs74"] = 917817;
        ρσ_d["vs75"] = 917818;
        ρσ_d["vs76"] = 917819;
        ρσ_d["vs77"] = 917820;
        ρσ_d["vs78"] = 917821;
        ρσ_d["vs79"] = 917822;
        ρσ_d["vs80"] = 917823;
        ρσ_d["vs81"] = 917824;
        ρσ_d["vs82"] = 917825;
        ρσ_d["vs83"] = 917826;
        ρσ_d["vs84"] = 917827;
        ρσ_d["vs85"] = 917828;
        ρσ_d["vs86"] = 917829;
        ρσ_d["vs87"] = 917830;
        ρσ_d["vs88"] = 917831;
        ρσ_d["vs89"] = 917832;
        ρσ_d["vs90"] = 917833;
        ρσ_d["vs91"] = 917834;
        ρσ_d["vs92"] = 917835;
        ρσ_d["vs93"] = 917836;
        ρσ_d["vs94"] = 917837;
        ρσ_d["vs95"] = 917838;
        ρσ_d["vs96"] = 917839;
        ρσ_d["vs97"] = 917840;
        ρσ_d["vs98"] = 917841;
        ρσ_d["vs99"] = 917842;
        ρσ_d["vs100"] = 917843;
        ρσ_d["vs101"] = 917844;
        ρσ_d["vs102"] = 917845;
        ρσ_d["vs103"] = 917846;
        ρσ_d["vs104"] = 917847;
        ρσ_d["vs105"] = 917848;
        ρσ_d["vs106"] = 917849;
        ρσ_d["vs107"] = 917850;
        ρσ_d["vs108"] = 917851;
        ρσ_d["vs109"] = 917852;
        ρσ_d["vs110"] = 917853;
        ρσ_d["vs111"] = 917854;
        ρσ_d["vs112"] = 917855;
        ρσ_d["vs113"] = 917856;
        ρσ_d["vs114"] = 917857;
        ρσ_d["vs115"] = 917858;
        ρσ_d["vs116"] = 917859;
        ρσ_d["vs117"] = 917860;
        ρσ_d["vs118"] = 917861;
        ρσ_d["vs119"] = 917862;
        ρσ_d["vs120"] = 917863;
        ρσ_d["vs121"] = 917864;
        ρσ_d["vs122"] = 917865;
        ρσ_d["vs123"] = 917866;
        ρσ_d["vs124"] = 917867;
        ρσ_d["vs125"] = 917868;
        ρσ_d["vs126"] = 917869;
        ρσ_d["vs127"] = 917870;
        ρσ_d["vs128"] = 917871;
        ρσ_d["vs129"] = 917872;
        ρσ_d["vs130"] = 917873;
        ρσ_d["vs131"] = 917874;
        ρσ_d["vs132"] = 917875;
        ρσ_d["vs133"] = 917876;
        ρσ_d["vs134"] = 917877;
        ρσ_d["vs135"] = 917878;
        ρσ_d["vs136"] = 917879;
        ρσ_d["vs137"] = 917880;
        ρσ_d["vs138"] = 917881;
        ρσ_d["vs139"] = 917882;
        ρσ_d["vs140"] = 917883;
        ρσ_d["vs141"] = 917884;
        ρσ_d["vs142"] = 917885;
        ρσ_d["vs143"] = 917886;
        ρσ_d["vs144"] = 917887;
        ρσ_d["vs145"] = 917888;
        ρσ_d["vs146"] = 917889;
        ρσ_d["vs147"] = 917890;
        ρσ_d["vs148"] = 917891;
        ρσ_d["vs149"] = 917892;
        ρσ_d["vs150"] = 917893;
        ρσ_d["vs151"] = 917894;
        ρσ_d["vs152"] = 917895;
        ρσ_d["vs153"] = 917896;
        ρσ_d["vs154"] = 917897;
        ρσ_d["vs155"] = 917898;
        ρσ_d["vs156"] = 917899;
        ρσ_d["vs157"] = 917900;
        ρσ_d["vs158"] = 917901;
        ρσ_d["vs159"] = 917902;
        ρσ_d["vs160"] = 917903;
        ρσ_d["vs161"] = 917904;
        ρσ_d["vs162"] = 917905;
        ρσ_d["vs163"] = 917906;
        ρσ_d["vs164"] = 917907;
        ρσ_d["vs165"] = 917908;
        ρσ_d["vs166"] = 917909;
        ρσ_d["vs167"] = 917910;
        ρσ_d["vs168"] = 917911;
        ρσ_d["vs169"] = 917912;
        ρσ_d["vs170"] = 917913;
        ρσ_d["vs171"] = 917914;
        ρσ_d["vs172"] = 917915;
        ρσ_d["vs173"] = 917916;
        ρσ_d["vs174"] = 917917;
        ρσ_d["vs175"] = 917918;
        ρσ_d["vs176"] = 917919;
        ρσ_d["vs177"] = 917920;
        ρσ_d["vs178"] = 917921;
        ρσ_d["vs179"] = 917922;
        ρσ_d["vs180"] = 917923;
        ρσ_d["vs181"] = 917924;
        ρσ_d["vs182"] = 917925;
        ρσ_d["vs183"] = 917926;
        ρσ_d["vs184"] = 917927;
        ρσ_d["vs185"] = 917928;
        ρσ_d["vs186"] = 917929;
        ρσ_d["vs187"] = 917930;
        ρσ_d["vs188"] = 917931;
        ρσ_d["vs189"] = 917932;
        ρσ_d["vs190"] = 917933;
        ρσ_d["vs191"] = 917934;
        ρσ_d["vs192"] = 917935;
        ρσ_d["vs193"] = 917936;
        ρσ_d["vs194"] = 917937;
        ρσ_d["vs195"] = 917938;
        ρσ_d["vs196"] = 917939;
        ρσ_d["vs197"] = 917940;
        ρσ_d["vs198"] = 917941;
        ρσ_d["vs199"] = 917942;
        ρσ_d["vs200"] = 917943;
        ρσ_d["vs201"] = 917944;
        ρσ_d["vs202"] = 917945;
        ρσ_d["vs203"] = 917946;
        ρσ_d["vs204"] = 917947;
        ρσ_d["vs205"] = 917948;
        ρσ_d["vs206"] = 917949;
        ρσ_d["vs207"] = 917950;
        ρσ_d["vs208"] = 917951;
        ρσ_d["vs209"] = 917952;
        ρσ_d["vs210"] = 917953;
        ρσ_d["vs211"] = 917954;
        ρσ_d["vs212"] = 917955;
        ρσ_d["vs213"] = 917956;
        ρσ_d["vs214"] = 917957;
        ρσ_d["vs215"] = 917958;
        ρσ_d["vs216"] = 917959;
        ρσ_d["vs217"] = 917960;
        ρσ_d["vs218"] = 917961;
        ρσ_d["vs219"] = 917962;
        ρσ_d["vs220"] = 917963;
        ρσ_d["vs221"] = 917964;
        ρσ_d["vs222"] = 917965;
        ρσ_d["vs223"] = 917966;
        ρσ_d["vs224"] = 917967;
        ρσ_d["vs225"] = 917968;
        ρσ_d["vs226"] = 917969;
        ρσ_d["vs227"] = 917970;
        ρσ_d["vs228"] = 917971;
        ρσ_d["vs229"] = 917972;
        ρσ_d["vs230"] = 917973;
        ρσ_d["vs231"] = 917974;
        ρσ_d["vs232"] = 917975;
        ρσ_d["vs233"] = 917976;
        ρσ_d["vs234"] = 917977;
        ρσ_d["vs235"] = 917978;
        ρσ_d["vs236"] = 917979;
        ρσ_d["vs237"] = 917980;
        ρσ_d["vs238"] = 917981;
        ρσ_d["vs239"] = 917982;
        ρσ_d["vs240"] = 917983;
        ρσ_d["vs241"] = 917984;
        ρσ_d["vs242"] = 917985;
        ρσ_d["vs243"] = 917986;
        ρσ_d["vs244"] = 917987;
        ρσ_d["vs245"] = 917988;
        ρσ_d["vs246"] = 917989;
        ρσ_d["vs247"] = 917990;
        ρσ_d["vs248"] = 917991;
        ρσ_d["vs249"] = 917992;
        ρσ_d["vs250"] = 917993;
        ρσ_d["vs251"] = 917994;
        ρσ_d["vs252"] = 917995;
        ρσ_d["vs253"] = 917996;
        ρσ_d["vs254"] = 917997;
        ρσ_d["vs255"] = 917998;
        ρσ_d["vs256"] = 917999;
        return ρσ_d;
    }).call(this);
    _ASCII_CONTROL_CHARS = (function(){
        var ρσ_d = {};
        ρσ_d["a"] = 7;
        ρσ_d["b"] = 8;
        ρσ_d["f"] = 12;
        ρσ_d["n"] = 10;
        ρσ_d["r"] = 13;
        ρσ_d["t"] = 9;
        ρσ_d["v"] = 11;
        return ρσ_d;
    }).call(this);
    _HEX_PAT = /^[a-fA-F0-9]/;
    _NUM_PAT = /^[0-9]/;
    _GROUP_PAT = /<([^>]+)>/;
    _NAME_PAT = /^[a-zA-Z ]/;
    I = IGNORECASE = 2;
    L = LOCALE = 4;
    M = MULTILINE = 8;
    D = DOTALL = 16;
    U = UNICODE = 32;
    X = VERBOSE = 64;
    DEBUG = 128;
    A = ASCII = 256;
    supports_unicode = RegExp.prototype.unicode !== undefined;
    _RE_ESCAPE = /[-\/\\^$*+?.()|[\]{}]/g;
    _re_cache_map = {};
    _re_cache_items = [];
    error = SyntaxError;
    has_prop = Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty);
    function _expand(groups, repl, group_name_map) {
        var i, ans, ch;
        i = 0;
        function next() {
            return repl[i++];
        };

        function peek() {
            return repl[(typeof i === "number" && i < 0) ? repl.length + i : i];
        };

        function read_digits(count, pat, base, maxval, prefix) {
            var ans, greedy, nval;
            ans = prefix || "";
            greedy = count === Number.MAX_VALUE;
            while (count > 0) {
                count -= 1;
                if (!pat.test(peek())) {
                    if (greedy) {
                        break;
                    }
                    return ans;
                }
                ans += next();
            }
            nval = parseInt(ans, base);
            if (nval > maxval) {
                return ans;
            }
            return nval;
        };
        if (!read_digits.__argnames__) Object.defineProperties(read_digits, {
            __argnames__ : {value: ["count", "pat", "base", "maxval", "prefix"]}
        });

        function read_escape_sequence() {
            var q, ans, m, gn, code, name, key;
            q = next();
            if (!q || q === "\\") {
                return "\\";
            }
            if ("\"'".indexOf(q) !== -1) {
                return q;
            }
            if (_ASCII_CONTROL_CHARS[(typeof q === "number" && q < 0) ? _ASCII_CONTROL_CHARS.length + q : q]) {
                return String.fromCharCode(_ASCII_CONTROL_CHARS[(typeof q === "number" && q < 0) ? _ASCII_CONTROL_CHARS.length + q : q]);
            }
            if ("0" <= q && q <= "9") {
                ans = read_digits(Number.MAX_VALUE, _NUM_PAT, 10, Number.MAX_VALUE, q);
                if (typeof ans === "number") {
                    return groups[(typeof ans === "number" && ans < 0) ? groups.length + ans : ans] || "";
                }
                return "\\" + ans;
            }
            if (q === "g") {
                m = _GROUP_PAT.exec(repl.slice(i));
                if (m !== null) {
                    i += m[0].length;
                    gn = m[1];
                    if (isNaN(parseInt(gn, 10))) {
                        if (!has_prop(group_name_map, gn)) {
                            return "";
                        }
                        gn = (ρσ_expr_temp = group_name_map[(typeof gn === "number" && gn < 0) ? group_name_map.length + gn : gn])[ρσ_expr_temp.length-1];
                    }
                    return groups[(typeof gn === "number" && gn < 0) ? groups.length + gn : gn] || "";
                }
            }
            if (q === "x") {
                code = read_digits(2, _HEX_PAT, 16, 1114111);
                if (typeof code === "number") {
                    return String.fromCharCode(code);
                }
                return "\\x" + code;
            }
            if (q === "u") {
                code = read_digits(4, _HEX_PAT, 16, 1114111);
                if (typeof code === "number") {
                    return String.fromCharCode(code);
                }
                return "\\u" + code;
            }
            if (q === "U") {
                code = read_digits(8, _HEX_PAT, 16, 1114111);
                if (typeof code === "number") {
                    if (code <= 65535) {
                        return String.fromCharCode(code);
                    }
                    code -= 65536;
                    return String.fromCharCode(55296 + (code >> 10), 56320 + (code & 1023));
                }
                return "\\U" + code;
            }
            if (q === "N" && peek() === "{") {
                next();
                name = "";
                while (_NAME_PAT.test(peek())) {
                    name += next();
                }
                if (peek() !== "}") {
                    return "\\N{" + name;
                }
                next();
                key = (name || "").toLowerCase();
                if (!name || !has_prop(_ALIAS_MAP, key)) {
                    return "\\N{" + name + "}";
                }
                code = _ALIAS_MAP[(typeof key === "number" && key < 0) ? _ALIAS_MAP.length + key : key];
                if (code <= 65535) {
                    return String.fromCharCode(code);
                }
                code -= 65536;
                return String.fromCharCode(55296 + (code >> 10), 56320 + (code & 1023));
            }
            return "\\" + q;
        };

        ans = ch = "";
        while (ch = next()) {
            if (ch === "\\") {
                ans += read_escape_sequence();
            } else {
                ans += ch;
            }
        }
        return ans;
    };
    if (!_expand.__argnames__) Object.defineProperties(_expand, {
        __argnames__ : {value: ["groups", "repl", "group_name_map"]}
    });

    function transform_regex(source, flags) {
        var pos, previous_backslash, in_class, ans, group_map, group_count, ch, extension, close, flag_map, flgs, q, name;
        pos = 0;
        previous_backslash = in_class = false;
        ans = "";
        group_map = {};
        flags = flags || 0;
        group_count = 0;
        while (pos < source.length) {
            ch = source[pos++];
            if (previous_backslash) {
                ans += "\\" + ch;
                previous_backslash = false;
                continue;
            }
            if (in_class) {
                if (ch === "]") {
                    in_class = false;
                }
                ans += ch;
                continue;
            }
            if (ch === "\\") {
                previous_backslash = true;
                continue;
            }
            if (ch === "[") {
                in_class = true;
                if (source[(typeof pos === "number" && pos < 0) ? source.length + pos : pos] === "]") {
                    pos += 1;
                    ch = "[\\]";
                }
            } else if (ch === "(") {
                if (source[(typeof pos === "number" && pos < 0) ? source.length + pos : pos] === "?") {
                    extension = source[ρσ_bound_index(pos + 1, source)];
                    if (extension === "#") {
                        close = source.indexOf(")", pos + 1);
                        if (close === -1) {
                            throw new ValueError("Expecting a closing )");
                        }
                        pos = close + 1;
                        continue;
                    }
                    if ("aiLmsux".indexOf(extension) !== -1) {
                        flag_map = (function(){
                            var ρσ_d = {};
                            ρσ_d["a"] = ASCII;
                            ρσ_d["i"] = IGNORECASE;
                            ρσ_d["L"] = LOCALE;
                            ρσ_d["m"] = MULTILINE;
                            ρσ_d["s"] = DOTALL;
                            ρσ_d["u"] = UNICODE;
                            ρσ_d["x"] = VERBOSE;
                            return ρσ_d;
                        }).call(this);
                        close = source.indexOf(")", pos + 1);
                        if (close === -1) {
                            throw new SyntaxError("Expecting a closing )");
                        }
                        flgs = source.slice(pos + 1, close);
                        for (var i = 0; i < flgs.length; i++) {
                            q = flgs[(typeof i === "number" && i < 0) ? flgs.length + i : i];
                            if (!has_prop(flag_map, q)) {
                                throw new SyntaxError("Invalid flag: " + q);
                            }
                            flags |= flag_map[(typeof q === "number" && q < 0) ? flag_map.length + q : q];
                        }
                        pos = close + 1;
                        continue;
                    }
                    if (extension === "<") {
                        throw new SyntaxError("Look behind assertions are not supported in JavaScript");
                    }
                    if (extension === "(") {
                        throw new SyntaxError("Group existence assertions are not supported in JavaScript");
                    }
                    if (extension === "P") {
                        pos += 2;
                        q = source[(typeof pos === "number" && pos < 0) ? source.length + pos : pos];
                        if (q === "<") {
                            close = source.indexOf(">", pos);
                            if (close === -1) {
                                throw new SyntaxError("Named group not closed, expecting >");
                            }
                            name = source.slice(pos + 1, close);
                            if (!has_prop(group_map, name)) {
                                group_map[(typeof name === "number" && name < 0) ? group_map.length + name : name] = [];
                            }
                            group_map[(typeof name === "number" && name < 0) ? group_map.length + name : name].push(++group_count);
                            pos = close + 1;
                        } else if (q === "=") {
                            close = source.indexOf(")", pos);
                            if (close === -1) {
                                throw new SyntaxError("Named group back-reference not closed, expecting a )");
                            }
                            name = source.slice(pos + 1, close);
                            if (!isNaN(parseInt(name, 10))) {
                                ans += "\\" + name;
                            } else {
                                if (!has_prop(group_map, name)) {
                                    throw new SyntaxError("Invalid back-reference. The named group: " + name + " has not yet been defined.");
                                }
                                ans += "\\" + (ρσ_expr_temp = group_map[(typeof name === "number" && name < 0) ? group_map.length + name : name])[ρσ_expr_temp.length-1];
                            }
                            pos = close + 1;
                            continue;
                        } else {
                            throw new SyntaxError("Expecting < or = after (?P");
                        }
                    }
                } else {
                    group_count += 1;
                }
            } else if (ch === "." && flags & DOTALL) {
                ans += "[\\s\\S]";
                continue;
            }
            ans += ch;
        }
        return [ans, flags, group_map];
    };
    if (!transform_regex.__argnames__) Object.defineProperties(transform_regex, {
        __argnames__ : {value: ["source", "flags"]}
    });

    function MatchObject() {
        if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
        MatchObject.prototype.__bind_methods__.call(this);
        MatchObject.prototype.__init__.apply(this, arguments);
    }
    Object.defineProperty(MatchObject.prototype, "__bind_methods__", {value: function () {
        this._compute_extents = MatchObject.prototype._compute_extents.bind(this);
        this.groups = MatchObject.prototype.groups.bind(this);
        this._group_number = MatchObject.prototype._group_number.bind(this);
        this._group_val = MatchObject.prototype._group_val.bind(this);
        this.group = MatchObject.prototype.group.bind(this);
        this.start = MatchObject.prototype.start.bind(this);
        this.end = MatchObject.prototype.end.bind(this);
        this.span = MatchObject.prototype.span.bind(this);
        this.expand = MatchObject.prototype.expand.bind(this);
        this.groupdict = MatchObject.prototype.groupdict.bind(this);
        this.captures = MatchObject.prototype.captures.bind(this);
        this.capturesdict = MatchObject.prototype.capturesdict.bind(this);
    }});
    MatchObject.prototype.__init__ = function __init__(regex, match, pos, endpos) {
        var self = this;
        var ρσ_unpack;
        self.re = regex;
        self.string = match.input;
        self._start_pos = match.index;
        self._groups = match;
        ρσ_unpack = [pos, endpos];
        self.pos = ρσ_unpack[0];
        self.endpos = ρσ_unpack[1];
    };
    if (!MatchObject.prototype.__init__.__argnames__) Object.defineProperties(MatchObject.prototype.__init__, {
        __argnames__ : {value: ["regex", "match", "pos", "endpos"]}
    });
    MatchObject.__argnames__ = MatchObject.prototype.__init__.__argnames__;
    MatchObject.__handles_kwarg_interpolation__ = MatchObject.prototype.__init__.__handles_kwarg_interpolation__;
    MatchObject.prototype._compute_extents = function _compute_extents() {
        var self = this;
        var match, offset, extent, loc, g;
        match = self._groups;
        self._start = Array(match.length);
        self._end = Array(match.length);
        self._start[0] = self._start_pos;
        self._end[0] = self._start_pos + match[0].length;
        offset = self._start_pos;
        extent = match[0];
        loc = 0;
        for (var i = 1; i < match.length; i++) {
            g = match[(typeof i === "number" && i < 0) ? match.length + i : i];
            loc = extent.indexOf(g, loc);
            if (loc === -1) {
                (ρσ_expr_temp = self._start)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] = (ρσ_expr_temp = self._start)[ρσ_bound_index(i - 1, ρσ_expr_temp)];
                (ρσ_expr_temp = self._end)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] = (ρσ_expr_temp = self._end)[ρσ_bound_index(i - 1, ρσ_expr_temp)];
            } else {
                (ρσ_expr_temp = self._start)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] = offset + loc;
                loc += g.length;
                (ρσ_expr_temp = self._end)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] = offset + loc;
            }
        }
    };
    if (!MatchObject.prototype._compute_extents.__argnames__) Object.defineProperties(MatchObject.prototype._compute_extents, {
        __argnames__ : {value: []}
    });
    MatchObject.prototype.groups = function groups() {
        var self = this;
        var defval = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? groups.__defaults__.defval : arguments[0];
        var ρσ_kwargs_obj = arguments[arguments.length-1];
        if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "defval")){
            defval = ρσ_kwargs_obj.defval;
        }
        var ans, val;
        ans = [];
        for (var i = 1; i < self._groups.length; i++) {
            val = (ρσ_expr_temp = self._groups)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i];
            if (val === undefined) {
                val = defval;
            }
            ans.push(val);
        }
        return ans;
    };
    if (!MatchObject.prototype.groups.__defaults__) Object.defineProperties(MatchObject.prototype.groups, {
        __defaults__ : {value: {defval:null}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["defval"]}
    });
    MatchObject.prototype._group_number = function _group_number(g) {
        var self = this;
        if (typeof g === "number") {
            return g;
        }
        if (has_prop(self.re.group_name_map, g)) {
            return (ρσ_expr_temp = (ρσ_expr_temp = self.re.group_name_map)[(typeof g === "number" && g < 0) ? ρσ_expr_temp.length + g : g])[ρσ_expr_temp.length-1];
        }
        return g;
    };
    if (!MatchObject.prototype._group_number.__argnames__) Object.defineProperties(MatchObject.prototype._group_number, {
        __argnames__ : {value: ["g"]}
    });
    MatchObject.prototype._group_val = function _group_val(q, defval) {
        var self = this;
        var val;
        val = undefined;
        if (typeof q === "number" && -1 < q && q < self._groups.length) {
            val = (ρσ_expr_temp = self._groups)[(typeof q === "number" && q < 0) ? ρσ_expr_temp.length + q : q];
        } else {
            if (has_prop(self.re.group_name_map, q)) {
                val = (ρσ_expr_temp = self._groups)[ρσ_bound_index((ρσ_expr_temp = (ρσ_expr_temp = self.re.group_name_map)[(typeof q === "number" && q < 0) ? ρσ_expr_temp.length + q : q])[ρσ_expr_temp.length-1], ρσ_expr_temp)];
            }
        }
        if (val === undefined) {
            val = defval;
        }
        return val;
    };
    if (!MatchObject.prototype._group_val.__argnames__) Object.defineProperties(MatchObject.prototype._group_val, {
        __argnames__ : {value: ["q", "defval"]}
    });
    MatchObject.prototype.group = function group() {
        var self = this;
        var ans, q;
        if (arguments.length === 0) {
            return self._groups[0];
        }
        ans = [];
        for (var i = 0; i < arguments.length; i++) {
            q = arguments[(typeof i === "number" && i < 0) ? arguments.length + i : i];
            ans.push(self._group_val(q, null));
        }
        return (ans.length === 1) ? ans[0] : ans;
    };
    if (!MatchObject.prototype.group.__argnames__) Object.defineProperties(MatchObject.prototype.group, {
        __argnames__ : {value: []}
    });
    MatchObject.prototype.start = function start(g) {
        var self = this;
        var val;
        if (self._start === undefined) {
            self._compute_extents();
        }
        val = (ρσ_expr_temp = self._start)[ρσ_bound_index(self._group_number(g || 0), ρσ_expr_temp)];
        if (val === undefined) {
            val = -1;
        }
        return val;
    };
    if (!MatchObject.prototype.start.__argnames__) Object.defineProperties(MatchObject.prototype.start, {
        __argnames__ : {value: ["g"]}
    });
    MatchObject.prototype.end = function end(g) {
        var self = this;
        var val;
        if (self._end === undefined) {
            self._compute_extents();
        }
        val = (ρσ_expr_temp = self._end)[ρσ_bound_index(self._group_number(g || 0), ρσ_expr_temp)];
        if (val === undefined) {
            val = -1;
        }
        return val;
    };
    if (!MatchObject.prototype.end.__argnames__) Object.defineProperties(MatchObject.prototype.end, {
        __argnames__ : {value: ["g"]}
    });
    MatchObject.prototype.span = function span(g) {
        var self = this;
        return ρσ_list_decorate([ self.start(g), self.end(g) ]);
    };
    if (!MatchObject.prototype.span.__argnames__) Object.defineProperties(MatchObject.prototype.span, {
        __argnames__ : {value: ["g"]}
    });
    MatchObject.prototype.expand = function expand(repl) {
        var self = this;
        return _expand(repl, this._groups, this.re.group_name_map);
    };
    if (!MatchObject.prototype.expand.__argnames__) Object.defineProperties(MatchObject.prototype.expand, {
        __argnames__ : {value: ["repl"]}
    });
    MatchObject.prototype.groupdict = function groupdict() {
        var self = this;
        var defval = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? groupdict.__defaults__.defval : arguments[0];
        var ρσ_kwargs_obj = arguments[arguments.length-1];
        if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "defval")){
            defval = ρσ_kwargs_obj.defval;
        }
        var gnm, names, ans, name, val;
        gnm = self.re.group_name_map;
        names = Object.keys(gnm);
        ans = {};
        for (var i = 0; i < names.length; i++) {
            name = names[(typeof i === "number" && i < 0) ? names.length + i : i];
            if (has_prop(gnm, name)) {
                val = (ρσ_expr_temp = self._groups)[ρσ_bound_index((ρσ_expr_temp = gnm[(typeof name === "number" && name < 0) ? gnm.length + name : name])[ρσ_expr_temp.length-1], ρσ_expr_temp)];
                if (val === undefined) {
                    val = defval;
                }
                ans[(typeof name === "number" && name < 0) ? ans.length + name : name] = val;
            }
        }
        return ans;
    };
    if (!MatchObject.prototype.groupdict.__defaults__) Object.defineProperties(MatchObject.prototype.groupdict, {
        __defaults__ : {value: {defval:null}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["defval"]}
    });
    MatchObject.prototype.captures = function captures(group_name) {
        var self = this;
        var ans, groups, val;
        ans = ρσ_list_decorate([]);
        if (!has_prop(self.re.group_name_map, group_name)) {
            return ans;
        }
        groups = (ρσ_expr_temp = self.re.group_name_map)[(typeof group_name === "number" && group_name < 0) ? ρσ_expr_temp.length + group_name : group_name];
        for (var i = 0; i < groups.length; i++) {
            val = (ρσ_expr_temp = self._groups)[ρσ_bound_index(groups[(typeof i === "number" && i < 0) ? groups.length + i : i], ρσ_expr_temp)];
            if (val !== undefined) {
                ans.push(val);
            }
        }
        return ans;
    };
    if (!MatchObject.prototype.captures.__argnames__) Object.defineProperties(MatchObject.prototype.captures, {
        __argnames__ : {value: ["group_name"]}
    });
    MatchObject.prototype.capturesdict = function capturesdict() {
        var self = this;
        var gnm, names, ans, name;
        gnm = self.re.group_name_map;
        names = Object.keys(gnm);
        ans = {};
        for (var i = 0; i < names.length; i++) {
            name = names[(typeof i === "number" && i < 0) ? names.length + i : i];
            ans[(typeof name === "number" && name < 0) ? ans.length + name : name] = self.captures(name);
        }
        return ans;
    };
    if (!MatchObject.prototype.capturesdict.__argnames__) Object.defineProperties(MatchObject.prototype.capturesdict, {
        __argnames__ : {value: []}
    });
    MatchObject.prototype.__repr__ = function __repr__ () {
                return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
    };
    MatchObject.prototype.__str__ = function __str__ () {
        return this.__repr__();
    };
    Object.defineProperty(MatchObject.prototype, "__bases__", {value: []});

    function RegexObject() {
        if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
        RegexObject.prototype.__bind_methods__.call(this);
        RegexObject.prototype.__init__.apply(this, arguments);
    }
    Object.defineProperty(RegexObject.prototype, "__bind_methods__", {value: function () {
        this._do_search = RegexObject.prototype._do_search.bind(this);
        this.search = RegexObject.prototype.search.bind(this);
        this.match = RegexObject.prototype.match.bind(this);
        this.split = RegexObject.prototype.split.bind(this);
        this.findall = RegexObject.prototype.findall.bind(this);
        this.finditer = RegexObject.prototype.finditer.bind(this);
        this.subn = RegexObject.prototype.subn.bind(this);
        this.sub = RegexObject.prototype.sub.bind(this);
    }});
    RegexObject.prototype.__init__ = function __init__(pattern, flags) {
        var self = this;
        var ρσ_unpack, modifiers;
        self.pattern = (ρσ_instanceof(pattern, RegExp)) ? pattern.source : pattern;
        ρσ_unpack = transform_regex(self.pattern, flags);
ρσ_unpack = ρσ_unpack_asarray(3, ρσ_unpack);
        self.js_pattern = ρσ_unpack[0];
        self.flags = ρσ_unpack[1];
        self.group_name_map = ρσ_unpack[2];
        modifiers = "";
        if (self.flags & IGNORECASE) {
            modifiers += "i";
        }
        if (self.flags & MULTILINE) {
            modifiers += "m";
        }
        if (!(self.flags & ASCII) && supports_unicode) {
            modifiers += "u";
        }
        self._modifiers = modifiers + "g";
        self._pattern = new RegExp(self.js_pattern, self._modifiers);
    };
    if (!RegexObject.prototype.__init__.__argnames__) Object.defineProperties(RegexObject.prototype.__init__, {
        __argnames__ : {value: ["pattern", "flags"]}
    });
    RegexObject.__argnames__ = RegexObject.prototype.__init__.__argnames__;
    RegexObject.__handles_kwarg_interpolation__ = RegexObject.prototype.__init__.__handles_kwarg_interpolation__;
    RegexObject.prototype._do_search = function _do_search(pat, string, pos, endpos) {
        var self = this;
        var n;
        pat.lastIndex = 0;
        if (endpos !== null) {
            string = string.slice(0, endpos);
        }
        while (true) {
            n = pat.exec(string);
            if (n === null) {
                return null;
            }
            if (n.index >= pos) {
                return new MatchObject(self, n, pos, endpos);
            }
        }
    };
    if (!RegexObject.prototype._do_search.__argnames__) Object.defineProperties(RegexObject.prototype._do_search, {
        __argnames__ : {value: ["pat", "string", "pos", "endpos"]}
    });
    RegexObject.prototype.search = function search() {
        var self = this;
        var string = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
        var pos = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? search.__defaults__.pos : arguments[1];
        var endpos = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? search.__defaults__.endpos : arguments[2];
        var ρσ_kwargs_obj = arguments[arguments.length-1];
        if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "pos")){
            pos = ρσ_kwargs_obj.pos;
        }
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "endpos")){
            endpos = ρσ_kwargs_obj.endpos;
        }
        return self._do_search(self._pattern, string, pos, endpos);
    };
    if (!RegexObject.prototype.search.__defaults__) Object.defineProperties(RegexObject.prototype.search, {
        __defaults__ : {value: {pos:0, endpos:null}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["string", "pos", "endpos"]}
    });
    RegexObject.prototype.match = function match() {
        var self = this;
        var string = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
        var pos = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? match.__defaults__.pos : arguments[1];
        var endpos = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? match.__defaults__.endpos : arguments[2];
        var ρσ_kwargs_obj = arguments[arguments.length-1];
        if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "pos")){
            pos = ρσ_kwargs_obj.pos;
        }
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "endpos")){
            endpos = ρσ_kwargs_obj.endpos;
        }
        return self._do_search(new RegExp("^" + self.js_pattern, self._modifiers), string, pos, endpos);
    };
    if (!RegexObject.prototype.match.__defaults__) Object.defineProperties(RegexObject.prototype.match, {
        __defaults__ : {value: {pos:0, endpos:null}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["string", "pos", "endpos"]}
    });
    RegexObject.prototype.split = function split() {
        var self = this;
        var string = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
        var maxsplit = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? split.__defaults__.maxsplit : arguments[1];
        var ρσ_kwargs_obj = arguments[arguments.length-1];
        if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "maxsplit")){
            maxsplit = ρσ_kwargs_obj.maxsplit;
        }
        self._pattern.lastIndex = 0;
        return string.split(self._pattern, maxsplit || undefined);
    };
    if (!RegexObject.prototype.split.__defaults__) Object.defineProperties(RegexObject.prototype.split, {
        __defaults__ : {value: {maxsplit:0}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["string", "maxsplit"]}
    });
    RegexObject.prototype.findall = function findall(string) {
        var self = this;
        self._pattern.lastIndex = 0;
        return ρσ_list_decorate(string.match(self._pattern) || []);
    };
    if (!RegexObject.prototype.findall.__argnames__) Object.defineProperties(RegexObject.prototype.findall, {
        __argnames__ : {value: ["string"]}
    });
    RegexObject.prototype.finditer = function finditer(string) {
        var self = this;
        var pat, ans;
        pat = new RegExp(this._pattern.source, this._modifiers);
        ans = {'_string':string, '_r':pat, '_self':self};
        ans[ρσ_iterator_symbol] = function () {
            return this;
        };
        ans["next"] = function () {
            var m;
            m = this._r.exec(this._string);
            if (m === null) {
                return {'done':true};
            }
            return {'done':false, 'value':new MatchObject(this._self, m, 0, null)};
        };
        return ans;
    };
    if (!RegexObject.prototype.finditer.__argnames__) Object.defineProperties(RegexObject.prototype.finditer, {
        __argnames__ : {value: ["string"]}
    });
    RegexObject.prototype.subn = function subn() {
        var self = this;
        var repl = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
        var string = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[1];
        var count = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? subn.__defaults__.count : arguments[2];
        var ρσ_kwargs_obj = arguments[arguments.length-1];
        if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "count")){
            count = ρσ_kwargs_obj.count;
        }
        var expand, num, matches, m, start, end;
        expand = _expand;
        if (typeof repl === "function") {
            expand = (function() {
                var ρσ_anonfunc = function (m, repl, gnm) {
                    return "" + repl(new MatchObject(self, m, 0, null));
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["m", "repl", "gnm"]}
                });
                return ρσ_anonfunc;
            })();
        }
        this._pattern.lastIndex = 0;
        num = 0;
        matches = [];
        while (count < 1 || num < count) {
            m = this._pattern.exec(string);
            if (m === null) {
                break;
            }
            matches.push(m);
            num += 1;
        }
        for (var i = matches.length - 1; i > -1; i--) {
            m = matches[(typeof i === "number" && i < 0) ? matches.length + i : i];
            start = m.index;
            end = start + m[0].length;
            string = string.slice(0, start) + expand(m, repl, self.group_name_map) + string.slice(end);
        }
        return [string, matches.length];
    };
    if (!RegexObject.prototype.subn.__defaults__) Object.defineProperties(RegexObject.prototype.subn, {
        __defaults__ : {value: {count:0}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["repl", "string", "count"]}
    });
    RegexObject.prototype.sub = function sub() {
        var self = this;
        var repl = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
        var string = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[1];
        var count = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? sub.__defaults__.count : arguments[2];
        var ρσ_kwargs_obj = arguments[arguments.length-1];
        if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "count")){
            count = ρσ_kwargs_obj.count;
        }
        return self.subn(repl, string, count)[0];
    };
    if (!RegexObject.prototype.sub.__defaults__) Object.defineProperties(RegexObject.prototype.sub, {
        __defaults__ : {value: {count:0}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["repl", "string", "count"]}
    });
    RegexObject.prototype.__repr__ = function __repr__ () {
                return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
    };
    RegexObject.prototype.__str__ = function __str__ () {
        return this.__repr__();
    };
    Object.defineProperty(RegexObject.prototype, "__bases__", {value: []});

    function _get_from_cache(pattern, flags) {
        var key, ans;
        if (ρσ_instanceof(pattern, RegExp)) {
            pattern = pattern.source;
        }
        key = JSON.stringify([pattern, flags]);
        if (has_prop(_re_cache_map, key)) {
            return _re_cache_map[(typeof key === "number" && key < 0) ? _re_cache_map.length + key : key];
        }
        if (_re_cache_items.length >= 100) {
            delete _re_cache_map[_re_cache_items.shift()];
        }
        ans = new RegexObject(pattern, flags);
        _re_cache_map[(typeof key === "number" && key < 0) ? _re_cache_map.length + key : key] = ans;
        _re_cache_items.push(key);
        return ans;
    };
    if (!_get_from_cache.__argnames__) Object.defineProperties(_get_from_cache, {
        __argnames__ : {value: ["pattern", "flags"]}
    });

    function compile() {
        var pattern = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
        var flags = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? compile.__defaults__.flags : arguments[1];
        var ρσ_kwargs_obj = arguments[arguments.length-1];
        if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "flags")){
            flags = ρσ_kwargs_obj.flags;
        }
        return _get_from_cache(pattern, flags);
    };
    if (!compile.__defaults__) Object.defineProperties(compile, {
        __defaults__ : {value: {flags:0}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["pattern", "flags"]}
    });

    function search() {
        var pattern = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
        var string = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[1];
        var flags = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? search.__defaults__.flags : arguments[2];
        var ρσ_kwargs_obj = arguments[arguments.length-1];
        if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "flags")){
            flags = ρσ_kwargs_obj.flags;
        }
        return _get_from_cache(pattern, flags).search(string);
    };
    if (!search.__defaults__) Object.defineProperties(search, {
        __defaults__ : {value: {flags:0}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["pattern", "string", "flags"]}
    });

    function match() {
        var pattern = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
        var string = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[1];
        var flags = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? match.__defaults__.flags : arguments[2];
        var ρσ_kwargs_obj = arguments[arguments.length-1];
        if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "flags")){
            flags = ρσ_kwargs_obj.flags;
        }
        return _get_from_cache(pattern, flags).match(string);
    };
    if (!match.__defaults__) Object.defineProperties(match, {
        __defaults__ : {value: {flags:0}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["pattern", "string", "flags"]}
    });

    function split() {
        var pattern = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
        var string = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[1];
        var maxsplit = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? split.__defaults__.maxsplit : arguments[2];
        var flags = (arguments[3] === undefined || ( 3 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? split.__defaults__.flags : arguments[3];
        var ρσ_kwargs_obj = arguments[arguments.length-1];
        if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "maxsplit")){
            maxsplit = ρσ_kwargs_obj.maxsplit;
        }
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "flags")){
            flags = ρσ_kwargs_obj.flags;
        }
        return _get_from_cache(pattern, flags).split(string);
    };
    if (!split.__defaults__) Object.defineProperties(split, {
        __defaults__ : {value: {maxsplit:0, flags:0}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["pattern", "string", "maxsplit", "flags"]}
    });

    function findall() {
        var pattern = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
        var string = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[1];
        var flags = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? findall.__defaults__.flags : arguments[2];
        var ρσ_kwargs_obj = arguments[arguments.length-1];
        if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "flags")){
            flags = ρσ_kwargs_obj.flags;
        }
        return _get_from_cache(pattern, flags).findall(string);
    };
    if (!findall.__defaults__) Object.defineProperties(findall, {
        __defaults__ : {value: {flags:0}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["pattern", "string", "flags"]}
    });

    function finditer() {
        var pattern = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
        var string = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[1];
        var flags = (arguments[2] === undefined || ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? finditer.__defaults__.flags : arguments[2];
        var ρσ_kwargs_obj = arguments[arguments.length-1];
        if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "flags")){
            flags = ρσ_kwargs_obj.flags;
        }
        return _get_from_cache(pattern, flags).finditer(string);
    };
    if (!finditer.__defaults__) Object.defineProperties(finditer, {
        __defaults__ : {value: {flags:0}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["pattern", "string", "flags"]}
    });

    function sub() {
        var pattern = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
        var repl = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[1];
        var string = ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[2];
        var count = (arguments[3] === undefined || ( 3 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? sub.__defaults__.count : arguments[3];
        var flags = (arguments[4] === undefined || ( 4 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? sub.__defaults__.flags : arguments[4];
        var ρσ_kwargs_obj = arguments[arguments.length-1];
        if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "count")){
            count = ρσ_kwargs_obj.count;
        }
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "flags")){
            flags = ρσ_kwargs_obj.flags;
        }
        return _get_from_cache(pattern, flags).sub(repl, string, count);
    };
    if (!sub.__defaults__) Object.defineProperties(sub, {
        __defaults__ : {value: {count:0, flags:0}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["pattern", "repl", "string", "count", "flags"]}
    });

    function subn() {
        var pattern = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
        var repl = ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[1];
        var string = ( 2 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[2];
        var count = (arguments[3] === undefined || ( 3 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? subn.__defaults__.count : arguments[3];
        var flags = (arguments[4] === undefined || ( 4 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? subn.__defaults__.flags : arguments[4];
        var ρσ_kwargs_obj = arguments[arguments.length-1];
        if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "count")){
            count = ρσ_kwargs_obj.count;
        }
        if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "flags")){
            flags = ρσ_kwargs_obj.flags;
        }
        return _get_from_cache(pattern, flags).subn(repl, string, count);
    };
    if (!subn.__defaults__) Object.defineProperties(subn, {
        __defaults__ : {value: {count:0, flags:0}},
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["pattern", "repl", "string", "count", "flags"]}
    });

    function escape(string) {
        return string.replace(_RE_ESCAPE, "\\$&");
    };
    if (!escape.__argnames__) Object.defineProperties(escape, {
        __argnames__ : {value: ["string"]}
    });

    function purge() {
        _re_cache_map = {};
        _re_cache_items = [];
    };

    ρσ_modules.re._ALIAS_MAP = _ALIAS_MAP;
    ρσ_modules.re._ASCII_CONTROL_CHARS = _ASCII_CONTROL_CHARS;
    ρσ_modules.re._HEX_PAT = _HEX_PAT;
    ρσ_modules.re._NUM_PAT = _NUM_PAT;
    ρσ_modules.re._GROUP_PAT = _GROUP_PAT;
    ρσ_modules.re._NAME_PAT = _NAME_PAT;
    ρσ_modules.re.I = I;
    ρσ_modules.re.IGNORECASE = IGNORECASE;
    ρσ_modules.re.L = L;
    ρσ_modules.re.LOCALE = LOCALE;
    ρσ_modules.re.M = M;
    ρσ_modules.re.MULTILINE = MULTILINE;
    ρσ_modules.re.D = D;
    ρσ_modules.re.DOTALL = DOTALL;
    ρσ_modules.re.U = U;
    ρσ_modules.re.UNICODE = UNICODE;
    ρσ_modules.re.X = X;
    ρσ_modules.re.VERBOSE = VERBOSE;
    ρσ_modules.re.DEBUG = DEBUG;
    ρσ_modules.re.A = A;
    ρσ_modules.re.ASCII = ASCII;
    ρσ_modules.re.supports_unicode = supports_unicode;
    ρσ_modules.re._RE_ESCAPE = _RE_ESCAPE;
    ρσ_modules.re._re_cache_map = _re_cache_map;
    ρσ_modules.re._re_cache_items = _re_cache_items;
    ρσ_modules.re.error = error;
    ρσ_modules.re.has_prop = has_prop;
    ρσ_modules.re._expand = _expand;
    ρσ_modules.re.transform_regex = transform_regex;
    ρσ_modules.re.MatchObject = MatchObject;
    ρσ_modules.re.RegexObject = RegexObject;
    ρσ_modules.re._get_from_cache = _get_from_cache;
    ρσ_modules.re.compile = compile;
    ρσ_modules.re.search = search;
    ρσ_modules.re.match = match;
    ρσ_modules.re.split = split;
    ρσ_modules.re.findall = findall;
    ρσ_modules.re.finditer = finditer;
    ρσ_modules.re.sub = sub;
    ρσ_modules.re.subn = subn;
    ρσ_modules.re.escape = escape;
    ρσ_modules.re.purge = purge;
})();

(function(){
    var html_elements, mathml_elements, svg_elements, html5_tags, E;
    html_elements = (function(){
        var s = ρσ_set();
        s.jsset.add("a");
        s.jsset.add("abbr");
        s.jsset.add("acronym");
        s.jsset.add("address");
        s.jsset.add("area");
        s.jsset.add("article");
        s.jsset.add("aside");
        s.jsset.add("audio");
        s.jsset.add("b");
        s.jsset.add("big");
        s.jsset.add("blockquote");
        s.jsset.add("br");
        s.jsset.add("button");
        s.jsset.add("canvas");
        s.jsset.add("caption");
        s.jsset.add("center");
        s.jsset.add("cite");
        s.jsset.add("code");
        s.jsset.add("col");
        s.jsset.add("colgroup");
        s.jsset.add("command");
        s.jsset.add("datagrid");
        s.jsset.add("datalist");
        s.jsset.add("dd");
        s.jsset.add("del");
        s.jsset.add("details");
        s.jsset.add("dfn");
        s.jsset.add("dialog");
        s.jsset.add("dir");
        s.jsset.add("div");
        s.jsset.add("dl");
        s.jsset.add("dt");
        s.jsset.add("em");
        s.jsset.add("event-source");
        s.jsset.add("fieldset");
        s.jsset.add("figcaption");
        s.jsset.add("figure");
        s.jsset.add("footer");
        s.jsset.add("font");
        s.jsset.add("form");
        s.jsset.add("header");
        s.jsset.add("h1");
        s.jsset.add("h2");
        s.jsset.add("h3");
        s.jsset.add("h4");
        s.jsset.add("h5");
        s.jsset.add("h6");
        s.jsset.add("hr");
        s.jsset.add("i");
        s.jsset.add("iframe");
        s.jsset.add("img");
        s.jsset.add("input");
        s.jsset.add("ins");
        s.jsset.add("keygen");
        s.jsset.add("kbd");
        s.jsset.add("label");
        s.jsset.add("legend");
        s.jsset.add("li");
        s.jsset.add("m");
        s.jsset.add("map");
        s.jsset.add("menu");
        s.jsset.add("meter");
        s.jsset.add("multicol");
        s.jsset.add("nav");
        s.jsset.add("nextid");
        s.jsset.add("ol");
        s.jsset.add("output");
        s.jsset.add("optgroup");
        s.jsset.add("option");
        s.jsset.add("p");
        s.jsset.add("pre");
        s.jsset.add("progress");
        s.jsset.add("q");
        s.jsset.add("s");
        s.jsset.add("samp");
        s.jsset.add("script");
        s.jsset.add("section");
        s.jsset.add("select");
        s.jsset.add("small");
        s.jsset.add("sound");
        s.jsset.add("source");
        s.jsset.add("spacer");
        s.jsset.add("span");
        s.jsset.add("strike");
        s.jsset.add("strong");
        s.jsset.add("style");
        s.jsset.add("sub");
        s.jsset.add("sup");
        s.jsset.add("table");
        s.jsset.add("tbody");
        s.jsset.add("td");
        s.jsset.add("textarea");
        s.jsset.add("time");
        s.jsset.add("tfoot");
        s.jsset.add("th");
        s.jsset.add("thead");
        s.jsset.add("tr");
        s.jsset.add("tt");
        s.jsset.add("u");
        s.jsset.add("ul");
        s.jsset.add("var");
        s.jsset.add("video");
        return s;
    })();
    mathml_elements = (function(){
        var s = ρσ_set();
        s.jsset.add("maction");
        s.jsset.add("math");
        s.jsset.add("merror");
        s.jsset.add("mfrac");
        s.jsset.add("mi");
        s.jsset.add("mmultiscripts");
        s.jsset.add("mn");
        s.jsset.add("mo");
        s.jsset.add("mover");
        s.jsset.add("mpadded");
        s.jsset.add("mphantom");
        s.jsset.add("mprescripts");
        s.jsset.add("mroot");
        s.jsset.add("mrow");
        s.jsset.add("mspace");
        s.jsset.add("msqrt");
        s.jsset.add("mstyle");
        s.jsset.add("msub");
        s.jsset.add("msubsup");
        s.jsset.add("msup");
        s.jsset.add("mtable");
        s.jsset.add("mtd");
        s.jsset.add("mtext");
        s.jsset.add("mtr");
        s.jsset.add("munder");
        s.jsset.add("munderover");
        s.jsset.add("none");
        return s;
    })();
    svg_elements = (function(){
        var s = ρσ_set();
        s.jsset.add("a");
        s.jsset.add("animate");
        s.jsset.add("animateColor");
        s.jsset.add("animateMotion");
        s.jsset.add("animateTransform");
        s.jsset.add("clipPath");
        s.jsset.add("circle");
        s.jsset.add("defs");
        s.jsset.add("desc");
        s.jsset.add("ellipse");
        s.jsset.add("font-face");
        s.jsset.add("font-face-name");
        s.jsset.add("font-face-src");
        s.jsset.add("g");
        s.jsset.add("glyph");
        s.jsset.add("hkern");
        s.jsset.add("linearGradient");
        s.jsset.add("line");
        s.jsset.add("marker");
        s.jsset.add("metadata");
        s.jsset.add("missing-glyph");
        s.jsset.add("mpath");
        s.jsset.add("path");
        s.jsset.add("polygon");
        s.jsset.add("polyline");
        s.jsset.add("radialGradient");
        s.jsset.add("rect");
        s.jsset.add("set");
        s.jsset.add("stop");
        s.jsset.add("svg");
        s.jsset.add("switch");
        s.jsset.add("text");
        s.jsset.add("title");
        s.jsset.add("tspan");
        s.jsset.add("use");
        return s;
    })();
    html5_tags = html_elements.union(mathml_elements).union(svg_elements);
    function _makeelement() {
        var tag = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
        var kwargs = arguments[arguments.length-1];
        if (kwargs === null || typeof kwargs !== "object" || kwargs [ρσ_kwargs_symbol] !== true) kwargs = {};
        var args = Array.prototype.slice.call(arguments, 1);
        if (kwargs !== null && typeof kwargs === "object" && kwargs [ρσ_kwargs_symbol] === true) args.pop();
        var ans, vattr, val, attr, arg;
        ans = this.createElement(tag);
        var ρσ_Iter0 = ρσ_Iterable(kwargs);
        for (var ρσ_Index0 = 0; ρσ_Index0 < ρσ_Iter0.length; ρσ_Index0++) {
            attr = ρσ_Iter0[ρσ_Index0];
            vattr = str.replace(str.rstrip(attr, "_"), "_", "-");
            val = kwargs[(typeof attr === "number" && attr < 0) ? kwargs.length + attr : attr];
            if (callable(val)) {
                if (str.startswith(attr, "on")) {
                    attr = attr.slice(2);
                }
                ans.addEventListener(attr, val);
            } else if (val === true) {
                ans.setAttribute(vattr, vattr);
            } else if (typeof val === "string") {
                ans.setAttribute(vattr, val);
            }
        }
        var ρσ_Iter1 = ρσ_Iterable(args);
        for (var ρσ_Index1 = 0; ρσ_Index1 < ρσ_Iter1.length; ρσ_Index1++) {
            arg = ρσ_Iter1[ρσ_Index1];
            if (typeof arg === "string") {
                arg = this.createTextNode(arg);
            }
            ans.appendChild(arg);
        }
        return ans;
    };
    if (!_makeelement.__handles_kwarg_interpolation__) Object.defineProperties(_makeelement, {
        __handles_kwarg_interpolation__ : {value: true},
        __argnames__ : {value: ["tag"]}
    });

    function maker_for_document(document) {
        var E;
        E = _makeelement.bind(document);
        Object.defineProperties(E, (function() {
            var ρσ_Iter = ρσ_Iterable(html5_tags), ρσ_Result = {}, tag;
            for (var ρσ_Index = 0; ρσ_Index < ρσ_Iter.length; ρσ_Index++) {
                tag = ρσ_Iter[ρσ_Index];
                ρσ_Result[tag] = ((function(){
                    var ρσ_d = {};
                    ρσ_d["value"] = _makeelement.bind(document, tag);
                    return ρσ_d;
                }).call(this));
            }
            return ρσ_Result;
        })());
        return E;
    };
    if (!maker_for_document.__argnames__) Object.defineProperties(maker_for_document, {
        __argnames__ : {value: ["document"]}
    });

    if (typeof document === "undefined") {
        E = maker_for_document((function(){
            var ρσ_d = {};
            ρσ_d["createTextNode"] = (function() {
                var ρσ_anonfunc = function (value) {
                    return value;
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["value"]}
                });
                return ρσ_anonfunc;
            })();
            ρσ_d["createElement"] = (function() {
                var ρσ_anonfunc = function (name) {
                    return (function(){
                        var ρσ_d = {};
                        ρσ_d["name"] = name;
                        ρσ_d["children"] = ρσ_list_decorate([]);
                        ρσ_d["attributes"] = {};
                        ρσ_d["setAttribute"] = (function() {
                            var ρσ_anonfunc = function (name, val) {
                                (ρσ_expr_temp = this.attributes)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name] = val;
                            };
                            if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                                __argnames__ : {value: ["name", "val"]}
                            });
                            return ρσ_anonfunc;
                        })();
                        ρσ_d["appendChild"] = (function() {
                            var ρσ_anonfunc = function (child) {
                                this.children.push(child);
                            };
                            if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                                __argnames__ : {value: ["child"]}
                            });
                            return ρσ_anonfunc;
                        })();
                        return ρσ_d;
                    }).call(this);
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["name"]}
                });
                return ρσ_anonfunc;
            })();
            return ρσ_d;
        }).call(this));
    } else {
        E = maker_for_document(document);
    }
    ρσ_modules.elementmaker.html_elements = html_elements;
    ρσ_modules.elementmaker.mathml_elements = mathml_elements;
    ρσ_modules.elementmaker.svg_elements = svg_elements;
    ρσ_modules.elementmaker.html5_tags = html5_tags;
    ρσ_modules.elementmaker.E = E;
    ρσ_modules.elementmaker._makeelement = _makeelement;
    ρσ_modules.elementmaker.maker_for_document = maker_for_document;
})();

(function(){
    var Jed, plural_forms_parser, _gettext, _ngettext, has_prop;
    Jed = {};

  Jed.PF = {};

  Jed.PF.parse = function ( p ) {
    var plural_str = Jed.PF.extractPluralExpr( p );
    return Jed.PF.parser.parse.call(Jed.PF.parser, plural_str);
  };

  Jed.PF.compile = function ( p ) {
    // Handle trues and falses as 0 and 1
    function imply( val ) {
      return (val === true ? 1 : val ? val : 0);
    }

    var ast = Jed.PF.parse( p );
    return function ( n ) {
      return imply( Jed.PF.interpreter( ast )( n ) );
    };
  };

  Jed.PF.interpreter = function ( ast ) {
    return function ( n ) {
      var res;
      switch ( ast.type ) {
        case 'GROUP':
          return Jed.PF.interpreter( ast.expr )( n );
        case 'TERNARY':
          if ( Jed.PF.interpreter( ast.expr )( n ) ) {
            return Jed.PF.interpreter( ast.truthy )( n );
          }
          return Jed.PF.interpreter( ast.falsey )( n );
        case 'OR':
          return Jed.PF.interpreter( ast.left )( n ) || Jed.PF.interpreter( ast.right )( n );
        case 'AND':
          return Jed.PF.interpreter( ast.left )( n ) && Jed.PF.interpreter( ast.right )( n );
        case 'LT':
          return Jed.PF.interpreter( ast.left )( n ) < Jed.PF.interpreter( ast.right )( n );
        case 'GT':
          return Jed.PF.interpreter( ast.left )( n ) > Jed.PF.interpreter( ast.right )( n );
        case 'LTE':
          return Jed.PF.interpreter( ast.left )( n ) <= Jed.PF.interpreter( ast.right )( n );
        case 'GTE':
          return Jed.PF.interpreter( ast.left )( n ) >= Jed.PF.interpreter( ast.right )( n );
        case 'EQ':
          return Jed.PF.interpreter( ast.left )( n ) == Jed.PF.interpreter( ast.right )( n );
        case 'NEQ':
          return Jed.PF.interpreter( ast.left )( n ) != Jed.PF.interpreter( ast.right )( n );
        case 'MOD':
          return Jed.PF.interpreter( ast.left )( n ) % Jed.PF.interpreter( ast.right )( n );
        case 'VAR':
          return n;
        case 'NUM':
          return ast.val;
        default:
          throw new Error("Invalid Token found.");
      }
    };
  };

  Jed.PF.extractPluralExpr = function ( p ) {
    // trim first
    p = p.replace(/^\s\s*/, '').replace(/\s\s*$/, '');

    if (! /;\s*$/.test(p)) {
      p = p.concat(';');
    }

    var nplurals_re = /nplurals\=(\d+);/,
        plural_re = /plural\=(.*);/,
        nplurals_matches = p.match( nplurals_re ),
        res = {},
        plural_matches;

    // Find the nplurals number
    if ( nplurals_matches.length > 1 ) {
      res.nplurals = nplurals_matches[1];
    }
    else {
      throw new Error('nplurals not found in plural_forms string: ' + p );
    }

    // remove that data to get to the formula
    p = p.replace( nplurals_re, "" );
    plural_matches = p.match( plural_re );

    if (!( plural_matches && plural_matches.length > 1 ) ) {
      throw new Error('`plural` expression not found: ' + p);
    }
    return plural_matches[ 1 ];
  };

  /* Jison generated parser */
  Jed.PF.parser = (function(){

var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"e":4,"EOF":5,"?":6,":":7,"||":8,"&&":9,"<":10,"<=":11,">":12,">=":13,"!=":14,"==":15,"%":16,"(":17,")":18,"n":19,"NUMBER":20,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"?",7:":",8:"||",9:"&&",10:"<",11:"<=",12:">",13:">=",14:"!=",15:"==",16:"%",17:"(",18:")",19:"n",20:"NUMBER"},
productions_: [0,[3,2],[4,5],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,1],[4,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return { type : 'GROUP', expr: $$[$0-1] };
case 2:this.$ = { type: 'TERNARY', expr: $$[$0-4], truthy : $$[$0-2], falsey: $$[$0] };
break;
case 3:this.$ = { type: "OR", left: $$[$0-2], right: $$[$0] };
break;
case 4:this.$ = { type: "AND", left: $$[$0-2], right: $$[$0] };
break;
case 5:this.$ = { type: 'LT', left: $$[$0-2], right: $$[$0] };
break;
case 6:this.$ = { type: 'LTE', left: $$[$0-2], right: $$[$0] };
break;
case 7:this.$ = { type: 'GT', left: $$[$0-2], right: $$[$0] };
break;
case 8:this.$ = { type: 'GTE', left: $$[$0-2], right: $$[$0] };
break;
case 9:this.$ = { type: 'NEQ', left: $$[$0-2], right: $$[$0] };
break;
case 10:this.$ = { type: 'EQ', left: $$[$0-2], right: $$[$0] };
break;
case 11:this.$ = { type: 'MOD', left: $$[$0-2], right: $$[$0] };
break;
case 12:this.$ = { type: 'GROUP', expr: $$[$0-1] };
break;
case 13:this.$ = { type: 'VAR' };
break;
case 14:this.$ = { type: 'NUM', val: Number(yytext) };
break;
}
},
table: [{3:1,4:2,17:[1,3],19:[1,4],20:[1,5]},{1:[3]},{5:[1,6],6:[1,7],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16]},{4:17,17:[1,3],19:[1,4],20:[1,5]},{5:[2,13],6:[2,13],7:[2,13],8:[2,13],9:[2,13],10:[2,13],11:[2,13],12:[2,13],13:[2,13],14:[2,13],15:[2,13],16:[2,13],18:[2,13]},{5:[2,14],6:[2,14],7:[2,14],8:[2,14],9:[2,14],10:[2,14],11:[2,14],12:[2,14],13:[2,14],14:[2,14],15:[2,14],16:[2,14],18:[2,14]},{1:[2,1]},{4:18,17:[1,3],19:[1,4],20:[1,5]},{4:19,17:[1,3],19:[1,4],20:[1,5]},{4:20,17:[1,3],19:[1,4],20:[1,5]},{4:21,17:[1,3],19:[1,4],20:[1,5]},{4:22,17:[1,3],19:[1,4],20:[1,5]},{4:23,17:[1,3],19:[1,4],20:[1,5]},{4:24,17:[1,3],19:[1,4],20:[1,5]},{4:25,17:[1,3],19:[1,4],20:[1,5]},{4:26,17:[1,3],19:[1,4],20:[1,5]},{4:27,17:[1,3],19:[1,4],20:[1,5]},{6:[1,7],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[1,28]},{6:[1,7],7:[1,29],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16]},{5:[2,3],6:[2,3],7:[2,3],8:[2,3],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,3]},{5:[2,4],6:[2,4],7:[2,4],8:[2,4],9:[2,4],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,4]},{5:[2,5],6:[2,5],7:[2,5],8:[2,5],9:[2,5],10:[2,5],11:[2,5],12:[2,5],13:[2,5],14:[2,5],15:[2,5],16:[1,16],18:[2,5]},{5:[2,6],6:[2,6],7:[2,6],8:[2,6],9:[2,6],10:[2,6],11:[2,6],12:[2,6],13:[2,6],14:[2,6],15:[2,6],16:[1,16],18:[2,6]},{5:[2,7],6:[2,7],7:[2,7],8:[2,7],9:[2,7],10:[2,7],11:[2,7],12:[2,7],13:[2,7],14:[2,7],15:[2,7],16:[1,16],18:[2,7]},{5:[2,8],6:[2,8],7:[2,8],8:[2,8],9:[2,8],10:[2,8],11:[2,8],12:[2,8],13:[2,8],14:[2,8],15:[2,8],16:[1,16],18:[2,8]},{5:[2,9],6:[2,9],7:[2,9],8:[2,9],9:[2,9],10:[2,9],11:[2,9],12:[2,9],13:[2,9],14:[2,9],15:[2,9],16:[1,16],18:[2,9]},{5:[2,10],6:[2,10],7:[2,10],8:[2,10],9:[2,10],10:[2,10],11:[2,10],12:[2,10],13:[2,10],14:[2,10],15:[2,10],16:[1,16],18:[2,10]},{5:[2,11],6:[2,11],7:[2,11],8:[2,11],9:[2,11],10:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[2,11],15:[2,11],16:[2,11],18:[2,11]},{5:[2,12],6:[2,12],7:[2,12],8:[2,12],9:[2,12],10:[2,12],11:[2,12],12:[2,12],13:[2,12],14:[2,12],15:[2,12],16:[2,12],18:[2,12]},{4:30,17:[1,3],19:[1,4],20:[1,5]},{5:[2,2],6:[1,7],7:[2,2],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,2]}],
defaultActions: {6:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected, errStr;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || symbol === undefined)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        _handle_error:
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                errStr = '';
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + this.terminals_[symbol]+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state === 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};/* Jison generated lexer */
var lexer = (function(){

var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            match = this._input.match(this.rules[rules[i]]);
            if (match) {
                lines = match[0].match(/\n.*/g);
                if (lines) this.yylineno += lines.length;
                this.yylloc = {first_line: this.yylloc.last_line,
                               last_line: this.yylineno+1,
                               first_column: this.yylloc.last_column,
                               last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length};
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                this._more = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, rules[i],this.conditionStack[this.conditionStack.length-1]);
                if (token) return token;
                else return;
            }
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 20
break;
case 2:return 19
break;
case 3:return 8
break;
case 4:return 9
break;
case 5:return 6
break;
case 6:return 7
break;
case 7:return 11
break;
case 8:return 13
break;
case 9:return 10
break;
case 10:return 12
break;
case 11:return 14
break;
case 12:return 15
break;
case 13:return 16
break;
case 14:return 17
break;
case 15:return 18
break;
case 16:return 5
break;
case 17:return 'INVALID'
break;
}
};
lexer.rules = [/^\s+/,/^[0-9]+(\.[0-9]+)?\b/,/^n\b/,/^\|\|/,/^&&/,/^\?/,/^:/,/^<=/,/^>=/,/^</,/^>/,/^!=/,/^==/,/^%/,/^\(/,/^\)/,/^$/,/^./];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"inclusive":true}};return lexer;})()
parser.lexer = lexer;
return parser;
})();
;
    plural_forms_parser = Jed.PF;
    function _get_plural_forms_function(plural_forms_string) {
        return plural_forms_parser.compile(plural_forms_string || "nplurals=2; plural=(n != 1);");
    };
    if (!_get_plural_forms_function.__argnames__) Object.defineProperties(_get_plural_forms_function, {
        __argnames__ : {value: ["plural_forms_string"]}
    });

    _gettext = (function() {
        var ρσ_anonfunc = function (text) {
            return text;
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["text"]}
        });
        return ρσ_anonfunc;
    })();
    _ngettext = (function() {
        var ρσ_anonfunc = function (text, plural, n) {
            return (n === 1) ? text : plural;
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["text", "plural", "n"]}
        });
        return ρσ_anonfunc;
    })();
    function gettext(text) {
        return _gettext(text);
    };
    if (!gettext.__argnames__) Object.defineProperties(gettext, {
        __argnames__ : {value: ["text"]}
    });

    function ngettext(text, plural, n) {
        return _ngettext(text, plural, n);
    };
    if (!ngettext.__argnames__) Object.defineProperties(ngettext, {
        __argnames__ : {value: ["text", "plural", "n"]}
    });

    function install(translation_data) {
        var t, func;
        t = new Translations(translation_data);
        t.install();
        var ρσ_Iter2 = ρσ_Iterable(register_callback.install_callbacks);
        for (var ρσ_Index2 = 0; ρσ_Index2 < ρσ_Iter2.length; ρσ_Index2++) {
            func = ρσ_Iter2[ρσ_Index2];
            try {
                func(t);
            } catch (ρσ_Exception) {
                ρσ_last_exception = ρσ_Exception;
                {
                }
            }
        }
        return t;
    };
    if (!install.__argnames__) Object.defineProperties(install, {
        __argnames__ : {value: ["translation_data"]}
    });

    has_prop = Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty);
    function register_callback(func) {
        register_callback.install_callbacks.push(func);
    };
    if (!register_callback.__argnames__) Object.defineProperties(register_callback, {
        __argnames__ : {value: ["func"]}
    });

    register_callback.install_callbacks = [];
    function Translations() {
        if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
        Translations.prototype.__init__.apply(this, arguments);
    }
    Translations.prototype.__init__ = function __init__(translation_data) {
        var self = this;
        var func;
        translation_data = translation_data || {};
        func = _get_plural_forms_function(translation_data["plural_forms"]);
        self.translations = ρσ_list_decorate([ ρσ_list_decorate([ translation_data, func ]) ]);
        self.language = translation_data["language"];
    };
    if (!Translations.prototype.__init__.__argnames__) Object.defineProperties(Translations.prototype.__init__, {
        __argnames__ : {value: ["translation_data"]}
    });
    Translations.__argnames__ = Translations.prototype.__init__.__argnames__;
    Translations.__handles_kwarg_interpolation__ = Translations.prototype.__init__.__handles_kwarg_interpolation__;
    Translations.prototype.add_fallback = function add_fallback(fallback) {
        var self = this;
        var func;
        fallback = fallback || {};
        func = _get_plural_forms_function(fallback["plural_forms"]);
        self.translations.push(ρσ_list_decorate([ fallback, func ]));
    };
    if (!Translations.prototype.add_fallback.__argnames__) Object.defineProperties(Translations.prototype.add_fallback, {
        __argnames__ : {value: ["fallback"]}
    });
    Translations.prototype.gettext = function gettext(text) {
        var self = this;
        var m, t;
        var ρσ_Iter3 = ρσ_Iterable(self.translations);
        for (var ρσ_Index3 = 0; ρσ_Index3 < ρσ_Iter3.length; ρσ_Index3++) {
            t = ρσ_Iter3[ρσ_Index3];
            m = t[0]["entries"];
            if (has_prop(m, text)) {
                return m[(typeof text === "number" && text < 0) ? m.length + text : text][0];
            }
        }
        return text;
    };
    if (!Translations.prototype.gettext.__argnames__) Object.defineProperties(Translations.prototype.gettext, {
        __argnames__ : {value: ["text"]}
    });
    Translations.prototype.ngettext = function ngettext(text, plural, n) {
        var self = this;
        var m, idx, t;
        var ρσ_Iter4 = ρσ_Iterable(self.translations);
        for (var ρσ_Index4 = 0; ρσ_Index4 < ρσ_Iter4.length; ρσ_Index4++) {
            t = ρσ_Iter4[ρσ_Index4];
            m = t[0]["entries"];
            if (has_prop(m, text)) {
                idx = t[1](n);
                return (ρσ_expr_temp = m[(typeof text === "number" && text < 0) ? m.length + text : text])[(typeof idx === "number" && idx < 0) ? ρσ_expr_temp.length + idx : idx] || ((n === 1) ? text : plural);
            }
        }
        return (n === 1) ? text : plural;
    };
    if (!Translations.prototype.ngettext.__argnames__) Object.defineProperties(Translations.prototype.ngettext, {
        __argnames__ : {value: ["text", "plural", "n"]}
    });
    Translations.prototype.install = function install() {
        var self = this;
        _gettext = function () {
            return self.gettext.apply(self, arguments);
        };
        _ngettext = function () {
            return self.ngettext.apply(self, arguments);
        };
    };
    if (!Translations.prototype.install.__argnames__) Object.defineProperties(Translations.prototype.install, {
        __argnames__ : {value: []}
    });
    Translations.prototype.__repr__ = function __repr__ () {
                return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
    };
    Translations.prototype.__str__ = function __str__ () {
        return this.__repr__();
    };
    Object.defineProperty(Translations.prototype, "__bases__", {value: []});

    ρσ_modules.gettext.Jed = Jed;
    ρσ_modules.gettext.plural_forms_parser = plural_forms_parser;
    ρσ_modules.gettext._gettext = _gettext;
    ρσ_modules.gettext._ngettext = _ngettext;
    ρσ_modules.gettext.has_prop = has_prop;
    ρσ_modules.gettext._get_plural_forms_function = _get_plural_forms_function;
    ρσ_modules.gettext.gettext = gettext;
    ρσ_modules.gettext.ngettext = ngettext;
    ρσ_modules.gettext.install = install;
    ρσ_modules.gettext.register_callback = register_callback;
    ρσ_modules.gettext.Translations = Translations;
})();
var tag, url_base, address, cookie, jappy_server_version, examples, special;
var re = ρσ_modules.re;

var E = ρσ_modules.elementmaker.E;

var install = ρσ_modules.gettext.install;
var _ = ρσ_modules.gettext.gettext;

tag = this;
tag._ = _;
tag.lang = (navigator.language || navigator.userLanguage).slice(0, 2);
url_base = location.protocol;
address = url_base + "//" + location.host + "/dav";
if (location.hash) {
    window.fs = new WebDAV.Fs(address);
}
cookie = re.search("Jappy-Server-Version=(.*);?", document.cookie);
if (cookie) {
    jappy_server_version = cookie.groups();
}
require(ρσ_list_decorate([ "text!../jappy.json" ]), (function() {
    var ρσ_anonfunc = function (raw_translation_data) {
        var translation_data;
        translation_data = JSON.parse(raw_translation_data);
        if ((translation_data["language"] === tag.lang || typeof translation_data["language"] === "object" && ρσ_equals(translation_data["language"], tag.lang))) {
            install(translation_data);
            riot.update();
        }
    };
    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
        __argnames__ : {value: ["raw_translation_data"]}
    });
    return ρσ_anonfunc;
})());
examples = ρσ_list_decorate([ "welcome.pyj", "memorize.pyj", "mandala.pyj", "input.pyj", "repl.pyj", "unicode.pyj" ]);
special = ρσ_list_decorate([ "template.html" ]);
window.state = "clean";
tag.fetching_files = false;
tag.dir_created = false;
prefetch_files();
function filter_latest(files) {
    files.sort((function() {
        var ρσ_anonfunc = function (a, b) {
            if (a.mtime > b.mtime) {
                return -1;
            } else {
                return 1;
            }
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["a", "b"]}
        });
        return ρσ_anonfunc;
    })());
    return files.reduce((function() {
        var ρσ_anonfunc = function (result, item) {
            var prev;
            prev = result[0];
            if ((item.name[0] === "." || typeof item.name[0] === "object" && ρσ_equals(item.name[0], "."))) {
                return result;
            } else if (!item.name.endswith(ρσ_list_decorate([ ".pyj", ".md", ".html", ".css", ".js", ".svg", ".htm" ]))) {
                return result;
            } else if (item.type !== "file") {
                return result;
            } else if (prev === undefined) {
                return result.concat(item);
            } else if (Math.abs(item.mtime.getTime() - prev.mtime.getTime()) < 500) {
                return result.concat(item);
            } else {
                " We filter out those that don't have the same mtime\n                as the first entry.";
                return result;
            }
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["result", "item"]}
        });
        return ρσ_anonfunc;
    })(), ρσ_list_decorate([]));
};
if (!filter_latest.__argnames__) Object.defineProperties(filter_latest, {
    __argnames__ : {value: ["files"]}
});

function collaboration_triggered() {
    var channel;
    tag.workspace_palette.popDown();
    channel = prompt(_("Join collaboration channel"), location.hash.slice(1));
    location.hash = channel || "";
};

event_bus.on("collaboration-dialog", collaboration_triggered);
function prefetch_files() {
    var url_base, address, path;
    if (tag.fetching_files) {
        return;
    }
    tag.fetching_files = true;
    if (location.hash) {
        url_base = location.protocol;
        address = url_base + "//" + location.host + "/dav";
        if (window.fs === undefined) {
            window.fs = new WebDAV.Fs(address);
        }
        path = location.hash.slice(1);
        function got_files(files) {
            tag.fetching_files = false;
            window.server_files = files;
            event_bus.trigger("file-list-update");
        };
        if (!got_files.__argnames__) Object.defineProperties(got_files, {
            __argnames__ : {value: ["files"]}
        });

        fs.dir("/" + path).children(got_files);
    }
};

function restore_last_session() {
    var path, recent_files, item;
    path = location.hash.slice(1);
    if (window.server_files !== undefined) {
        recent_files = filter_latest(window.server_files);
        path = location.hash.slice(1);
        if (len(recent_files) > 0) {
            makeToast("<b>#" + path + "</b><br><br>" + _("Restoring saved session from file system.") + "<br><i>" + str(len(recent_files)) + _(" files.") + "</i>");
        } else {
            event_bus.trigger("new-from-data", "");
            makeToast("<b>#" + path + "</b><br><br><i>" + _("Welcome") + "</i> " + _("new project!"));
        }
        var ρσ_Iter5 = ρσ_Iterable(reversed(recent_files));
        for (var ρσ_Index5 = 0; ρσ_Index5 < ρσ_Iter5.length; ρσ_Index5++) {
            item = ρσ_Iter5[ρσ_Index5];
            load_file("/" + path + "/" + item.name, false);
        }
    } else {
        event_bus.one("file-list-update", restore_last_session);
        prefetch_files();
    }
};

event_bus.on("restore-last-session", restore_last_session);
function load_file_ev(ev) {
    var target_file, path;
    tag.workspace_palette.popDown();
    target_file = ev.target.getAttribute("data-uri");
    path = location.hash.slice(1);
    load_file("/" + path + "/" + target_file, true);
};
if (!load_file_ev.__argnames__) Object.defineProperties(load_file_ev, {
    __argnames__ : {value: ["ev"]}
});

function load_file() {
    var url = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
    var overwrite = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? load_file.__defaults__.overwrite : arguments[1];
    var ρσ_kwargs_obj = arguments[arguments.length-1];
    if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "overwrite")){
        overwrite = ρσ_kwargs_obj.overwrite;
    }
    var path, target_file;
    if (window.fs === undefined) {
        window.fs = new WebDAV.Fs(address);
    }
    if (tag.workspace_palette) {
        tag.workspace_palette.popDown();
    }
    path = location.hash.slice(1);
    target_file = (ρσ_expr_temp = url.split("/"))[ρσ_expr_temp.length-1];
    fs.file(url).read((function() {
        var ρσ_anonfunc = function (data, status) {
            if (status === 200) {
                event_bus.trigger("new-from-data", data, target_file, overwrite);
            } else {
            }
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["data", "status"]}
        });
        return ρσ_anonfunc;
    })());
};
if (!load_file.__defaults__) Object.defineProperties(load_file, {
    __defaults__ : {value: {overwrite:false}},
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["url", "overwrite"]}
});

function update_workspace_menu() {
    var path;
    if (window.fs === undefined) {
        return;
    }
    path = location.hash.slice(1);
    function list_files(found_files) {
        var items, palette, container, row, item, span, editor_load, text, file, browse_button, lastrow;
        window.server_files = found_files;
        found_files.sort((function() {
            var ρσ_anonfunc = function (a, b) {
                if (a.mtime > b.mtime) {
                    return -1;
                } else {
                    return 1;
                }
            };
            if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                __argnames__ : {value: ["a", "b"]}
            });
            return ρσ_anonfunc;
        })());
        items = ρσ_list_decorate([]);
        if (tag.workspace_palette) {
            palette = tag.workspace_palette.getPalette();
            container = palette.getElementsByClassName("container")[0];
            container.innerHTML = "";
        }
        var ρσ_Iter6 = ρσ_Iterable(found_files);
        for (var ρσ_Index6 = 0; ρσ_Index6 < ρσ_Iter6.length; ρσ_Index6++) {
            file = ρσ_Iter6[ρσ_Index6];
            if ((file.name[0] === "." || typeof file.name[0] === "object" && ρσ_equals(file.name[0], "."))) {
                continue;
            }
            row = document.createElement("div");
            row.classList.add("menu");
            item = document.createElement("button");
            item.classList.add("icon");
            span = document.createElement("span");
            editor_load = true;
            if ((file.type === "dir" || typeof file.type === "object" && ρσ_equals(file.type, "dir"))) {
                span.classList.add("folder");
                editor_load = false;
                item.onclick = (function() {
                    var ρσ_anonfunc = function (ev) {
                        var target_file;
                        target_file = ev.target.getAttribute("data-uri");
                        location.href = "dav://" + location.host + "/dav/" + path + "/" + target_file;
                    };
                    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                        __argnames__ : {value: ["ev"]}
                    });
                    return ρσ_anonfunc;
                })();
            } else if (file.name.endswith(".pyj")) {
                span.classList.add("pyj");
            } else if (file.name.endswith(".html")) {
                span.classList.add("html");
            } else if (file.name.endswith(ρσ_list_decorate([ ".png", ".jpg", ".gif" ]))) {
                span.classList.add("image");
                editor_load = false;
                item.onclick = (function() {
                    var ρσ_anonfunc = function (ev) {
                        var target_file, url;
                        target_file = ev.target.getAttribute("data-uri");
                        url = location.protocol + "//" + location.host + "/" + "workspace/" + path + "/" + target_file;
                        event_bus.trigger("url-open", url);
                    };
                    if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                        __argnames__ : {value: ["ev"]}
                    });
                    return ρσ_anonfunc;
                })();
            } else {
                span.classList.add("document");
            }
            span.onclick = function () {
                item.click();
            };
            item.setAttribute("data-uri", file.name);
            text = document.createTextNode(str(file.name));
            item.appendChild(span);
            item.appendChild(text);
            if (editor_load) {
                item.addEventListener("click", load_file_ev);
            }
            row.appendChild(item);
            items.append(row);
        }
        items.append(ρσ_interpolate_kwargs.call(E, E.hr, [ρσ_desugar_kwargs({class_: "header-separator"})]));
        browse_button = ρσ_interpolate_kwargs.call(E, E.button, [ρσ_interpolate_kwargs.call(E, E.span, [ρσ_desugar_kwargs({class_: "folder"})]), _("Browse...")].concat([ρσ_desugar_kwargs({class_: "icon"})]));
        browse_button.onclick = function () {
            tag.workspace_palette.popDown();
            location.href = "dav://" + location.host + "/dav/" + path;
        };
        lastrow = ρσ_interpolate_kwargs.call(E, E.div, [browse_button].concat([ρσ_desugar_kwargs({class_: "menu"})]));
        items.append(lastrow);
        if (tag.workspace_palette) {
            tag.workspace_palette.setContent(items);
        }
    };
    if (!list_files.__argnames__) Object.defineProperties(list_files, {
        __argnames__ : {value: ["found_files"]}
    });

    function try_make_dir(body, existed_previously) {
        fs.dir("/" + path).children(list_files);
    };
    if (!try_make_dir.__argnames__) Object.defineProperties(try_make_dir, {
        __argnames__ : {value: ["body", "existed_previously"]}
    });

    if (window.server_files === undefined) {
        prefetch_files();
    }
    if (tag.dir_created !== path) {
        tag.dir_created = path;
        fs.dir("/" + path).mkdir(try_make_dir);
    } else {
        fs.dir("/" + path).children(list_files);
    }
};

tag.update_workspace_menu = update_workspace_menu;
event_bus.on("file-list-update", update_workspace_menu);
event_bus.on("update-workspace-menu", update_workspace_menu);
event_bus.on("file-create", update_workspace_menu);
event_bus.on("file-delete", update_workspace_menu);
event_bus.on("file-rename", update_workspace_menu);
function init() {
    this.refs.runbutton.onclick = function () {
        window.state = "run";
        tag.update();
        event_bus.trigger("run-code");
    };
    this.refs.startbutton.onclick = function () {
        window.state = "run";
        tag.update();
        event_bus.trigger("run-fullscreen");
    };
    this.refs.fullbutton.onclick = function () {
        window.state = "run";
        tag.update();
        event_bus.trigger("run-fullscreen", false);
    };
    this.refs.breakbutton.onclick = function () {
        window.state = "stopped";
        tag.update();
        event_bus.trigger("break-code");
    };
    this.refs.erasebutton.onclick = function () {
        window.state = "clean";
        event_bus.trigger("traybutton-close", false);
        tag.update();
        event_bus.trigger("clear-output");
    };
    function activity_ready(activity) {
        tag.refs.stopbutton.onclick = function () {
            event_bus.trigger("activity-save", activity);
        };
    };
    if (!activity_ready.__argnames__) Object.defineProperties(activity_ready, {
        __argnames__ : {value: ["activity"]}
    });

    event_bus.on("activity-ready", activity_ready);
    function enable_standalone() {
        tag.refs.stopbutton.onclick = function () {
            var base_url;
            event_bus.trigger("activity-save", activity);
            base_url = location.protocol + "//" + location.host + "/";
            fetch(base_url + "shutdown");
        };
    };

    event_bus.on("enable-standalone", enable_standalone);
    if (window.RapydScript !== undefined) {
        enable_run();
    }
    require(ρσ_list_decorate([ "sugar-web/graphics/palette", "text!../jappy.json" ]), (function() {
        var ρσ_anonfunc = function (palette) {
            var items, row, item, span, text, i;
            tag.example_palette = new palette.Palette(tag.refs.examplebutton, _("Load an example"));
            items = ρσ_list_decorate([]);
            var ρσ_Iter7 = ρσ_Iterable(examples);
            for (var ρσ_Index7 = 0; ρσ_Index7 < ρσ_Iter7.length; ρσ_Index7++) {
                i = ρσ_Iter7[ρσ_Index7];
                row = document.createElement("div");
                row.classList.add("menu");
                item = document.createElement("button");
                item.classList.add("icon");
                span = document.createElement("span");
                span.classList.add("pyj");
                text = document.createTextNode(i);
                item.appendChild(span);
                item.appendChild(text);
                function trigger_load(el) {
                    return function () {
                        tag.example_palette.popDown();
                        event_bus.trigger("example-load", el);
                    };
                };
                if (!trigger_load.__argnames__) Object.defineProperties(trigger_load, {
                    __argnames__ : {value: ["el"]}
                });

                item.onclick = trigger_load(i);
                row.appendChild(item);
                items.append(row);
            }
            items.append(ρσ_interpolate_kwargs.call(E, E.hr, [ρσ_desugar_kwargs({class_: "header-separator"})]));
            var ρσ_Iter8 = ρσ_Iterable(special);
            for (var ρσ_Index8 = 0; ρσ_Index8 < ρσ_Iter8.length; ρσ_Index8++) {
                i = ρσ_Iter8[ρσ_Index8];
                row = document.createElement("div");
                row.classList.add("menu");
                item = document.createElement("button");
                item.classList.add("icon");
                item.classList.add("special_file");
                span = document.createElement("span");
                if (i.endswith(".pyj")) {
                    span.classList.add("pyj");
                } else if (i.endswith(".html")) {
                    span.classList.add("html");
                }
                text = document.createTextNode(i);
                item.appendChild(span);
                item.appendChild(text);
                item.setAttribute("data-uri", i);
                function trigger_load(el) {
                    return (function() {
                        var ρσ_anonfunc = function (ev) {
                            var target_file, path, url;
                            target_file = el;
                            path = location.hash.slice(1);
                            url = location.protocol + "//" + location.host + "/" + "/" + target_file;
                            tag.example_palette.popDown();
                            load_file(url, true);
                        };
                        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                            __argnames__ : {value: ["ev"]}
                        });
                        return ρσ_anonfunc;
                    })();
                };
                if (!trigger_load.__argnames__) Object.defineProperties(trigger_load, {
                    __argnames__ : {value: ["el"]}
                });

                item.onclick = trigger_load(i);
                row.appendChild(item);
                items.append(row);
            }
            tag.example_palette.setContent(items);
            tag.workspace_palette = new palette.Palette(tag.refs.workspacebutton, _("Workspace"));
            update_workspace_menu();
            tag.export_palette = new palette.Palette(tag.refs.exportbutton, _("Export"));
            function as_zip() {
                if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
                as_zip.prototype.__init__.apply(this, arguments);
            }
            as_zip.prototype.__init__ = function __init__ () {
                            };
            as_zip.prototype.__repr__ = function __repr__ () {
                                return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
            };
            as_zip.prototype.__str__ = function __str__ () {
                return this.__repr__();
            };
            Object.defineProperty(as_zip.prototype, "__bases__", {value: []});
            as_zip.prototype.label = _("Export as zipped HTML");
            as_zip.prototype.icon = "html";
            as_zip.prototype.trigger = "save-as-zip";

            function import_file() {
                if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
                import_file.prototype.__init__.apply(this, arguments);
            }
            import_file.prototype.__init__ = function __init__ () {
                            };
            import_file.prototype.__repr__ = function __repr__ () {
                                return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
            };
            import_file.prototype.__str__ = function __str__ () {
                return this.__repr__();
            };
            Object.defineProperty(import_file.prototype, "__bases__", {value: []});
            import_file.prototype.label = _("Import");
            import_file.prototype.icon = "zip";
            import_file.prototype.trigger = "import-file";

            function shared_folder() {
                if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
                shared_folder.prototype.__init__.apply(this, arguments);
            }
            shared_folder.prototype.__init__ = function __init__ () {
                            };
            shared_folder.prototype.__repr__ = function __repr__ () {
                                return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
            };
            shared_folder.prototype.__str__ = function __str__ () {
                return this.__repr__();
            };
            Object.defineProperty(shared_folder.prototype, "__bases__", {value: []});
            shared_folder.prototype.label = _("Folder collaboration");
            shared_folder.prototype.icon = "folder";
            shared_folder.prototype.trigger = "collaboration-dialog";

            items = ρσ_list_decorate([]);
            var ρσ_Iter9 = ρσ_Iterable(ρσ_list_decorate([ new as_zip, new import_file, (jappy_server_version) ? new shared_folder : null ]));
            for (var ρσ_Index9 = 0; ρσ_Index9 < ρσ_Iter9.length; ρσ_Index9++) {
                i = ρσ_Iter9[ρσ_Index9];
                if (i) {
                    row = document.createElement("div");
                    row.classList.add("menu");
                    item = document.createElement("button");
                    item.classList.add("icon");
                    span = document.createElement("span");
                    span.classList.add(i.icon);
                    text = document.createTextNode(i.label);
                    item.appendChild(span);
                    item.appendChild(text);
                    function trigger_export(event) {
                        return function () {
                            tag.export_palette.popDown();
                            event_bus.trigger(event);
                        };
                    };
                    if (!trigger_export.__argnames__) Object.defineProperties(trigger_export, {
                        __argnames__ : {value: ["event"]}
                    });

                    item.onclick = trigger_export(i.trigger);
                    row.appendChild(item);
                    items.append(row);
                }
            }
            tag.export_palette.setContent(items);
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["palette"]}
        });
        return ρσ_anonfunc;
    })());
};

this.on("mount", init);
});
