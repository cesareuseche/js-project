window.onload = () => {
   document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
   });
};

let generateExcuse = () => {

    let pronoun = ['A', 'The']
    let subject = ['cat','fish','snake', 'lion', 'shark', 'whale'];
    let action = ['took my', 'threw my', 'took a', 'stole my', 'hit my', 'ate my'];
    let possetion = ['homework', 'car', 'wallet', 'bag', 'money', 'phone'];
    let where = ['in downtown', 'in my house', 'at school', 'at the gas station'];

    let proIndx = Math.floor(Math.random() * pronoun.length);
    let subjIndx = Math.floor(Math.random() * subject.length);
    let actIndx = Math.floor(Math.random() * action.length);
    let possIndx = Math.floor(Math.random() * possetion.length);
    let whereIndx = Math.floor(Math.random() * where.length);


    return pronoun[proIndx] + ' ' + subject[subjIndx] + ' ' + action[actIndx] + ' ' + possetion[possIndx] + ' ' + where [whereIndx];
}