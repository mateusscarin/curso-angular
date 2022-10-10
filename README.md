# curso-angular

*Estrutura do Angular*
- node_modules - dependências do projeto;
- src - onde a aplicação é programada (código-fonte);
- src/app - pasta principal para componentes, services e etc;
- Os componentes são divididos em partes TS, HTML, CSS e testes.

*Compartilhando dados*
- Em Angular podemos compartilhar dados do componente pai com componente filho:
    - Disponibilizar na chamada do componente o nome do dado que será recebido com a seguinte sintaxe: [dado];
    - No código .ts do componente filho vamos utilizar o decorator @input, que tem como papel entregar o dado para o template.

