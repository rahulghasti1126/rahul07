document.getElementById('whatsapp-chat').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('whatsapp-chat-box').style.display = 'block';
});

document.getElementById('call-now').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('call-box').style.display = 'block';
});

document.getElementById('close-chat').addEventListener('click', function() {
    document.getElementById('whatsapp-chat-box').style.display = 'none';
});

document.getElementById('close-call').addEventListener('click', function() {
    document.getElementById('call-box').style.display = 'none';
});