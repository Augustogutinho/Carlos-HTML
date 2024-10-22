const produtos = [
    { nome: "notebook", preco: 6000.00, eletronico: true },
    { nome: "computador", preco: 4500.00, eletronico: true },
    { nome: "teclado", preco: 100.00, eletronico: false },
    { nome: "mouser", preco: 75.00, eletronico: true },
    { nome: "Cadeira Gamer", preco: 1775.00, eletronico: false }
];

// 1) Exibir somente os eletrônicos
const produtosEletronicos = produtos.filter(produto => produto.eletronico);
console.log("Produtos Eletrônicos:", produtosEletronicos);

// 2) Exibir os produtos com valor acima de R$ 1000,00
const produtosAcima1000 = produtos.filter(produto => produto.preco > 1000);
console.log("Produtos acima de R$ 1000,00:", produtosAcima1000);

// 3) Exibir comissão com 3% para valores acima de R$ 1500 e 6% para menores
const comissoes = produtos.map(produto => {
    const comissao = produto.preco > 1500 ? produto.preco * 1.03 : produto.preco * 1.06;
    return {
        nome: produto.nome,
        preco: produto.preco,
        comissao: comissao
    };
});

console.log("Comissões:", comissoes);
