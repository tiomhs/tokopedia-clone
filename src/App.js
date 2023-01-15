import './App.css';
import Footer from './common/footer/Footer';
import Header from './common/header/Header';
import Page from './pages/Page';

function App() {
  return (
   <div className={window.innerWidth <= 768 ? 'max-w-[425px] mx-auto' : ''}>
      <Header/>
      <Page/>
      <Footer/>
   </div>
  );
}

export default App;
