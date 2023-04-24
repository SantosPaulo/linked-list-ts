import { Nullable } from './types/index.type';

export default class LinkedListNode<T extends unknown> {
    private _el: T;
    private _next: Nullable<LinkedListNode<T>>;

    constructor(el: T, next: Nullable<LinkedListNode<T>> = null) {
        this._el = el;
        this._next = next;
    }

    set next(el: Nullable<LinkedListNode<T>>) {
        this._next = el;
    }

    get element(): T {
        return this._el;
    }

    get next(): Nullable<LinkedListNode<T>> {
        return this._next;
    }
}
