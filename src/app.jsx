import { useState } from 'preact/hooks'

export function App() {
  const [currentPage, setCurrentPage] = useState('home')
  
  return (
    <div style={{minHeight: '100vh'}}>
      <header style={{background: '#eaf6f9', padding: '15px 0', borderBottom: '1px solid #ddd'}}>
        <div style={{maxWidth: '800px', margin: '0 auto', padding: '0 20px'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{color: '#1a7ba6', fontSize: '18px', fontWeight: 'bold'}}>
              🏠 Parenta
            </div>
            <div style={{display: 'flex', gap: '8px'}}>
              <button onClick={() => setCurrentPage('home')} style={{padding: '8px 12px', borderRadius: '6px', border: 'none', background: currentPage === 'home' ? 'white' : 'transparent', cursor: 'pointer'}}>Home</button>
              <button onClick={() => setCurrentPage('myself')} style={{padding: '8px 12px', borderRadius: '6px', border: 'none', background: currentPage === 'myself' ? 'white' : 'transparent', cursor: 'pointer'}}>Myself</button>
              <button onClick={() => setCurrentPage('documents')} style={{padding: '8px 12px', borderRadius: '6px', border: 'none', background: currentPage === 'documents' ? 'white' : 'transparent', cursor: 'pointer'}}>Documents</button>
            </div>
          </div>
        </div>
      </header>
      
      <main style={{padding: '20px', paddingBottom: '80px'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          {currentPage === 'home' && (
            <div>
              <h1 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '8px'}}>Parenta</h1>
              <p style={{fontSize: '18px', color: '#6b7280', marginBottom: '32px'}}>Family Organization Made Easy</p>
              
              <div style={{background: 'linear-gradient(135deg, #87CEEB, #98D8E8)', color: 'white', borderRadius: '8px', padding: '20px', marginBottom: '20px'}}>
                <h2 style={{fontSize: '20px', fontWeight: '600', marginBottom: '4px'}}>☀️ Today's Weather</h2>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <div>
                    <p style={{fontSize: '30px', fontWeight: 'bold'}}>22°C</p>
                    <p>Ensoleillé</p>
                  </div>
                  <div style={{textAlign: 'right'}}>
                    <p style={{fontSize: '14px'}}>Tomorrow: 19°C</p>
                    <p style={{fontSize: '14px'}}>Light jacket recommended</p>
                  </div>
                </div>
              </div>
              
              <div style={{background: 'white', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '20px'}}>
                <h2 style={{fontSize: '20px', fontWeight: '600', marginBottom: '16px'}}>📅 Today's Schedule</h2>
                <div style={{textAlign: 'center', color: '#6b7280', marginBottom: '16px'}}>May 5, 2025</div>
                <div style={{marginBottom: '12px', display: 'flex'}}>
                  <span style={{color: '#1a7ba6', fontWeight: '600', marginRight: '12px'}}>15:00</span>
                  <div>
                    <div style={{fontWeight: '500'}}>Swimming Class</div>
                    <div style={{fontSize: '14px', color: '#6b7280'}}>Don't forget swimming gear</div>
                  </div>
                </div>
                <div style={{display: 'flex'}}>
                  <span style={{color: '#1a7ba6', fontWeight: '600', marginRight: '12px'}}>17:30</span>
                  <div>
                    <div style={{fontWeight: '500'}}>Doctor Appointment</div>
                    <div style={{fontSize: '14px', color: '#6b7280'}}>Annual checkup</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {currentPage === 'myself' && (
            <div>
              <h1 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '24px'}}>Myself - Health Coach</h1>
              <div style={{background: 'white', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
                <h2 style={{fontSize: '20px', fontWeight: '600', marginBottom: '16px'}}>Health Tracker</h2>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px'}}>
                  <div style={{background: '#eff6ff', padding: '16px', borderRadius: '8px', textAlign: 'center'}}>
                    <div style={{fontSize: '24px', fontWeight: 'bold', color: '#2563eb'}}>6/8</div>
                    <div style={{fontSize: '14px', color: '#6b7280'}}>Verres d'eau</div>
                  </div>
                  <div style={{background: '#f0fdf4', padding: '16px', borderRadius: '8px', textAlign: 'center'}}>
                    <div style={{fontSize: '24px', fontWeight: 'bold', color: '#16a34a'}}>30</div>
                    <div style={{fontSize: '14px', color: '#6b7280'}}>Minutes exercice</div>
                  </div>
                  <div style={{background: '#faf5ff', padding: '16px', borderRadius: '8px', textAlign: 'center'}}>
                    <div style={{fontSize: '24px', fontWeight: 'bold', color: '#9333ea'}}>12h</div>
                    <div style={{fontSize: '14px', color: '#6b7280'}}>Jeûne intermittent</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {currentPage === 'documents' && (
            <div>
              <h1 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '24px'}}>Documents</h1>
              <div style={{background: 'white', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
                <h2 style={{fontSize: '20px', fontWeight: '600', marginBottom: '16px'}}>Mes Documents</h2>
                <p style={{color: '#6b7280', marginBottom: '16px'}}>Partagez des photos et documents avec votre famille (5MB gratuit)</p>
                <button style={{background: '#1a7ba6', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '6px', cursor: 'pointer'}}>Upload Document</button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <nav style={{position: 'fixed', bottom: 0, left: 0, right: 0, background: '#eaf6f9', height: '60px', borderTop: '1px solid #ddd'}}>
        <div style={{display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'space-around'}}>
          <button onClick={() => setCurrentPage('home')} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'none', background: 'transparent', color: currentPage === 'home' ? '#1a7ba6' : '#99a3ad', cursor: 'pointer'}}>
            <span style={{fontSize: '20px'}}>🏠</span>
            <span style={{fontSize: '12px'}}>Home</span>
          </button>
          <button style={{display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'none', background: 'transparent', color: '#99a3ad', cursor: 'pointer'}}>
            <span style={{fontSize: '20px'}}>📅</span>
            <span style={{fontSize: '12px'}}>Schedule</span>
          </button>
          <button onClick={() => setCurrentPage('myself')} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'none', background: 'transparent', color: currentPage === 'myself' ? '#1a7ba6' : '#99a3ad', cursor: 'pointer'}}>
            <span style={{fontSize: '20px'}}>📋</span>
            <span style={{fontSize: '12px'}}>Tasks</span>
          </button>
          <button onClick={() => setCurrentPage('documents')} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'none', background: 'transparent', color: currentPage === 'documents' ? '#1a7ba6' : '#99a3ad', cursor: 'pointer'}}>
            <span style={{fontSize: '20px'}}>⚙️</span>
            <span style={{fontSize: '12px'}}>Settings</span>
          </button>
        </div>
      </nav>
      
      <button style={{position: 'fixed', bottom: '80px', right: '16px', width: '56px', height: '56px', borderRadius: '50%', background: '#1a7ba6', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'}} onClick={() => alert('Assistant vocal!')}>
        🎤
      </button>
    </div>
  )
}
