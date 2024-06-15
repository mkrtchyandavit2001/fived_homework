import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Bascet } from './components/Bascet'
import { ProductList } from './components/ProductList'

function App() {
  const [bascet, setBascet] = useState([])
  const [products, setProduct] = useState([
    {id:101, title: "Psychlogy", price:20000, photo:"https://m.media-amazon.com/images/I/81LDP+GDKVL._AC_UF1000,1000_QL80_.jpg"},
    {id:102, title: "Byology", price:30000, photo:"https://cdn.gramedia.com/uploads/items/THE_BIOLOGY_BOOK.jpg"},
    {id:103, title: "Philosophy", price:45000, photo:"https://www.morvaykrisztina.hu/wp-content/uploads/The_Philosophy_Book_-_Big_Ideas_Simply_Explained.jpg"},
    {id:104, title: "Religions", price:15000, photo:"https://images.booksense.com/images/433/408/9781465408433.jpg"},
    {id:105, title: "The Art", price:35000, photo:"https://images.booksense.com/images/372/453/9781465453372.jpg"}
  ])

  const moveToCart = id =>{
    let found = products.find(x => x.id === id)
    if((bascet.map(x => x.includes(id))) && bascet.count <= 1){
      bascet.map(x => x.count++)
    }else{
      setBascet([...bascet, {...found, count:1}])
    }
  }

  const addBook = () => {
    bascet.map(x => x.count++)
  }

  const reduceBook = () => {
    if(bascet.map(x => x.count)){
      bascet.map(x => x.count--)
    }
  }

  const removeBook = () => {
    this.bascet.items.remove()
  }

  return (
    <>
      <div className = "row">
        <ProductList items = {products} onMove = {moveToCart} />
        <Bascet items = {bascet} onAdd = {addBook} onReduce = {reduceBook} onremove = {removeBook}/>
      </div>
    </>
  )
}

export default App
