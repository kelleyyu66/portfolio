import { Navigate, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Placeholder from './pages/Placeholder'
import CaseStudy from './pages/CaseStudy'
import RoadTripJam from './pages/RoadTripJam'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Placeholder title="work" />} />
        {/* its own page, built from Figma 380:43; the rest use the template */}
        <Route path="work/finding-magic-on-the-road" element={<RoadTripJam />} />
        <Route path="work/:slug" element={<CaseStudy />} />
        <Route path="playground" element={<Placeholder title="playground" />} />
        <Route path="about" element={<Placeholder title="about" />} />
        <Route path="resume" element={<Placeholder title="resume" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
