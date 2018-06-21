alert('XXX');

(function() {
  var HOST = location.origin.replace(/^http/, 'ws');
  var ws = new WebSocket(HOST);
  
  var form = document.querySelector('.form');

  // Transmit
  form.onsubmit = function() {
    var input = document.querySelector('.input'); 
    var text = input.value;
    ws.send(text);
    input.value = '';
    input.focus();
    return false;
  }
  
  // Recieve
  ws.onmessage = function(msg) {
    var response = msg.data;
    var messageList = document.querySelector('.messages');
    var li = document.createElement('li');
    li.textContent = response;
    messageList.appendChild(li);
  }
}());
