import React from 'react'
import './module-images.scss'


function ModuleImages() {
  // images within the module cards
  return (
    <div className="module-images">
      <img className="img-1" src="https://res.cloudinary.com/dejiabiola/image/upload/c_scale,h_86,q_80,r_0/v1597852781/envato_2.0/img-1.jpg" alt=""/>
      <img className="img-2" src="https://res.cloudinary.com/dejiabiola/image/upload/c_scale,h_86,q_80,r_0/v1597852789/envato_2.0/img-2.jpg" alt=""/>
      <img className="img-3" src="https://res.cloudinary.com/dejiabiola/image/upload/c_scale,h_86,q_80,r_0/v1597852773/envato_2.0/img-4.jpg" alt=""/>
      <img className="img-4" src="https://res.cloudinary.com/dejiabiola/image/upload/c_scale,h_86,q_80,r_0/v1597852773/envato_2.0/img-3.jpg" alt=""/>
      <div>
        <span>+</span>
        <span>4</span>
      </div>
    </div>
  )
}

export default ModuleImages
