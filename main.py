basic.show_string("Hello!")
basic.pause(100)
basic.clear_screen()
hand = 0
handp = 0
if input.button_is_pressed(Button.A):
    handp = 1
elif input.button_is_pressed(Button.B):
    handp = 2
elif input.is_gesture(Gesture.SHAKE):
    handp = 3
basic.pause(2000)
def on_gesture_shake():
    global hand 
    
    pass
input.on_gesture(Gesture.SHAKE, on_gesture_shake)