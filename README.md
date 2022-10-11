# curso-angular

## Estrutura do Angular

- node_modules - dependências do projeto;
- src - onde a aplicação é programada (código-fonte);
- src/app - pasta principal para componentes, services e etc;
- Os componentes são divididos em partes TS, HTML, CSS e testes.

## Criando Componentes

- Para criar um componente podemos utilizar o CLI;
- Comando: ng generate **`<nome>`**
- Todos os arquivos necessários serão criados no projeto;
- Para importar o componente basta utilizar o **selector** em um HTML de outro componente.

## Interpolação de Dados

- Interpolação de dados é um recurso que nos ensina a trabalhar com componentes do Angular;
- Vamos criar nossas variáveis no arquivos .ts, dentro da classe;
- Ou seja, estas variáveis são propriedades da classe;
- E então teremos acesso a estes dados no arquivo .html, o template:
  - A impressão é feita através de: **`{{ dado }}`**.

## CSS no Angular

- Os estilos em aplicações Angular podem ser feitos de **duas maneiras**;
- **Global**: utilizando o arquivo style.css, que fica em src;
  - Obs: será aplicado dentro de todo o projeto;
- **Scoped**: estilos a nível de componente, criamos quando damos um generate;
  - Obs: será aplicado apenas dentro do componente.

## Compatilhando dados

- Em Angular podemos compartilhar **dados do componente pai para o componente filho**;
  - Disponibilizar na chamada do componente o nome do dado que será recebido com a seguinte sintaxe: **`[dado]`**;
  - No código .ts do componente filho vamos utilizar o decorator `@Input`, que tem papel de entregar o dado para o template.

## Diretivas

- Em Angular temos um recurso chamado diretivas;
- Que podem realizar diversas funções no sistema, como **aplicar estilos a um elemento**;
- Elas começam sempre com **_ng_**, nomenclatura fica semelhante a **_ngAlgumaCoisa_**.

## Renderização condicional

- É possível exibir determinado conteúdo por meio de uma condicional:
  - Utilizando a diretiva **_nglf_** para isso;
  - Os valores podem ser dinâmicos (**propriedades**), mas podemos realizar outros tipos de comparação;
- Possibilidade também de imprimir cenário de validação de falso, com o else.

## Eventos

- Podemos **ativar eventos** nos componentes para disparar algum método;
  - Evento clássico que utiliza-se é o **click**;
  - Sintaxe: **`(click)="algumaFuncao()"`**;
- Os métodos ficam na **classe**.

## Emitindo eventos

- Podemos comunicar eventos de um componente filho para o pai;
  - **`@Output`**, que vai fazer a saída do evento do componente filho;
  - **Na tag de invocação do componente no template**, escolhemos um método para exercutar quando o evento for emitido;
  - Ex: **`(emit)="onEmit"`**.

## Renderização de listas

- Recurso importante: **loop** em listas
- Necessário uma propriedade com os itens da lista;
  - No template do componente utilizar o **`*ngFor`**;
  - Sintaxe: **`*ngFor=let item of items`**;
  - Dessa maneira podemos rendeziar o template baseado em dados.

## Importância das interfaces

- Toda entidade que vamos trabalhar precisa de uma interface;
  - Torna o código mais simples ao longo do programa;
  - Padroniza e **facilita a manutenção**.

## Pipe operators

- Os **pipe operators** são recursos para trabalhar com strings nos templates;
- Podemos realizar **diversas funções**, como deixar o texto em caixa alta;
- Sintaxe: `{{ dado | algumPipeOperator}}`;
- Desta maneira nos poupamos de regras de CSS ou manipulação de strings com JS.
