class Queue {
    q = [];
    i = 0;

    pushBack (key) {
        this.q[this.i] = key;
        this.i += 1;
    }

    popFront () {
        if (this.i < 0) return;
        if (this.i === 0) return this.i[0];

        const first = this.i[0];

        for (let j = 0; j < this.i; j++) {
            this.q[j] = this.q[j+1];
        }

        this.q.length -= 1;

        return first;
    }

    empty () {
        return this.i === 0;
    }
}

const queue = new Queue();
queue.pushBack('Pavel');
queue.pushBack('Ivan');
queue.pushBack('Shams');

console.log(queue.q);
console.log(queue.popFront());
console.log(queue.q);
console.log(queue.popFront());
console.log(queue.q);
