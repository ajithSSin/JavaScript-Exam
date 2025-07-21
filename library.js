 const taskArray=[], authorArray=[], mem_Array=[];
 function addMenu()
        {
            const textInput=document.getElementById("textInput");
            const taskValue=textInput.value.trim();
            // console.log(taskValue)
            const textInput2=document.getElementById("textInput2");
            const authValue=textInput2.value.trim();

            if(taskValue!=="" &&authValue!=="")
                {
                    createtaskElement(taskValue,authValue);

                    textInput.value="";
                    textInput2.value="";
                }
        }

        function createtaskElement(task, auth_Name)
        {
            taskArray.push(task);
            authorArray.push(auth_Name);
            
            
            const taskList=document.getElementById("taskList");

            const li=document.createElement("li");

            li.textContent=task;

            const li_menu=document.createElement("li")
            li_menu.textContent="enter value between 1->4: 1.Issue Book;2.View Issued Book;3.Return Book ;4.Delete book"

            const inputText=document.createElement("input")   
            inputText.placeholder="enter ur choice"

            const enterButton=document.createElement("button");
            enterButton.textContent="Enter";

            enterButton.onclick=function()
            {
            const choice=inputText.value;

            let num= parseInt(choice.trim());

            console.log(num);
            if(num!==""&& num<=4 && num>=1)
            {
            switch(num)
            {
                case 1: 
                    
                const text_Field=document.createElement("input");
                text_Field.placeholder="enter member name";

                const name=text_Field.value.trim();
                mem_Array.push(name);
                
                taskList.appendChild(text_Field)  ;       
                       
                break;

                case 4: const removeButton=document.createElement("button");

                        taskList.appendChild(removeButton);
                break;  

            }
            }

            }
            
            // const issueButton=document.createElement("button")
            
            // issueButton.textContent="Issue Book"
            // li.appendChild(issueButton)

            // const viewButton=document.createElement("button")
            // const returnButton=document.createElement("button");
            // const removeButton=document.createElement("button")  


            taskList.appendChild(li)      
            taskList.appendChild(li_menu)    
            taskList.appendChild(inputText);  
            taskList.appendChild(enterButton)   
        }