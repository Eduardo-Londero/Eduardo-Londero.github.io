// Dados dos Projetos

const dataProjects = [

    {
        title: 'Rio Turism',
        date: '♥',
        description: "<br> En esta página sobre Rio de Janeiro, se practican los conceptos de propiedad de posición CSS3. Aquí fue muy interesante trabajar con contraste de color y altura de línea para ofrecer al usuario una buena legibilidad, además de practicar el posicionamiento sin necesidad de Flexbox o CSS Grid Layout necesariamente.",
        videoSrc: 'videos/rioturismvideo.mp4',
        linkedin: 'https://www.linkedin.com/in/eduardo-martin-londero/',
        repository: '#',
        site: 'https://rio-turism.vercel.app/'

    },
  
    {
        title: 'Animales Fantásticos',
        date: 'En desarrollo',
        description: "En desarrollo",
        videoSrc: 'videos/animalesfantasticosvideo.mp4',
        linkedin: 'https://www.linkedin.com/in/eduardo-martin-londero/',
        repository: '#',
        site: 'https://animales-fantasticos.vercel.app/'

    },
    {
        title: 'CoffeeBreak',
        date: '♥',
        description: "Siempre hay tiempo para una buena taza de cafe !! <br><br> Proyecto utilizando CSS avanzado",
        videoSrc: 'videos/coffeebreakvideo.mp4',
        linkedin: 'https://www.linkedin.com/in/eduardo-martin-londero/',
        repository: '#',
        site: 'https://coffee-break-lac.vercel.app/'

    },
    {
        title: 'Bikcraft',
        date: '♥',
        description: "Proyecto Bikcraft de wireframe a codigo, quien no quiere dar un buen pase en bici ? <br><br> Despeja la mente, despeja el alma y relaja !!",
        videoSrc: 'videos/bikcraftvideo.mp4',
        linkedin: 'https://www.linkedin.com/in/eduardo-martin-londero/',
        repository: '#',
        site: 'https://bik-craft-jade.vercel.app/'

    },
    {
        title: 'Blueblog',
        date: '♥',
        description: "A pesar de ser una página sencilla, incluye las propiedades más importantes de CSS FlexBox, como Display Flex, Flex Wrap, Justify Content, Flex Basis, etc. Entonces, después de algunos ajustes menores, la página se vuelve completamente receptiva, ya que FlexBox es un diseño bastante inteligente en sí mismo.",
        videoSrc: 'videos/blueblogvideo.mp4',
        linkedin: 'https://www.linkedin.com/in/eduardo-martin-londero/',
        repository: '#',
        site: 'https://blue-blog-six.vercel.app/'

    },
    {
        title: 'Le Scone',
        date: '♥',
        description: "Proyecto desarrollado con CSS y Sass",
        videoSrc: 'videos/lesconevideo.mp4',
        linkedin: 'https://www.linkedin.com/in/eduardo-martin-londero/',
        repository: '#',
        site: 'https://le-scone-kappa.vercel.app/'

    },
    {
        title: 'Wildbeast',
        date: '♥',
        description: "Proyecto desarrollado con CSS Grid, se desarrolló el sitio web de Wildbeast para poner en práctica todo lo aprendido.",
        videoSrc: 'videos/wildbeastvideo.mp4',
        linkedin: 'https://www.linkedin.com/in/eduardo-martin-londero/',
        repository: '#',
        site: 'https://wild-beast-flax.vercel.app/'

    },

]

// Open Modal

const openModal = () => {
    const closeModal = document.querySelector('.modal .ri-close-line')
    const modal = document.querySelector('.modal')
    const box = document.querySelectorAll('.cards-projects .box')
    const modalTitle = modal.querySelector('.title h2')
    const modalDescription = modal.querySelector('.info p')
    const modalDate = modal.querySelector('span')
    const modalLinkProject = modal.querySelector('.links a.link-project')
    const modalLinkRepository = modal.querySelector('.links a.link-repository')
    const modalLinkLinkedin = modal.querySelector('.links a.link-linkedin')
    const iframe = modal.querySelector('.video iframe')

    box.forEach((item, index) => {

        const addData = () => {

            if (index != 8) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                document.body.classList.add('transparent')
            }

            modalTitle.innerHTML = dataProjects[index].title
            modalDescription.innerHTML = dataProjects[index].description
            modalDate.innerHTML = dataProjects[index].date
            modalLinkProject.setAttribute('href', dataProjects[index].site) 
            modalLinkRepository.setAttribute('href', dataProjects[index].repository) 
            modalLinkLinkedin.setAttribute('href', dataProjects[index].linkedin) 
            iframe.setAttribute('src', dataProjects[index].videoSrc + '?autoplay=1&amp;loop=0')

        }

        item.addEventListener('click', addData)

    })

    const closingModal = () => {
        modal.classList.add('hidden')
        document.body.style.overflow = 'visible';
        document.body.classList.remove('transparent')
        iframe.setAttribute('src', '')

    }

    closeModal.addEventListener('click', closingModal)

    document.addEventListener ('keydown', (event) => event.key === "Escape" ? closingModal() : '');

}

openModal()
