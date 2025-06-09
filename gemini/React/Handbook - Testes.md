## Handbook de Testes Unitários em React com TypeScript

Este guia completo oferece um passo a passo para a criação de testes unitários em suas aplicações React utilizando TypeScript. Abordaremos desde a configuração inicial e conceitos fundamentais até tópicos intermediários, com exemplos práticos para solidificar seu aprendizado.

---

### Tópicos para Iniciantes

#### Configuração do Ambiente de Teste

Para iniciar, é essencial configurar o ambiente de teste. A combinação mais popular e robusta para aplicações React é o **Jest** como test runner e a **React Testing Library (RTL)** para interagir com os componentes.

Projetos criados com `create-react-app` já vêm com essa estrutura pré-configurada. Caso contrário, você pode instalá-los manualmente:

Bash

```
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @types/jest jest-environment-jsdom ts-jest
```

Em seguida, configure o Jest criando um arquivo `jest.config.js` na raiz do seu projeto:

JavaScript

```
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
```

E crie o arquivo `src/setupTests.ts` para importar os matchers do `jest-dom`:

TypeScript

```
import '@testing-library/jest-dom';
```

#### Anatomia de um Teste

Um teste unitário bem estruturado segue o padrão **AAA (Arrange, Act, Assert)**:

- **Arrange (Organizar):** Prepare o ambiente para o seu teste. Isso envolve renderizar o componente com as props necessárias e, se for o caso, mockar dependências.
- **Act (Agir):** Execute a ação que você deseja testar. Pode ser um clique de botão, uma digitação em um campo de input, etc.
- **Assert (Afirmar):** Verifique se o resultado da ação é o esperado.

#### Escrevendo seu Primeiro Teste

Vamos testar um componente simples que exibe uma mensagem.

**Componente:** `Greeting.tsx`

TypeScript

```
import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Olá, {name}!</h1>;
};

export default Greeting;
```

**Teste:** `Greeting.test.tsx`

TypeScript

```
import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting', () => {
  test('deve renderizar a saudação com o nome correto', () => {
    // Arrange
    render(<Greeting name="Mundo" />);

    // Act
    const headingElement = screen.getByText(/Olá, Mundo!/i);

    // Assert
    expect(headingElement).toBeInTheDocument();
  });
});
```

Neste exemplo, `render` da RTL renderiza o componente, `screen.getByText` busca um elemento pelo seu texto e `expect(...).toBeInTheDocument()` afirma que o elemento está presente no DOM.

#### Testando Interações do Usuário

A React Testing Library incentiva testes que simulam o comportamento do usuário. Para isso, utilizamos a biblioteca `@testing-library/user-event`.

**Componente:** `Counter.tsx`

TypeScript

```
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default Counter;
```

**Teste:** `Counter.test.tsx`

TypeScript

```
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter', () => {
  test('deve incrementar a contagem ao clicar no botão', async () => {
    // Arrange
    render(<Counter />);
    const buttonElement = screen.getByRole('button', { name: /Incrementar/i });
    
    // Act
    await userEvent.click(buttonElement);

    // Assert
    const countElement = screen.getByText(/Contagem: 1/i);
    expect(countElement).toBeInTheDocument();
  });
});
```

Aqui, `userEvent.click` simula um clique no botão, e verificamos se o texto do contador foi atualizado.

---

### Tópicos Intermediários

#### Mockando Módulos e Funções

Em testes unitários, queremos testar uma unidade de código isoladamente. Se um componente depende de uma função externa ou de um módulo, podemos "mocká-los" para controlar seu comportamento.

**Exemplo com uma função mock:**

Suponha um componente que chama uma função `onSubmit` passada via props.

TypeScript

```
import React from 'react';

interface FormProps {
  onSubmit: (data: string) => void;
}

// ... componente do formulário
```

**Teste:**

TypeScript

```
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('Form', () => {
  test('deve chamar a função onSubmit com os dados corretos', async () => {
    const handleSubmit = jest.fn();
    render(<Form onSubmit={handleSubmit} />);
    
    const inputElement = screen.getByLabelText(/nome/i);
    await userEvent.type(inputElement, 'John Doe');

    const submitButton = screen.getByRole('button', { name: /enviar/i });
    await userEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith('John Doe');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
```

Usamos `jest.fn()` para criar uma função mock e depois verificamos se ela foi chamada com os parâmetros esperados.

#### Testando Requisições a APIs

Para testar componentes que fazem chamadas a APIs, utilizamos a biblioteca **Mock Service Worker (MSW)**. Ela intercepta as requisições a nível de rede, permitindo que você forneça respostas mockadas.

**Exemplo de configuração do MSW:** `src/mocks/handlers.ts`

TypeScript

```
import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.example.com/user', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ name: 'John Doe' }));
  }),
];
```

**Teste de um componente que busca dados:**

TypeScript

```
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from './UserProfile';
import { server } from '../mocks/server'; // Configuração do MSW

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('UserProfile', () => {
  test('deve exibir o nome do usuário após a chamada da API', async () => {
    render(<UserProfile />);
    
    const userNameElement = await screen.findByText(/John Doe/i);
    expect(userNameElement).toBeInTheDocument();
  });
});
```

A função `findBy` da RTL espera que um elemento apareça no DOM, o que é ideal para testar comportamentos assíncronos.

#### Testando Hooks Customizados

Hooks customizados também podem e devem ser testados. Para isso, criamos um componente de teste que utiliza o hook e verificamos seu comportamento.

**Hook Customizado:** `useCounter.ts`

TypeScript

```
import { useState, useCallback } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((c) => c + 1), []);

  return { count, increment };
};
```

**Teste:** `useCounter.test.ts`

TypeScript

```
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  test('deve incrementar a contagem', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
```

A função `renderHook` nos permite testar o hook de forma isolada, e `act` garante que as atualizações de estado sejam processadas antes das asserções.

#### Testando Contexto (Context API)

Para testar componentes que consomem um Context, você precisa envolver o componente a ser testado com o `Provider` do contexto durante a fase de _Arrange_.

**Exemplo:**

TypeScript

```
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MyThemeContext } from './MyThemeContext';
import ThemedComponent from './ThemedComponent';

describe('ThemedComponent', () => {
  test('deve renderizar com o tema do contexto', () => {
    const theme = { color: 'dark' };
    render(
      <MyThemeContext.Provider value={theme}>
        <ThemedComponent />
      </MyThemeContext.Provider>
    );

    const componentElement = screen.getByTestId('themed-component');
    expect(componentElement).toHaveStyle(`color: ${theme.color}`);
  });
});
```

Este handbook cobre os fundamentos e os próximos passos para você se tornar proficiente em testes unitários com React e TypeScript. A prática constante e a exploração de cenários mais complexos solidificarão seu conhecimento. Lembre-se, o objetivo dos testes é garantir a qualidade e a manutenibilidade do seu código.