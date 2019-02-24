
module.exports = function(LIST_PRICE,NET_YIELD,RENT,MARKET_VALUE,YEAR,REHAB,HOA,F,TAX) {
    
    if(YEAR<2016){
        TURN_COST = 125
    }else{
        TURN_COST = 105
    }

    if(F =='' && HOA == 0){
        HOA = 0
    }else if(F.charAt(0) == 'M'){
        HOA = HOA*4
    }else if(F.charAt(0) == 'A' && HOA!== 0){
        HOA = HOA
    }

    if(TAX==undefined){
        TAX = 0.01 * LIST_PRICE + 200
    }
    
    var OFFER_PRICE1 = MARKET_VALUE - 50 - REHAB - RENT*.25 - 1100;
    var MANAGEMENT_FEE = (RENT*12)*(1-0.0726)*0.0625+0.75*RENT/3+0.5*RENT/3;
    var INSURANCE = 338.2;
    var SQFT_ADJUSTMENT = RENT*.0726*12;
    var YEARLY_AJUSTMENT = TAX+HOA+INSURANCE+MANAGEMENT_FEE+TURN_COST*12+SQFT_ADJUSTMENT;
    var OFFER_PRICE2 =((RENT*12-YEARLY_AJUSTMENT)/NET_YIELD) - REHAB - RENT*.25 - 1100;
    var OFFER_PRICE = Math.min(OFFER_PRICE1,OFFER_PRICE2)
    var OTL = OFFER_PRICE/LIST_PRICE
    return OTL.toPrecision(4)*100;
}
    