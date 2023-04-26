import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/header/header';
import MainPage from './pages/main-page/main-page';
import EmployeesPage from './pages/employees-page/employees-page';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path='/employees' element={<EmployeesPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
