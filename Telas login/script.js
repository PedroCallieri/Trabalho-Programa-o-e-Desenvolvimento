//let nomeTeste = []

inicializar() 

let usuarios = []


function cadastrar(){
    let usuario = {
        nome: document.getElementById('inpCadNome').value,
        email: document.getElementById('inpCadEmail').value,
        senha: document.getElementById('inpCadSenha').value,
    }
    
    usuarios.push(usuario)
    limparInput()
    mostrarLogin()
    
    alert("Cadastrado com sucesso")
    
    console.log(usuarios) //só para teste
}
function logar(){
    let nome = document.getElementById('inpLogNome').value
    let senha = document.getElementById('inpLogSenha').value

    if((nome === usuario[i].nome || nome === usuario[i].email)&& senha === usuario.senha){
        alert("Login feito com sucesso"+ usuarios[i].nome)
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
    document.getElementById('navbar').style.display = 'flex' //fazendo a navbar reaparecer apos fazer o login
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