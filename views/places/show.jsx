const React = require('react')
const Def = require('../Default')

function show(data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{comment.rant ? "Rant! 😡" : "Rave! 😻"}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
            <form method="POST" action={`/places/${data.place.id}/comment/${comments.id}?_method=DELETE`}>
                <input type="submit" className="btn btn-danger" value="Delete Comment"/>
            </form>
          </div>
        )
      })
    }
    return (
        <Def>
            <main>
                <div className='row'>
                    <div className='col-sm-6'>
                <img src={data.place.pic} alt={data.place.name} className = "center" width = "100%" />
                <h3>Located in {data.place.city}, {data.place.state}</h3>
                </div>
                    <div className='col-sm-6'>
                <h1>{ data.place.name}</h1>
                <h2>Description</h2>
                <h3>
                    {data.place.showEstablished()}
                </h3>
                <h4>
                    Serving {data.place.cuisines}
                </h4>
                <p>{data.place.city}, {data.place.state}</p>
                <h2>Cuisine Style</h2>
                <p className="text-center">
                {data.place.cuisines}
                </p>
                <h3>Rating</h3>
                <p>Currently Unrated</p>
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>Edit</a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">Delete</button>
            </form>
                </div>
                </div>
                <hr />
                <h2>Comments</h2>
                {comments}
            </main>
            <div>
                <div> 
                    <h3 className="text-center">Comments</h3>
                        {comments}
                    <h4 className="text-center">Got Your Own Rant or Rave?</h4>
                </div>  
                <form action={`/places/${data.place.id}/comment`} method="POST">                    
                    <div>
                        <label htmlFor="author">Name: </label>
                        <input className="form-control" type="text" id="author" name="author" placeholder="Name Here!"/>
                    </div>
                    <div>
                        <label htmlFor="stars">Rating: </label>                                
                        <input className="form-control" type="range" step="0.5" min="1" max="5" id="stars" name="stars"/>                                  
                    </div>
                    <div>
                        <label htmlFor="rant">Is this a rant? </label>             
                        <input type="checkbox" id="rant" name="rant" />                         
                    </div>
                    <div>
                        <label htmlFor="content">Comment: </label>
                        <textarea className="form-control" type="text" id="content" name="content" placeholder="I love this place! ..."></textarea>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>                    
                </form>
            </div>
        </Def>
    )
}

module.exports = show


