
export class Sprite extends HTMLElement {
    constructor(
        sprite: BrowserSprite, height = 1, width = 1
    ) {
        super();
        this.innerHTML = `
<svg viewBox="${sprite.viewBox}" id=${sprite.id} height="${height}rem" width="${width}rem">
    <use href=${sprite.url} />
</svg>
        `;
    }
}

window.customElements.define('sprite-icon', Sprite);