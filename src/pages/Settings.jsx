export default function Settings() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Calendar Connections</h2>
        <div className="space-y-4">
          {[
            { name: 'Google Agenda', connected: false },
            { name: 'Outlook Agenda', connected: true },
            { name: 'Apple Agenda', connected: false }
          ].map((calendar, index) => (
            <div key={index} className="flex items-center justify-between">
              <span>{calendar.name}</span>
              <button className={`px-3 py-1 rounded-md text-sm ${
                calendar.connected 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}>
                {calendar.connected ? 'Connected' : 'Connect'}
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <div className="flex items-center justify-between">
          <span>Enable Notifications</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1a7ba6]"></div>
          </label>
        </div>
      </div>
      
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Family</h2>
        <button className="btn-primary">Invite Family Member</button>
      </div>
      
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Import Program</h2>
        <p className="text-gray-600 mb-4">Importez votre programme personnalisé (nutrition, sport, méditation) via un fichier JSON.</p>
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#1a7ba6] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="text-gray-600 mb-2">Glissez votre fichier ici ou</p>
          <button className="text-[#1a7ba6] hover:text-[#156589]">Browse Files</button>
        </div>
      </div>
    </div>
  )
}
