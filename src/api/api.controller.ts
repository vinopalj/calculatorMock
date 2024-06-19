import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {


    @Get('/calculator')
    getCalculator(): string {

        return `
        <div class="calculator">
    <h2>Splátková kalkulačka</h2>

    <div class="options">
        <div class="option">
            <input type="radio" id="inbank" name="bank" checked>
            <label for="inbank">inbank</label>
        </div>
        <div class="option">
            <input type="radio" id="homecredit" name="bank">
            <label for="homecredit">HOME CREDIT</label>
        </div>
    </div>

    <div class="result">
        <div>1 403 Kč x 10 měsíců <span>(Výhodná nabídka)</span></div>
        <div>472 Kč x 48 měsíců <span>(Nízká splátka)</span></div>
        <div>1 672 Kč x 12 měsíců <span>(Rychlé splacení)</span></div>
    </div>

    <div class="customize">
        <label for="monthlyPayment">Zvolte měsíční splátku:</label>
        <input type="range" id="monthlyPayment" name="monthlyPayment" min="0" max="2000" value="852">
        <input type="number" id="monthlyAmount" name="monthlyAmount" value="852"> Kč

        <label for="duration">Délka splácení:</label>
        <input type="number" id="duration" name="duration" value="24"> měsíců

        <label for="upfront">Kolik zaplatíte předem:</label>
        <input type="number" id="upfront" name="upfront" value="0"> Kč
    </div>

    <div class="details">
        <div>Výše úvěru: <span id="loanAmount">3 090 Kč</span></div>
        <div>Roční úroková sazba: <span id="interestRate">19,76 %</span></div>
        <div>RPSN: <span id="apr">21,7 %</span></div>
        <div>Celkově zaplacená částka: <span id="totalAmount">3 410 Kč</span></div>
    </div>

    <div class="note">
        Kalkulačka je orientační. Způsob platby na splátky si můžete nastavit v košíku.
    </div>

</div>
`

    }

}
