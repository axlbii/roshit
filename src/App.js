import logo from './logo.svg';
import './App.css';
import View from './Components/View';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
     <Route path='/'element={<View/>}/>
     <Route path='/add'
     element={<Add
     data={{name:'',Brand:'',quantity:'',price:''}}
     method="post"/>}/>
    </Routes>
  
   </div>
 );
} 

export default App;
