// function getProdutos() {
//   fetch(`http://localhost:4000/produtos`)
//     .then((response) => response.json())
//     .then((dados) => {
//       dados.forEach((item) => {
//         document.getElementById("conteudo").innerHTML += `
//                     <tr>
//                         <th scope="row">${item.id}</th>
//                         <td>${item.nome}</td>
//                         <td>${item.descricao}</td>
//                         <td>${item.valor}</td>
//                         <td>${item.quantidade}</td>
//                         <td><img src="${item.imagem}" alt=""></td>
//                         <td>
//                           <a href="#" class="btn btn-primary btn-sm">Editar</a>
//                           <a href="#" class="btn btn-danger btn-sm">Excluir</a>
//                         </td>
//                     </tr>
//                 `;
//       });
//     })
//     .catch((error) => {
//       console.error("Erro ao buscar produtos:", error);
//     });
// }

// getProdutos();

async function adicionarProduto() {
  event.preventDefault();
  try {
    const response = await fetch("http://localhost:4000/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: document.getElementById("nome").value,
        descricao: document.getElementById("descricao").value,
        valor: document.getElementById("valor").value,
        quantidade: document.getElementById("quantidade").value,
        imagem: document.getElementById("imagem").value,
      }),
    });
    

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao adicionar produto:", error);
    return null;
  }
}

async function getProdutos() {
  try {
    const response = await fetch(`http://localhost:4000/produtos`);
    const dados = await response.json();

    dados.map((item) => {
      document.getElementById("conteudo").innerHTML += `
                <tr>
                    <th scope="row">${item.id}</th>
                    <td>${item.nome}</td>
                    <td>${item.descricao}</td>
                    <td>${item.valor}</td>
                    <td>${item.quantidade}</td>
                    <td><img src="${item.imagem}" alt=""></td>
                    <td>
                      <a href="#" class="btn btn-primary btn-sm">Editar</a>
                      <a href="#" class="btn btn-danger btn-sm">Excluir</a>
                    </td>
                </tr>
            `;
    });
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
  }
}

getProdutos();
