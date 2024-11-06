import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './layout/header/header';
import CalenderPage from './calendar/calenderPage';
import MyPage from './myPage/myPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/login" element={<></>} />
          <Route path="/signup" element={<></>} />
          <Route path="/calendar" element={<CalenderPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/calendar" element={<></>} />
          <Route path="/diet" element={<></>} />
          <Route path="/community" element={<></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App
