    var myArr=[];
    var myValues=[];
    var filter=document.getElementById("filter");
    var myObj={name: "",Email:"",password:"",confimPassword:"",Phone:""}
    function pushData(e)
    {
      e.preventDefault();
      myObj.name=document.getElementById('name').value;
      myObj.Email=document.getElementById('Email').value;
      myObj.password=document.getElementById('password').value;
      myObj.confimPassword=document.getElementById('confimPassword').value;
      myObj.Phone=document.getElementById('Phone').value;
      //if(myObj.password==myObj.confimPassword){

      //}
    }
        const submitbtn = document.getElementById('submit');
        submitbtn.addEventListener('click',pushData);

        submitbtn.addEventListener('click',()=>{
          var mypass= document.getElementById('password');
          var myConfpass= document.getElementById('confimPassword');
          var name= document.getElementById('name');
            if(localStorage.getItem(password.value) != localStorage.getItem(confimPassword.value)){
              alert('oops! your passwords are not Identical,please try again!');
               mypass.style.background = "red";
               myConfpass.style.background="red";
            }
            else{
                localStorage.setItem(password.value,JSON.stringify(myObj) );
                mypass.style.background = "white";
                myConfpass.style.background="white";
                myArr.push(myObj);
                console.log(myArr);
                var table = document.getElementById("table-data");
                var delBtn = document. createElement("button");
                delBtn.innerHTML = "Delete";
                row = table.insertRow(1);
                cell0 = row.insertCell(0);
                cell1 = row.insertCell(1);
                cell2 = row.insertCell(2);
                cell3 = row.insertCell(3);
                cell4 = row.insertCell(4);
                cell5 = row.insertCell(5);
                cell0.innerHTML = myObj.name;
                cell1.innerHTML = myObj.Email;
                cell2.innerHTML = myObj.password;
                cell3.innerHTML = myObj.confimPassword;
                cell4.innerHTML = myObj.Phone;
                cell5.innerHTML = delBtn.outerHTML;
            }


              //delete specific row from the table
              var index, table = document.getElementById('table-data');
             for(var i = 1; i < table.rows.length; i++)
             {

                 table.rows[i].cells[5].onclick = function()
                 {
                     var c = confirm("do you want to delete this row");
                     if(c === true)
                     {
                         index = this.parentElement.rowIndex;
                         table.deleteRow(index);

                     }
                 };
             }
    });
    for (var i = 0; i < localStorage.length; i++) {

    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    myValues.push(value);
 }

    var filterName=document.getElementById("filter-name");

    filterName.addEventListener('click',function(e){
        e.preventDefault();
        myValues.forEach(password => {
            var f =filter.value;
            var u =(JSON.parse(password)).name;
            if(f == u ){
                console.log(f);
                var ul=document.getElementById("listOfSerch");
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(password));
                ul.appendChild(li);
            }
        });

    });
