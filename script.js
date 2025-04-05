
document.getElementById('call-now').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('call-box').style.display = 'block';
});

document.getElementById('close-call').addEventListener('click', function() {
    document.getElementById('call-box').style.display = 'none';
});

