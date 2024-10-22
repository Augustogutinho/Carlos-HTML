function Bolo(nome, peso, preco) {
    this.nome = nome;
    this.peso = peso;
    this.preco = preco;
  }
  
  Bolo.prototype.calcularPrecoComDesconto = function(desconto) {
    return this.preco * (1 - desconto / 100);
  };
  
  Bolo.prototype.detalhesBolo = function(desconto) {
    const precoComDesconto = this.calcularPrecoComDesconto(desconto);
    return `Nome: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Preço com Desconto: R$${precoComDesconto.toFixed(2)}`;
  };
  

  const bolo1 = new Bolo("Bolo de Chocolate", 1.2, 50.0);
  const bolo2 = new Bolo("Bolo de Morango", 1.5, 60.0);
  const bolo3 = new Bolo("Bolo de Baunilha", 1.0, 40.0);
  

  console.log(bolo1.detalhesBolo(10));
  console.log(bolo2.detalhesBolo(15));
  console.log(bolo3.detalhesBolo(5));  
  