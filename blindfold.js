/* eslint-env browser */
/* global Gmail */
/* eslint no-undef: "error" */

var gmail;

function refresh(f) {
  if( (/in/.test(document.readyState)) || (typeof Gmail === 'undefined') ) {
    setTimeout('refresh(' + f + ')', 10);
  } else {
    f();
  }
}

function info(msg) {
  console.info("Blindfold: " + msg);
}

var main = function(){
  gmail = new Gmail();
  info('Initialized');

  gmail.observe.before('send_message', function(url, body, data, xhr){
      info('Message sending detected');
      var body_params = xhr.xhrParams.body_params;
      var ccCount = body_params.cc ? (typeof body_params.cc === 'array' ? body_params.cc.length : 1) : 0;
      var toCount = body_params.to ? (typeof body_params.to === 'array' ? body_params.to.length : 1) : 0;
      var total = toCount + ccCount;

      if(total > 1) {
        info('Prompting before sending this message');
        if(!confirm('Send a message to ' + total + ' recepiants in to and carbon copy fields?')) {
          xhr.abort();
          info('Canceling send as instructed by user');
        }
        else info('Continuing with send as instructed by user');
      }
      else info('Not prompting before sending this message');
  })

}


refresh(main);
