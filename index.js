function getValue () {
    let Value = document.getElementById ('nome').value;
    document.getElementById ('result').innerHTML= 'Seja Bem-vindo, ' + Value + '!';
}
function removeValue(){
    document.getElementById ('nome').value ='';
    document.getElementById ('result').innerHTML='';

}