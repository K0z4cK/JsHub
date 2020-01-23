$(function(){
    $("#myInput").on("keyup", function() {
      let value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        console.log($(this).text());
      });
    });
  });


 $(function () {
         let url = `https://poloniex.com/public?command=returnCurrencies`;
         let numOfRow = 0;
         $.getJSON(url, function (data) {
             for(firstKey in data){
              numOfRow++;
              let table = document.getElementById("myTable");
              let row = table.insertRow(numOfRow-1);
              for(let i =0; i < 7; i++){
                let cell = row.insertCell(i);
                switch(i)
                {
                  case 0:
                    cell.innerHTML = numOfRow;
                    break;
                  case 1:
                    cell.innerHTML = data[firstKey].name;
                    break;
                  case 2:
                    cell.innerHTML = data[firstKey].humanType;
                    break;
                  case 3:
                    cell.innerHTML = data[firstKey].currencyType;
                    break;  
                  case 4:
                    cell.innerHTML = data[firstKey].txFee;
                    break;
                  case 5:
                    cell.innerHTML =  data[firstKey].minConf;
                    break;
                  case 6:
                    //cell.innerHTML = "<button class='btn'>Delete</button>" ;
                    let btn = document.createElement("button");
                    btn.innerHTML="Delete";
                    btn.addEventListener("click", function Delete() {
                    let row = this.parentNode.parentNode;
                    row.parentNode.removeChild(row);
                    });
                    cell.appendChild(btn);
                    
                    break;
                }
                
              }
            }

         });
     });
