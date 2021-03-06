var msgText = "Are you sure you want to permanently delete this assignment?";
var html = document.querySelector('html');

var panel = document.createElement('div');
panel.setAttribute('class', 'msgBox');

var msg = document.createElement('p');
msg.textContent = msgText;
panel.appendChild(msg);

var del = document.createElement('button');
var cancel = document.createElement('button');
var delText = document.createTextNode("Delete");
var cancelText = document.createTextNode("Cancel");
del.appendChild(delText);
cancel.appendChild(cancelText);
del.setAttribute('onclick','deleteAssignment()');
cancel.setAttribute('onclick','cancelMsgBox()');
del.setAttribute('class','msgButton');
cancel.setAttribute('class','msgButton');

panel.appendChild(cancel);
panel.appendChild(del);

var dimDiv = document.createElement('div');
dimDiv.setAttribute('id', 'dimmer');
html.appendChild(dimDiv);

function confirmDelete() {
   html.appendChild(panel);
   dim(true);
}
function deleteAssignment() {
   html.removeChild(panel);
   document.getElementById('assign2').style.display = 'none';
   dim(false);
}
function cancelMsgBox() {
   html.removeChild(panel);
   dim(false);
}

function dim(bool) {
   document.getElementById('dimmer').style.display = (bool? 'block' : 'none');
}

function start_studentView() {
   document.getElementById('students-link').style.display = 'none';
   document.getElementById('post-assignment').style.display = 'none';
   var buttons = document.getElementsByClassName('delButton');
   for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.display = 'none';
   }
}

function start_adminView() {
   document.getElementById('students-link').style.display = 'inline-block';
   document.getElementById('post-assignment').style.display = 'block';
   var buttons = document.getElementsByClassName('delButton');
   for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.display = 'inline';
   }
}

function checkAccount() {
   if (sessionStorage.admin == 'true') {
      start_adminView();
   } else {
      start_studentView();
   }
}

checkAccount();
