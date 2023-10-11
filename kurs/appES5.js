function Course(title,instructor,image){
    this.title= title;
    this.image=image;
    this.instructor= instructor;
}

function UI(){}



UI.prototype.addCourseToList = function(course){
    const list =  document.getElementById('course-list');
     var html=`
     <tr>
     <td><img src="img/${course.image}"></td>
     <td>${course.title}</td>
     <td>${course.instructor}</td>
     <td><a href="#" class="btn btn-danger delete btn-sm">Delete</a></td>
     </tr>
     `

    list.innerHTML += html;
}
UI.prototype.clearControls = function(){
    const title = $("#title").val("");
    const instructor = $("#instructor").val("");
    const image = $("#image").val("");
}

UI.prototype.showAlert = function(message,className){
    var alert=`
    <div class="alert alert-${className}">
        ${message}
    </div>
    `
    const row = document.querySelector(".row")
    
    row.insertAdjacentHTML("beforeBegin",alert);

    setTimeout(()=>{
        $(".alert").remove();
    },3000)

}


$("#new-course").submit(function (e) { 
    const title = $("#title").val();
    const instructor = $("#instructor").val();
    const image = $("#image").val();

    const course = new Course(title,instructor,image)

    const ui = new UI()
    if(title==="" || instructor==="" || image===""){
        ui.showAlert("Plase complate the form","warning")
    }else{
        ui.addCourseToList(course)

        ui.clearControls()

        ui.showAlert("the course hass been added","success")
    }

    e.preventDefault();
    
});
UI.prototype.deleteCourse = function(element){
    if(element.classList.contains("delete")){
        element.parentElement.parentElement.remove();
    }
}

$("#course-list").click(function (e) { 
    const ui = new UI();
    ui.deleteCourse(e.target);
        ui.showAlert('the course has been deleted','danger');

});