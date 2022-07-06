input.onButtonPressed(Button.A, function () {
    radio.sendString("heureux")
})
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    if (receivedString == "heureux") {
        basic.showIcon(IconNames.Happy)
    } else if (receivedString == "triste") {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showString(receivedString)
    }
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("triste")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("Coucou")
})
radio.setGroup(1)
