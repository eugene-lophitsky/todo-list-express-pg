
let contentbox = document.getElementById("content-box"); 

class InputTemplate {
    constructor(type, width, height, border) {
        this.type = type;
        this.width = width;
        this.height = height; 
        this.border = border;
    }

    tellAboutClass () {
        console.log(this.type);
        
    }
}

let newClass = new InputTemplate("password");


console.log(newClass.type);

