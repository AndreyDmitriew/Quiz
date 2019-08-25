const quizList = require('./quizList');
const mixArray = require('./mixArray');
const Manager = require('./Manager')


let mixedQuizList = mixArray(quizList);
mixedQuizList.forEach(current => {
    current.answers = mixArray(current.answers);
});


let man =  new Manager({quizList: mixedQuizList});

man.setQuestion();




