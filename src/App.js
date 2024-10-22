import './App.css';
import { Header } from './Components/Header/Header';
import { useState, useEffect } from 'react';
import { loadGridData } from './utils/util';

function App() {

  const [tickets, setTickets] = useState([]);
  const [userData, setUserData] = useState({});
  const [gridData, setGridData] = useState({});
  const [grouping, setGrouping] = useState("users");
  const [ordering, setOrdering] = useState("priority");
  
  useEffect(() => {
    load();
    fetchData();
  },[]);

  useEffect(() => {
    if(!tickets){return}
    setGridData(loadGridData(tickets, grouping, ordering));
  },[tickets,grouping,ordering]);

  const onChangeOrder = (order) => {
    setOrdering(order);
    save({ordering: order});
  }

  const onChangeGroup = (group) => {
    setGrouping(group);
    save({grouping: group});
  }

  const save = (data) => {
    for(let key in data){
      localStorage.setItem(key, data[key]);
    }
  }
  const load = () => {
    setGrouping(localStorage.getItem("grouping") || "status");
    setOrdering(localStorage.getItem("ordering") || "prioority");
  };

  const fetchData = async () => {
    try{
      const response = await fetch(process.env.BACKEND_URL);
      const data = await response.json();
      const { tickets, users } = data;
      const tempUsers = users.reduce((acc,user) => {
        acc[user.id] = user;
        return acc;
      });
      setTickets(tickets);
      setUserData(tempUsers);
    } catch (err) {
      console.log("Error occured while fetching data");
    }
  }

  return (
    <Header grouping={grouping} ordering={ordering} setGrouping={onChangeGroup} setOrdering={onChangeOrder}/>
  );
}

export default App;
