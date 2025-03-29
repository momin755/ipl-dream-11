
import { useState } from 'react'
import './App.css'
import Available from './components/Available/Available'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import NewsLetter from './components/NewsLetter/NewsLetter'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [coin, setCoin] = useState(0)
  const [count, setCount] = useState(0)
  const [players, setPlayers] = useState([])

  const handleAddCoin = ()=>{
    setCoin(coin + 60000000)
    toast.success(`You have successfully added coin!`)
  }

  // notify Toast
  const notify = (name) => {
    toast.success(`Congrats !! ${name} is now in your squad`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const errNotify = () => {
    toast.error(
      `Not enough money to buy this
player.Claim some Credit`,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  };
  const noMoreAddPlayers = () => {
    toast.error(`No More Add Players to your squad`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  
 
  


  const selectedPlayers= (player)=>{
    const existPlayer = players.find(p=>p.id === player.id)
    if(coin < player.price){
      return errNotify()
    }
    else{
        if(count < 6 || !existPlayer){
          setCount(count +1)
      setPlayers([...players, player])
      notify(`${player.name}`)
        }
        // else if(){
        //   setPlayers([...players, player])
        // }
        else{
          return noMoreAddPlayers()
        }
    }

    
  }
  const handleRemove =(id)=>{
    const remaining = players.filter(player=> player.id !== id)
    setPlayers(remaining)
    setCount(count -1)
    alert('Player Removed!')
  }
<ToastContainer />;
  return (
   <>
   <Header
   coin={coin}
   ></Header>
   <Banner handleAddCoin={handleAddCoin}></Banner>
   <div>
    <MainPage 
    selectedPlayers={selectedPlayers}
    handleRemove={handleRemove}
    count={count}
    players={players} ></MainPage>
   </div>
   <NewsLetter></NewsLetter>
   <Footer></Footer>
   </>
  )
}

export default App
