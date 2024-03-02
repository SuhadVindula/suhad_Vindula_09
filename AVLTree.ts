import AVLNode from "./AVLNode";

class AVLTree{
    private root:AVLNode | null;

    constructor (){
        this.root=null;
    }

    private getHeight(node: AVLNode | null):number{
        return node ? node.height:0;
    }
    private getBalancingFactor(node: AVLNode | null):number {
        return node ? this.getHeight(node.left)-this.getHeight(node.right):0;
    }

    private updateHeight (node : AVLNode | null ): 

}