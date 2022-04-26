const $botones = document.querySelector("#miBtn");
const $display = document.querySelector(".display")

$display.textContent = "0";

let operandoNum = false; // esta variable es para que cuando se digite un operador la pantalla se limpie y el operador que en pantalla reflejado
let num1;
let operando;

const calcular = () => {
    $botones.addEventListener("click", e => {
        if (!$botones) return
        const el = e.target;
        const b = el.dataset;
        if (b.btn) {
            numero(b.btn);
        }
        else if (b.operador) {
            operador(el, b.operador);// se recibe el valor del num pulsado y el valor del operador
        }
        else if (b.resultado) {
            result(b.resultado);
            //console.log(b.resultado)
        }
    })
};

calcular();

function numero(a) {
    if ($display.textContent === "0" || operandoNum === true) { // aqui me aseguro de que el valor principal en pantalla sea 0
        $display.textContent = a // al pulsar en un número este se agrega a la pantalla
    } else {
        $display.textContent += a // aqui contateno cada número
    }
    operandoNum = false; // operando vuelve a false por que si no me permite concatenar los numeros despues de digitar el operador
}


function operador(el, operador) { // recibo los parametros de la linea 15
    operandoNum = true;
    num1 = Number($display.textContent) // recibo el primer valor y lo guardo
    operando = operador // recibo el valor del operador pulsado en pantalla
    $display.textContent = el.textContent // aqui cambio el valor en pantalla por el operador pulsado
}

function result(resultado) {
    const getResult = (num1, operando) => {
        const num2 = Number($display.textContent);
        console.log(num2);
        switch (operando) {
            case "suma":
                $display.textContent = num1 + num2;
                break;
            case "rest":
                $display.textContent = num1 - num2;
                break;
            case "multiplica":
                $display.textContent = num1 *+ num2;
                break;
            case "divide":
                $display.textContent = num1 / num2;
                break;

            default:
                break;
        }
    }
    if (resultado === "ac") {
        $display.textContent = "0";
        console.log("aqui");
    } else {
        getResult(num1, operando)
    }
}


