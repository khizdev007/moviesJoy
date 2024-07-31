
import './App.css';
import Homepage from '../components/homepage'
import AddMovies from '../components/addmovies.jsx'
import Authentication from '../components/authentication'
import { useEffect, useState } from 'react'
import { auth } from '../config/firebase'
import { db } from '../config/firebase'
// import {useForm} from 'react-hook-form'
import { getDocs, collection, addDoc, doc, deleteDoc } from 'firebase/firestore'
import { get } from 'react-hook-form';
import { storage } from '../config/firebase'
import { ref, uploadBytes } from 'firebase/storage'

//  in order to get only 1 value use getDoc instead of getDocs


//  in order to update data in the firestore database use updateDoc 
//  below the id means the id of the data or the object you want to modify
//  updateDoc(db,"movies",id,{title:"new title here ...."})
//  bg color ::: #1b1d22
function App() {
  const moviesCollection = collection(db, "movies")
  const [moviesList, setMoviesList] = useState([])
  const [file, setFile] = useState(null)
  const getMoviesList = async () => {
    try {
      const data = await getDocs(moviesCollection)
      console.log(data.docs)
      //  filtering the data so we only get what we want ! !  !  ! ! ! ! ! ! !
      const filteredData = data.docs.map((doc) => {
        return (
          {
            ...doc.data(),
            id: doc.id,
          }
        )
      })

      setMoviesList(filteredData)
      console.log(filteredData)
    }
    catch (e) {
      console.error(e)
    }
  }


  const deleteMovie = async (id) => {
    const deldoc = await deleteDoc(doc(db, "movies", id))
    getMoviesList()
  }


  useEffect(() => {
    getMoviesList()
  }, [])

  useEffect(() => {
    console.log("movies List : ", moviesList)
  }, [moviesList])




  const addMovie = async (d) => {
    try {
      if(d.title == ""){

      }else{
      await addDoc(moviesCollection, d)
      getMoviesList()
    }
    }
    catch (e) {
      console.error(e)
    }
    // alert('adding movie')
  }

  const uploadFile = async()=>{
    if(!file) return 
    const filesFolderRef = ref(storage,`moviesImg${file.name}`)
    try{
    await uploadBytes(filesFolderRef,file)
  }
  catch(err){
    console.error(err)
  }
  }
  return (
    <div className="App">
      <header className="App-header">
        <Authentication />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh", backgroundImage: "" }}>
          <Homepage moviesList={moviesList} user={auth?.currentUser?.email} deleteMovie={deleteMovie} />
        </div>
        <AddMovies addMovie={addMovie} setFile={setFile} uploadFile = {uploadFile} />
      </header>
    </div>
  );
}
export default App;
