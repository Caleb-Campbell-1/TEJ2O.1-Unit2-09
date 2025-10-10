/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Caleb Campbell
 * Created on: Oct 2025
 * This program shows an if statement
*/

// variables
let randomNumber: number = -1

basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

input.onGesture(Gesture.Shake, function() {
    randomNumber = randint(0, 2)
    basic.clearScreen()

    // if randomNumber == 0
    if (randomNumber == 0) {
    basic.showIcon(IconNames.SmallSquare)
    }
    
    // if randomNumber == 1
    if (randomNumber == 1) {
    basic.showIcon(IconNames.Chessboard)
    }

    // if randomNumber == 2
    if (randomNumber == 2) {
    basic.showIcon(IconNames.Scissors)    
    }

    // Pause to show you're redy again
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)

    // Adds 1 to score
    input.onButtonPressed(Button.A, function () {
    randomNumber = (randomNumber + 1)
    basic.clearScreen()
    }

    //input.onButtonPressed(Button.B, function () {
    //basic.showString('' + (randomNumber).toString())
    //}
   
})
