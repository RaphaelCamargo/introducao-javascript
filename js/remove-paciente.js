var tabela = document.querySelector('tabela');

tabela.addEventListener('dbclick', function(event){
    if(event.target.tagName == 'TD'){// Somente executará nosso código caso o elemento em que clicamos seja um <td>
        event.target.parentNode.remove();
    }
});
