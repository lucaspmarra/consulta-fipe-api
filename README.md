# Navita - Tabela FIPE

Teste para processo seletivo.

## Controle de versão

### v1

- Projeto iniciado utilizando framework css Boostrap;
- Utilização do Vue.Js juntamente com o Axios, para chamadas na API;

### v1.2

- Readme criado;

### v2

- Modelos sendo exibidos por meio da API;
- Utilização do Vue.Js com AXIOS para fazer as requisições;

### v2.1

- Criação do Github.Pages, pode ser acessado pelo link: https://lucaspmarra.github.io/navita-fipe-api/

### v2.2

- Adicionado input de pesquisa (sem função ainda);

### v2.3

- Adicionado <a> links para ver os modelos (sem função ainda);

### v2.4

- Adicionado favicon da Navita;
- Utilização de boas práticas no v-for;
- Remoção do input de pesquisa;

### v2.5

- Atualização de tecnologias usadas no readme;

### v3

- Segunda chamada AXIOS realizada, agora retornando os modelos da marca com código 59, com finalidade de testes;
- Dados sendo exibidos na tela;

### v3.1

- Adicionado Modal com os Modelos do código 59;

### v4

-Teste com try catch;
-Dados sendo retornados corretamente usando diretiva @click

### v5

- Chamadas funcionando;
- Estilo aplicado;
- Alterações no layout base para melhor acessibilidade do usuário, como por exemplo, o Help-text de uso;

### v5.1

- Pequenas alterações no layout final;
- Texto de Considerações Finais;

## Tecnologias usadas

- HTML;
- CSS;
- SASS;
- Vue.Js;
- Axios;
- Bootstrap;

## Considerações finais

Um teste prático e direto, com liberdade para uso de framework UI livre, possibilitando melhor uso de tempo para as funcionalidades do Axios.  
Alguns pontos a se observer em questão da UX, em uma tabela de 90 itens, obrigar o usuáruo a descer até o final da tabela para verificar os modelos da marca demanda muito tempo e acaba deixando o usuário instafisfeito.  
Duas alternativas eram: Accordion e Modal.  
Optei por Modal por conhecimentos técnicos, o accordion ainda não sei usar muito bem junto com o Vue.  
Sendo assim, o usuário ao clicar na Marca, irá ver todos os Modelos na nova janela que irá se abrir em sua tela, sem necessidade de ter que descer até o final da página para visualizar a segunda table/card.