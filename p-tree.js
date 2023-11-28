function decorator (method) {
    return function (...args) {
        if (!this.tree) throw new Error('Tree is empty');
        return method (...args);
    }
}

class PTree {
    constructor (tree) {
        this.tree = tree;
        this.tree.unshift(null); // to avoid 0 index
    }

    @decorator
    getParentValue (i) {
        return this.tree[i / 2] || 'No parent';
    }

    @decorator
    getLeftChildValue (i) {
        return this.tree[2 * i] || 'No left child';
    }

    @decorator
    getRightChildValue (i) {
        return this.tree[2 * i + 1] || 'No right child';
    }
}

const tree = new PTree([42, 29, 18, 14, 7, 18, 12, 11, 6]);
console.log(tree.getParentValue(2));
console.log(tree.getParentValue(6));
console.log(tree.getLeftChildValue(3));
console.log(tree.getLeftChildValue(6));
console.log(tree.getRightChildValue(3));
console.log(tree.getRightChildValue(6));
