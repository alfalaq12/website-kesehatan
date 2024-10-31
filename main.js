document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    // Ambil nilai dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Tampilkan pesan berhasil
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = `Terima kasih, ${name}! Pesan Anda telah dikirim.`;
    
    // Reset form
    document.getElementById('contactForm').reset();
});