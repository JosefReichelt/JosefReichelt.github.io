declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg?sprite' {
    const BrowserSprite:BrowserSprite;
    export default BrowserSprite;
}

declare type BrowserSprite = {
    id: string;
    url: string;
    viewBox: string;
    toString: () => string;
};


declare module '*.jpg';
declare module '*.png';
declare module '*.gif';

declare module '*.html' {
    const htmlString: string;
    export default htmlString;
}

// declare module '*.svelte' {
//     import { SvelteComponentDev } from 'svelte/internal';
//     export default SvelteComponentDev;
// }