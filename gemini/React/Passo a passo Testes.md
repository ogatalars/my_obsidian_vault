
### Uma Pausa para Entender: O que são `describe` e `test`?

Imagine que nosso componente `TodoItem` é um brinquedo novo que acabamos de construir. Antes de entregá-lo para alguém brincar, precisamos ter certeza de que ele funciona direitinho, certo?

É para isso que servem os testes! E para organizar essa brincadeira, usamos duas palavras mágicas: `describe` e `test`.

#### `describe` é a Caixa do Brinquedo

Pense no `describe` como uma **caixa de brinquedos**.

Quando você tem vários carrinhos, você os guarda na caixa de carrinhos. Se tem blocos de montar, eles vão para a caixa de blocos. Isso mantém tudo organizado.

No nosso código, o `describe` faz a mesma coisa: ele cria uma "caixa" para guardar todos os testes de uma parte específica do nosso programa.

Então, quando escrevemos:

JavaScript

```
describe('Componente TodoItem', () => {
  // ... aqui dentro vão as regras ...
});
```

Estamos dizendo: "**Esta é a caixa de testes para o nosso brinquedo 'Componente TodoItem'**". Tudo que estiver relacionado a ele, vamos guardar aqui dentro.

#### `test` é a Regra da Brincadeira

Agora que temos a caixa, precisamos criar as **regras** para saber se o brinquedo está funcionando. Cada `test` (que também pode ser chamado de `it`) é uma **única regra** da brincadeira.

Uma regra precisa ser bem clara, dizendo o que esperamos que aconteça.

Por exemplo, quando escrevemos:

JavaScript

```
test('deve mostrar o texto da tarefa direito', () => {
  // ... aqui a gente verifica se a regra foi cumprida ...
});
```

Estamos criando a regra: "**O brinquedo deve mostrar o texto da tarefa direitinho**".

Depois, dentro do `test`, nós fazemos os passos para conferir se o brinquedo seguiu essa regra.

**Juntando tudo, fica assim:**

JavaScript

```
// Esta é a nossa CAIXA DE BRINQUEDOS para o TodoItem
describe('Componente TodoItem', () => {

  // REGRA 1:
  test('deve mostrar o texto da tarefa direitinho', () => {
    // ... conferindo a regra 1 ...
  });

  // REGRA 2:
  test('deve ficar riscado quando a gente marcar como completo', () => {
    // ... conferindo a regra 2 ...
  });

  // REGRA 3:
  test('deve sumir quando a gente apertar o botão de deletar', () => {
    // ... conferindo a regra 3 ...
  });

});
```

É simples assim! Usamos `describe` para organizar e `test` para verificar cada coisinha, uma de cada vez. Agora, vamos aplicar isso ao nosso guia!

---

### Passo a Passo (Versão Reformulada): Testando um Componente `TodoItem`

#### Passo 1: Entendendo o Componente (O Brinquedo)

(O código do componente `TodoItem.tsx` continua o mesmo)

#### Passo 2: Criando o Arquivo de Teste e as Regras

Vamos criar nosso arquivo `TodoItem.test.tsx` e preparar nossa "caixa de brinquedos" e a "lista de regras".

**Código: `src/components/TodoItem.test.tsx`**

TypeScript

```
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoItem from './TodoItem';
import '@testing-library/jest-dom';

// Aqui criamos nossa "Caixa de Brinquedos" para o TodoItem.
// Tudo sobre ele será testado aqui dentro!
describe('Componente TodoItem', () => {

  // Para não ter que escrever a mesma tarefa toda hora,
  // vamos criar um "molde" dela aqui.
  const mockTodo = {
    id: 1,
    text: 'Aprender a testar componentes React',
    completed: false,
  };
  
  // Agora vamos criar nossa primeira REGRA!
  test('deve mostrar o texto da tarefa e os botões', () => {
    // ...
  });
});
```

#### Passo 3: Testando a Primeira Regra (Renderização Básica)

**Regra:** O componente precisa mostrar o texto da tarefa e os botões quando aparece na tela.

**Dentro do `test`:**

TypeScript

```
  test('deve mostrar o texto da tarefa e os botões', () => {
    // 1. Organizar: Colocamos nosso brinquedo na "área de testes".
    // Damos a ele as funções que precisa, mesmo que vazias por enquanto.
    render(<TodoItem {...mockTodo} onToggle={() => {}} onDelete={() => {}} />);

    // 2. Afirmar: Agora, conferimos se ele está fazendo o que a regra manda.
    // Ele mostrou o texto "Aprender a testar componentes React"?
    expect(screen.getByText('Aprender a testar componentes React')).toBeInTheDocument();
    
    // Ele mostrou o botão "Deletar"?
    expect(screen.getByRole('button', { name: /deletar/i })).toBeInTheDocument();
    
    // Ele mostrou a caixinha de marcar (checkbox)?
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
```

#### Passo 4: Testando a Segunda Regra (Comportamento Condicional)

**Regra:** Se a tarefa estiver completa, o texto deve ficar riscado e a caixinha, marcada.

