import Hero from './pages/hero/Hero';
import Navbar from "./pages/navbar/Navbar";
import Photography from './pages/photography/Photography';
import { CartProvider } from './pages/cart/Cartcontext';
import { SnackbarProvider } from './pages/snackbar/Snackbar';
import { PriceProvider } from './pages/sidebar/price/PriceContext';
import { CategoryProvider } from './pages/sidebar/category/CategoryContext';


function App() {
  return (
     <CartProvider>
        <PriceProvider>
          <CategoryProvider>
            <SnackbarProvider>
              <Navbar />
              <Hero />
              <Photography />
            </SnackbarProvider>
          </CategoryProvider>
        </PriceProvider>
      </CartProvider>
  );
}

export default App;
