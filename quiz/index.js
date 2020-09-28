
var missing_Lyrics =[
            {
                question: "What is the missing word from this lyric ? This * is automatic,supersonic,hypnotic,funky fresh",
           
                   answers: {
                       a:'song',
                       b:'beat',
                       c:'dance'
                       
                       },
           
                       correctAnswer:'b'
            },
            {
           
               question:"What is the missing word from this lyric ? A * is a guy that thinks hes fly and is also known as a busta",
           
                   answers:{
                       a:'clown',
                       b:'bum',
                       c:'scrub'
                   },
           
                   correctAnswer:'c'
            },
            { question:"What is the missing word from this lyric ? Everything you own in the box to the *",
               
                   answers:{
                       a:'left',
                       b:'right',
                       c:'bin'
                   },
                   correctAnswer:'a'
            }
           ];
           var quizContainer = document.getElementById('songquiz');
           var resultsContainer = document.getElementById('answer-choice');
           var submitButton = document.getElementById('submit');
   
           generateQuiz(missing_Lyrics, quizContainer, resultsContainer, submitButton);
           
    function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

        
        function showQuestions(questions, quizContainer){
            var output=[];
            var answers;

            for(var i=0; i<questions.length; i++){


                answers =[];

                for(letter in questions[i].answers){

                answers.push(
                    '<label>'
                        + '<input type= "radio" name="question'+i+' " value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }


        quizContainer.innerHTML = output.join('');
        } 

        function showResults(questions, quizContainer, resultsContainer){
            
            // gather answer containers from our quiz
            var answerContainers = quizContainer.querySelectorAll('.answers');
            
            // keep track of user's answers
            var userAnswer = '';
            var numCorrect = 0;
            
            // for each question...
            for(var i=0; i<questions.length; i++){

                // find selected answer
                userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
                
                // if answer is correct
                if(userAnswer===questions[i].correctAnswer){
                    // add to the number of correct answers
                    numCorrect++;
                    
                    // color the answers green
                    answerContainers[i].style.color = 'lightgreen';
                }
                // if answer is wrong or blank
                else{
                    // color the answers red
                    answerContainers[i].style.color = 'red';
                }
            }

            // show number of correct answers out of total
            resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
        }
        showQuestions(questions, quizContainer);

        submitButton.onclick = function(){
            showResults(questions, quizContainer, resultsContainer);
        }

      
    }