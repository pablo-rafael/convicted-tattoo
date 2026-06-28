# ⚡ Convicted Tattoo

Uma landing page responsiva, moderna e de alta conversão projetada especialmente para estúdios ou artistas de tatuagem. O site atua como um guia instrutivo completo, sanando as principais dúvidas de clientes sobre o processo de fazer uma tatuagem, englobando desde a biologia da dor até cuidados cruciais pré e pós-sessão.

---

## 📱 Demonstração Visual

O projeto foi construído sob a metodologia *Mobile-First* adaptada, garantindo uma experiência fluida, tipografia robusta e efeitos visuais simétricos tanto em desktops quanto em dispositivos móveis.

*   **Design Escuro & Impactante:** Uso de contraste de tons escuros (`#161515`) com detalhes em verde limão vibrante (`#9af532`).
*   **Menu Inteligente:** Barra de navegação que se oculta dinamicamente no scroll para economizar espaço de tela e reaparece ao rolar para cima.
*   **Menu Hambúrguer Retrátil:** Navegação mobile nativa e compacta que expande apenas o espaço necessário para exibição dos links.

---

## ✨ Funcionalidades Principais

*   **Seção "Por que dói?":** Explicação clara sobre os fatores que influenciam a sensibilidade de cada região do corpo.
*   **Guia Pré-Tattoo:** Recomendações e cuidados com alimentação, hidratação da pele e restrições antes do agendamento.
*   **Guia Pós-Tattoo:** Passo a passo didático para manter a higienização, proteção contra radiação solar e perfeita cicatrização do desenho.
*   **Seção de Conversão Avançada:** Chamada para ação simplificada direcionando o usuário para agendamentos via WhatsApp ou engajamento no Instagram.

---

## 🛠️ Tecnologias Utilizadas

A arquitetura do projeto prioriza performance e leveza, utilizando tecnologias web nativas (Vanilla Web Techs):

*   **HTML5:** Estruturação semântica de seções e acessibilidade de elementos.
*   **CSS3 Avançado:** 
    *   Arquitetura Flexbox para o alinhamento de grids de imagem e blocos de texto.
    *   Efeitos pseudo-elementos (`::after`) combinados com `-webkit-text-stroke` para contornos estilizados em 3D.
    *   Media Queries (`@media`) dedicadas para reorganização estrutural em telas de até `600px`.
*   **JavaScript (Vanilla):**
    *   Lógica de detecção de rolagem (`window.scrollY`) para alternar a visibilidade do menu fixo.
    *   Gerenciamento dinâmico de classes (`classList.toggle`) para abertura e fechamento responsivo do menu hambúrguer.

---

## 📂 Estrutura de Arquivos

```text
├── img/                       # Diretório contendo ilustrações, logos e ícones
├── index.html                 # Estrutura principal da Landing Page
├── styles.css                 # Folha de estilo CSS (Estilização Geral e Media Queries)
└── scripts.js                 # Lógica do menu retrátil e comportamento do scroll
```

🚀 Como Executar o Projeto Localmente
Não há necessidade de instalar dependências complexas ou rodar servidores de compilação.

Clone este repositório para sua máquina local:
```
Bash
git clone [https://github.com/seu-usuario/convicted-tattoo.git](https://github.com/seu-usuario/convicted-tattoo.git)
```

Navegue até a pasta do projeto:
```
Bash
cd convicted-tattoo
```

Abra o arquivo index.html diretamente em seu navegador padrão ou utilize extensões como o Live Server no VS Code para desenvolvimento em tempo real.

✉️ Contato & Redes Sociais
Desenvolvido para fins profissionais e acadêmicos. Conecte-se com o projeto:

Instagram: @rafafk_tattoo

WhatsApp Comercial: (85) 99688-9541
