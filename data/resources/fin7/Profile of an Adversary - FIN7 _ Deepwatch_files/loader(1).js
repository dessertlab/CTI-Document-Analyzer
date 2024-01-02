
/*jslint browser: true, multivar: true */

if (window.__AudioEyePerformance) {
    window.__AudioEyePerformance.loaderJsStartTime = performance.now();
}


if (!window.__AudioEyeSiteHash) {
    window.__AudioEyeSiteHash = '83605a848e2897df095c1a05ed7249d7';
}

var aecb = "226ebee";
var pscb = '';

function ae_choose(a, b, rate) {
    if(!rate || !b) {
        return a;
    }
    return rate <= Math.random() ? b : a;
}

function ae_loadScript(path) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = path;
    document.body.appendChild(script);
}

ae_loadScript("https://wsv3cdn.audioeye.com/v2/build/jquery.bundle.226ebee.js");

var loaderFunction = function (tries) {
        if (!window.ae_jQuery) {
        var wait = 100;
        if (tries > 50) {
            wait = wait * tries;
        }
        setTimeout(function() {
            loaderFunction(++tries)
        }, wait);
        return;
    }

    window.__AudioEyeLoaderStartTime = new Date().getTime();
    // Singleton pattern: if the loader has already run, do not overwrite.
    if (window.AudioEye && window.AudioEye.version !== undefined) {
        return;
    }

    // declare define here so that when jquery is imported in startupRoutine.js it will
    // find this define instead of any global define that a customer might use
    var define = function(){};

    window.AudioEye = Object.assign({}, window.AudioEye || {});


    // legacy check for AudioEye DAP scan. Do not continue if true
    if (navigator.userAgent.indexOf("AudioEye") !== -1) {
        return;
    }


    var options = {};
    var protocol = "https:";
    var device = "desktop";
    var site_id = null;


    
    var options = {"live-monitoring":{"limit":0.312,"service":true},"help":{"service":true,"aria-label":{"en":"Help Menu. Press enter or use question mark key to turn on or off."},"tooltip-title":{"en":"Help"},"tooltip-keycommand":{"en":"(press ?)"}},"admin":{"service":true,"aria-label":{"en":"AudioEye portal"},"at-message":{"en":"AudioEye portal login"},"cancel":{"en":"Cancel"},"popup_content_opening":{"en":"Opening the Admin Panel requires the page to reload"},"popup_content_closing":{"en":"Closing the Admin Panel requires the page to reload"},"popup_title":{"en":"Confirm reload"},"reload":{"en":"Reload"},"tooltip-title":{"en":"Admin Panel"}},"rotor":{"service":true,"aria-label":{"en":"Page Elements Menu. Press enter or use d key to turn on or off."},"tooltip-title":{"en":"Page Elements Menu"},"tooltip-keycommand":{"en":"(press D)"},"skipto_rotor-link":false},"helpers":{"service":true},"toolbar":{"service":true,"color":{"background":"#252930","foreground":"#96a0ab"},"theme":"light","at-message":{"en":"AudioEye Toolbar. Explore the tools below or press escape to quit the toolbar."},"aria-label":{"en":"AudioEye Toolbar. Explore the tools below or press escape to quit the toolbar."}},"helpdesk":{"service":true,"at-message":{"en":"The AudioEye Help Desk to report accessibility and usability related issues."},"aria-label":{"en":"AudioEye Help Desk. To report accessibility and usability related issues, press enter or use h key to turn on or off."},"tooltip-title":{"en":"Help Desk"},"tooltip-keycommand":{"en":"(press H)"}},"launcher":{"service":true,"position":"left-lower","cta-color":"#66cc00","pre-opt-in-messaging":{"at-message":{"en":"This website is AudioEye enabled and is being optimized for accessibility. Additionally, free web personalization tools have been provided via the AudioEye Toolbar, which may be enabled from the Accessibility Statement link found on this page."}},"opt-in":false,"at-message":{"en":"This website is AudioEye enabled and is being optimized for accessibility. To open the AudioEye Toolbar, press shift + =. The toolbar contains the following"},"aria-label":{"en":"Accessibility options"},"tooltip-title":{"en":"Explore your accessibility options."},"preview-mode-message":{"en":"AudioEye is in preview mode. Some functionality will be limited."},"preview-mode-modal-close":{"en":"Close"},"preview-mode-modal-title":{"en":"Preview Mode"},"at-messages":{"admin":{"en":"AudioEye portal login"},"voice":{"en":"The Voice (beta) tool to control and interact with this site using your voice."},"player":{"en":"The Player tool to listen to this site read aloud. The Player is not intended as a substitute for your screen reader."},"reader":{"en":"The Reader tool to customize the visual display of this site."},"toolbar":{"en":"AudioEye Toolbar. Explore the tools below or press escape to quit the toolbar."},"helpdesk":{"en":"The AudioEye Help Desk to report accessibility and usability related issues."},"launcher":{"en":"This website is AudioEye enabled and is being optimized for accessibility. To open the AudioEye Toolbar, press shift + =. The toolbar contains the following"},"lite-reader":{"en":"AudioEye Visual Toolkit"}}},"pc_preset":"custom-mode","site-menu":{"service":false,"selectors":{"main-menu":{"label":{"en":""},"link":false,"selector":"","search-algorithm":"default"},"aside-menu":{"label":{"en":""},"link":false,"selector":"","search-algorithm":"default"},"other-menu":{"label":{"en":""},"link":false,"selector":"","search-algorithm":"default"},"footer-menu":{"label":{"en":""},"link":false,"selector":"","search-algorithm":"default"},"utility-menu":{"label":{"en":""},"link":false,"selector":"","search-algorithm":"default"},"additional-menus":[{"label":"","selector":"","link":false,"search-algorithm":"default"}]},"aria-label":{"en":"Site Menu. Press enter or use n key to turn on or off."},"tooltip-title":{"en":"Site Menu"},"tooltip-keycommand":{"en":"(press N)"},"search-algorithms":{"default":"Default"}},"compliance":{"service":true,"auto-remediations":true,"smart-remediations":true,"manual-remediations":true,"live-monitoring-limit":"1","edge-remediations":false,"skip-remediations":"","skipto_main-content-link":false,"tab-triggers-outline":false,"skipto_main-link-text":{"en":"Skip to Main Content"},"aria-landmarks":{"banner":"","search":"","content":"","complementary":"","contentinfo":""},"aria-live":{"polite":"","assertive":"","live":"","alert":""},"new_window_text":{"en":"Opens a New Window."},"accessible-carousel-link-text":{"en":"Accessible Carousel"},"accessible-carousel-link-label":{"en":"Accessible Carousel"},"disabled-carousel-message":{"en":"Original carousel disabled. Use accessible carousel or refresh page to access."}},"lite-reader":{"service":true,"aria-label":{"en":"AudioEye Visual Toolkit"},"at-message":{"en":"AudioEye Visual Toolkit"},"tooltip-title":{"en":"Visual Toolkit"},"tooltip-keycommand":{"en":"(Press T)"}},"certification":{"service":true,"version":"5","versionlist":{"3":"Partner Pro","4":"Pro Commitment Statement","5":"Managed"},"tooltip-title":{"en":"Certification"},"tooltip-keycommand":{"en":"(press B)"},"trusted_title":"","aria-label":{"en":"AudioEye Certification Statement. Press enter or use b key to turn on or off."},"at-message":{"en":"The AudioEye Certification Statement to explain the ongoing web accessibility and usability enhancements for this website."}},"user-settings":{"service":true,"aria-label":{"en":"Settings Menu. Press enter or use s key to turn on or off."},"tooltip-title":{"en":"Settings"},"tooltip-keycommand":{"en":"(press S)"}},"carousels":[{"carousel":"","slides":"","link":false,"click-proxy":false,"next_slide":{"en":"Next Slide"},"prev_slide":{"en":"Previous Slide"},"slide_count":{"en":"Slide {{num}} of {{total}}"}}],"external-links":{"service":true,"interface":{"popup_title":{"en":"Confirm Navigation"},"popup_content2":{"en":"You are navigating away from the <span class=\"notranslate\">[[site-name]]<\/span> website. <span class=\"notranslate\">[[site-name]]<\/span> does not own, operate, or control the link or its content. <span class=\"notranslate\">[[site-name]]<\/span> is not responsible for the content of the external website. Privacy and security policies of the external website may differ from those practiced by <span class=\"notranslate\">[[site-name]]<\/span>."},"popup_content":{"en":"By activating 'Continue' below, you acknowledge the previous statement and will be taken to the external website. If you want to remain on this website, activate 'Cancel'."},"popup_content3":{"en":"By activating 'Continue' below, you will open a new window of AudioEye. If you want to remain on the same page, activate 'Cancel'."},"cancel":{"en":"Cancel"},"continue":{"en":"Continue"}}},"persist-settings":{"service":false,"persist":false},"excludes":"","timers":"","tabsets":{"tabset":"","tabs":"","active-tab":"","content":""},"live-monitoring-limit":"1","iframes":{"allowed-origins":[],"searchAndInject":true,"unsafe-sources":["gateway.answerscloud.com","cc.hostedpci.com"],"unsafeIframeSelectors":[]},"content-modifiers-version":"2","ga-account":"","startup_modules":["launcher","compliance"],"languages":{"aliases":{"en":["en"],"zh-cn":["zh"],"sv-se":["sv"],"ru-ru":["ru"],"pt-pt":["pt"],"pl-pl":["pl"],"no-no":["no"],"nl-nl":["nl"],"ko-kr":["ko"],"ja-jp":["jp","ja"],"it-it":["it"],"hu-hu":["hu"],"fr-fr":["fr"],"es":["es"],"el-gr":["el"],"de-de":["de"],"da-dk":["da"],"cs-cz":["cs"],"ca":["ca"],"ar-sa":["ar"]},"supported":{"auto":"Automatic","en":"English","en-gb":"English (UK)","zh-tw":"Chinese (Taiwan)","zh-hk":"Chinese (Hong Kong)","zh-cn":"Chinese (China)","sv-se":"Swedish","ru-ru":"Russian","pt-pt":"Portuguese (Portugal)","pt-br":"Portuguese (Brazil)","pl-pl":"Polish","no-no":"Norwegian","nl-nl":"Dutch","ko-kr":"Korean","ja-jp":"Japanese","it-it":"Italian","hu-hu":"Hungarian","fr-fr":"French (France)","fr-ca":"French (Canada)","fi-fi":"Finnish","es":"Spanish","es-mx":"Spanish (Mexico)","el-gr":"Greek","de-de":"German","da-dk":"Danish","cs-cz":"Czech","ca":"Catalan","ar-sa":"Arabic"},"supported-translated":{"auto":"Automatic","en":"English","zh-tw":"\u7e41\u9ad4\u4e2d\u6587","zh-hk":"\u4e2d\u6587\uff08\u9999\u6e2f\uff09","zh-cn":"\u7b80\u4f53\u4e2d\u6587","sv-se":"Svenska","ru-ru":"\u0420\u0443\u0441\u0441\u043a\u0438\u0439","pt-pt":"Portugu\u00eas","pt-br":"Portugu\u00eas","pl-pl":"Polski","no-no":"Norsk","nl-nl":"Nederlands","ko-kr":"\ud55c\uad6d\uc5b4","ja-jp":"\u65e5\u672c\u8a9e","it-it":"Italiano","hu-hu":"Hungarian","fr-fr":"Fran\u00e7ais","fr-ca":"Fran\u00e7ais","fi-fi":"suomi","es-mx":"Espa\u00f1ol","en-gb":"English","el-gr":"\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac","de-de":"Deutsch","da-dk":"Dansk","cs-cz":"\u010cesky","ca":"Catal\u00e0","ar-sa":"\u0627\u0644\u0639\u0631\u0628\u064a\u0629","es":"Spanish"},"primary":"auto","detected":"en-US"},"off-limits":null,"toolbar-promo":false,"consentManagementConfig":{"service":false,"cookieConsentConfig":null}},
        site_id = "64a0194c-06dd-46f9-9c7f-331b3d6aa1c1",
        encrypted_site_id = "W+PvDTsBHVrXb80z3KiaTMCsArGYPESe4XWufil4niXsU\/\/VzLXSDaxSvU8e3e\/T";
        
    AudioEye.site_id = site_id;
    AudioEye.encrypted_site_id = encrypted_site_id;
    AudioEye.site_name = "deepwatch.com";
    AudioEye.base_url = "deepwatch.com\/m";
    AudioEye.analytics_url = ae_choose(
        "https://report-prod.audioeye.com/v1/send",
        "https://analytics.audioeye.com/air/v0/send",
        0.000001    );
    AudioEye.last_publish = "2023-12-16T08:38:33.088Z";

    // Unit Test Mode
    options.testmode = (window.audioeye_test_mode) ? window.audioeye_test_mode : false;

    // Make options accessible by other modules
    AudioEye.productConfig = options;

    AudioEye.cb = aecb;
    AudioEye.pscb = pscb;
    AudioEye.device = device;
    AudioEye.version = "3.0" + (aecb ? "-" + aecb : "");
    AudioEye.protocol = protocol;
    AudioEye.client_url = "https:\/\/wsv3cdn.audioeye.com\/v2";
    AudioEye.cdn_bypass_url = "https:\/\/wsv3cdn.audioeye.com\/v2";

    AudioEye.assets_url = "https:\/\/assets.audioeye.com\/m";
    AudioEye.gtm_url = "https:\/\/wsv3cdn.audioeye.com\/bootstrap.js?h=83605a848e2897df095c1a05ed7249d7";
    AudioEye.voice_url = "https:\/\/vs.audioeye.com\/m";
    AudioEye.voice_client_entry = "\/scripts\/build\/voice.js\/m";
    AudioEye.pdfjs_url = "https:\/\/pdfjsdev.audioeye.com\/m";
    AudioEye.build = "prod\/m";
    AudioEye.portal_url = "portal.audioeye.com";
    AudioEye.portal_preview = false;
    AudioEye.site_version = "";
    AudioEye.toolbar_version = "2";
    AudioEye.toolbar_version_provider = "sd";
    AudioEye.loaderVersion = 2;
    AudioEye.a11yTestingReportTo = 'https://analytics.audioeye.com/v2/report';






    // many of our modules make use of JSON encoding/decoding. We have detected that Prototype.js mangles certain varType to JSON conversions. Let's get rid of those
    if(window.Prototype) {
        delete Object.prototype.toJSON;
        delete Array.prototype.toJSON;
        delete String.prototype.toJSON;
    }

    // create Array.reduce alternative for environments that have overridden the native reduce 

    if (Array.prototype.reduce.toString().indexOf('[native code]') > -1) {
        Array.prototype.ae_reduce = Array.prototype.reduce;
    } else {
        Array.prototype.ae_reduce = function(callback) {
            'use strict';
            if (this == null) {
              throw new TypeError('Array.prototype.reduce called on null or undefined');
            }
            if (typeof callback !== 'function') {
              throw new TypeError(callback + ' is not a function');
            }
            var t = Object(this), len = t.length >>> 0, k = 0, value;
            if (arguments.length == 2) {
              value = arguments[1];
            } else {
              while (k < len && !(k in t)) {
                k++; 
              }
              if (k >= len) {
                throw new TypeError('Reduce of empty array with no initial value');
              }
              value = t[k++];
            }
            for (; k < len; k++) {
              if (k in t) {
                value = callback(value, t[k], k, t);
              }
            }
            return value;
          };
    }
    Object.defineProperty(Array.prototype, 'ae_reduce', {enumerable: false});

    /* Built Files */
    /* Serving build => prod */

    /**
 * This is necessary as legacy support for some helpers and remediations that
 * depend on 'AudioEye.require()' calls to function.
 * That the time of writing, this library only needs to support the following
 * types of calls:
 *  AudioEye.require('lib/mutations'
    AudioEye.require(['ae_options']...
    AudioEye.require('lib/mutations'
    AudioEye.require(['ae_options']...
    AudioEye.require(["utilities"], function(util)...
    AudioEye.require(['utilities'], function(u) {
 */
(function () {

  if (!window.AudioEye) {
    return;
  }

  var log = function (str) {
    if (!window.console || !window.console.log) {
      return;
    }

    console.log(str);
  };

  // Stub the AudioEye.require function for old helpers and remediations
  // @param dependency {array|string}
  // @param callback {fn} - called if it is passed in
  // @returns {object} - returns dependency always
  window.AudioEye.require = function (dependency, callback) {

    try {

      // stub with empty function if no callback passed
      if (typeof callback !== 'function') {
        callback = function() {};
      }

      // Create an object to store depdencies in
      // These will be referenced later when a call to define defines them
      if (!AudioEye.require._definedDeps) {
        AudioEye.require._definedDeps = {};
      }

      // Create an object to store callback functions in
      // The callbacks will be called when define defines their requested
      // dependency.
      if (!AudioEye.require._definedDeps) {
        AudioEye.require._callbacks = {};
      }

      // ensure dep is the string name of the dependency
      var dep = (Array.isArray(dependency)) ? dependency[0] : dependency;

      // The only known calls to this function look for the following
      // dependencies: 'ae_options', 'lib/mutations', and 'utilities'. All
      // other params will be rejected
      var possible_deps = ['ae_options', 'lib/mutations', 'utilities'];
      if (possible_deps.indexOf(dep) === -1) {
        throw new Error('AudioEye.require was called with "' + dep + '", which is not supported.');
      }

      switch (dep) {
        case 'ae_options':
          callback(AudioEye.productConfig);
          return AudioEye.productConfig;

        case 'lib/mutations':
        case 'utilities':

          // the requested library is already defined, pass it to the callback
          // and return it as well.
          if (AudioEye.require._definedDeps[dep]) {
            callback(AudioEye.require._definedDeps[dep]);
            return AudioEye.require._definedDeps[dep];
          }

          // Set the callback for this dependency. The callback will be
          // called when the platform defines the requested library.
          if (!AudioEye.require._callbacks[dep]) {
            AudioEye.require._callbacks[dep] = [];
          }
          AudioEye.require._callbacks.push(callback);
          return;
      }

    } catch (e) {
      log('Unable to satisfy call to AudioEye.require(). See next error for more info.');
      throw e;
    }
  };

  // Either set the factory to an object to be used later, or immediately pass
  // it to any awaiting callbacks.
  window.AudioEye.define = function (dep, factory) {

    if (!AudioEye.require._definedDeps) {
      AudioEye.require._definedDeps = {};
    }

    AudioEye.require._definedDeps[dep] = factory;

    // nothing has required anything yet
    if (!AudioEye.require._callbacks) return;

    // nothing has required this lib yet
    if (Array.isArray(AudioEye.require._callbacks[dep])) {

      // pass the factory to each callback
      AudioEye.require._callbacks[dep].forEach(function (cb) {
        cb(factory);
      });

      // remove the callbacks to prevent duplicate calls
      AudioEye.require._callbacks[dep] = [];
    }
  };
})();
            ae_loadScript("https://wsv3cdn.audioeye.com/v2/build/startup.bundle.226ebee.js");
        

    // Determine startup routine (pdf or standard)
    AudioEye.mode = (function () {

        var extension = false;
        if(!site_id && extension){
            return 'anonymous'
        }

        if (AudioEye.portal_preview === true) {
            return 'pdf';
        }

        // no accessible_pdf config
        if (!('pdf-links' in options) || options['pdf-links']['pdf_page'] === "") {
            return 'standard';
        }

        // pdf config OFF
        if (!options['pdf-links']['service']) {
            return 'standard';
        }

        var page_url = window.location.href;

        // this page is set as the pdf display page
        if (page_url.indexOf(options['pdf-links']['pdf_page']) !== -1) {
            return 'pdf';

        } else {
            return 'standard';

        }
    })();

    var loaderRunStartup = function(tries) {
        if (!AudioEye.runStartup) {
            var wait = 100;
            if (tries > 50) {
                wait = wait * tries;
            }
            setTimeout(function() {
                loaderRunStartup(++tries)
            }, wait);
            return;
        }

        AudioEye.runStartup(AudioEye.mode, {
            'portal_url': 'portal.audioeye.com',
            'interface': "<div id=\"ae_app\" data-nosnippet>\n    \n        <!--\n        Layout, Style or Voice Helpers\n    -->\n    <div id=\"ae_helpers\" class=\"ae-module\" style=\"display: none;\">\n\n    \n    <\/div>\n    \n\n        <!--\n        Compliance\n    -->\n    <div id=\"ae_compliance\" class=\"ae-module\" style=\"display: none;\">\n\n        <!-- For autoSmartRem addNewWindowWarnings div is referenced in an aria-describedby -->\n        <div id=\"audioeye_new_window_message\" style=\"display:none\">Opens in new window<\/div>\n        <div id=\"audioeye_pdf_message\" style=\"display:none\">PDF Download<\/div>\n        <div id=\"audioeye_word_message\" style=\"display:none\">Word Download<\/div>\n        <div id=\"audioeye_excel_message\" style=\"display:none\">Excel Download<\/div>\n        <div id=\"audioeye_powerpoint_message\" style=\"display:none\">PowerPoint Download<\/div>\n        <div id=\"audioeye_document_message\" style=\"display:none\">Document Download<\/div>\n\n        \n        <script type=\"text\/javascript\">\n\n        AudioEye.smartRemediations = [];\nAudioEye.autoSmartRemediations = [{\"id\":\"f3e3a9e8-c794-4a52-8eeb-7f1b6a7a3dce\",\"type\":\"addDownloadableDocumentWarnings\",\"params\":[],\"smart_remediation_number\":\"f3e3a9e8-c794-4a52-8eeb-7f1b6a7a3dce\",\"parent_id\":\"\"},{\"id\":\"4b5c921c-1ab6-4049-965a-d9d1938ec9d3\",\"type\":\"addFormLabels\",\"params\":[],\"smart_remediation_number\":\"4b5c921c-1ab6-4049-965a-d9d1938ec9d3\",\"parent_id\":\"\"},{\"id\":\"5eaa86be-2c34-4348-8935-14e3ba7f2f6d\",\"type\":\"addFormRequiredAriaLabel\",\"params\":[],\"smart_remediation_number\":\"5eaa86be-2c34-4348-8935-14e3ba7f2f6d\",\"parent_id\":\"\"},{\"id\":\"d93c3829-bd72-470d-b131-e7b0d435488f\",\"type\":\"addFrameTitles\",\"params\":[],\"smart_remediation_number\":\"d93c3829-bd72-470d-b131-e7b0d435488f\",\"parent_id\":\"\"},{\"id\":\"9a12ea0f-1b9b-4026-ab3e-e4b150003a04\",\"type\":\"addLinkText\",\"params\":[],\"smart_remediation_number\":\"9a12ea0f-1b9b-4026-ab3e-e4b150003a04\",\"parent_id\":\"\"},{\"id\":\"5a7772c8-e0b6-491c-95c2-c2fe4c43efc0\",\"type\":\"addNewWindowWarnings\",\"params\":[],\"smart_remediation_number\":\"5a7772c8-e0b6-491c-95c2-c2fe4c43efc0\",\"parent_id\":\"\"},{\"id\":\"a0fc01c2-3d29-4f1b-85bb-f1f1143b3af6\",\"type\":\"addSmartAltText\",\"params\":[],\"smart_remediation_number\":\"a0fc01c2-3d29-4f1b-85bb-f1f1143b3af6\",\"parent_id\":\"\"},{\"id\":\"c1c8ae87-b541-40e8-b847-3c36a35e7428\",\"type\":\"altDuplicateOptIn\",\"params\":[],\"smart_remediation_number\":\"c1c8ae87-b541-40e8-b847-3c36a35e7428\",\"parent_id\":\"\"},{\"id\":\"09faba12-0883-4dba-909a-e88b2ca6e7ae\",\"type\":\"altLong\",\"params\":[],\"smart_remediation_number\":\"09faba12-0883-4dba-909a-e88b2ca6e7ae\",\"parent_id\":\"\"},{\"id\":\"715ac55c-4836-41dd-8174-b80d571d73fc\",\"type\":\"altRedundant\",\"params\":[],\"smart_remediation_number\":\"715ac55c-4836-41dd-8174-b80d571d73fc\",\"parent_id\":\"\"},{\"id\":\"a56710c2-69f1-479f-a497-ff8676e2a990\",\"type\":\"blinkOptIn\",\"params\":[],\"smart_remediation_number\":\"a56710c2-69f1-479f-a497-ff8676e2a990\",\"parent_id\":\"\"},{\"id\":\"5b52e98f-2ed9-4092-a565-c493057d75c9\",\"type\":\"ariaChildlessMenu\",\"params\":[],\"smart_remediation_number\":\"5b52e98f-2ed9-4092-a565-c493057d75c9\",\"parent_id\":\"\"},{\"id\":\"80f06437-ac74-47f7-b901-b828cfac989d\",\"type\":\"automaticNestedLayoutTable\",\"params\":[],\"smart_remediation_number\":\"80f06437-ac74-47f7-b901-b828cfac989d\",\"parent_id\":\"\"},{\"id\":\"e2c93ec3-c862-495c-9e6f-4771edb3b4f9\",\"type\":\"automaticSingleListItem\",\"params\":[],\"smart_remediation_number\":\"e2c93ec3-c862-495c-9e6f-4771edb3b4f9\",\"parent_id\":\"\"},{\"id\":\"ae7e1f3b-d0ba-4b32-b185-950b22f3c493\",\"type\":\"buttonTextContentNotFoundOptIn\",\"params\":[],\"smart_remediation_number\":\"ae7e1f3b-d0ba-4b32-b185-950b22f3c493\",\"parent_id\":\"\"},{\"id\":\"6c18040b-b889-497a-b0fa-82550d53b57b\",\"type\":\"deviceIndependentEvent\",\"params\":[],\"smart_remediation_number\":\"6c18040b-b889-497a-b0fa-82550d53b57b\",\"parent_id\":\"\"},{\"id\":\"02d077c4-e4d8-4c4c-83c2-db19d71759cb\",\"type\":\"fieldsetLegendEmpty\",\"params\":[],\"smart_remediation_number\":\"02d077c4-e4d8-4c4c-83c2-db19d71759cb\",\"parent_id\":\"\"},{\"id\":\"8cc57942-8dac-4125-bdd8-e3a6a1b81355\",\"type\":\"firstHeaderLevelNot1or2\",\"params\":[],\"smart_remediation_number\":\"8cc57942-8dac-4125-bdd8-e3a6a1b81355\",\"parent_id\":\"\"},{\"id\":\"6cdfca7d-172d-4e0c-84ba-8844ce27709a\",\"type\":\"formFieldGroupCheckboxGroupNotFoundOptIn\",\"params\":[],\"smart_remediation_number\":\"6cdfca7d-172d-4e0c-84ba-8844ce27709a\",\"parent_id\":\"\"},{\"id\":\"4164f8ce-bc0f-4f24-a68e-da988946047e\",\"type\":\"formFieldLabelNotFoundOptIn\",\"params\":[],\"smart_remediation_number\":\"4164f8ce-bc0f-4f24-a68e-da988946047e\",\"parent_id\":\"\"},{\"id\":\"26d52685-d99a-4f16-ae40-f49980eb7b2c\",\"type\":\"formFieldLabelOptIn\",\"params\":[],\"smart_remediation_number\":\"26d52685-d99a-4f16-ae40-f49980eb7b2c\",\"parent_id\":\"\"},{\"id\":\"3c8db406-fb2f-48b5-a281-f629341b4da4\",\"type\":\"formFieldMetadataBadAnchor\",\"params\":[],\"smart_remediation_number\":\"3c8db406-fb2f-48b5-a281-f629341b4da4\",\"parent_id\":\"\"},{\"id\":\"7e1aef8f-7522-4079-b85c-ff15af4e6832\",\"type\":\"formFieldMetadataNotFoundOptIn\",\"params\":[],\"smart_remediation_number\":\"7e1aef8f-7522-4079-b85c-ff15af4e6832\",\"parent_id\":\"\"},{\"id\":\"7a6399fe-6b12-4f75-8229-0dd08691d7c0\",\"type\":\"frameTitleDuplicate\",\"params\":[],\"smart_remediation_number\":\"7a6399fe-6b12-4f75-8229-0dd08691d7c0\",\"parent_id\":\"\"},{\"id\":\"1439c03b-611e-4512-bedc-131e8415633a\",\"type\":\"headingEmpty\",\"params\":[],\"smart_remediation_number\":\"1439c03b-611e-4512-bedc-131e8415633a\",\"parent_id\":\"\"},{\"id\":\"da37602d-393e-426d-9c65-a05244312975\",\"type\":\"headingLevelOneCountMultiple\",\"params\":[],\"smart_remediation_number\":\"da37602d-393e-426d-9c65-a05244312975\",\"parent_id\":\"\"},{\"id\":\"de1497c0-a4a6-4a0d-8272-69a1ae18874f\",\"type\":\"headingLevelOneCountZero\",\"params\":[],\"smart_remediation_number\":\"de1497c0-a4a6-4a0d-8272-69a1ae18874f\",\"parent_id\":\"\"},{\"id\":\"2fef6d46-15a0-43ee-9df0-b995a9500195\",\"type\":\"headingSequenceOutOfOrder\",\"params\":[],\"smart_remediation_number\":\"2fef6d46-15a0-43ee-9df0-b995a9500195\",\"parent_id\":\"\"},{\"id\":\"1c6a6f5e-2043-4523-960a-fb9666dda2f6\",\"type\":\"hideEmptyHeaders\",\"params\":[],\"smart_remediation_number\":\"1c6a6f5e-2043-4523-960a-fb9666dda2f6\",\"parent_id\":\"\"},{\"id\":\"6572da6e-2478-4d13-b538-62d0f77a5d19\",\"type\":\"htmlAccessibleNameMismatchOptIn\",\"params\":[],\"smart_remediation_number\":\"6572da6e-2478-4d13-b538-62d0f77a5d19\",\"parent_id\":\"\"},{\"id\":\"ea142916-0154-4a8f-a8ab-13eb0b913a57\",\"type\":\"htmlAriaRolesAttributeNotAppropriate\",\"params\":[],\"smart_remediation_number\":\"ea142916-0154-4a8f-a8ab-13eb0b913a57\",\"parent_id\":\"\"},{\"id\":\"831d31b2-20fa-4e3b-8cd4-0df0cabd4cbe\",\"type\":\"htmlAriaRolesInvalidRole\",\"params\":[],\"smart_remediation_number\":\"831d31b2-20fa-4e3b-8cd4-0df0cabd4cbe\",\"parent_id\":\"\"},{\"id\":\"35d1ac7b-eacd-4c55-9aeb-7a9070d7aa68\",\"type\":\"htmlAriaRolesRoleMissingParent\",\"params\":[],\"smart_remediation_number\":\"35d1ac7b-eacd-4c55-9aeb-7a9070d7aa68\",\"parent_id\":\"\"},{\"id\":\"9562a349-926d-4cd4-ae53-0f1e1fbd36e8\",\"type\":\"htmlFocusSequenceAriaHiddenTabbableOptIn\",\"params\":[],\"smart_remediation_number\":\"9562a349-926d-4cd4-ae53-0f1e1fbd36e8\",\"parent_id\":\"\"},{\"id\":\"3c81faf7-c91e-478a-91f9-c258869d7cad\",\"type\":\"htmlLandmarksMultipleComplementary\",\"params\":[],\"smart_remediation_number\":\"3c81faf7-c91e-478a-91f9-c258869d7cad\",\"parent_id\":\"\"},{\"id\":\"53a65df8-f132-4d95-86b0-32bab9b1af32\",\"type\":\"htmlLandmarksMultipleMains\",\"params\":[],\"smart_remediation_number\":\"53a65df8-f132-4d95-86b0-32bab9b1af32\",\"parent_id\":\"\"},{\"id\":\"436a1694-a8dd-4f9a-a37c-4fc8216d1ab4\",\"type\":\"htmlLandmarksMultipleNavsOptIn\",\"params\":[],\"smart_remediation_number\":\"436a1694-a8dd-4f9a-a37c-4fc8216d1ab4\",\"parent_id\":\"\"},{\"id\":\"b631c34a-49e2-40c4-8cb3-c2560823bbb6\",\"type\":\"htmlSkipToMainOptIn\",\"params\":[],\"smart_remediation_number\":\"b631c34a-49e2-40c4-8cb3-c2560823bbb6\",\"parent_id\":\"\"},{\"id\":\"5e4c8418-7030-45ee-96c3-7b37b5e0fceb\",\"type\":\"interactiveElementKeyboardActivation\",\"params\":[],\"smart_remediation_number\":\"5e4c8418-7030-45ee-96c3-7b37b5e0fceb\",\"parent_id\":\"\"},{\"id\":\"3e68a57c-3363-4c2f-87fc-4b8ba05f3f56\",\"type\":\"labelEmpty\",\"params\":[],\"smart_remediation_number\":\"3e68a57c-3363-4c2f-87fc-4b8ba05f3f56\",\"parent_id\":\"\"},{\"id\":\"3ac5c4b4-8034-4ccc-924d-d059116eb01d\",\"type\":\"linkAdjacentSameHREFOptIn\",\"params\":[],\"smart_remediation_number\":\"3ac5c4b4-8034-4ccc-924d-d059116eb01d\",\"parent_id\":\"\"},{\"id\":\"dec9482e-409f-42a8-9476-b97ef985b6d6\",\"type\":\"linkEmptyOptIn\",\"params\":[],\"smart_remediation_number\":\"dec9482e-409f-42a8-9476-b97ef985b6d6\",\"parent_id\":\"\"},{\"id\":\"37973787-fd4f-478d-addf-ffee7191a880\",\"type\":\"linkHrefNoneOptIn\",\"params\":[],\"smart_remediation_number\":\"37973787-fd4f-478d-addf-ffee7191a880\",\"parent_id\":\"\"},{\"id\":\"3728a789-3786-4d56-befb-44d9da225738\",\"type\":\"linkImgTextAltBlankOptIn\",\"params\":[],\"smart_remediation_number\":\"3728a789-3786-4d56-befb-44d9da225738\",\"parent_id\":\"\"},{\"id\":\"35a1ce19-7923-446e-b33e-0a1427b33419\",\"type\":\"linkImgTextAltNotFoundOptIn\",\"params\":[],\"smart_remediation_number\":\"35a1ce19-7923-446e-b33e-0a1427b33419\",\"parent_id\":\"\"},{\"id\":\"426233dc-de0a-44bf-b59a-cfecb1a9dd6a\",\"type\":\"linkSamePageAddButtonRoleAndKeydown\",\"params\":[],\"smart_remediation_number\":\"426233dc-de0a-44bf-b59a-cfecb1a9dd6a\",\"parent_id\":\"\"},{\"id\":\"aed758f3-ef70-4878-93c9-299515725546\",\"type\":\"linkSamePageAnchorInvalidOptIn\",\"params\":[],\"smart_remediation_number\":\"aed758f3-ef70-4878-93c9-299515725546\",\"parent_id\":\"\"},{\"id\":\"1ccaa9fe-7c10-4b5b-a46b-3488ab33d96b\",\"type\":\"linkTextContentNotDescriptiveOptIn\",\"params\":[],\"smart_remediation_number\":\"1ccaa9fe-7c10-4b5b-a46b-3488ab33d96b\",\"parent_id\":\"\"},{\"id\":\"17cafec1-6f1a-49f8-bc54-f642c6d95ed1\",\"type\":\"linkTextContentNotFoundOptIn\",\"params\":[],\"smart_remediation_number\":\"17cafec1-6f1a-49f8-bc54-f642c6d95ed1\",\"parent_id\":\"\"},{\"id\":\"fb5e49f1-fd4e-46e8-90e5-215569718df5\",\"type\":\"linkTextContentRedundantOptIn\",\"params\":[],\"smart_remediation_number\":\"fb5e49f1-fd4e-46e8-90e5-215569718df5\",\"parent_id\":\"\"},{\"id\":\"a10d6d0c-f411-4adb-990f-d2873dff817f\",\"type\":\"makeLinkImgAltDecorative\",\"params\":[],\"smart_remediation_number\":\"a10d6d0c-f411-4adb-990f-d2873dff817f\",\"parent_id\":\"\"},{\"id\":\"b199d7a5-e07b-4813-a444-673bc65692ab\",\"type\":\"oneItemList\",\"params\":[],\"smart_remediation_number\":\"b199d7a5-e07b-4813-a444-673bc65692ab\",\"parent_id\":\"\"},{\"id\":\"82dfb339-3fd1-4d48-86bf-b42123bec2ed\",\"type\":\"removeInvalidLabelReferences\",\"params\":[],\"smart_remediation_number\":\"82dfb339-3fd1-4d48-86bf-b42123bec2ed\",\"parent_id\":\"\"},{\"id\":\"14d41e24-5a97-4762-a115-f03095777daf\",\"type\":\"removeLinkRedundancies\",\"params\":[],\"smart_remediation_number\":\"14d41e24-5a97-4762-a115-f03095777daf\",\"parent_id\":\"\"},{\"id\":\"675976ca-f435-4bd1-8146-d7ba2ae70c32\",\"type\":\"setDocLang\",\"params\":[],\"smart_remediation_number\":\"675976ca-f435-4bd1-8146-d7ba2ae70c32\",\"parent_id\":\"\"},{\"id\":\"d140a193-7562-4758-b9e1-12a4b8980064\",\"type\":\"spacerAlt\",\"params\":[],\"smart_remediation_number\":\"d140a193-7562-4758-b9e1-12a4b8980064\",\"parent_id\":\"\"},{\"id\":\"d3119037-c6c5-4206-a1aa-0d566d0df207\",\"type\":\"tabindexGreater\",\"params\":[],\"smart_remediation_number\":\"d3119037-c6c5-4206-a1aa-0d566d0df207\",\"parent_id\":\"\"},{\"id\":\"c89306df-0712-4f6d-af99-7eef8733c7f2\",\"type\":\"tableLayout\",\"params\":[],\"smart_remediation_number\":\"c89306df-0712-4f6d-af99-7eef8733c7f2\",\"parent_id\":\"\"},{\"id\":\"87254492-1714-49f4-81ac-7488398c98ff\",\"type\":\"thEmpty\",\"params\":[],\"smart_remediation_number\":\"87254492-1714-49f4-81ac-7488398c98ff\",\"parent_id\":\"\"},{\"id\":\"7fe66893-110a-40a4-8cf1-c2c625da67ef\",\"type\":\"titleRedundantOptIn\",\"params\":[],\"smart_remediation_number\":\"7fe66893-110a-40a4-8cf1-c2c625da67ef\",\"parent_id\":\"\"}];\n\n        <\/script>\n    <\/div>\n    \n    <!--\n        Versioning Control Panel if versioning = true !\n    -->\n        \n    <!--\n        Launcher\n    -->\n    <span id=\"ae_placeholder_launcher\" style=\"display: none;\" aria-hidden=\"true\"><\/span>\n\n    <!-- Toolbar -->\n\n    <span id=\"ae_placeholder_toolbar\" style=\"display: none;\" aria-hidden=\"true\"><\/span>\n\n    <!--\n        Site Menu\n    -->\n    <span id=\"ae_placeholder_site-menu\" style=\"display: none;\" aria-hidden=\"true\"><\/span>\n\n    \n    <!--\n        Generic Aria Live message container\n    -->\n    <div class=\"ae-blurb-noaudio\" id=\"ae_enabled_messages\" aria-relevant=\"additions\" aria-live=\"assertive\"><\/div>\n\n    \n    <!-- Symbol definitions -->\n    <svg style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\">\n        <defs>\n            <symbol id=\"icon-close-carousel\" viewBox=\"0 0 32 32\">\n                <title>close carousel<\/title>\n                <path fill=\"#ffffff\" style=\"fill: var(--color1, #ffffff)\" d=\"M28.992 0l-12.992 12.992-12.992-12.992-3.008 3.008 12.992 12.992-12.992 12.992 3.008 3.008 12.992-12.992 12.992 12.992 3.008-3.008-12.992-12.992 12.992-12.992-3.008-3.008z\"><\/path>\n            <\/symbol>\n        <\/defs>\n    <\/svg>\n\n<\/div><!-- end #ae_app -->",
            'container_id': "5719",
            'site_id': site_id,
            'version_id': "",
            'is_working_version_request': false,
            'live_scanner': false,
            'live_scanner_open': false,
            'monitor': false,
            'live_monitor_endpoint_url': ae_choose(
                "https://report-prod.audioeye.com/v1/report",
                "https://analytics.audioeye.com/air/report",
                0.000001            ),

                        'perf_endpoint_url': '',
            'loader_timing_endpoint_url': "https:\/\/zalywzdew6.execute-api.us-west-2.amazonaws.com\/prod\/v0\/timing",
            'product_config': options,
            'device': device,
            'testmode': window.AEUnitTests,
            'site_hash': "83605a848e2897df095c1a05ed7249d7",
            'toolbar_version': 2        });
    };

    // Execute startup routine
    loaderRunStartup(1);
    
    window.AudioEye = Object.assign(window.AudioEye || {}, AudioEye);
};

loaderFunction(1);