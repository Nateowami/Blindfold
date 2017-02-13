var scripts = ['lib/jquery-3.1.1.min.js', 'lib/gmail.js', 'blindfold.js'];

scripts.forEach(function (script) {
  var tag = document.createElement('script');
  tag.src = chrome.extension.getURL(script);
  (document.head || document.documentElement).appendChild(tag);
});

// var j = document.createElement('script');
// j.src = chrome.extension.getURL('jquery-1.10.2.min.js');
// (document.head || document.documentElement).appendChild(j);
//
// var g = document.createElement('script');
// g.src = chrome.extension.getURL('gmail.js');
// (document.head || document.documentElement).appendChild(g);
//
// var s = document.createElement('script');
// s.src = chrome.extension.getURL('main.js');
// (document.head || document.documentElement).appendChild(s);
