import { Navigate, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import AppLayout from './layout/AppLayout.jsx'
import Home from './pages/Home.jsx'
import Matches from './pages/Matches.jsx'
import MatchDetail from './pages/MatchDetail.jsx'
import CreateMatch from './pages/CreateMatch.jsx'
import Courts from './pages/Courts.jsx'
import Profile from './pages/Profile.jsx'
import Tournaments from './pages/Tournaments.jsx'
import TournamentDetail from './pages/TournamentDetail.jsx'
import CreateTournament from './pages/CreateTournament.jsx'
import RequireAuth from './components/RequireAuth.jsx'

function App() {
  return (
    <div className="min-h-screen text-slate-50">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/app"
          element={
            <RequireAuth>
              <AppLayout />
            </RequireAuth>
          }
        >
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="matches" element={<Matches />} />
          <Route path="match/:id" element={<MatchDetail />} />
          <Route path="create" element={<CreateMatch />} />
          <Route path="courts" element={<Courts />} />
          <Route path="tournaments" element={<Tournaments />} />
          <Route path="tournament/:id" element={<TournamentDetail />} />
          <Route path="tournaments/create" element={<CreateTournament />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
