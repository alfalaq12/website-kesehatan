document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    // Ambil nilai dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    

    // Gunakan SweetAlert untuk menampilkan pesan berhasil
    Swal.fire({
        title: 'Terima kasih!',
        text: `Pesan Anda telah dikirim, ${name}!`,
        icon: 'success',
        confirmButtonText: 'OK'
    });
    
    // Reset form
    document.getElementById('contactForm').reset();
});;