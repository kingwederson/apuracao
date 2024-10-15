document.addEventListener("DOMContentLoaded", (event) => {
    fetch('resultados.json')
    .then(response => response.json())
    .then(dados => {

        // Acessar e calcular os dados
        let maximovotos = 5599
        let somado = [0,0,0,0,0];
        let percent = [0,0,0,0,0]

        var numcandidatos = 2

        for (const i in dados.prefeito) {
            somado[1] += dados.prefeito[i].chiquinho || 0;
            somado[2] += dados.prefeito[i].everaldo || 0;
            somado[numcandidatos+1] += dados.prefeito[i].brancos || 0;
            somado[numcandidatos+2] += dados.prefeito[i].nulos || 0;
        }

        // Total de votos válidos
        somado[0] = somado[1] + somado[2];
        percent[1] = somado[1]/somado[0]
        percent[2] = somado[2]/somado[0]
        var apurado = somado[0]+somado[3]+somado[4]
        percent[0] = somado[0]/apurado
        percent[3] = somado[3]/apurado
        percent[4] = somado[4]/apurado        
        var reportados = apurado/maximovotos

        var candidatos = [
            ["Candidato", somado[0], percent[0], ""],
            ["Chiquinho", somado[1], percent[1]], "",
            ["Everaldo", somado[2], percent[2], ""]
        ]

        console.log(candidatos)
        
        //Ficha dos candidatos
        
        var candidatos = [
            ["Candidato", "Vice", somado[0], percent[0], -999999999999, "", "#fff", "#000"],
            ["CHIQUINHO", "SUZANA", somado[1], percent[1], new Date(1981,9-1,30), "imagem/cand15a.png", "#080", "#fff"],
            ["EVERALDO", "DELEI", somado[2], percent[2],  new Date(1973,8-1,1), "imagem/cand25a.png", "#ff0", "#008"]
        ]

        function compara(alfa, omega){
            if(omega[2]==alfa[2]){
                return alfa[4]-omega[4]
            }else{
                return omega[2]-alfa[2]
            }
        }

        var classifica = candidatos
        classifica.sort(compara)


        // Preencher os campos da página com os resultados

        // Preencher os totais para brancos, nulos e válidos
        document.getElementsByClassName('numeropercentual')[3-1].innerText = `${(100*percent[0]).toFixed(2)}%`; // Percentual de votos válidos (exemplo)
        document.getElementsByClassName('votosdoscandidatos')[3-1].innerText = somado[0]; // Total de votos válidos

        document.getElementsByClassName('imgdocandidato')[1-1].src = classifica[1][5];
        document.getElementsByClassName('nomedotitular')[1-1].innerText = classifica[1][0]; //Nome do primeiro colocado
        document.getElementsByClassName('nomedovice')[1-1].innerText = classifica[1][1];
        document.getElementsByClassName('votosdediferenca')[1-1].innerText = `+ ${classifica[1][2]-classifica[2][2]}`;
        document.getElementsByClassName('numeropercentual')[1-1].innerText = `${(100*classifica[1][3]).toFixed(2)}%`;
        document.getElementsByClassName('votosdoscandidatos')[1-1].innerText = classifica[1][2]; // Total de votos do primerio colocado
        document.getElementsByClassName('votosdediferenca')[1-1].style.backgroundColor = classifica[1][6];
        document.getElementsByClassName('numeropercentual')[1-1].style.backgroundColor = classifica[1][6];
        document.getElementsByClassName('votosdoscandidatos')[1-1].style.backgroundColor = classifica[1][6];
        document.getElementsByClassName('fotodoscandidatos')[1-1].style.backgroundColor =  classifica[1][6];
        document.getElementsByClassName('votosdediferenca')[1-1].style.color = classifica[1][7];
        document.getElementsByClassName('numeropercentual')[1-1].style.color = classifica[1][7];
        document.getElementsByClassName('votosdoscandidatos')[1-1].style.color =  classifica[1][7];

        document.getElementsByClassName('imgdocandidato')[2-1].src = classifica[2][5];
        document.getElementsByClassName('nomedotitular')[2-1].innerText = classifica[2][0]; //Nome do segundo colocado
        document.getElementsByClassName('nomedovice')[2-1].innerText = classifica[2][1];
        document.getElementsByClassName('votosdediferenca')[2-1].innerText = `- ${classifica[1][2]-classifica[2][2]}`;
        document.getElementsByClassName('numeropercentual')[2-1].innerText = `${(100*classifica[2][3]).toFixed(2)}%`;
        document.getElementsByClassName('votosdoscandidatos')[2-1].innerText = classifica[2][2]; // Total de votos do segundo colocado
        document.getElementsByClassName('votosdediferenca')[2-1].style.backgroundColor = classifica[2][6];
        document.getElementsByClassName('numeropercentual')[2-1].style.backgroundColor = classifica[2][6];
        document.getElementsByClassName('votosdoscandidatos')[2-1].style.backgroundColor = classifica[2][6];
        document.getElementsByClassName('fotodoscandidatos')[2-1].style.backgroundColor =  classifica[2][6];
        document.getElementsByClassName('votosdediferenca')[2-1].style.color = classifica[2][7];
        document.getElementsByClassName('numeropercentual')[2-1].style.color = classifica[2][7];
        document.getElementsByClassName('votosdoscandidatos')[2-1].style.color =  classifica[2][7];

        document.getElementsByClassName('numeropercentual')[3].innerText = `${(100*percent[3]).toFixed(2)}%`;; // Percentual de brancos (exemplo)
        document.getElementsByClassName('votosdoscandidatos')[3].innerText = somado[3]; // Total de votos brancos

        document.getElementsByClassName('numeropercentual')[4].innerText = `${(100*percent[4]).toFixed(2)}%`;; // Percentual de nulos (exemplo)
        document.getElementsByClassName('votosdoscandidatos')[4].innerText = somado[4]; // Total de votos nulos

        // Atualizando elementos de reporte
        document.getElementById('reporting').value = `${(100*reportados).toFixed(0)}`;
        document.getElementById('votosreportados').innerText = `${(100*reportados).toFixed(2)}%`;
    })
    .catch(err => console.error('Erro ao acessar prefeito.json:', err));

});
