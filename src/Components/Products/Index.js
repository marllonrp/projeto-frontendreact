import { Card } from "./Cards/Cards.js"
import { Filter } from "./Filter/Filter.js"
import {CardContainer, FilterContainer, Main, MainBody, MainHeader} from "./Styled.js"
import listProducts from "./List-products.json"
import { useState } from "react"
import { Pages } from "./Pages/Pages.js"
import { useEffect } from "react"

export const Products = (props) => {
    
const [minPrice, setMinPrice] = useState(-Infinity)
const [maxPrice, setMaxPrice] = useState(Infinity)
const [categoryFilms, setCategoryFilms] = useState("")
const [categorySeries, setCategorySeries] = useState("")
const [categoryOthers, setCategoryOthers] = useState("")
const [order, setOrder] = useState("")

const itemsPerPage = 6
const [currentPage, setCurrentPage] = useState(0);
const [totalItems, setTotalItems] = useState(listProducts.length)
const startindex = currentPage*itemsPerPage
const endIndex = startindex + itemsPerPage
const [pages, setPages] = useState(Math.ceil(totalItems / itemsPerPage));
const [itemsControl, setItemsControl] = useState(totalItems)

let teste

if (currentPage < 0){
    setCurrentPage(0)
}

if (currentPage >= pages){
    setCurrentPage(pages-1)
} 


const subTotalItems = (array) =>  {
    teste = array.length}

useEffect (()=>{
    setTotalItems(subTotalItems=>subTotalItems)
},[itemsControl])

useEffect (()=>{
    setItemsControl(totalItems)
},[totalItems])


const refereshItemsPages = (product) => {
    const array = [...props.arrayItemsInPage]
    const productsFound = array.find(
        (products) => products.id === array.id
      );
      if (!productsFound) {
        array.push(product);}
    props.setArrayItemsInPage(array)
}

console.log(props.arrayItemsInPage)
    return (
        <Main>
            <MainHeader>
                <h3>Catálogo</h3>
                <h3>Página {currentPage+1} de {pages} | {totalItems} resultado(s)</h3>
                <Pages setCurrentPage = {setCurrentPage}
                currentPage ={currentPage}
                pages = {pages}/>
            </MainHeader>
            <MainBody>
                <FilterContainer>
                    <Filter
                    setMinPrice = {setMinPrice}
                    setMaxPrice={setMaxPrice}
                    setCategoryFilms={setCategoryFilms}
                    setCategorySeries={setCategorySeries}
                    setCategoryOthers = {setCategoryOthers}
                    setOrder =  {setOrder}
                    />
                </FilterContainer>
                <CardContainer>
                    {listProducts
                    .filter((products)=> {
                        return products.name.toLocaleLowerCase().includes(props.querry.toLocaleLowerCase()) || products.show.toLocaleLowerCase().includes(props.querry.toLocaleLowerCase())
                    })
                    
                    .filter((products)=> { 

                        if (categoryFilms === true && categorySeries === true && categoryOthers === true){
                            return (products.category.includes("Filmes") || products.category.includes("Séries") || products.category.includes("Outro"))
                        }

                        if (categoryFilms === true && categorySeries === true){
                            return (products.category.includes("Filmes") ||  products.category.includes("Séries"))
                        }

                        if (categoryFilms === true && categoryOthers === true){
                            return (products.category.includes("Filmes") ||  products.category.includes("Outro"))
                        }

                        if (categorySeries === true && categoryOthers === true){
                            return (products.category.includes("Séries") ||  products.category.includes("Outro"))
                        }
                       
                        if (categoryFilms === true) {
                         return products.category.includes("Filmes")
                        }
                        
                        if (categorySeries === true) {
                        return products.category.includes("Séries")
                         }

                        if (categoryOthers === true) {
                        return products.category.includes("Outro")
                        } else {return products}})
                                  

                    .filter((products)=> {
                        return (products.price >= minPrice && products.price <= maxPrice) || (minPrice && maxPrice === "")} )
                    
                    .sort((actual, next)=> { 
                        switch (order){
                            case "A - Z":
                            return actual.name.localeCompare(next.name)
                            
                            case "Min - Máx":
                            return actual.price - next.price

                            case "Máx - Min":
                            return next.price - actual.price
                                
                            default: return actual
                        }
                       
                    })
                    .filter((products,index,array)=>{
                    
                        return (products) 
                    })
                    .slice(startindex,endIndex)
                    .map((products)=>{
                        return (
                            <Card key = {products.id}
                            product= {products}
                            addToCart = {props.addToCart}
                            refereshItemsPages ={refereshItemsPages}
                            totalItems = {totalItems}/>
                        )
                       
                    })
                    
                   }
                </CardContainer>
            </MainBody>
        </Main>
)
}