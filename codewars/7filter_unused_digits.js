function unusedDigits(...args) {
    let digits = args.join('')

    return [0,1,2,3,4,5,6,7,8,9].filter(x=> !digits.includes(x)).join('')

} 