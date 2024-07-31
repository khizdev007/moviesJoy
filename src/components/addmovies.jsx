import React from 'react'
import {useForm} from 'react-hook-form'

const AddMovies = (props) => {
    const {register,handleSubmit} = useForm()
    const onSubmit = (d)=>{
        alert(JSON.stringify(d))
        props.addMovie(d)
    }
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
            <input type="text" placeholder="title ..." {...register("title")} style={{
                padding: "20px", display: "block",
                width: "40%", margin: "auto", marginTop: "20px"
            }}></input>
            <input type="text" placeholder="description ..." {...register("description")} style={{
                padding: "20px",
                display: "block", width: "40%", margin: "auto", marginTop: "20px"
            }}></input>
            <input type="number" placeholder="Release date ..." {...register("releaseDate")} style={{
                padding: "20px",
                display: "block", width: "40%", margin: "auto", marginTop: "20px"
            }}></input>
            <input type="text" placeholder="where to watch ..."  {...register("watch")}style={{
                padding: "20px",
                display: "block", width: "40%", margin: "auto", marginTop: "20px"
            }}></input>
            <input type="text" placeholder="rating ..."  {...register("rating")}style={{
                padding: "20px", display: "block",
                width: "40%", margin: "auto", marginTop: "20px"
            }}></input>
            <input type="text" placeholder="category ..."  {...register("category")}style={{
                padding: "20px", display: "block",
                width: "40%", margin: "auto", marginTop: "20px"
            }}></input>
            <input type="text" placeholder="img ..."  {...register("img")}style={{
                padding: "20px", display: "block",
                width: "40%", margin: "auto", marginTop: "20px"
            }}></input>
            <input type="text" placeholder="myRating ..."  {...register("myRating")}style={{
                padding: "20px", display: "block",
                width: "40%", margin: "auto", marginTop: "20px"
            }}></input>
            
            <button style={{ backgroundColor: 'green', color: "white", padding: "12px" }} 
            > Add Movie</button>
            <input type='file' onChange={(e) => props.setFile(e.target.files[0])}></input>
            <button onClick={(e) => props.uploadFile() }>upload</button>
      </form>
        </div>
    )
}

export default AddMovies