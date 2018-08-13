import { observable, action, computed } from "mobx";

class CalculatorStore {
    @observable value=null;
    @observable currentOperand=0;
    @observable displayValue='0';
    @observable operator=null;

    @action buttonClicked = (e, type) => {
        let clickedVal = e.target.value;
        if(type ==="operand")
        {
            if(this.value == null){
                this.value = Number(clickedVal);
                this.displayValue = clickedVal;
                this.currentOperand = clickedVal;
                return;
            }
            
            if(this.currentOperand != null){
                this.displayValue += clickedVal;
                this.currentOperand == String(this.displayValue);
            }

        }
        else if(type === "operator"){

        }
    }


}

const store = new CalculatorStore();
export default store;