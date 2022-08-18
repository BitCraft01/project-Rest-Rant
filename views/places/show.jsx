const React = require('react')
const Def = require('../Default')

function show(data) {
    return (
        <Def>
            <main>
                <div>
                <h1>{ data.place.name}</h1>
                <h2>Rating: Currently Unrated</h2>
                <p className="text-center">
        {data.place.cuisines}
      </p>
                <img src={data.place.pic} alt={data.place.name} className = "center" width = "100%" />
                </div>
            </main>
            <a href={`/places/${data.id}/edit`} className='btn btn-warning'>Edit</a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">Delete</button>
            </form>
        </Def>
    )
}

module.exports = show