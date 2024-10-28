import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Navbar';
import Breadcrumb from './Breadcrumb';
import ShopDetail from './ShopDetail';
const App = () => (
    <div>
        <Navbar />
        <Breadcrumb />
        <ShopDetail />
    </div>
);

export default App;
