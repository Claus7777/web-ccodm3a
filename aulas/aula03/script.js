const root = document.getElementById('root');

function Titulo(nome){
    const h1 = document.createElement('h1');
    h1.innerText = nome;
    return h1;
}

function Cabecalho(){
    const header = document.createElement('header');
    header.setAttribute('class', '.cabecalho');
    header.append(Titulo('Login'));
    return header;
}

function Formulario(){
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
    inputSubmit.setAttribute('type', 'submit');
    inputSubmit.setAttribute('value', 'Entrar');

    form.append(inputEmail);
    form.append(inputSenha);
    form.append(inputSubmit);
    return form;
}

function Principal(){
    const main = document.createElement('main');
    main.append(Formulario());
    return main;
}


root.append(Cabecalho());
root.append(Principal());
