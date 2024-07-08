const addButton = document.querySelector("#add-student");
const studentForm = document.querySelector("#studentForm");

const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const age = document.querySelector("#age");
const course = document.querySelector("#course");


let studentsJSON = `[
        {
            "name": "Іван", 
            "surname": "Петров",
            "age": 20,
            "course": 3
        },
    
        {
            "name": "Марія", 
            "surname": "Іванова",
            "age": 22,
            "course": 4
        },
    
        {
            "name": "Олег", 
            "surname": "Сидоров",
            "age": 19,
            "course": 2
        }
]`;

let students = JSON.parse(studentsJSON);
displayStudents();

studentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newName = name.value;    
    const newSurname = surname.value;
    const newAge = parseInt(age.value);
    const newCourse = parseInt(course.value);

    const newStudent = {
        name: newName,
        surname: newSurname,
        age: newAge,
        course: newCourse
    };

    students.push(newStudent);
    studentsJSON = JSON.stringify(students);
    
    displayStudents(studentsJSON);

    name.value = '';
    surname.value = '';
    age.value = '';
    course.value = '';
});


// Виведення студентів у таблицю
function displayStudents() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    students.forEach(student => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.surname}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;
        tbody.appendChild(row);

        // Кнопка видалення студентів

        let deleteButtons = Array.from(document.querySelectorAll('.delete-btn'));

        deleteButtons.forEach(button => {
            button.addEventListener('click', () => {
                let index = deleteButtons.indexOf(button);
                students.splice(index, 1);
                studentsJSON = JSON.stringify(students);

                displayStudents(studentsJSON);
            });
        });

    });
}