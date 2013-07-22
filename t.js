document.addEventListener('DOMContentLoaded', function () {
  var storage = chrome.storage.local;
  var t = document.querySelector('#t');
  if(t) {
    storage.get('t', function(items){
      if(items.t){
        t.value = items.t;
      }
    });
    t.addEventListener('keypress', function(){
      storage.set({'t': this.value});
    });
  }
});
