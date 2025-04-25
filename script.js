let abortController = undefined;
 
 
function main() {
    const user_input = document.querySelector("input");
    user_input.addEventListener("change", () => 
        {
            console.log(user_input.value)


            if(abortController) {
              abortController.abort("new request");
              }

            abortController = new AbortController();

            async function post(request) {
                try {
                  const response = await fetch(request);
                  const result = await response.json();
                  console.log("Success:", result);
                  document.getElementById("output").innerHTML = `<h1>${result.text}</h1>`;
                } catch (error) {
                    console.log("Old Request Aborted");
                }
              }
              
              const request1 = new Request("https://echo-bot-shy-sea-4425.fly.dev/echo", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ text: user_input.value }),
                signal: abortController.signal,
              });
              
              post(request1);
        }
     )
}

document.addEventListener("DOMContentLoaded", main);
