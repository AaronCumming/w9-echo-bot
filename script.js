function main(){
    
    const user_input = document.querySelector("input");
    user_input.addEventListener("change", () => 
        {
            console.log(user_input.value)
        }
     )


}

document.addEventListener("DOMContentLoaded", main);
