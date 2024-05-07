const $boton_esconder_detalles = document.querySelectorAll('#bt-esconder-detalles')
const $boton_mas_detalles = document.querySelectorAll('#bt-mas-detalles')
const $lista_mas_detalles = document.querySelectorAll('#lista-mas-detalles')
globalThis.addEventListener('load', () => {
    $lista_mas_detalles.forEach(lista => lista.style.display = "none")
})
$boton_mas_detalles.forEach(item => item.addEventListener('click', mostrar_esconder_detalles))
$boton_esconder_detalles.forEach(item => item.addEventListener('click', mostrar_esconder_detalles))
function mostrar_esconder_detalles() {
    $lista_mas_detalles.forEach(lista => {
        if (lista.style.display == 'none') {
            lista.style.display = "block"
            $boton_mas_detalles.forEach(bt => bt.style.display = "none")
            $boton_esconder_detalles.forEach(bt => bt.style.display = "block")
        }
        else {
            lista.style.display = "none"
            $boton_mas_detalles.forEach(bt => bt.style.display = "block")
            $boton_esconder_detalles.forEach(bt => bt.style.display = "none")
        }
    })
}
