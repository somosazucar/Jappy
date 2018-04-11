// vim:fileencoding=utf-8
(function(external_namespace) {
"use strict;"
var rs_version = "0.7.18";
var rs_commit_sha = "a23379517221d16f3bbfcbd523d3804284356661";

// Embedded modules {{{

// End embedded modules }}}

/* vim:fileencoding=utf-8
 * 
 * Copyright (C) 2016 Kovid Goyal <kovid at kovidgoyal.net>
 *
 * Distributed under terms of the BSD license
 */

var namespace = {}, jsSHA = {};

var write_cache = {};

var builtin_modules = {
    'crypto' : {
        'createHash': function create_hash() {
            var ans = new jsSHA.jsSHA('SHA-1', 'TEXT');
            ans.digest = function hex_digest() { return ans.getHash('HEX'); };
            return ans;
        },
    },

    'vm': {
        'createContext': function create_context(ctx) {
            var iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
            var win = iframe.contentWindow;
            if(!ctx) ctx = {};
            if (!ctx.sha1sum) ctx.sha1sum = sha1sum;
            if (!ctx.require) ctx.require = require;
            Object.keys(ctx).forEach(function(k) { win[k] = ctx[k]; });
            return win;
        },

        'runInContext': function run_in_context(code, ctx) {
            return ctx.eval(code);
        },

        'runInThisContext': eval,
    },
    'path': {
        'join': function path_join() { return Array.prototype.slice.call(arguments).join('/'); },
        'dirname': function path_dirname(path) {
            return path.split('/').slice(0, -1).join('/');
        },
    },
    'inspect': function inspect(x) { return x.toString(); },

    'fs': {
        'readFileSync': function readfile(name) {
            var data = namespace.file_data[name];
            if (data) return data;
            data = write_cache[name];
            if (data) return data;
            var err = Error();
            err.code = 'ENOENT';
            throw err;
        },

        'writeFileSync': function writefile(name, data) {
            write_cache[name] = data;
        },

    },
};

function require(name) {
    return builtin_modules[name] || {};
}

// Embedded sha1 implementation {{{
(function() {
/*
 A JavaScript implementation of the SHA family of hashes, as
 defined in FIPS PUB 180-4 and FIPS PUB 202, as well as the corresponding
 HMAC implementation as defined in FIPS PUB 198a

 Copyright Brian Turek 2008-2017
 Distributed under the BSD License
 See http://caligatio.github.com/jsSHA/ for more information

 Several functions taken from Paul Johnston
*/
(function(G){function x(b,a,d){var c=0,e=[],h=0,l=!1,f=[],g=[],q=!1;d=d||{};var r=d.encoding||"UTF8";var k=d.numRounds||1;if(k!==parseInt(k,10)||1>k)throw Error("numRounds must a integer >= 1");if("SHA-1"===b){var n=512;var y=z;var m=H;var p=160;var t=function(c){return c.slice()}}else throw Error("Chosen SHA variant is not supported");var v=A(a,r);var u=w(b);this.setHMACKey=function(e,a,d){if(!0===l)throw Error("HMAC key already set");if(!0===q)throw Error("Cannot set HMAC key after calling update");
r=(d||{}).encoding||"UTF8";a=A(a,r)(e);e=a.binLen;a=a.value;var h=n>>>3;d=h/4-1;if(h<e/8){for(a=m(a,e,0,w(b),p);a.length<=d;)a.push(0);a[d]&=4294967040}else if(h>e/8){for(;a.length<=d;)a.push(0);a[d]&=4294967040}for(e=0;e<=d;e+=1)f[e]=a[e]^909522486,g[e]=a[e]^1549556828;u=y(f,u);c=n;l=!0};this.update=function(a){var d,b=0,l=n>>>5;var f=v(a,e,h);a=f.binLen;var g=f.value;f=a>>>5;for(d=0;d<f;d+=l)b+n<=a&&(u=y(g.slice(d,d+l),u),b+=n);c+=b;e=g.slice(b>>>5);h=a%n;q=!0};this.getHash=function(a,d){if(!0===
l)throw Error("Cannot call getHash after setting HMAC key");var f=B(d);switch(a){case "HEX":a=function(a){return C(a,p,f)};break;case "B64":a=function(a){return D(a,p,f)};break;case "BYTES":a=function(a){return E(a,p)};break;case "ARRAYBUFFER":try{d=new ArrayBuffer(0)}catch(I){throw Error("ARRAYBUFFER not supported by this environment");}a=function(a){return F(a,p)};break;default:throw Error("format must be HEX, B64, BYTES, or ARRAYBUFFER");}var g=m(e.slice(),h,c,t(u),p);for(d=1;d<k;d+=1)g=m(g,p,
0,w(b),p);return a(g)};this.getHMAC=function(a,d){if(!1===l)throw Error("Cannot call getHMAC without first setting HMAC key");var f=B(d);switch(a){case "HEX":a=function(a){return C(a,p,f)};break;case "B64":a=function(a){return D(a,p,f)};break;case "BYTES":a=function(a){return E(a,p)};break;case "ARRAYBUFFER":try{a=new ArrayBuffer(0)}catch(I){throw Error("ARRAYBUFFER not supported by this environment");}a=function(a){return F(a,p)};break;default:throw Error("outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER");
}d=m(e.slice(),h,c,t(u),p);var k=y(g,w(b));k=m(d,p,n,k,p);return a(k)}}function C(b,a,d){var c="";a/=8;var e;for(e=0;e<a;e+=1){var h=b[e>>>2]>>>8*(3+e%4*-1);c+="0123456789abcdef".charAt(h>>>4&15)+"0123456789abcdef".charAt(h&15)}return d.outputUpper?c.toUpperCase():c}function D(b,a,d){var c="",e=a/8,h;for(h=0;h<e;h+=3){var l=h+1<e?b[h+1>>>2]:0;var f=h+2<e?b[h+2>>>2]:0;f=(b[h>>>2]>>>8*(3+h%4*-1)&255)<<16|(l>>>8*(3+(h+1)%4*-1)&255)<<8|f>>>8*(3+(h+2)%4*-1)&255;for(l=0;4>l;l+=1)8*h+6*l<=a?c+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(f>>>
6*(3-l)&63):c+=d.b64Pad}return c}function E(b,a){var d="";a/=8;var c;for(c=0;c<a;c+=1){var e=b[c>>>2]>>>8*(3+c%4*-1)&255;d+=String.fromCharCode(e)}return d}function F(b,a){a/=8;var d,c=new ArrayBuffer(a);var e=new Uint8Array(c);for(d=0;d<a;d+=1)e[d]=b[d>>>2]>>>8*(3+d%4*-1)&255;return c}function B(b){var a={outputUpper:!1,b64Pad:"=",shakeLen:-1};b=b||{};a.outputUpper=b.outputUpper||!1;!0===b.hasOwnProperty("b64Pad")&&(a.b64Pad=b.b64Pad);b.hasOwnProperty("shakeLen");if("boolean"!==typeof a.outputUpper)throw Error("Invalid outputUpper formatting option");
if("string"!==typeof a.b64Pad)throw Error("Invalid b64Pad formatting option");return a}function A(b,a){switch(a){case "UTF8":case "UTF16BE":case "UTF16LE":break;default:throw Error("encoding must be UTF8, UTF16BE, or UTF16LE");}switch(b){case "HEX":b=function(a,c,e){var d=a.length,b,f;if(d%2)throw Error("String of HEX type must be in byte increments");c=c||[0];e=e||0;var g=e>>>3;for(b=0;b<d;b+=2){var q=parseInt(a.substr(b,2),16);if(isNaN(q))throw Error("String of HEX type contains invalid characters");
var r=(b>>>1)+g;for(f=r>>>2;c.length<=f;)c.push(0);c[f]|=q<<8*(3+r%4*-1)}return{value:c,binLen:4*d+e}};break;case "TEXT":b=function(d,c,e){var b=0,l,f,g;c=c||[0];e=e||0;var q=e>>>3;if("UTF8"===a){var r=3;for(l=0;l<d.length;l+=1){var k=d.charCodeAt(l);var n=[];128>k?n.push(k):2048>k?(n.push(192|k>>>6),n.push(128|k&63)):55296>k||57344<=k?n.push(224|k>>>12,128|k>>>6&63,128|k&63):(l+=1,k=65536+((k&1023)<<10|d.charCodeAt(l)&1023),n.push(240|k>>>18,128|k>>>12&63,128|k>>>6&63,128|k&63));for(f=0;f<n.length;f+=
1){var m=b+q;for(g=m>>>2;c.length<=g;)c.push(0);c[g]|=n[f]<<8*(r+m%4*-1);b+=1}}}else if("UTF16BE"===a||"UTF16LE"===a)for(r=2,n="UTF16LE"===a&&!0||"UTF16LE"!==a&&!1,l=0;l<d.length;l+=1){k=d.charCodeAt(l);!0===n&&(f=k&255,k=f<<8|k>>>8);m=b+q;for(g=m>>>2;c.length<=g;)c.push(0);c[g]|=k<<8*(r+m%4*-1);b+=2}return{value:c,binLen:8*b+e}};break;case "B64":b=function(a,c,e){var d=0,b,f;if(-1===a.search(/^[a-zA-Z0-9=+\/]+$/))throw Error("Invalid character in base-64 string");var g=a.indexOf("=");a=a.replace(/\=/g,
"");if(-1!==g&&g<a.length)throw Error("Invalid '=' found in base-64 string");c=c||[0];e=e||0;var q=e>>>3;for(g=0;g<a.length;g+=4){var m=a.substr(g,4);for(b=f=0;b<m.length;b+=1){var k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(m[b]);f|=k<<18-6*b}for(b=0;b<m.length-1;b+=1){var n=d+q;for(k=n>>>2;c.length<=k;)c.push(0);c[k]|=(f>>>16-8*b&255)<<8*(3+n%4*-1);d+=1}}return{value:c,binLen:8*d+e}};break;case "BYTES":b=function(a,c,b){var d;c=c||[0];b=b||0;var e=b>>>3;for(d=0;d<
a.length;d+=1){var f=a.charCodeAt(d);var g=d+e;var m=g>>>2;c.length<=m&&c.push(0);c[m]|=f<<8*(3+g%4*-1)}return{value:c,binLen:8*a.length+b}};break;case "ARRAYBUFFER":try{b=new ArrayBuffer(0)}catch(d){throw Error("ARRAYBUFFER not supported by this environment");}b=function(a,c,b){var d;c=c||[0];b=b||0;var e=b>>>3;var f=new Uint8Array(a);for(d=0;d<a.byteLength;d+=1){var g=d+e;var m=g>>>2;c.length<=m&&c.push(0);c[m]|=f[d]<<8*(3+g%4*-1)}return{value:c,binLen:8*a.byteLength+b}};break;default:throw Error("format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER");
}return b}function m(b,a){return b<<a|b>>>32-a}function t(b,a){var d=(b&65535)+(a&65535);return((b>>>16)+(a>>>16)+(d>>>16)&65535)<<16|d&65535}function v(b,a,d,c,e){var h=(b&65535)+(a&65535)+(d&65535)+(c&65535)+(e&65535);return((b>>>16)+(a>>>16)+(d>>>16)+(c>>>16)+(e>>>16)+(h>>>16)&65535)<<16|h&65535}function w(b){if("SHA-1"===b)b=[1732584193,4023233417,2562383102,271733878,3285377520];else throw Error("No SHA variants supported");return b}function z(b,a){var d=[],c;var e=a[0];var h=a[1];var l=a[2];
var f=a[3];var g=a[4];for(c=0;80>c;c+=1){d[c]=16>c?b[c]:m(d[c-3]^d[c-8]^d[c-14]^d[c-16],1);var q=20>c?v(m(e,5),h&l^~h&f,g,1518500249,d[c]):40>c?v(m(e,5),h^l^f,g,1859775393,d[c]):60>c?v(m(e,5),h&l^h&f^l&f,g,2400959708,d[c]):v(m(e,5),h^l^f,g,3395469782,d[c]);g=f;f=l;l=m(h,30);h=e;e=q}a[0]=t(e,a[0]);a[1]=t(h,a[1]);a[2]=t(l,a[2]);a[3]=t(f,a[3]);a[4]=t(g,a[4]);return a}function H(b,a,d,c){var e;for(e=(a+65>>>9<<4)+15;b.length<=e;)b.push(0);b[a>>>5]|=128<<24-a%32;a+=d;b[e]=a&4294967295;b[e-1]=a/4294967296|
0;a=b.length;for(e=0;e<a;e+=16)c=z(b.slice(e,e+16),c);return c}"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(module.exports=x),exports=x):G.jsSHA=x})(this);
}).call(jsSHA);
// End embedded sha1 implementation }}}

var exports = namespace;
/* 
 * Copyright (C) 2015 Kovid Goyal <kovid at kovidgoyal.net>
 *
 * Distributed under terms of the BSD license
 */

var vm = require('vm');
var native_require = require;

function normalize_array(parts, allowAboveRoot) {
  var res = [];
  for (var i = 0; i < parts.length; i++) {
    var p = parts[i];

    // ignore empty parts
    if (!p || p === '.')
      continue;

    if (p === '..') {
      if (res.length && res[res.length - 1] !== '..') {
        res.pop();
      } else if (allowAboveRoot) {
        res.push('..');
      }
    } else {
      res.push(p);
    }
  }

  return res;
}

function normalize(path) {
    var is_abs = path && path[0] === '/';
    var trailing_slash = path && path[path.length - 1] === '/';
    path = normalize_array(path.split('/'), !is_abs).join('/');

    if (!path && !is_abs) {
        path = '.';
    }
    if (path && trailing_slash) {
        path += '/';
    }

    return (is_abs ? '/' : '') + path;
}

function dirname(path) {
    var idx = path.lastIndexOf('/');
    if (idx != -1) path = path.slice(0, idx);
    else path = '';
    return path;
}

function basename(path) {
    var idx = path.lastIndexOf('/');
    if (idx != -1) path = path.slice(idx + 1);
    return path;
}

var cache = {};

function load(filepath) {
    var cached = cache[filepath];
    if (cached) return cached.exports;
    var module = {'id':filepath, 'exports':{}};
    cache[filepath] = module;

    var content = data[filepath];
    if (Array.isArray(content)) content = data[content[0]];
    if (!content) throw 'Failed to load: ' + JSON.stringify(filepath);

    if (filepath.slice(-5) == '.json') { module.exports = JSON.parse(content); return module.exports; }

    var base = dirname(filepath);
    function mrequire(x) {
        return vrequire(x, base);
    }
    content = content.replace(/^\#\!.*/, '');
    var wrapped = '(function(exports, require, module, __filename, __dirname, create_rapydscript_compiler) { ';
    wrapped += content + '\n;})';
    try {
        vm.runInThisContext(wrapped, {'filename': filepath})(module.exports, mrequire, module, filepath, dirname(filepath), create_compiler);
    } catch (e) {
        console.error(e);
        delete cache[filepath];
        throw e;
    }
    return module.exports;
}

function has(x, y) { return Object.prototype.hasOwnProperty.call(x, y); }

function try_files(candidate) {
    if (has(data, candidate)) return candidate;
    if (has(data, candidate + '.js')) return candidate + '.js';
    if (has(data, candidate + '.json')) return candidate + '.json';
    return null;
}

function find_in_modules_dir(name, base) {
    var candidate = normalize(base + (base ? '/':'') + 'node_modules/' + name);
    var q = try_files(candidate);
    if (q) return q;

    var pj = candidate + '/package.json';
    if (has(data, pj)) {
        var ans = normalize(candidate + '/' + JSON.parse(data[pj]).main);
        if (has(data, ans)) return ans;
    }
    var index = candidate + '/index.js';
    if (has(data, index)) return index;

    var p = dirname(base);
    if (p) return find_in_modules_dir(name, p);
    return null;
}

function find_module(name, base) {
    if (name[0] == '/') throw 'Cannot find absolute module: ' + name;
    if (name.slice(0, 2) == './' || name.slice(0, 3) == '../') {
        var candidate = normalize((base ? base + '/' : base) + name);
        return try_files(candidate);
    }
    var q = try_files(name);
    if (q) return q;
    return find_in_modules_dir(name, base);
}

function vrequire(name, base) {
    var exports = {};
    var modpath = '';
    base = base || '';
    // console.log('vrequire', name, base);
    if (!name) throw new Error('Cannot load a module from an empty name');

    modpath = find_module(name, base);
    if (!modpath && name && './'.indexOf(name[0]) === -1) {
            try {
                return native_require(name);
            } catch (e) {}
        }

    if (!modpath) throw new Error("Failed to find module: " + JSON.stringify(name) + " with base: " + JSON.stringify(base));
    return load(modpath);
}

var UglifyJS = null, regenerator = null;
var crypto = null, fs = require('fs');

function uglify(x) {
    if (!UglifyJS) UglifyJS = vrequire("uglify-js");
    ans = UglifyJS.minify(x);
    if (ans.error) throw ans.error;
    return ans.code;
}

function regenerate(code, beautify) {
    var orig = fs.readFileSync;
    fs.readFileSync = function(name) { 
        if (!has(data, name)) {
            throw {message: "Failed to readfile from data: " + name};
        }
        return data[name]; 
    };
    if (!regenerator) regenerator = vrequire('regenerator');
    var ans;
    if (code) {
        try {
            ans = regenerator.compile(code).code;
        } catch (e) {
            console.error('regenerator failed for code: ' + code + 'with error stack:\n' + e.stack);
            throw e;
        }
        if (!beautify) ans = uglify(ans);
    } else {
        // Return the runtime
        ans = regenerator.compile('', {includeRuntime:true}).code;
        start = ans.indexOf('!');
        end = ans.lastIndexOf('})(');
        end = ans.lastIndexOf('})(', end - 1);
        ans = ans.slice(start + 1, end);
        if (!beautify) {
            var extra = '})()';
            ans = uglify(ans + extra).slice(0, extra.length);
        }
    }
    fs.readFileSync = orig;
    return ans;
}

if (typeof this != 'object' || typeof this.sha1sum !== 'function') {
    var sha1sum = function (data) { 
        if (!crypto) crypto = require('crypto');
        var h = crypto.createHash('sha1');
        h.update(data);
        return h.digest('hex');
    };
} else var sha1sum = this.sha1sum;

function create_compiler() {
    var compilerjs = data['compiler.js'];
    var module = {'id':'compiler', 'exports':{}};
    var wrapped = '(function(module, exports, readfile, writefile, sha1sum, regenerate) {' + data['compiler.js'] + ';\n})';
    vm.runInThisContext(wrapped, {'filename': 'compiler.js'})(module, module.exports, fs.readFileSync, fs.writeFileSync, sha1sum, regenerate);
    return module.exports;
}

var RapydScript = null;

function compile(code, filename, options) {
    if (!RapydScript) RapydScript = create_compiler();
    options = options || {};
    var ast = RapydScript.parse(code, {
        filename: filename || '<eval>',
        basedir: options.basedir || dirname(filename || ''),
        libdir: options.libdir,
    });
    var out_ops = {
        beautify: (options.beautify === undefined ? true : options.beautify),
        private_scope: !options.bare,
        omit_baselib: !!options.omit_baselib,
        js_version: options.js_version || 5,
    };
    if (!out_ops.omit_baselib) out_ops.baselib_plain = data['baselib-plain-' + (out_ops.beautify ? 'pretty' : 'ugly') + '.js'];
    var out = new RapydScript.OutputStream(out_ops);
    ast.print(out);
    return out.get();
}

function create_embedded_compiler(runjs) {
    var c = vrequire('tools/embedded_compiler.js');
    return c(create_compiler(), data['baselib-plain-pretty.js'], runjs);
}

function web_repl() {
    var repl = vrequire('tools/web_repl.js');
    return repl(create_compiler(), data['baselib-plain-pretty.js']);
}

function init_repl(options) {
    var repl = vrequire('tools/repl.js');
    options.baselib = data['baselib-plain-pretty.js'];
    return repl(options);
}

function gettext_parse(catalog, code, filename) {
    g = vrequire('tools/gettext.js');
    g.gettext(catalog, code, filename);
}

function gettext_output(catalog, options, write) {
    g = vrequire('tools/gettext.js');
    g.write_output(catalog, options, write);
}

function msgfmt(data, options) {
    m = vrequire('tools/msgfmt.js');
    return m.build(data, options);
}

function completer(compiler, options) {
    m = vrequire('tools/completer.js');
    return m(compiler, options);
}

if (typeof exports === 'object') {
    exports.compile = compile;
    exports.create_embedded_compiler = create_embedded_compiler;
    exports.web_repl = web_repl;
    exports.init_repl = init_repl;
    exports.gettext_parse = gettext_parse;
    exports.gettext_output = gettext_output;
    exports.msgfmt = msgfmt;
    exports.rs_version = rs_version;
    exports.file_data = data;
    exports.completer = completer;
    if (typeof rs_commit_sha === 'string') exports.rs_commit_sha = rs_commit_sha;
}
external_namespace.RapydScript = namespace;
})(this)