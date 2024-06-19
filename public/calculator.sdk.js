//mock function


async function renderCalculator(data) {
    const response = await fetch(data.target, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if(response.ok) {
        const result = await response.json();
        if(document.querySelector(data.containerSelector)) {
            document.querySelector(data.containerSelector).innerHTML = result.html;
            const calculator = new Calculator(data);
            calculator.init();
        } else {
            console.error('Container not found');
        }
    } else {
        console.error('Error:', response.statusText);
    }
}





class Calculator {
    constructor(data) {
        this.container = data.containerSelector;
        this.callback = data.callback; // Save the callback for later use
        console.log(data);
    }

    init() {
        this.attachEvent();
    }

    attachEvent() {
        document.querySelector(this.container).addEventListener('click', (event) => {
            if(event.target.classList.contains('calculator-button')) {
                this.handleButtonClick(event.target);
            }
        });
    }

    handleButtonClick(target) {
        console.log('Button clicked', target);
        const responseSchema = {
            period: 12,
            downpayment: 1000
        }
        this.callback(responseSchema); // Use the saved callback
    }
}