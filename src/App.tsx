import { Navigate, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Placeholder from './pages/Placeholder'
import CaseStudy from './pages/CaseStudy'
import RoadTripJam from './pages/RoadTripJam'
import Playbook from './pages/Playbook'
import Recoolit from './pages/Recoolit'
import About from './pages/About'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Placeholder title="work" />} />
        {/* written pages; the rest still use the template */}
        <Route path="work/road-trip-jam" element={<RoadTripJam />} />
        {/* the Road Trip Jam study was published under its old slug; keep that
            URL working for anyone who already has it */}
        <Route
          path="work/finding-magic-on-the-road"
          element={<Navigate to="/work/road-trip-jam" replace />}
        />
        <Route path="work/playbook" element={<Playbook />} />
        <Route path="work/recoolit" element={<Recoolit />} />
        <Route path="work/:slug" element={<CaseStudy />} />
        <Route path="playground" element={<Placeholder title="playground" />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Placeholder title="resume" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
