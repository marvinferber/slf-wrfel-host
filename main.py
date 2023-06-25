def on_gesture_shake():
    global bewegt_sich
    bewegt_sich = True
    while bewegt_sich:
        basic.show_icon(IconNames.NO)
        if input.acceleration(Dimension.X) == 0 or input.acceleration(Dimension.Y) == 0 or input.acceleration(Dimension.Z) == 0:
            pass
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

bewegt_sich = False
basic.show_icon(IconNames.DUCK)

def on_forever():
    pass
basic.forever(on_forever)
