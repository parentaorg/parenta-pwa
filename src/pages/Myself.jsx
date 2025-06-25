import { useState } from 'preact/hooks'

export default function Myself() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Boire 2L d\'eau', completed: false, category: 'health' },
    { id: 2, title: 'Exercice 30 min', completed: true, category: 'fitness' },
    { id: 3, title: 'Méditation 10 min', completed: false, category: 'wellness' }
  ])
  
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Myself</h1>
      
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Health Tracker</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">6/8</div>
            <div className="text-sm text-gray-600">Verres d'eau</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">30</div>
            <div className="text-sm text-gray-600">Minutes d'exercice</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600">12h</div>
            <div className="text-sm text-gray-600">Jeûne intermittent</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{width: '60%'}}></div>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <h3 className="font-semibold mb-3">Breathing & Meditation</h3>
          <div className="flex space-x-4">
            <button className="btn-primary">Exercice de respiration</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">Méditation guidée</button>
          </div>
        </div>
      </div>
      
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">My Focus Tasks</h2>
        
        <div className="space-y-3">
          {tasks.map(task => (
            <div key={task.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={task.completed}
                  className="mr-3"
                  onChange={() => {
                    setTasks(tasks.map(t => 
                      t.id === task.id ? {...t, completed: !t.completed} : t
                    ))
                  }}
                />
                <span className={task.completed ? 'line-through text-gray-500' : ''}>{task.title}</span>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                task.category === 'health' ? 'bg-blue-100 text-blue-800' :
                task.category === 'fitness' ? 'bg-green-100 text-green-800' :
                'bg-purple-100 text-purple-800'
              }`}>
                {task.category}
              </span>
            </div>
          ))}
        </div>
        
        <button className="mt-4 text-[#1a7ba6] hover:text-[#156589] flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Task
        </button>
      </div>
    </div>
  )
}
