import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import NavBar from './components/NavBar'
import { userActions } from './store/user-context';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUpBox from './components/SignUpBox';
import SignInBox from './components/SignInBox';
import HomePageContent from './components/HomePageContent';
import YourTeams from './components/YourTeams';
function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    if(localStorage.getItem("user"))
      dispatch(userActions.addUser(JSON.parse(localStorage.getItem("user"))));
  },[])
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePageContent/>}/>
        <Route path='/signup' element={<SignUpBox/>}/>
        <Route path='/signin' element={<SignInBox/>}/>
        <Route path='/teams' element={<YourTeams/>}/>
      </Routes>
    </Router>
  );
}

export default App;
