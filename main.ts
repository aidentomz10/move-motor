input.onButtonPressed(Button.A, function () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P15, 30)
})
input.onButtonPressed(Button.AB, function () {
    ContinuousServo.turn_off_motor(DigitalPin.P15)
    ContinuousServo.turn_off_motor(DigitalPin.P8)
})
input.onButtonPressed(Button.B, function () {
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P8, 47)
})
