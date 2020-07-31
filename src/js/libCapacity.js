// APi Endpoint
var baseEndpoint = 'https://api.density.io/v2/';

// API Auth Token
var densityToken = 'tok_Gj4NFeMxCtg62gZeDvsgygVy6elahJyE2m6owBA9VCA';

// API id for room in questions
var space_id = 'spc_768300251122499898';

var countEl = document.querySelector('.occ');

export var webSocketOccupants = new XMLHttpRequest();
export var initialOccupants = new XMLHttpRequest();

initialOccupants.open('GET', baseEndpoint + 'spaces/' + space_id, true);
initialOccupants.setRequestHeader('Authorization', 'Bearer ' + densityToken);

initialOccupants.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = JSON.parse(this.response);
    var count = data.current_count;

    // set html display
    console.log(count);

    countEl.innerHTML = '<p>' + count + '</p>';
  } else {
    console.log('error');
    // We reached our target server, but it returned an error
  }
};

webSocketOccupants.open('POST', baseEndpoint + 'sockets', true);
webSocketOccupants.setRequestHeader('Authorization', 'Bearer ' + densityToken);

webSocketOccupants.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var response = JSON.parse(this.response);
    var densityWS = new WebSocket(response.url);

    densityWS.onmessage = function(event) {
      var data = JSON.parse(event.data);

      if (data.payload.space_id == space_id) {
        var count = data.payload.count;

        // set html display
        countEl.innerHTML = '<p>' + count + '</p>';
      }
    };
  } else {
    // We reached our target server, but it returned an error
    console.log('error');
  }
};

initialOccupants.onerror = function() {
  countEl.innerHTML =
    '<p> An error has occurred. Please try again shortly.</p>';
};

webSocketOccupants.onerror = function() {
  countEl.innerHTML =
    '<p> An error has occurred. Please try again shortly.</p>';
};

initialOccupants.send();
webSocketOccupants.send();
