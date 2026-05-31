import { Routes } from 'react-router-dom'
import RoutePaths from './components/route/RoutePaths'
import Navbar from './components/base_components/header/Navbar';
import Footer from './components/base_components/footer/Footer';

export default function App() {
  const basePath = '/Pocketter';
  return (
    <>
      <Navbar basePath={basePath} />
      <RoutePaths basePath={basePath} />
      <Footer />
    </>
  )
}
