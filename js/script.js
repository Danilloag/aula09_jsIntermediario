let nomeUsuario = document.getElementById('nome');
let sobrenomeUsuario = document.getElementById('sobrenome');
let cpfUsuario = document.getElementById('cpf');
let msgCpfCorreto = document.querySelector('.msgCpfCorreto');
let msgCpfIncorreto = document.querySelector('.msgCpfIncorreto');
let msgPreenchimentoCompleto = document.querySelector('.msgPreenchimentoCompleto');
let msgPreenchimentoIncompleto = document.querySelector('.msgPreenchimentoIncompleto')

function capturaDados() {
    let nomeSalvo = nomeUsuario.value;
    let sobrenomeSalvo = sobrenomeUsuario.value;
    let cpfSalvo = cpfUsuario.value;

    validaCpf(cpfSalvo);
    verificaPreenchimento(nomeSalvo, sobrenomeSalvo);
}

function validaCpf(cpf) {
    if (cpf.length === 11 && !isNaN(cpf)) {
        msgCpfCorreto.style.display = "block";
        msgCpfIncorreto.style.display = "none";
    } else {
        msgCpfIncorreto.style.display = "block";
        msgCpfCorreto.style.display = "none";
    }
}

function verificaPreenchimento(nome, sobrenome) {
    if (nome !== '' && sobrenome !== '') {
        msgPreenchimentoCompleto.style.display = 'block';
        msgPreenchimentoIncompleto.style.display = 'none';
    } else {
        msgPreenchimentoIncompleto.style.display = 'block';
        msgPreenchimentoCompleto.style.display = 'none';
    }
}