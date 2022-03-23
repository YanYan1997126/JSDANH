class Caculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation= undefined

    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)

    }
    appendNumber(number){
        if (number ==='.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString()+number.toString()
    }
    chooseOperation(operation){
        if (this.currentOperand === '') return
        if (this.previousOperand !== ''){
            this.comppute()
        }
        this.operation =operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''


    }
    comppute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+':
                computation = prev+current
                break
            case '-':
                computation = prev-current
                break
            case '/':
                computation = prev/current
                break
            case '*':
                computation = prev*current
                break
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''

    }
    updateDisplay(){
    this.currentOperandTextElement.innerText = this.currentOperand
    this.previousOperandTextElement.innerText = this.previousOperand
    }

}





const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-allClear]')
const deleteButton = document.querySelector('[data-delete]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const caculator = new Caculator(previousOperandTextElement,currentOperandTextElement)
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        caculator.appendNumber(button.innerText)
        caculator.updateDisplay()
    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        caculator.chooseOperation(button.innerText)
        caculator.updateDisplay()
    })
})
    equalsButton.addEventListener('click', button => {
        caculator.comppute()
        caculator.updateDisplay()
    })
    allClearButton.addEventListener('click', button => {
        caculator.clear()
        caculator.updateDisplay()
    })
    deleteButton.addEventListener('click', button => {
        caculator.delete()
        caculator.updateDisplay()
    })
