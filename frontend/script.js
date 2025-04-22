document.getElementById('fetchDataBtn').addEventListener('click', () => {
    fetch('http://localhost:3000/api/data')
        .then(response => response.json())
        .then(data => {
            document.getElementById('backendData').textContent = data.message;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
