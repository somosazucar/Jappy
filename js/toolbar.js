riot.tag2('tool-bar', '<div id="main-toolbar" class="toolbar"> <button class="toolbutton" id="activity-button" title="Jappy Activity"></button> <hr> <button class="toolbutton" id="example-button" title="Load an example" ref="examplebutton"></button> <button show="{location.hash}" class="toolbutton" id="workspace-button" title="Workspace" ref="workspacebutton"></button> <hr> <button class="toolbutton {colored: window.state!=\'run\'}" id="run-button" title="Execute" ref="runbutton"></button> <button class="toolbutton {colored: window.state==\'run\'}" id="break-button" title="Break execution" ref="breakbutton"></button> <button class="toolbutton {colored: window.state!=\'clean\'}" id="erase-button" title="Clear the canvas" ref="erasebutton"></button> <button class="toolbutton {hidden: window.state==\'run\'}" id="start-button" title="Start fullscreen" ref="startbutton"></button> <button class="toolbutton {hidden: window.state==\'stopped\'} {hidden: window.state==\'clean\'}" id="full-button" title="View fullscreen" ref="fullbutton"></button> <button class="toolbutton" id="export-button" title="Export or publish" ref="exportbutton"></button> <button class="toolbutton pull-right" id="stop-button" title="Stop" ref="stopbutton"></button> </div>', 'tool-bar #main-toolbar #run-button,[data-is="tool-bar"] #main-toolbar #run-button{ background-image: url(icons/run_bw.svg); } tool-bar #main-toolbar #run-button.colored,[data-is="tool-bar"] #main-toolbar #run-button.colored{ background-image: url(icons/run_color.svg); } tool-bar #main-toolbar #break-button,[data-is="tool-bar"] #main-toolbar #break-button{ background-image: url(icons/stopit_bw.svg); } tool-bar #main-toolbar #break-button.colored,[data-is="tool-bar"] #main-toolbar #break-button.colored{ background-image: url(icons/stopit_color.svg); } tool-bar #main-toolbar #erase-button,[data-is="tool-bar"] #main-toolbar #erase-button{ background-image: url(icons/eraser_bw.svg); } tool-bar #main-toolbar #erase-button.colored,[data-is="tool-bar"] #main-toolbar #erase-button.colored{ background-image: url(icons/eraser_color.svg); } tool-bar #main-toolbar #example-button,[data-is="tool-bar"] #main-toolbar #example-button{ background-image: url(icons/load-example.svg); } tool-bar #main-toolbar #workspace-button,[data-is="tool-bar"] #main-toolbar #workspace-button{ background-image: url(icons/user-documents.svg); } tool-bar #main-toolbar #start-button,[data-is="tool-bar"] #main-toolbar #start-button{ background-image: url(icons/activity-start.svg); } tool-bar #main-toolbar #full-button,[data-is="tool-bar"] #main-toolbar #full-button{ background-image: url(icons/view-fullscreen.svg); } tool-bar #main-toolbar #export-button,[data-is="tool-bar"] #main-toolbar #export-button{ background-image: url(icons/export-or-publish.svg); } tool-bar .hidden,[data-is="tool-bar"] .hidden{ display: none !important; }', '', function(opts) {
var ρσ_modules = {};
ρσ_modules.elementmaker = {};

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
var tag, url_base, address, examples;
var E = ρσ_modules.elementmaker.E;

tag = this;
url_base = location.protocol;
address = url_base + "//" + location.host + "/dav";
if (location.hash) {
    window.fs = new WebDAV.Fs(address);
}
examples = ρσ_list_decorate([ "welcome.pyj", "memorize.pyj", "mandala.pyj", "input.pyj", "repl.pyj", "unicode.pyj" ]);
window.state = "clean";
function load_file(ev) {
    var target_file, path;
    tag.workspace_palette.popDown();
    target_file = ev.target.getAttribute("data-uri");
    path = location.hash.slice(1);
    fs.file("/" + path + "/" + target_file).read((function() {
        var ρσ_anonfunc = function (data) {
            event_bus.trigger("new-from-data", data, target_file, true);
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["data"]}
        });
        return ρσ_anonfunc;
    })());
};
if (!load_file.__argnames__) Object.defineProperties(load_file, {
    __argnames__ : {value: ["ev"]}
});

