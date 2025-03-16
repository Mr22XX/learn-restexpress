// Fungsi untuk mengambil dan menampilkan daftar pengguna


// Fungsi untuk menambahkan pengguna baru
function addUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        fetchUsers(); // Perbarui daftar setelah menambah user
    })
    .catch(error => console.error("Gagal menambahkan user:", error));
}

// Panggil fetchUsers saat halaman dimuat
document.addEventListener("DOMContentLoaded", fetchUsers);
