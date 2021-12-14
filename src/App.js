import './App.css';
import Cards from './component/Cards';
import Navbar from './component/Navbar';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './component/Home';
import Notfound from "./pages/NotFound"
import Services from "./pages/Services"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Like from './pages/Like';
import Panier from './pages/Panier';
import { useState } from 'react';
import article1 from "./accents/images/PRODUCT/1.jpg"
import article2 from "./accents/images/PRODUCT/2.jpg"
import article3 from "./accents/images/PRODUCT/3.jpg"
import article4 from "./accents/images/PRODUCT/4.jpg"
import article5 from "./accents/images/PRODUCT/5.jpg"
import article6 from "./accents/images/PRODUCT/6.jpg"
import article7 from "./accents/images/PRODUCT/7.jpg"
import article8 from "./accents/images/PRODUCT/8.jpg"
import article9 from "./accents/images/PRODUCT/9.jpg"
import { v4 as uuidv4 } from 'uuid';
import Zoom from './pages/Zoom';








function App() {
let p ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis soluta eum corporis, voluptatibus esse consectetur molestiae provident at inventore, odit accusantium ea nihil reprehenderit fugit tempora quia expedita omnis delectus non! Laborum aliquid dolorum necessitatibus eligendi libero repudiandae? Consequuntur esse totam eos sint. Dolores, earum, cumque doloribus voluptate nobis tempore, ipsam fugiat qui tenetur culpa quaerat reiciendis quasi laboriosam amet error assumenda praesentium eum vel? Officia commodi sunt nobis voluptas tenetur placeat in inventore quasi magnam aperiam, cupiditate, quibusdam a consectetur explicabo rem hic cumque possimus doloribus facere nihil porro? Eaque sint ad culpa, perspiciatis recusandae beatae odit laudantium impedit nesciunt, perferendis quam facilis minus voluptate ut animi sequi magnam praesentium ipsum numquam expedita. Doloremque asperiores nostrum harum eaque illum itaque alias repellat dicta beatae recusandae, ab praesentium molestiae consectetur. Necessitatibus, enim praesentium dolorem neque et vel aliquam ab doloribus vero saepe ipsa autem ut quo, impedit numquam id natus eligendi nam aperiam consequatur ratione provident, eum architecto culpa! Ipsam, sequi culpa beatae provident esse modi facere, repudiandae aliquid ipsa eaque, ullam ut. At quos delectus sapiente aperiam culpa, similique, alias magni maxime blanditiis eius harum adipisci vel eos? Porro hic ad dicta odit, nihil voluptas atque ex quis facere!"
const [articles, setArticles] = useState([
    { id: uuidv4(), liens : article1,  statut: "New", ancienPrix: "", toggle: true, nom: 'Adidas', prix: 75 },
    { id: uuidv4(), liens : article2,  statut: "", ancienPrix: "", toggle: null, nom: "Nike", prix: 92.5 },
    { id: uuidv4(), liens : article3,  statut: "", ancienPrix: "", toggle: null, nom: "Puma", prix: 165.90 },
    { id: uuidv4(), liens : article4,  statut: "", ancienPrix: "", toggle: null, nom: "Converse", prix: 92.5 },
    { id: uuidv4(), liens : article5,  statut: "Sale", ancienPrix: 29.50, toggle: false, nom: "Reebook", prix: 15.95 },
    { id: uuidv4(), liens : article6,  statut: "New", ancienPrix: "", toggle: true, nom: "Superdry", prix: 75 },
    { id: uuidv4(), liens : article7,  statut: "New", ancienPrix: "", toggle: true, nom: "North Face", prix: 75 },
    { id: uuidv4(), liens : article8,  statut: "", ancienPrix: "", toggle: null, nom: "Carhartt", prix: 92.5 },
    { id: uuidv4(), liens : article9,  statut: "", ancienPrix: "", toggle: null, nom: "Vans", prix: 165.90 },

]);
const [filterTableau, setFilterTableau] = useState([
  { id: uuidv4(), liens : article1,  statut: "New", ancienPrix: "", toggle: true, nom: 'Adidas', prix: 75 },
  { id: uuidv4(), liens : article2,  statut: "", ancienPrix: "", toggle: null, nom: "Nike", prix: 92.5 },
  { id: uuidv4(), liens : article3,  statut: "", ancienPrix: "", toggle: null, nom: "Puma", prix: 165.90 },
  { id: uuidv4(), liens : article4,  statut: "", ancienPrix: "", toggle: null, nom: "Converse", prix: 92.5 },
  { id: uuidv4(), liens : article5,  statut: "Sale", ancienPrix: 29.50, toggle: false, nom: "Reebook", prix: 15.95 },
  { id: uuidv4(), liens : article6,  statut: "New", ancienPrix: "", toggle: true, nom: "Superdry", prix: 75 },
  { id: uuidv4(), liens : article7,  statut: "New", ancienPrix: "", toggle: true, nom: "North Face", prix: 75 },
  { id: uuidv4(), liens : article8,  statut: "", ancienPrix: "", toggle: null, nom: "Carhartt", prix: 92.5 },
  { id: uuidv4(), liens : article9,  statut: "", ancienPrix: "", toggle: null, nom: "Vans", prix: 165.90 },

]);
const [nouveauArticles, setNouveauArticles] = useState([
  { id: uuidv4(), liens: article1, statut: "New", ancienPrix: "", toggle: true, nom: 'Adidas', prix: 75 },
  { id: uuidv4(), liens: article2, statut: "", ancienPrix: "", toggle: null, nom: "Nike", prix: 92.5 },
  { id: uuidv4(), liens: article3, statut: "", ancienPrix: "", toggle: null, nom: "Puma", prix: 165.90 },
  { id: uuidv4(), liens: article4, statut: "", ancienPrix: "", toggle: null, nom: "Converse", prix: 92.5 },
  { id: uuidv4(), liens: article5, statut: "Sale", ancienPrix: 29.50, toggle: false, nom: "Reebook", prix: 15.95 },
  { id: uuidv4(), liens: article6, statut: "New", ancienPrix: "", toggle: true, nom: "Superdry", prix: 75 },
  { id: uuidv4(), liens: article7, statut: "New", ancienPrix: "", toggle: true, nom: "North Face", prix: 75 },
  { id: uuidv4(), liens: article8, statut: "", ancienPrix: "", toggle: null, nom: "Carhartt", prix: 92.5 },
  { id: uuidv4(), liens: article9, statut: "", ancienPrix: "", toggle: null, nom: "Vans", prix: 165.90 },

]);
const [articlesChoix, setarticlesChoix] = useState([]);
const [articlesFav, setarticlesFav] = useState([]);
const [toggleLike, settoggleLike] = useState(false)
const [tableauZoom, setTableauZoom] = useState([])

const like = e => {
  settoggleLike(!toggleLike)
  let newfav = articlesFav
  articles.map(el=>{
    if(el.id == e.target.value){
      newfav.push(el)
      setarticlesFav(newfav)
    }
    console.log(articlesFav)
  })
  
}


const addCard = id => { 
  console.log(id.target.value)
  let newArray = articlesChoix 
  let tableauLike = articlesFav
  articles.map(el=>{
    if(el.id === id.target.value){ 
      console.log(el.statut)
    newArray.push(el)
    let newPrix= prix
    newPrix +=el.prix
    setarticlesChoix(newArray)
    setprix(newPrix)  
  }                           
  })
  

}
const supprime =id =>{
  // console.log(id.target.value)
  const tableauFilter = articlesChoix.filter(el=>{
    return (
    (el.id !== id.target.value)
    )})
  const tableauLike = articlesFav.filter(el=>{
      return (
        el.id !== id.target.value
      )})
    articles.map(el=>{
      if(el.id === id.target.value){ 
      let newPrix= prix
      newPrix -=el.prix
      if(newPrix<1){
        newPrix = 0
      }
      setprix(newPrix)  
    }                           
    })
    setarticlesChoix(tableauFilter)
    setarticlesFav(tableauLike)
    console.log(articlesFav)

}
const [input, setInput] = useState();

const inputValue = (e) => {
  setInput(e)
 articles.map(el => {
            if (e == "" || e !== el.nom) {
                setArticles(nouveauArticles)
            }
        })
}
const submit = e => {
  e.preventDefault()
  let copieArticle = [...articles]
        const recherche = copieArticle.filter(el => (
            (el.nom === input)
        ))
                setArticles(recherche)

}
const [prix, setprix] = useState(0);

const filter = e =>{
  e.preventDefault()
  alert('beseller')
}
const zoom = id =>{
  let tableaucopie = tableauZoom
  articles.map(el=>{
    if(el.id==id.target.value){
      tableaucopie.push(el)
    }
    setTableauZoom(tableaucopie)
  })
  console.log(tableaucopie)

}
const bestSeller =e =>{
  e.preventDefault()
  const test5 = nouveauArticles.filter(el=>{
    return (
      el.statut == "New" || el.statut =="Sale"
    )

  })
  setArticles(test5)
}
const nouveau = e =>{
  e.preventDefault()
  const test4 = nouveauArticles.filter(el=>{
    return (
      el.statut == "New"
    )

  })
  setArticles(test4)
}

const old = e =>{
  e.preventDefault()
  const test3 = nouveauArticles.filter(el=>{
    return (
      el.statut !== "New"
    )
  })
  

  setArticles(test3)
}
const sale = e=>{
  e.preventDefault()
  // setArticles(nouveauArticles)
  const test4 = nouveauArticles.filter(el=>{
    return(
      el.statut==="Sale"
    )  
  })
  setArticles(test4)
  console.log(articles)
}



return (
    <>
    <BrowserRouter>
    <Routes> 
      <Route path='/' exact element = {<Home 
      tableau = {articles} filter= {filter}  func ={addCard} click={supprime} like = {like} likelen = {articlesFav.length} panierlen={articlesChoix.length} zoom={zoom}
      old = {old} sale = {sale} nouveau = {nouveau} bestSeller={bestSeller}
      />} />
      <Route path="*" exact element ={<Notfound/>}/>
      <Route path="/About" exact element ={<About/>}/>
      <Route path ="/services" exact element = { 
        < Services articles={articles} click={addCard} submit ={submit} inputValue = {inputValue} like ={like} 
          />}   />
      <Route path ="/contact" exact element = {<Contact />} />
      <Route path ="/zoom" exact element = {<Zoom 
      tableau ={tableauZoom}
      />} />
      <Route path ="/panier" exact element = 
      {<Panier articles = {articlesChoix}   click = {supprime} prix = {prix} />} />
      <Route path ="/coeur" exact element = {<Like articles = {articlesFav} click = {supprime} />} />
    </Routes>
  
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
