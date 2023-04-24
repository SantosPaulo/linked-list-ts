import LinkedList from './linked-list';

const list = new LinkedList();

list.add(10);
list.add(20);
list.add(30);

list.remove(20);

console.log('Index of 30: ', list.indexOf(30), '\n');

function myPrinter(data: any): void {
    console.group('Custom printer');
    console.log('> ', data);
    console.groupEnd();
}

list.print(<any>myPrinter);

console.log('\nUsing iterator:');

for (const iterator of list) {
    console.log(iterator);
}
