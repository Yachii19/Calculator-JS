let calculation = localStorage.getItem('calculation') || '';
        displayCalculation();

        function updateCalculation(value){
            calculation += value;
            localStorage.setItem('calculation', calculation);
            
            displayCalculation();
        }

        function displayCalculation(){
            document.querySelector('.js-live-update').innerHTML = calculation;
        }

        function evalCalculation(){
            eval(calculation);
            calculation = eval(calculation);
            localStorage.setItem('calculation', calculation);
            document.querySelector('.js-live-update').innerHTML = calculation;      
        }

        function clearCalculation(){
            calculation = ' ';
            console.log('Cleared.');
            localStorage.setItem('calculation', calculation);
            document.querySelector('.js-live-update').innerHTML = calculation;
        }