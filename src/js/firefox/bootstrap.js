var Cc=Components.classes,Ci=Components.interfaces,Cu=Components.utils,Cm=Components.manager;Cu["import"]("resource://gre/modules/Services.jsm");Cu["import"]("resource://gre/modules/AddonManager.jsm");Cu["import"]("resource://gre/modules/FileUtils.jsm");function log(a){Cc["@mozilla.org/consoleservice;1"].getService(Ci.nsIConsoleService).logStringMessage(a)}
var extensionContext={XHTML_NS:"http://www.w3.org/1999/xhtml",XMLHttpRequest:function(){return Cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance(Ci.nsIXMLHttpRequest)},alert:function(a){Services.prompt.alert(null,"Kango",a)},log:log};
function getExtensionInfo(a){var b=Cc["@mozilla.org/xmlextras/xmlhttprequest;1"].createInstance(Ci.nsIXMLHttpRequest);b.open("GET",a.resourceURI.spec+"extension_info.json",!1);b.overrideMimeType("text/plain");b.send(null);return JSON.parse(b.responseText)}
function loadModules(a,b,c){var d="kango/base.js kango/utils.js kango/kango.js kango/console.js kango/timer.js kango/lang.js kango/chrome_windows.js kango/messaging.js kango/io.js kango/xhr.js kango/storage.js kango/browser.js kango/i18n.js kango/userscript_engine.js kango/userscript_client.js kango/invoke_async.js kango/message_target.js kango/backgroundscript_engine.js kango-ui/ui_base.js kango-ui/browser_button.js kango-ui/popup.js kango-ui/options.js kango-ui/context_menu.js kango-ui/notifications.js kango/legacy.js".split(" ");"undefined"!=
typeof c.modules&&(d=d.concat(c.modules));for(c=0;c<d.length;c++)Services.scriptloader.loadSubScript(a.getResourceURI(d[c]).spec,b,"UTF-8")}function init(a){AddonManager.getAddonByID(a.id,function(b){var c=getExtensionInfo(a);loadModules(b,extensionContext,c);extensionContext.kango.__installPath=a.installPath;extensionContext.kango.init(c)})}function install(a,b){}
function uninstall(a,b){if(b==ADDON_UNINSTALL)for(var c=getExtensionInfo(a),d={kango:{getExtensionInfo:function(){return c},registerModule:function(){},getDefaultModuleRegistrar:function(){}}},e=["kango/utils.js","kango/storage.js","kango/uninstall.js"],f=0;f<e.length;f++)Services.scriptloader.loadSubScript(a.resourceURI.spec+e[f],d,"UTF-8")}
function startup(a,b){0>Services.vc.compare(Services.appinfo.platformVersion,"10.0")&&Cm.addBootstrappedManifestLocation(a.installPath);var c=!0;try{Cc["@mozilla.org/appshell/appShellService;1"].getService(Ci.nsIAppShellService)}catch(d){c=!1}if(c)init(a);else{var e=function(b,c,d){Services.obs.removeObserver(e,"final-ui-startup",!1);init(a)};Services.obs.addObserver(e,"final-ui-startup",!1)}}
function shutdown(a,b){b!=APP_SHUTDOWN&&(extensionContext.kango.dispose(),extensionContext=extensionContext.kango=null,0>Services.vc.compare(Services.appinfo.platformVersion,"10.0")&&Cm.removeBootstrappedManifestLocation(a.installPath))};
