class Node {

    constructor(d) {

     this.data = d;

     this.left = null;

     this.right = null;

    }

   }

class BinarySearchTree {

    constructor() {

     this.root = null;

    }



    inorder() {

     this.inorderUtil(this.root);

    }

 

    inorderUtil(node) {

     if (node == null) {

      return;

     }

	 this.inorderUtil(node.left);

     console.log(node.data + " ");

     this.inorderUtil(node.right);

    }

 storeInorderUtil(node, list) {

     if (node == null) {

      return list;

     }



     this.storeInorderUtil(node.left, list);



     list.push(node.data);

     this.storeInorderUtil(node.right, list);

 

     return list;

    }

storeInorder(node) {

     var list1 = [];

     var list2 = this.storeInorderUtil(node, list1);

     return list2;

    }

 

    // Method that merges two ArrayLists into one.

    merge(list1, list2, m, n) {

     // list3 will contain the merge of list1 and list2

     var list3 = [];

     var i = 0;

     var j = 0;

 

     //Traversing through both ArrayLists

     while (i < m && j < n) {

      // Smaller one goes into list3

      if (list1[i] < list2[j]) {

       list3.push(list1[i]);

       i++;

      } else {

       list3.push(list2[j]);

       j++;

      }

     }

 

     // Adds the remaining elements of list1 into list3

     while (i < m) {

      list3.push(list1[i]);

      i++;

     }

 

     // Adds the remaining elements of list2 into list3

     while (j < n) {

      list3.push(list2[j]);

      j++;

     }

     return list3;

    }

 

    // Method that converts an ArrayList to a BST

    ALtoBST(list, start, end) {

     // Base case

     if (start > end) {

      return null;

     }

 

     // Get the middle element and make it root

     var mid = parseInt((start + end) / 2);

     var node = new Node(list[mid]);

 

     /* Recursively construct the left subtree and make it

    left child of root */

     node.left = this.ALtoBST(list, start, mid - 1);

 

     /* Recursively construct the right subtree and make it

    right child of root */

     node.right = this.ALtoBST(list, mid + 1, end);

 

     return node;

    }

 

    // Method that merges two trees into a single one.

    mergeTrees(node1, node2) {

     //Stores Inorder of tree1 to list1

     var list1 = this.storeInorder(node1);

 

     //Stores Inorder of tree2 to list2

     var list2 = this.storeInorder(node2);

 

     // Merges both list1 and list2 into list3

     var list3 =

     this.merge(list1, list2, list1.length, list2.length);

 

     //Eventually converts the merged list into resultant BST

     var node = this.ALtoBST(list3, 0, list3.length - 1);

     return node;

    }

   }
