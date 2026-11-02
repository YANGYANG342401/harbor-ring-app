import { useState, useEffect } from 'react'
import { HomePage } from './pages/HomePage'
import { HealthPage } from './pages/HealthPage'
import { ProfilePage } from './pages/ProfilePage'
import { SettingsPage } from './pages/SettingsPage'
import { AskPage } from './pages/AskPage'
import { WorkTimePage } from './pages/WorkTimePage'
import { RingManagePage } from './pages/RingManagePage'
import { DataVisiblePage } from './pages/DataVisiblePage'
import { DocPage } from './pages/DocPage'
import { Dashboard } from './pages/Dashboard'
import { Workbench } from './pages/Workbench'

function App() {
  const getHash = () => window.location.hash

  const [hash, setHash] = useState(getHash)

  useEffect(() => {
    const handler = () => setHash(getHash())
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  // Web 管理端
  if (hash === '#dashboard') return <Dashboard />
  if (hash === '#workbench') return <Workbench />

  // App 端主页面
  if (hash === '#health') return <HealthPage />
  if (hash === '#mine') return <ProfilePage />
  if (hash === '#settings') return <SettingsPage />
  if (hash === '#ask') return <AskPage />

  // App 端下级页面
  if (hash === '#worktime') return <WorkTimePage />
  if (hash === '#ring') return <RingManagePage />
  if (hash === '#datavisible') return <DataVisiblePage />
  if (hash.startsWith('#doc-')) return <DocPage docKey={hash.slice(1)} />

  return (
    <div className="min-h-screen bg-background">
      <HomePage />
    </div>
  )
}

export default App
