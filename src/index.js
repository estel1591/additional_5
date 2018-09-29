module.exports = function check(str, bracketsConfig) {
    let brackets = [];

    for (let i = 0, length = bracketsConfig.length; i < length; i++ ) {
        brackets.push(bracketsConfig[i].join(''));
    }
    
    for (let i = 0, length = brackets.length; i < length; i++ ) {
        let delPosition = str.indexOf(brackets[i]);
        if (delPosition > -1) {
            str =  str.slice(0, delPosition) + str.slice(delPosition+2);
            i = -1;
            delPosition = -1;
        }
    }  
    return str.length? false : true;

}

