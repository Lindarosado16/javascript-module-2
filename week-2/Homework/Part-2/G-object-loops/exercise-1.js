// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const studentGrades = {
    tom: 20,
    george: 17,
    abdul: 19,
  };
for (const studentCheck in studentGrades ){
  if(studentGrades[studentCheck]> 18) {
    console.log(`${studentCheck.toUpperCase()} - ${studentGrades[studentCheck]} `);
}
}
  // Prints
  // TOM - 20
  // ABDUL - 19
