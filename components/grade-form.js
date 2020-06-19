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
    const formData = new FormData(event.target)
    const name = formData.get("name")
    const course = formData.get("course")
    const grade = formData.get("grade")
    this.createGrade(name,course,grade)
    event.target.reset()
  }
}
