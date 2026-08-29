import Card from './Card.jsx'
import { PlantsList } from './PlantsList.jsx'

function App() {

  
  return (
    <div className="bg-gray-100 min-h-screen p-8">

      <PlantsList></PlantsList>
      
      <h1 className="text-3xl font-bold text-black-800 mb-8 text-center">Plants</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        <Card name="Monstera" location="Livingroom" image="https://i.pinimg.com/736x/e7/48/b3/e748b3ee9dcdbf60bb924fb9d207c3e5.jpg" />
      </div>
    </div>
  )
}

export default App


