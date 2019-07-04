import React, { Component } from 'react'
import ProjectEntry from "./ProjectEntry";
import castleImg from "../../images/projects/brickthecastle.png";
import pacmanImg from "../../images/projects/sheriffpac.png";
import stamperImg from "../../images/projects/stamperman.jpg";

export class GamesPage extends Component {
  render() {
    return (
      <div >
        <div >
          <h1>Hry které jsem vytvořil</h1>
          <ProjectEntry
            name="Brick the Castle"
            info="Jedná se o klon klasického Arkanoidu/Brick Breakeru s tím že jsem udělal pár úprav.
            Je možné si vybrat kam na začátku vystřelíte míč a  &quot;pálkou&quot; se dá hýbat po obou osách. 
            \n Hra beží v Unity a byla vytvořena během 72 hodin pro GameJam."
        
            link="https://protomace.itch.io/brick-the-castle"
            linkName=" Zahrát si "
            img={castleImg} />
          <ProjectEntry
            name="Sheriff Pac"
            info="Klon pacmana, kde místo toho aby jste po powerupu mohly duchy sníst sbíráte náboje a duchy sestřelíte.
            Největším oříškem byla navigace pro hráče a nepřátele. Co jsem nakonec udělal byla hrubá kopie levelu v 3D a použil jsem Navmesh. V podstatě tak existovaly 2 verze jedné úrovně.
            \n Hra beží v Unity a byla vytvořena během 72 hodin pro GameJam, bohužel je nedodělána a chybí zvuky, protože jsem již poslední den neměl čas."
            img={pacmanImg}
            linkName=" Zahrát si "
            link="https://protomace.itch.io/sheriff-pac"
          /> 
          <ProjectEntry
            name="Stamperman"
            info="VR Hra kterou jsme tvořili společně s Mariánem Hlaváčem na VR Hackathonu. Já jsem měl na starost hlavně grafickou podobu hry.
            \n Měli jsme parádní možnost si vyzkoušet vyvíjet pro Oculus Rift a HTC Vive.
            Hru jsme bohužel nedokončili protože nám došel čas, jednalo se o 48 hodinovou akci a často nás brzdily problémy s Unity."
            img={stamperImg}
          />
        </div>
      </div>
    )
  }
}

export default GamesPage
