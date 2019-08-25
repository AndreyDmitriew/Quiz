const showModal = require('./showModal');

class Manager {
    constructor(props) {
        this.quizList = props.quizList;
        this.currentQuestionNumber = 0;
        this.currentQuestion;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        document.getElementById('firstAnswer').addEventListener("click", this.setHandleClick(0));
        document.getElementById('secondAnswer').addEventListener("click", this.setHandleClick(1));
    }

    setQuestion() {
        this.currentQuestion = this.quizList[this.currentQuestionNumber];

        let question =  document.getElementById('question');
        question.innerHTML = this.quizList[this.currentQuestionNumber].question;
        
        let firstButton = document.getElementById('firstAnswer');
        firstButton.innerHTML = this.quizList[this.currentQuestionNumber].answers[0].text;
        
        let secondButton = document.getElementById('secondAnswer');
        secondButton.innerHTML = this.quizList[this.currentQuestionNumber].answers[1].text;
    }

    setHandleClick(i) {
        return () => {
            if(this.currentQuestion.answers[i].isCorrect) {
                console.log("correct");
                this.correctAnswers++;
            } else {
                console.log("incorrect");
                this.incorrectAnswers++;
            }
            if(this.currentQuestionNumber === this.quizList.length - 1 ) {
                console.log("end");
                this.handleEnd();
                return;
            }
            this.currentQuestionNumber++;
            this.setQuestion(this.currentQuestionNumber);
        }
    }

    handleEnd() {
        showModal({
            isWin: this.correctAnswers > this.incorrectAnswers,
            correctAnswers: this.correctAnswers,
            incorrectAnswers: this.incorrectAnswers
        });
    }
}

module.exports = Manager;