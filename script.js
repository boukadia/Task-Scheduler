let tache=document.getElementById('tache');
let description=document.getElementById('description');
let date=document.getElementById('date');

let etat=document.getElementById('etat');
let ajouter=document.getElementById('ajouter'); 
let i;
let temp;
let mood = 'ajouter'

//creer fonction d'ajouter les row dans le tableau
let tasks=[];
ajouter.onclick = function(){
    let newTask={
        tache:tache.value,
        description:description.value,
        date:date.value,
        etat:etat.value,

    }
    if (mood === 'ajouter'){
        tasks.push(newTask);
        
        
    }
    else{
        tasks[temp]=newTask;
        mood='ajouter';
        ajouter.innerHTML='ajouter';
    }
    showTasks();  
    document.getElementById('inpt').reset(); 


}
//show tasks

function showTasks(){
    let table='';
    for(i=0;i<tasks.length;i++){
        table+=`
        <td>${tasks[i].tache}</td> 
    <td>${tasks[i].description}</td>
     <td>${tasks[i].date}</td>
     <td>${tasks[i].etat}</td> 
      <td> <button onclick="modifierTask(${i})" >modifier</button> </td>
      <td> <button onclick="supprimeTask(${i})">supprimer</button></td>
     </tr>`
    }
    document.getElementById('tBody').innerHTML = table;
    console.log(showTasks)

}

//<td>${i}</td>
//<td>${etat[i].options[etat.selectedIndex].text}</td> 
// supprimer task
function supprimeTask(i){
    // console.log(i)
    tasks.splice(i,1);
    showTasks();

}


//modifier task
function modifierTask(i){
    // console.log(i)
    tache.value=tasks[i].tache;
    description.value=tasks[i].description;
    date.value=tasks[i].date;
    etat.value=tasks[i].etat;
    ajouter.innerHTML='modifier';
    mood = 'modifier';
    temp=i;

}


