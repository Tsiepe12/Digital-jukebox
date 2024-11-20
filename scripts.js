document.addEventListener('DOMContentLoaded', () => {
    const payBtn = document.getElementById('payBtn');
    const songButtons = document.querySelectorAll('.song');

    songButtons.forEach(button => {
        button.addEventListener('click', () => {
            playSong(button.getAttribute('data-song'));
        });
    });

    payBtn.addEventListener('click', () => {
        processMpesaPayment();
    });
});

function playSong(song) {
    const audio = new Audio(song);
    audio.play();
}

function processMpesaPayment() {
    fetch('/mpesa-payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        // Proceed to play the song upon successful payment
    })
    .catch(error => {
        console.error('Error processing M-Pesa payment:', error);
    });
}

