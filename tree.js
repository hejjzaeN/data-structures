class Tree {
    tree = [];
    index = 0;

    constructor (data, parent, child) {
        this.tree[index].data = data;
        this.tree[index].parent = parent;
        this.tree[index].child = child;
        index += 1;
    }
};

const A = new Tree('A', null, ['B', 'C']);
const B = new Tree('B', 'A', ['D', 'E']);
const С = new Tree('C', 'A', ['F', 'G']);
const D = new Tree('D', 'B', []);
const E = new Tree('E', 'B', []);
const F = new Tree('F', 'C', []);
const G = new Tree('G', 'C', []);

function printTree (root) {
    console.log(root);
    root.child.forEach(e => {
        console.log(e.data);
    });
};

printTree(A);
