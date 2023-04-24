import LinkedListNode from './linked-list-node';
import { Nullable } from './types/index.type';

export default class ListIterator<T> {
    protected _head!: LinkedListNode<T>;
    protected _tail!: Nullable<LinkedListNode<T>>;
    protected _length: number = 0;

    *[Symbol.iterator]() {
        let currNode: Nullable<LinkedListNode<T>> = this._head;

        while (currNode.next) {
            yield currNode.element;
            currNode = currNode?.next;
        }

        yield currNode.element;
    }
}
