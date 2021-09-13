function retrieve()
{
   var xhttp=new XMLHttpRequest();
   xhttp.onreadystatechange=function()
   {
      if(this.readyState==4&&this.status==200)
      {
         var response=JSON.parse(this.responseText);
         var jresponse=response.grocery;
         console.log(jresponse);
         var outputgrocery="";
            
                outputgrocery +="<tr>"+ 
                    "<th>"+ "Sl No" +"</th>"+
                    "<th>"+ "Name "+"</th>"+
                    "<th>"+ "Quantity" +"</th>"+
                    "<th>"+ "Unit" +"</th>"+
                    "<th>"+ "Department" +"</th>"+
                    "<th>"+ "Notes" +"</th>"
                +"<tr>";
              
         for(var i=0;i<jresponse.length;i++)
         {
            outputgrocery +="<tr>"+ 
            "<td>"+ jresponse[i].slno +"</td>"+
            "<td>"+ jresponse[i].item +"</td>"+
            "<td>"+ jresponse[i].quantity +"</td>"+
            "<td>"+ jresponse[i].unit +"</td>"+
            "<td>"+ jresponse[i].department +"</td>"+
            "<td>"+ jresponse[i].notes +"</td>"+
            
            "<tr>";
         }
         document.getElementById("tableid").innerHTML=outputgrocery;
      }
   }
   xhttp.open("GET","grocery.json",true);
   xhttp.send();
}