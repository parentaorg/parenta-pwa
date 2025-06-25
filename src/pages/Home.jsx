import WeatherCard from '../components/Weather/WeatherCard'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-2">Parenta</h1>
      <p className="text-lg mb-8 text-gray-600">Family Organization Made Easy</p>
      
      <WeatherCard />
      
      <div className="card">
        <h2 className="flex items-center text-xl font-semibold mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Today's Schedule
        </h2>
        
        <div className="text-center text-gray-500 mb-4">May 5, 2025</div>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="text-[#1a7ba6] font-semibold">15:00</div>
            <div className="flex-1">
              <div className="font-medium">Swimming Class</div>
              <div className="text-sm text-gray-600">Don't forget swimming gear</div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="text-[#1a7ba6] font-semibold">17:30</div>
            <div className="flex-1">
              <div className="font-medium">Doctor Appointment</div>
              <div className="text-sm text-gray-600">Annual checkup</div>
            </div>
          </div>
        </div>
        
        <button className="mt-4 text-[#1a7ba6] hover:text-[#156589] flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Event
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="card">
          <h3 className="flex items-center text-lg font-semibold mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            To-Do List
          </h3>
          
          <div className="space-y-2">
            {['Sign permission slip', 'Pack lunch boxes', 'Schedule dentist appointment'].map((task, index) => (
              <div key={index} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>{task}</span>
              </div>
            ))}
          </div>
          
          <button className="mt-3 text-[#1a7ba6] hover:text-[#156589] text-sm">Add task</button>
        </div>
        
        <div className="card">
          <h3 className="flex items-center text-lg font-semibold mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Shopping List
          </h3>
          
          <div className="space-y-2">
            {['Fruits and vegetables', 'School supplies', 'Swimming gear'].map((item, index) => (
              <div key={index} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          
          <button className="mt-3 text-[#1a7ba6] hover:text-[#156589] text-sm">Add item</button>
        </div>
      </div>
    </div>
  )
}
