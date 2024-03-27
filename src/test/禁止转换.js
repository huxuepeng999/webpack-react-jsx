function test(value) {
    const result = parseInt(value, 16)
    return result
}

const a = test('0xAA')
console.log(a);