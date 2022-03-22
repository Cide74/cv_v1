import React from 'react'
import './style.scss'
import imgRegis from "../../assets/images/Photo-CV.jpg";

function User() {
  return (
    <div className="user">
      <img 
        src={imgRegis} 
        alt='Régis BLEC'/>
        <h1 className='user__name'>Régis BLEC</h1>
        <p className='user__profession'>Développeur Web</p>
        <div className='user__infos'>
          <p className='user__info'>396 route de favergettes,</p>
          <p className='user__info'>74 210 Faverges</p>
          <p className='user__info'>
            <a href='tel:+33622162524'>06 22 16 25 24</a>
          </p>
          <p className='user__info'>
            <a href='mailto:regis.blec@ik.me'>regis.blec@ik.me</a>
          </p>
          <p className='user__info'>date de naissance : 20 juin 1981</p>
          <p className='user__info'>Lieu de naissance : Sélestat</p>
          {/**  <p className='user__info'>396 route de favergettes, 74210 Faverges</p>*/}
        </div>
    </div>
  )
}

export default User

