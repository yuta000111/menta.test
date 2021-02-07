export default function createDay() {
    let dayList = []
    const createOption = function(startNum, endNum) {
        for (let i = startNum; i <= endNum; i++) {
            dayList.push(i)
        }
    }
    createOption(1, 31);
    return dayList;
}