**Adicione um novo `test` (uma nova regra):**

TypeScript

```
  test('deve ficar com texto riscado se a tarefa estiver completa', () => {
    // 1. Organizar: Desta vez, dizemos que a tarefa já vem completa.
    render(
      <TodoItem {...mockTodo} completed={true} onToggle={() => {}} onDelete={() => {}} />
    );

    // 2. Afirmar: Conferimos se as coisas mudaram como esperado.
    const textElement = screen.getByText(mockTodo.text);
    const checkboxElement = screen.getByRole('checkbox');

    // O texto está com um risco no meio?
    expect(textElement).toHaveStyle('text-decoration: line-through');
    
    // A caixinha de marcar está cheia?
    expect(checkboxElement).toBeChecked();
  });
```

#### Passo 5 e 6: Testando as Ações do Usuário (As Outras Regras)

Regra 3: Quando clicamos na caixinha, ele deve avisar que a tarefa mudou.

Regra 4: Quando clicamos em "Deletar", ele deve avisar que é para apagar.

Para testar isso, precisamos de "espiões" (`jest.fn()`) para ver se o aviso foi dado corretamente.

TypeScript

```
  test('deve avisar quando clicamos na caixinha de marcar', async () => {
    // 1. Organizar: Criamos um "espião" para a função onToggle.
    const espiaoDoToggle = jest.fn();
    render(<TodoItem {...mockTodo} onToggle={espiaoDoToggle} onDelete={() => {}} />);

    // 2. Agir: Simulamos uma pessoa de verdade clicando na caixinha.
    await userEvent.click(screen.getByRole('checkbox'));

    // 3. Afirmar: Conferimos com nosso espião!
    // Ele foi chamado?
    expect(espiaoDoToggle).toHaveBeenCalled();
    // Ele foi chamado com o número de identificação correto (o ID)?
    expect(espiaoDoToggle).toHaveBeenCalledWith(mockTodo.id);
  });

  test('deve avisar quando clicamos para deletar', async () => {
    // 1. Organizar: Agora, um espião para a função onDelete.
    const espiaoDoDelete = jest.fn();
    render(<TodoItem {...mockTodo} onToggle={() => {}} onDelete={espiaoDoDelete} />);

    // 2. Agir: A pessoa clica no botão "Deletar".
    await userEvent.click(screen.getByRole('button', { name: /deletar/i }));

    // 3. Afirmar: O espião do delete foi chamado com o ID certo?
    expect(espiaoDoDelete).toHaveBeenCalledWith(mockTodo.id);
  });
```

### Caso de exemplo: Passo a Passo: Testando um Componente `TodoItem`

Vamos imaginar que você entrou em um projeto e precisa criar os testes para o seguinte componente, que já está pronto.

#### Passo 1: Entendendo o Componente a Ser Testado

Primeiro, analise o código do componente `TodoItem.tsx`.

**O que ele faz?**

- Recebe as propriedades (`props`) de uma tarefa: `id`, `text`, `completed`.
- Recebe duas funções como props: `onToggle` (para marcar como concluída/não concluída) e `onDelete` (para remover a tarefa).
- Exibe o texto da tarefa. Se estiver concluída, o texto é riscado.
- Exibe um checkbox que, ao ser clicado, chama a função `onToggle`.
- Exibe um botão "Deletar" que, ao ser clicado, chama a função `onDelete`.

**Código do Componente: `src/components/TodoItem.tsx`**

TypeScript

```
import React from 'react';

// Define a interface para as props do componente
export interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, onToggle, onDelete }) => {
  const textStyle = {
    textDecoration: completed ? 'line-through' : 'none',
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
        aria-label={`Marcar "${text}" como concluído`}
      />
      <span style={textStyle}>{text}</span>
      <button onClick={() => onDelete(id)}>
        Deletar
      </button>
    </div>
  );
};

export default TodoItem;
```

#### Passo 2: Criando o Arquivo de Teste

Ao lado do seu arquivo de componente, crie um novo arquivo chamado `TodoItem.test.tsx`. É uma convenção manter os arquivos de teste próximos aos arquivos que eles testam.

**Estrutura Inicial do Teste: `src/components/TodoItem.test.tsx`**

TypeScript

```
import React from 'react';
// Importa as funções necessárias da Testing Library e o user-event
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// Importa o componente que vamos testar
import TodoItem from './TodoItem';
// Importa os matchers do jest-dom para asserções mais limpas
import '@testing-library/jest-dom';

// O bloco `describe` agrupa testes relacionados para um mesmo componente
describe('Componente TodoItem', () => {
  // Nossos testes irão aqui!
});
```

#### Passo 3: Testando a Renderização Básica

O primeiro e mais fundamental teste é garantir que o componente renderiza corretamente com as props fornecidas.

**Objetivo:** Verificar se o texto da tarefa e os botões são exibidos quando o componente é renderizado.

**Adicione o seguinte teste dentro do bloco `describe`:**

TypeScript

