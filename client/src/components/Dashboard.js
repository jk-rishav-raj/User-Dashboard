import { useState,useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { Button} from 'reactstrap';
import AllEntries from './AllEntries';
import AddEntry from './AddEntry';
import { set } from 'mongoose';

const Dashboard = () => {
  

    const [data,setData] = useState([]);
    const [authenticated, setAuthenticated] = useState(true);
    const [showAddEntry, setShowAddEntry] = useState(false);
    const [showAllEntries, setShowAllEntries] = useState(false);


    const loggedIn = async () =>{
        //const token = localStorage.getItem('token');
        //console.log(authenticated);
        if(!localStorage.token)
        {
            //console.log('ff')
            setAuthenticated(false);
            return;
        }
        //return 0;
        //console.log(localStorage.token);
        axios.defaults.headers.common['x-auth-token'] = localStorage.token;

        try{
            const res = await axios.get('/auth');
            //setUser(res.data)
            //console.log(res.data);
            //return true;
            return;
        }
        catch(err){
            console.log(err);
            setAuthenticated(false);
            return;
        }
    }
    
  const getEntries = async () =>{
    try{
      const res = await axios.get('/profile');
      //console.log(res1);
      setData(res.data);
      return;
  }
  catch(err){
      console.log(err);
      //setAuthenticated(false);
      return;
  }
  }
  
  
  const addEntry = (event) => {
    console.log(event);
//     swal({
//       title: "Entry Added!",
//       icon: "success"
//   }).then(() => toggle2());
//     setShowAddCard(!showAddCard)
    getEntries();
    //setTimeout(() => window.location.reload(false) ,1000);
  }

  const onClick1 = () => {
      setShowAddEntry(true);
      setShowAllEntries(false);
  }

  const onClick2 = () => {
    setShowAddEntry(false);
    setShowAllEntries(true);
}
  
  useEffect(()=>{
      loggedIn();
      getEntries();
      //getUser();
      //console.log(user);
  },[data.length])
  
  

  if (!authenticated) {
    return <Navigate to="/"/>;
  }

   return (

    <>
        <Button onClick={onClick1}>Add Entry</Button>
        <Button onClick={onClick2}>View All Entries</Button>
        <Button onClick={() => { localStorage.removeItem('token'); setAuthenticated(false);}} > Sign Out </Button>
        {
            showAddEntry && <AddEntry onAdd={addEntry}/>
        }
        {
            showAllEntries && <AllEntries entries={data}/>
        }

    </>
  );
}

export default Dashboard;