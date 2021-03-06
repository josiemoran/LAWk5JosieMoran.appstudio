let loopIterations = false 

i = 0 

while (loopIterations == false) {
    console.log(`This is iteration ${[i]}.`)
    i++
    loopIterations = confirm("Done?")
}
