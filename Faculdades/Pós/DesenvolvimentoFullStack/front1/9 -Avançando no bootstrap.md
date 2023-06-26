**Introdução**

O Bootstrap possui uma biblioteca extensa de componentes disponíveis gratuitamente, contando com diferentes opções de ícones, painéis, caixas de texto e cores em links, para cobrir inúmeros estilos.

Como não é necessário criar layouts do zero, o desenvolvimento dos projetos web são realizados de maneira mais rápida, o que aumenta a produtividade.

Além disso, o Bootstrap é facilmente adaptável a diferentes tamanhos de tela, seja ela um celular, um tablet ou um computador, oferecendo ao usuário uma melhor experiência ao navegar no site.

**Objetivos da aula**

-   Descrever o container de Cards
-   Discutir a implementação com Modal
-   Explicar o componente Carousel
-   Aplicar Forms
-   Definir Layouts com base em outros

**Resumo**

**Carrossel**

O **_Carousel_** é um importante componente do _Bootstrap_ que funciona como uma apresentação de slides que percorre elementos como um carrossel. O exemplo a seguir mostra como criar um carrossel básico com indicadores e controles:

<div id\="demo" class\="carousel slide" data-bs-ride\="carousel">

   <div class\="carousel-indicators">

            <button type\="button" data-bs-target\="#demo" data-bs-slide-to\="0" class\="active"></button\>

            <button type\="button" data-bs-target\="#demo" data-bs-slide-to\="1"></button\>

            <button type\="button" data-bs-target\="#demo" data-bs-slide-to\="2"></button\>

   </div\>

   <div class\="carousel-inner">

            <div class\="carousel-item active">

                <img src\="la.jpg" alt\="Los Angeles" class\="d-block w-100">

            </div\>

            <div class\="carousel-item">

                <img src\="chicago.jpg" alt\="Chicago" class\="d-block w-100">

            </div\>

            <div class\="carousel-item">

                <img src\="ny.jpg" alt\="New York" class\="d-block w-100">

            </div\>

   </div\>

   <button class\="carousel-control-prev" type\="button" data-bs-target\="#demo" data-bs-slide\="prev">

            <span class\="carousel-control-prev-icon"></span\>

   </button\>

   <button class\="carousel-control-next" type\="button" data-bs-target\="#demo" data-bs-slide\="next">

            <span class\="carousel-control-next-icon"></span\>

   </button\>

</div\>

Cada classe é responsável por formatar um elemento

-    **._carousel_:** Cria um carrossel
-   **.c_arousel-indicators_:** Adiciona indicadores para o carrossel. Estes são os pequenos pontos na parte inferior de cada slide (que indicam quantos slides existem no carrossel e qual slide o usuário está visualizando no momento)
-    **._carousel-inner_:** Adiciona os slides ao carrossel
-   **._carousel-item_:** Especifica o conteúdo de cada slide
-   **._carousel-control-prev_:** Adiciona um botão esquerdo (anterior) ao carrossel, que permite ao usuário voltar entre os slides
-   **._carousel-control-next_:** Adiciona um botão direito (próximo) ao carrossel, que permite ao usuário avançar entre os slides
-   **._carousel-control-prev-icon_:** Usado junto com **_.carousel-control-prev_** para criar um botão "anterior"
-   **._carousel-control-next-icon_:** Usado junto com **_.carousel-control-next_** para criar um botão "próximo"
-   **._slide_:** Adiciona uma transição CSS e efeito de animação ao deslizar de um item para o próximo.

**Cartões (cards)**

Um cartão é um contêiner de conteúdo flexível e extensível que possui opções para cabeçalhos, rodapés e uma ampla variedade de conteúdo e cores de fundo.

-   Um cartão básico é criado com a classe **_.card_,** e o conteúdo dentro do cartão com uma classe **_.card-body_**:

<div class\="card">

   <div class\="card-body">Cartão básico</div\>  
</div\>

-   Podemos adicionar a classe **_.card-header_** para criar um cabeçalho e a classe **_.card-footer_** para criar um rodapé no cartão:

