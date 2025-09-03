// Current location tells the game what variable to look inside of

theMap=[
    {pageName:"baseLayer",
        content:"",
        upstream:[
            {pageName:"globalParksInitiative",
                content:"<p>Welcome to the file access system for the Global Parks Initiative\nWhat are you searching for today?</p>",
                commandLine:'[Root@57.3.55.8][GPI_Base]: ',
                upstream:[
                    {pageName:"northCascades",
                        content:"<p>Currently searching for files regarding the Northern Cascades</p>",
                        commandLine:'[Root@57.3.55.8][GPI_Base]northCascades: ',
                        upstream:[
                            {pageName:"entities",
                                content:"<p>Now searching for files regarding the entities of the Northern Cascades</p><p id='error'>HIDDEN FILES DETECTED</p>",
                                commandLine:'[Root@57.3.55.8][GPI_Base]northCascades/entities: ',
                                upstream:[
                                    {pageName:"arborealEntity01",
                                        content:"<br><p>The Forest of the North Cascades is an ancient and enigmatic force of nature that embodies decay, rot, and the relentless march of natural entropy. It is considered an elder entity, wielding a mysterious and formidable power that remains largely unknown to those who study or confront it. This entity appears to have the extraordinary ability to generate new life forms from the organic detritus that accumulates within its domain, turning said matter into creatures that then serve its inscrutable purposes. These emergent beings are often unpredictable and dangerous, capable of venturing beyond the Forest's immediate boundaries to inflict chaos upon nearby human settlements. Their origins from the decayed landscape make them inherently hostile and difficult to control, posing a significant threat to civilian populations and infrastructure. The creatures' ability to escape the Forest's influence underscores the need for vigilant monitoring and strategic containment.</p>",
                                        commandLine:'[Root@57.3.55.8][GPI_Base]northCascades/entities/arborealEntity01: ',
                                        upstream:[
                                            {pageName:"containment",
                                                content:"<br><p>These emergent beings are often unpredictable and dangerous, capable of venturing beyond the Forest's immediate boundaries to inflict chaos upon nearby human settlements. Their origins from the decayed landscape make them inherently hostile and difficult to control, posing a significant threat to civilian populations and infrastructure. The creatures' ability to escape the Forest's influence underscores the need for vigilant monitoring and strategic containment.</p>",
                                                commandLine:'[Root@57.3.55.8][GPI_Base]northCascades/entities/arborealEntity01/containment: ',
                                                upstream:[]
                                            },
                                            {pageName:"communication",
                                                content:"<br><p>The Forest possesses the ability to communicate psychically, often through disturbing and horrifying means. Those who attempt to engage with it mentally risk developing symptoms of wood rot, which gradually distort their physical form into grotesque, inhospitable shapes. This process is particularly severe in humans, although some supernatural entities with a shared affinity for wild magic exhibit greater resistance, likely due to their inherent magical resilience.</p>",
                                                commandLine:'[Root@57.3.55.8][GPI_Base]northCascades/entities/arborealEntity01/communication: ',
                                                upstream:[]
                                            },
                                            {pageName:"scope",
                                                content:"<br><p>The influence of the Forest extends across the entire Northern Cascades, making it a significant concern for regional security. To mitigate its impact, it is recommended to maintain a steady influx of drifters—individuals who can serve as sacrificial offerings—to distract the Forest and prevent it from expanding further into critical areas. This strategy aims to contain the threat while minimizing risk to essential personnel.</p>",
                                                commandLine:'[Root@57.3.55.8][GPI_Base]northCascades/entities/arborealEntity01/scope: ',
                                                upstream:[]
                                            },
                                            {pageName:"realityManipulation",
                                                content:"<br><p>Beyond its biological and psychic capabilities, the Forest can manipulate reality within its domain. It creates vast, seemingly endless caverns, towering mountains, and dense, labyrinthine trails that challenge any who ventures into its territory. These altered landscapes are perilous and escape often requires the use of extrasensory devices or advanced magical tools. However, prolonged exposure to the Forest's domain only amplifies its brutality and horror, making escape increasingly difficult and dangerous when longer expeditions are undertaken.</p>",
                                                commandLine:'[Root@57.3.55.8][GPI_Base]northCascades/entities/arborealEntity01/realityManipulation: ',
                                                upstream:[]
                                            },
                                            {pageName:"conductors",
                                                content:"<br><p>Propositions to involve local Wild Magic conductors have been evaluated but ultimately rejected. The primary concerns are that these conductors may pose additional threats or lack the necessary expertise, rendering them ineffective or even counterproductive. Nonetheless, this approach remains open for reconsideration should circumstances change or new information emerge about their potential utility in managing the Forest's influence.</p>",
                                                commandLine:'[Root@57.3.55.8][GPI_Base]northCascades/entities/arborealEntity01/conductors: ',
                                                upstream:[]
                                            }
                                        ],
                                    }
                                ],
                                hidden:[
                                    {pageName:"liliaSilverstone",
                                        content:"<p>Age: 25</p><p>Species: Therianthrope(Silver Wolf)</p><p>Address: 3400 N Clark Street</p><p>First confirmed user of IOI and confirmed Wild Mangic conductor.</p><p>Silver-haired lycan therianthrope with increased strength and regenerative abilities. Appears to be the leader of the Wild Magic cult/coven operating within the area designated as the Northern Cascades. Blood has been collected and is being used in testing to determine whether its properties can be used to augment human/canine operatives.</p>",
                                        commandLine:'[Root@57.3.55.8][GPI_Base]northCascades/entities/liliaSilverstone: ',
                                        upstream:[]
                                    },
                                    {pageName:"stephanieRichardson",
                                        content:"<p>Age: N/A</p><p>Species: Therianthrope(River Otter)</p><p>Address:185 Rinehart Way, Second Floor</p><p>Second confirmed user of IOI and confirmed Wild Mangic conductor.</p><p>Owner of the Roc Cafe and Coffee on the main street of Marble Basin. According to records she is 38 years old but visual documentation of the woman has shown her to be far younger. It is theorized that the Wild Magic release may have affected her physical age. An epigentic clock would provide definitive results but a complete autopsy would help to explain how certain bones/ligiments react to the process of de-aging.</p>",
                                        commandLine:'[Root@57.3.55.8][GPI_Base]northCascades/entities/stephanieRichardson: ',
                                        upstream:[]

                                    }
                                ]
                            },
                            {pageName:"iois",
                                content:"<p>Now searching for Items of Interest within the Northern Cascades</p>",
                                commandLine:'[Root@57.3.55.8][GPI_Base]northCascades/arborealEntity01/scope: ',
                                upstream:[]
                            }
                        ]
                    }
                ]
            },
            {pageName:"gregThoughts",
                content:"<p>You are currently viewing the very ratty thoughts of the one and only Greg\nI'm an open book, baby. I don't mind.</p>",
                commandLine:"[Root@Localhost~]Within_The_Rat_Den/gregThoughts: ",
                upstream:[
                    {pageName:'theGPI',
                        content:"<br><p>Who the Hell are these guys? They look like park rangers but Markus has no idea who any of them are. They won't even communicate with the guy and their security is INSANE. We are talking AES with a 256bit key levels of encryption. I'll break this shit wide open though. Rats can get into anything.</p>",
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
            answer="<p id='movement'>You are moving to the "+currentLocation.pageName+"</p>"
            answer+=currentLocation.content
        } else {
            for(var j=0;j<currentLocation.upstream.length;j++){
                if(direction==currentLocation.upstream[j].pageName){
                    previousLocations.push(currentLocation)
                    currentLocation=currentLocation.upstream[j]
                    path=currentLocation.commandLine
                    answer="<p id='movement'>You are moving to the "+currentLocation.pageName+"</p>\n\n"
                    answer+=currentLocation.content
                    break
                }
            }
            if(typeof currentLocation.hidden!=='undefined'){
                console.log(currentLocation.hidden)
                for(var j=0;j<currentLocation.hidden.length;j++){
                    if(direction==currentLocation.hidden[j].pageName){
                        previousLocations.push(currentLocation)
                        currentLocation=currentLocation.hidden[j]
                        path=currentLocation.commandLine
                        answer="<p id='movement'>You are moving to the "+currentLocation.pageName+"</p>\n\n"
                        answer+=currentLocation.content
                        break
                    }
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
