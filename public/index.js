"use strict";
class TrianglCalculator extends HTMLElement {
    constructor(options = {}) {
        super();
        this.defaultResponse = {
            productCode: "InBankXYZ",
            downPayment: 200000,
            period: 12,
            creditAmount: 6000000,
            preferredInstallment: 825600
        };
        this.apiKey = options.apiKey || "";
        this.callback = options.callback || null;
        this.type = options.type || "detail"; // detail | cart
        this.products = options.products || [];
        this.price = options.price || 0;
    }
    connectedCallback() {
        this.updateDisplay();
        // Create a container for the React app
        const scriptReact = document.createElement('script');
        scriptReact.type = 'text/javascript';
        scriptReact.src = '/react-fe.js';
        this.appendChild(scriptReact);
        if (this.callback) {
            this.callback(this.defaultResponse); // call the callback with the current value
        }
    }
    updateDisplay() {
        this.innerHTML = `    <div id="root"></div>
    <h2>Response</h2>
    
    <pre>${JSON.stringify(this.defaultResponse, null, 2)}
    
    </pre>`;
    }
}
customElements.define('triangl-calculator', TrianglCalculator);
//# sourceMappingURL=index.js.map