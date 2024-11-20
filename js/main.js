
const addBtn = document.querySelector('#btn');
addBtn.addEventListener('click', addTask); // Ajoute "task card" au click (function addTask)

const taskCard = document.querySelector(".todoCard"); // UNE CARTE (noeud = ID et/ou Class)
const tasksContainer = document.querySelector("#todoCards"); // TABLEAU DE CARTES


// TOUTES LES AUTRES CARTES
function addTask(){
    const newTask = taskCard.cloneNode(true) // clone la "task card" (duplique le noeud "taskCard")
    const newTextArea = newTask.querySelector('.task') //  le zone texte
    const newDelBtn = newTask.querySelector('.delBtn') // la poubelle

    newTextArea.value = "New Task"  // definit la valeur de la zone de texte

    newDelBtn.addEventListener('click', function() {   // Supprime la new "task card"
        deleteTask(newTask); //
    })

    tasksContainer.appendChild(newTask) // AJOUTE UNE CARTE AU TABLEAU (Ajoute un "noeud" à la fin des enfants de "container")

    updateCompteur();  // AJOUTE AU COMPTEUR
}


// CARTE DEFAUT //
const delBtn = document.querySelector('.delBtn');

delBtn.addEventListener('click', function() { // supprime la carte par defaut
    deleteTask(taskCard); 
});

function deleteTask(taskCards){  // function pour supprimer les "task cards"
    taskCards.remove(); 

    updateCompteur(); // RETIRE AU COMPTEUR
}



// COMPTEUR CARTE
const countCard = document.querySelector('#taskCount');

function updateCompteur() {
    const tasksCards = tasksContainer.children.length; // NB DE CARTE DANS LE TABLEAU ()
    countCard.textContent = tasksCards; // maj compteur
}

updateCompteur();