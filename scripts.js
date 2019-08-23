function ArrOfInfo (id, question, answer1, answer2, rightAnswer) {
    this.id = id;
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.rightAnswer = rightAnswer;
};


const arrInfo =   [ new ArrOfInfo (0, 'Кто автор строк? «Здоровью моему полезен русской холод»', 'С.А.Есенин', 'А.С.Пушкин' , 'А.С.Пушкин'),  
                    new ArrOfInfo (1, 'Как звали маму Л.Н.Толстого?', 'Мария', 'Анна' , 'Мария'),
                    new ArrOfInfo (2, 'Как звали детей императрицы Екатерины II Великой?', 'Алексей и Анна', 'Павел и Анна' , 'Павел и Анна'),
                    new ArrOfInfo (3, 'Какая фамилия была у Петра I?', 'Романов' , 'Елисев', 'Романов'),
                    new ArrOfInfo (4, 'В какой время сутки короче ?', 'Одинаково' , 'Зимой', 'Одинаково'),
                    new ArrOfInfo (5, 'Из семян какого дерева делают шоколад ?', 'Ель' , 'Какао', 'Какао'),
                  ];



function randomNum(arg1, arg2) {                                                          
    let my_number = Math.ceil(Math.random() * (arg1 - arg2) + arg2);                    
    return my_number;                                                            
};                
let randomNumId = randomNum(0, 5);  
console.log(randomNumId)


function render () {
    document.querySelector('.question').innerHTML = "Question: " + arrInfo.find((item) => item.id === randomNumId).question;
    document.querySelector('.firstAnswer').innerHTML = "1 Answer: " + arrInfo.find((item) => item.id === randomNumId).answer1;
    document.querySelector('.secondAnswer').innerHTML = "2 Answer: " + arrInfo.find((item) => item.id === randomNumId).answer2;
};
render();


console.log( document.querySelector('.secondAnswer').innerHTML = "RightAnswer: " + arrInfo.find((item) => item.id === randomNumId).rightAnswer );

    

document.getElementById('firstAnswer').onclick = function() {
    let correctAnswer = arrInfo.find((item) => item.id === randomNumId).rightAnswer
    let currentAnswer = arrInfo.find((item) => item.id === randomNumId).answer1

    if (correctAnswer === currentAnswer) {
        alert('Good!');
    } else {
        alert('Wrond!')
    }
};


document.getElementById('secondAnswer').onclick = function() {
    let correctAnswer = arrInfo.find((item) => item.id === randomNumId).rightAnswer
    let currentAnswer = arrInfo.find((item) => item.id === randomNumId).answer2

    if (correctAnswer === currentAnswer) {
        alert('Good!')
    } else {
        alert('Wrond!')
    }
};
