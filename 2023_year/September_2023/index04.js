class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert the First node
    insertFirstNode(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert Last node
    insertLastNode(data) {
        let node = new Node(data);
        let current;

        // If empty, make head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    // Insert at Index
    insertAtIndex(data, index) {

        // If index is out of range
        if (index > 0 && index > this.size) {
            return;
        }

        // If first index
        if (index === 0) {
            this.head = new Node(data, this.head);
            this.size++;
            return;
        }

        const node = new Node(data);
        let current, previous;

        // Set current to first
        current = this.head;

        let count = 0;

        while (count < index) {
            previous = current; // Node before index
            count++;
            current = current.next; // Node after index
        }

        node.next = current;
        previous.next = node;
        this.size++;
    }
    // Print list Data
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const l1 = new LinkedList();
l1.insertFirstNode(100)
l1.insertFirstNode(200);
l1.insertFirstNode(300);
l1.insertLastNode(400);
l1.insertAtIndex(500, 0);
l1.insertAtIndex(900, 2);
console.log(l1)
l1.printListData();