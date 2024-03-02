
class AVLNode {
    public marks: number;
    public left: AVLNode | null;
    public right: AVLNode | null;
    public height: number;

    constructor (value: number ){
        this.marks=value;
        this.height=1;
        this.left= null;
        this.right = null;

        
    }

}
export default AVLNode;

