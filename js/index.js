const containerProdutos = document.querySelector(".produtos")
const itensCarrinho = document.querySelector(".itens")






 function criarCard (produtos) {

    for(let i=0;i<produtos.length;i++) {

    const nome       = produtos[i].title
    const imagem     = produtos[i].imagem
    const descricao  = produtos[i].descricao
    const preco      = produtos[i].preco
    const tcategoria = produtos[i].categoria
    const addCard    = produtos[i].addCart
      
    const tagDiv            = document.createElement("div")
    const tagDivImg         = document.createElement("div")
    const tagImg            = document.createElement("img")
    const tagDivInfo        = document.createElement("div")
    const tagSmall          = document.createElement("small")
    const tagH1             = document.createElement("h1")
    const tagP              = document.createElement("p")
    const tagH5             = document.createElement("h5")
    const tagDivAddCarrinho = document.createElement("div")
    const tagAddCarrinho    = document.createElement("a")
    

    tagAddCarrinho.id = produtos[i].id

    tagDiv.classList.add("camiseta1")
    tagDivImg.classList.add("zoom")
    tagDivInfo.classList.add("info")
    tagDivAddCarrinho.classList.add("carrinho")
    tagAddCarrinho.classList.add("button")

    tagAddCarrinho.addEventListener('click', function(event){

        const produtoCarrinho = data[event.target.id - 1]
        
               
        const divCarrinho    = document.createElement("div")
        const tagimg         = document.createElement("img")
        const divInformacoes = document.createElement("div")
        const tagh1          = document.createElement("h1")
        const tagPreco       = document.createElement("h3")
        const divInput       = document.createElement("div")
        const tagRemover       = document.createElement("button")


        divInformacoes.classList.add("informacoes")
        divCarrinho.classList.add("itensCarrinho")
        divInput.classList.add("remover")

        tagimg.src          = produtoCarrinho.imagem
        tagh1.innerText     = produtoCarrinho.title
        tagPreco.innerText  = produtoCarrinho.preco  
        tagRemover.innerHTML = `<span onclick="removerProduto()">X</span>`
        
        itensCarrinho.append(divCarrinho)
        divCarrinho.append(tagimg,divInformacoes)
        divInformacoes.append(tagh1,tagPreco,tagRemover,divInput)
        divInput.append(tagRemover)

        
    })

    tagH1.innerHTML          = nome
    tagP.innerHTML           = descricao
    tagH5.innerHTML          = `R$ ${preco}`
    tagSmall.innerHTML       = tcategoria
    tagImg.src               = imagem
    tagAddCarrinho.innerHTML = addCard

    tagDiv.append(tagDivImg, tagDivInfo)
    tagDivImg.append(tagImg)
    tagDivInfo.append(tagSmall, tagH1, tagP, tagH5, tagDivAddCarrinho)
    tagDivAddCarrinho.append(tagAddCarrinho)
    containerProdutos.append(tagDiv)
   
    }

}
criarCard(data)




















/* const listaProdutos = document.querySelector(".produtos")

function listarCards(listarCard) {

    

    for (let i = 0; i < listarCard.length; i++) {

        const produtos = listarCard[i]

        const card = criarCards(produtos)
        listaProdutos.append(card)
    }

}

listarCards(data)


function criarCards(produtos) {

    const nome = produtos.title
    const imagem = produtos.imagem
    const descricao = produtos.descricao
    const preco = produtos.preco
    const tcategoria = produtos.categoria
    

    const tagDiv = document.createElement("div")
    const tagDivImg = document.createElement("div")
    const tagImg = document.createElement("img")
    const tagDivInfo = document.createElement("div")
    const tagSmall = document.createElement("small")
    const tagH1 = document.createElement("h1")
    const tagP = document.createElement("p")
    const tagH5 = document.createElement("h5")
    const tagDivAddCarrinho = document.createElement("div")
    const tagAddCarrinho = document.createElement("a")

    tagImg.src = imagem
    tagImg.alt = nome
    tagSmall.innerHTML = tcategoria
    tagH1.innerHTML = nome
    tagP.innerText = descricao
    tagH5.innerHTML = `R$ ${preco}`
    tagAddCarrinho.innerHTML = "Adicionar ao Carrinho"
    tagAddCarrinho.id = "add"
    tagAddCarrinho.addEventListener("click", ()=>{
        console.log("Funcionou")
    })

    tagDiv.classList.add("camiseta1")
    tagDivImg.classList.add("zoom")
    tagDivInfo.classList.add("info")
    tagDivAddCarrinho.classList.add("carrinho")


    tagDiv.append(tagDivImg, tagDivInfo)
    tagDivImg.append(tagImg)
    tagDivInfo.append(tagSmall, tagH1, tagP, tagH5, tagDivAddCarrinho)
    tagDivAddCarrinho.append(tagAddCarrinho)

    return tagDiv

}
criarCards(data)

const button = document.querySelector("#button")
button.addEventListener("click", addCard) 


 function addCard() {


    const titulo = document.querySelector("#titulo").value
    const foto = document.querySelector("#foto").value
    const descricao = document.querySelector("#descricao").value
    const preco = document.querySelector("#preco").value
    const categoria = document.querySelector("#categoria").value



    const novoCard = {}
    novoCard.title = titulo
    novoCard.imagem = foto
    novoCard.descricao = descricao
    novoCard.preco = preco
    novoCard.categoria = categoria



    data.unshift(novoCard)

    listarCards(data)

}  */