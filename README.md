# Chakra-UI Feedback Widget

Este pacote permite que você adicione um widget de feedback em seu projeto React utilizando ChakraUI para estilização. Com ele, os usuários poderão enviar feedback sobre bugs, sugestões e melhorias. Em breve, será adicionada a integração com envio de e-mail.

## Instalação

Antes de instalar, certifique-se de ter o Node.js e o npm ou Yarn instalados.

Para instalar o pacote, execute um dos seguintes comandos:

```bash
npm install chakra-ui-feedback-widget
# ou
yarn add chakra-ui-feedback-widget
```

## Utilização
Para utilizar o componente em seu projeto, basta importá-lo e adicioná-lo ao seu componente React, conforme o exemplo abaixo:

```tsx
import { FeedbackWidget } from 'chakra-ui-feedback-widget';

function MeuComponente() {
  return (
    <div>
      <h1>Meu Componente</h1>
      <FeedbackWidget />
    </div>
  );
}
```

## Propriedades e Cusomização
O FeedbackWidget possui algumas propriedades que você pode utilizar para customizar seu comportamento e estilo:

```tsx
<FeedbackWidget 
  onSubmit={(data) => console.log(data)} 
  buttonText="Enviar Feedback" 
  placeholder="Escreva seu feedback aqui..."
/>
```
- **onSubmit:** Função chamada quando o feedback é enviado.
- **buttonText:** Texto do botão de envio.
- **placeholder:** Texto do placeholder do campo de feedback.

## Contribuindo
Se você encontrou algum bug ou tem alguma sugestão para melhoria (existe várias 😅) do pacote, sinta-se livre para abrir uma issue ou pull request no repositório.

### Configurando o Ambiente de Desenvolvimento

1. Clone o repositório
```bash
git clone https://github.com/Saciloto/chakra-ui-feedback-widget.git
```
2. Instale as dependências
```bash
cd chakra-ui-feedback-widget
npm install
# ou
yarn install
```
3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

### Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais informações.



