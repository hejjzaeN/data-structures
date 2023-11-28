class Stack {
    stack = [];
    index = 0;

    push (key) {
        this.stack[this.index] = key;
        this.index += 1;
    }

    pop () {
        if (this.stack.length === 0) return;
        this.stack.length -= 1;
        this.index -= 1;
    }

    top () {
        if (this.stack.length === 0) return null;
        return this.stack[this.index - 1];
    }

    empty () {
        return this.index === 0;
    }
}

function isBalanced (str) {
    const filo = new Stack();
    const strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === '(' || strArr[i] === '[') {
            filo.push(strArr[i]);
        } else {
            if (filo.empty()) return false;
            if (
                (
                    filo.top() === '(' && strArr[i] !== ')'
                )
                ||
                (
                    filo.top() === '[' && strArr[i] !== ']'
                )
            ) return false;
            filo.pop();
        }
    }

    return filo.empty();
}

console.log(isBalanced('()[]([])'));
console.log(isBalanced(']['));
console.log(isBalanced('([]]()'));
console.log(isBalanced('([]'));
console.log(isBalanced('((([][()])))'));
