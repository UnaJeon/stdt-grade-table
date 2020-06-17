class GradeForm{
  constructor(formElement){
    this.formElement=formElement;
    this.handleSumbit = this.handleSumbit.bind(this)
    this.formElement.addEventListener('submit',this.handleSumbit)
  }
  onSubmit(createGrade){
    this.createGrade =createGrade
  }
  handleSumbit(event){
    event.preventDefault()
    var formData = new FormData(event.target)
    var name = formData.get("name")
    var course = formData.get("course")
    var grade = formData.get("grade")
    this.createGrade(name,course,grade)
    event.target.reset()
  }
}
