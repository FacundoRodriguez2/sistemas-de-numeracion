var result;
var aux = 0;


function conversion(){
  let tipouno = document.getElementById('desde').value;
  let tipodos = document.getElementById('hacia').value;
  let valor = document.getElementById('input').value;

  if(tipouno == tipodos){
    result = valor;
  }

        else if (tipouno == "bin"){ // ----------------------------------------------------------------------------------------------------------------------BINARIO A...

          valor = valor.split(""); // ------------------------------------------CONVIERTE BINARIO EN ARRAY


              if (tipodos == "dec"){ //----------------------------------------------------------DECIMAL

                result = 0;


                valor.reverse(); // --------------------------------------------DERECHA A IZQUIERDA


                for (var i = valor.length - 1; i >= 0; i--) {
                  aux = valor[i]; // -------------------------------------------TOMA VALOR DEL DIGITO PARA CONVERTIR DE STRING A INT
                  aux = Number(aux);
                  result = result + aux * Math.pow(2,i); // -------------------- sumaTotal = sumaTotal + digitoBinario * 2^N
                }
              }

              else if (tipodos == "oct") {     // -----------------------------------------------OCTAL

                result = "";

                valor.reverse(); // --------------------------------------------DERECHA A IZQUIERDA PARA ELEGIR ULTIMOS TRES DIGITOS
                aux = valor.length;
                let sumArray = aux % 3;

                if(sumArray!=0){
                  sumArray = 3 - sumArray;

                  for(i=0;i<sumArray;i++){ // ------------------------------------LONGITUD DEL ARRAY ES DIVISIBLE POR TRES
                  valor.push("0");
                  }
                }


                aux = valor.length / 3;

                for (let i=0;i<aux;i++)
                {
                    let arrayCalculo = valor.slice(0,3); // --------------------SEPARA ULTIMOS TRES DIGITOS EN UN ARRAY NUEVO



                    arrayCalculo.reverse(); // ---------------------------------EL GRUPO SELECCIONADO ESTA ORDENADO CORRECTAMENTE



                    arrayCalculo = arrayCalculo.join("");


                    switch(arrayCalculo){ // -----------------------------------CONVIERTE GRUPOS DE TRES A OCTAL

                      case "000":
                      result = "0" + result;
                      break;

                      case "001":
                      result = "1" + result;
                      break;

                      case "010":
                      result = "2" + result;
                      break;

                      case "011":
                      result = "3" + result;
                      break;

                      case "100":
                      result = "4" + result;
                      break;

                      case "101":
                      result = "5" + result;
                      break;

                      case "110":
                      result = "6" + result;
                      break;

                      default:
                      result =  "7" + result;
                      break;
                    }

                    valor.shift(); // ------------------------------------------ELIMINA PRIMEROS TRES DIGITOS DEL ARRAY
                    valor.shift();
                    valor.shift();


                  } // ---------------------------------------------------------FIN DEL FOR

              } // ----------------------------------------------------------------------------FIN DE OCTAL

              else { // ----------------------------------------------------------------------------------HEX

                result = "";
                valor.reverse(); // --------------------------------------------DERECHA A IZQUIERDA PARA ELEGIR ULTIMOS CUATRO DIGITOS

                aux = valor.length;
                let sumArray = aux % 4;

                if(sumArray!=0){
                  sumArray = 4 - sumArray;

                  for(i=0;i<sumArray;i++){ // ------------------------------------LONGITUD DEL ARRAY ES DIVISIBLE POR CUATRO
                  valor.push("0");
                  }
                }

                aux = valor.length / 4;

                for (let i=0;i<aux;i++)
                {
                    let arrayCalculo = valor.slice(0,4); // --------------------SEPARA ULTIMOS CUATRO DIGITOS EN UN ARRAY NUEVO



                    arrayCalculo.reverse(); // ---------------------------------EL GRUPO SELECCIONADO ESTA ORDENADO CORRECTAMENTE



                    arrayCalculo = arrayCalculo.join("");


                    switch(arrayCalculo){ // -----------------------------------CONVIERTE GRUPOS DE CUATRO A HEX

                      case "0000":
                      result = "0" + result;
                      break;

                      case "0001":
                      result = "1" + result;
                      break;

                      case "0010":
                      result = "2" + result;
                      break;

                      case "0011":
                      result = "3" + result;
                      break;

                      case "0100":
                      result = "4" + result;
                      break;

                      case "0101":
                      result = "5" + result;
                      break;

                      case "0110":
                      result = "6" + result;
                      break;

                      case "0111":
                      result =  "7" + result;
                      break;

                      case "1000":
                      result =  "8" + result;
                      break;

                      case "1001":
                      result =  "9" + result;
                      break;

                      case "1010":
                      result =  "A" + result;
                      break;

                      case "1011":
                      result =  "B" + result;
                      break;

                      case "1100":
                      result =  "C" + result;
                      break;

                      case "1101":
                      result =  "D" + result;
                      break;

                      case "1110":
                      result =  "E" + result;
                      break;

                      default:
                      result =  "F" + result;
                      break;
                    }

                    valor.shift(); // ------------------------------------------ELIMINA PRIMEROS CUATRO DIGITOS DEL ARRAY
                    valor.shift();
                    valor.shift();
                    valor.shift();


                  } // ---------------------------------------------------------FIN DEL FOR


              } // -----------------------------------------------------------------------FIN DE HEX


          } // --------------------------------------------------------------------------------------------------------------------------------------------------BINARIOS ^^^

          else if (tipouno == "oct") { // ------------------------------------------------------------------------------------------------------------------------OCTAL A...

            valor = valor.split("");

            if(tipodos == "bin" || tipodos == "hex"){ // -------------------------------------------------------------------------------BINARIO

              result = "";

              for (let i = 0; i < valor.length; i++) {

                switch (valor[i]) {

                  case "0":
                  result += "000";
                  break;

                  case "1":
                  result += "001";
                  break;

                  case "2":
                  result += "010";
                  break;

                  case "3":
                  result += "011";
                  break;

                  case "4":
                  result += "100";
                  break;

                  case "5":
                  result += "101";
                  break;

                  case "6":
                  result += "110";
                  break;

                  default:
                  result += "111";
                  break;
                }
              }

// ------------------------ NO EXISTE CONVERSION DE OCTAL A HEX, ENTONCES OCTAL->BINARIO->HEX -----------------------------------------------
              if(tipodos == "hex"){

                  valor = result.split("");
                  result="";
                  valor.reverse();

                  aux = valor.length;
                  let sumArray = aux % 4;

                  if(sumArray!=0){
                    sumArray = 4 - sumArray;

                    for(i=0;i<sumArray;i++){
                    valor.push("0");
                    }
                  }

                  aux = valor.length / 4;

                  for (let i=0;i<aux;i++)
                  {
                      let arrayCalculo = valor.slice(0,4);



                      arrayCalculo.reverse();



                      arrayCalculo = arrayCalculo.join("");

                      if(i == aux - 1 && arrayCalculo == "0000") // ------------BORRA CERO INNECESARIO EN LA ULTIMA ITERACION
                      {
                        break;
                      }


                      switch(arrayCalculo){

                        case "0000":
                        result = "0" + result;
                        break;

                        case "0001":
                        result = "1" + result;
                        break;

                        case "0010":
                        result = "2" + result;
                        break;

                        case "0011":
                        result = "3" + result;
                        break;

                        case "0100":
                        result = "4" + result;
                        break;

                        case "0101":
                        result = "5" + result;
                        break;

                        case "0110":
                        result = "6" + result;
                        break;

                        case "0111":
                        result =  "7" + result;
                        break;

                        case "1000":
                        result =  "8" + result;
                        break;

                        case "1001":
                        result =  "9" + result;
                        break;

                        case "1010":
                        result =  "A" + result;
                        break;

                        case "1011":
                        result =  "B" + result;
                        break;

                        case "1100":
                        result =  "C" + result;
                        break;

                        case "1101":
                        result =  "D" + result;
                        break;

                        case "1110":
                        result =  "E" + result;
                        break;

                        default:
                        result =  "F" + result;
                        break;
                      }

                      valor.shift();
                      valor.shift();
                      valor.shift();
                      valor.shift();


                    }


                }
// -----------------------------------------------------------------------------------------------------------------------------------------


            }
            else if (tipodos == "dec"){ // -------------------------------------------------------DECIMAL

            result = 0;

            valor.reverse();

              for (let i = valor.length - 1 ; i >= 0; i--) {

                valor[i] = Number(valor[i]);
                aux = Math.pow(8,i);
                result += valor[i] * aux;

              }

            }

          } // ---------------------------------------------------------------------------------------------------------------------------------------------------------OCTALES ^^^

          else if (tipouno == "dec") { // ------------------------------------------------------------------------------------------------------------------------------DECIMAL A...

            if(tipodos == "bin"){ // --------------------------------------------BINARIO

            aux=[];

            do{


              aux.push(valor % 2);
              valor = valor/2;
              valor = Math.floor(valor);


            }while(valor>0);

            aux.reverse();
            aux = aux.join("");
            result = aux;
            }

                else if(tipodos == "oct"){ //-----------------------------------OCTAL

                result = [];

                do{

                  aux = valor % 8;
                  valor = valor / 8;
                  valor=Math.floor(valor);
                  result.push(aux);

                }while(valor!=0);

              result.reverse();
              result = result.join("");
              }

              else{ //----------------------------------------------------------HEX
                result = "";
                aux = [];
                do{
                aux.push(valor % 16);
                valor = valor / 16;
                valor=Math.floor(valor);
                }while(valor!=0);

                for (let i = 0; i < aux.length; i++) {

                  switch(aux[i]){

                    case 0:
                    result = "0" + result;
                    break;

                    case 1:
                    result = "1" + result;
                    break;

                    case 2:
                    result = "2" + result;
                    break;

                    case 3:
                    result = "3" + result;
                    break;

                    case 4:
                    result = "4" + result;
                    break;

                    case 5:
                    result = "5" + result;
                    break;

                    case 6:
                    result = "6" + result;
                    break;

                    case 7:
                    result = "7" + result;
                    break;

                    case 8:
                    result = "8" + result;
                    break;

                    case 9:
                    result = "9" + result;
                    break;

                    case 10:
                    result = "A" + result;
                    break;

                    case 11:
                    result = "B" + result;
                    break;

                    case 12:
                    result = "C" + result;
                    break;

                    case 13:
                    result = "D" + result;
                    break;

                    case 14:
                    result = "E" + result;
                    break;

                    default:
                    result = "F" + result;
                    break;
                  }
                }

              }
          } // ---------------------------------------------------------------------------------------------------------------------------------------------DECIMALES ^^^

          else{ // -----------------------------------------------------------------------------------------------------------------------------------------HEXADECIMAL A...

            valor = valor.split("");

            if(tipodos == "bin" || tipodos == "oct") // --------------------------------------------BINARIO
            {

              result = "";


              for (let i = 0; i < valor.length; i++) {
                switch(valor[i]){

                  case "0":
                  result = result + "0000";
                  break;

                  case "1":
                  result = result + "0001";
                  break;

                  case "2":
                  result = result + "0010";
                  break;

                  case "3":
                  result = result + "0011";
                  break;

                  case "4":
                  result = result + "0100";
                  break;

                  case "5":
                  result = result + "0101";
                  break;

                  case "6":
                  result = result + "0110";
                  break;

                  case "7":
                  result = result + "0111";
                  break;

                  case "8":
                  result = result + "1000";
                  break;

                  case "9":
                  result = result + "1001";
                  break;

                  case "A":
                  result = result + "1010";
                  break;

                  case "B":
                  result = result + "1011";
                  break;

                  case "C":
                  result = result + "1100";
                  break;

                  case "D":
                  result = result + "1101";
                  break;

                  case "E":
                  result = result + "1110";
                  break;

                  default:
                  result = result + "1111";
                  break;
                }
              }
// -----------------------------------------------------------------------OCTAL NO EXISTE, CONVERSION HEX->BIN->OCT----------------------------------------------------------
              if(tipodos == "oct")
              {

                valor = result;

                result = "";

                valor = valor.split("");

                valor.reverse();
                aux = valor.length;
                let sumArray = aux % 3;

                if(sumArray!=0){
                  sumArray = 3 - sumArray;

                  for(i=0;i<sumArray;i++){
                  valor.push("0");
                  }
                }


                aux = valor.length / 3;

                for (let i=0;i<aux;i++)
                {
                    let arrayCalculo = valor.slice(0,3);



                    arrayCalculo.reverse();


                    arrayCalculo = arrayCalculo.join("");

                    if (i == aux-1 && arrayCalculo == "000"){
                      break;
                    }


                    switch(arrayCalculo){

                      case "000":
                      result = "0" + result;
                      break;

                      case "001":
                      result = "1" + result;
                      break;

                      case "010":
                      result = "2" + result;
                      break;

                      case "011":
                      result = "3" + result;
                      break;

                      case "100":
                      result = "4" + result;
                      break;

                      case "101":
                      result = "5" + result;
                      break;

                      case "110":
                      result = "6" + result;
                      break;

                      default:
                      result =  "7" + result;
                      break;
                    }

                    valor.shift();
                    valor.shift();
                    valor.shift();


                  }

              }
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            }
            else{ //------------------------------------------------------------DECIMAL

              result = 0;

              aux = 0;

              valor.reverse();

              for (let i = valor.length - 1; i >=0; i--) {
                switch(valor[i]){

                  case "A":
                  valor[i] = "10";
                  break;

                  case "B":
                  valor[i] = "11";
                  break;

                  case "C":
                  valor[i] = "12";
                  break;

                  case "D":
                  valor[i] = "13";
                  break;

                  case "E":
                  valor[i] = "14";
                  break;

                  case "F":
                  valor[i] = "15";
                  break;

                  default:
                  break;
                }

                valor[i] = Number(valor[i]);

                aux = Math.pow(16,i);

                result += valor[i] * aux;

              }

            }

          }


document.getElementById('resultado').innerHTML = result;

}
