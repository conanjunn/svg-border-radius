// https://www.thinbug.com/q/1734745
const app = document.querySelector('#app');

const borderTopLeftRadius = (begin = [], end = [], radius) => {
  const c1 = [begin[0] - 0.552 * radius, begin[1]];
  const c2 = [end[0], end[1] - 0.552 * radius];
  return `M ${begin.join(' ')} C ${[
    c1.join(' '),
    c2.join(' '),
    end.join(' '),
  ].join(',')}`;
};

const borderTopRightRadius = (begin = [], end = [], radius) => {
  const c1 = [begin[0] + 0.552 * radius, begin[1]];
  const c2 = [end[0], end[1] - 0.552 * radius];
  return `M ${begin.join(' ')} C ${[
    c1.join(' '),
    c2.join(' '),
    end.join(' '),
  ].join(',')}`;
};

const borderBottomRightRadius = (begin = [], end = [], radius) => {
  const c1 = [begin[0], begin[1] + 0.552 * radius];
  const c2 = [end[0] + 0.552 * radius, end[1]];
  return `M ${begin.join(' ')} C ${[
    c1.join(' '),
    c2.join(' '),
    end.join(' '),
  ].join(',')}`;
};

const borderBottomLeftRadius = (begin = [], end = [], radius) => {
  const c1 = [begin[0] - 0.552 * radius, begin[1]];
  const c2 = [end[0], end[1] + 0.552 * radius];
  return `M ${begin.join(' ')} C ${[
    c1.join(' '),
    c2.join(' '),
    end.join(' '),
  ].join(',')}`;
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
