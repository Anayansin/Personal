
let eleccion = false
const curiosidades = document.getElementById('curiosidades')
const regalos = document.getElementById('regalos')
const contenedor = document.getElementById('contenedor')
const inicio = document.getElementById('inicio')
const sobreMi = document.getElementById('sobre-mi')
const actualidad = document.getElementById('actualidad')
const entretenimiento = document.getElementById('entretenimiento')
const musica = document.getElementById('musica')
const logros = document.getElementById('logros')
const proximamente = document.getElementById('proximamente')
const redes = document.querySelector('.redes')
const opciones = document.querySelector('.lista')
const menu = document.getElementById('menu')

menu.addEventListener('click', MenuCompleto)

function MenuCompleto() {
    if (opciones.style.display === 'flex') {
        redes.style.setProperty('border-bottom-right-radius', '30px')
        opciones.style.setProperty('display', 'none')
    } else {
        redes.style.setProperty('border-bottom-right-radius', '0%')
        opciones.style.setProperty('display', 'flex')
    }
}

inicio.addEventListener('click', pantallaInicio)
sobreMi.addEventListener('click', pantallaSobreMi)
actualidad.addEventListener('click', pantallaActualidad)
entretenimiento.addEventListener('click', pantallaEntretenimiento)
musica.addEventListener('click', pantallaMusica)
logros.addEventListener('click', pantallaLogros)
proximamente.addEventListener('click', pantallaProximamente)
curiosidades.addEventListener('click', pantallaCuriosidades)
regalos.addEventListener('click', pantallaRegalos)

function pantallaInicio() {
    window.location.href = 'index.html'
}

