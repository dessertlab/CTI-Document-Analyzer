$(function() {

    if (typeof cbVarMap == 'undefined' || cbVarMap == null || $.isEmptyObject(cbVarMap)) {
        cbVarMap = {};
    } else {
        populateCompanyData();
    }


function getVisitorCompanyDetails() {

       var mktVisitorCompanyDetailsCookie = decodeURI(getCookie('mktVisitorCompanyDetails'));
        if (mktVisitorCompanyDetailsCookie != '' && mktVisitorCompanyDetailsCookie != 'undefined') {
            deleteCookie('mktVisitorCompanyDetails');
        }
       var companyData = window.Dmdbase_CDC;
       console.log("companyDataattribution",companyData);
        if (typeof companyData !="undefined" && typeof companyData.CompanyProfile !="undefined" && companyData.CompanyProfile) {
             companyData = companyData.CompanyProfile;
            if (companyData.isp == false) {
                cbVarMap = {
                    "Company_From_IP__c": companyData.company_name || '',
                    "Industry": companyData.industry || '',
                    "Sub_Industry__c": companyData.sub_industry || '',
                    "RL_Primary_Sic__c": companyData.primary_sic || '',
                    "RL_Primary_Naics__c": companyData.primary_naics || '',
                    "RL_Address__c": companyData.street_address || '',
                    "RL_City__c": companyData.city || '',
                    "RL_State__c": companyData.state || '',
                    "RL_ZIP_Postal_Code__c": companyData.zip || '',
                    "RL_Country_from_IP__c": companyData.country ? companyData.country : companyData.country_name,
                    "RL_Phone__c": companyData.phone || '',
                    "Website": companyData.web_site || '',
                    "RL_Annual_Revenue_Range__c": companyData.revenue_range || '',
                    "RL_Employee_Range__c": companyData.employee_range || '',
                    "Latitude_based_on_IP__c": companyData.latitude || '',
                    "Longitude_based_on_IP__c": companyData.longitude || '',
                    "IP_Address__c": companyData.ip || '',
                    "RL_Company_LegalName__c": companyData.company_name || '',
                    "RL_Provider__c": "demandbase"
                };
                if (typeof _satellite != 'undefined') {
                    _satellite.track('cbVarMapTrack');
                    console.log("attribution tracking analytics cbVarMap");
                }
            }
        }
        populateCompanyData();
}

    $(document).on("getDmdbaseCompanyData", {
       // msg: "Msg"
    }, function(e, param) {
        //param will be window.Dmdbase_CDC triggered by DTM
       // console.log("attribution param window.Dmdbase_CDC attribution file",param);
        if(typeof param !="undefined"){
            getVisitorCompanyDetails();
        }
    });

    // sets the session cookie for usage for accessing the site.
    function setVisitorCompanyDetailsCookie(key, value, cookieExpirationTime) {
        var expires;
        if (cookieExpirationTime) {
           var date = new Date();
            date.setTime(date.getTime() + (cookieExpirationTime * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "; expires=0";
        }

         document.cookie = key + '=' + value + expires + "; path=/";
    }

    // deletes cookie
    function deleteCookie(name) {
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        console.log("cookie is deleted " + name);
    }

    // getCookie for usage for accessing the site.
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function populateCompanyData(regFormName) {
        var serialized = "";
        var fields = "";
        for (var i in cbVarMap) {
            if (typeof cbVarMap[i] == 'undefined' || !String.prototype.trim.call(cbVarMap[i] == null ? "" : cbVarMap[i])) {
                cbVarMap[i] = '';
            }
            serialized = serialized + "&" + i + "=" + cbVarMap[i];
            fields =
                fields +
                '<input type="hidden" name="' +
                i +
                '" value="' +
                cbVarMap[i] +
                '">';
        }

        if (typeof regFormName !== "undefined") {
            if ($("form[name='" + regFormName + "']").length > 0) {
                $("form[name='" + regFormName + "']").append(fields);
            }
        } else {
            $("form").each(function() {
                var currentFormId = $(this).attr("id");
                var actionVal = $(this).attr("action");
                if (typeof currentFormId === typeof undefined) {
                    currentFormId = "";
                }
                if (typeof actionVal === typeof undefined) {
                    actionVal = "";
                }
                if (
                    actionVal.indexOf("/search") < 0 &&
                    currentFormId.indexOf("solr.form") < 0 &&
                    currentFormId.indexOf("footer_form_manage_subscriptions") < 0
                ) {
                    $(this).append(fields);
                }
            });
        }

        return serialized;
    }

    getSerializedTracking();
});

function getSerializedTracking() {
    var serialized = "";
    var fields = "";
    var qs = {},
        e,
        n,
        q,
        d = function(s) {
            return decodeURIComponent(s.replace(/\+/g, " "));
        },
        r = /([^&=]+)=?([^&]*)/g;
    while ((e = r.exec(window.location.search.substring(1)))) {
        q = q || e[1].indexOf("utm_") >= 0;
        qs[d(e[1])] = d(e[2]);
    }
    if (!q) {
        // set utmz from cookie if not in querytring
        var utm = {
            csr: "source",
            cmd: "medium",
            ccn: "campaign",
            ctr: "term",
            cct: "content"
        };

        var ks = new Array();
        for (var k in utm) {
            ks.push(k);
        }
        r = new RegExp("utm(" + ks.join("|") + ")=([^|;]+)?", "g");
        while ((e = r.exec(document.cookie))) qs["utm_" + utm[e[1]]] = d(e[2]); // store in array

        // setTimeout(function() {
        //   if (qs[0] === undefined) {
        //     //console.log("UTM2");
        //     r = new RegExp("utm(" + ks.join("|") + ")=([^|;]+)?", "g");
        //     while ((e = r.exec(document.cookie))) qs["utm_" + utm[e[1]]] = d(e[2]);
        //   }
        // }, 2000);
    }
    //console.log(qs);
    for (var utmparam in qs) {
        var actualFieldName;

        if (utmparam == "utm_source") {
            actualFieldName = "utm_source__c";
        } else if (utmparam == "utm_medium") {
            actualFieldName = "utm_medium__c";
        } else if (utmparam == "utm_term") {
            actualFieldName = "utm_term__c";
        } else if (utmparam == "utm_keyword") {
            actualFieldName = "Google_Keyword__c";
        } else if (utmparam == "utm_content") {
            actualFieldName = "utm_content__c";
        } else if (utmparam == "utm_network") {
            actualFieldName = "utm_network__c";
        } else if (utmparam == "utm_campaign") {
            actualFieldName = "utm_campaign__c";
        } else if (utmparam == "utm_name") {
            actualFieldName = "utm_name__c";
        } else if (utmparam == "utm_sitetarget") {
            actualFieldName = "Eloqua_utm_sitetarget__c";
        } else if (utmparam == "custom1") {
            actualFieldName = "utm_custom1__c";
        } else if (utmparam == "custom2") {
            actualFieldName = "utm_custom2__c";
        } else if (utmparam == "gclid") {
            actualFieldName = "GCLID__c";
        } else if (utmparam == "lfclid") {
            actualFieldName = "utm_lfclid__c";
        } else if (utmparam == "guid") {
            actualFieldName = "utm_guid__c";
        } else if (utmparam == "ps") {
            actualFieldName = "utm_ps__c";
        } else if (utmparam == "ts") {
            actualFieldName = "utm_ts__c";
        } else {
            /**
             * Fix to mitigate issues of when item does not exist in qs
             */
            actualFieldName = null;
        }
        if (actualFieldName) {
            serialized =
                serialized +
                "&" +
                actualFieldName +
                "=" +
                encodeURIComponent(qs[utmparam]);
            if ($("form").find("input[name='" + actualFieldName + "']").length > 0) {
                $("form")
                    .find("input[name='" + actualFieldName + "']")
                    .val(encodeURIComponent(qs[utmparam]));
            } else {
                fields =
                    fields +
                    '<input type="hidden" name="' +
                    actualFieldName +
                    '" value="' +
                    encodeURIComponent(qs[utmparam]) +
                    '">';
            }
        }
    }
    if (document.referrer.indexOf("go.paloaltonetworks.com") >= 0) {
        var linkforceId = document.referrer.replace(
            "http://go.paloaltonetworks.com/",
            ""
        );
        serialized = serialized + "&utm_lfclid__c=" + linkforceId;
        fields =
            fields +
            '<input type="hidden" name="utm_lfclid__c" value="' +
            encodeURIComponent(linkforceId) +
            '">';
    }
    $("form").each(function() {
    		var currentFormId = $(this).attr("id");
        var actionVal = $(this).attr("action");
        if (typeof currentFormId === typeof undefined) {
            currentFormId = "";
        }
        if (typeof actionVal === typeof undefined) {
            actionVal = "";
        }
        if (
            actionVal.indexOf("/search") < 0 &&
            currentFormId.indexOf("solr.form") < 0 &&
            currentFormId.indexOf("footer_form_manage_subscriptions") < 0
        ) {
            $(this).append(fields);
        }
    });

    if (serialized.charAt(0) == '&') {
      serialized = serialized.substring(1);
    }

    return serialized;
}
