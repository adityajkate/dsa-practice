process.stdin.resume();
process.stdin.setEncoding('utf8');

let inputData = '';
process.stdin.on('data', d => inputData += d);
process.stdin.on('end', () => {
  const data = inputData.split(/\s+/).map(Number);
  let ptr = 0;
  const next = () => data[ptr++];

  main(next);
});

class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = new Array(4 * this.n).fill(0);
    this.lazy = new Array(4 * this.n).fill(0);
    this.build(arr, 1, 0, this.n - 1);
  }

  build(arr, node, l, r) {
    if (l === r) { this.tree[node] = arr[l]; return; }
    const mid = (l + r) >> 1;
    this.build(arr, 2 * node, l, mid);
    this.build(arr, 2 * node + 1, mid + 1, r);
    this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
  }

  push(node, l, r) {
    if (this.lazy[node] !== 0) {
      const mid = (l + r) >> 1;
      for (const [child, cl, cr] of [[2*node, l, mid], [2*node+1, mid+1, r]]) {
        this.tree[child] += this.lazy[node] * (cr - cl + 1);
        this.lazy[child] += this.lazy[node];
      }
      this.lazy[node] = 0;
    }
  }

  update(node, l, r, ql, qr, val) {
    if (qr < l || r < ql) return;
    if (ql <= l && r <= qr) {
      this.tree[node] += val * (r - l + 1);
      this.lazy[node] += val;
      return;
    }
    this.push(node, l, r);
    const mid = (l + r) >> 1;
    this.update(2 * node, l, mid, ql, qr, val);
    this.update(2 * node + 1, mid + 1, r, ql, qr, val);
    this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
  }

  query(node, l, r, ql, qr) {
    if (qr < l || r < ql) return 0;
    if (ql <= l && r <= qr) return this.tree[node];
    this.push(node, l, r);
    const mid = (l + r) >> 1;
    return this.query(2 * node, l, mid, ql, qr) +
           this.query(2 * node + 1, mid + 1, r, ql, qr);
  }

  rangeUpdate(l, r, val) { this.update(1, 0, this.n - 1, l, r, val); }
  rangeQuery(l, r) { return this.query(1, 0, this.n - 1, l, r); }
}

function main(next) {
  const n = next(), q = next();
  const arr = Array.from({ length: n }, () => next());
  const st = new SegmentTree(arr);

  const out = [];
  for (let i = 0; i < q; i++) {
    const type = next();
    if (type === 1) {
      const l = next(), r = next(), val = next();
      st.rangeUpdate(l, r, val);
    } else {
      const l = next(), r = next();
      out.push(st.rangeQuery(l, r));
    }
  }
  console.log(out.join('\n'));
}
