let input = document.getElementById('input');
let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');
let inputTypeValue, resultTypeValue;
input.addEventListener("keyup", noName);
inputType.addEventListener("change", noName);
resultType.addEventListener("change", noName);
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function noName() {

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if (inputTypeValue === "fcfa" && resultTypeValue === "cedi") {

        result.value = Number(input.value) * 0.011;
    } else if (inputTypeValue === "fcfa" && resultTypeValue === "naira") {


        result.value = Number(input.value) * 0.74;

    } else if (inputTypeValue === "fcfa" && resultTypeValue === "euro") {


        result.value = Number(input.value) * 0.0015;

    } else if (inputTypeValue === "fcfa" && resultTypeValue === "dollar") {


        result.value = Number(input.value) * 0.0019;

    } else if (inputTypeValue === "fcfa" && resultTypeValue === "livre") {


        result.value = Number(input.value) * 0.0014;

    } else if (inputTypeValue === "fcfa" && resultTypeValue === "fcfa") {
        //this is meter to meter formula 
        result.value = input.value
    }





    if (inputTypeValue === "naira" && resultTypeValue === "fcfa") {

        result.value = Number(input.value) * 1.14;
    } else if (inputTypeValue === "naira" && resultTypeValue === "cedi") {

        result.value = Number(input.value) * 0.015;
    } else if (inputTypeValue === "naira" && resultTypeValue === "dollar") {


        result.value = Number(input.value) * 0.0026;

    } else if (inputTypeValue === "naira" && resultTypeValue === "naira") {
        //this is kilometer to kilometer formula 
        result.value = input.value
    } else if (inputTypeValue === "naira" && resultTypeValue === "euro") {


        result.value = Number(input.value) * 0.0022;

    } else if (inputTypeValue === "naira" && resultTypeValue === "livre") {


        result.value = Number(input.value) * 0.0020;

    }



    if (inputTypeValue === "cedi" && resultTypeValue === "fcfa") {

        result.value = Number(input.value) * 91.83;
    } else if (inputTypeValue === "cedi" && resultTypeValue === "naira") {

        result.value = Number(input.value) * 64.82;

    } else if (inputTypeValue === "cedi" && resultTypeValue === "livre") {


        result.value = Number(input.value) * 0.13;

    } else if (inputTypeValue === "cedi" && resultTypeValue === "dollar") {


        result.value = Number(input.value) * 0.17;

    } else if (inputTypeValue === "cedi" && resultTypeValue === "euro") {


        result.value = Number(input.value) * 0.14;

    } else if (inputTypeValue === "cedi" && resultTypeValue === "cedi") {

        result.value = input.value
    }

    if (inputTypeValue === "euro" && resultTypeValue === "fcfa") {

        result.value = Number(input.value) * 653.87;
    } else if (inputTypeValue === "euro" && resultTypeValue === "naira") {

        result.value = Number(input.value) * 461.48;

    } else if (inputTypeValue === "euro" && resultTypeValue === "livre") {


        result.value = Number(input.value) * 0.90;

    } else if (inputTypeValue === "euro" && resultTypeValue === "dollar") {


        result.value = Number(input.value) * 1.21;

    } else if (inputTypeValue === "euro" && resultTypeValue === "cedi") {


        result.value = Number(input.value) * 7.08;

    } else if (inputTypeValue === "euro" && resultTypeValue === "euro") {

        result.value = input.value
    }



    if (inputTypeValue === "dollar" && resultTypeValue === "fcfa") {

        result.value = Number(input.value) * 539.07;
    } else if (inputTypeValue === "dollar" && resultTypeValue === "naira") {

        result.value = Number(input.value) * 380.5;

    } else if (inputTypeValue === "dollar" && resultTypeValue === "livre") {


        result.value = Number(input.value) * 0.75;

    } else if (inputTypeValue === "dollar" && resultTypeValue === "cedi") {


        result.value = Number(input.value) * 5.84;

    } else if (inputTypeValue === "dollar" && resultTypeValue === "euro") {


        result.value = Number(input.value) * 0.82;

    } else if (inputTypeValue === "dollar" && resultTypeValue === "dollar") {

        result.value = input.value
    }




    if (inputTypeValue === "livre" && resultTypeValue === "fcfa") {

        result.value = Number(input.value) * 723.47;
    } else if (inputTypeValue === "livre" && resultTypeValue === "naira") {

        result.value = Number(input.value) * 510.65;

    } else if (inputTypeValue === "livre" && resultTypeValue === "cedi") {


        result.value = Number(input.value) * 7.84;

    } else if (inputTypeValue === "livre" && resultTypeValue === "dollar") {


        result.value = Number(input.value) * 1.34;

    } else if (inputTypeValue === "livre" && resultTypeValue === "euro") {


        result.value = Number(input.value) * 1.11;

    } else if (inputTypeValue === "livre" && resultTypeValue === "livre") {

        result.value = input.value
    }

}