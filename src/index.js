module.exports = function toReadable (number) {
    if (number === 0) return 'zero';

    let result = '';

    const units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const dozen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const numbers = `${number}`.split('');

    console.log(numbers);

    if (numbers.length === 3) {
        result += `${units[+numbers[0] - 1]} hundred`;

        if (numbers[1] !== '0') {
            if (numbers[1] === '1') {
                result += ` ${dozen[+numbers[2]]}`;

                return result;
            }

            result += ` ${dozens[+numbers[1] - 2]}`;
        }

        if (numbers[2] !== '0') {
            result += ` ${units[+numbers[2] - 1]}`;
        }
    }

    if (numbers.length === 2) {
        if (numbers[0] !== '0') {
            if (numbers[0] === '1') {
                result += `${dozen[+numbers[1]]}`;

                return result;
            }

            result += `${dozens[+numbers[0] - 2]}`;
        }

        if (numbers[1] !== '0') {
            result += ` ${units[+numbers[1] - 1]}`;
        }
    }

    if (numbers.length === 1) {
        return `${units[+numbers[0] - 1]}`
    }


    return result;
}
