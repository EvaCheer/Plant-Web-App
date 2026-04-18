
function Card () {
    return (
        <div className = "w-60 p-2 bg-white rounded-xl flex-column">
            <img alt="plant picture" src="https://i.pinimg.com/736x/e7/48/b3/e748b3ee9dcdbf60bb924fb9d207c3e5.jpg"
            className = "h-40 object-cover rounded-xl center"></img>
            <h2 className="font-bold text-lg" >Monstera</h2>
            <p className="text-sm text-gray-600">In the livingroom.</p>
        </div>
    )
}

export default Card