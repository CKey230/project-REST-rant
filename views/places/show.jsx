const React = require('react')
const places = require('../../models/places')
const Def = require('../default')

function show(data) {
    return(
        <Def>
            <div className="row">
                <div className="col-sm-6">
                    <img src={data.place.pic} alt={data.place.name} width="90%" />
                    
                </div>
                <div className="col-sm-6">
                    <h1>{data.place.name}</h1>
                    <h2>
                        Rating
                    </h2>
                    <p>Currently Unrated</p>
                    <br />
                    <h2>
                        Description
                    </h2>
                    
                    <h3>
                        Located in {data.place.city}, {data.place.state}
                    </h3>
                    <h4>
                        Serving {data.place.cuisines}
                    </h4>
                </div>
                
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>
                
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
                
                <h2>Comments</h2>
                <div className="row">
                    <p>No comments yet</p>
                </div>
            </div>
            
           
        </Def>
    )
}

module.exports = show