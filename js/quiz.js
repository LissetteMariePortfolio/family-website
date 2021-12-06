//Source of quiz: https://www.sitepoint.com/simple-javascript-quiz/
(function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            `
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'green';
          answerContainers[questionNumber].style.fontWeight = 'bold';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
          answerContainers[questionNumber].style.textDecoration = 'underline';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `You answered ${numCorrect} out of ${myQuestions.length} like a product mananger would!`;
    }
  
    
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
        question: "1. Who are you in a group project?",
        answers:{
            a:"The group leader who came up with the project idea and a plan to achieve it but ultimately becomes the person tracking people down to get them to work on their part",
            b:"The person who plans out how the project idea should be executed but eventually the plan falls apart anyway",
            c:"'Just tell me what to do and I'll get it done but I'll do it with my unique *flavor*'",
            d:"The person telling those guys how to get their work done while secretly judging them for not doing things my way ^",
            e:"The person who tests the project to make sure everything is as perfect as possible and nitpicking everything",
            f:"The person doing all of the research for the project with half of that research getting ignored because it doesn't gel with the project *vision*",
            g:"The person gathering all of the supplies, making phone calls, and doing all of the negotiations necessary for things to run smoothly and being blamed when dome logistical issue occurs"
    
    
    
        },
        correctAnswer: "a"
    
        },
        {
            question: "2. What is your favorite software to use?",
            answers:{
                a:"Figma / Adobe XD, I love struggling with a GUI version of CSS!",
                b:"Trello, I love constantly being reminded of how behind everything is!",
                c:"Java, I live on Stack OverFlow! Python? I don't know her.",
                d:"Building scripts that automate testing and other things",
                e:"I love learning different technologies enough I can help others when they are stuck",
                f:"UserTesting, I love trying to make sense of chaotic user data",
                g:"Solve one issue then delegate the rest"
        
            },
            correctAnswer: "b"
        
            },
            {
                question: "3. What is your automatic response when trying to solve a problem?",
                answers:{
                    a:"An hour plus brainstorming session",
                    b:"Say 'I can handle it!' then proceed to struggle to struggle to juggle all of the problems which need solving",
                    c:"Slap together a solution, then fail to be able to explain what I did and why when asked a week later",
                    d:"Immediately alert the developer they need to solve this peoblem and remind them of the other also very crucial problems needing to be solved",
                    e:"Suggest whoever is having the problem refer to the company resources that should answer this problem",
                    f:"LET'S HEAVILY RESEARCH A SOLUTION!",
                    g:"Business Intellgence Tools. I love turning abstract data into slightly less abstract insights!"
            
            
            
                },
                correctAnswer: "b"
            
                },
                {
                    question: "4. What is your best quality?",
                    answers:{
                        a:"My communication skills, just don't have 100 people emailing me at once or you might need to email me multiple times",
                        b:"I am a computer whiz, but most of my time is spent getting my computer to cooperate",
                        c:"I'm a research expert, but am never satisfied with the crediility of the sources I find",
                        d:"I'm great at analyzing data,but don't collect as much qualitiative data as I probably should",
                        e:"I'm great at creating and executing marketing plans , I'm constantly needing to convince others to go along with my vision though",
                        f:"I'm great at figuring out who is best for what task.",
                        g:"I'm best at figuring out the best strategy for completing a project. I just need to figure out what to do when things inevitably go wrong"
                
                
                
                    },
                    correctAnswer: "g"
                
                    },
                    {
                        question: "5. How do you feel about creating the stories for how products will be used and solve the customers problems?",
                        answers:{
                            a:"Megh, we don't need that, the engineer will figure out how to make it happen",
                            b:"Where are the requirements?? There must be a story for every requirement!",
                            c:"I'm not creative, just don't overwhelm me with too much work",
                            d:"I just hope the developers stick to the story or I'll nitpick it like crazy",
                            e:"I like figuring out what stories should stay and which should go and improving the stories we keep.",
                            f:"I absolutely love not just making these stories but obsessing over building them up!",
                            g:"Um, this doesn't require talking to people, right?"
                    
                        },
                        correctAnswer: "e"
                    
                        },
                        {
                            question: "6. If you made an app, what would it be?",
                            answers:{
                                a:"Meme editor",
                                b:"Video Editting app",
                                c:"An app that grabs data in real time",
                                d:"Nah, just make the darn app work well on Android and an iPhone",
                                e:"A feature that helps people save money somehow",
                                f:"An app that improves the loading times of other apps",
                                g:"Ann app that builds up people's self esteem"
                        
                            },
                            correctAnswer: "c"
                        
                            },
                            {
                                question: "7. What is the worst thing that can happen during a project?",
                                answers:{
                                    a:"Group members loosing motivation",
                                    b:"Getting the incorrect resources",
                                    c:"The deadline suddenly being moved up drastically",
                                    d:"Not meeting stakeholder metrics",
                                    e:"Everyone only giving 50 percent effort on their work",
                                    f:"The design I came up with being rejected",
                                    g:"People pushing an idea that won't do well on the market"
                            
                                },
                                correctAnswer: "d"
                            
                                },
                                {
                                    question: "8. What are you an expert on?",
                                    answers:{
                                        a:"Cooking",
                                        b:"Making TikTok Videos",
                                        c:"Finances / Stock Market",
                                        d:"Designing costumes",
                                        e:"I'm good with kids, just give me tablets and chargers",
                                        f:"Learning things quickly",
                                        g:"Psychology"
                                
                                    },
                                    correctAnswer: "e"
                                
                                    },
                                    {
                                        question: "9. What is the best advertising strategy?",
                                        answers:{
                                            a:"Have the biggest, most appealing bilboard that people find relatable",
                                            b:"Make appealing newsletters to form bonds with the customers",
                                            c:"Make product placement deals with as many movies / TV shows as possible",
                                            d:"Point out the features our product has that others don't",
                                            e:"Create a lovable mascot, it worked for Geico",
                                            f:"Let's just make our software better to increase retention",
                                            g:"We need to understand our customers and make a campaign that appeals to them best!"
                                    
                                        },
                                        correctAnswer: "g"
                                    
                                        }
    
    ];
  
    // Kick things off
    buildQuiz();
  
  
    
  
    // Event listener
    submitButton.addEventListener('click', showResults);
    
  })();