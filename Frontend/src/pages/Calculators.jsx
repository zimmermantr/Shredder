export const InchToCm = (inches) => inches * 2.54;
export const LbsToKg = (lbs) => lbs / 2.2;


// normal = 0.8
// enduranceAthl = 1.3
// vegetarian = 1.4
// vegan = 1.7
// strengthTrain = 1.6

export const ProteinReq = (fitnessLevel, weight) => fitnessLevel * weight;  // kg


export const FluidReq = (age, weight) => {   // kg
    let fluid = 1500;
    const newWeight = weight - 20;

    if (weight<20){
        return '1500mL';
    }

    if (age>50){//  15ml/kg
        fluid += newWeight * 15;   //  15ml/kg + 1500ml
        return `${fluid}mL`;
    } else { // if less than 50yr 20ml/kg +1500ml
        fluid += newWeight * 20;
        return `${fluid}mL`;
    }
};

export const BMI = (height, weight) => weight / Math.pow((height / 100), 2); // cm & kg

export const KcalPerKg = (fitnessLevel, weight) => fitnessLevel * weight; // kg

    

