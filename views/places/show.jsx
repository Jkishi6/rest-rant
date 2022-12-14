const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
          <h1>{data.place.name}</h1>
            <div>
              <img src={data.place.pic} alt={data.place.name} />
            </div>
            <div>
                <h1>{ data.place.name }</h1>
                <h2>City: { data.place.city}</h2>
                <h2>State: { data.place.state}</h2>
                <h2>comments</h2>
                <h2>rating</h2>
                <p>Not Rated</p>
                <h2>Description</h2>
                <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines} </p>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                    Edit
                </a>      
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                     Delete
                    </button>
                </form>
            </div>
            <hr/>
            <footer>
              <h2>Comments</h2>
              <p>No comments yet!</p>
            </footer> 
          </main>
        </Def>
    )
}

module.exports = show