function update_workspace_menu() {
    var path;
    if (window.fs === undefined) {
        return;
    }
    path = location.hash.slice(1);
    function list_files(found_files) {
        var items, palette, container, row, item, span, text, file, browse_button, lastrow;
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
        palette = tag.workspace_palette.getPalette();
        container = palette.getElementsByClassName("container")[0];
        container.innerHTML = "";
        var ρσ_Iter2 = ρσ_Iterable(found_files);
        for (var ρσ_Index2 = 0; ρσ_Index2 < ρσ_Iter2.length; ρσ_Index2++) {
            file = ρσ_Iter2[ρσ_Index2];
            if ((file.name[0] === "." || typeof file.name[0] === "object" && ρσ_equals(file.name[0], "."))) {
                continue;
            }
            row = document.createElement("div");
            row.classList.add("menu");
            item = document.createElement("button");
            item.classList.add("icon");
            span = document.createElement("span");
            span.classList.add("pyj");
            text = document.createTextNode(str(file.name));
            item.appendChild(span);
            item.appendChild(text);
            item.setAttribute("data-uri", file.name);
            item.addEventListener("click", load_file);
            row.appendChild(item);
            items.append(row);
        }
        items.append(ρσ_interpolate_kwargs.call(E, E.hr, [ρσ_desugar_kwargs({class_: "header-separator"})]));
        browse_button = ρσ_interpolate_kwargs.call(E, E.button, [ρσ_interpolate_kwargs.call(E, E.span, [ρσ_desugar_kwargs({class_: "folder"})]), "Browse..."].concat([ρσ_desugar_kwargs({class_: "icon"})]));
        browse_button.onclick = function () {
            tag.workspace_palette.popDown();
            window.open("dav://" + location.host + "/dav/" + path);
        };
        lastrow = ρσ_interpolate_kwargs.call(E, E.div, [browse_button].concat([ρσ_desugar_kwargs({class_: "menu"})]));
        items.append(lastrow);
        tag.workspace_palette.setContent(items);
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

    fs.dir("/" + path).mkdir(try_make_dir);
};

tag.update_workspace_menu = update_workspace_menu;
event_bus.on("update-workspace-menu", update_workspace_menu);
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
    require(ρσ_list_decorate([ "sugar-web/graphics/palette" ]), (function() {
        var ρσ_anonfunc = function (palette) {
            var items, row, item, span, text, i;
            tag.example_palette = new palette.Palette(tag.refs.examplebutton, "Load an example");
            items = ρσ_list_decorate([]);
            var ρσ_Iter3 = ρσ_Iterable(examples);
            for (var ρσ_Index3 = 0; ρσ_Index3 < ρσ_Iter3.length; ρσ_Index3++) {
                i = ρσ_Iter3[ρσ_Index3];
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
            tag.example_palette.setContent(items);
            tag.workspace_palette = new palette.Palette(tag.refs.workspacebutton, "Workspace");
            update_workspace_menu();
            tag.export_palette = new palette.Palette(tag.refs.exportbutton, "Export");
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
            as_zip.prototype.label = "Export as zipped HTML";
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
            import_file.prototype.label = "Import";
            import_file.prototype.icon = "zip";
            import_file.prototype.trigger = "import-file";

            items = ρσ_list_decorate([]);
            var ρσ_Iter4 = ρσ_Iterable(ρσ_list_decorate([ new as_zip, new import_file ]));
            for (var ρσ_Index4 = 0; ρσ_Index4 < ρσ_Iter4.length; ρσ_Index4++) {
                i = ρσ_Iter4[ρσ_Index4];
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
