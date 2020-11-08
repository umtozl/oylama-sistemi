input.onButtonPressed(Button.A, function () {
    evet += 1
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    basic.showString("?")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("A:")
    basic.showString("" + (evet))
    basic.showString("B:")
    basic.showString("" + (hayir))
    if (evet > hayir) {
        basic.showString("Evet Kazandı")
    } else if (evet < hayir) {
        basic.showString("Hayır Kazandı")
    } else {
        basic.showString("Berabere")
    }
    evet = 0
    hayir = 0
    basic.showString("?")
})
input.onButtonPressed(Button.B, function () {
    hayir += 1
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    basic.showString("?")
})
let hayir = 0
let evet = 0
evet = 0
hayir = 0
basic.showString("A-Evet")
basic.pause(1000)
basic.showString("B-Hayır")
