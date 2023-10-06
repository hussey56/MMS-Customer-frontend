import { useState } from 'react';
import Home from './Pages/Home';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Deals from './Pages/Deals';
import Portfolio from './Pages/Portfolio';
import Reservation from './Pages/Reservation';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Account from './Pages/Account';
import ReservationState from './context/Reservations/ReservationState';
import Profile from './Pages/Profile';
function App() {
 

  const [progress, setProgress] = useState(0)
const makeProgress = (num)=>{
setProgress(num)
}
  return (
  <>
      <ReservationState>
   <LoadingBar
        color='#FFD871'
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      
   
  <BrowserRouter>
 
  <Routes>
<Route path="/" element={<Home progress={makeProgress} />}/>
<Route path="/deals" element={<Deals progress={makeProgress}/>} />
<Route path="/catalog" element={<Portfolio progress={makeProgress}/>} />
<Route path="/reservations" element={<Reservation progress={makeProgress}/>} />
<Route path="/login" element={<Login progress={makeProgress}/>} />
<Route path="/signup" element={<Signup progress={makeProgress}/>} />
<Route path="/account" element={<Account progress={makeProgress}/>} />
<Route path="/profile" element={<Profile progress={makeProgress}/>} />
  </Routes>
 
  </BrowserRouter>
  </ReservationState>
  </>
  );
}

export default App;
