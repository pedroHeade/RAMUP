var x = window.prompt('qual a resposta?')
var icecream = 'icecream'
if (x == icecream) {
  console.log('error: ' + icecream)
} else {
  var againdnv = window.prompt('qual a resposta?[again]')
  if (againdnv != icecream) {
    console.log('error: againdnv')
  } else if (againdnv == icecream) {
    console.log('error: icecream')
  }
}
