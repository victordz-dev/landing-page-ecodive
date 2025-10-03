document.getElementById('loginForm').addEventListener('submit', function(event) { // Adiciona um evento de submit no formulário de login
      event.preventDefault(); // Previne o envio do formulário
  
      const username = document.getElementById('username').value; // Obtém o valor do campo de usuário
      const senha = document.getElementById('senha').value; // Obtém o valor do campo de senha
      const mensagemErro = document.getElementById('mensagemErro'); // Obtém a mensagem de erro
  
      const login = 'usuario'; // Usuário cadastrado
      const senhaCadastrada = 'senha123'; // Senha cadastrada
  
      if (username === login && senha === senhaCadastrada) { // Verifica se o usuário e a senha estão corretos
        alert('Login bem-sucedido!'); // Exibe um alerta de login bem-sucedido
        document.getElementById('username').value = ''; // Limpa o campo de usuário
        document.getElementById('senha').value = ''; // Limpa o campo de senha
        mensagemErro.textContent = ''; // Limpa a mensagem de erro
      } else { // Se o usuário ou a senha estiverem incorretos
        alert('Usuário ou senha incorretos.'); // Exibe um alerta de erro
        mensagemErro.textContent = 'Usuário ou senha incorretos.'; // Exibe a mensagem de erro
        mensagemErro.style.display = 'block'; 
        document.getElementById('username').value = ''; // Limpa o campo de usuário
        document.getElementById('senha').value = ''; // Limpa o campo de senha
        document.getElementById('username').focus(); // Coloca o foco no campo de usuário
      }
  });