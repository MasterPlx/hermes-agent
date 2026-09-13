# Inventário da localização pt-BR

Superfícies verificadas e localizadas neste trabalho:

- catálogo principal e seletor de idioma do Hermes Desktop;
- catálogos integrados dos plugins Hermes Bots e Kanban no Desktop;
- mensagens estáticas do backend em `locales/`, incluindo aliases e placeholders;
- catálogo português existente do painel web, ajustado para identidade e vocabulário brasileiros.

Categorias que continuam fora dos catálogos de localização:

- textos de interface ainda codificados diretamente nos componentes, quando não há uma chave de i18n existente;
- prompts e instruções destinados aos modelos, que não são interface para o usuário;
- saída gerada por modelos, ferramentas, comandos, bibliotecas de terceiros ou pelo sistema operacional;
- identificadores técnicos, nomes de produtos, caminhos, código, logs e mensagens de erro externas.

Essas categorias exigem trabalho próprio de extração ou não devem ser traduzidas automaticamente, pois não fazem parte dos catálogos estáticos auditados aqui.
