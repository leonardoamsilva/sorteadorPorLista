const sorteado = document.getElementById("sorteado");
const arquivo = document.getElementById("arqCsv")
let lista2 = [];
let input = document.getElementById('files');
let fileName = document.getElementById('file-name');

input.addEventListener('change', function(){
  fileName.textContent = "NOMES ENVIADOS COM SUCESSO";
});

function lerArquivoTxt(evt){
    var texto = "";
    var files = evt.target.files;
    for (var i = 0, f; f = files[i]; i++){
        var reader = new FileReader();
        reader.onload = function(event){
            var conteudo = event.target.result;
            var linhas = conteudo.split('\n');
            for(x=0;x<linhas.length;x++){
                texto += linhas[x];
            }
            const res = texto;
            let result = res.split("\r")
            lista2 = result;
            
        };
        reader.readAsText(f);
    }
}
document.getElementById('files').addEventListener('change', lerArquivoTxt, false);


function sortear(){
    numero = Math.round(Math.random()*(lista2.length - 1))
    sorte = lista2[numero]
        setTimeout(() => {
            sorteado.innerHTML = sorte
        }, 1000)
    console.log("Funcionando corretamente")
}

