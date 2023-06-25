input.onGesture(Gesture.Shake, function () {
    bewegt_sich = true
    while (bewegt_sich) {
        basic.showIcon(IconNames.No)
        if (Math.abs(input.acceleration(Dimension.X)) < 50 || Math.abs(input.acceleration(Dimension.Y)) < 50 || Math.abs(input.acceleration(Dimension.Z)) < 50) {
            bewegt_sich = false
        }
    }
    basic.pause(100)
    music.play(music.stringPlayable("C5 - - - - - - - ", 200), music.PlaybackMode.InBackground)
    basic.showString("" + (Buchstabenwürfel()))
})
function Buchstabenwürfel () {
    zufallszahl = randint(0, 25)
    if (zufallszahl == 0) {
        buchstabe = "A"
    }
    if (zufallszahl == 1) {
        buchstabe = "B"
    }
    if (zufallszahl == 2) {
        buchstabe = "C"
    }
    if (zufallszahl == 3) {
        buchstabe = "D"
    }
    if (zufallszahl == 4) {
        buchstabe = "E"
    }
    if (zufallszahl == 5) {
        buchstabe = "F"
    }
    if (zufallszahl == 6) {
        buchstabe = "G"
    }
    if (zufallszahl == 7) {
        buchstabe = "H"
    }
    if (zufallszahl == 8) {
        buchstabe = "I"
    }
    if (zufallszahl == 9) {
        buchstabe = "J"
    }
    if (zufallszahl == 10) {
        buchstabe = "K"
    }
    if (zufallszahl == 11) {
        buchstabe = "L"
    }
    if (zufallszahl == 12) {
        buchstabe = "M"
    }
    if (zufallszahl == 13) {
        buchstabe = "N"
    }
    if (zufallszahl == 14) {
        buchstabe = "O"
    }
    if (zufallszahl == 15) {
        buchstabe = "P"
    }
    if (zufallszahl == 16) {
        buchstabe = "Q"
    }
    if (zufallszahl == 17) {
        buchstabe = "R"
    }
    if (zufallszahl == 18) {
        buchstabe = "S"
    }
    if (zufallszahl == 19) {
        buchstabe = "T"
    }
    if (zufallszahl == 20) {
        buchstabe = "U"
    }
    if (zufallszahl == 21) {
        buchstabe = "V"
    }
    if (zufallszahl == 22) {
        buchstabe = "W"
    }
    if (zufallszahl == 23) {
        buchstabe = "X"
    }
    if (zufallszahl == 24) {
        buchstabe = "Y"
    }
    if (zufallszahl == 25) {
        buchstabe = "Z"
    }
    return buchstabe
}
let zufallszahl = 0
let bewegt_sich = false
let buchstabe = ""
basic.showIcon(IconNames.Heart)
radio.setGroup(173)
buchstabe = "i"
bewegt_sich = false
basic.forever(function () {
    if (!(bewegt_sich)) {
        radio.sendString(buchstabe)
    }
    basic.pause(500)
})
