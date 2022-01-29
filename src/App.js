import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import NavBar from './components/NavBar'
import { userActions } from './store/user-context';
function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    if(localStorage.getItem("user"))
      dispatch(userActions.addUser(JSON.parse(localStorage.getItem("user"))));
  },[])
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
