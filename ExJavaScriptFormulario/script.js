let nomeC;
let end;
let email;
let cemail;
let senha;
let csenha;

function cad() {
    nomeC = document.getElementById('form').nomeC.value;
    end = document.getElementById('form').end.value;
    email = document.getElementById('form').email.value;
    cemail = document.getElementById('form').cemail.value;
    senha = document.getElementById('form').senha.value;
    csenha = document.getElementById('form').csenha.value;

    if (nomeC == "" || end == "" || email == "" || cemail == "" || senha == "" || csenha == "") {
        alert("Preencha todos os campos")
    } else if (email != cemail) {
        alert("email incorreto")
    }else if(senha != csenha){
        alert("senha incorreta")
    }else{
        alert("cadastro efetuado com sucesso")
    }
}