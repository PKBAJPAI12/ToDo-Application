let getText=document.getElementById("textcontent");
let parent=document.getElementById("notesection");
let rparent=document.getElementById("alerthead");
let newele=document.createElement("h3");
let table=document.createElement("table");
let tr1=document.createElement("tr");
let th1=document.createElement("th");
            let th2=document.createElement("th");
            let th3=document.createElement("th");
            let th4=document.createElement("th");
            th1.innerHTML="Notes Name";
            th2.innerHTML="Update";
            th3.innerHTML="Status";
            th4.innerHTML="Delete";
            tr1.setAttribute("class","trclass")

    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);


            table.appendChild(tr1);

table.setAttribute("class","tableclass");


let lastEle=null;


let notes=[];
//let stylep=[];
let mynote=localStorage.getItem("mynotes");
//let styleprop=localStorage.getItem("mystyle");
if(mynote){
    mynote=JSON.parse(mynote);
  //  styleprop=JSON.parse(styleprop);

    mynote.forEach(function(todo,index){
        getNotes(todo,index);
        //localStorage.setItem("mystyle",JSON.stringify(style));
    })
   
}

function getNotes(todo,index){
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    let td4=document.createElement("td");
            
    
/*if(styleprop[index]=="true"){
console.log(index);
console.log(styleprop[index]);
td1.innerHTML=todo;
td1.style.textDecoration="line-through";
td2.innerHTML="<span>&#9998</span>";
td3.innerHTML="<input type='checkbox' class='check' checked></input>";
td4.innerHTML="<span>&times;</span>";
}
else if(styleprop[index]=="false") {   
    console.log(index);
console.log(styleprop[index]);
td1.innerHTML=todo;
td2.innerHTML="<span>&#9998</span>";
td3.innerHTML="<input type='checkbox' class='check'></input>";
td4.innerHTML="<span>&times;</span>";

 
}*/
td1.innerHTML=todo;
td2.innerHTML="<span>&#9998</span>";
td3.innerHTML="<input type='checkbox' class='check'></input>";
td4.innerHTML="<span>&times;</span>";
tr.setAttribute("class","trclass")
td1.setAttribute("class","td1class")
td2.setAttribute("class","td2class")
td3.setAttribute("class","td2class")
td4.setAttribute("class","td2class")

   tr.appendChild(td1);
   tr.appendChild(td2);
   tr.appendChild(td3);
   tr.appendChild(td4);

                       table.appendChild(tr);
                       parent.appendChild(table);
                       td2.addEventListener("click",function(){
                        td1.innerHTML=`<textarea id='updateText' cols='100' rows='2'>${td1.innerHTML}</textarea>`;
                       // getText.value=td1.innerHTML;
                       td1.addEventListener("keydown",updateNote);
                        function updateNote(event){
                            if(event.key=="Enter"){
        
                                if(event.target.value.length>0){
                                    let updateText=document.getElementById("updateText");
                                    editToDo(td1,updateText,todo);

                        

                                }
                                else if(event.target.value.length==0){
                                    console.log("Note is Empty");
                                    newele.innerHTML="Please Add Text Your Note is Empty";
                                    newele.style.color="orange";
                            
                                }
                                if(lastEle){
                                    rparent.removeChild(lastEle);  
                                }
                                rparent.appendChild(newele);
                        lastEle=newele;
                            }
                        }
        
                    })
        
        
        
                    td3.addEventListener("click",
                        function(){
                            let checking=document.querySelector("input[type=checkbox]");
                            if(checking.checked==true){
                                td1.style.textDecoration="line-through";
                                newele.innerHTML="Your Task is Completed";
                                newele.style.color="Green";
                               /* let idx=notes.indexOf(todo);
                    stylep[idx]='true';
                    localStorage.setItem("mystyle",JSON.stringify(stylep));*/
                                if(lastEle){
                                    rparent.removeChild(lastEle);  
                                }
                                rparent.appendChild(newele);
                        lastEle=newele;
                            }
                            else{
                                td1.style.textDecoration="none";
                                /*let idx=notes.indexOf(todo);
                                stylep[idx]='false';
                                localStorage.setItem("mystyle",JSON.stringify(stylep));
        */
                                newele.innerHTML="";
                                newele.style.color="Green";
                                
                            }
                            
                            
                        });
        
                       
        td4.addEventListener("click",
                        function(){
                            console.log("delete");
                            deleteToDo(tr,todo);
                                                   
                    });
                        
                        newele.style.textAlign="center";
                        newele.style.marginBottom="1rem";
                  


                       notes.push(todo);
                       //style.push(bool);
                    localStorage.setItem("mynotes",JSON.stringify(notes));

}

getText.addEventListener("keydown",addNote);
function addNote(event){
     if(event.key=="Enter"){
    
        if(event.target.value.length>0){
            let todo=getText.value;
            //let bool="false";
            getNotes(todo);
            }

         else if(event.target.value.length==0){
        newele.innerHTML="Required to Add Text Note";
        newele.style.color="orange";
         }

         newele.style.textAlign="center";
        newele.style.marginBottom="1rem";
        if(lastEle){
            rparent.removeChild(lastEle);  
        }
        rparent.appendChild(newele);
lastEle=newele;

        }
    
        
}

function editToDo(td1,updateText,todo){
    td1.innerHTML=`<td class='td1class'>${updateText.value}</td>`;
    newele.innerHTML="Your Note was Updated";
newele.style.color="green";
let idx=notes.indexOf(todo);
notes[idx]=updateText.value;
localStorage.setItem("mynotes",JSON.stringify(notes));
}
function deleteToDo(tr,todo){
    table.removeChild(tr); 
                            let idx=notes.indexOf(todo);
                            notes.splice(idx,1);       
                            localStorage.setItem("mynotes",JSON.stringify(notes));     
                            newele.innerHTML="Your Note was Deleted";
                            newele.style.color="red";
                           if(lastEle){
                                rparent.removeChild(lastEle);  
                            }
                        
                            rparent.appendChild(newele);
                        lastEle=newele;     
}
