import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'  

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting="Bienvenido a Console Fun donde siempre hay ofertas imperdibles!"></ItemListContainer>
      </main>
    </>
  )
}

export default App
