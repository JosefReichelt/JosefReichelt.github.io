
import { getRandomBackgroundColor } from 'src/utils/randomBackgroundColor';
import css from './BackgroundDecoration.scss';

class BackgroundDecoration extends HTMLElement {
    constructor() {
        super();
        this.handleResize = this.handleResize.bind(this);
        this.createBackground = this.createBackground.bind(this);
        this.calculateBlocks = this.calculateBlocks.bind(this);
        this.totalHeight = Math.max(document.body.scrollHeight, 1920);
        this.totalWidth = Math.max(document.body.scrollWidth, 1920);
        this.style.height = `${this.totalHeight}px`;
        this.style.backgroundColor = getRandomBackgroundColor();
        this.calculateBlocks();
    }

    blockHeight = 400;
    isoScaleFactor = 86.062;
    totalHeight = 0;
    totalWidth = 0;
    blockPadding = 0;
    numOfBlocks = 0;
    prevNumOfBlocks = 0;
    isoTopMargin = 2;

    connectedCallback(){
        window.addEventListener('resize', this.handleResize);
    }
    disconnectedCallback(){
        window.removeEventListener('resize', this.handleResize);

    }

    handleResize() {
        this.totalHeight = Math.max(document.body.scrollHeight, 1920);
        this.totalWidth = Math.max(window.innerWidth, 1920);
        this.calculateBlocks();
    }

     calculateBlocks = () => {
         this.numOfBlocks = Math.ceil((this.totalHeight + this.totalWidth) / this.blockHeight / 1.3) + 1;
         if (this.numOfBlocks === this.prevNumOfBlocks) return;

         this.blockPadding = Math.max(((this.totalWidth / this.blockHeight) *
            (this.blockHeight + this.blockHeight / this.isoScaleFactor)) /
            3,
         this.blockHeight / 3);
         this.isoTopMargin =
          (this.blockHeight / this.isoScaleFactor) * (100 - this.isoScaleFactor - 0.838);
         this.createBackground();
         this.prevNumOfBlocks = this.numOfBlocks;
     };

    createBackground = () => {
        this.innerHTML = '';
        for (let i = 0; i < this.numOfBlocks; i++) {
            const element = document.createElement('div');
            element.style.height = `${this.blockHeight}px`;
            element.style.marginTop = `${this.isoTopMargin}px`;
            element.style.top = `-${this.blockPadding}px`;
            element.style.backgroundColor = `rgba(255,255,255,${1 / (this.numOfBlocks / i)})`;
            element.className = css.backgroundSection;
            this.appendChild(element);
        }
    };
}

window.customElements.define('background-decoration', BackgroundDecoration);