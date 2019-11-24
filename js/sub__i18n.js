$.i18n().load({
  'en': 'i18n/en.json',
  'ko': 'i18n/ko.json',
  'ja': 'i18n/ja.json'
});

function i18n_message() {
  if (typeof list_message === "undefined" || $('#message').text() == "MESSAGE") {
    const list_message = [];
    for (var i = 0; i < 99; i++) {
      var m = $.i18n('message_' + i);
      if (m != 'message_' + i) {
        // console.log('ddd: ' + i);
        list_message.push(m);
      } else {
        break;
      }
    }
    console.log('i18n was activated. (message)');
    $('#message').html(list_message[Math.floor(Math.random() * (list_message.length))]);
  } else {
    setTimeout(function() {
      console.log('ERROR: i18n was not activated because DOM is not ready. (message)');
      console.log(list_message);
      i18n_message();
    }, 100);
  }
}

function i18n_set() {
  // $.i18n().locale = "ja";

  $('[data-i18n]').i18n();
  $('#input_textarea').attr('placeholder', $.i18n('input_textarea_placeholder_0'));
  $('#html').attr('placeholder', $.i18n('input_textarea_placeholder_0'));

  $("meta[name='description']").attr("content", $.i18n('descript') + ' ' + $.i18n('translator') + ' + ' + $.i18n('analyzer'));

  // if ($('.card_header.auto').text() == 'lang_auto') {
  if ($('#i18n_checker').text() == '#morse' || $('#i18n_checker').length == 0) {
    setTimeout(function() {
      console.log('ERROR: i18n was not activated because DOM is not ready.');
      i18n_set();
    }, 100);
  } else {
    console.log('i18n was activated.');
  }
}

$(document).ready(function() {
  i18n_message();
  i18n_set();
});
