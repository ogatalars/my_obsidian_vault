Modificadores de acesso - Define como os métodos e atributos serão visualizados e acessados no projeto. 

Modificadores -> public, private e Protected

O objetivo principal dos modificadores de acesso é impedir que o valor do atributo seja acessado diretamente.

public class Cao{
  private String nome;
  public int idade;
  protected String sexo;
  double peso;
  double altura;

  public void CalcularIMC(double pes, double alt) {
    double imc, pes, alt;
    peso = pes;
    altura = alt;
    imc = peso/(altura* altura);
  }


}
