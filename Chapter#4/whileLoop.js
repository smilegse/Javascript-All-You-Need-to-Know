
var isRunning = true

while (isRunning) {
    var rand = Math.floor(Math.random() * 10 + 1)

    if (rand === 9) {
        console.log('Winner! Winner! Winner!')
        isRunning = false
    } else {
        console.log('We have got: ' + rand)
    }

}