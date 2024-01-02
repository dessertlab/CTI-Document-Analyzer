const serverUrl = "https://intentstream.contanuity.com/api";
async function appendScriptTag(link) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.onload = resolve;
    script.onerror = reject;
    script.async = true;
    script.src = link;
    document.head.appendChild(script);
  });
}
appendScriptTag(
  `https://cdn.jsdelivr.net/npm/@fingerprintjs/fingerprintjs@3/dist/fp.min.js`
)
  .then(() => FingerprintJS.load())
  .then((fp) => fp.get())
  .then((result) => {
    const visitorId = result.visitorId + "_" + new Date().valueOf();
    const currentWebsiteUrl = encodeURIComponent(window.location.href);
    const serverUrl = window.TAG_INFO.serverUrl;
    const link = `${serverUrl}/page-tracking/${window.TAG_INFO.identifier}/${currentWebsiteUrl}?visitorId=${visitorId}&&clientId=${window.TAG_INFO.clientId}&&cookieEnabled=${navigator.cookieEnabled}`;
    const conLink = `https://tracking.contanuity.com/tracking?visitorId=${visitorId}&&clientId=${window.TAG_INFO.clientId}&&cookieEnabled=${navigator.cookieEnabled}`;
    const bidrLink = `https://match.prod.bidr.io/cookie-sync/contanuity?buyer_user_id=${visitorId}`;
    appendScriptTag(link)
      .then((x) => appendScriptTag(conLink))
      .then((x) => appendScriptTag(bidrLink));
  })
  .catch((x) => {});

(async function loadGTM() {
  const response = await fetch(
    serverUrl + `/site-visitors?pageIdentifier=${window.TAG_INFO.identifier}`,
    {
      headers: {
        "x-pixel-auth": "true",
      },
    }
  );
  const data = await response.json();
  if (data[0].GTMPublicId) {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-" + data[0].GTMPublicId);
  }
})();
