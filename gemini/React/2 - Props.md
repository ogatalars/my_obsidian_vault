As props são dados que são passados para um componente como entrada. Elas são usadas para configurar o comportamento e o conteúdo do componente.

As props são definidas como uma propriedade do componente. Elas podem ser de qualquer tipo, incluindo strings, números, objetos e arrays.

**Exemplo de props**

Aqui está um exemplo de um componente React com props:

JavaScript

```
const Button = ({ text, color }) => {
  return (
    <button style={{ color: color }}>{text}</button>
  );
};

const App = () => {
  return (
    <div>
      <Button text="Clique aqui" color="blue" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
```

Esse componente tem duas props: `text` e `color`. A prop `text` é usada para definir o texto do botão. A prop `color` é usada para definir a cor do botão.

**Regras para props**

As props seguem algumas regras:

- As props são somente leitura. O componente filho não pode alterar o valor de uma prop.
- As props são unidirecionais. Os dados só podem fluir do componente pai para o componente filho.
- As props podem ser omitidas. Se uma prop não for fornecida, o componente filho receberá um valor padrão.

**Vantagens de usar props**

As props oferecem várias vantagens, incluindo:

- **Escopo:** As props permitem que você especifique o escopo dos dados no componente filho.
- **Reutilização:** As props permitem que você compartilhe dados entre componentes.
- **Testabilidade:** As props permitem que você teste os componentes filhos de forma isolada.

**Conclusão**

As props são uma parte essencial do React. Elas permitem que você passe dados de um componente para outro de forma segura e eficiente.