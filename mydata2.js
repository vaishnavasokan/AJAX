$(document).ready(function()
{
    $("#image").hide();

    $("#category").change(function()
    {
        $("#image").show();
            $.ajax({
                type:"GET",
                url:"./books.json",
                beforeSend: function(){
                $("#image").show();
                },
                    
                success:function(p)
                {
                    $("#image").hide();
                    var ct=$("#category").val();
                    var output="<table class='table'><thead><tr><th>NAME</th><th>IMAGE</th><th>AUTHOR</th><th>CATEGORY</th><th>PRICE</th></th></thead>"
                    for(var i in p)
                    {   
                            /*output+="<tr><td>"+p[i].name+"</td>";
                            output+="<td><img src='"+p[i].image1+"'width=150 height=150></td>";
                            output+="<td>"+p[i].author+"</td>";
                            output+="<td>"+p[i].category+"</td>";
                            output+="<td>"+p[i].price+"</td></tr>";*/

                        var c=p[i].category;
                        if(c==ct)
                        {   
                            output+="<tr><td>"+p[i].name+"</td>";
                            output+="<td><img src='"+p[i].image1+"'width=150 height=150></td>";
                            output+="<td>"+p[i].author+"</td>";
                            output+="<td>"+p[i].category+"</td>";
                            output+="<td>"+p[i].price+"</td></tr>";

                        }
                            
                    }
                    output+="</table>";
                    $(".result").html(output);
                }
            });
    });        

});
