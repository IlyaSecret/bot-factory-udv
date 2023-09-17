import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/header/header';
import MainPage from './pages/main-page/main-page';
import EmployeesPage from './pages/employees-page/employees-page';
import ChatsPage from './pages/chats-page/chats-page';
import EmployeePage from './pages/employee-page/employee-page';
import ChatPage from './pages/chat-page/chat-page';
import TagsPage from './pages/tags-page/tags-page';

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path='/employees' element={<EmployeesPage />}></Route>
          <Route path='/employees/:id' element={<EmployeePage />}></Route>
          <Route path='/chats' element={<ChatsPage />}></Route>
          <Route path='/chats/:id' element={<ChatPage></ChatPage>}></Route>
          <Route path='/tags' element={<TagsPage></TagsPage>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
