// Cálcula de tabuada

var res, opc, numero = [];

// Mensagem de início
  alert('TABUADA\n ')

// Escolha da tabuada pelo usuário
  opc = parseInt(prompt('Escolha o número da tabuada que deseja calcular: '))

// Condição para garantir que seja escolhido um número válido
  alert('\nVocê escolheu a tabuada do número ' + opc + '\n')

if(opc == 0){
  alert('Inicie novamente e escolha um número válido. ')
}

// Estrutura para calcular a tabuada escolhida
for(i = 1; i <= 10; i++){
  numero[i] = opc
}
    
for(i = 1; i < numero.length; i++){
  if (opc * i) {
    res = opc * i
    alert(opc + ' x ' + i + ' = ' + res)
  }
}
  alert('\nObrigado! ')