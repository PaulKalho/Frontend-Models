//This describes a WHERE Condition
export class Condition {
    left_attr: string;
    operator: string;
    right_attr: string;

    constructor(left_attr:string, operator:string, right_attr:string) {
        this.left_attr = left_attr;
        this.operator = operator;
        this.right_attr = right_attr;
    }

    

}
