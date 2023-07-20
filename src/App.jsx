/* eslint-disable no-unused-vars */
import FollowMouse from "./components/mouse-follower/FollowMouse"
import Header from "./components/header/Header"
import Hello from "./components/hello/Hello"
import Proyects from "./components/proyects/Proyects"

function App() {
  return (
    <>
      <FollowMouse />
      <Header />
      <main>
        <section>
          <Hello />
        </section>
        <section>
          <Proyects />
        </section>
      </main>
    </>
  )
}

export default App
