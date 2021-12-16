import { SvgPath } from './svg-path.js';

// https://www.thinbug.com/q/1734745
const app = document.querySelector('#radius');

const borderTopLeftRadius = (begin = [], end = [], radius) => {
  const c1 = [begin[0] - 0.552 * radius, begin[1]];
  const c2 = [end[0], end[1] - 0.552 * radius];

  const path = new SvgPath();
  path.move(begin[0], begin[1]);
  path.bezier([c1, c2, end]);
  return path.d;
};

const borderTopRightRadius = (begin = [], end = [], radius) => {
  const c1 = [begin[0] + 0.552 * radius, begin[1]];
  const c2 = [end[0], end[1] - 0.552 * radius];

  const path = new SvgPath();
  path.move(begin[0], begin[1]);
  path.bezier([c1, c2, end]);
  return path.d;
};

const borderBottomRightRadius = (begin = [], end = [], radius) => {
  const c1 = [begin[0], begin[1] + 0.552 * radius];
  const c2 = [end[0] + 0.552 * radius, end[1]];

  const path = new SvgPath();
  path.move(begin[0], begin[1]);
  path.bezier([c1, c2, end]);
  return path.d;
};

const borderBottomLeftRadius = (begin = [], end = [], radius) => {
  const c1 = [begin[0] - 0.552 * radius, begin[1]];
  const c2 = [end[0], end[1] + 0.552 * radius];

  const path = new SvgPath();
  path.move(begin[0], begin[1]);
  path.bezier([c1, c2, end]);
  return path.d;
};

app.innerHTML = `<svg width=300 height=300 style="border: 1px solid red;">
 <path d="${borderTopLeftRadius(
   [100, 10],
   [10, 100],
   90
 )} ${borderTopRightRadius(
  [100, 10],
  [190, 100],
  90
)} ${borderBottomRightRadius(
  [190, 100],
  [100, 190],
  90
)}  ${borderBottomLeftRadius(
  [100, 190],
  [10, 100],
  90
)}" stroke="black" fill="transparent"/>
<svg>`;
