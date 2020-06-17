class App{
  constructor(gradeTable,pageHeader){
  this.gradeTable = gradeTable
  this.pageHeader = pageHeader
  this.handleGetGradesError = this.handleGetGradesError.bind(this)
  this.handleGetGradesSuccess=this.handleGetGradesSuccess.bind(this)
  }
  handleGetGradesError(error){
    console.error(error)
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades)
    for(var i=0; i<grades.length; i++){
      var sum = 0;
      sum+=grades[i].grade
      var average = Math.floor(sum/grades.length)
    }
    this.pageHeader.updateAverage(average)

  }
  getGrades(){
    $.ajax({
      method:"GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
      headers:{
        "X-Access-Token": "Zy8bniTV"
      }
    })
  }
  start(){
    this.getGrades()
  }
}
