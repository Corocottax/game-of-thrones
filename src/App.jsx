import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Cronologia from './components/Cronologia/Cronologia';
import Inicio from './components/Inicio/Inicio';
import Linajes from './components/Linajes/Linajes';
import LinajesDetail from './components/LinajesDetail/LinajesDetail';
import Personajes from './components/Personajes/Personajes';
import PersonajesDetail from './components/PersonajesDetail/PersonajesDetail';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>

          <Route path="/">

            <Route index element={<Inicio/>}/>
            <Route path="personajes" element={<Personajes/>}/>
            <Route path="linajes" element={<Linajes/>}/>
            <Route path="personajes/:name" element={<PersonajesDetail/>}/>
            <Route path="linajes/:name" element={<LinajesDetail/>}/>
            <Route path="cronologia" element={<Cronologia/>}/>
            <Route path="*" element={<Inicio/>}/>

          </Route>

            <Route path="/personajes" component={Personajes}/>
            <Route path="/linajes" component={Linajes}/>
            <Route path="/personajes/:name" component={PersonajesDetail}/>
            <Route path="/linajes/:name" component={LinajesDetail}/>
            <Route path="/cronologia" component={Cronologia}/>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
