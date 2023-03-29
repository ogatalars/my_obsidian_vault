Hooks são uma funcionalidade adicionada ao React na versão 16.8 que permitem aos desenvolvedores utilizar o state e outras funcionalidades do React em componentes funcionais. Antes dos hooks, componentes funcionais eram utilizados apenas para apresentar informações estáticas e não podiam ter estado interno. Com os hooks, é possível definir e atualizar estado, lidar com efeitos colaterais e fazer outras coisas que eram exclusivas dos componentes de classe.

Existem vários hooks disponíveis no React, mas vamos nos concentrar em três dos mais comuns: useState, useEffect e useContext.

## useState

O useState é um hook que permite que um componente funcional tenha um estado interno. Ele retorna um array com duas posições, sendo a primeira o valor atual do estado e a segunda uma função para atualizá-lo.

Um exemplo simples de utilização do useState seria para controlar o valor de um input:

```
import React, { useState } from 'react';

function InputComponent() {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>Valor do input: {inputValue}</p>
    </div>
  );
}

```


Neste exemplo, o estado interno do componente é uma string que representa o valor atual do input. A função setInputValue é usada para atualizar o estado sempre que o valor do input é alterado.

## useEffect

O useEffect é um hook que permite que um componente funcional realize efeitos colaterais, como buscar dados em uma API ou manipular o DOM. Ele é chamado após a renderização do componente e pode ser usado para executar código de acordo com diferentes gatilhos, como mudanças no estado do componente ou no ciclo de vida do componente.

Um exemplo de utilização do useEffect seria para buscar dados em uma API e atualizar o estado do componente:


```
import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

```


Neste exemplo, o useEffect é utilizado para buscar dados em uma API e atualizar o estado do componente com esses dados. O segundo argumento do useEffect, um array vazio, indica que o efeito deve ser executado apenas uma vez, após a renderização inicial do componente.

## useContext

O useContext é um hook que permite que um componente funcional acesse um contexto definido em um componente pai. O contexto é uma forma de passar dados através da árvore de componentes sem a necessidade de passá-los explicitamente como props.

Um exemplo de utilização do useContext seria para acessar um tema definido em um componente pai:

javascriptCopy code

```
import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemeButton() {
  const theme = useContext(ThemeContext);

  return <button style={{ backgroundColor: theme }}>Botão com tema</button>;
}

function ThemeContainer() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeButton />
    </ThemeContext.Provider>

```