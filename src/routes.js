import Menu from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPadrao from 'components/PaginaPadrao';
import Sobre from 'pages/Cardapio/Sobre';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';


export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao/>}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />}/>
            <Route path='sobre' element={<Sobre />} /> 
          </Route>
          <Route path='*' element={<NotFound />}/> 
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
}