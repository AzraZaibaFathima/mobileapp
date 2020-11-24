import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom' 

 function Home() {
  return (
      <div>
           <nav class="navbar navbar-light bg-success">
              <span class="navbar-brand mb-0 h1">Mobile Galaxy</span>
              <ul className="navbar-nav  ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <b>Login</b>
                </Link>
              </li>
              </ul>
          </nav>
          <h1 id="home">Welcome to Mobile Store</h1>
         <div className="card" style={{width: "23rem"}}>
              <img src="./Assests/apple.jpg" class="card-img-top"  alt="..."/>
              <div class="card-body">
              <p style={{color:"fuchsia"}} class="card-text"><b>Apple</b><br/>website: www.apple.com</p>
          </div>
          </div>
          <div className="card" style={{width: "23rem"}}>
              <img src="./Assests/mob2.jpg" class="card-img-top"  alt="..."/>
              <div class="card-body">
              <p style={{color:"blue"}} class="card-text"><b>Samsung</b><br/>website: www.samsung.com</p>
          </div>
          </div>
          <div className="card" style={{width: "23rem"}}>
              <img src="./Assests/mob4.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
              <p style={{color:"crimson"}} class="card-text"><b>One Plus</b><br/>website: www.onepluscom</p>
          </div>
          </div>
          <div className="card" style={{width: "23rem"}}>
              <img src="./Assests/MI.jpg" class="card-img-top"  alt="..."/>
              <div class="card-body">
              <p style={{color:"darkblue"}} class="card-text"><b>MI</b><br/>website: www.mi.com</p>
          </div>
          </div>
          <div className="card" style={{width: "23rem"}}>
              <img src="./Assests/mob6.jpg" class="card-img-top"  alt="..."/>
              <div class="card-body" >
              <p style={{color:"grey"}} class="card-text"><b>Vivo</b><br/>website: www.vivo.com </p>
          </div>
          </div>
          <div className="card" style={{width: "23rem"}}>
              <img src="./Assests/Oppo.jpg" class="card-img-top"  alt="..."/>
              <div class="card-body">
              <p style={{color:"red"}} class="card-text"><b>Oppo</b> <br/> website: www.oppo.com</p>
          </div>
          </div>
      </div>
  )
}

export default Home;