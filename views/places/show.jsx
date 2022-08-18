const React = require('react')
const Def = require('../Default')

function show(data) {
    return (
        <Def>
            <main>
                <div className='row'>
                    <div className='col-sm-6'>
                <img src={data.place.pic} alt={data.place.name} className = "center" width = "100%" />
                </div>
                    <div className='col-sm-6'>
                <h1>{ data.place.name}</h1>
                <h2>Location</h2>
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
            </main>
            
        </Def>
    )
}

module.exports = show