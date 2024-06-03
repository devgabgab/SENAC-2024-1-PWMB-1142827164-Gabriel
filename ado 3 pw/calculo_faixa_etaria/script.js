function identificarIdade() {
    const inputAnoNascimento = document.getElementById('anoNascimento');
    const selectGenero = document.getElementById('genero');
    const divResultado = document.getElementById('resultado');
    const anoNascimento = parseInt(inputAnoNascimento.value);
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;
    const genero = selectGenero.value;

    if (isNaN(anoNascimento) || anoNascimento < 1900 || anoNascimento > 2024) {
        divResultado.innerText = "Por favor, informe um ano de nascimento válido entre 1900 e 2024.";
        return;
    }

    let grupoIdade;
    if (idade < 10) {
        grupoIdade = "Criança";
    } else if (idade < 26) {
        grupoIdade = "Jovem";
    } else if (idade < 61) {
        grupoIdade = "Adulto";
    } else {
        grupoIdade = "Idoso";
    }

    let urlImagem;
    if (genero === 'masculino') {
        if (idade < 10) {
            urlImagem = 'imagens/masculino/crianca.png';
        } else if (idade < 26) {
            urlImagem = 'imagens/masculino/jovem_m.png';
        } else if (idade < 61) {
            urlImagem = 'imagens/masculino/adulto.png';
        } else {
            urlImagem = 'imagens/masculino/idoso.png';
        }
    } else if (genero === 'feminino') {
        if (idade < 10) {
            urlImagem = 'imagens/feminino/crianca_f.png';
        } else if (idade < 26) {
            urlImagem = 'imagens/feminino/jovem_f.png';
        } else if (idade < 61) {
            urlImagem = 'imagens/feminino/adulta.png';
        } else {
            urlImagem = 'imagens/feminino/idosa.png';
        }
    }

    divResultado.innerHTML = `Gênero: ${genero}, com ${idade} anos de idade<br>`;
    const containerImagem = document.createElement('div');
    containerImagem.classList.add('container-imagem');
    const imagem = document.createElement('img');
    imagem.src = urlImagem;
    imagem.alt = 'Imagem de perfil';
    containerImagem.appendChild(imagem);
    divResultado.innerHTML = ''; 
    divResultado.appendChild(containerImagem);
}
