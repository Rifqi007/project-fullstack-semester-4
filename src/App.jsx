import { Route, Routes } from 'react-router-dom'

// pages
import StockBarang from  './pages/StokBarang'
import Transaksi from './pages/Transaksi'
import UserLogin from './pages/UserLogin';
import LoginAplikasiKasir from './pages/LoginAplikasiKasir';
import BuatAkunBaru from './pages/BuatAkunBaru';
import TambahStok from './pages/TambahStok';
import AddStock from './pages/AddStock';
import LoginKasir from './pages/LoginKasir';
import AkunToko from './pages/AkunToko';
import BuatAkunToko from './pages/BuatAkunToko';

function App() {
  return (
    <Routes>
      <Route path='/:idUser/transaksi' element = {<Transaksi/>} />
      <Route path='/akun-toko' element={ <AkunToko/> }/>
      <Route path='/user-login' element={ <UserLogin/> }/>
      <Route path='/login-kasir' element={ <LoginKasir/> }/>
      <Route path='/:idUser/login-aplikasi-kasir' element={ <LoginAplikasiKasir/> }/>
      <Route path='/buat-akun-baru' element={ <BuatAkunBaru/> }/>
      <Route path='/:idUser/akun-toko' element = {<StockBarang />} />
      <Route path='/tambah-stok' element={ <TambahStok/> }/>
      <Route path='/:idUser/stok-barang' element = {<StockBarang />} />
      <Route path='/:idUser/buat-akun-toko' element = {<BuatAkunToko />} />
      <Route path='/add-stock' element = {<AddStock />} />
    </Routes>
  )
}

export default App