```
// ... (imports e describe)

  // Dados mockados para os nossos testes, para evitar repetição
  const mockTodo = {
    id: 1,
    text: 'Aprender a testar componentes React',
    completed: false,
  };

  test('deve renderizar o texto da tarefa corretamente', () => {
    // Arrange (Organizar)
    // Renderizamos o componente passando as props necessárias.
    // As funções onToggle e onDelete são mocks vazios por enquanto.
    render(<TodoItem {...mockTodo} onToggle={() => {}} onDelete={() => {}} />);

    // Act (Agir) - Nenhuma ação do usuário aqui, apenas verificamos a renderização inicial.

    // Assert (Afirmar)
    // Verificamos se o texto da tarefa está na tela.
    expect(screen.getByText('Aprender a testar componentes React')).toBeInTheDocument();
    // Verificamos se o botão de deletar está na tela.
    expect(screen.getByRole('button', { name: /deletar/i })).toBeInTheDocument();
    // Verificamos se o checkbox está na tela.
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
```

#### Passo 4: Testando o Comportamento Condicional

Agora, vamos testar como o componente se comporta quando uma `prop` muda.

**Objetivo:** Verificar se o estilo de "texto riscado" é aplicado e se o checkbox está marcado quando a tarefa está `completed: true`.

**Adicione este novo teste:**

TypeScript

```
// ... (imports, describe, mockTodo)

  test('deve aplicar estilo de texto riscado e marcar o checkbox quando a tarefa está completa', () => {
    // Arrange
    // Criamos um novo objeto de props com `completed: true`
    const completedTodo = { ...mockTodo, completed: true };
    render(<TodoItem {...completedTodo} onToggle={() => {}} onDelete={() => {}} />);

    // Act - Nenhuma.

    // Assert
    const textElement = screen.getByText(completedTodo.text);
    const checkboxElement = screen.getByRole('checkbox');

    // Verifica se o estilo `text-decoration: line-through` está aplicado
    expect(textElement).toHaveStyle('text-decoration: line-through');
    // Verifica se o checkbox está marcado
    expect(checkboxElement).toBeChecked();
  });
```

#### Passo 5: Testando a Interação do Usuário (Toggle)

É crucial testar se as funções passadas via `props` são chamadas quando o usuário interage com o componente.

**Objetivo:** Verificar se a função `onToggle` é chamada com o ID correto quando o usuário clica no checkbox.

**Adicione este teste, agora usando `jest.fn()` para mockar a função:**

TypeScript

```
// ... (imports, describe, mockTodo)

  test('deve chamar a função onToggle com o ID correto ao clicar no checkbox', async () => {
    // Arrange
    // `jest.fn()` cria uma função mock que nos permite "espionar" suas chamadas.
    const mockOnToggle = jest.fn();
    render(<TodoItem {...mockTodo} onToggle={mockOnToggle} onDelete={() => {}} />);

    const checkboxElement = screen.getByRole('checkbox');

    // Act
    // `userEvent` simula uma interação real do usuário de forma assíncrona.
    await userEvent.click(checkboxElement);

    // Assert
    // Verificamos se a nossa função mock foi chamada exatamente uma vez.
    expect(mockOnToggle).toHaveBeenCalledTimes(1);
    // Verificamos se ela foi chamada com o argumento correto (o ID da tarefa).
    expect(mockOnToggle).toHaveBeenCalledWith(mockTodo.id);
  });
```

#### Passo 6: Testando a Interação do Usuário (Deletar)

Vamos fazer o mesmo para a função de deletar.

**Objetivo:** Verificar se a função `onDelete` é chamada com o ID correto quando o usuário clica no botão "Deletar".

**Adicione o teste final:**

TypeScript

```
// ... (imports, describe, mockTodo)

  test('deve chamar a função onDelete com o ID correto ao clicar no botão de deletar', async () => {
    // Arrange
    const mockOnDelete = jest.fn();
    render(<TodoItem {...mockTodo} onToggle={() => {}} onDelete={mockOnDelete} />);

    const deleteButton = screen.getByRole('button', { name: /deletar/i });

    // Act
    await userEvent.click(deleteButton);

    // Assert
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
    expect(mockOnDelete).toHaveBeenCalledWith(mockTodo.id);
  });
```

### Resumo do Processo

1. **Analise o Componente:** Entenda suas `props`, seu estado e os eventos que ele dispara.
2. **Crie o Arquivo de Teste:** Configure a estrutura básica com `describe` e os `imports`.
3. **Teste a Renderização:** Garanta que o componente aparece na tela como esperado com um conjunto básico de `props`.
4. **Teste as Variações:** Verifique a renderização condicional, testando o componente com diferentes `props`.
5. **Teste as Interações:** Use `userEvent` para simular cliques e outras ações. Use `jest.fn()` para mockar as funções de callback e verificar se elas foram chamadas corretamente.

Seguindo estes passos, você pode criar uma suíte de testes robusta e confiável para qualquer componente React, garantindo que ele funcione como esperado em diferentes cenários e que futuras alterações não quebrem seu comportamento.