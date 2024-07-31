import './homepage.css'

const Homepage = (props) => {

    let list = props.moviesList
    const color = (category) => {
        if (category == "horror") return "rgba(255, 0, 0, 0.626)"
        else if (category == "scifi") return "rgba(0, 0, 255, 0.483)"
        else if (category == "superhero") return "rgba(255, 166, 0, 0.519)"
        else if (category == "adventure") return "rgba(0, 128, 0, 0.456)"
    }
    return (
        list.map((i) => {
            return (

                <div style={{
                    backgroundImage: `linear-gradient(to bottom right, rgba(11, 0, 170, 0.468),rgba(0, 0, 0, 0.468)),
                    url(${i.img})`
                }} className='card'>

                    <div className="cardText">

                        <p className='category' style={{ backgroundColor: `${color(i.category)}` }}>
                            {i.category}</p>

                        <h1 className='title'>{i.title}</h1>
                        <p className='rating'>{i.rating}
                            <span style={{ fontSize: "16px", opacity: "0.8" }}>/10 ⭐</span></p>

                        <p className='release'>{i.releaseDate}</p>
                        {/* <img src={i.img}></img> */}
                        {/* <p className='myRating'>{i.myRating}</p> */}

                        {/* <a href={i.watch} target="_blank"><button>Watch</button></a> */}
                        {/* <p>{i.description}</p> */}
                        {
                            props.user == "khizdev007@gmail.com" ? <button onClick={(e) => props.deleteMovie(i.id)} className='deleteMovie' >
                                Delete Movie</button> : ""}
                    </div>
                </div>
            )
        })
    )
}

export default Homepage