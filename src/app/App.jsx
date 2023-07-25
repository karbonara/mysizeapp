
import { Routes, Route } from 'react-router-dom';
import { CalibrateStartPage } from '../pages/CalibrateStartPage/CalibrateStartPage';
import { MainPage } from '../pages/MainPage/MainPage';
import { CalibratePage } from '../pages/CalibratePage/CalibratePage';
import { MeasurePage } from '../pages/MeasurePage/MeasurePage';
import { MeasureSetPage } from '../pages/MeasureSetPage/MeasureSetPage';
import { ItemPage } from '../pages/itemPage/item';
import { StoreLocator } from '../pages/StoreLocator/StoreLocator';
import './App.css';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/calibrate-start' element={<CalibrateStartPage />} />
        <Route path='/calibrate' element={<CalibratePage />} />
        <Route path='/measure' element={<MeasurePage />} />
        <Route path='/measure/set' element={<MeasureSetPage />} />
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="/store-locator" element={<StoreLocator />} />
      </Routes>
    </main>
  );
}

export default App;
