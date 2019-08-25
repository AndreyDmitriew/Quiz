function showModal(props) {

    var darkLayer = document.createElement('div'); 
    darkLayer.id = 'shadow'; 
    document.body.appendChild(darkLayer); 

    let modalWin;

    if(props.isWin) {
        modalWin = document.getElementById('popupWin');
        document.getElementById('RightAnswers').innerHTML = `right answers: ${props.correctAnswers}`;
        document.getElementById('FailAnswers').innerHTML = `fail answers: ${props.incorrectAnswers}`;
    } else {
        modalWin = document.getElementById('popupFail');
        document.getElementById('RightAnswers1').innerHTML = `right answers: ${props.correctAnswers}`;
        document.getElementById('FailAnswers1').innerHTML = `fail answers: ${props.incorrectAnswers}`;
    }
    console.log(document.getElementById('RightAnswers'));
    

    modalWin.style.display = 'block'; 

    darkLayer.onclick = function () {  
        darkLayer.parentNode.removeChild(darkLayer); 
        modalWin.style.display = 'none'; 
        return false;
    };
}

module.exports = showModal;