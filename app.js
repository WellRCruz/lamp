/**
 * Simples simulador de uma lâmpada
 * @author Wellington R. Cruz
 */

function quebrar() {
    document.getElementById('lamp').src="img/broken.jpg"
    // reproduzindo um arquivo de áudio no JS
    // Passo 1: Copiar o arquivo áudio para o projeto
    // Passo 2: Usar a classe Áudio(biblioteca interna do JS)
    let som = new Audio ()
    som.src = "sound/glassbreaking.wav"
    som.play()
}