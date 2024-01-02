"use strict";

window.document.observe('dom:loaded', function(){
  setupFeedback();
});

/*
 * setupFeedback
 * フィードバックのセットアップ
 */
var setupFeedback = function() {
  var form = $("feedback_form");
  if(!form) return;
  form.disable().up(".feedback").removeClassName("feedback_noscript");

  var is_page_english = $(document.body).hasClassName("page_english");

  var loaderHtml = '&nbsp;<img src="/common/feedback/images/fb_loader.gif" alt="" />';
  var feedback_host = window.location.protocol + $("feedback_host").value;

  // 統計情報の取得
  var updateStats = function() {
    getJSONP(feedback_host + "get_feedback_jsonp.cgi?uri=" + window.location.pathname);
  };
  form.down(".result").update(loaderHtml);
  setTimeout(updateStats, 0);

  var sendButton = form.down("input.button");
  var initializeElements = function() {
    $("is_usefull_yes").checked = false;
    $("is_usefull_no").checked = false;
    $("free_text").value = "";
    sendButton.disable();
  };
  initializeElements();
  var changeButtonEnabled = function() {
    var checkedAny = ($("is_usefull_yes").checked || $("is_usefull_no").checked);
    if(checkedAny || $("free_text").value.length > 0) {
      sendButton.enable();
    }else{
      sendButton.disable();
    }
  };

  var showPrompt = function(prompt) {
    changeButtonEnabled();
    if(!$("free_text").hasClassName("prompt") && $("free_text").value != "") return;
    $("free_text").value = prompt;
    $("free_text").addClassName("prompt");
  };
  $("free_text").observe("focus", function() {
    if(!$("free_text").hasClassName("prompt")) return;
    $("free_text").value = "";
    $("free_text").removeClassName("prompt");
  });

  // フォーム内の操作でボタンの活性化を切り替える
  var promptYes = "「はい」と答えた理由をご記入ください。（任意）";
  var promptNo = "「いいえ」と答えた理由をご記入ください。（任意）";

  if(is_page_english) {
    promptYes = "Please leave a comment for your answer. (Optional)";
    promptNo = "Please leave a comment for your answer. (Optional)";
  }

  $("is_usefull_yes").observe("click", showPrompt.curry(promptYes));
  $("is_usefull_no").observe("click", showPrompt.curry(promptNo));
  $("free_text").observe("keyup", changeButtonEnabled);

  // 送信ボタンのクリックイベントを処理
  sendButton.observe("click", function(event) {
    if($("free_text").hasClassName("prompt")) $("free_text").value = "";
    // 前後の空白を削除してから、1000文字で切り捨て
    $("free_text").value = $("free_text").value.replace(/^\s+|\s+$/g, "");
    $("free_text").value = $("free_text").value.substr(0, 1000);
    //$("uri").value = window.location.pathname;
    $("uri").value = window.location;
    $("redirect_to").value = window.location.href;
    $("token").value = token || '';

    var ajaxTimeoutTimer;
    var onSuccess = function(responseText) {
      clearTimeout(ajaxTimeoutTimer);
      form.down(".loader").hide();
      form.up(".feedback").addClassName("feedback_done");
      form.down(".result").update(loaderHtml);
      var json = responseText.evalJSON();
      parseFeedbackInfo(json);
    };
    var onFailure = function() {
      form.down(".thanks").update(is_page_english ? "Error occurred" : "送信できませんでした。");
      form.down(".loader").hide();
      form.up(".feedback").addClassName("feedback_done");
    };

    if(navigator.userAgent.toLowerCase().search(/msie\s[67]|opera/) != -1) {
      // IE6, IE7 は form を post 処理
      form.action = feedback_host + "post_feedback_by_form.cgi";
      form.method = "post";
      form.submit();
    }else{
      // モダンブラウザは Ajax 処理

      // post する内容を取得
      var postBody = form.serialize();

      // フォームを使用不可にし、Loaderを表示
      form.disable().down(".loader").show();
      var url = feedback_host + "post_feedback_by_ajax.cgi";

      // フィードバックの送信
      if(window.XDomainRequest) {
        var xdr = new XDomainRequest();
        if(xdr) {
          xdr.timeout = 10 * 1000;
          xdr.onload = function() { onSuccess(xdr.responseText); };
          xdr.onerror = onFailure;
          xdr.ontimeout = onFailure;
          xdr.open("post", url);
          xdr.send(postBody);
        }
      }else{
        new Ajax.Request(url, {
          method: "post",
          postBody: postBody,
          onSuccess: function(xhr) { onSuccess(xhr.responseText); },
          onFailure: onFailure
        });
        // タイムアウト処理
        ajaxTimeoutTimer = setTimeout(onFailure, 10 * 1000);
      }
    }
    event.preventDefault();
    if(window.event) window.event.returnValue = false;
  });

  // フォームを使用可能にする
  form.enable();
  changeButtonEnabled();
};

var jsonpTimeoutTimer;
var getJSONP = function(src) {
  var script = document.createElement('script');
  script.src = src + "&_d=" + new Date().getTime();
  document.body.appendChild(script);

  // タイムアウト処理
  jsonpTimeoutTimer = setTimeout(timeoutJSONP, 10 * 1000);
};

var token = '';
var parseFeedbackInfo = function(json) {
  clearTimeout(jsonpTimeoutTimer);
  var form = $("feedback_form");
  if(!form) return;
  var is_page_english = $(document.body).hasClassName("page_english");
  try {
    var message = "";
    if(is_page_english) {
      message += json.useful > 0 ? "<span class='count'>" + json.useful + "</span>" : json.useful;
      if(json.total) message += " of " + json.total;
      message += " people found this content helpful.";
    }else{
      if(json.total >= 0) message += json.total + "人中、";
      message += json.useful > 0 ? "<span class='count'>" + json.useful + "</span>" : json.useful;
      message += "人が「このページが役に立った」と言っています。";
    }
    form.down(".result").update(message);
  }catch(e){
    form.down(".result").update(is_page_english ? "Error occurred" : "取得できませんでした。");
  }
  if(json.token) token = json.token;
};

var timeoutJSONP = function() {
  var form = $("feedback_form");
  if(!form) return;
  var is_page_english = $(document.body).hasClassName("page_english");
  form.down(".result").update(is_page_english ? "Error occurred" : "取得できませんでした。");
};

