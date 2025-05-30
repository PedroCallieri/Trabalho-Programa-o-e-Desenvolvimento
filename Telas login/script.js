
// let nome, email , senha
inicializar() 

let usuario = {
    nome: 'um' ,
    email: 'dois ',
    senha: 'nuvem'
} 

function cadastrar(){
    usuario.nome = document.getElementById('inpCadNome').value 
    usuario.email = document.getElementById('inpCadEmail').value 
    usuario.senha = document.getElementById('inpCadSenha').value
    alert("Cadastrado com sucesso")

    console.log(usuario)
    limparInput()
    mostrarLogin()
}
function logar(){
    let nome = document.getElementById('inpLogNome').value
    let senha = document.getElementById('inpLogSenha').value

    if(nome === usuario.nome && senha === usuario.senha){
        alert("Login feito com sucesso")
        limparInput()
        mostrarProduto()
    }else{
        alert("Ouve uma falha no login")
    }
}
function mostrarLogin(){
    esconderTodas()
    document.getElementById('login').style.display = 'flex'
    document.getElementById('inpLogNome').focus() //o FOCUS faz com que a gente já entre na pagina com o cursor no rpimerio lugar que tiver pra digitar 
}
function mostrarCadastro(){
    esconderTodas()
    document.getElementById('cadastro').style.display = 'flex'
    document.getElementById('inpCadNome').focus()
}
function mostrarProduto(){
    esconderTodas()
    document.getElementById('produtos').style.display = 'flex'
}
function esconderTodas(){
    document.getElementById('login').style.display = 'none'
    document.getElementById('cadastro').style.display = 'none'
    document.getElementById('produtos').style.display = 'none'
}
function limparInput(){ //vai resetar todos os valores que tiver no input assim que clicarmos no button
    document.getElementById('inpCadNome').value = ''
    document.getElementById('inpCadEmail').value = ''
    document.getElementById('inpCadSenha').value = ''

    document.getElementById('inpLogNome').value = ''
    document.getElementById('inpLogSenha').value = ''
}
function inicializar(){
    mostrarLogin()
}