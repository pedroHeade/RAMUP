function aoApertar(button) {
  alert('Você apertou o botão!')
}
var x = window.prompt('Qual a senha?')
var senha = 'hifi6'

for (; x !== senha; ) {
  x = window.prompt('Qual a senha?')
  if (x === senha) {
    break
  }
}
