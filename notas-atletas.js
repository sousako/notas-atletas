let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas: [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
  ];
  
  // Função para calcular a média das notas sem a maior e a menor
  function calcularMedia(atletas) {
    // Percorre todos os atletas
    atletas.forEach(atleta => {
      // Ordena as notas para eliminar a maior e a menor
      let notasOrdenadas = atleta.notas.sort((a, b) => a - b);
      
      // Elimina a maior e a menor nota (primeiro e último item da lista)
      let notasValidas = notasOrdenadas.slice(1, 4);
      
      // Calcula a média das três notas do meio
      let somaNotas = notasValidas.reduce((acc, nota) => acc + nota, 0);
      let media = somaNotas / notasValidas.length;
      
      // Exibe o resultado
      console.log(`Atleta: ${atleta.nome}`);
      console.log(`Notas Obtidas: ${atleta.notas.join(', ')}`);
      console.log(`Média Válida: ${media.toFixed(6)}`);  
      console.log(''); 
    });
  }
  
  // Chama a função 
  calcularMedia(atletas);
