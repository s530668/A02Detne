
                function showData()
                {
                    
                    //--window.alert("clicked button");
                    //var sandwich=$("#sandwich").html("10");
                    //window.alert("sandwich value:"+$("#sandwich").html("10"));
                    //alert();
                    //alert($( "#foodItem option:selected" ).text());
                    var i1= $( "#foodItem" ).val();
                    var q1= $( "#quantItem" ).val();
                    /*var i2=15
                    var i3=20;
                    var i4=25;//items price
                    var i=[sandwich,Burger,pizza,fries];
                    var j=[Coke,LimeDrink,Pepsi,WaterBottle]; */
 
                    var c1= $( "#drinkItem" ).val();//drinks price
                    var q2= $( "#quantDrink" ).val();
                    
                  /*  var c2=10;
                    var c3=15;
                    var c4=20; */

                    $("#p1").val(add(i1,q1,c1,q2));
                    
                    
                }
                function add(i1,q1, c1,q2) {
                    var c=Number(i1)*q1 + Number(c1)*q2;
                    //document.getElementById("text").innerHTML()=add.val();
                    //$("#p1").val(0);
                 
                   
                    return c;
 
                }
               