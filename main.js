const listaDeTeclas = document.querySelectorAll('.tecla')
const listaDeSons = document.querySelectorAll('audio')

function atribuiFuncao(){
    for(let i in listaDeTeclas){
        listaDeTeclas[i].onclick = () => listaDeSons[i].play()
        listaDeTeclas[i].onkeydown = (e) => {
            if (e.code == 'Space' || e.code == 'Enter' || e.code == 'NumpadEnter') {
                listaDeTeclas[i].classList.add('ativa')
            }
        }
        listaDeTeclas[i].onkeyup = () => listaDeTeclas[i].classList.remove('ativa')
    }
}


atribuiFuncao()