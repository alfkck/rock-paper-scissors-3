let hand = 0
let handp = 0
if (input.buttonIsPressed(Button.A)) {
    handp = 1
} else if (input.buttonIsPressed(Button.B)) {
    handp = 2
} else if (input.isGesture(Gesture.Shake)) {
    handp = 3
}

basic.pause(2000)
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    hand = randint(1, 3)
    if (hand == handp) {
        basic.showIcon(IconNames.Circle)
    } else if (hand == 3) {
        if (handp == 1) {
            basic.showIcon(IconNames.Heart)
            } else {
            basic.showIcon(IconNames.Cross)
            }
            } else if (handp>>hand) {
        basic.showIcon(IconNames.Heart)
        } else {
            basic.showIcon(IconNames.Cross)
         }
         }
})