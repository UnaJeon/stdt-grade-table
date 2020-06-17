class GradeTable{
  constructor(tableElement,noGradesElement){
this.tableElement = tableElement
this.noGradesElement = noGradesElement
  }
updateGrades(grades){
  var tbody = this.tableElement.querySelector('tbody')
  tbody.textContent = ''
  for (var i=0; i<grades.length; i++){
  //   var tr = document.createElement('tr');
  //   var tdName = document.createElement('td');
  //   tdName.textContent = grades[i].name
  //   var tdCourse = document.createElement('td');
  //   tdCourse.textContent=grades[i].course
  //   var tdGrade = document.createElement('td');
  //   tdGrade.textContent=grades[i].grade
  //   tbody.append(tr);
  //   tr.append(tdName,tdCourse,tdGrade)
  tbody.append(this.renderGradeRow(grades[i],this.deleteGrade))
  }
  if(grades.length===0){
    pElement.classList.remove('d-none')
  }else{
    pElement.className="d-none"
  }
}
onDeleteClick(deleteGrade){
  this.deleteGrade= deleteGrade
}
renderGradeRow(data,deleteGrade){
    var tableRow= document.createElement('tr')
    var studentName = document.createElement('td');
    studentName.textContent=data.name
    var studnetCourse = document.createElement('td')
    studnetCourse.textContent = data.course
    var studentGrade = document.createElement('td');
    studentGrade.textContent = data.grade
    var buttonData= document.createElement('td')
    var deleteButton = document.createElement('button')
    deleteButton.textContent = "DELETE"
    deleteButton.setAttribute("class","btn btn-danger" )
    tableRow.append(studentName,studnetCourse,studentGrade,buttonData)
    buttonData.append(deleteButton)

    deleteButton.addEventListener('click',function(event){
      deleteGrade(data.id)
    })
    return tableRow;
 }
}
