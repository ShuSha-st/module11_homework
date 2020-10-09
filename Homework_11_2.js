/* Задание 2.

Написать функцию, которая принимает на входе любое число (но не больше 1 000),
определяет, является ли оно простым, и выводит простое число или нет.
Если введено больше 1 000, то выводится сообщение, что данные неверны.
Обратите внимание на числа 0 и 1.
Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.
*/

function simplNum(numm){
    let flag = true;
    switch (numm) {
        case 0:
            return console.log('Введенное число равно 0');
            break;
        case 1:
            return console.log('Введенное число равно 1 - простое число');
            break;
        default:
            if (numm > 1000) {
                return console.log('Введено неверное число более 1000')
                break
            } else {
                for (let i = 2; i < numm; i++) {
                    if (numm % i == 0) {
                        flag = false
                        break
                    }}}
    }
    if ((flag == true) && (numm != 0) && (numm != 1)) {
        return console.log('Введенное число является простым')
    } else if (flag == false) {return console.log('Введенное число не является простым')}

}

let numm1 = 17;
simplNum(numm1)