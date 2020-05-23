function lastManStanding(N, M) {
    function createArray(arrayLength) {
        let people = []

        for (let i = 0; i < arrayLength; i++) {
            people[i] = 1 + i
        }

        return people
    }

    function removePeopleFromArray(array, skip) {
        let removedFromArray = array
        let lastIndex = 0
        let winner = 0
        let loser = 0
        let count = 1
        let i = 0

        console.log(removedFromArray)

        while (removedFromArray.length > 1) {
            if (lastIndex === skip) {
                loser = removedFromArray.splice(i,1)
                
                console.log(count + '   loser  ' + loser)

                lastIndex = 0
                count++

                if (i > removedFromArray.length - 1) {
                    i = 0
                }
                if (removedFromArray.length === 1) {
                    winner = removedFromArray
                }
            }else{
                i++
                if (i > removedFromArray.length - 1) {
                    i = 0
                }
                lastIndex++
            }
        }
        console.log(count + '   Winner  ' + winner)
    }

    removePeopleFromArray(createArray(N), M)
}

//console.log(lastManStanding(5, 3)) // [1, 2, 3, 4, 5], [1, 2, 3, 5], [1, 2, 5], [1, 2], [1]
//console.log(lastManStanding(3, 5)) // [1, 2, 3], [1, 2], [1]
console.log(lastManStanding(7, 12))
//console.log(lastManStanding(6, 12))
//console.log(lastManStanding(6, 2))
//console.log(lastManStanding(6, 13))
//console.log(lastManStanding(8, 8))
//console.log(lastManStanding(9, 9))

/*
Вариант 14.	В кръг са разположени N човека номерирани с числата от 1 до N. Започвайки от K-тия човек последователно от кръга се отстранява по един човек през M човека (прескачат се M човека, а M+1-вия се отстранява). Последният отстранен се нарича “победител”. Да се състави програма, чрез която да се извеждат последователно №-та на хората и срещу тях реда на отстраняването им. Отделно да се изведе № на “победителя”. За обработка и отпечатване на резултата да се използват функции.
*/