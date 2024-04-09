document.getElementById('suggestionForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(this);
    fetch('/submit-suggestion', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        document.getElementById('suggestionFeedback').innerHTML = '<div class="alert alert-success" role="alert">Sugestão enviada com sucesso!</div>';
        document.getElementById('suggestionForm').reset();
      } else {
        document.getElementById('suggestionFeedback').innerHTML = '<div class="alert alert-danger" role="alert">Ocorreu um erro ao enviar a sugestão. Por favor, tente novamente mais tarde.</div>';
      }
    })
    .catch(error => {
      console.error('Erro ao enviar a sugestão:', error);
      document.getElementById('suggestionFeedback').innerHTML = '<div class="alert alert-danger" role="alert">Ocorreu um erro ao enviar a sugestão. Por favor, tente novamente mais tarde.</div>';
    });
  });