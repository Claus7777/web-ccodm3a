var root = document.getElementById("root");
var isLogado = false;

var login = document.getElementById("login");
login.addEventListener('click', menuLogin);

var loja = document.getElementById("loja");
loja.addEventListener('click', barreiraLoja);

var menu_nav = document.getElementById("menu_nav");


function barreiraLoja(event){
    //remove mensagens de erros velhas e o formulário de login
    if(menu_nav.childElementCount >= 4){
        menu_nav.removeChild(menu_nav.lastElementChild);
    }

    if (isLogado == false){
        const error = document.createElement('p');
        error.id = "error"
        error.innerText = 'O conteúdo da loja só está disponível para usuários logados.';
        menu_nav.appendChild(error);
    } else mostrarItems();
}

function menuLogin(event){
    if(menu_nav.childElementCount >= 4){
        menu_nav.removeChild(menu_nav.lastElementChild);
    }


    //criando formulário de login caso o usuário não esteja logado
    if(isLogado == false){
        const form = document.createElement('form');

        const inputEmail = document.createElement('input');
        inputEmail.setAttribute('type', 'email');
        inputEmail.setAttribute('name', 'email');
        inputEmail.setAttribute('placeholder', 'E-mail');
        inputEmail.setAttribute('required', true);
    
        const inputSenha = document.createElement('input');
        inputSenha.setAttribute('type', 'password');
        inputSenha.setAttribute('name', 'senha');
        inputSenha.setAttribute('placeholder', 'Senha');
        inputSenha.setAttribute('required', true);
    
        const inputSubmit = document.createElement('input');
        inputSubmit.setAttribute('id', 'loginButton');
        inputSubmit.setAttribute('type', 'submit');
        inputSubmit.setAttribute('value', 'Entrar');
        inputSubmit.addEventListener('click', efetuarLogin);

        form.append(inputEmail);
        form.append(inputSenha);
        form.append(inputSubmit);

        menu_nav.appendChild(form);
    } else {
        const error = document.createElement('p');
        error.id = "error"
        error.innerText = 'Você já está logado';
        menu_nav.appendChild(error);
    }
}

function efetuarLogin(event){
    event.preventDefault();

    const inputEmail = document.querySelector('input[type="email"]');
    if (!inputEmail.value){
        const error = document.createElement('p');
        error.innerText = 'Email é obrigatório';
        inputEmail.parentElement.append(error);
        return;
    }

    const inputSenha = document.querySelector('input[type="password"]');
    if (!inputSenha.value){
        const error = document.createElement('p');
        error.innerText = 'Senha é obrigatória';
        inputEmail.parentElement.append(error);
        return;
    }

    isLogado = true;

    fetch.post('http://localhost/users/login', {
        method: 'POST',
        body: {email: inputEmail.value, senha: inputSenha.value}
    });


}

function mostrarItems(){
    fetch ('products.json')
        .then(response => {
            console.log(response);
        })
        .then(data =>{
            for (let key in data){
                if (data.hasOwnProperty(key)){
                    const item = data[key];

                    const nome = document.createElement("h3");
                    nome.innerHTML = item.name;

                    const foto = document.createElement("img");
                    foto.src = 'img/${item.img}';

                    const div = document.createElement("div");
                    div.classList.add('item');

                    
                    div.appendChild(nome);
                    div.appendChild(foto);
                    root.appendChild(div);
                }
            }
        })

        .catch(error => console.error('Fetch não funcionou. Erro: ', error));
    }

