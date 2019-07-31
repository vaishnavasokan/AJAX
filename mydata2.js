$(document).ready(function()
{
    $("#image").hide();

    $("#btn1").click(function()
    {
        $("#image").show();
            $.ajax({
                    type:"GET",
                    url:"./books.json",
                    success:function(p)
                    {
                        $("#image").hide();
                        
                        var output="<table class='table'><thead><tr><th>NAME</th><th>IMAGE</th><th>AUTHOR</th><th>CATEGORY</th><th>PRICE</th></th></thead>"
                        //var output="";
                        for(var i in p)
                        {   
                            output+="<tr><td>"+p[i].name+"</td>";
                            output+="<td><img src='"+p[i].image1+"'width=150 height=150></td>";
                            output+="<td>"+p[i].author+"</td>";
                            output+="<td>"+p[i].category+"</td>";
                            output+="<td>"+p[i].price+"</td></tr>";
                            
                        }
                        output+="</table>";
                        $(".result").html(output);
                    }
                });           
    });

    $("#category").mouseenter(function()
    {

        $("#ct").slideDown("slow");
            $("#c1").click(function()
            {
                var cname=$("#c1").val();
                
                $("#ct").hide(250);

                $.ajax({
                        type:"GET",
                        url:"./books.json",
                        success:function(p)
                        {
                            console.log(cname);
                            for(var i in p)
                            {
                                if(p[i].category==cname)
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

});
