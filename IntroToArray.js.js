var myArray=[,,]  //Exercises 1

var Array =[1, 2, 3, 4 ,5, 6, 7 ,'The quick brown fox jumped over the lazy dog' , true, false, true]// Exercies 3

function emptyArray(){
    var emptyArray=[]
return emptyArray
}   //Exercie 4

function numbersArray(){
    var numbersArray=[1,2,3,4,5]
return numbersArray
}   // Exercie 5

function booleansArray(){
    var booleansArray=[true,true,true]
return booleansArray
} //Exercie 6

function stringsArray(){
    var stringsArray=['Aziz','Belhadj']
    return stringsArray
}  //Exercie 7

function arrayLength(array){
    return array.length
} //Exercies 8

function firstElement(array){
    return array[1]
} //Exercis 9

function lastElement(array){
    return array[array.length-1]
}

function getNthElement(array, number){
    return array[number]
} 

function push(array,element){
    array.push(element)
    return array
}

function pop(array){
    array.pop()
    return array
    }

    function unshift(array, element){
        array.unshift(element)
            return array
        }

        function shift(array){
            array.shift()   
           return array
           }

           function reassignLast(array, element){
            array.push(element)
            return array
        }

        function reassignNthElement(array, index, element){
            array[index]=(element)
                return array
        }

        function removeElement(array, index){
            array.pop(index)
        return array
        }

        function concatArrays(array1 , array2){
            var x=array1.concat(array2)
            return x 
            }

            function concatThreeArrays(array1,array2,array3){
                var x=array1.concat(array2 , array3)
                return x
            }



