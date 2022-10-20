var collision = false;
function Run(){
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var words = ["SEAL","CAT","GOAL","RING","SONG"]
    const directions = ["up","upright","right","downright","down","downleft","left","upleft","up"]
    const possitions = ["topleft","topright","bottomleft","bottomright"]
    const topleftpossition = [0,1,2,3,9,10,11,12,18,19,20,21,27,28,29,30]
    const toprightpossition = [5,6,7,8,14,15,16,17,23,24,25,26,32,33,34,35]
    const bottomleftpossition = [45,46,47,48,49,54,55,56,57,63,64,65,66,72,73,74,75]
    const bottomrightpossition = [50,51,52,53,59,60,61,62,68,69,70,71,77,78,79,80]
    let points = 0;
    const picked = []
    
    var wordsInTable = {
        word1 : { wordname: "",worddirection: "",wordposition:"",startdiv:"",endiv:""},
        word2 : { wordname: "",worddirection: "",wordposition:"",startdiv:"",endiv:""},
        word3 : { wordname: "",worddirection: "",wordposition:"",startdiv:"",endiv:""},
        word4 : { wordname: "",worddirection: "",wordposition:"",startdiv:"",endiv:""},
        word5 : { wordname: "",worddirection: "",wordposition:"",startdiv:"",endiv:""},
    }

    function highlight(){
        let tap =0;
        let left =0;
        document.addEventListener('mousedown', function handleClick(event) {
            for (let i = 0; i < 80; i++) {
                const children = document.querySelectorAll('.grid div')[i];
                children.classList.remove('bg-yellow')
            }
            
            if(event.target.closest('div div')!=null){
                event.target.classList.add('bg-yellow');
                tap = event.target.id,"ideck start"
                triggerd() 
            }        
        });

        document.addEventListener('mouseup', function handleClick(event) { 
            
            if(event.target.closest('div div')!=null){
                event.target.classList.add('bg-yellow');
                triggerd() 
                left= event.target.id
                for (let i = 0; i < 5; i++) {
                    
                    
                    if(Object.values(wordsInTable)[i].startdiv==tap && Object.values(wordsInTable)[i].endiv==left){
                        
                        const divnumber = Object.values(wordsInTable)[i].startdiv;

                        const elem = document.getElementById(divnumber);
                        
                        let start = Object.values(wordsInTable)[i].startdiv;
                        //let end = Object.values(wordsInTable)[i].endiv;
                        let lengthword = Object.values(wordsInTable)[i].wordname.length
                        if(Object.values(wordsInTable)[i].worddirection=="up"){
                            points++;
                            
                            for (let x = 0; x < lengthword; x++) {
                                
                                document.getElementById(start-(9*x)).classList.add("bg-green");
                            }
                            
                        }else if(Object.values(wordsInTable)[i].worddirection=="upright"){
                            points++;
                            for (let x = 0; x < lengthword; x++) {
                                
                                document.getElementById(start-(8*x)).classList.add("bg-green");
                            }
                        }else if(Object.values(wordsInTable)[i].worddirection=="right"){
                            points++;
                            for (let x = 0; x < lengthword; x++) {
                                
                                document.getElementById(start+(1*x)).classList.add("bg-green");
                            }
                        }else if(Object.values(wordsInTable)[i].worddirection=="downright"){
                            points++;
                            for (let x = 0; x < lengthword; x++) {
                                
                                document.getElementById(start+(10*x)).classList.add("bg-green");
                            }
                        }else if(Object.values(wordsInTable)[i].worddirection=="down"){
                            points++;
                            for (let x = 0; x < lengthword; x++) {
                                
                                document.getElementById(start+(9*x)).classList.add("bg-green");
                            }
                        }else if(Object.values(wordsInTable)[i].worddirection=="downleft"){
                            points++;
                            for (let x = 0; x < lengthword; x++) {
                                
                                document.getElementById(start+(8*x)).classList.add("bg-green");
                            }
                        }else if(Object.values(wordsInTable)[i].worddirection=="left"){
                            points++;
                            for (let x = 0; x < lengthword; x++) {
                                
                                document.getElementById(start-(1*x)).classList.add("bg-green");
                            }
                        }else if(Object.values(wordsInTable)[i].worddirection=="upleft"){
                            points++;
                            for (let x = 0; x < lengthword; x++) {
                                
                                document.getElementById(start-(10*x)).classList.add("bg-green");
                            }
                        }else if(Object.values(wordsInTable)[i].worddirection=="upright"){
                            points++;
                            for (let x = 0; x < lengthword; x++) {
                                
                                document.getElementById(start-(8*x)).classList.add("bg-green");
                            }
                        }
                    }
                }
            }
            
            if(points>4){
            
                $(".grayback").css("display", "flex");
                $(".window").css("display", "flex");
                
            }
        });
        
        
    }highlight()

    function numberInRange(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function triggerd(){
        const children = document.querySelectorAll('.grid div')[0];
        
        for (let i = 0; i < 80; i++) {
            const children = document.querySelectorAll('.grid div')[i];
            if(children.className === 'bg-gray'){
                console.log(children);
            }
        }
    }
    triggerd()

    function addLetter(){
        for (let i = 0; i < 81; i++) {
            let children = document.querySelectorAll('.grid div')[i];
            children.setAttribute('id', i);
            let order = (Math.floor(Math.random() * 26));
            let letter = (alphabet[order]);
            children.innerHTML = letter;

        }

    }addLetter()

    function pickWord(){
        
        
        let z = 5;
        for (let i = 0; i < 5; i++) {
            let order = (Math.floor(Math.random() * z));
            let word = (words[order]);
            
            words.splice(order,1)
            
            Object.values(wordsInTable)[i].wordname = word
            z--;
            
        }
        
    }pickWord()

    function setPissition(){
        for (let i = 0; i < 5; i++) {
            let order = (Math.floor(Math.random() * 4));
            let possition = (possitions[order]);
            
            Object.values(wordsInTable)[i].wordposition = possition 
        }

    }

    function setDirection(){
        for (let i = 0; i < 5; i++) {
            if(Object.values(wordsInTable)[i].wordposition == 'topleft'){
                    
                    let order = numberInRange(1, 5)
                    
                    let direction = (directions[order]);
                    
                    Object.values(wordsInTable)[i].worddirection = direction
                
            }else if(Object.values(wordsInTable)[i].wordposition == 'topright'){
                    
                    let order = numberInRange(3, 7)
                    
                    let direction = (directions[order]);
                    
                    Object.values(wordsInTable)[i].worddirection = direction
                
            }else if(Object.values(wordsInTable)[i].wordposition == 'bottomleft'){
                    
                    let order = numberInRange(-1, 3)
                    
                    let direction = (directions[order]);
                    
                    Object.values(wordsInTable)[i].worddirection = direction
                
            }else if(Object.values(wordsInTable)[i].wordposition == 'bottomright'){
                
                    let order = numberInRange(5, 9)
                    
                    let direction = (directions[order]);
                    
                    Object.values(wordsInTable)[i].worddirection = direction  
            }
                
        }
    }

    function setPossitionofWord(){
        for (let i = 0; i < 5; i++){
            if(Object.values(wordsInTable)[i].wordposition == 'topleft'){
                let order = numberInRange(-1, 15);
                
                Object.values(wordsInTable)[i].startdiv = topleftpossition[order];
            }else if(Object.values(wordsInTable)[i].wordposition == 'topright'){
                let order = numberInRange(-1, 15)
                
                Object.values(wordsInTable)[i].startdiv = toprightpossition[order];
            }else if(Object.values(wordsInTable)[i].wordposition == 'bottomleft'){
                let order = numberInRange(-1, 15)
                
                Object.values(wordsInTable)[i].startdiv = bottomleftpossition[order];
            }else if(Object.values(wordsInTable)[i].wordposition == 'bottomright'){
                let order = numberInRange(-1, 15)
                
                Object.values(wordsInTable)[i].startdiv = bottomrightpossition[order];
            }
        }   
    }

    function inTable(){
        collision=false
        for (let z = 0; z < 5; z++) {
            
            if(Object.values(wordsInTable)[z].worddirection == 'right'){
                
                let y = Object.values(wordsInTable)[z].startdiv;
                
                for (let i = 0; i < Object.values(wordsInTable)[z].wordname.length; i++){
                    
                    let letterToAsign = Object.values(wordsInTable)[z].wordname[i];
                    
                    if(picked.includes(y) && letterToAsign != document.getElementById(y).innerHTML){
                        
                        
                        collision = true
                        
                    }//else{collision = false}
                    document.getElementById(y).innerHTML = letterToAsign;
                    picked.push(y)
                    y = y+1;
                }
                
                Object.values(wordsInTable)[z].endiv = y-1;
            }else if(Object.values(wordsInTable)[z].worddirection == 'downright'){
                
                let y = Object.values(wordsInTable)[z].startdiv;
                
                for (let i = 0; i < Object.values(wordsInTable)[z].wordname.length; i++){
                    
                    let letterToAsign = Object.values(wordsInTable)[z].wordname[i];
                    
                    if(picked.includes(y) && letterToAsign != document.getElementById(y).innerHTML){
                        
                        collision = true
                    }
                    document.getElementById(y).innerHTML = letterToAsign;
                    picked.push(y)
                    y = y+10;
                }  
                
                Object.values(wordsInTable)[z].endiv = y-10; 
            }else if(Object.values(wordsInTable)[z].worddirection == 'down'){
                
                let y = Object.values(wordsInTable)[z].startdiv;
                
                for (let i = 0; i < Object.values(wordsInTable)[z].wordname.length; i++){
                    
                    let letterToAsign = Object.values(wordsInTable)[z].wordname[i];
                    
                    if(picked.includes(y) && letterToAsign != document.getElementById(y).innerHTML){
                        
                        collision = true
                    }
                    document.getElementById(y).innerHTML = letterToAsign;
                    picked.push(y)
                    y = y+9;
                } 
                
                Object.values(wordsInTable)[z].endiv = y-9;   
            }else if(Object.values(wordsInTable)[z].worddirection == 'downleft'){
                
                let y = Object.values(wordsInTable)[z].startdiv;
                
                for (let i = 0; i < Object.values(wordsInTable)[z].wordname.length; i++){
                    
                    let letterToAsign = Object.values(wordsInTable)[z].wordname[i];
                    
                    if(picked.includes(y) && letterToAsign != document.getElementById(y).innerHTML){
                        
                        collision = true
                    }
                    document.getElementById(y).innerHTML = letterToAsign;
                    picked.push(y)
                    y = y+8;
                } 
                Object.values(wordsInTable)[z].endiv = y-8;  
            }else if(Object.values(wordsInTable)[z].worddirection == 'left'){
                let y = Object.values(wordsInTable)[z].startdiv;
                for (let i = 0; i < Object.values(wordsInTable)[z].wordname.length; i++){
                    
                    let letterToAsign = Object.values(wordsInTable)[z].wordname[i];
                    
                    if(picked.includes(y) && letterToAsign != document.getElementById(y).innerHTML){
                        
                        collision = true
                    }
                    document.getElementById(y).innerHTML = letterToAsign;
                    picked.push(y)
                    y = y-1;
                }  
                
                Object.values(wordsInTable)[z].endiv = y+1;  
            }else if(Object.values(wordsInTable)[z].worddirection == 'upleft'){
                
                let y = Object.values(wordsInTable)[z].startdiv;
                
                for (let i = 0; i < Object.values(wordsInTable)[z].wordname.length; i++){
                    
                    let letterToAsign = Object.values(wordsInTable)[z].wordname[i];
                    
                    if(picked.includes(y) && letterToAsign != document.getElementById(y).innerHTML){
                        
                        
                        collision = true
                    }
                    document.getElementById(y).innerHTML = letterToAsign;
                    picked.push(y)
                    y = y-10;
                }  
                
                Object.values(wordsInTable)[z].endiv = y+10;  
            }else if(Object.values(wordsInTable)[z].worddirection == 'up'){
                
                let y = Object.values(wordsInTable)[z].startdiv;
                
                for (let i = 0; i < Object.values(wordsInTable)[z].wordname.length; i++){
                    
                    let letterToAsign = Object.values(wordsInTable)[z].wordname[i];
                    
                    if(picked.includes(y) && letterToAsign != document.getElementById(y).innerHTML){
                        
                        
                        collision = true
                    }
                    document.getElementById(y).innerHTML = letterToAsign;
                    picked.push(y)
                    y = y-9;
                }
                
                Object.values(wordsInTable)[z].endiv = y+9;    
            }else if(Object.values(wordsInTable)[z].worddirection == 'upright'){
                
                let y = Object.values(wordsInTable)[z].startdiv;
                
                for (let i = 0; i < Object.values(wordsInTable)[z].wordname.length; i++){
                    
                    let letterToAsign = Object.values(wordsInTable)[z].wordname[i];
                    
                    if(picked.includes(y) && letterToAsign != document.getElementById(y).innerHTML){
                        
                        collision = true
                    }
                    document.getElementById(y).innerHTML = letterToAsign;
                    picked.push(y)
                    y = y-8;
                }
                
                Object.values(wordsInTable)[z].endiv = y+8;    
            }
            
        }
        console.log(wordsInTable,"table")
        console.log(collision,"at the end table")
        
    }

        setPissition()
        setDirection()
        setPossitionofWord()
        inTable()
        
        console.log(collision,"collison")
        
    }
Run()


for(let i = 0; i < 30; i++){
    if(collision==false){break}
    Run()
      
}

