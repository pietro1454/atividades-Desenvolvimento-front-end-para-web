# Projeto 2 – Interface Express

## Tema
**CodeWave Summit 2026 — Tecnologia para todos.**

Landing page acadêmica fictícia sobre um evento de tecnologia voltado a pessoas que desejam começar a aprender programação e desenvolvimento web.

## Integrantes
- Integrante 1: Robson de Araújo Andrade

## Imagens
-`Imagens`: As imagens utilizadas, são meramente demonstrativa, mas não contém direitos autorais, então está para uso de qualquer pessoa.

## Arquivos do projeto
- `index.html`: estrutura semântica da página.
- `css/estilo.css`: estilos, cores, layout, efeitos e responsividade.
- `imagens/`: pasta reservada para imagens adicionais.

## Como abrir a página
1. Extraia a pasta ZIP, se necessário.
2. Abra a pasta `projeto2_interface_express`.
3. Dê dois cliques no arquivo `index.html` para abri-lo no navegador.
4. Para editar o projeto, abra a pasta em um editor de código, como o Visual Studio Code.
5. Altere o HTML ou o CSS e atualize a página no navegador para observar as mudanças.

## Principais prompts utilizados
1. “Crie uma estrutura HTML sem CSS e sem JavaScript para uma landing page sobre um evento de tecnologia, contendo cabeçalho, menu com links internos, apresentação do tema, três cards, formulário demonstrativo e rodapé.”
2. “Explique como organizar um arquivo CSS externo e como utilizar seletores, classes, identificadores, Flexbox ou Grid, pseudoclasses e media queries.”
3. “Sugira propriedades CSS para melhorar a aparência, os estados de foco e a responsividade de uma landing page para iniciantes.”

## Três propriedades CSS pesquisadas

### 1. `box-shadow`
Adiciona sombra ao redor de um elemento, criando sensação de profundidade. No projeto, foi aplicada aos cards e ao botão quando o cursor passa sobre ele.
- Teste realizado: altere os valores de deslocamento, desfoque e transparência para comparar sombras mais leves e mais fortes.
- Exemplo: `box-shadow: 0 5px 18px rgba(23, 32, 51, 0.06);`

### 2. `linear-gradient()`
Cria uma transição gradual entre duas ou mais cores. Foi utilizada no fundo da seção principal (`.hero`).
- Teste realizado: altere as cores e o ângulo `125deg` para observar como o gradiente muda.
- Exemplo: `background: linear-gradient(125deg, #122c68, #1746a2, #1675bd);`

### 3. `clamp()`
Define um valor flexível limitado por um mínimo e um máximo. Foi utilizada nos títulos para ajustar o tamanho da fonte conforme a largura da tela.
- Teste realizado: altere o valor mínimo, o valor flexível e o máximo para observar a mudança entre telas pequenas e grandes.
- Exemplo: `font-size: clamp(2.3rem, 6vw, 4.4rem);`

## Duas propriedades mantidas na versão final
- **`box-shadow`**: permanece nos cards e no estado `:hover` do botão para destacar elementos sem depender apenas de cores.
- **`linear-gradient()`**: permanece no fundo da seção principal para dar destaque visual à apresentação do evento.

A propriedade `clamp()` também foi mantida para que os títulos se adaptem melhor a diferentes tamanhos de tela.

## Recursos de CSS utilizados
- Seletores de elementos, classes e identificador.
- Seletor hierárquico, como `.menu a`.
- Paleta visual baseada em azul-marinho, azul, branco e cinza-claro.
- Tipografia legível, margens, espaçamentos, bordas e cantos arredondados.
- CSS Grid para organizar os três cards.
- Pseudoclasses `:hover` e `:focus-visible`.
- Transições e transformações simples.
- Media query para telas com largura de até 760 pixels.

## Observações
O formulário é demonstrativo e não armazena nem envia inscrições para um serviço real. Os integrantes devem testar a página, personalizar o conteúdo e compreender as regras CSS antes da entrega.
