var selectChoice;
(function (selectChoice) {
    selectChoice[selectChoice["AISLE"] = 0] = "AISLE";
    selectChoice[selectChoice["MIDDLE"] = 1] = "MIDDLE";
    selectChoice[selectChoice["WINDOW"] = 2] = "WINDOW";
    selectChoice[selectChoice["FOURTH"] = 3] = "FOURTH";
})(selectChoice || (selectChoice = {}));
var hcSeat = selectChoice.FOURTH;
