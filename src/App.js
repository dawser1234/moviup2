import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList';
import NavvBar from './NavvBar';
import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import arr from './data';



function App() {
  const [DATA, setdata] = useState(arr)
  const [rating,setRating]=useState(0)
  const [search, setsearch] = useState("")
  const handleRating=(rate) =>{
    setRating(rate)
  }
  function add(title,description,rating){
    setdata([...DATA,{title:title,description:description,rating:rating}])
  }
  return (
    <div className="">
    <NavvBar add={add}/>
    <input placeholder='search app' onChange={(e)=>setsearch(e.target.value)}/>
    <Rating onClick={handleRating}/>

    <MovieList info={DATA.filter((el)=>el.title.toLowerCase().includes(search.toLowerCase())&&el.rating>=rating)}/>
      
    </div>
  );
}

export default App;
