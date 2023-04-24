import LinkedListNode from '../linked-list-node';
import { Nullable, PrinterFn } from '../types/index.type';

export default interface LinkedListContract<T> {
    add(el: T): void;
    remove(el: any): void;
    at(index: number): Nullable<LinkedListNode<T>>;
    indexOf(el: T): number;
    print(printerFn?: PrinterFn): void;
}
