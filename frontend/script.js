function sendData() {
  const name = document.getElementById("nameInput").value;

  fetch('/api/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById('response').textContent = data.message;
    });
}
