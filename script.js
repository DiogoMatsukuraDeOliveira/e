document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const photo = document.getElementById('photo').files[0];

    if (name && date && photo) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const history = document.getElementById('history');
            const entry = document.createElement('div');
            entry.innerHTML = `
                <p>Nome: ${name}</p>
                <p>Data: ${date}</p>
                <img src="${event.target.result}" alt="Foto" width="100">
            `;
            history.appendChild(entry);
        };
        reader.readAsDataURL(photo);
    }
});
