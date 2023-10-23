import Loyaut from 'loyaut';
import AboutUs from 'pages/aboutUs';
import Discounts from 'pages/discounts';
import Home from 'pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/atlantika">
      <Routes>
        <Route path="/" element={<Loyaut />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="discounts" element={<Discounts />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
