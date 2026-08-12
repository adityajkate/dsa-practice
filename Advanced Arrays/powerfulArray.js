'use strict';

const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let ptr = 0;

const n = input[ptr++];
const q = input[ptr++];

const a = new Int32Array(n);
let maxValue = 0;

for (let i = 0; i < n; i++) {
    a[i] = input[ptr++];
    if (a[i] > maxValue) maxValue = a[i];
}

const queries = new Array(q);

for (let i = 0; i < q; i++) {
    const l = input[ptr++] - 1;
    const r = input[ptr++] - 1;

    queries[i] = { l, r, id: i };
}

const block = Math.max(1, Math.floor(Math.sqrt(n)));

queries.sort((x, y) => {
    const bx = Math.floor(x.l / block);
    const by = Math.floor(y.l / block);

    if (bx !== by) return bx - by;
    return (bx & 1) ? y.r - x.r : x.r - y.r;
});

const freq = new Int32Array(maxValue + 1);
const ans = new Array(q);

let currentAnswer = 0;
let currentL = 0;
let currentR = -1;

function add(x) {
    const f = freq[x];
    currentAnswer += x * (2 * f + 1);
    freq[x] = f + 1;
}

function remove(x) {
    const f = freq[x];
    currentAnswer += x * (-2 * f + 1);
    freq[x] = f - 1;
}

for (const query of queries) {
    const targetL = query.l;
    const targetR = query.r;

    while (currentL > targetL) {
        currentL--;
        add(a[currentL]);
    }

    while (currentR < targetR) {
        currentR++;
        add(a[currentR]);
    }

    while (currentL < targetL) {
        remove(a[currentL]);
        currentL++;
    }

    while (currentR > targetR) {
        remove(a[currentR]);
        currentR--;
    }

    ans[query.id] = currentAnswer;
}

console.log(ans.join('\n'));
