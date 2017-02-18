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
      var ccCount = body_params.cc ? (body_params.cc instanceof Array ? body_params.cc.length : 1) : 0;
      var toCount = body_params.to ? (body_params.to instanceof Array ? body_params.to.length : 1) : 0;
      var total = toCount + ccCount;

      if(total > 1) {
        info('Prompting before sending this message (' + total
            + ' recepiants detected in to and cc fields. That\'s ' + toCount
            + '  in the to field, and ' + ccCount + ' in the cc field.)');
        if(!confirm('Send a message to ' + total + ' recepiants in to and carbon copy fields?')) {
          xhr.abort();
          info('Canceling send as instructed by user');
          throw new Error('Hey! Stop sending that email!')
        }
        else info('Continuing with send as instructed by user');
      }
      else info('Not prompting before sending this message');
  })

}


refresh(main);
