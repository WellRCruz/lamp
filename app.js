/**
 * Simples simulador de uma lâmpada
 * @author Wellington R. Cruz
 */

// Variáveis de apoio lógica

let chave = false // O interruptor inicia desligado.
let lampada = true // A lâmpada está ok.

function quebrar() {
   if (lampada === true)
   document.getElementById('lamp').src="img/broken.jpg"
    // reproduzindo um arquivo de áudio no JS
    // Passo 1: Copiar o arquivo áudio para o projeto
    // Passo 2: Usar a classe Áudio(biblioteca interna do JS)
    let som = new Audio ()
    som.src = "sound/glassbreaking.wav"
    som.play()

    // Apoio a lógica para o JS identificar a lâmpada quebrada
    lampada = false
    
}

function onoff () {
      if (chave === false && lampada === true) { // Se chave estiver desligada, LIGAR A CHAVE.
      document.getElementById('interruptor').src="img/swon.png"
      chave = true // O JS agora sabe que a chave está ligada. 
      // Acender a lâmpada
      document.getElementById('lamp').src="img/on.jpg"
   } else if (lampada === true) {
      document.getElementById('interruptor').src="img/swoff.png"
      chave = false
      // Desligar a lâmpada
      document.getElementById('lamp').src="img/off.jpg"
   }

}