<div class\="card">

     <div class\="card-header">Cabeçalho</div\>

     <div class\="card-body">Conteúdo</div\>

     <div class\="card-footer">Rodapé</div\>  
</div\>

-   Podemos utilizar a classe **_.card-title_** para adicionar títulos ao cartão. E podemos usar a classe **_.card-text_** para remover as margens inferiores de um elemento **<p>** se este for o último filho (ou o único) dentro de **_.card-body_.** A classe **_.card-link_** adiciona uma cor azul a qualquer link e um efeito de foco.

<div class\="card">

 <div class\="card-body">

            <h4 class\="card-title">Título do cartão</h4\>

            <p class\="card-text">Conteúdo do cartão.</p\>

            <a href\="#" class\="card-link">Link</a\>

    </div\>  
</div\>

-   Adicione **_.card-img-top_** ou **_.card-img-bottom_** a um elemento <img> para colocar a imagem na parte superior ou inferior dentro do cartão. Observe que adicionamos a imagem fora do **_.card-body_** para abranger toda a largura:

<div class\="card" style\="width:400px">

     <img class\="card-img-top" src\="Endereço da imagem" alt\="Card image">

     <div class\="card-body">

            <h4 class\="card-title">Título</h4\>

            <p class\="card-text">Texto</p\>

            <a href\="#" class\="btn btn-primary">Texto para o botão</a\>

    </div\>

</div\>

**Modal**

Modal é um _plug-in_ em _JavaScript_ do _Bootstrap_ para adicionar caixas de diálogo flutuantes de notificações que são acionadas por clique.

<button type\="button" class\="btn btn-primary" data-bs-toggle\="modal" data-bs-target\="#myModal">

 Abrir Modal

</button\>

<div class\="modal" id\="myModal">

       <div class\="modal-dialog">

            <div class\="modal-content">

                  <div class\="modal-header">

                        <h4 class\="modal-title">Cabeçalho da Modal</h4\>

                        <button type\="button" class\="btn-close" data-bs-dismiss\="modal"></button\>

                  </div\>

                  <div class\="modal-body">

                        Corpo da Modal

                  </div\>

                  <div class\="modal-footer">

                        <button type\="button" class\="btn btn-danger" data-bs-dismiss\="modal">Fechar</button\>

                  </div\>

            </div\>

       </div\>

</div\>

-   Podemos usar a classe **_.fade_** para adicionar um efeito de _fade_ ao abrir e fechar o modal:

<div class\="modal fade"></div\>

-   Podemos alterar o tamanho da modal adicionando a classe _.modal-sm_ para modais pequenos (max-width 300px), a classe **_.modal-lg_** para modais grandes (max-width 800px) ou **_.modal-xl_** para modais extra grandes (max -largura 1140px). O padrão é 500px de largura máxima.

<div class\="modal-dialog modal-sm">

<div class\="modal-dialog modal-lg">

<div class\="modal-dialog modal-xl">

**Modelos**

O Bootstrap possui muitos modelos e exemplos que podemos utilizar como base para construir páginas web. A seguir alguns sites de onde encontrar:

