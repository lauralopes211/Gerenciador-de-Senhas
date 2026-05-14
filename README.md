# 🎫 Sistema de Atendimento Inteligente

Um sistema web interativo para gerenciamento de filas e chamadas de senhas, focado em ambientes de saúde ou atendimento ao público. O sistema combina uma interface moderna em *Dark Mode* com recursos de acessibilidade sonora e visual.

---

## ✨ Funcionalidades

- **Geração de Senhas Dual:** Emite senhas para fluxos **Normais** (ex: A001) e **Preferenciais** (ex: P001).
- **Relógio em Tempo Real:** Exibição dinâmica de data e hora atualizadas segundo a segundo.
- **Chamada por Voz (TTS):** Utiliza a API de síntese de voz do navegador para anunciar a senha e o local de destino (ex: "Senha A 0 0 1, dirigir-se para Triagem").
- **Alerta Sonoro:** Emissão de sinal sonoro (Beep) via *Web Audio API* para captar a atenção do usuário no momento da chamada.
- **Painel de Histórico:** Lista as últimas 10 senhas chamadas com indicação visual colorida por categoria.
- **Gestão de Fila:** Armazenamento lógico das senhas em fila (FIFO - *First In, First Out*).

---

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando tecnologias padrão da web:

- **HTML5:** Estrutura semântica e acessível.
- **CSS3:** Design moderno, uso de *Flexbox/Grid*, animações de entrada e variáveis de cores.
- **JavaScript (ES6+):** Lógica de manipulação de arrays, integração com APIs de áudio, voz e manipulação dinâmica do DOM.

---

## 🚀 Como Executar

1.  Faça o download ou clone este repositório.
2.  Certifique-se de que os arquivos `index.html`, `style.css` e `script.js` estejam na mesma pasta.
3.  Abra o arquivo `index.html` em qualquer navegador moderno.
4.  **Dica:** Para que a voz funcione corretamente, clique em qualquer lugar da página após carregar, pois navegadores costumam bloquear áudio automático sem interação prévia.

---

## 📂 Locais de Atendimento Configuráveis

O operador pode selecionar o destino da chamada através de um menu suspenso:
- Triagem
- Consultórios 1, 2 e 3
- Emergência
- Raio X

---

## 🎨 Paleta de Cores (Interface)

| Elemento | Cor Hex | Papel Visual |
| :--- | :--- | :--- |
| **Fundo Principal** | `#0F172A` | Background Escuro |
| **Senha Normal** | `#3498DB` | Destaque Azul |
| **Senha Preferencial** | `#E67E22` | Alerta Laranja |
| **Botão Chamar** | `#22C55E` | Ação de Sucesso |
| **Texto/Ícones** | `#F1F5F9` | Leitura Clara |

---
https://lauralopes211.github.io/Gerenciador-de-Senhas/
## 📝 Licença

Este projeto é destinado a fins de estudo e uso livre. Sinta-se à vontade para clonar, modificar e melhorar o código!

---
*Desenvolvido para transformar a experiência de espera em algo mais organizado e tecnológico.*
