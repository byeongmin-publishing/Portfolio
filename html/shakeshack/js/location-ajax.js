$(document).ready(function(){    
    $(".menu-section li").click(function(event){
    // Class ="menu-section li"를 누를때

        var i = $(this).index();
        // Class ="menu-section li"의 수를 구하고

        // console.log(i);

        $.ajax({
        // ajax에서

            type : "GET",
            url:"../js/location-data.json",
            dataType: "Json",
    
            success:function(data){ 
            // 성공했을 때


                $(".title-kr").text(data.locationTitle[i].titleKr);
                // 타이틀-한글

                $(".title-en").text(data.locationTitle[i].titleEn);
                // 타이틀-영어

                $(".location-map").attr("src", data.locationTitle[i].locationMap);
                //지도

                $(".location-img").attr("src", data.locationTitle[i].locationImg);
                //이미지

                $(".location-text1").text(data.locationTitle[i].locationText1);
                // 이미지텍스트1

                $(".location-text2").text(data.locationTitle[i].locationText2);
                // 이미지텍스트2

                $(".location-info-address").html(data.locationTitle[i].infoAddress1 + "<br>" + data.locationTitle[i].infoAddress2);
                // 매장주소

                $(".location-info-tel").text(data.locationTitle[i].infoTel);
                // TEL

                $(".location-info-time").html(data.locationTitle[i].infoTime1 + "<span></span>" + data.locationTitle[i].infoTime2);
                // 운영시간

                $(".location-info-delivery").html(data.locationTitle[i].infoDelivery1 + "<span></span>" + data.locationTitle[i].infoDelivery2);
                // 딜리버리

                $(".location-info-parking").text(data.locationTitle[i].infoParking);
                // 주차안내

            },
            error:function(){
            // 실패했을때

                console.log("error");
                // console에 error 입력
            }
        });  

        event.preventDefault();
        //클릭시 화면 위로가는 액션 제거

        $(this).addClass("on").siblings().removeClass("on");
        // li 클릭 애니메이션

    }); 



    // 매장주소 1줄
    $(".menuL-X").click(function(){

        var i = $(this).index();

        $.ajax({

            type : "GET",
            url:"../js/location-data.json",
            dataType: "Json",
    
            success:function(data){ 

                $(".location-info-address").html(data.locationTitle[i].infoAddress1);

            },
            error:function(){

                console.log("error");

            }
        });  
    });



    // 딜리버리 1줄
    $(".menuD-X").click(function(){

        var i = $(this).index();

        $.ajax({

            type : "GET",
            url:"../js/location-data.json",
            dataType: "Json",
    
            success:function(data){ 

                $(".location-info-delivery").html(data.locationTitle[i].infoDelivery1);

            },
            error:function(){

                console.log("error");

            }
        });  
    });



    // 매장주소, 딜리버리 1줄
    $(".menuLD-X").click(function(){

        var i = $(this).index();

        $.ajax({

            type : "GET",
            url:"../js/location-data.json",
            dataType: "Json",
    
            success:function(data){ 

                $(".location-info-address").html(data.locationTitle[i].infoAddress1);
                $(".location-info-delivery").html(data.locationTitle[i].infoDelivery1);

            },
            error:function(){

                console.log("error");

            }
        });  
    });



    // 운영시간, 딜리버리 1줄
    $(".menuTD-X").click(function(){

        var i = $(this).index();

        $.ajax({

            type : "GET",
            url:"../js/location-data.json",
            dataType: "Json",
    
            success:function(data){ 

                $(".location-info-time").html(data.locationTitle[i].infoTime1);
                $(".location-info-delivery").html(data.locationTitle[i].infoDelivery1);

            },
            error:function(){

                console.log("error");

            }
        });  
    });





    // 매장위치, 운영시간, 딜리버리 1줄

    $(".menuLTD-X").click(function(){

        var i = $(this).index();

        $.ajax({

            type : "GET",
            url:"../js/location-data.json",
            dataType: "Json",
    
            success:function(data){ 

                $(".location-info-address").html(data.locationTitle[i].infoAddress1);
                $(".location-info-time").html(data.locationTitle[i].infoTime1);
                $(".location-info-delivery").html(data.locationTitle[i].infoDelivery1);
    
            },
            error:function(){

                console.log("error");

            }
        });  
    });

    $(".jamsil").click(function(){
        // var Nomap = $("#no-map");
        // Nomap.css("display", "block");
        $("#no-map").fadeIn();
        $(this).siblings().click(function(){
            $("#no-map").fadeOut();
        })
    })

});
