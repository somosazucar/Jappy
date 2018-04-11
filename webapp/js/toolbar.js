riot.tag2('tool-bar', '<div id="main-toolbar" class="toolbar"> <button class="toolbutton" id="activity-button" title="{_(\'Jappy Activity\')}"></button> <hr> <button class="toolbutton" id="example-button" title="{_(\'Load an example\')}" ref="examplebutton"></button> <button show="{location.hash}" class="toolbutton" id="workspace-button" title="{_(\'Workspace\')}" ref="workspacebutton"></button> <hr> <button class="toolbutton {colored: window.state!=\'run\'}" id="run-button" title="{_(\'Execute\')}" ref="runbutton"></button> <button class="toolbutton {colored: window.state==\'run\'}" id="break-button" title="{_(\'Break execution\')}" ref="breakbutton"></button> <button class="toolbutton {colored: window.state!=\'clean\'}" id="erase-button" title="{_(\'Clear the canvas\')}" ref="erasebutton"></button> <button class="toolbutton {hidden: window.state==\'run\'}" id="start-button" title="{_(\'Start fullscreen\')}" ref="startbutton"></button> <button class="toolbutton {hidden: window.state==\'stopped\'} {hidden: window.state==\'clean\'}" id="full-button" title="{_(\'View fullscreen\')}" ref="fullbutton"></button> <button class="toolbutton" id="export-button" title="{_(\'Export or publish\')}" ref="exportbutton"></button> <button class="toolbutton pull-right" id="stop-button" title="{_(\'Stop\')}" ref="stopbutton"></button> </div>', 'tool-bar #main-toolbar #run-button,[data-is="tool-bar"] #main-toolbar #run-button{ background-image: url(icons/run_bw.svg); } tool-bar #main-toolbar #run-button.colored,[data-is="tool-bar"] #main-toolbar #run-button.colored{ background-image: url(icons/run_color.svg); } tool-bar #main-toolbar #break-button,[data-is="tool-bar"] #main-toolbar #break-button{ background-image: url(icons/stopit_bw.svg); } tool-bar #main-toolbar #break-button.colored,[data-is="tool-bar"] #main-toolbar #break-button.colored{ background-image: url(icons/stopit_color.svg); } tool-bar #main-toolbar #erase-button,[data-is="tool-bar"] #main-toolbar #erase-button{ background-image: url(icons/eraser_bw.svg); } tool-bar #main-toolbar #erase-button.colored,[data-is="tool-bar"] #main-toolbar #erase-button.colored{ background-image: url(icons/eraser_color.svg); } tool-bar #main-toolbar #example-button,[data-is="tool-bar"] #main-toolbar #example-button{ background-image: url(icons/load-example.svg); } tool-bar #main-toolbar #workspace-button,[data-is="tool-bar"] #main-toolbar #workspace-button{ background-image: url(icons/user-documents.svg); } tool-bar #main-toolbar #start-button,[data-is="tool-bar"] #main-toolbar #start-button{ background-image: url(icons/activity-start.svg); } tool-bar #main-toolbar #full-button,[data-is="tool-bar"] #main-toolbar #full-button{ background-image: url(icons/view-fullscreen.svg); } tool-bar #main-toolbar #export-button,[data-is="tool-bar"] #main-toolbar #export-button{ background-image: url(icons/export-or-publish.svg); } tool-bar .hidden,[data-is="tool-bar"] .hidden{ display: none !important; }', '', function(opts) {
var ρσ_modules = {};
ρσ_modules.elementmaker = {};
ρσ_modules.gettext = {};

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
    var Jed, plural_forms_parser, _gettext, _ngettext, has_prop, empty_translation_data;
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
    empty_translation_data = (function(){
        var ρσ_d = {};
        ρσ_d["entries"] = {};
        return ρσ_d;
    }).call(this);
    function Translations() {
        if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
        Translations.prototype.__init__.apply(this, arguments);
    }
    Translations.prototype.__init__ = function __init__(translation_data) {
        var self = this;
        var func;
        translation_data = translation_data || empty_translation_data;
        func = _get_plural_forms_function(translation_data.plural_forms);
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
        fallback = fallback || empty_translation_data;
        func = _get_plural_forms_function(fallback.plural_forms);
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
            m = t[0].entries;
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
            m = t[0].entries;
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
    ρσ_modules.gettext.empty_translation_data = empty_translation_data;
    ρσ_modules.gettext._get_plural_forms_function = _get_plural_forms_function;
    ρσ_modules.gettext.gettext = gettext;
    ρσ_modules.gettext.ngettext = ngettext;
    ρσ_modules.gettext.install = install;
    ρσ_modules.gettext.register_callback = register_callback;
    ρσ_modules.gettext.Translations = Translations;
})();
var tag, url_base, address, examples, special;
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
examples = ρσ_list_decorate([ "welcome.pyj", "memorize.pyj", "mandala.pyj", "input.pyj", "repl.pyj", "unicode.pyj", "lunita.pyj" ]);
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
    channel = prompt(_("Join shared workspace") + " " + _("(experimental)"), location.hash.slice(1));
    if ((channel !== null && (typeof channel !== "object" || ρσ_not_equals(channel, null)))) {
        location.hash = channel;
    }
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
            shared_folder.prototype.label = _("Shared workspace");
            shared_folder.prototype.icon = "folder";
            shared_folder.prototype.trigger = "collaboration-dialog";

            items = ρσ_list_decorate([]);
            var ρσ_Iter9 = ρσ_Iterable(ρσ_list_decorate([ new as_zip, new import_file, new shared_folder ]));
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