-     [https://getbootstrap.com/docs/5.1/examples/](https://getbootstrap.com/docs/5.1/examples/)
-     [https://www.w3schools.com/bootstrap5/bootstrap\_templates.php](https://www.w3schools.com/bootstrap5/bootstrap_templates.php)
-      [https://themes.getbootstrap.com/](https://themes.getbootstrap.com/)

**Como aplicar na prática o que aprendeu**

Vamos adicionar um carrossel no header de nossa página, substituindo o título com o seguinte código:

<div id\="demo" class\="carousel slide" data-bs-ride\="carousel">

   <div class\="carousel-indicators">

           <button type\="button" data-bs-target\="#demo" data-bs-slide-to\="0" class\="active"></button\>

           <button type\="button" data-bs-target\="#demo" data-bs-slide-to\="1"></button\>

           <button type\="button" data-bs-target\="#demo" data-bs-slide-to\="2"></button\>

   </div\>

   <div class\="carousel-inner">

           <div class\="carousel-item active">

               <img src\="https://www.w3schools.com/html/pic\_trulli.jpg" alt\="Italian Trulli" class\="d-block w-100">

           </div\>

           <div class\="carousel-item">

               <img src\="https://www.w3schools.com/html/img\_chania.jpg" alt\="Flowers in Chania" class\="d-block w-100">

           </div\>

           <div class\="carousel-item">

               <img src\="https://www.w3schools.com/html/img\_girl.jpg" alt\="Girl in a jacket" class\="d-block w-100">

           </div\>

   </div\>

   <button class\="carousel-control-prev" type\="button" data-bs-target\="#demo" data-bs-slide\="prev">

           <span class\="carousel-control-prev-icon"></span\>

   </button\>

   <button class\="carousel-control-next" type\="button" data-bs-target\="#demo" data-bs-slide\="next">

           <span class\="carousel-control-next-icon"></span\>

   </button\>

</div\>

Não se esqueça de adicionar a chamada para as bibliotecas Javascript como ensinado na seção _O que é o Bootstrap?_ Agora atualize a página e veja como ficou.

Agora, vamos substituir as imagens das páginas por cartões. Para isso, cole o código a seguir dentro da <div class\="col-sm-6">, substituindo o elemento <img\>.

<div class\="card">

     <img class\="card-img-top" src\="https://www.w3schools.com/html/pic\_trulli.jpg " alt\="talian Trulli">

     <div class\="card-body">

           <h4 class\="card-title">John Doe</h4\>

           <p class\="card-text">Some example text.</p\>

           <a href\="#" class\="btn btn-primary">Saiba mais</a\>

    </div\>  
</div\>

Por fim, vamos adicionar uma Modal à nossa página. Para isso, cole o seguinte trecho de código no final da página, após do fechamento do body:

<div class\="modal" id\="myModal">

       <div class\="modal-dialog">

           <div class\="modal-content">

                 <div class\="modal-header">

                       <h4 class\="modal-title">Cabeçalho da Modal</h4\>

                       <button type\="button" class\="btn-close" data-bs-dismiss\="modal"></button\>

                 </div\>

                 <div class\="modal-body">

                       Texto do Modal

                 </div\>

                 <div class\="modal-footer">

                       <button type\="button" class\="btn btn-danger" data-bs-dismiss\="modal">Close</button\>

                 </div\>

           </div\>

       </div\>

</div\>

Agora, vamos adicionar ao botão do cartão que criamos anteriormente,  os seguintes atributos data-bs-toggle\="modal" data-bs-target\="#myModal". Desta forma: 

<a href\="#" class\="btn btn-primary" data-bs-toggle\="modal" data-bs-target\="#myModal">Saiba mais</a\>

Agora atualize a página do seu navegador e clique no botão "Saiba mais" do cartão. Uma caixa de diálogo flutuante deverá se abrir

Por fim, substitua todos os textos e figuras do site com o que achar mais conveniente.

**Como aplicar na prática o que aprendeu**

-   _Bootstrap_ requer o uso do **_doctype_** HTML5. Sem ele, você verá um estilo incompleto. Por isso, certifique-se de ter suas páginas configuradas com os mais recentes padrões de design e desenvolvimento. Isso significa usar um **_doctype_** HTML5 e incluir uma **_meta tag_ _viewport_** para comportamentos responsivos adequados.
-   As imagens do carrossel e dos cards devem ter todas o mesmo tamanho para ficar harmônico.

Caro estudante, você consegue acessar os códigos utilizados na disciplina no link a seguir: [https://github.com/FaculdadeDescomplica/Practitioner\_FrontEnd.git](https://github.com/FaculdadeDescomplica/Practitioner_FrontEnd.git)

Referência Bibliográfica

**BUILD fast, responsive sites with Bootstrap**. \[_S. l._\], 20 set. 2022. Disponível em: [https://getbootstrap.com/](https://getbootstrap.com/) Acesso em: 20 set. 2022.