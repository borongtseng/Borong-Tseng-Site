import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import WorkDetail from './pages/WorkDetail.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/photo/:id" element={<WorkDetail type="photo" />} />
        <Route path="/design/:id" element={<WorkDetail type="design" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
