const addTask = document.getElementById('add');
const taskInput = document.getElementById('t1');
const todoTasksDiv = document.getElementById('d3');
const completedTasksDiv = document.getElementById('d4');

// Check if elements are being accessed correctly
console.log(todoTasksDiv, completedTasksDiv);

addTask.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    // Create the task div element
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';  // Correctly assign class name

    // Create span to hold task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create the "Mark as Complete" button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Mark as Complete';
    completeButton.addEventListener('click', function () {
        taskDiv.removeChild(completeButton);  // Remove the button
        completedTasksDiv.appendChild(taskDiv);  // Move task to completed section
    });

    taskDiv.appendChild(taskSpan);
    taskDiv.appendChild(completeButton);
    
    // Append task to To-do section
    todoTasksDiv.appendChild(taskDiv);

    // Clear input field
    taskInput.value = '';
});
