export class SvgPath {
  constructor() {
    this.d = '';
  }
  move(x, y) {
    this.d += `M${x} ${y} `;
  }
  line(x, y) {
    this.d += `L${x} ${y} `;
  }
  close() {
    this.d += `Z `;
  }
  bezier(points) {
    const p = points.map((item) => {
      return item.join(' ');
    });
    this.d += `C ${p.join(', ')} `;
  }
}
