# Raízes do Bem

Site acadêmico de uma ONG fictícia, com páginas de apresentação, projetos e cadastro de voluntários.

## Como executar

Abra `index.html` no navegador ou execute `python -m http.server 8000` nesta pasta e acesse `http://localhost:8000`.

## Recursos

- Layout responsivo para celulares, tablets e computadores.
- Menu móvel, submenu com suporte a teclado e links entre as páginas.
- Validação de campos obrigatórios, e-mail e telefone.
- Janela de demonstração de doação, com fechamento pela tecla Escape.
- Avisos visuais de demonstração.

## Estrutura

- `index.html`: apresentação e contato.
- `projetos.html`: projetos e demonstração de doação.
- `cadastro.html`: formulário de demonstração.
- `css/main.css`: estilos consolidados usados pelas páginas.
- `css/base`, `css/components`, `css/layout`, `css/utilities`: módulos de referência dos estilos.
- `js/main.js`: validação demonstrativa e navegação da janela.
- `images`: ilustrações SVG locais.

## Limitações

Este projeto é uma demonstração de front-end. Não possui servidor de cadastro, banco de dados, processamento de pagamentos, envio de e-mails ou agendamento de lembretes. Os dados do formulário não são enviados nem armazenados. Contatos, números de atendimento e chave Pix são fictícios. As fontes do Google precisam de internet; sem conexão, são usadas fontes alternativas.
