globalThis.addEventListener('load', () => {
    $lista_mas_detalles.style.display = "none"
})

const $boton_esconder_detalles = document.querySelector('#bt-esconder-detalles')
const $boton_mas_detalles = document.querySelector('#bt-mas-detalles')
const $lista_mas_detalles = document.querySelector('#lista-mas-detalles')

$boton_mas_detalles.addEventListener('click', mostrar_esconder_detalles)
$boton_esconder_detalles.addEventListener('click', mostrar_esconder_detalles)

function mostrar_esconder_detalles() {
    if ($lista_mas_detalles.style.display == 'none') {
        $lista_mas_detalles.style.display = "block"
        $boton_mas_detalles.style.display = "none"
        $boton_esconder_detalles.style.display = "block"
    }
    else {
        $lista_mas_detalles.style.display = "none"
        $boton_mas_detalles.style.display = "block"
        $boton_esconder_detalles.style.display = "none"
    }
}