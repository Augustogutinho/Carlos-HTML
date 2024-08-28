class Celular {
    #marca;
    #modelo;
    #ram;
    #armazenamento;
    #preço;
  
    constructor(marca, modelo, ram, armazenamento, preço) {
      this.#marca = marca;
      this.#modelo = modelo;
      this.#ram = ram;
      this.#armazenamento = armazenamento;
      this.#preço = preço;
    }
  
    exibirPreco() {
      console.log(`Preço: R$${this.#preço}`);
    }
  
    exibirDetalhes() {
      console.log(`Marca: ${this.#marca}`);
      console.log(`Modelo: ${this.#modelo}`);
      console.log(`RAM: ${this.#ram} GB`);
      console.log(`Armazenamento: ${this.#armazenamento} GB`);
      
    }
  }
  
  // Criando instâncias
  const iphone13 = new Celular('Apple', 'iPhone 13', 4, 128, 6999);
  const samsungS21 = new Celular('Samsung', 'Galaxy S21', 8, 256, 4999);
  
  // Chamando métodos
  console.log('Detalhes do iPhone 13:');
  iphone13.exibirDetalhes();
  iphone13.exibirPreco();
  
  console.log('\nDetalhes do Samsung S21:');
  samsungS21.exibirDetalhes();
  samsungS21.exibirPreco();