import { ToastContainer } from 'react-toastify';
import { CartContextProvider } from './providers/UserContext/CartContext';
import { UserProvider } from './providers/UserContext/UserContext';
import Router from './routes';
import { GlobalStyles } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <>
    <UserProvider>
      <CartContextProvider>
        <Router />
        <GlobalStyles />
      </CartContextProvider>
    </UserProvider>
    <ToastContainer
      position='top-right'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='dark'
    />
  </>
);

export default App;
