Hooks são uma funcionalidade adicionada ao React na versão 16.8 que permitem aos desenvolvedores utilizar o state e outras funcionalidades do React em componentes funcionais. Antes dos hooks, componentes funcionais eram utilizados apenas para apresentar informações estáticas e não podiam ter estado interno. Com os hooks, é possível definir e atualizar estado, lidar com efeitos colaterais e fazer outras coisas que eram exclusivas dos componentes de classe.

Existem vários hooks disponíveis no React, mas vamos nos concentrar em três dos mais comuns: useState, useEffect e useContext.

## useState

O useState é um hook que permite que um componente funcional tenha um estado interno. Ele retorna um array com duas posições, sendo a primeira o valor atual do estado e a segunda uma função para atualizá-lo.

Um exemplo simples de utilização do useState seria para controlar o valor de um input:
import React, { useState } from 'react';

```
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
'''