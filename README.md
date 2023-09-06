# Teste de Desenvolvedor PHP Full Stack (Lexart 2023)

Este repositório contém a implementação de um projeto para a avaliação da Lexart 2023. O projeto consiste em dois componentes principais: um web scraper em PHP e dois algoritmos.

## Referências

- [Guia que eu utilizei](https://zubairidrisaweda.medium.com/introduction-to-web-scraping-with-laravel-a217e1444f7c)

## Teste a Aplicação

Acesse a [aplicação aqui](https://lexart-php-developer-fullstack-test.vercel.app/) e veja-a funcionando normalmente.

## Possíveis Melhorias

- TDD (de novo), eu comecei fazendo TDD, mas julguei que não daria tempo de continuar porque o prazo era apertado, então acabei desistindo do método.

- Nem sempre ele consegue raspar as descrições do Mercado Livre, e nunca consegue raspar as descrições do Buscapé, já que não há descrições na página do Buscapé em si, teria que ter uma função para cada página de vendas redirecionada pelo Buscapé, nem mesmo um seletor universal implementado.

- Também não consegui coletar as categorias, não faço ideia do porquê, só tive dificuldades mesmo. Minha teoria inicial é que elas demoravam um pouco para serem inseridas no documento HTML, mas mesmo esperando, não consegui raspar as categorias. Que pena!

- Por fim, como de costume, capricharia mais no frontend.
