import React, { Component } from 'react'

import ProjectEntry from "./ProjectEntry";
import kyberImage from "../../images/projects/kybernauts.png";
import gamedevImage from "../../images/projects/gdcs.png";

export class ProjectsPage extends Component {
  render() {
    return (
      <div>
        <div >
          <h1>Projekty které jsem vytvořil nebo se zúčastnil</h1>
          <ProjectEntry
            name="Kybernauts"
            info="Kybernauts byl náš projekt který vznikl v době když jsem aktivně vytvářel youtube videa. Chtěli jsme dát dohromady team a společně tvořit skvělý obsah.
            \n Mezi náš obsah patřili jak herní videa tak ale i různé tutorialy jak na grafiku tak i programování a nebo tvorbu hudby.
            \n Eventálně jsme nasbírali až 22 tisíc odběratelů, poté jsme kanál ukončili a přesunuli se k projektu Indian Play."
            link="https://www.youtube.com/channel/UCI6Q19WD34-lg0-HWPvkFXg"
            linkName=" Youtube kanál "
            img={kyberImage} 
            />
          <ProjectEntry
            name="Gamedev Komunita"
            info="Discordí server určený pro české a slovenské vývojáře.
            V současnosti tu máme okolo 100 členů, aktivních je samozřejmě méně.
            Pokud si chcete popovídat s lidma v tomto oboru tak se přijďte podívat."
            link="https://discord.gg/SEzzru6"
            linkName="Discord server "
            img={gamedevImage} 
            />
        </div>
      </div>
    )
  }
}

export default ProjectsPage
