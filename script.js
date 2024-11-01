let tache=document.getElementById('tache');
let description=document.getElementById('description');
let date=document.getElementById('date');
let tBody=document.getElementById('tBody');
let etat=document.getElementById('etat');
let ajouter=document.getElementById('ajouter'); 
let i;
let j;
let update = 0;

//creer fonction d'ajouter les row dans le tableau


let tasks=[];
ajouter.onclick = function(){
    let newTask={
        tache:tache.value,
        description:description.value,
        date:date.value,
        etat:etat.value,

    }
    if (update === 0){
        tasks.push(newTask);

        
    }
    else{
        tasks[j]=newTask;
        update=0;
        ajouter.innerHTML='ajouter';
    }
    showTasks();  
    document.getElementById('inpt').reset(); 


}
//show tasks

function showTasks(){
    let table='';
    let type= '';
    for(i=0;i<tasks.length;i++){
        type = "";
        if (tasks[i].etat === "fini" ) {
            type = "rgba(94, 224, 47)";
        }else if(tasks[i].etat === "encour"){
            type = "rgba(227, 214, 32)";
        }else{
            type = "rgba(168, 50, 50)";
        }

        table+=`
        <tr style="background-color: ${type}">
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

    // tasks[i].etat = '';
}



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
    update = 1;
    j=i;

}


