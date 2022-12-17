const React = require('react')
const Def = require('../default')

function show(data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet Rated
    </h3>
  )
  
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings/data.place.comments.length)
    let stars = ''
    for(let i = 0; i < averageRating; i++) {
      stars += '⭐'
    } 
    rating = (
      <h3>
        {stars} Stars
      </h3>
    )
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className='rant'>{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
          <div className="border col-sm-4">
          <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
            <input type='submit' className='btn btn-danger' value='Delete Comment' />
          </form>
          </div>
        </div>
      )
    })
  }

  return (
    <Def>
      <div className="row">
        <div className="col-sm-6">
          <img src={data.place.pic} alt={data.place.name} width="90%" />
          <h3>
            Located in {data.place.city}, {data.place.state}
          </h3>
        </div>
        <div className="col-sm-6">
          <h1>{data.place.name}</h1>
          <br />
          <h2>
            Rating
          </h2>
          {rating}
          <h2>
            Description
          </h2>
          <h3>
            {data.place.showEstablished()}
          </h3>
          <h4>
            Serving {data.place.cuisines}
          </h4>

        </div>
        <hr />
        <div className="item-place-buttons">
        <a href={`/places/${data.place._id}/edit`} className="btn btn-warning">
           Edit
        </a>

        <form method="POST" action={`/places/${data.place._id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
        </div>
      </div>

      <div className='Item-place-comments'>
        <h2>Comments</h2>
        {comments}
      </div>

      <form className="row g-3" method='POST' action={`/places/${data.place.id}/rant`}>
        <div className='col-md-6'>
          <label htmlFor='author'>Author</label>
          <input className='form-control' id='author' name='author' />
        </div>
        <div className='col-md-6'>
          <label htmlFor='content'>Comment</label>
          <input className='form-control' id='content' name='content' type='text' />
        </div>
        <div className='col-md-6'>
          <label htmlFor='stars'>Star Rating</label>
          <input className='form-control' id='stars' name='stars' type='range' step='0.5' min='0' max='5' />
        </div>
        <div className='col-md-6'>
          <label htmlFor='rant'>Rant</label>
          <input id='rant' name='rant' type='checkbox' defaultChecked />
        </div>
        <div className='col-md-6'>
          <input className='btn btn-primary' type='submit' value='Add Comment' />
        </div>
      </form>

    </Def>
  )
}

module.exports = show