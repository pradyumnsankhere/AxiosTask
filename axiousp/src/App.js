 
import { ApiAxios } from './ApiTask/ApiAxios';
import './App.css';
import { Axiousp } from './Axiousp';
import { Getmthd } from './Components/Getmthd';
import { Postmthd } from './Components/Postmthd';
import './ApiTask/table.css'
import { FetchMthd } from './ApiTask/FetchMthd';
import { useCustomHook } from './ApiTask/useCustomHook';
import { Datahook } from './ApiTask/Datahook';
import { Requstaxios } from './HTTPMethods/Requstaxios';

function App() {
  return (
    <div >
      
    <Requstaxios/>
    </div>
  );
}

export default App;
