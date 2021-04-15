
 const templateStr = `
 <div>
 BACKGROUND
 </div>
`

class BackgroundDecoration extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = templateStr;
    }
}

window.customElements.define('background-decoration',BackgroundDecoration)