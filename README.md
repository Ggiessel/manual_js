Manual JavaScript

1. O que é JavaScript?

JavaScript é uma linguagem de programação que roda dentro do navegador. Ela permite adicionar comportamento e interatividade às páginas da web.

2. Para que JavaScript serve em páginas web?
Mostrar ou esconder elementos
Validar formulários 
Criar animações
Atualizar conteúdo sem recarregar a página
Responder a cliques, digitação, movimentos do mouse etc.

3. Como JavaScript se relaciona com HTML e CSS?

HTML é a estrutura do site.
CSS é o estilo do site
JavaScript é o comportamento do site
4. Onde JavaScript pode ser usado no HTML?

Dentro da tag <script>, <head> ou <body>.
Em um arquivo separado.

5. Diferença entre script dentro do HTML e script em arquivo separado.
Dentro do HTML: É prático para funções específicas daquela página.

Arquivo separado: Organiza o projeto, facilita a manutenção e permite que várias páginas usem a mesma lógica sem precisar repetir o texto.

6. Como declarar variáveis
Podemos declarar variáveis de duas formas, com let ou var, sendo let a forma recomendada. let permite declarar variáveis que existem apenas no escopo no qual desejamos utilizá-las. Esse comportamento é diferente quando utilizamos var, que cria variáveis globais e que podem ser acessadas em qualquer local no arquivo ou função onde foram declaradas.

7. Diferença entre var, let e const
var: É a forma antiga, tem menos regras e pode causar confusões porque a "caixa" pode ser vista de lugares onde não deveria.
let: É a forma moderna e segura, respeita os limites de onde foi criada e permite que o valor guardado seja alterado depois.
const: É usada para valores fixos. Uma vez que você guarda algo nela, não pode mais trocar o conteúdo. 
8. O que é escopo de variável
O escopo de uma variável em JavaScript determina onde essa variável é acessível dentro do código.

9. Diferença entre == e ===
== : Compara apenas o valor. Se você comparar o número cinco com o texto "cinco", ele dirá que são iguais porque não se importa com o tipo da informação.
=== : Compara o valor e o tipo. Ele só dirá que é igual se ambos forem exatamente a mesma coisa e do mesmo tipo.
10. Diferença entre != e !==
!= : Diz que algo é diferente apenas se os valores forem distintos, ignorando o tipo.
!== : Diz que algo é diferente se o valor ou o tipo forem distintos. É o oposto exato da igualdade estrita.
11. Como declarar funções
Uma função é um bloco de instruções que fica guardado para ser executado apenas quando você chamar pelo nome dele. Para declarar, você usa uma palavra de comando, dá um nome à função e define entre parênteses se ela precisa de alguma informação externa para trabalhar.

12. Operações aritméticas e lógicas
Aritméticas: O JavaScript usa símbolos matemáticos tradicionais para somar (+), subtrair (-), multiplicar (*) e dividir (/).
Lógicas: Servem para combinar condições. Usamos símbolos para representar "E" (quando duas coisas precisam ser verdadeiras ao mesmo tempo) e "OU" (quando apenas uma das coisas precisa ser verdadeira).
13. Estruturas condicionais
Funcionam como tomadas de decisão. O programa testa uma condição e isso permite que o site mude de comportamento dependendo da situação.
14. Estruturas de repetição
Servem para executar a mesma tarefa várias vezes seguidas sem precisar escrever o texto repetidamente. Você define um ponto de partida, uma condição para continuar e o que deve mudar a cada volta. O ciclo se repete até que a condição deixe de ser verdadeira.

15. Como interagir com elementos
O JavaScript interage com a página através de um sistema que enxerga o HTML como um guia. Ele procurara um elemento quando o usuário clica nele e, em resposta, mudar o texto, a cor ou até remover elementos da tela. 

