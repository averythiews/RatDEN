// Current location tells the game what variable to look inside of

theMap=[
    {pageName:"baseLayer",
        content:"",
        upstream:[
            {pageName:"globalParksInitiative",
                content:"<p>Welcome to the file access system for the Global Parks Initiative\nWhat are you searching for today?</p>",
                commandLine:'[Root@57.3.55.8][GPI_Base]: ',
                upstream:[

                ]
            },
            {pageName:"gregThoughts",
                content:"<p>You are currently viewing the very ratty thoughts of the one and only Greg\nI'm an open book, baby. I don't mind.</p>",
                commandLine:"[Root@Localhost~]Within_The_Rat_Den/gregThoughts: ",
                upstream:[
                    {pageName:'theGPI',
                        content:"<p>These ranger guys are super weird. You would think that they would be interested in getting rid of The Forest but that does not seem to be their MO. Instead these dudes are just walking out into the woods with people and leaving them out there. Most of those people come back but there are a fair number who don't and any number higher than one seems pretty fucked up to me. They also are completely refusing to communicate or work with the other members of the Rat Pack. We're out here saving lives and they're out there throwing them away... Or whatever it is they do. We've even tried following them on a number of occassions but these guys ALWAYS operate in the daytime and that's when we are at our least powerful. Lilia tried to follow them once during the day and The Forest dropped a goddamn corpse on her head. Shit was fucked.\nAnyway, these knucklefucks are bad news in my book. I don't think that they are out here to help the people who go into the park. I think they are helping The Forest itself but I have no idea why any human would do such a thing. The Forest is bad news. Really bad news. It does not need help in making things worse.</p>",
                        commandLine:"[Root@Localhost~]Within_The_Rat_Den/gregThoughts/theGPI: ",
                        upstream:[]
                    }
                ]
            }
        ]
    }
]

var currentLocation=theMap[0]
var previousLocations=[]



// set var and return input value
function getInput() {
    command = commandInput.value;
    return command;
  }
  
  // construct the html+text of the input command
  function attachCommand() {
    // the command you entered
    var li = document.createElement('li');
    li.textContent = getInput();
    
    // the path
    var span = document.createElement('span');
    span.className = 'path';
    span.textContent = path;
    
    // attach path before command
    li.insertBefore(span,li.firstChild);
    
    // and attach to window
    result.appendChild(li);
  }
  
  // Checks to see if the response would allow movement through the site map
  function returnResponse() {
    var li = document.createElement('li');
    var answer=""
    var colletedResponse=getInput()
    if(colletedResponse.indexOf('sudo')===0){
        answer='<p id="error">Did you really think I would let sudo work in here?</p>'
    }else if(colletedResponse.indexOf('cd')===0){
        var direction=colletedResponse.split(' ')[1]
        if(direction===".."){
            currentLocation=previousLocations[previousLocations.length-1]
            previousLocations.pop()
            path=currentLocation.commandLine
            answer="<p>You are moving to the "+currentLocation.pageName+"</p>\n\n"
            answer+=currentLocation.content
        } else {
            for(var j=0;j<currentLocation.upstream.length;j++){
                if(direction==currentLocation.upstream[j].pageName){
                    previousLocations.push(currentLocation)
                    currentLocation=currentLocation.upstream[j]
                    path=currentLocation.commandLine
                    answer="<p>You are moving to the "+currentLocation.pageName+"</p>\n\n"
                    answer+=currentLocation.content
                }
            }
        }
    }else if(colletedResponse.indexOf('ls')===0){
        for(var i=0;i<currentLocation.upstream.length;i++){
            answer+="<li>"+currentLocation.upstream[i].pageName+"</li>"
        }
    }
    li.innerHTML = answer;
    
    // and attach to window
    result.appendChild(li);
  }
  
  // set input to last command on up key (see event listener below)
  function repeatInput() {
    commandInput.value = command;
  }
  
  // scroll to bottom...
  function scrollToBottom() {
    result.scrollTop = result.scrollHeight;
  }
  
  // run all functions on enter (see event listener below)
  function doTheThing() {
    if(getInput().trim() !== '') { // trim whitespace and check if empty
      attachCommand();
      returnResponse();
      scrollToBottom();
    }
    
    commandInput.value = ''; // clear input value 
  }
  
  // var hoisting transports this to the top
  var commandInput = document.getElementById('command-input'),
      result = document.querySelector('.result'),
      command = '',
      path = '[Root@Localhost~]Within_The_Rat_Den: ';
  
  // whenever you press a key
  commandInput.addEventListener('keydown',function(e){
    if(e.keyCode === 13) doTheThing(); // enter key
    if(e.keyCode === 38) repeatInput(); // up key
  });
