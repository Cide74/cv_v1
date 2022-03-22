import "./style.scss";
import Skill from "./Skill";


function Skills() {
  return (
    <div>
      <div className="skills">
        <h2 className="h2">Compétences</h2>
        <Skill title="HTML" rating="5"/>
        <Skill title="CSS" rating="4"/>
        <Skill title="JAVASCRIPT" rating="4"/>
        <Skill title="REACT" rating="4"/>
        <Skill title="NODE" rating="4"/>
        <Skill title="SQL" rating="3"/>
      </div>
      <div className="skills">
        <h2 className="h2">Langues</h2>
        <Skill title="ANGLAIS" rating="4"/>
      </div>
      <div className="skills">
        <h2 className="h2">Intérêts</h2>
        <Interests title="Jeux"/>
        <Skill title="Cinéma"/>
        <Skill title="Aquaponie"/>
      </div>
    </div>
  )
}

export default Skills

