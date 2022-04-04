## Конвенртор

```javascript
const seconds = 1,
    secondsInMinute = seconds * 60,
    secondsInHour = secondsInMinute * 60,
    secondsInDay = secondsInHour * 24,
    secondsInYear = secondsInDay * 365,
    secondsInUnitList = { secondsInMinute, secondsInHour, secondsInDay, secondsInYear},
    daysInMonthsList = [31, 30, 31, 30, 31, 28, 31, 31, 30, 31, 30, 31]

const getDaysRemainder = (seconds, monthCount) => {
    let monthIndex = 0,
        daysInMounts = 0,
        daysFromSeconds = getIntUnit(seconds, "days")

    if (seconds) {

        for (let index = 0;index < monthCount;index++) {
            if (index % daysInMonthsList.length === 0) monthIndex = 0

            daysInMounts += daysInMonthsList[monthIndex]

            ++monthIndex
        }

    }

    return Math.abs(daysFromSeconds - daysInMounts)
}

const getSecondsInMonths = (monthCount) => {
    let monthIndex = 0,
        secondsSumInMonthList = 0

    if (monthCount) {

        Array(monthCount).fill('').forEach((_, index) => {
            if (index % daysInMonthsList.length === 0) monthIndex = 0

            const daysInMonth = daysInMonthsList[monthIndex],
                secondsOnMonth = daysInMonth * secondsInDay

            secondsSumInMonthList += secondsOnMonth

            ++monthIndex
        })

    }

    return secondsSumInMonthList
}

const getMonthsFromSeconds = (seconds) => {
    let monthIndex = 0,
        monthCount = 0

    if (seconds) {

        for (let index = 0;;index++) {
            if (index % daysInMonthsList.length === 0) monthIndex = 0

            const secondsInMonth = daysInMonthsList[monthIndex] * secondsInDay

            if (seconds >= secondsInMonth) {
                seconds -= secondsInMonth
                ++monthCount
            } else {
                break
            }

            ++monthIndex
        }


    }

    return monthCount
}

const getSecondsInUnitValue = (unitValue, unit) => {

    const unitSingularName = `${unit[0].toUpperCase()}${unit.slice(1,-1)}`,
        isMonthUnit = unitSingularName === 'Month',
        secondsInSelectedUnit = secondsInUnitList[`secondsIn${unitSingularName}`],
        secondsInSelectedUnitValue = isMonthUnit ? getSecondsInMonths(unitValue) : unitValue * secondsInSelectedUnit,
        isValidUnit = secondsInSelectedUnit || isMonthUnit

    if (isValidUnit) {
        return secondsInSelectedUnitValue
    } else {
        throw new Error(
            "select unit from list [minutes, hours, days, months, years]"
        );
    }
};

const getSecondsSumFromUnitList = (unitsList) => {
    let secondsSum = 0;

    Object.entries(unitsList).forEach(([unit, value]) => {
        const isSecondsUnit = unit === 'seconds'
        secondsSum += isSecondsUnit ? value : getSecondsInUnitValue(value, unit);
    });

    return secondsSum;
};

const getIntUnit = (seconds, unit) => {
    const minutes = seconds / secondsInMinute,
        hours = minutes / 60,
        days = hours / 24,
        months = getMonthsFromSeconds(seconds),
        years = days / 365,
        unitConvertFormulaList = { minutes, hours, days, months, years },
        selectedUnitFormula = unitConvertFormulaList[unit];

    if (selectedUnitFormula !== undefined) {
        return Math.floor(selectedUnitFormula);
    } else {
        throw new Error(
            "select unit from list [minutes, hours, days, months, years]"
        );
    }
};

const getUnitRemainder = (secondsSum, unit) => {

    const monthCount = getMonthsFromSeconds(secondsSum),
        seconds = secondsSum % secondsInMinute,
        minutes = getIntUnit(secondsSum, "minutes") % 60,
        hours = getIntUnit(secondsSum, "hours") % 24,
        days = getDaysRemainder(secondsSum, monthCount),
        months = monthCount % 12,
        unitRemainderList = { seconds, minutes, hours, days, months },
        selectedUnitRemainder = unitRemainderList[unit];

    if (selectedUnitRemainder !== undefined) {
        return Math.floor(selectedUnitRemainder);
    } else {
        throw new Error(
            "select unit from list [seconds, minutes, hours, days, months, years]"
        );
    }
};

const convertor = (unitsList, needFormat) => {
    const unitsListSumInSeconds = getSecondsSumFromUnitList(unitsList),
        result = { seconds: 0, minutes: 0, hours: 0, days: 0, months: 0, years: 0 };

    const secondsRemainder = getUnitRemainder(unitsListSumInSeconds, "seconds");

    switch (needFormat) {
        case "second":
            result.seconds = unitsListSumInSeconds;
            break;
        case "minute":
            result.minutes = getIntUnit(unitsListSumInSeconds, "minutes");
            result.seconds = secondsRemainder;
            break;
        case "hour":
            result.hours = getIntUnit(unitsListSumInSeconds, "hours");
            result.minutes = getUnitRemainder(unitsListSumInSeconds, "minutes");
            result.seconds = secondsRemainder;
            break;
        case "day":
            result.days = getIntUnit(unitsListSumInSeconds, "days");
            result.hours = getUnitRemainder(unitsListSumInSeconds, "hours");
            result.minutes = getUnitRemainder(unitsListSumInSeconds, "minutes");

            result.seconds = secondsRemainder;
            break;
        case "month":
            result.months = getIntUnit(unitsListSumInSeconds, "months");
            result.days = getUnitRemainder(unitsListSumInSeconds, "days");
            result.hours = getUnitRemainder(unitsListSumInSeconds, "hours");
            result.minutes = getUnitRemainder(unitsListSumInSeconds, "minutes");
            result.seconds = secondsRemainder;
            break;
        case "year":
            result.years = getIntUnit(unitsListSumInSeconds, "years");
            result.months = getUnitRemainder(unitsListSumInSeconds, "months");
            result.days = getUnitRemainder(unitsListSumInSeconds, "days");
            result.hours = getUnitRemainder(unitsListSumInSeconds, "hours");
            result.minutes = getUnitRemainder(unitsListSumInSeconds, "minutes");
            result.seconds = secondsRemainder;
            break;
    }

    return result;
};

const convertedDate = convertor({ days: 427 }, "month");

console.log(convertedDate); // 👉🏼 { seconds: 0, minutes: 0, hours: 0, days: 1, months: 14, years: 0 }
```

