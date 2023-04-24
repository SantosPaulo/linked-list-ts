import LinkedListContract from './interfaces/linked-list-contract';
import ListIterator from './iterator';
import LinkedListNode from './linked-list-node';
import { Nullable, PrinterFn } from './types/index.type';

export default class LinkedList<T extends any> extends ListIterator<T> implements LinkedListContract<T> {
    protected override _head!: LinkedListNode<T>;
    protected override _tail!: Nullable<LinkedListNode<T>>;
    protected override _length: number = 0;

    get head(): Nullable<LinkedListNode<T>> {
        return this._head;
    }

    get tail(): Nullable<LinkedListNode<T>> {
        return this._tail;
    }

    get size(): number {
        return this._length;
    }

    get isEmpty(): boolean {
        return this._length === 0;
    }

    constructor() {
        super();
    }

    add(el: T): void {
        const node: LinkedListNode<T> = new LinkedListNode(el, null);

        if (!this._length) {
            this._head = node;
            this._tail = node;
        } else {
            const prevTail: Nullable<LinkedListNode<T>> = this._tail;
            this._tail!.next = node;
            this._tail = prevTail;
        }

        this._tail = node;
        this._length++;
    }

    remove(el: any): void {
        let currNode: LinkedListNode<T> | null = this._head;
        let prevNode: LinkedListNode<T> | undefined;

        if (currNode?.element === el && currNode?.next) {
            this._head = currNode.next;
            return;
        }

        while (currNode?.element !== el && currNode.next) {
            prevNode = currNode;
            currNode = currNode.next;
        }

        if (prevNode && currNode?.next) {
            prevNode.next = currNode.next;
        }

        this._length--;
    }

    at(index: number): Nullable<LinkedListNode<T>> {
        let currNode: LinkedListNode<T> | null = this._head;
        let counter: number = 0;

        while (counter !== index && currNode) {
            currNode = currNode.next;
            counter++;
        }

        return currNode || null;
    }

    indexOf(el: T): number {
        let currNode: Nullable<LinkedListNode<T>> = this._head;
        let index: number = 0;
        let foundNode: boolean = false;

        if (!currNode.next) {
            return -1;
        }

        while (currNode && el !== currNode?.element) {
            if (el === currNode.element) {
                foundNode = true;
            }

            currNode = currNode.next;
            index++;
        }

        if (el === currNode?.element) {
            foundNode = true;
        }

        return foundNode ? index : -1;
    }

    print(printerFn?: PrinterFn): void {
        let log: any = console.log;

        if (printerFn) {
            log = printerFn;
        }

        let currNode: Nullable<LinkedListNode<T>> = this._head;

        while (currNode.next) {
            log(currNode.element);
            currNode = currNode?.next;
        }

        log(currNode.element);
    }
}
