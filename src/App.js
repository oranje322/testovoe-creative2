import './App.css';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getData} from "./redux/reducers/rootReducer";
import FlatCard from "./components/FlatCard";

const App = () => {
 //получение данных
    useEffect(() => {
        dispatch(getData())
    }, [])

    const dispatch = useDispatch()
    const flats = useSelector(state => state.rootReducer.flats)

  return (
      <div className={'container'}>
          {
              flats.map((flat, index) => <FlatCard flat={flat} key={index} />)
          }
      </div>
  )
}

export default App;