## Таймер

```javascript
const timer = (unitsList, callback, options = {}) => {
    const {callbackMs = 1000, convertUnit = 'year'} = options

    let unitsListSumInSeconds = getSecondsSumFromUnitList(unitsList),
        timerId


    (function () {

        timerId = setInterval(() => {
            unitsListSumInSeconds -= 1

            const convertedTime = convertor({seconds: unitsListSumInSeconds}, convertUnit); // 👉🏼 функция конвенртора выше

            callback(convertedTime)

            if (unitsListSumInSeconds === 0) {
                clearInterval(timerId)
            }
        }, callbackMs)
        
    })();
}

timer({seconds: 5},  (convertedTime) => {
    console.log(convertedTime); // 👉🏼 { seconds: 4, minutes: 0, hours: 0, days: 0, months: 0, years: 0 }
})
```

## Разница дат 

```javascript
const getDateDifference = (firstDate, secondDate) => {
    const firstDateMs = new Date(firstDate).getTime(),
        secondDateMs = new Date(secondDate).getTime(),
        dateMsDifference = firstDateMs > secondDateMs ? firstDateMs - secondDateMs : secondDateMs - firstDateMs


    return convertor({seconds: dateMsDifference / 1000}, 'year');
}

console.log(getDateDifference('2018', '2017')) // // 👉🏼 { seconds: 0, minutes: 0, hours: 0, days: 0, months: 0, years: 1 }
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**