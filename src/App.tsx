import "./index.css"

import {
  Business,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  Features,
  SocialProof,
} from "./components"

const App = () => (
  <div style={{ color: "black" }}>
    <h1>Hello World!</h1>
    <Navbar />
    <Hero />
    <Features />
    <Stats />
    <Testimonials />
    <Business />
    <SocialProof />
    <CTA />
    <Footer />
  </div>
)

export default App
