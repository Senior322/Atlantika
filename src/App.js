import Loyaut from 'loyaut';
import AboutUs from 'pages/aboutUs';
import Actions from 'pages/actions';
import Catalog from 'pages/catalog';
import Contacts from 'pages/contacts';
import Delivery from 'pages/delivery';
import Discounts from 'pages/discounts';
import Drop from 'pages/drop';
import Home from 'pages/home';
import Passwordchange from 'pages/Passwordchange';
import PersonalOfficePage from 'pages/PersonalOfficePage';
import Registration from 'pages/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter basename="/atlantika">
      <Routes>
        <Route path="/" element={<Loyaut />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="discounts" element={<Discounts />} />
          <Route path="drop" element={<Drop />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="actions" element={<Actions />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="Registration" element={<Registration/>}/>
          <Route path="Personal" element={<PersonalOfficePage/>}/>
          <Route path="Passwordchange" element={<Passwordchange/>}/>
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
