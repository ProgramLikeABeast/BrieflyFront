function upload(){
    document.getElementById("box1").classList.add("hidden");
    document.getElementById("box2").classList.remove("hidden");
    document.getElementById("blank1").classList.add("hidden");
    document.getElementById("blank2").classList.remove("hidden");
    console.log("upload");
}

function back(){
    document.getElementById("box2").classList.add("hidden");
    document.getElementById("box1").classList.remove("hidden");
    document.getElementById("blank2").classList.add("hidden");
    document.getElementById("blank1").classList.remove("hidden");
    console.log("back");
}