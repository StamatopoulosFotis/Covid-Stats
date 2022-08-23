"use strict";

$.ajax({                    //perform APi call     

type: "get",  
url: "https://api.covid19api.com/summary",  //from which link we are getting the data
success: function(responce){    //if Api call successs, we need to write a callback function



    console.log(responce.Countries);        //Countries is the name of the array 

       for(let i = 0;  i < responce.Countries.length; i++ ){  //we need to loop through all the 192 objects

        //  console.log(responce.Countries[i].TotalConfirmed)
        //we must create a dynamic table
     


          //beacause we are not have property for active cases
          //To get the active cases,  we have to do an operation : TotalConfirmed - TotalRecovered
          let totalActive = responce.Countries[i].TotalConfirmed - responce.Countries[i].TotalRecovered;



          
          let tableRow = `<tr><td> ${responce.Countries[i].Country} </td>  <td> ${responce.Countries[i].TotalConfirmed}   </td> <td> ${totalActive}  </td> <td> ${responce.Countries[i].TotalRecovered} </td>  <td>${responce.Countries[i].TotalDeaths} </td></tr>`;
          



          $("#tbody").append(tableRow);

       }                               
  


},

error: function(error){    //if Api call is failed.  error also have a callback function  

    console.log(error);

}

})