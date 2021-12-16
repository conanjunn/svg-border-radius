import { SvgPath } from './svg-path.js';

const path = new SvgPath();
path.move(20, 20);
path.line(100, 20);
path.line(100, 100);
path.line(20, 100);
path.close();
path.move(40, 40);
path.line(80, 40);
path.line(80, 80);
path.line(40, 80);
path.close();

{
  const dom = document.getElementById('shadow');

  dom.innerHTML = `<svg width=300 height=300 style="border: 1px solid red;">
 <path d="${path.d}" stroke="black" fill="red" fill-rule="evenodd" style="-webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, .7));filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, .7));" />
</svg>`;
}

{
  const dom = document.getElementById('inset');

  dom.innerHTML = `
  <svg width="300" height="300" style="border: 1px solid red;">
  <defs>
   <filter id="innershadow" x0="-50%" y0="-50%" width="200%" height="200%">
    <fegaussianblur in="SourceAlpha" stddeviation="3" result="blur"></fegaussianblur>
    <feoffset dy="2" dx="3"></feoffset>
    <fecomposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowDiff"></fecomposite>
    <feflood flood-color="#444444" flood-opacity="0.75"></feflood>
    <fecomposite in2="shadowDiff" operator="in"></fecomposite>
    <fecomposite in2="SourceGraphic" operator="over" result="firstfilter"></fecomposite>
    <fegaussianblur in="firstfilter" stddeviation="3" result="blur2"></fegaussianblur>
    <feoffset dy="-2" dx="-3"></feoffset>
    <fecomposite in2="firstfilter" operator="arithmetic" k2="-1" k3="1" result="shadowDiff"></fecomposite>
    <feflood flood-color="#444444" flood-opacity="0.75"></feflood>
    <fecomposite in2="shadowDiff" operator="in"></fecomposite>
    <fecomposite in2="firstfilter" operator="over"></fecomposite>
   </filter>
  </defs>
  <path d="${path.d}" stroke="black" fill="red" fill-rule="evenodd" filter="url(#innershadow)" />
 </svg>
  `;
}
