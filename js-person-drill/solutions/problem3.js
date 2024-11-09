function nameOfStudentsLivesInAustralia(arrayOfObjects) {
  try {
    const nameOfStudents = [];
    if (arrayOfObjects === undefined) {
      throw new Error("You forget to passing the arrrayOfObject");
    } else if (typeof arrayOfObjects !== "object") {
      throw new Error("You are not Passing object");
    }
    for (let i = 0; i < arrayOfObjects.length; i++) {
      if (
        arrayOfObjects[i].isStudent &&
        arrayOfObjects[i].country === "Australia"
      ) {
        nameOfStudents.push(arrayOfObjects[i].name);
      }
    }
    return nameOfStudents;
  } catch (error) {
    return error.message;
  }
  
}
export { nameOfStudentsLivesInAustralia };

// Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
