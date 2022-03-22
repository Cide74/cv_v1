import "./style.scss"
import imgRegis from "../../assets/images/Photo-CV.jpg";

import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from '@material-ui/icons/Mail';
import TodayIcon from '@material-ui/icons/Today';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function User() {
  return (
    <div className="user">
      <img 
        className="user__avatar"
        src={imgRegis} 
        alt="Régis BLEC"/>
        <h1 className="user__name">Régis BLEC</h1>
        <p className="user__profession">Développeur Web</p>
        <div className="user__infos">
          <p className="user__info">
            <HomeIcon /> 396 route de favergettes, 74 210 Faverges</p>
          <p className="user__info">
            <a href="tel:+33622162524">
              <PhoneIcon /> 06 22 16 25 24</a>
          </p>
          <p className="user__info">
            <a href="mailto:regis.blec@ik.me">
              <MailIcon /> regis.blec@ik.me</a>
          </p>
          <p className="user__info">
            <TodayIcon /> Date de naissance : 20 juin 1981</p>
          <p className="user__info">
            <LocationOnIcon /> Lieu de naissance : Sélestat</p>
          {/**  <p className="user__info">396 route de favergettes, 74210 Faverges</p>*/}
        </div>
    </div>
  )
}

export default User

