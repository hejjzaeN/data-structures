class PriorityQueue {
    queue = [];

    insert (e, p) {
        this.queue.push({e, p});
    }

    extractMax () {
        let max = 0;
        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i].e > max) {
                max = this.queue[i].e;
            }
        }
        return max;
    }

    remove (e) {
        const i = this.queue.findIndex(el => el.e === e);
        if (i == -1) return;
        this.queue.splice(i, 1);
    }

    getMax () {
        let max = 0;
        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i].p > max) {
                max = this.queue[i].p;
            }
        }
        return max;
    }

    changePriority (e, p) {
        const i = this.queue.findIndex(el => el.e === e);
        if (i == -1) return;
        this.queue[i].p = p;
    }
}

const pQueue = new PriorityQueue();

pQueue.insert(100, 5);
pQueue.insert(240, 4);
pQueue.insert(99, 2);
pQueue.insert(66, 1);
pQueue.insert(709, 3);
console.log(pQueue.queue);
console.log(pQueue.getMax());
console.log(pQueue.remove(66));
console.log(pQueue.queue);
pQueue.changePriority(709, 1);
console.log(pQueue.queue);
console.log(pQueue.extractMax());
