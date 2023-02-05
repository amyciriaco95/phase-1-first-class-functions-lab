// Code your solution in this file!

const returnFirstTwoDrivers = function(firstTwoDrivers) {
    return firstTwoDrivers.slice(0,2);
}

const returnLastTwoDrivers = function(lastTwoDrivers) {
    return lastTwoDrivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fare) {
    return function(amount) {
        return fare * amount;
    }
}

const fareDoubler = function (createFareMultiplier) {
    return createFareMultiplier * 2;
}

const fareTripler = function (createFareTripler) {
    return createFareTripler * 3;
}

const selectDifferentDrivers = function(arrayOfDrivers, drivers) {
    return drivers(arrayOfDrivers);
}