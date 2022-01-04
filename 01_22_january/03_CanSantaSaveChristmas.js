/*
Can Santa save Christmas?
Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

But he has only 24 hours left. Can he do it?

Your Task:
You will get an array as input with time durations as string in the following format: HH:MM:SS.
Each duration represents the time taken by Santa to deliver a present.
Determine whether he can do it in 24 hours or not.
In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .
 */

function determineTime(durations) {
    let result = durations.reduce(
        (total, el) => {
            el.split(":").forEach((elStr, indexStr) => total[indexStr] = Number(total[indexStr]) + Number(elStr));
            if (total[2] >= 60) {
                total[1] += Math.floor(total[2] / 60);
                total[2] = total[2] % 60;
            }
            if (total[1] >= 60) {
                total[0] += Math.floor(total[1] / 60);
                total[1] = total[1] % 60;
            }
            return total;
        },
        ["00", "00", "00"]
    );
    if (result[0] === 24 && result[1] === 0 && result[2] === 0) return true;
    return result[0] >= 24 > 0 ? false : true;
}