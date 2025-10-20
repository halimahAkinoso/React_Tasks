import React from 'react'
import Profile from "./Profile"
import halimahImg from "./assets/images/halimah.jpg"
import zubaydahImg from "./assets/images/zubaydah.jpg"

function App () {
  return (
    <div>
      <h1>My Profile Cards</h1>

      <Profile
        image={halimahImg}
        name="Halimat Akinoso"
        role="AI Developer"
        description="Am learning React to build amazing web apps in Nigeria."
      />

      <Profile
        image={zubaydahImg}
        name="Ibrahim Zubaydah"
        role="AI Developer"
        description="Am learning React to build amazing web apps in Nigeria."
      />
    </div>
  )
}

export default App