import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import { FriendsComponent } from "../../components/friends/index.js";
import {MainPage} from "../main/index.js";


import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";
import {groupId} from "../../modules/consts.js";

export class ProductPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    renderData(item) {
        const product = new ProductComponent(this.pageRoot)
        product.render(item[0])
    }

    renderDataFriends(items) {
        items.forEach((item) => {
            const friends = new FriendsComponent(this.pageRoot)
            friends.render(item)
        })
    }

    getData() {
        ajax.post(urls.getUserInfo(this.id)).then((data) => {
            this.renderData(data.response)
        }, console.log('error')).catch(error => console.log(error)) 
    }

    getFriendsData(){
        ajax.post(urls.getFriends(this.id)).then((data) => {
            this.renderDataFriends(data.response.items)
        }, console.log('error')).catch(error => console.log(error))
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page"></div>
            `
        )
    }


    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }


    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    
        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))
        
        this.getData()
        this.getFriendsData()
    }
}