function pantallaSobreMi() {
    contenedor.style.display = 'none'

    if (eleccion === false) {
        const pantallasobremi = document.createElement('div')
        pantallasobremi.classList.add('dinamico')
        contenedor.after(pantallasobremi)
        const contenedor1 = document.createElement('div')
        const contenedor2 = document.createElement('div')
        const contenedor3 = document.createElement('div')
        const contenedor4 = document.createElement('div')
        const contenedor5 = document.createElement('div')
        const contenedor6 = document.createElement('div')
        const contenedor7 = document.createElement('div')
        pantallasobremi.appendChild(contenedor1)
        pantallasobremi.appendChild(contenedor2)
        pantallasobremi.appendChild(contenedor3)
        pantallasobremi.appendChild(contenedor4)
        pantallasobremi.appendChild(contenedor5)
        pantallasobremi.appendChild(contenedor6)
        pantallasobremi.appendChild(contenedor7)
        contenedor1.classList.add('contenedor1')
        contenedor2.classList.add('contenedor2')
        contenedor3.classList.add('contenedor3')
        contenedor4.classList.add('contenedor4')
        contenedor5.classList.add('contenedor5')
        contenedor6.classList.add('contenedor6')
        contenedor7.classList.add('contenedor7')
        const titulo = document.createElement('h1')
        titulo.textContent = 'Sobre mi'
        pantallasobremi.appendChild(titulo)
        const parrafo = document.createElement('p')
        parrafo.textContent = 'Mi nombre es Lia Yaretzi y actualmente tengo 19 años. Estudio la carrera de Desarrollo de Software en el CETI, donde curso el octavo semestre. Aunque elegí una carrera relacionada con la tecnología, mi curiosidad siempre ha ido mucho más allá de una sola área. Desde pequeña he sentido una gran fascinación por aprender, crear e imaginar, y eso es algo que sigue formando parte de quien soy.'
        contenedor1.appendChild(parrafo)
        pantallasobremi.appendChild(contenedor1)
        const imgparrafo1 = document.createElement('img')
        imgparrafo1.src = 'https://i.pinimg.com/736x/69/90/07/6990073a33713281cb21b7c7556a6b26.jpg'
        contenedor1.appendChild(imgparrafo1)
        pantallasobremi.appendChild(contenedor1)
        const parrafo2 = document.createElement('p')
        parrafo2.textContent = 'Cuando era niña, mi mamá solía decir que algún día sería escritora porque pasaba horas inventando historias y dejando volar mi imaginación. También descubrí muy temprano que disfrutaba dibujar y pintar, actividades que todavía me gustan, aunque ya no puedo dedicarles tanto tiempo como quisiera. Aun así, sigo escribiendo las historias que nacen en mi cabeza y que muchas veces me mantienen despierta pensando en nuevos personajes, mundos y posibilidades. Además, disfruto mucho ver películas y escuchar música, dos cosas que forman parte de mi día a día y que constantemente alimentan mi creatividad.'
        contenedor2.appendChild(parrafo2)
        pantallasobremi.appendChild(contenedor2)
        const imgparrafo2 = document.createElement('img')
        imgparrafo2.src = 'imagenes/parte2.png'
        contenedor2.appendChild(imgparrafo2)
        const parrafo3 = document.createElement('p')
        parrafo3.textContent = 'Mi sueño más grande es convertirme en directora de cine. Me gustaría crear películas de ciencia ficción que transmitan todas esas ideas que llevo imaginando durante años y que permitan a otras personas experimentar las emociones que yo siento al pensarlas. Por ahora estudiar cine no está dentro de mis posibilidades, pero prefiero concentrarme en las oportunidades que sí tengo y buscar caminos diferentes para acercarme a esa meta. Creo firmemente que existen muchas maneras de llegar al mismo destino cuando se tiene la determinación suficiente.'
        contenedor3.appendChild(parrafo3)
        pantallasobremi.appendChild(contenedor3)
        const imgparrafo3 = document.createElement('img')
        imgparrafo3.src = 'https://i.pinimg.com/736x/69/90/07/6990073a33713281cb21b7c7556a6b26.jpg'
        contenedor3.appendChild(imgparrafo3)
        const parrafo4 = document.createElement('p')
        parrafo4.textContent = 'Elegir una carrera universitaria fue una de las decisiones más difíciles que he tomado. Tenía miedo de equivocarme y dedicarme a algo que no me apasionara, así que investigué todas las universidades registradas en Jalisco y analicé cuidadosamente las opciones que ofrecían. Durante un tiempo estuve completamente convencida de estudiar Ingeniería Aeroespacial, una decisión que puede parecer muy distinta a Desarrollo de Software, pero que tiene mucho sentido para mí porque siempre me ha fascinado el espacio, la física y las matemáticas.'
        contenedor4.appendChild(parrafo4)
        const imgparrafo4 = document.createElement('img')
        imgparrafo4.src = 'https://i.pinimg.com/736x/69/90/07/6990073a33713281cb21b7c7556a6b26.jpg'
        contenedor4.appendChild(imgparrafo4)
        pantallasobremi.appendChild(contenedor4)
        const parrafo5 = document.createElement('p')
        parrafo5.textContent = 'Fue precisamente durante mi estancia en el CETI donde descubrí cuánto disfruto la física, la química y el razonamiento matemático. La programación no es algo que deteste; al contrario, poco a poco he comenzado a comprenderla y a disfrutar el proceso de aprender. Sin embargo, todavía siento que mi verdadera vocación podría encontrarse en otra área. Hoy en día diría que mi futuro está dividido entre un 70 % de interés por la ingeniería aeroespacial y un 30 % por el desarrollo de software. Aún no sé cuál será el camino definitivo, pero estoy convencida de que cualquier decisión que tome estará guiada por mi deseo de seguir aprendiendo y construyendo cosas que me apasionen.'
        contenedor5.appendChild(parrafo5)
        const imgparrafo5 = document.createElement('img')
        imgparrafo5.src = 'https://i.pinimg.com/736x/69/90/07/6990073a33713281cb21b7c7556a6b26.jpg'
        contenedor5.appendChild(imgparrafo5)
        pantallasobremi.appendChild(contenedor5)
        const parrafo6 = document.createElement('p')
        parrafo6.textContent = 'También hay personas que ocupan un lugar muy importante en mi vida. Mi mejor amiga es Karen, una persona que siempre ha estado presente para mí y a quien considero parte fundamental de mi historia. Carmen y Sam son un gran ejemplo de la clase de personas que admiro, y mi mamá junto con mi hermana representan mi mayor apoyo y una de mis principales motivaciones para seguir creciendo. Me emociona pensar en todo el tiempo que aún me queda por compartir con las personas que más quiero.'
        contenedor6.appendChild(parrafo6)
        const imgparrafo6 = document.createElement('img')
        imgparrafo6.src = 'https://i.pinimg.com/736x/69/90/07/6990073a33713281cb21b7c7556a6b26.jpg'
        contenedor6.appendChild(imgparrafo6)
        pantallasobremi.appendChild(contenedor6)
        const parrafo7 = document.createElement('p')
        parrafo7.textContent = 'Esta página nació como un espacio para practicar mis habilidades en desarrollo web, experimentar con nuevas ideas y seguir aprendiendo. Con el tiempo también se ha convertido en un lugar donde puedo expresar quién soy, compartir mis intereses y documentar parte de mi crecimiento personal y profesional. Espero que, mientras avanzo hacia mi proyecto de titulación y los sueños que quiero cumplir, este sitio también refleje la persona en la que me estoy convirtiendo: alguien curiosa, creativa, perseverante y con muchas ganas de construir un futuro haciendo lo que ama.'
        contenedor7.appendChild(parrafo7)
        const imgparrafo7 = document.createElement('img')
        imgparrafo7.src = 'https://i.pinimg.com/736x/69/90/07/6990073a33713281cb21b7c7556a6b26.jpg'
        contenedor7.appendChild(imgparrafo7)
        pantallasobremi.appendChild(contenedor7)
        eleccion = true
    }
}

function pantallaActualidad() {
    contenedor.style.display = 'none'
}

function pantallaEntretenimiento() {
    contenedor.style.display = 'none'
}

function pantallaMusica() {
    contenedor.style.display = 'none'
}

function pantallaLogros() {
    contenedor.style.display = 'none'
}

function pantallaProximamente() {
    contenedor.style.display = 'none'
}

function pantallaCuriosidades() {
    contenedor.style.display = 'none'
}

function pantallaRegalos() {
    contenedor.style.display = 'none'
}