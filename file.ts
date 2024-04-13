// write file
// const data = 'I love Javascript'
// await Bun.write('output.txt', data)

// read file
const file = await Bun.file('output.txt')
console.log(await file.text())
