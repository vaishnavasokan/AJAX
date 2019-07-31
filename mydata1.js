$(document).ready(function()
{
        $("#image").hide();

    $("#btn1").click(function()
    {
            $("#image").show();
            $.ajax({
                    type:"GET",
                    url:"https://jsonplaceholder.typicode.com/users",
                    //beforesend:function()
                    success:function(p)
                    {
                        $("#image").hide();
                        
                        //var output="<table class='table'><thead><tr><td>ID</td><td>NAME</td><td>USERNAME</td><td>EMAIL</td><td>ADDRESS</td></tr></thead>"
                        var output="";
                        for(var i in p)
                        {   
                            output+="<br>";
                            output+="<div class='card' style='text-align:center'; border: 1px solid black; margin: 15px'>"
                            output+="<div class='card-header'style='text-align:center';>"+p[i].name+"</div>";
                            output+="<h5 class='card-title'>"+p[i].id+"</h5>";
                            output+="<p class='card-text'>"+p[i].username+"</p>";
                            output+="<p class='card-text'>email :"+p[i].email+"</p>";
                            output+="<p class='card-text'>Address :"+p[i].address.street+"</p>";
                            output+="<p class='card-text'>"+p[i].address.suite+"</p>";
                            output+="<p class='card-text'>"+p[i].address.city+"</p>";
                            output+="<p class='card-text'>zipcode :"+p[i].address.zipcode+"</p>";
                            output+="</div>";
                            //output+="<button type='button' class='btn btn-primary'>Contact</button><p>";
                            
                            
                            /*output+="<td>"+p[i].name+"</td>";
                            output+="<td>"+p[i].username+"</td>";
                            output+="<td>"+p[i].email+"</td>";
                            output+="<td>"+p[i].address.street+" ,"+p[i].address.suite+" "+p[i].address.city+" "+p[i].address.zipcode+"</td></tr>";*/
                        }
                        
                        $(".result").html(output);
                    }
                    
        });
    });
    
});