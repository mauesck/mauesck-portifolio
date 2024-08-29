const header = document.querySelector('header');
header.innerHTML = `
    <nav class="navbar navbar-expand-lg w-100 z-3">
        <div class="container-fluid">
            <a class="navbar-brand text-white position-relative" href="">
                <p class="m-0">Thiago Mauesck</p>
                <p class="fst-italic fw-bold m-0 p-0" style="font-size: 12px;">Dev Full-Stack</p>
            </a>
            <button class="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style="background-color: #47637f;">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item item-menu" onclick="navegar('sobre','skills','projetos')">                        
                        <a class="nav-link active bi bi-file-earmark-person text-white hover:bg-primary" aria-current="page" href="#sobre">
                            Sobre mim
                        </a>
                    </li>
                    <!--<li class="nav-item item-menu">
                        <a class="nav-link bi bi-laptop text-white" href="#">
                            Oque faço?
                        </a>
                    </li>-->
                    <li class="nav-item item-menu" onclick="navegar('skills','sobre','projetos')">
                        <a class="nav-link bi bi-star text-white" href="#skills">
                            Skills
                        </a>
                    </li>
                    <li class="nav-item item-menu" onclick="navegar('projetos','sobre','skills')">
                        <a class="nav-link bi bi-code-square text-white" href="#projetos">
                            Projetos
                        </a>
                    </li>
                    <li class="nav-item item-menu">
                        <a class="nav-link bi bi-whatsapp text-white" target="_blank" href="https://api.whatsapp.com/send?phone=5547992212596&text=Ol%C3%A1,%20vi%20seu%20portf%C3%B3lio,%20gostaria%20de%20contratar%20seu%20servi%C3%A7o.">
                            Contato
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`;

// Troca Texto

function trocaTexto(elementoFalse, elementoTrue) {
    var elementoFalse = document.getElementById(elementoFalse)
    elementoFalse.style.display = 'none';
    var elementoTrue = document.getElementById(elementoTrue)
    elementoTrue.style.display = 'block';
}

function navegar(elementoTrue, elementoFalse1, elementoFalse2) {
    document.getElementById(elementoTrue).style.display = 'flex';
    document.getElementById(elementoFalse1).style.display = 'none';
    document.getElementById(elementoFalse2).style.display = 'none';
}

// skills

const skills = [
    'devicon-html5-plain-wordmark colored',
    'devicon-css3-plain colored',
    'devicon-tailwindcss-original colored',
    'devicon-bootstrap-plain-wordmark colored',
    'devicon-materialui-plain colored',
    'devicon-vuetify-plain colored',
    'devicon-vuejs-plain-wordmark colored',
    'devicon-react-original-wordmark colored',
    'devicon-nextjs-original-wordmark colored',
    'devicon-nodejs-plain-wordmark colored',
    'devicon-npm-original-wordmark colored',
    'devicon-java-plain-wordmark colored',
    'devicon-mysql-plain-wordmark colored',
    'devicon-postgresql-plain-wordmark colored',
    'devicon-git-plain-wordmark colored',
    'devicon-github-original-wordmark colored',
    'devicon-docker-plain-wordmark colored',    
   'devicon-trello-plain-wordmark colored',
   'devicon-jira-plain-wordmark colored',
   'devicon-redis-plain-wordmark colored',
   'devicon-firebase-plain-wordmark colored',
   'devicon-figma-plain colored',
   'devicon-typescript-plain colored',
]

let s = 0.5;  // Tempo inicial
const divSkill = document.getElementById('divSkill');

divSkill.innerHTML = skills.map(skill => {
    s += 0.1;  // Incrementa o tempo para cada ícone
    return `<i class="${skill}" style="font-size: 100px; animation: fadeInRight500 ${s}s normal;"></i>`;
}).join('');

// projetos

// `<div class="col-sm-12 col-md-6 my-2">
// <div class="card shadow">
//     <span class="position-absolute top-0 end-0 m-2 badge rounded-pill bg-primary">
//         full-stack
//     </span>
//     <div class="card-body text-start position-relative">
//         <h5 class="card-title">Webtools55</h5>
//         <div class="card-text" style="height: 180px;">
//             <div class="container">
//                 <div class="row overflow-auto" style="height: 140px;">
//                     <div class="col-12 p-0" id="visaoWebtools">
//                         Neste projeto eu tive o objetivo de desenvolver uma
//                         central de
//                         ferramentas e utilidades que ficassem disponíveis na web para ajudar
//                         usúarios em algumas
//                         tarefas como: Converter uma Imagem, Sortear Números, Calcular IMC e muito
//                         mais.
//                     </div>
//                     <div class="col-12 p-0" id="caracWebtools" style="display: none;">
//                         <ul>
//                             <li>Progressive Web App</li>
//                             <li>Ótimo SEO</li>
//                             <li>Páginas todas indexadas</li>
//                             <li><a href="https://www.google.com/search?q=webtools55"
//                                     target="_blank">Clique para ver nas pesquisas</a></li>
//                             <img class="mt-2" src="img/webtools55.PNG" style="width: 100%;">
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="card-title position-absolute bottom-0 mb-3">
//             <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
//                 <input type="radio" class="btn-check" name="webtools55" id="option1"
//                     autocomplete="off" checked>
//                 <label class="btn-sm btn btn-outline-secondary" for="option1"
//                     onclick="trocaTexto('caracWebtools','visaoWebtools')">Visão Geral</label>

//                 <input type="radio" class="btn-check" name="webtools55" id="option2"
//                     autocomplete="off">
//                 <label class="btn-sm btn btn-outline-secondary" for="option2"
//                     onclick="trocaTexto('visaoWebtools','caracWebtools')">Características</label>
//             </div>
//         </div>
//     </div>
//     <div class="card-footer text-body-secondary text-end fs-1 d-flex justify-content-between">
//         <div>
//             <a href="https://www.webtools55.com" target="_blank"
//                 class="btn btn-dark m-1">Visualizar</a>
//         </div>
//         <div>
//             'devicon-html5-plain-wordmark colored',
//             'devicon-css3-plain-wordmark colored',
//             'devicon-javascript-plain colored',
//         </div>
//     </div>
// </div>
// </div>`