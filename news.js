$(document).ready(function()
{
    $("#btn1").click(function()
    {
        $.ajax({
            type:"GET",
            url:"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=450a05fe7424410196a07e021d36ac77",
            success:function(p)
            {
                var output="<table class='table'>";
                for(var i in p['articles'])               
                {
                    output+="<tr>";
                    output+="<td>"+  p['articles'][i].title+"</td>";
                    output+="<td><img src='"+ p['articles'][i].urlToImage +"'width=150''height=150'></td>";
                    output+="<td>Date Published : "+p['articles'][i].publishedAt+"</td>";
                    output+="<td>"+  p['articles'][i].description   +"</td>";
                    output+="<td><a href='"+p['articles'][i].url+"'>Read More</a><td>";
                    
                }
                
                output+="</table>";
                $(".result").html(output);
            }
        });
    });
});