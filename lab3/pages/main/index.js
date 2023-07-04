import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";
// ...



export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }



    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }



    getData() {
        return [
            {
                id: 1,
                src: "https://www.thesprucepets.com/thmb/59unhSXyy895DOu7iQIGFzt_7TA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1163331995-f5226107e4794ed5b334c23215ed28db.jpg",
                title: "Labrador Retriever",
                text: "Такой собаки вы еще не видели 1"
            },
            {
                id: 2,
                src: "https://www.thesprucepets.com/thmb/mYm0nBdpY53prZ2nZPTIKsgVWtc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-970941932-750472e862954336923361a992c5f0d7.jpg",
                title: "Portuguese Water Dog",
                text: "Такой собаки вы еще не видели 2"
            },
            {
                id: 3,
                src: "https://www.thesprucepets.com/thmb/-8QgWWcd_KRoFgN_fdPwkdamgGk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-975833586-83863bd97bf24d249eacbfb874f35226.jpg",
                title: "Schipperke",
                text: "Такой собаки вы еще не видели 3"
            },
            {
                id: 4,
                src: "https://www.thesprucepets.com/thmb/b-ZBIf6Vuer_NZ8W1_pBhVU2liU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-157422942-8b7714895dcc44f3b8c46f8ed73a7735.jpg",
                title: "Doberman Pinscher",
                text: "Такой собаки вы еще не видели 4"
            }
        ]
    }

    
  
    clickCard(e) {
        const cardId = e.target.dataset.id

        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }
    
}