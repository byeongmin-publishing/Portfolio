//option1 변경 이벤트

$(".option1").change(function(){

    let searchBtn = $(".search");       //기존 input에서 체크를 하고 항목을 바꿨을때 초기화
    searchBtn.removeClass();        //증상찾기 초기화
    searchBtn.addClass("search");       //증상찾기 초기화
    arr.splice(0);      //증상 코드 초기화
    let option1Index = $(this).val();       //option2 이벤트를 위한 option1 value 가져오기

    $.ajax({
        type : "GET",
        url:"./js/select-data.json",
        dataType: "Json",       //제이슨 연결
        success:function(data){     //성공했을때





            // option2 갯수, 텍스트 설정

            if(option1Index == 1){      //option1을 눌렀을때 - 귀
                $(".option2 option").remove();      //모든 option 삭제
                for(var count = 0; count < data.optionEar.length; count++){       //귀 다음 선택지 갯수만큼 반복
                    $(".option2").append('<option></option>');      //옵션 생성
                };
                $(".option2 option").each(function(){       //귀 다음 선택지 갯수만큼 반복
                    i = $(this).index();        //option2의 수 구하기
                    $(".option2 option").eq(i).text(data.optionEar[i]).val(i);      //option2 option에 텍스트 생성
                });
                $(".option2 option").eq(0).attr("disabled", true);      //option2의 첫번째 option은 선택X
                
                

                // option2 변경 이벤트

                $(".option2").change(function(){        //option2 눌렀을 때

                    searchBtn.removeClass();        //증상찾기 초기화
                    searchBtn.addClass("search");       //증상찾기 초기화
                    arr.splice(0);      //증상 코드 초기화
                    let option2Index = $(this).val();       //옵션2의 번호 구하기
                    $(".main-logo").css("width", "150px");      //로고 작아지기

                    if(option2Index == 1){      //option2에서 첫번째 항목 눌렀을 때
                        $(".option3-checkbox").remove();    
                        for(var count = 0; count < data.ear.option2A.option3.length; count++){
                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };
                        $(".option3-checkbox").each(function(){
                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.ear.option2A.for[i]+'"><label for="'+data.ear.option2A.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.ear.option2A.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.ear.option2A.code[i]);
                        });

                    }else if(option2Index == 2){

                        $(".option3-checkbox").remove();

                        for(var count = 0; count < data.ear.option2B.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.ear.option2B.for[i]+'"><label for="'+data.ear.option2B.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.ear.option2B.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.ear.option2B.code[i]);

                        });

                    }else if(option2Index == 3){

                        $(".option3-checkbox").remove();
                        
                        for(var count = 0; count < data.ear.option2C.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.ear.option2C.for[i]+'"><label for="'+data.ear.option2C.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.ear.option2C.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.ear.option2C.code[i]);

                        });

                    };
                    // $(".option3-wrap").css("height", "200px");
                    $(".option3-wrap").stop().slideDown(500);
                });





            }else if(option1Index == 2){
                $(".option2 option").remove();
                for(var count = 0; count < data.optionEye.length; count++){
                    $(".option2").append('<option></option>');
                };
                $(".option2 option").each(function(){
                    i = $(this).index();
                    $(".option2 option").eq(i).text(data.optionEye[i]).val(i);
                });
                $(".option2 option").eq(0).attr("disabled", true);
                
                

                $(".option2").change(function(){
                    $(".main-logo").css("width", "150px");
                    let option2Index = $(this).val();

                    if(option2Index == 1){
                        $(".option3-checkbox").remove();    
                        for(var count = 0; count < data.eye.option2A.option3.length; count++){
                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };
                        $(".option3-checkbox").each(function(){
                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.eye.option2A.for[i]+'"><label for="'+data.eye.option2A.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.eye.option2A.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.eye.option2A.code[i]);
                        });

                    }else if(option2Index == 2){

                        $(".option3-checkbox").remove();

                        for(var count = 0; count < data.eye.option2B.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.eye.option2B.for[i]+'"><label for="'+data.eye.option2B.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.eye.option2B.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.eye.option2B.code[i]);

                        });

                    }else if(option2Index == 3){

                        $(".option3-checkbox").remove();
                        
                        for(var count = 0; count < data.eye.option2C.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.eye.option2C.for[i]+'"><label for="'+data.eye.option2C.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.eye.option2C.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.eye.option2C.code[i]);

                        });

                    }else if(option2Index == 4){

                        $(".option3-checkbox").remove();
                        
                        for(var count = 0; count < data.eye.option2D.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.eye.option2D.for[i]+'"><label for="'+data.eye.option2D.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.eye.option2D.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.eye.option2D.code[i]);

                        });

                    }else if(option2Index == 5){

                        $(".option3-checkbox").remove();
                        
                        for(var count = 0; count < data.eye.option2E.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.eye.option2E.for[i]+'"><label for="'+data.eye.option2E.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.eye.option2E.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.eye.option2E.code[i]);

                        });

                    }
                    $(".option3-wrap").stop().slideDown(500);
                });




                
            }else if(option1Index == 3){
                $(".option2 option").remove();
                for(var count = 0; count < data.optionNose.length; count++){
                    $(".option2").append('<option></option>');
                };
                $(".option2 option").each(function(){
                    i = $(this).index();
                    $(".option2 option").eq(i).text(data.optionNose[i]).val(i);
                });
                $(".option2 option").eq(0).attr("disabled", true);
                
                

                $(".option2").change(function(){
                    $(".main-logo").css("width", "150px");
                    let option2Index = $(this).val();

                    if(option2Index == 1){
                        $(".option3-checkbox").remove();    
                        for(var count = 0; count < data.nose.option2A.option3.length; count++){
                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };
                        $(".option3-checkbox").each(function(){
                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.nose.option2A.for[i]+'"><label for="'+data.nose.option2A.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.nose.option2A.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.nose.option2A.code[i]);
                        });

                    }else if(option2Index == 2){

                        $(".option3-checkbox").remove();

                        for(var count = 0; count < data.nose.option2B.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.nose.option2B.for[i]+'"><label for="'+data.nose.option2B.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.nose.option2B.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.nose.option2B.code[i]);

                        });

                    }else if(option2Index == 3){

                        $(".option3-checkbox").remove();
                        
                        for(var count = 0; count < data.nose.option2C.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.nose.option2C.for[i]+'"><label for="'+data.nose.option2C.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.nose.option2C.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.nose.option2C.code[i]);

                        });

                    }else if(option2Index == 4){

                        $(".option3-checkbox").remove();
                        
                        for(var count = 0; count < data.nose.option2D.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.nose.option2D.for[i]+'"><label for="'+data.nose.option2D.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.nose.option2D.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.nose.option2D.code[i]);

                        });

                    }else if(option2Index == 5){

                        $(".option3-checkbox").remove();
                        
                        for(var count = 0; count < data.nose.option2E.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.nose.option2E.for[i]+'"><label for="'+data.nose.option2E.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.nose.option2E.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.nose.option2E.code[i]);

                        });

                    }
                    $(".option3-wrap").stop().slideDown(500);
                });





            }else if(option1Index == 4){
                $(".option2 option").remove();
                for(var count = 0; count < data.optionMouse.length; count++){
                    $(".option2").append('<option></option>');
                };
                $(".option2 option").each(function(){
                    i = $(this).index();
                    $(".option2 option").eq(i).text(data.optionMouse[i]).val(i);
                });
                $(".option2 option").eq(0).attr("disabled", true);
                
                

                $(".option2").change(function(){
                    $(".main-logo").css("width", "150px");
                    let option2Index = $(this).val();

                    if(option2Index == 1){
                        $(".option3-checkbox").remove();    
                        for(var count = 0; count < data.mouse.option2A.option3.length; count++){
                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };
                        $(".option3-checkbox").each(function(){
                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.mouse.option2A.for[i]+'"><label for="'+data.mouse.option2A.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.mouse.option2A.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.mouse.option2A.code[i]);
                        });

                    }else if(option2Index == 2){

                        $(".option3-checkbox").remove();

                        for(var count = 0; count < data.mouse.option2B.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.mouse.option2B.for[i]+'"><label for="'+data.mouse.option2B.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.mouse.option2B.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.mouse.option2B.code[i]);

                        });

                    }else if(option2Index == 3){

                        $(".option3-checkbox").remove();
                        
                        for(var count = 0; count < data.mouse.option2C.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.mouse.option2C.for[i]+'"><label for="'+data.mouse.option2C.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.mouse.option2C.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.mouse.option2C.code[i]);

                        });

                    }

                    $(".option3-wrap").stop().slideDown(500);
                });



            }else if(option1Index == 5){
                $(".option2 option").remove();
                for(var count = 0; count < data.optionSkin.length; count++){
                    $(".option2").append('<option></option>');
                };
                $(".option2 option").each(function(){
                    i = $(this).index();
                    $(".option2 option").eq(i).text(data.optionSkin[i]).val(i);
                });
                $(".option2 option").eq(0).attr("disabled", true);
                
                

                $(".option2").change(function(){
                    $(".main-logo").css("width", "150px");
                    let option2Index = $(this).val();

                    if(option2Index == 1){
                        $(".option3-checkbox").remove();    
                        for(var count = 0; count < data.skin.option2A.option3.length; count++){
                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };
                        $(".option3-checkbox").each(function(){
                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.skin.option2A.for[i]+'"><label for="'+data.skin.option2A.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.skin.option2A.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.skin.option2A.code[i]);
                        });

                    }else if(option2Index == 2){

                        $(".option3-checkbox").remove();

                        for(var count = 0; count < data.skin.option2B.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.skin.option2B.for[i]+'"><label for="'+data.skin.option2B.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.skin.option2B.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.skin.option2B.code[i]);

                        });

                    }else if(option2Index == 3){

                        $(".option3-checkbox").remove();
                        
                        for(var count = 0; count < data.skin.option2C.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.skin.option2C.for[i]+'"><label for="'+data.skin.option2C.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.skin.option2C.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.skin.option2C.code[i]);

                        });

                    }else if(option2Index == 4){

                        $(".option3-checkbox").remove();
                        
                        for(var count = 0; count < data.skin.option2D.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.skin.option2D.for[i]+'"><label for="'+data.skin.option2D.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.skin.option2D.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.skin.option2D.code[i]);

                        });

                    }else if(option2Index == 5){

                        $(".option3-checkbox").remove();
                        
                        for(var count = 0; count < data.skin.option2E.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.skin.option2E.for[i]+'"><label for="'+data.skin.option2E.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.skin.option2E.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.skin.option2E.code[i]);

                        });

                    }else if(option2Index == 6){

                        $(".option3-checkbox").remove();
                        
                        for(var count = 0; count < data.skin.option2F.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.skin.option2F.for[i]+'"><label for="'+data.skin.option2F.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.skin.option2F.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.skin.option2F.code[i]);

                        });

                    }else if(option2Index == 7){

                        $(".option3-checkbox").remove();
                        
                        for(var count = 0; count < data.skin.option2G.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.skin.option2G.for[i]+'"><label for="'+data.skin.option2G.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.skin.option2G.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.skin.option2G.code[i]);

                        });

                    }
                    $(".option3-wrap").stop().slideDown(500);
                });
            }else if(option1Index == 6){
                $(".option2 option").remove();
                for(var count = 0; count < data.optionLeg.length; count++){
                    $(".option2").append('<option></option>');
                };
                $(".option2 option").each(function(){
                    i = $(this).index();
                    $(".option2 option").eq(i).text(data.optionLeg[i]).val(i);
                });
                $(".option2 option").eq(0).attr("disabled", true);
                
                

                $(".option2").change(function(){
                    $(".main-logo").css("width", "150px");
                    let option2Index = $(this).val();

                    if(option2Index == 1){
                        $(".option3-checkbox").remove();    
                        for(var count = 0; count < data.leg.option2A.option3.length; count++){
                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };
                        $(".option3-checkbox").each(function(){
                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.leg.option2A.for[i]+'"><label for="'+data.leg.option2A.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.leg.option2A.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.leg.option2A.code[i]);
                        });

                    }else if(option2Index == 2){

                        $(".option3-checkbox").remove();

                        for(var count = 0; count < data.leg.option2B.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.leg.option2B.for[i]+'"><label for="'+data.leg.option2B.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.leg.option2B.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.leg.option2B.code[i]);

                        });

                    }

                    $(".option3-wrap").stop().slideDown(500);
                });



            }else if(option1Index == 7){
                $(".option2 option").remove();
                for(var count = 0; count < data.optionReproductive.length; count++){
                    $(".option2").append('<option></option>');
                };
                $(".option2 option").each(function(){
                    i = $(this).index();
                    $(".option2 option").eq(i).text(data.optionReproductive[i]).val(i);
                });
                $(".option2 option").eq(0).attr("disabled", true);
                
                

                $(".option2").change(function(){
                    $(".main-logo").css("width", "150px");
                    let option2Index = $(this).val();

                    if(option2Index == 1){
                        $(".option3-checkbox").remove();    
                        for(var count = 0; count < data.reproductive.option2A.option3.length; count++){
                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };
                        $(".option3-checkbox").each(function(){
                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.reproductive.option2A.for[i]+'"><label for="'+data.reproductive.option2A.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.reproductive.option2A.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.reproductive.option2A.code[i]);
                        });

                    }else if(option2Index == 2){

                        $(".option3-checkbox").remove();

                        for(var count = 0; count < data.reproductive.option2B.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.reproductive.option2B.for[i]+'"><label for="'+data.reproductive.option2B.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.reproductive.option2B.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.reproductive.option2B.code[i]);

                        });

                    }

                    $(".option3-wrap").stop().slideDown(500);
                });



            }else if(option1Index == 8){
                $(".option2 option").remove();
                for(var count = 0; count < data.optionDigestion.length; count++){
                    $(".option2").append('<option></option>');
                };
                $(".option2 option").each(function(){
                    i = $(this).index();
                    $(".option2 option").eq(i).text(data.optionDigestion[i]).val(i);
                });
                $(".option2 option").eq(0).attr("disabled", true);
                
                

                $(".option2").change(function(){
                    $(".main-logo").css("width", "150px");
                    let option2Index = $(this).val();

                    if(option2Index == 1){
                        $(".option3-checkbox").remove();    
                        for(var count = 0; count < data.digestion.option2A.option3.length; count++){
                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };
                        $(".option3-checkbox").each(function(){
                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.digestion.option2A.for[i]+'"><label for="'+data.digestion.option2A.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.digestion.option2A.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.digestion.option2A.code[i]);
                        });

                    }else if(option2Index == 2){

                        $(".option3-checkbox").remove();

                        for(var count = 0; count < data.digestion.option2B.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.digestion.option2B.for[i]+'"><label for="'+data.digestion.option2B.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.digestion.option2B.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.digestion.option2B.code[i]);

                        });

                    }

                    $(".option3-wrap").stop().slideDown(500);
                });



            }

        },

        error:function(){

            console.log("error");

        }
    }); 

});











var arr = []; // 클릭한 값을 담을 배열을 변수로 넣기

$(document).on("click", "input", function() { //input을 눌렀을때

    if($(this).is(":checked")){ //input이 체크가 된다면

        var symptomCode = $(this).parent(".option3-checkbox").attr("id"); //.option3-checkbox의 아이디를 추출(증상코드)
        symptomSearch(arr, symptomCode); //symptomSearch 실행
        console.log(arr); //console에 선택된 증상코드

    }else if($(this).not(':checked')){ //input이 체크를 뺀다면

        var symptomCode = $(this).parent(".option3-checkbox").attr("id"); //.option3-checkbox의 아이디를 추출(증상코드)
        symptomSearch2(arr, symptomCode); //symptomSearch2 실행
        console.log(arr); //console에 선택된 증상코드

    };
});

function symptomSearch(array, val) { //symptomSearch

    array.push(val); // 값이 없다면 배열의 마지막에 추가
    $(".search").addClass(val); //증상 찾기 버튼에 증상코드 추가

};
function symptomSearch2(array, val) { //symptomSearch2

    arr = array.filter((element) => element !== val); //선택된 증상코드 제거
    $(".search").removeClass(val); //증상 찾기 버튼에 증상코드 제거
};





// 증상찾기 이벤트 

$(".search").click(function(e){ //눌렀을때

    if(arr == ""){  //증상을 안눌렀을때

        alert("추가 증상을 선택해주세요");  //나오는 알림

    }else{  //증상을 눌렀을때

        e.preventDefault();
        $("#search").css("display", "flex");

        $.ajax({

            type : "GET",
            url:"./js/result-data.json",
            dataType: "Json",  


            success:function(data){

                // function resultFnc(code){
                //     var codecode = data.code
                //     code = codecode;

                //     $(".result-title").text(data.code.resultTitle[0]);
                //     $(".title-sub").text(data.code.titleSub[0]);
                //     $(".result-img").attr("src", data.code.resultImg[0]);
                //     $(".symptomA li").text(data.code.symptomA[0]);
                //     $(".symptomB li").each(function(){
                //         i = $(this).index();
                //         $(".symptomB li").eq(i).text(data.code.symptomB[i]);
                //     });
                //     $(".symptomPart li").text(data.code.symptomPart[0]);
                //     $(".symptomText li").text(data.code.symptomText[0]);
                //     $(".symptomMedical li").text(data.code.symptomMedical[0]);

                // };

                    if($(".search").is('.EAAA00, .EAAA01, .EAAA02, .EAAA03, .EAAA04')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEAAA");
                        $(".resultEAAA").find(".result-title").text(data.result.resultEAAA.resultTitle[0]);
                        $(".resultEAAA").find(".title-sub").text(data.result.resultEAAA.titleSub[0]);
                        $(".resultEAAA").find(".result-img").attr("src", data.result.resultEAAA.resultImg[0]);
                        $(".resultEAAA").find(".symptomA li").text(data.result.resultEAAA.symptomA[0]);
                        for(var count = 0; count < data.result.resultEAAA.symptomB.length; count++){
                            $(".resultEAAA .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEAAA").find(".symptomB li").eq(i).text(data.result.resultEAAA.symptomB[i]);
                        });
                        $(".resultEAAA").find(".symptomPart li").text(data.result.resultEAAA.symptomPart[0]);
                        $(".resultEAAA").find(".symptomText li").text(data.result.resultEAAA.symptomText[0]);
                        $(".resultEAAA").find(".symptomMedical li").text(data.result.resultEAAA.symptomMedical[0]);

                    }

                    if($(".search").is('.EAAA05, .EAAA06')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEAAB");
                        $(".resultEAAB").find(".result-title").text(data.result.resultEAAB.resultTitle[0]);
                        $(".resultEAAB").find(".title-sub").text(data.result.resultEAAB.titleSub[0]);
                        $(".resultEAAB").find(".result-img").attr("src", data.result.resultEAAB.resultImg[0]);
                        $(".resultEAAB").find(".symptomA li").text(data.result.resultEAAB.symptomA[0]);
                        for(var count = 0; count < data.result.resultEAAB.symptomB.length; count++){
                            $(".resultEAAB .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEAAB").find(".symptomB li").eq(i).text(data.result.resultEAAB.symptomB[i]);
                        });
                        $(".resultEAAB").find(".symptomPart li").text(data.result.resultEAAB.symptomPart[0]);
                        $(".resultEAAB").find(".symptomText li").text(data.result.resultEAAB.symptomText[0]);
                        $(".resultEAAB").find(".symptomMedical li").text(data.result.resultEAAB.symptomMedical[0]);

                    };

                    if($(".search").is('.EAAB00, .EAAB01, .EAAB02, .EAAB03')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEAAC");
                        $(".resultEAAC").find(".result-title").text(data.result.resultEAAC.resultTitle[0]);
                        $(".resultEAAC").find(".title-sub").text(data.result.resultEAAC.titleSub[0]);
                        $(".resultEAAC").find(".result-img").attr("src", data.result.resultEAAC.resultImg[0]);
                        $(".resultEAAC").find(".symptomA li").text(data.result.resultEAAC.symptomA[0]);
                        for(var count = 0; count < data.result.resultEAAC.symptomB.length; count++){
                            $(".resultEAAC .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEAAC").find(".symptomB li").eq(i).text(data.result.resultEAAC.symptomB[i]);
                        });
                        $(".resultEAAC").find(".symptomPart li").text(data.result.resultEAAC.symptomPart[0]);
                        $(".resultEAAC").find(".symptomText li").text(data.result.resultEAAC.symptomText[0]);
                        $(".resultEAAC").find(".symptomMedical li").text(data.result.resultEAAC.symptomMedical[0]);

                    };

                    if($(".search").is('.EAAB00, .EAAB01, .EAAB04')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEAAD");
                        $(".resultEAAD").find(".result-title").text(data.result.resultEAAD.resultTitle[0]);
                        $(".resultEAAD").find(".title-sub").text(data.result.resultEAAD.titleSub[0]);
                        $(".resultEAAD").find(".result-img").attr("src", data.result.resultEAAD.resultImg[0]);
                        $(".resultEAAD").find(".symptomA li").text(data.result.resultEAAD.symptomA[0]);
                        for(var count = 0; count < data.result.resultEAAD.symptomB.length; count++){
                            $(".resultEAAD .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEAAD").find(".symptomB li").eq(i).text(data.result.resultEAAD.symptomB[i]);
                        });
                        $(".resultEAAD").find(".symptomPart li").text(data.result.resultEAAD.symptomPart[0]);
                        $(".resultEAAD").find(".symptomText li").text(data.result.resultEAAD.symptomText[0]);
                        $(".resultEAAD").find(".symptomMedical li").text(data.result.resultEAAD.symptomMedical[0]);

                    };

                    if($(".search").is('.EAAB00, .EAAB01')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEAAE");
                        $(".resultEAAE").find(".result-title").text(data.result.resultEAAE.resultTitle[0]);
                        $(".resultEAAE").find(".title-sub").text(data.result.resultEAAE.titleSub[0]);
                        $(".resultEAAE").find(".result-img").attr("src", data.result.resultEAAE.resultImg[0]);
                        $(".resultEAAE").find(".symptomA li").text(data.result.resultEAAE.symptomA[0]);
                        for(var count = 0; count < data.result.resultEAAE.symptomB.length; count++){
                            $(".resultEAAE .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEAAE").find(".symptomB li").eq(i).text(data.result.resultEAAE.symptomB[i]);
                        });
                        $(".resultEAAE").find(".symptomPart li").text(data.result.resultEAAE.symptomPart[0]);
                        $(".resultEAAE").find(".symptomText li").text(data.result.resultEAAE.symptomText[0]);
                        $(".resultEAAE").find(".symptomMedical li").text(data.result.resultEAAE.symptomMedical[0]);

                    };

                    if($(".search").is('.EAAB00, .EAAB01, .EAAB05')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEAAF");
                        $(".resultEAAF").find(".result-title").text(data.result.resultEAAF.resultTitle[0]);
                        $(".resultEAAF").find(".title-sub").text(data.result.resultEAAF.titleSub[0]);
                        $(".resultEAAF").find(".result-img").attr("src", data.result.resultEAAF.resultImg[0]);
                        $(".resultEAAF").find(".symptomA li").text(data.result.resultEAAF.symptomA[0]);
                        for(var count = 0; count < data.result.resultEAAF.symptomB.length; count++){
                            $(".resultEAAF .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEAAF").find(".symptomB li").eq(i).text(data.result.resultEAAF.symptomB[i]);
                        });
                        $(".resultEAAF").find(".symptomPart li").text(data.result.resultEAAF.symptomPart[0]);
                        $(".resultEAAF").find(".symptomText li").text(data.result.resultEAAF.symptomText[0]);
                        $(".resultEAAF").find(".symptomMedical li").text(data.result.resultEAAF.symptomMedical[0]);

                    };

                    if($(".search").is('.EAAC00, .EAAC01, .EAAC02, .EAAC12')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEAAG");
                        $(".resultEAAG").find(".result-title").text(data.result.resultEAAG.resultTitle[0]);
                        $(".resultEAAG").find(".title-sub").text(data.result.resultEAAG.titleSub[0]);
                        $(".resultEAAG").find(".result-img").attr("src", data.result.resultEAAG.resultImg[0]);
                        $(".resultEAAG").find(".symptomA li").text(data.result.resultEAAG.symptomA[0]);
                        for(var count = 0; count < data.result.resultEAAG.symptomB.length; count++){
                            $(".resultEAAG .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEAAG").find(".symptomB li").eq(i).text(data.result.resultEAAG.symptomB[i]);
                        });
                        $(".resultEAAG").find(".symptomPart li").text(data.result.resultEAAG.symptomPart[0]);
                        $(".resultEAAG").find(".symptomText li").text(data.result.resultEAAG.symptomText[0]);
                        $(".resultEAAG").find(".symptomMedical li").text(data.result.resultEAAG.symptomMedical[0]);

                    };

                    if($(".search").is('.EAAC00, .EAAC01, .EAAC02, .EAAC03, .EAAC04')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEAAH");
                        $(".resultEAAH").find(".result-title").text(data.result.resultEAAH.resultTitle[0]);
                        $(".resultEAAH").find(".title-sub").text(data.result.resultEAAH.titleSub[0]);
                        $(".resultEAAH").find(".result-img").attr("src", data.result.resultEAAH.resultImg[0]);
                        $(".resultEAAH").find(".symptomA li").text(data.result.resultEAAH.symptomA[0]);
                        for(var count = 0; count < data.result.resultEAAH.symptomB.length; count++){
                            $(".resultEAAH .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEAAH").find(".symptomB li").eq(i).text(data.result.resultEAAH.symptomB[i]);
                        });
                        $(".resultEAAH").find(".symptomPart li").text(data.result.resultEAAH.symptomPart[0]);
                        $(".resultEAAH").find(".symptomText li").text(data.result.resultEAAH.symptomText[0]);
                        $(".resultEAAH").find(".symptomMedical li").text(data.result.resultEAAH.symptomMedical[0]);

                    };

                    if($(".search").is('.EAAC00, .EAAC01, .EAAC02, .EAAC05, .EAAC06')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEAAI");
                        $(".resultEAAI").find(".result-title").text(data.result.resultEAAI.resultTitle[0]);
                        $(".resultEAAI").find(".title-sub").text(data.result.resultEAAI.titleSub[0]);
                        $(".resultEAAI").find(".result-img").attr("src", data.result.resultEAAI.resultImg[0]);
                        $(".resultEAAI").find(".symptomA li").text(data.result.resultEAAI.symptomA[0]);
                        for(var count = 0; count < data.result.resultEAAI.symptomB.length; count++){
                            $(".resultEAAI .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEAAI").find(".symptomB li").eq(i).text(data.result.resultEAAI.symptomB[i]);
                        });
                        $(".resultEAAI").find(".symptomPart li").text(data.result.resultEAAI.symptomPart[0]);
                        $(".resultEAAI").find(".symptomText li").text(data.result.resultEAAI.symptomText[0]);
                        $(".resultEAAI").find(".symptomMedical li").text(data.result.resultEAAI.symptomMedical[0]);

                    };

                    if($(".search").is('.EAAC00, .EAAC01, .EAAC02, .EAAC06, .EAAC07, .EAAC08')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEAAJ");
                        $(".resultEAAJ").find(".result-title").text(data.result.resultEAAJ.resultTitle[0]);
                        $(".resultEAAJ").find(".title-sub").text(data.result.resultEAAJ.titleSub[0]);
                        $(".resultEAAJ").find(".result-img").attr("src", data.result.resultEAAJ.resultImg[0]);
                        $(".resultEAAJ").find(".symptomA li").text(data.result.resultEAAJ.symptomA[0]);
                        for(var count = 0; count < data.result.resultEAAJ.symptomB.length; count++){
                            $(".resultEAAJ .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEAAJ").find(".symptomB li").eq(i).text(data.result.resultEAAJ.symptomB[i]);
                        });
                        $(".resultEAAJ").find(".symptomPart li").text(data.result.resultEAAJ.symptomPart[0]);
                        $(".resultEAAJ").find(".symptomText li").text(data.result.resultEAAJ.symptomText[0]);
                        $(".resultEAAJ").find(".symptomMedical li").text(data.result.resultEAAJ.symptomMedical[0]);

                    };

                    if($(".search").is('.EAAC09, .EAAC10, .EAAC11')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEAAK");
                        $(".resultEAAK").find(".result-title").text(data.result.resultEAAK.resultTitle[0]);
                        $(".resultEAAK").find(".title-sub").text(data.result.resultEAAK.titleSub[0]);
                        $(".resultEAAK").find(".result-img").attr("src", data.result.resultEAAK.resultImg[0]);
                        $(".resultEAAK").find(".symptomA li").text(data.result.resultEAAK.symptomA[0]);
                        for(var count = 0; count < data.result.resultEAAK.symptomB.length; count++){
                            $(".resultEAAK .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEAAK").find(".symptomB li").eq(i).text(data.result.resultEAAK.symptomB[i]);
                        });
                        $(".resultEAAK").find(".symptomPart li").text(data.result.resultEAAK.symptomPart[0]);
                        $(".resultEAAK").find(".symptomText li").text(data.result.resultEAAK.symptomText[0]);
                        $(".resultEAAK").find(".symptomMedical li").text(data.result.resultEAAK.symptomMedical[0]);

                    };





                    if($(".search").is('.EYAA00, .EYAA01')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEYAA");
                        $(".resultEYAA").find(".result-title").text(data.result.resultEYAA.resultTitle[0]);
                        $(".resultEYAA").find(".title-sub").text(data.result.resultEYAA.titleSub[0]);
                        $(".resultEYAA").find(".result-img").attr("src", data.result.resultEYAA.resultImg[0]);
                        $(".resultEYAA").find(".symptomA li").text(data.result.resultEYAA.symptomA[0]);
                        for(var count = 0; count < data.result.resultEYAA.symptomB.length; count++){
                            $(".resultEYAA .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEYAA").find(".symptomB li").eq(i).text(data.result.resultEYAA.symptomB[i]);
                        });
                        $(".resultEYAA").find(".symptomPart li").text(data.result.resultEYAA.symptomPart[0]);
                        $(".resultEYAA").find(".symptomText li").text(data.result.resultEYAA.symptomText[0]);
                        $(".resultEYAA").find(".symptomMedical li").text(data.result.resultEYAA.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.EYAA02, .EYAA03')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEYAB");
                        $(".resultEYAB").find(".result-title").text(data.result.resultEYAB.resultTitle[0]);
                        $(".resultEYAB").find(".title-sub").text(data.result.resultEYAB.titleSub[0]);
                        $(".resultEYAB").find(".result-img").attr("src", data.result.resultEYAB.resultImg[0]);
                        $(".resultEYAB").find(".symptomA li").text(data.result.resultEYAB.symptomA[0]);
                        for(var count = 0; count < data.result.resultEYAB.symptomB.length; count++){
                            $(".resultEYAB .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEYAB").find(".symptomB li").eq(i).text(data.result.resultEYAB.symptomB[i]);
                        });
                        $(".resultEYAB").find(".symptomPart li").text(data.result.resultEYAB.symptomPart[0]);
                        $(".resultEYAB").find(".symptomText li").text(data.result.resultEYAB.symptomText[0]);
                        $(".resultEYAB").find(".symptomMedical li").text(data.result.resultEYAB.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.EYAB00, .EYAB01, .EYAB02, .EYAB03')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEYAC");
                        $(".resultEYAC").find(".result-title").text(data.result.resultEYAC.resultTitle[0]);
                        $(".resultEYAC").find(".title-sub").text(data.result.resultEYAC.titleSub[0]);
                        $(".resultEYAC").find(".result-img").attr("src", data.result.resultEYAC.resultImg[0]);
                        $(".resultEYAC").find(".symptomA li").text(data.result.resultEYAC.symptomA[0]);
                        for(var count = 0; count < data.result.resultEYAC.symptomB.length; count++){
                            $(".resultEYAC .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEYAC").find(".symptomB li").eq(i).text(data.result.resultEYAC.symptomB[i]);
                        });
                        $(".resultEYAC").find(".symptomPart li").text(data.result.resultEYAC.symptomPart[0]);
                        $(".resultEYAC").find(".symptomText li").text(data.result.resultEYAC.symptomText[0]);
                        $(".resultEYAC").find(".symptomMedical li").text(data.result.resultEYAC.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.EYAB01, .EYAB04, .EYAB05, .EYAB06')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEYAD");
                        $(".resultEYAD").find(".result-title").text(data.result.resultEYAD.resultTitle[0]);
                        $(".resultEYAD").find(".title-sub").text(data.result.resultEYAD.titleSub[0]);
                        $(".resultEYAD").find(".result-img").attr("src", data.result.resultEYAD.resultImg[0]);
                        $(".resultEYAD").find(".symptomA li").text(data.result.resultEYAD.symptomA[0]);
                        for(var count = 0; count < data.result.resultEYAD.symptomB.length; count++){
                            $(".resultEYAD .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEYAD").find(".symptomB li").eq(i).text(data.result.resultEYAD.symptomB[i]);
                        });
                        $(".resultEYAD").find(".symptomPart li").text(data.result.resultEYAD.symptomPart[0]);
                        $(".resultEYAD").find(".symptomText li").text(data.result.resultEYAD.symptomText[0]);
                        $(".resultEYAD").find(".symptomMedical li").text(data.result.resultEYAD.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.EYAC00, .EYAC01, .EYAC02, .EYAC03, .EYAC04, .EYAC05, .EYAC06')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEYAE");
                        $(".resultEYAE").find(".result-title").text(data.result.resultEYAE.resultTitle[0]);
                        $(".resultEYAE").find(".title-sub").text(data.result.resultEYAE.titleSub[0]);
                        $(".resultEYAE").find(".result-img").attr("src", data.result.resultEYAE.resultImg[0]);
                        $(".resultEYAE").find(".symptomA li").text(data.result.resultEYAE.symptomA[0]);
                        for(var count = 0; count < data.result.resultEYAE.symptomB.length; count++){
                            $(".resultEYAE .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEYAE").find(".symptomB li").eq(i).text(data.result.resultEYAE.symptomB[i]);
                        });
                        $(".resultEYAE").find(".symptomPart li").text(data.result.resultEYAE.symptomPart[0]);
                        $(".resultEYAE").find(".symptomText li").text(data.result.resultEYAE.symptomText[0]);
                        $(".resultEYAE").find(".symptomMedical li").text(data.result.resultEYAE.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.EYAC07, .EYAC08, .EYAC09')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEYAF");
                        $(".resultEYAF").find(".result-title").text(data.result.resultEYAF.resultTitle[0]);
                        $(".resultEYAF").find(".title-sub").text(data.result.resultEYAF.titleSub[0]);
                        $(".resultEYAF").find(".result-img").attr("src", data.result.resultEYAF.resultImg[0]);
                        $(".resultEYAF").find(".symptomA li").text(data.result.resultEYAF.symptomA[0]);
                        for(var count = 0; count < data.result.resultEYAF.symptomB.length; count++){
                            $(".resultEYAF .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEYAF").find(".symptomB li").eq(i).text(data.result.resultEYAF.symptomB[i]);
                        });
                        $(".resultEYAF").find(".symptomPart li").text(data.result.resultEYAF.symptomPart[0]);
                        $(".resultEYAF").find(".symptomText li").text(data.result.resultEYAF.symptomText[0]);
                        $(".resultEYAF").find(".symptomMedical li").text(data.result.resultEYAF.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.EYAC07, .EYAC10')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEYAG");
                        $(".resultEYAG").find(".result-title").text(data.result.resultEYAG.resultTitle[0]);
                        $(".resultEYAG").find(".title-sub").text(data.result.resultEYAG.titleSub[0]);
                        $(".resultEYAG").find(".result-img").attr("src", data.result.resultEYAG.resultImg[0]);
                        $(".resultEYAG").find(".symptomA li").text(data.result.resultEYAG.symptomA[0]);
                        for(var count = 0; count < data.result.resultEYAG.symptomB.length; count++){
                            $(".resultEYAG .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEYAG").find(".symptomB li").eq(i).text(data.result.resultEYAG.symptomB[i]);
                        });
                        $(".resultEYAG").find(".symptomPart li").text(data.result.resultEYAG.symptomPart[0]);
                        $(".resultEYAG").find(".symptomText li").text(data.result.resultEYAG.symptomText[0]);
                        $(".resultEYAG").find(".symptomMedical li").text(data.result.resultEYAG.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.EYAC08, .EYAC11, .EYAC12')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEYAH");
                        $(".resultEYAH").find(".result-title").text(data.result.resultEYAH.resultTitle[0]);
                        $(".resultEYAH").find(".title-sub").text(data.result.resultEYAH.titleSub[0]);
                        $(".resultEYAH").find(".result-img").attr("src", data.result.resultEYAH.resultImg[0]);
                        $(".resultEYAH").find(".symptomA li").text(data.result.resultEYAH.symptomA[0]);
                        for(var count = 0; count < data.result.resultEYAH.symptomB.length; count++){
                            $(".resultEYAH .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEYAH").find(".symptomB li").eq(i).text(data.result.resultEYAH.symptomB[i]);
                        });
                        $(".resultEYAH").find(".symptomPart li").text(data.result.resultEYAH.symptomPart[0]);
                        $(".resultEYAH").find(".symptomText li").text(data.result.resultEYAH.symptomText[0]);
                        $(".resultEYAH").find(".symptomMedical li").text(data.result.resultEYAH.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.EYAD00, .EYAD01')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEYAI");
                        $(".resultEYAI").find(".result-title").text(data.result.resultEYAI.resultTitle[0]);
                        $(".resultEYAI").find(".title-sub").text(data.result.resultEYAI.titleSub[0]);
                        $(".resultEYAI").find(".result-img").attr("src", data.result.resultEYAI.resultImg[0]);
                        $(".resultEYAI").find(".symptomA li").text(data.result.resultEYAI.symptomA[0]);
                        for(var count = 0; count < data.result.resultEYAI.symptomB.length; count++){
                            $(".resultEYAI .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEYAI").find(".symptomB li").eq(i).text(data.result.resultEYAI.symptomB[i]);
                        });
                        $(".resultEYAI").find(".symptomPart li").text(data.result.resultEYAI.symptomPart[0]);
                        $(".resultEYAI").find(".symptomText li").text(data.result.resultEYAI.symptomText[0]);
                        $(".resultEYAI").find(".symptomMedical li").text(data.result.resultEYAI.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.EYAE00, .EYAE01, .EYAE02, .EYAE03, .EYAE04, .EYAE05, .EYAE06, .EYAE07, .EYAE08, .EYAE09')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEYAJ");
                        $(".resultEYAJ").find(".result-title").text(data.result.resultEYAJ.resultTitle[0]);
                        $(".resultEYAJ").find(".title-sub").text(data.result.resultEYAJ.titleSub[0]);
                        $(".resultEYAJ").find(".result-img").attr("src", data.result.resultEYAJ.resultImg[0]);
                        $(".resultEYAJ").find(".symptomA li").text(data.result.resultEYAJ.symptomA[0]);
                        for(var count = 0; count < data.result.resultEYAJ.symptomB.length; count++){
                            $(".resultEYAJ .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEYAJ").find(".symptomB li").eq(i).text(data.result.resultEYAJ.symptomB[i]);
                        });
                        $(".resultEYAJ").find(".symptomPart li").text(data.result.resultEYAJ.symptomPart[0]);
                        $(".resultEYAJ").find(".symptomText li").text(data.result.resultEYAJ.symptomText[0]);
                        $(".resultEYAJ").find(".symptomMedical li").text(data.result.resultEYAJ.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.EYAE00, .EYAE01, .EYAE02, .EYAE10, .EYAE11')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEYAK");
                        $(".resultEYAK").find(".result-title").text(data.result.resultEYAK.resultTitle[0]);
                        $(".resultEYAK").find(".title-sub").text(data.result.resultEYAK.titleSub[0]);
                        $(".resultEYAK").find(".result-img").attr("src", data.result.resultEYAK.resultImg[0]);
                        $(".resultEYAK").find(".symptomA li").text(data.result.resultEYAK.symptomA[0]);
                        for(var count = 0; count < data.result.resultEYAK.symptomB.length; count++){
                            $(".resultEYAK .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEYAK").find(".symptomB li").eq(i).text(data.result.resultEYAK.symptomB[i]);
                        });
                        $(".resultEYAK").find(".symptomPart li").text(data.result.resultEYAK.symptomPart[0]);
                        $(".resultEYAK").find(".symptomText li").text(data.result.resultEYAK.symptomText[0]);
                        $(".resultEYAK").find(".symptomMedical li").text(data.result.resultEYAK.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.EYAE04, .EYAE08, .EYAE09, .EYAE11, .EYAE12, .EYAE13, .EYAE14, .EYAE15')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEYAL");
                        $(".resultEYAL").find(".result-title").text(data.result.resultEYAL.resultTitle[0]);
                        $(".resultEYAL").find(".title-sub").text(data.result.resultEYAL.titleSub[0]);
                        $(".resultEYAL").find(".result-img").attr("src", data.result.resultEYAL.resultImg[0]);
                        $(".resultEYAL").find(".symptomA li").text(data.result.resultEYAL.symptomA[0]);
                        for(var count = 0; count < data.result.resultEYAL.symptomB.length; count++){
                            $(".resultEYAL .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEYAL").find(".symptomB li").eq(i).text(data.result.resultEYAL.symptomB[i]);
                        });
                        $(".resultEYAL").find(".symptomPart li").text(data.result.resultEYAL.symptomPart[0]);
                        $(".resultEYAL").find(".symptomText li").text(data.result.resultEYAL.symptomText[0]);
                        $(".resultEYAL").find(".symptomMedical li").text(data.result.resultEYAL.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.EYAE08, .EYAE09, .EYAE11, .EYAE12, .EYAE13, .EYAE14')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEYAM");
                        $(".resultEYAM").find(".result-title").text(data.result.resultEYAM.resultTitle[0]);
                        $(".resultEYAM").find(".title-sub").text(data.result.resultEYAM.titleSub[0]);
                        $(".resultEYAM").find(".result-img").attr("src", data.result.resultEYAM.resultImg[0]);
                        $(".resultEYAM").find(".symptomA li").text(data.result.resultEYAM.symptomA[0]);
                        for(var count = 0; count < data.result.resultEYAM.symptomB.length; count++){
                            $(".resultEYAM .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEYAM").find(".symptomB li").eq(i).text(data.result.resultEYAM.symptomB[i]);
                        });
                        $(".resultEYAM").find(".symptomPart li").text(data.result.resultEYAM.symptomPart[0]);
                        $(".resultEYAM").find(".symptomText li").text(data.result.resultEYAM.symptomText[0]);
                        $(".resultEYAM").find(".symptomMedical li").text(data.result.resultEYAM.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.EYAE02, .EYAE17')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEYAN");
                        $(".resultEYAN").find(".result-title").text(data.result.resultEYAN.resultTitle[0]);
                        $(".resultEYAN").find(".title-sub").text(data.result.resultEYAN.titleSub[0]);
                        $(".resultEYAN").find(".result-img").attr("src", data.result.resultEYAN.resultImg[0]);
                        $(".resultEYAN").find(".symptomA li").text(data.result.resultEYAN.symptomA[0]);
                        for(var count = 0; count < data.result.resultEYAN.symptomB.length; count++){
                            $(".resultEYAN .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEYAN").find(".symptomB li").eq(i).text(data.result.resultEYAN.symptomB[i]);
                        });
                        $(".resultEYAN").find(".symptomPart li").text(data.result.resultEYAN.symptomPart[0]);
                        $(".resultEYAN").find(".symptomText li").text(data.result.resultEYAN.symptomText[0]);
                        $(".resultEYAN").find(".symptomMedical li").text(data.result.resultEYAN.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.EYAE12, .EYAE13, .EYAE14')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEYAO");
                        $(".resultEYAO").find(".result-title").text(data.result.resultEYAO.resultTitle[0]);
                        $(".resultEYAO").find(".title-sub").text(data.result.resultEYAO.titleSub[0]);
                        $(".resultEYAO").find(".result-img").attr("src", data.result.resultEYAO.resultImg[0]);
                        $(".resultEYAO").find(".symptomA li").text(data.result.resultEYAO.symptomA[0]);
                        for(var count = 0; count < data.result.resultEYAO.symptomB.length; count++){
                            $(".resultEYAO .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEYAO").find(".symptomB li").eq(i).text(data.result.resultEYAO.symptomB[i]);
                        });
                        $(".resultEYAO").find(".symptomPart li").text(data.result.resultEYAO.symptomPart[0]);
                        $(".resultEYAO").find(".symptomText li").text(data.result.resultEYAO.symptomText[0]);
                        $(".resultEYAO").find(".symptomMedical li").text(data.result.resultEYAO.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.EYAE12, .EYAE13, .EYAE14, .EYAE18, .EYAE19')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEYAP");
                        $(".resultEYAP").find(".result-title").text(data.result.resultEYAP.resultTitle[0]);
                        $(".resultEYAP").find(".title-sub").text(data.result.resultEYAP.titleSub[0]);
                        $(".resultEYAP").find(".result-img").attr("src", data.result.resultEYAP.resultImg[0]);
                        $(".resultEYAP").find(".symptomA li").text(data.result.resultEYAP.symptomA[0]);
                        for(var count = 0; count < data.result.resultEYAP.symptomB.length; count++){
                            $(".resultEYAP .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEYAP").find(".symptomB li").eq(i).text(data.result.resultEYAP.symptomB[i]);
                        });
                        $(".resultEYAP").find(".symptomPart li").text(data.result.resultEYAP.symptomPart[0]);
                        $(".resultEYAP").find(".symptomText li").text(data.result.resultEYAP.symptomText[0]);
                        $(".resultEYAP").find(".symptomMedical li").text(data.result.resultEYAP.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.EYAE12, .EYAE13, .EYAE14, .EYAE20')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEYAQ");
                        $(".resultEYAQ").find(".result-title").text(data.result.resultEYAQ.resultTitle[0]);
                        $(".resultEYAQ").find(".title-sub").text(data.result.resultEYAQ.titleSub[0]);
                        $(".resultEYAQ").find(".result-img").attr("src", data.result.resultEYAQ.resultImg[0]);
                        $(".resultEYAQ").find(".symptomA li").text(data.result.resultEYAQ.symptomA[0]);
                        for(var count = 0; count < data.result.resultEYAQ.symptomB.length; count++){
                            $(".resultEYAQ .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEYAQ").find(".symptomB li").eq(i).text(data.result.resultEYAQ.symptomB[i]);
                        });
                        $(".resultEYAQ").find(".symptomPart li").text(data.result.resultEYAQ.symptomPart[0]);
                        $(".resultEYAQ").find(".symptomText li").text(data.result.resultEYAQ.symptomText[0]);
                        $(".resultEYAQ").find(".symptomMedical li").text(data.result.resultEYAQ.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.EYAE12, .EYAE13, .EYAE14')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEYAR");
                        $(".resultEYAR").find(".result-title").text(data.result.resultEYAR.resultTitle[0]);
                        $(".resultEYAR").find(".title-sub").text(data.result.resultEYAR.titleSub[0]);
                        $(".resultEYAR").find(".result-img").attr("src", data.result.resultEYAR.resultImg[0]);
                        $(".resultEYAR").find(".symptomA li").text(data.result.resultEYAR.symptomA[0]);
                        for(var count = 0; count < data.result.resultEYAR.symptomB.length; count++){
                            $(".resultEYAR .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEYAR").find(".symptomB li").eq(i).text(data.result.resultEYAR.symptomB[i]);
                        });
                        $(".resultEYAR").find(".symptomPart li").text(data.result.resultEYAR.symptomPart[0]);
                        $(".resultEYAR").find(".symptomText li").text(data.result.resultEYAR.symptomText[0]);
                        $(".resultEYAR").find(".symptomMedical li").text(data.result.resultEYAR.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.EYAE12, .EYAE13, .EYAE14, .EYAE22')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEYAS");
                        $(".resultEYAS").find(".result-title").text(data.result.resultEYAS.resultTitle[0]);
                        $(".resultEYAS").find(".title-sub").text(data.result.resultEYAS.titleSub[0]);
                        $(".resultEYAS").find(".result-img").attr("src", data.result.resultEYAS.resultImg[0]);
                        $(".resultEYAS").find(".symptomA li").text(data.result.resultEYAS.symptomA[0]);
                        for(var count = 0; count < data.result.resultEYAS.symptomB.length; count++){
                            $(".resultEYAS .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEYAS").find(".symptomB li").eq(i).text(data.result.resultEYAS.symptomB[i]);
                        });
                        $(".resultEYAS").find(".symptomPart li").text(data.result.resultEYAS.symptomPart[0]);
                        $(".resultEYAS").find(".symptomText li").text(data.result.resultEYAS.symptomText[0]);
                        $(".resultEYAS").find(".symptomMedical li").text(data.result.resultEYAS.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.EYAE04')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultEYAT");
                        $(".resultEYAT").find(".result-title").text(data.result.resultEYAT.resultTitle[0]);
                        $(".resultEYAT").find(".title-sub").text(data.result.resultEYAT.titleSub[0]);
                        $(".resultEYAT").find(".result-img").attr("src", data.result.resultEYAT.resultImg[0]);
                        $(".resultEYAT").find(".symptomA li").text(data.result.resultEYAT.symptomA[0]);
                        for(var count = 0; count < data.result.resultEYAT.symptomB.length; count++){
                            $(".resultEYAT .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultEYAT").find(".symptomB li").eq(i).text(data.result.resultEYAT.symptomB[i]);
                        });
                        $(".resultEYAT").find(".symptomPart li").text(data.result.resultEYAT.symptomPart[0]);
                        $(".resultEYAT").find(".symptomText li").text(data.result.resultEYAT.symptomText[0]);
                        $(".resultEYAT").find(".symptomMedical li").text(data.result.resultEYAT.symptomMedical[0]);
                    
                    };




                    
                    if($(".search").is('.NOAA00, .NOAA01, .NOAA02, .NOAA03, .NOAA04')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultNOAA");
                        $(".resultNOAA").find(".result-title").text(data.result.resultNOAA.resultTitle[0]);
                        $(".resultNOAA").find(".title-sub").text(data.result.resultNOAA.titleSub[0]);
                        $(".resultNOAA").find(".result-img").attr("src", data.result.resultNOAA.resultImg[0]);
                        $(".resultNOAA").find(".symptomA li").text(data.result.resultNOAA.symptomA[0]);
                        for(var count = 0; count < data.result.resultNOAA.symptomB.length; count++){
                            $(".resultNOAA .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultNOAA").find(".symptomB li").eq(i).text(data.result.resultNOAA.symptomB[i]);
                        });
                        $(".resultNOAA").find(".symptomPart li").text(data.result.resultNOAA.symptomPart[0]);
                        $(".resultNOAA").find(".symptomText li").text(data.result.resultNOAA.symptomText[0]);
                        $(".resultNOAA").find(".symptomMedical li").text(data.result.resultNOAA.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.NOAB00, .NOAB01, .NOAB02, .NOAB03, .NOAB04, .NOAB05, .NOAB06, .NOAB07')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultNOAB");
                        $(".resultNOAB").find(".result-title").text(data.result.resultNOAB.resultTitle[0]);
                        $(".resultNOAB").find(".title-sub").text(data.result.resultNOAB.titleSub[0]);
                        $(".resultNOAB").find(".result-img").attr("src", data.result.resultNOAB.resultImg[0]);
                        $(".resultNOAB").find(".symptomA li").text(data.result.resultNOAB.symptomA[0]);
                        for(var count = 0; count < data.result.resultNOAB.symptomB.length; count++){
                            $(".resultNOAB .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultNOAB").find(".symptomB li").eq(i).text(data.result.resultNOAB.symptomB[i]);
                        });
                        $(".resultNOAB").find(".symptomPart li").text(data.result.resultNOAB.symptomPart[0]);
                        $(".resultNOAB").find(".symptomText li").text(data.result.resultNOAB.symptomText[0]);
                        $(".resultNOAB").find(".symptomMedical li").text(data.result.resultNOAB.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.NOAB08, .NOAB09, .NOAB10, .NOAB11')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultNOAC");
                        $(".resultNOAC").find(".result-title").text(data.result.resultNOAC.resultTitle[0]);
                        $(".resultNOAC").find(".title-sub").text(data.result.resultNOAC.titleSub[0]);
                        $(".resultNOAC").find(".result-img").attr("src", data.result.resultNOAC.resultImg[0]);
                        $(".resultNOAC").find(".symptomA li").text(data.result.resultNOAC.symptomA[0]);
                        for(var count = 0; count < data.result.resultNOAC.symptomB.length; count++){
                            $(".resultNOAC .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultNOAC").find(".symptomB li").eq(i).text(data.result.resultNOAC.symptomB[i]);
                        });
                        $(".resultNOAC").find(".symptomPart li").text(data.result.resultNOAC.symptomPart[0]);
                        $(".resultNOAC").find(".symptomText li").text(data.result.resultNOAC.symptomText[0]);
                        $(".resultNOAC").find(".symptomMedical li").text(data.result.resultNOAC.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.NOAB03, .NOAB04, .NOAB06, .NOAB12, .NOAB13, .NOAB14')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultNOAD");
                        $(".resultNOAD").find(".result-title").text(data.result.resultNOAD.resultTitle[0]);
                        $(".resultNOAD").find(".title-sub").text(data.result.resultNOAD.titleSub[0]);
                        $(".resultNOAD").find(".result-img").attr("src", data.result.resultNOAD.resultImg[0]);
                        $(".resultNOAD").find(".symptomA li").text(data.result.resultNOAD.symptomA[0]);
                        for(var count = 0; count < data.result.resultNOAD.symptomB.length; count++){
                            $(".resultNOAD .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultNOAD").find(".symptomB li").eq(i).text(data.result.resultNOAD.symptomB[i]);
                        });
                        $(".resultNOAD").find(".symptomPart li").text(data.result.resultNOAD.symptomPart[0]);
                        $(".resultNOAD").find(".symptomText li").text(data.result.resultNOAD.symptomText[0]);
                        $(".resultNOAD").find(".symptomMedical li").text(data.result.resultNOAD.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.NOAB03, .NOAB04, .NOAB15, .NOAB16, .NOAB17')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultNOAE");
                        $(".resultNOAE").find(".result-title").text(data.result.resultNOAE.resultTitle[0]);
                        $(".resultNOAE").find(".title-sub").text(data.result.resultNOAE.titleSub[0]);
                        $(".resultNOAE").find(".result-img").attr("src", data.result.resultNOAE.resultImg[0]);
                        $(".resultNOAE").find(".symptomA li").text(data.result.resultNOAE.symptomA[0]);
                        for(var count = 0; count < data.result.resultNOAE.symptomB.length; count++){
                            $(".resultNOAE .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultNOAE").find(".symptomB li").eq(i).text(data.result.resultNOAE.symptomB[i]);
                        });
                        $(".resultNOAE").find(".symptomPart li").text(data.result.resultNOAE.symptomPart[0]);
                        $(".resultNOAE").find(".symptomText li").text(data.result.resultNOAE.symptomText[0]);
                        $(".resultNOAE").find(".symptomMedical li").text(data.result.resultNOAE.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.NOAB03, .NOAB04, .NOAB09, .NOAB18, .NOAB19')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultNOAF");
                        $(".resultNOAF").find(".result-title").text(data.result.resultNOAF.resultTitle[0]);
                        $(".resultNOAF").find(".title-sub").text(data.result.resultNOAF.titleSub[0]);
                        $(".resultNOAF").find(".result-img").attr("src", data.result.resultNOAF.resultImg[0]);
                        $(".resultNOAF").find(".symptomA li").text(data.result.resultNOAF.symptomA[0]);
                        for(var count = 0; count < data.result.resultNOAF.symptomB.length; count++){
                            $(".resultNOAF .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultNOAF").find(".symptomB li").eq(i).text(data.result.resultNOAF.symptomB[i]);
                        });
                        $(".resultNOAF").find(".symptomPart li").text(data.result.resultNOAF.symptomPart[0]);
                        $(".resultNOAF").find(".symptomText li").text(data.result.resultNOAF.symptomText[0]);
                        $(".resultNOAF").find(".symptomMedical li").text(data.result.resultNOAF.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.NOAB00, .NOAB01, .NOAB03, .NOAB04, .NOAB20, .NOAB21, .NOAB22')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultNOAG");
                        $(".resultNOAG").find(".result-title").text(data.result.resultNOAG.resultTitle[0]);
                        $(".resultNOAG").find(".title-sub").text(data.result.resultNOAG.titleSub[0]);
                        $(".resultNOAG").find(".result-img").attr("src", data.result.resultNOAG.resultImg[0]);
                        $(".resultNOAG").find(".symptomA li").text(data.result.resultNOAG.symptomA[0]);
                        for(var count = 0; count < data.result.resultNOAG.symptomB.length; count++){
                            $(".resultNOAG .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultNOAG").find(".symptomB li").eq(i).text(data.result.resultNOAG.symptomB[i]);
                        });
                        $(".resultNOAG").find(".symptomPart li").text(data.result.resultNOAG.symptomPart[0]);
                        $(".resultNOAG").find(".symptomText li").text(data.result.resultNOAG.symptomText[0]);
                        $(".resultNOAG").find(".symptomMedical li").text(data.result.resultNOAG.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.NOAC00')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultNOAH");
                        $(".resultNOAH").find(".result-title").text(data.result.resultNOAH.resultTitle[0]);
                        $(".resultNOAH").find(".title-sub").text(data.result.resultNOAH.titleSub[0]);
                        $(".resultNOAH").find(".result-img").attr("src", data.result.resultNOAH.resultImg[0]);
                        $(".resultNOAH").find(".symptomA li").text(data.result.resultNOAH.symptomA[0]);
                        for(var count = 0; count < data.result.resultNOAH.symptomB.length; count++){
                            $(".resultNOAH .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultNOAH").find(".symptomB li").eq(i).text(data.result.resultNOAH.symptomB[i]);
                        });
                        $(".resultNOAH").find(".symptomPart li").text(data.result.resultNOAH.symptomPart[0]);
                        $(".resultNOAH").find(".symptomText li").text(data.result.resultNOAH.symptomText[0]);
                        $(".resultNOAH").find(".symptomMedical li").text(data.result.resultNOAH.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.NOAC00, .NOAC01, .NOAC02, .NOAC03, .NOAC04, .NOAC05')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultNOAI");
                        $(".resultNOAI").find(".result-title").text(data.result.resultNOAI.resultTitle[0]);
                        $(".resultNOAI").find(".title-sub").text(data.result.resultNOAI.titleSub[0]);
                        $(".resultNOAI").find(".result-img").attr("src", data.result.resultNOAI.resultImg[0]);
                        $(".resultNOAI").find(".symptomA li").text(data.result.resultNOAI.symptomA[0]);
                        for(var count = 0; count < data.result.resultNOAI.symptomB.length; count++){
                            $(".resultNOAI .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultNOAI").find(".symptomB li").eq(i).text(data.result.resultNOAI.symptomB[i]);
                        });
                        $(".resultNOAI").find(".symptomPart li").text(data.result.resultNOAI.symptomPart[0]);
                        $(".resultNOAI").find(".symptomText li").text(data.result.resultNOAI.symptomText[0]);
                        $(".resultNOAI").find(".symptomMedical li").text(data.result.resultNOAI.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.NOAC01, .NOAC02, .NOAC03, .NOAC04, .NOAC07, .NOAC08, .NOAC10')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultNOAJ");
                        $(".resultNOAJ").find(".result-title").text(data.result.resultNOAJ.resultTitle[0]);
                        $(".resultNOAJ").find(".title-sub").text(data.result.resultNOAJ.titleSub[0]);
                        $(".resultNOAJ").find(".result-img").attr("src", data.result.resultNOAJ.resultImg[0]);
                        $(".resultNOAJ").find(".symptomA li").text(data.result.resultNOAJ.symptomA[0]);
                        for(var count = 0; count < data.result.resultNOAJ.symptomB.length; count++){
                            $(".resultNOAJ .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultNOAJ").find(".symptomB li").eq(i).text(data.result.resultNOAJ.symptomB[i]);
                        });
                        $(".resultNOAJ").find(".symptomPart li").text(data.result.resultNOAJ.symptomPart[0]);
                        $(".resultNOAJ").find(".symptomText li").text(data.result.resultNOAJ.symptomText[0]);
                        $(".resultNOAJ").find(".symptomMedical li").text(data.result.resultNOAJ.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.NOAC01, .NOAC02, .NOAC03, .NOAC04, .NOAC08, .NOAC09, .NOAC10')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultNOAK");
                        $(".resultNOAK").find(".result-title").text(data.result.resultNOAK.resultTitle[0]);
                        $(".resultNOAK").find(".title-sub").text(data.result.resultNOAK.titleSub[0]);
                        $(".resultNOAK").find(".result-img").attr("src", data.result.resultNOAK.resultImg[0]);
                        $(".resultNOAK").find(".symptomA li").text(data.result.resultNOAK.symptomA[0]);
                        for(var count = 0; count < data.result.resultNOAK.symptomB.length; count++){
                            $(".resultNOAK .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultNOAK").find(".symptomB li").eq(i).text(data.result.resultNOAK.symptomB[i]);
                        });
                        $(".resultNOAK").find(".symptomPart li").text(data.result.resultNOAK.symptomPart[0]);
                        $(".resultNOAK").find(".symptomText li").text(data.result.resultNOAK.symptomText[0]);
                        $(".resultNOAK").find(".symptomMedical li").text(data.result.resultNOAK.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.NOAC01, .NOAC02, .NOAC03, .NOAC04')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultNOAL");
                        $(".resultNOAL").find(".result-title").text(data.result.resultNOAL.resultTitle[0]);
                        $(".resultNOAL").find(".title-sub").text(data.result.resultNOAL.titleSub[0]);
                        $(".resultNOAL").find(".result-img").attr("src", data.result.resultNOAL.resultImg[0]);
                        $(".resultNOAL").find(".symptomA li").text(data.result.resultNOAL.symptomA[0]);
                        for(var count = 0; count < data.result.resultNOAL.symptomB.length; count++){
                            $(".resultNOAL .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultNOAL").find(".symptomB li").eq(i).text(data.result.resultNOAL.symptomB[i]);
                        });
                        $(".resultNOAL").find(".symptomPart li").text(data.result.resultNOAL.symptomPart[0]);
                        $(".resultNOAL").find(".symptomText li").text(data.result.resultNOAL.symptomText[0]);
                        $(".resultNOAL").find(".symptomMedical li").text(data.result.resultNOAL.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.NOAD00')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultNOAM");
                        $(".resultNOAM").find(".result-title").text(data.result.resultNOAM.resultTitle[0]);
                        $(".resultNOAM").find(".title-sub").text(data.result.resultNOAM.titleSub[0]);
                        $(".resultNOAM").find(".result-img").attr("src", data.result.resultNOAM.resultImg[0]);
                        $(".resultNOAM").find(".symptomA li").text(data.result.resultNOAM.symptomA[0]);
                        for(var count = 0; count < data.result.resultNOAM.symptomB.length; count++){
                            $(".resultNOAM .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultNOAM").find(".symptomB li").eq(i).text(data.result.resultNOAM.symptomB[i]);
                        });
                        $(".resultNOAM").find(".symptomPart li").text(data.result.resultNOAM.symptomPart[0]);
                        $(".resultNOAM").find(".symptomText li").text(data.result.resultNOAM.symptomText[0]);
                        $(".resultNOAM").find(".symptomMedical li").text(data.result.resultNOAM.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.NOAD00, .NOAD01, .NOAD02, .NOAD03')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultNOAN");
                        $(".resultNOAN").find(".result-title").text(data.result.resultNOAN.resultTitle[0]);
                        $(".resultNOAN").find(".title-sub").text(data.result.resultNOAN.titleSub[0]);
                        $(".resultNOAN").find(".result-img").attr("src", data.result.resultNOAN.resultImg[0]);
                        $(".resultNOAN").find(".symptomA li").text(data.result.resultNOAN.symptomA[0]);
                        for(var count = 0; count < data.result.resultNOAN.symptomB.length; count++){
                            $(".resultNOAN .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultNOAN").find(".symptomB li").eq(i).text(data.result.resultNOAN.symptomB[i]);
                        });
                        $(".resultNOAN").find(".symptomPart li").text(data.result.resultNOAN.symptomPart[0]);
                        $(".resultNOAN").find(".symptomText li").text(data.result.resultNOAN.symptomText[0]);
                        $(".resultNOAN").find(".symptomMedical li").text(data.result.resultNOAN.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.NOAE00, .NOAE01, .NOAE02, .NOAE03, .NOAE04, .NOAE05, .NOAE06')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultNOAO");
                        $(".resultNOAO").find(".result-title").text(data.result.resultNOAO.resultTitle[0]);
                        $(".resultNOAO").find(".title-sub").text(data.result.resultNOAO.titleSub[0]);
                        $(".resultNOAO").find(".result-img").attr("src", data.result.resultNOAO.resultImg[0]);
                        $(".resultNOAO").find(".symptomA li").text(data.result.resultNOAO.symptomA[0]);
                        for(var count = 0; count < data.result.resultNOAO.symptomB.length; count++){
                            $(".resultNOAO .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultNOAO").find(".symptomB li").eq(i).text(data.result.resultNOAO.symptomB[i]);
                        });
                        $(".resultNOAO").find(".symptomPart li").text(data.result.resultNOAO.symptomPart[0]);
                        $(".resultNOAO").find(".symptomText li").text(data.result.resultNOAO.symptomText[0]);
                        $(".resultNOAO").find(".symptomMedical li").text(data.result.resultNOAO.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.NOAE00, .NOAE01, .NOAE06, .NOAE07, .NOAE08, .NOAE09, .NOAE10')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultNOAP");
                        $(".resultNOAP").find(".result-title").text(data.result.resultNOAP.resultTitle[0]);
                        $(".resultNOAP").find(".title-sub").text(data.result.resultNOAP.titleSub[0]);
                        $(".resultNOAP").find(".result-img").attr("src", data.result.resultNOAP.resultImg[0]);
                        $(".resultNOAP").find(".symptomA li").text(data.result.resultNOAP.symptomA[0]);
                        for(var count = 0; count < data.result.resultNOAP.symptomB.length; count++){
                            $(".resultNOAP .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultNOAP").find(".symptomB li").eq(i).text(data.result.resultNOAP.symptomB[i]);
                        });
                        $(".resultNOAP").find(".symptomPart li").text(data.result.resultNOAP.symptomPart[0]);
                        $(".resultNOAP").find(".symptomText li").text(data.result.resultNOAP.symptomText[0]);
                        $(".resultNOAP").find(".symptomMedical li").text(data.result.resultNOAP.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.NOAE03, .NOAE11, .NOAE12, .NOAE13')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultNOAQ");
                        $(".resultNOAQ").find(".result-title").text(data.result.resultNOAQ.resultTitle[0]);
                        $(".resultNOAQ").find(".title-sub").text(data.result.resultNOAQ.titleSub[0]);
                        $(".resultNOAQ").find(".result-img").attr("src", data.result.resultNOAQ.resultImg[0]);
                        $(".resultNOAQ").find(".symptomA li").text(data.result.resultNOAQ.symptomA[0]);
                        for(var count = 0; count < data.result.resultNOAQ.symptomB.length; count++){
                            $(".resultNOAQ .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultNOAQ").find(".symptomB li").eq(i).text(data.result.resultNOAQ.symptomB[i]);
                        });
                        $(".resultNOAQ").find(".symptomPart li").text(data.result.resultNOAQ.symptomPart[0]);
                        $(".resultNOAQ").find(".symptomText li").text(data.result.resultNOAQ.symptomText[0]);
                        $(".resultNOAQ").find(".symptomMedical li").text(data.result.resultNOAQ.symptomMedical[0]);
                    
                    };





                    if($(".search").is('.MOAA00, .MOAA01, .MOAA02, .MOAA03')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultMOAA");
                        $(".resultMOAA").find(".result-title").text(data.result.resultMOAA.resultTitle[0]);
                        $(".resultMOAA").find(".title-sub").text(data.result.resultMOAA.titleSub[0]);
                        $(".resultMOAA").find(".result-img").attr("src", data.result.resultMOAA.resultImg[0]);
                        $(".resultMOAA").find(".symptomA li").text(data.result.resultMOAA.symptomA[0]);
                        for(var count = 0; count < data.result.resultMOAA.symptomB.length; count++){
                            $(".resultMOAA .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultMOAA").find(".symptomB li").eq(i).text(data.result.resultMOAA.symptomB[i]);
                        });
                        $(".resultMOAA").find(".symptomPart li").text(data.result.resultMOAA.symptomPart[0]);
                        $(".resultMOAA").find(".symptomText li").text(data.result.resultMOAA.symptomText[0]);
                        $(".resultMOAA").find(".symptomMedical li").text(data.result.resultMOAA.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.MOAB00, .MOAB01')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultMOAB");
                        $(".resultMOAB").find(".result-title").text(data.result.resultMOAB.resultTitle[0]);
                        $(".resultMOAB").find(".title-sub").text(data.result.resultMOAB.titleSub[0]);
                        $(".resultMOAB").find(".result-img").attr("src", data.result.resultMOAB.resultImg[0]);
                        $(".resultMOAB").find(".symptomA li").text(data.result.resultMOAB.symptomA[0]);
                        for(var count = 0; count < data.result.resultMOAB.symptomB.length; count++){
                            $(".resultMOAB .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultMOAB").find(".symptomB li").eq(i).text(data.result.resultMOAB.symptomB[i]);
                        });
                        $(".resultMOAB").find(".symptomPart li").text(data.result.resultMOAB.symptomPart[0]);
                        $(".resultMOAB").find(".symptomText li").text(data.result.resultMOAB.symptomText[0]);
                        $(".resultMOAB").find(".symptomMedical li").text(data.result.resultMOAB.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.MOAB02, .MOAB03, .MOAB04')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultMOAC");
                        $(".resultMOAC").find(".result-title").text(data.result.resultMOAC.resultTitle[0]);
                        $(".resultMOAC").find(".title-sub").text(data.result.resultMOAC.titleSub[0]);
                        $(".resultMOAC").find(".result-img").attr("src", data.result.resultMOAC.resultImg[0]);
                        $(".resultMOAC").find(".symptomA li").text(data.result.resultMOAC.symptomA[0]);
                        for(var count = 0; count < data.result.resultMOAC.symptomB.length; count++){
                            $(".resultMOAC .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultMOAC").find(".symptomB li").eq(i).text(data.result.resultMOAC.symptomB[i]);
                        });
                        $(".resultMOAC").find(".symptomPart li").text(data.result.resultMOAC.symptomPart[0]);
                        $(".resultMOAC").find(".symptomText li").text(data.result.resultMOAC.symptomText[0]);
                        $(".resultMOAC").find(".symptomMedical li").text(data.result.resultMOAC.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.MOAB00, .MOAB05, .MOAB06')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultMOAD");
                        $(".resultMOAD").find(".result-title").text(data.result.resultMOAD.resultTitle[0]);
                        $(".resultMOAD").find(".title-sub").text(data.result.resultMOAD.titleSub[0]);
                        $(".resultMOAD").find(".result-img").attr("src", data.result.resultMOAD.resultImg[0]);
                        $(".resultMOAD").find(".symptomA li").text(data.result.resultMOAD.symptomA[0]);
                        for(var count = 0; count < data.result.resultMOAD.symptomB.length; count++){
                            $(".resultMOAD .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultMOAD").find(".symptomB li").eq(i).text(data.result.resultMOAD.symptomB[i]);
                        });
                        $(".resultMOAD").find(".symptomPart li").text(data.result.resultMOAD.symptomPart[0]);
                        $(".resultMOAD").find(".symptomText li").text(data.result.resultMOAD.symptomText[0]);
                        $(".resultMOAD").find(".symptomMedical li").text(data.result.resultMOAD.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.MOAB07, .MOAB08, .MOAB09')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultMOAE");
                        $(".resultMOAE").find(".result-title").text(data.result.resultMOAE.resultTitle[0]);
                        $(".resultMOAE").find(".title-sub").text(data.result.resultMOAE.titleSub[0]);
                        $(".resultMOAE").find(".result-img").attr("src", data.result.resultMOAE.resultImg[0]);
                        $(".resultMOAE").find(".symptomA li").text(data.result.resultMOAE.symptomA[0]);
                        for(var count = 0; count < data.result.resultMOAE.symptomB.length; count++){
                            $(".resultMOAE .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultMOAE").find(".symptomB li").eq(i).text(data.result.resultMOAE.symptomB[i]);
                        });
                        $(".resultMOAE").find(".symptomPart li").text(data.result.resultMOAE.symptomPart[0]);
                        $(".resultMOAE").find(".symptomText li").text(data.result.resultMOAE.symptomText[0]);
                        $(".resultMOAE").find(".symptomMedical li").text(data.result.resultMOAE.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.MOAB05, .MOAB10, .MOAB11, .MOAB12, .MOAB13, .MOAB14')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultMOAF");
                        $(".resultMOAF").find(".result-title").text(data.result.resultMOAF.resultTitle[0]);
                        $(".resultMOAF").find(".title-sub").text(data.result.resultMOAF.titleSub[0]);
                        $(".resultMOAF").find(".result-img").attr("src", data.result.resultMOAF.resultImg[0]);
                        $(".resultMOAF").find(".symptomA li").text(data.result.resultMOAF.symptomA[0]);
                        for(var count = 0; count < data.result.resultMOAF.symptomB.length; count++){
                            $(".resultMOAF .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultMOAF").find(".symptomB li").eq(i).text(data.result.resultMOAF.symptomB[i]);
                        });
                        $(".resultMOAF").find(".symptomPart li").text(data.result.resultMOAF.symptomPart[0]);
                        $(".resultMOAF").find(".symptomText li").text(data.result.resultMOAF.symptomText[0]);
                        $(".resultMOAF").find(".symptomMedical li").text(data.result.resultMOAF.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.MOAC00, .MOAC01')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultMOAG");
                        $(".resultMOAG").find(".result-title").text(data.result.resultMOAG.resultTitle[0]);
                        $(".resultMOAG").find(".title-sub").text(data.result.resultMOAG.titleSub[0]);
                        $(".resultMOAG").find(".result-img").attr("src", data.result.resultMOAG.resultImg[0]);
                        $(".resultMOAG").find(".symptomA li").text(data.result.resultMOAG.symptomA[0]);
                        for(var count = 0; count < data.result.resultMOAG.symptomB.length; count++){
                            $(".resultMOAG .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultMOAG").find(".symptomB li").eq(i).text(data.result.resultMOAG.symptomB[i]);
                        });
                        $(".resultMOAG").find(".symptomPart li").text(data.result.resultMOAG.symptomPart[0]);
                        $(".resultMOAG").find(".symptomText li").text(data.result.resultMOAG.symptomText[0]);
                        $(".resultMOAG").find(".symptomMedical li").text(data.result.resultMOAG.symptomMedical[0]);
                    
                    };





                    if($(".search").is('.SKAA00, .SKAA01, .SKAA02, .SKAA03')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultSKAA");
                        $(".resultSKAA").find(".result-title").text(data.result.resultSKAA.resultTitle[0]);
                        $(".resultSKAA").find(".title-sub").text(data.result.resultSKAA.titleSub[0]);
                        $(".resultSKAA").find(".result-img").attr("src", data.result.resultSKAA.resultImg[0]);
                        $(".resultSKAA").find(".symptomA li").text(data.result.resultSKAA.symptomA[0]);
                        for(var count = 0; count < data.result.resultSKAA.symptomB.length; count++){
                            $(".resultSKAA .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultSKAA").find(".symptomB li").eq(i).text(data.result.resultSKAA.symptomB[i]);
                        });
                        $(".resultSKAA").find(".symptomPart li").text(data.result.resultSKAA.symptomPart[0]);
                        $(".resultSKAA").find(".symptomText li").text(data.result.resultSKAA.symptomText[0]);
                        $(".resultSKAA").find(".symptomMedical li").text(data.result.resultSKAA.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.SKAA04, .SKAA05, .SKAA06, .SKAA07, .SKAA08')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultSKAB");
                        $(".resultSKAB").find(".result-title").text(data.result.resultSKAB.resultTitle[0]);
                        $(".resultSKAB").find(".title-sub").text(data.result.resultSKAB.titleSub[0]);
                        $(".resultSKAB").find(".result-img").attr("src", data.result.resultSKAB.resultImg[0]);
                        $(".resultSKAB").find(".symptomA li").text(data.result.resultSKAB.symptomA[0]);
                        for(var count = 0; count < data.result.resultSKAB.symptomB.length; count++){
                            $(".resultSKAB .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultSKAB").find(".symptomB li").eq(i).text(data.result.resultSKAB.symptomB[i]);
                        });
                        $(".resultSKAB").find(".symptomPart li").text(data.result.resultSKAB.symptomPart[0]);
                        $(".resultSKAB").find(".symptomText li").text(data.result.resultSKAB.symptomText[0]);
                        $(".resultSKAB").find(".symptomMedical li").text(data.result.resultSKAB.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.SKAB01, .SKAB02, SKAB03')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultSKAC");
                        $(".resultSKAC").find(".result-title").text(data.result.resultSKAC.resultTitle[0]);
                        $(".resultSKAC").find(".title-sub").text(data.result.resultSKAC.titleSub[0]);
                        $(".resultSKAC").find(".result-img").attr("src", data.result.resultSKAC.resultImg[0]);
                        $(".resultSKAC").find(".symptomA li").text(data.result.resultSKAC.symptomA[0]);
                        for(var count = 0; count < data.result.resultSKAC.symptomB.length; count++){
                            $(".resultSKAC .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultSKAC").find(".symptomB li").eq(i).text(data.result.resultSKAC.symptomB[i]);
                        });
                        $(".resultSKAC").find(".symptomPart li").text(data.result.resultSKAC.symptomPart[0]);
                        $(".resultSKAC").find(".symptomText li").text(data.result.resultSKAC.symptomText[0]);
                        $(".resultSKAC").find(".symptomMedical li").text(data.result.resultSKAC.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.SKAC00, .SKAC01, .SKAC02, .SKAC03, .SKAC04')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultSKAD");
                        $(".resultSKAD").find(".result-title").text(data.result.resultSKAD.resultTitle[0]);
                        $(".resultSKAD").find(".title-sub").text(data.result.resultSKAD.titleSub[0]);
                        $(".resultSKAD").find(".result-img").attr("src", data.result.resultSKAD.resultImg[0]);
                        $(".resultSKAD").find(".symptomA li").text(data.result.resultSKAD.symptomA[0]);
                        for(var count = 0; count < data.result.resultSKAD.symptomB.length; count++){
                            $(".resultSKAD .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultSKAD").find(".symptomB li").eq(i).text(data.result.resultSKAD.symptomB[i]);
                        });
                        $(".resultSKAD").find(".symptomPart li").text(data.result.resultSKAD.symptomPart[0]);
                        $(".resultSKAD").find(".symptomText li").text(data.result.resultSKAD.symptomText[0]);
                        $(".resultSKAD").find(".symptomMedical li").text(data.result.resultSKAD.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.SKAD00, .SKAD01, .SKAD02')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultSKAE");
                        $(".resultSKAE").find(".result-title").text(data.result.resultSKAE.resultTitle[0]);
                        $(".resultSKAE").find(".title-sub").text(data.result.resultSKAE.titleSub[0]);
                        $(".resultSKAE").find(".result-img").attr("src", data.result.resultSKAE.resultImg[0]);
                        $(".resultSKAE").find(".symptomA li").text(data.result.resultSKAE.symptomA[0]);
                        for(var count = 0; count < data.result.resultSKAE.symptomB.length; count++){
                            $(".resultSKAE .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultSKAE").find(".symptomB li").eq(i).text(data.result.resultSKAE.symptomB[i]);
                        });
                        $(".resultSKAE").find(".symptomPart li").text(data.result.resultSKAE.symptomPart[0]);
                        $(".resultSKAE").find(".symptomText li").text(data.result.resultSKAE.symptomText[0]);
                        $(".resultSKAE").find(".symptomMedical li").text(data.result.resultSKAE.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.SKAD03')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultSKAF");
                        $(".resultSKAF").find(".result-title").text(data.result.resultSKAF.resultTitle[0]);
                        $(".resultSKAF").find(".title-sub").text(data.result.resultSKAF.titleSub[0]);
                        $(".resultSKAF").find(".result-img").attr("src", data.result.resultSKAF.resultImg[0]);
                        $(".resultSKAF").find(".symptomA li").text(data.result.resultSKAF.symptomA[0]);
                        for(var count = 0; count < data.result.resultSKAF.symptomB.length; count++){
                            $(".resultSKAF .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultSKAF").find(".symptomB li").eq(i).text(data.result.resultSKAF.symptomB[i]);
                        });
                        $(".resultSKAF").find(".symptomPart li").text(data.result.resultSKAF.symptomPart[0]);
                        $(".resultSKAF").find(".symptomText li").text(data.result.resultSKAF.symptomText[0]);
                        $(".resultSKAF").find(".symptomMedical li").text(data.result.resultSKAF.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.SKAE00, .SKAE01, .SKAE02')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultSKAG");
                        $(".resultSKAG").find(".result-title").text(data.result.resultSKAG.resultTitle[0]);
                        $(".resultSKAG").find(".title-sub").text(data.result.resultSKAG.titleSub[0]);
                        $(".resultSKAG").find(".result-img").attr("src", data.result.resultSKAG.resultImg[0]);
                        $(".resultSKAG").find(".symptomA li").text(data.result.resultSKAG.symptomA[0]);
                        for(var count = 0; count < data.result.resultSKAG.symptomB.length; count++){
                            $(".resultSKAG .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultSKAG").find(".symptomB li").eq(i).text(data.result.resultSKAG.symptomB[i]);
                        });
                        $(".resultSKAG").find(".symptomPart li").text(data.result.resultSKAG.symptomPart[0]);
                        $(".resultSKAG").find(".symptomText li").text(data.result.resultSKAG.symptomText[0]);
                        $(".resultSKAG").find(".symptomMedical li").text(data.result.resultSKAG.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.SKAE03, .SKAE04, .SKAE05, .SKAE06, .SKAE07, .SKAE08')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultSKAH");
                        $(".resultSKAH").find(".result-title").text(data.result.resultSKAH.resultTitle[0]);
                        $(".resultSKAH").find(".title-sub").text(data.result.resultSKAH.titleSub[0]);
                        $(".resultSKAH").find(".result-img").attr("src", data.result.resultSKAH.resultImg[0]);
                        $(".resultSKAH").find(".symptomA li").text(data.result.resultSKAH.symptomA[0]);
                        for(var count = 0; count < data.result.resultSKAH.symptomB.length; count++){
                            $(".resultSKAH .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultSKAH").find(".symptomB li").eq(i).text(data.result.resultSKAH.symptomB[i]);
                        });
                        $(".resultSKAH").find(".symptomPart li").text(data.result.resultSKAH.symptomPart[0]);
                        $(".resultSKAH").find(".symptomText li").text(data.result.resultSKAH.symptomText[0]);
                        $(".resultSKAH").find(".symptomMedical li").text(data.result.resultSKAH.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.SKAE09, .SKAE10, .SKAE11, .SKAE12')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultSKAI");
                        $(".resultSKAI").find(".result-title").text(data.result.resultSKAI.resultTitle[0]);
                        $(".resultSKAI").find(".title-sub").text(data.result.resultSKAI.titleSub[0]);
                        $(".resultSKAI").find(".result-img").attr("src", data.result.resultSKAI.resultImg[0]);
                        $(".resultSKAI").find(".symptomA li").text(data.result.resultSKAI.symptomA[0]);
                        for(var count = 0; count < data.result.resultSKAI.symptomB.length; count++){
                            $(".resultSKAI .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultSKAI").find(".symptomB li").eq(i).text(data.result.resultSKAI.symptomB[i]);
                        });
                        $(".resultSKAI").find(".symptomPart li").text(data.result.resultSKAI.symptomPart[0]);
                        $(".resultSKAI").find(".symptomText li").text(data.result.resultSKAI.symptomText[0]);
                        $(".resultSKAI").find(".symptomMedical li").text(data.result.resultSKAI.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.SKAE13, .SKAE14, .SKAE15, .SKAE16, .SKAE17')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultSKAJ");
                        $(".resultSKAJ").find(".result-title").text(data.result.resultSKAJ.resultTitle[0]);
                        $(".resultSKAJ").find(".title-sub").text(data.result.resultSKAJ.titleSub[0]);
                        $(".resultSKAJ").find(".result-img").attr("src", data.result.resultSKAJ.resultImg[0]);
                        $(".resultSKAJ").find(".symptomA li").text(data.result.resultSKAJ.symptomA[0]);
                        for(var count = 0; count < data.result.resultSKAJ.symptomB.length; count++){
                            $(".resultSKAJ .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultSKAJ").find(".symptomB li").eq(i).text(data.result.resultSKAJ.symptomB[i]);
                        });
                        $(".resultSKAJ").find(".symptomPart li").text(data.result.resultSKAJ.symptomPart[0]);
                        $(".resultSKAJ").find(".symptomText li").text(data.result.resultSKAJ.symptomText[0]);
                        $(".resultSKAJ").find(".symptomMedical li").text(data.result.resultSKAJ.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.SKAF00, .SKAF01, .SKAF02, .SKAF03, .SKAF04')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultSKAK");
                        $(".resultSKAK").find(".result-title").text(data.result.resultSKAK.resultTitle[0]);
                        $(".resultSKAK").find(".title-sub").text(data.result.resultSKAK.titleSub[0]);
                        $(".resultSKAK").find(".result-img").attr("src", data.result.resultSKAK.resultImg[0]);
                        $(".resultSKAK").find(".symptomA li").text(data.result.resultSKAK.symptomA[0]);
                        for(var count = 0; count < data.result.resultSKAK.symptomB.length; count++){
                            $(".resultSKAK .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultSKAK").find(".symptomB li").eq(i).text(data.result.resultSKAK.symptomB[i]);
                        });
                        $(".resultSKAK").find(".symptomPart li").text(data.result.resultSKAK.symptomPart[0]);
                        $(".resultSKAK").find(".symptomText li").text(data.result.resultSKAK.symptomText[0]);
                        $(".resultSKAK").find(".symptomMedical li").text(data.result.resultSKAK.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.SKAF00, .SKAF05, .SKAF06, .SKAF07, .SKAF08, .SKAF09')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultSKAL");
                        $(".resultSKAL").find(".result-title").text(data.result.resultSKAL.resultTitle[0]);
                        $(".resultSKAL").find(".title-sub").text(data.result.resultSKAL.titleSub[0]);
                        $(".resultSKAL").find(".result-img").attr("src", data.result.resultSKAL.resultImg[0]);
                        $(".resultSKAL").find(".symptomA li").text(data.result.resultSKAL.symptomA[0]);
                        for(var count = 0; count < data.result.resultSKAL.symptomB.length; count++){
                            $(".resultSKAL .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultSKAL").find(".symptomB li").eq(i).text(data.result.resultSKAL.symptomB[i]);
                        });
                        $(".resultSKAL").find(".symptomPart li").text(data.result.resultSKAL.symptomPart[0]);
                        $(".resultSKAL").find(".symptomText li").text(data.result.resultSKAL.symptomText[0]);
                        $(".resultSKAL").find(".symptomMedical li").text(data.result.resultSKAL.symptomMedical[0]);
                    
                    };
                    
                    if($(".search").is('.SKAF10, .SKAF11, .SKAF12, .SKAF13')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultSKAM");
                        $(".resultSKAM").find(".result-title").text(data.result.resultSKAM.resultTitle[0]);
                        $(".resultSKAM").find(".title-sub").text(data.result.resultSKAM.titleSub[0]);
                        $(".resultSKAM").find(".result-img").attr("src", data.result.resultSKAM.resultImg[0]);
                        $(".resultSKAM").find(".symptomA li").text(data.result.resultSKAM.symptomA[0]);
                        for(var count = 0; count < data.result.resultSKAM.symptomB.length; count++){
                            $(".resultSKAM .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultSKAM").find(".symptomB li").eq(i).text(data.result.resultSKAM.symptomB[i]);
                        });
                        $(".resultSKAM").find(".symptomPart li").text(data.result.resultSKAM.symptomPart[0]);
                        $(".resultSKAM").find(".symptomText li").text(data.result.resultSKAM.symptomText[0]);
                        $(".resultSKAM").find(".symptomMedical li").text(data.result.resultSKAM.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.SKAF10, .SKAF11, .SKAF13, .SKAF14, .SKAF15, .SKAF16, .SKAF17')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultSKAN");
                        $(".resultSKAN").find(".result-title").text(data.result.resultSKAN.resultTitle[0]);
                        $(".resultSKAN").find(".title-sub").text(data.result.resultSKAN.titleSub[0]);
                        $(".resultSKAN").find(".result-img").attr("src", data.result.resultSKAN.resultImg[0]);
                        $(".resultSKAN").find(".symptomA li").text(data.result.resultSKAN.symptomA[0]);
                        for(var count = 0; count < data.result.resultSKAN.symptomB.length; count++){
                            $(".resultSKAN .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultSKAN").find(".symptomB li").eq(i).text(data.result.resultSKAN.symptomB[i]);
                        });
                        $(".resultSKAN").find(".symptomPart li").text(data.result.resultSKAN.symptomPart[0]);
                        $(".resultSKAN").find(".symptomText li").text(data.result.resultSKAN.symptomText[0]);
                        $(".resultSKAN").find(".symptomMedical li").text(data.result.resultSKAN.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.SKAF10, .SKAF11, .SKAF18, .SKAF19, .SKAF20')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultSKAO");
                        $(".resultSKAO").find(".result-title").text(data.result.resultSKAO.resultTitle[0]);
                        $(".resultSKAO").find(".title-sub").text(data.result.resultSKAO.titleSub[0]);
                        $(".resultSKAO").find(".result-img").attr("src", data.result.resultSKAO.resultImg[0]);
                        $(".resultSKAO").find(".symptomA li").text(data.result.resultSKAO.symptomA[0]);
                        for(var count = 0; count < data.result.resultSKAO.symptomB.length; count++){
                            $(".resultSKAO .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultSKAO").find(".symptomB li").eq(i).text(data.result.resultSKAO.symptomB[i]);
                        });
                        $(".resultSKAO").find(".symptomPart li").text(data.result.resultSKAO.symptomPart[0]);
                        $(".resultSKAO").find(".symptomText li").text(data.result.resultSKAO.symptomText[0]);
                        $(".resultSKAO").find(".symptomMedical li").text(data.result.resultSKAO.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.SKAF21, .SKAF22, .SKAF23, .SKAF24, .SKAF25')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultSKAP");
                        $(".resultSKAP").find(".result-title").text(data.result.resultSKAP.resultTitle[0]);
                        $(".resultSKAP").find(".title-sub").text(data.result.resultSKAP.titleSub[0]);
                        $(".resultSKAP").find(".result-img").attr("src", data.result.resultSKAP.resultImg[0]);
                        $(".resultSKAP").find(".symptomA li").text(data.result.resultSKAP.symptomA[0]);
                        for(var count = 0; count < data.result.resultSKAP.symptomB.length; count++){
                            $(".resultSKAP .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultSKAP").find(".symptomB li").eq(i).text(data.result.resultSKAP.symptomB[i]);
                        });
                        $(".resultSKAP").find(".symptomPart li").text(data.result.resultSKAP.symptomPart[0]);
                        $(".resultSKAP").find(".symptomText li").text(data.result.resultSKAP.symptomText[0]);
                        $(".resultSKAP").find(".symptomMedical li").text(data.result.resultSKAP.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.SKAG00, .SKAG01, .SKAG02, .SKAG03, .SKAG04, .SKAG05, .SKAG06, .SKAG07')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultSKAQ");
                        $(".resultSKAQ").find(".result-title").text(data.result.resultSKAQ.resultTitle[0]);
                        $(".resultSKAQ").find(".title-sub").text(data.result.resultSKAQ.titleSub[0]);
                        $(".resultSKAQ").find(".result-img").attr("src", data.result.resultSKAQ.resultImg[0]);
                        $(".resultSKAQ").find(".symptomA li").text(data.result.resultSKAQ.symptomA[0]);
                        for(var count = 0; count < data.result.resultSKAQ.symptomB.length; count++){
                            $(".resultSKAQ .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultSKAQ").find(".symptomB li").eq(i).text(data.result.resultSKAQ.symptomB[i]);
                        });
                        $(".resultSKAQ").find(".symptomPart li").text(data.result.resultSKAQ.symptomPart[0]);
                        $(".resultSKAQ").find(".symptomText li").text(data.result.resultSKAQ.symptomText[0]);
                        $(".resultSKAQ").find(".symptomMedical li").text(data.result.resultSKAQ.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.SKAG00, .SKAG01, .SKAG02, .SKAG03, .SKAG04, .SKAG05, .SKAG06, .SKAG08')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultSKAR");
                        $(".resultSKAR").find(".result-title").text(data.result.resultSKAR.resultTitle[0]);
                        $(".resultSKAR").find(".title-sub").text(data.result.resultSKAR.titleSub[0]);
                        $(".resultSKAR").find(".result-img").attr("src", data.result.resultSKAR.resultImg[0]);
                        $(".resultSKAR").find(".symptomA li").text(data.result.resultSKAR.symptomA[0]);
                        for(var count = 0; count < data.result.resultSKAR.symptomB.length; count++){
                            $(".resultSKAR .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultSKAR").find(".symptomB li").eq(i).text(data.result.resultSKAR.symptomB[i]);
                        });
                        $(".resultSKAR").find(".symptomPart li").text(data.result.resultSKAR.symptomPart[0]);
                        $(".resultSKAR").find(".symptomText li").text(data.result.resultSKAR.symptomText[0]);
                        $(".resultSKAR").find(".symptomMedical li").text(data.result.resultSKAR.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.SKAG00, .SKAG01, .SKAG02, .SKAG03, .SKAG04, .SKAG05, .SKAG06, .SKAG07, .SKAG09, .SKAG10, .SKAG11, .SKAG12')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultSKAS");
                        $(".resultSKAS").find(".result-title").text(data.result.resultSKAS.resultTitle[0]);
                        $(".resultSKAS").find(".title-sub").text(data.result.resultSKAS.titleSub[0]);
                        $(".resultSKAS").find(".result-img").attr("src", data.result.resultSKAS.resultImg[0]);
                        $(".resultSKAS").find(".symptomA li").text(data.result.resultSKAS.symptomA[0]);
                        for(var count = 0; count < data.result.resultSKAS.symptomB.length; count++){
                            $(".resultSKAS .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultSKAS").find(".symptomB li").eq(i).text(data.result.resultSKAS.symptomB[i]);
                        });
                        $(".resultSKAS").find(".symptomPart li").text(data.result.resultSKAS.symptomPart[0]);
                        $(".resultSKAS").find(".symptomText li").text(data.result.resultSKAS.symptomText[0]);
                        $(".resultSKAS").find(".symptomMedical li").text(data.result.resultSKAS.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.SKAG00, .SKAG01, .SKAG02, .SKAG03, .SKAG04, .SKAG12, .SKAG13, .SKAG14, .SKAG15')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultSKAT");
                        $(".resultSKAT").find(".result-title").text(data.result.resultSKAT.resultTitle[0]);
                        $(".resultSKAT").find(".title-sub").text(data.result.resultSKAT.titleSub[0]);
                        $(".resultSKAT").find(".result-img").attr("src", data.result.resultSKAT.resultImg[0]);
                        $(".resultSKAT").find(".symptomA li").text(data.result.resultSKAT.symptomA[0]);
                        for(var count = 0; count < data.result.resultSKAT.symptomB.length; count++){
                            $(".resultSKAT .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultSKAT").find(".symptomB li").eq(i).text(data.result.resultSKAT.symptomB[i]);
                        });
                        $(".resultSKAT").find(".symptomPart li").text(data.result.resultSKAT.symptomPart[0]);
                        $(".resultSKAT").find(".symptomText li").text(data.result.resultSKAT.symptomText[0]);
                        $(".resultSKAT").find(".symptomMedical li").text(data.result.resultSKAT.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.SKAG00, .SKAG03, .SKAG16, .SKAG17')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultSKAU");
                        $(".resultSKAU").find(".result-title").text(data.result.resultSKAU.resultTitle[0]);
                        $(".resultSKAU").find(".title-sub").text(data.result.resultSKAU.titleSub[0]);
                        $(".resultSKAU").find(".result-img").attr("src", data.result.resultSKAU.resultImg[0]);
                        $(".resultSKAU").find(".symptomA li").text(data.result.resultSKAU.symptomA[0]);
                        for(var count = 0; count < data.result.resultSKAU.symptomB.length; count++){
                            $(".resultSKAU .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultSKAU").find(".symptomB li").eq(i).text(data.result.resultSKAU.symptomB[i]);
                        });
                        $(".resultSKAU").find(".symptomPart li").text(data.result.resultSKAU.symptomPart[0]);
                        $(".resultSKAU").find(".symptomText li").text(data.result.resultSKAU.symptomText[0]);
                        $(".resultSKAU").find(".symptomMedical li").text(data.result.resultSKAU.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.SKAG00, .SKAG05, .SKAG06, .SKAG16, .SKAG17, .SKAG19, .SKAG20, .SKAG21, .SKAG22, .SKAG23')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultSKAV");
                        $(".resultSKAV").find(".result-title").text(data.result.resultSKAV.resultTitle[0]);
                        $(".resultSKAV").find(".title-sub").text(data.result.resultSKAV.titleSub[0]);
                        $(".resultSKAV").find(".result-img").attr("src", data.result.resultSKAV.resultImg[0]);
                        $(".resultSKAV").find(".symptomA li").text(data.result.resultSKAV.symptomA[0]);
                        for(var count = 0; count < data.result.resultSKAV.symptomB.length; count++){
                            $(".resultSKAV .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultSKAV").find(".symptomB li").eq(i).text(data.result.resultSKAV.symptomB[i]);
                        });
                        $(".resultSKAV").find(".symptomPart li").text(data.result.resultSKAV.symptomPart[0]);
                        $(".resultSKAV").find(".symptomText li").text(data.result.resultSKAV.symptomText[0]);
                        $(".resultSKAV").find(".symptomMedical li").text(data.result.resultSKAV.symptomMedical[0]);
                    
                    };





                    if($(".search").is('.LEAA00, .LEAA01, .LEAA02, .LEAA03, .LEAA04, .LEAA05')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultLEAA");
                        $(".resultLEAA").find(".result-title").text(data.result.resultLEAA.resultTitle[0]);
                        $(".resultLEAA").find(".title-sub").text(data.result.resultLEAA.titleSub[0]);
                        $(".resultLEAA").find(".result-img").attr("src", data.result.resultLEAA.resultImg[0]);
                        $(".resultLEAA").find(".symptomA li").text(data.result.resultLEAA.symptomA[0]);
                        for(var count = 0; count < data.result.resultLEAA.symptomB.length; count++){
                            $(".resultLEAA .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultLEAA").find(".symptomB li").eq(i).text(data.result.resultLEAA.symptomB[i]);
                        });
                        $(".resultLEAA").find(".symptomPart li").text(data.result.resultLEAA.symptomPart[0]);
                        $(".resultLEAA").find(".symptomText li").text(data.result.resultLEAA.symptomText[0]);
                        $(".resultLEAA").find(".symptomMedical li").text(data.result.resultLEAA.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.LEAA06, .LEAA07, .LEAA08')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultLEAB");
                        $(".resultLEAB").find(".result-title").text(data.result.resultLEAB.resultTitle[0]);
                        $(".resultLEAB").find(".title-sub").text(data.result.resultLEAB.titleSub[0]);
                        $(".resultLEAB").find(".result-img").attr("src", data.result.resultLEAB.resultImg[0]);
                        $(".resultLEAB").find(".symptomA li").text(data.result.resultLEAB.symptomA[0]);
                        for(var count = 0; count < data.result.resultLEAB.symptomB.length; count++){
                            $(".resultLEAB .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultLEAB").find(".symptomB li").eq(i).text(data.result.resultLEAB.symptomB[i]);
                        });
                        $(".resultLEAB").find(".symptomPart li").text(data.result.resultLEAB.symptomPart[0]);
                        $(".resultLEAB").find(".symptomText li").text(data.result.resultLEAB.symptomText[0]);
                        $(".resultLEAB").find(".symptomMedical li").text(data.result.resultLEAB.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.LEAA09, .LEAA10, .LEAA11')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultLEAC");
                        $(".resultLEAC").find(".result-title").text(data.result.resultLEAC.resultTitle[0]);
                        $(".resultLEAC").find(".title-sub").text(data.result.resultLEAC.titleSub[0]);
                        $(".resultLEAC").find(".result-img").attr("src", data.result.resultLEAC.resultImg[0]);
                        $(".resultLEAC").find(".symptomA li").text(data.result.resultLEAC.symptomA[0]);
                        for(var count = 0; count < data.result.resultLEAC.symptomB.length; count++){
                            $(".resultLEAC .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultLEAC").find(".symptomB li").eq(i).text(data.result.resultLEAC.symptomB[i]);
                        });
                        $(".resultLEAC").find(".symptomPart li").text(data.result.resultLEAC.symptomPart[0]);
                        $(".resultLEAC").find(".symptomText li").text(data.result.resultLEAC.symptomText[0]);
                        $(".resultLEAC").find(".symptomMedical li").text(data.result.resultLEAC.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.LEAA03, .LEAA09, .LEAA12')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultLEAD");
                        $(".resultLEAD").find(".result-title").text(data.result.resultLEAD.resultTitle[0]);
                        $(".resultLEAD").find(".title-sub").text(data.result.resultLEAD.titleSub[0]);
                        $(".resultLEAD").find(".result-img").attr("src", data.result.resultLEAD.resultImg[0]);
                        $(".resultLEAD").find(".symptomA li").text(data.result.resultLEAD.symptomA[0]);
                        for(var count = 0; count < data.result.resultLEAD.symptomB.length; count++){
                            $(".resultLEAD .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultLEAD").find(".symptomB li").eq(i).text(data.result.resultLEAD.symptomB[i]);
                        });
                        $(".resultLEAD").find(".symptomPart li").text(data.result.resultLEAD.symptomPart[0]);
                        $(".resultLEAD").find(".symptomText li").text(data.result.resultLEAD.symptomText[0]);
                        $(".resultLEAD").find(".symptomMedical li").text(data.result.resultLEAD.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.LEAB00, .LEAB01')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultLEAE");
                        $(".resultLEAE").find(".result-title").text(data.result.resultLEAE.resultTitle[0]);
                        $(".resultLEAE").find(".title-sub").text(data.result.resultLEAE.titleSub[0]);
                        $(".resultLEAE").find(".result-img").attr("src", data.result.resultLEAE.resultImg[0]);
                        $(".resultLEAE").find(".symptomA li").text(data.result.resultLEAE.symptomA[0]);
                        for(var count = 0; count < data.result.resultLEAE.symptomB.length; count++){
                            $(".resultLEAE .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultLEAE").find(".symptomB li").eq(i).text(data.result.resultLEAE.symptomB[i]);
                        });
                        $(".resultLEAE").find(".symptomPart li").text(data.result.resultLEAE.symptomPart[0]);
                        $(".resultLEAE").find(".symptomText li").text(data.result.resultLEAE.symptomText[0]);
                        $(".resultLEAE").find(".symptomMedical li").text(data.result.resultLEAE.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.LEAB00, .LEAB01, .LEAB02, .LEAB03, .LEAB04, .LEAB05, .LEAB06')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultLEAF");
                        $(".resultLEAF").find(".result-title").text(data.result.resultLEAF.resultTitle[0]);
                        $(".resultLEAF").find(".title-sub").text(data.result.resultLEAF.titleSub[0]);
                        $(".resultLEAF").find(".result-img").attr("src", data.result.resultLEAF.resultImg[0]);
                        $(".resultLEAF").find(".symptomA li").text(data.result.resultLEAF.symptomA[0]);
                        for(var count = 0; count < data.result.resultLEAF.symptomB.length; count++){
                            $(".resultLEAF .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultLEAF").find(".symptomB li").eq(i).text(data.result.resultLEAF.symptomB[i]);
                        });
                        $(".resultLEAF").find(".symptomPart li").text(data.result.resultLEAF.symptomPart[0]);
                        $(".resultLEAF").find(".symptomText li").text(data.result.resultLEAF.symptomText[0]);
                        $(".resultLEAF").find(".symptomMedical li").text(data.result.resultLEAF.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.LEAB00, .LEAB01, .LEAB04, .LEAB05, .LEAB06, .LEAB07')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultLEAG");
                        $(".resultLEAG").find(".result-title").text(data.result.resultLEAG.resultTitle[0]);
                        $(".resultLEAG").find(".title-sub").text(data.result.resultLEAG.titleSub[0]);
                        $(".resultLEAG").find(".result-img").attr("src", data.result.resultLEAG.resultImg[0]);
                        $(".resultLEAG").find(".symptomA li").text(data.result.resultLEAG.symptomA[0]);
                        for(var count = 0; count < data.result.resultLEAG.symptomB.length; count++){
                            $(".resultLEAG .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultLEAG").find(".symptomB li").eq(i).text(data.result.resultLEAG.symptomB[i]);
                        });
                        $(".resultLEAG").find(".symptomPart li").text(data.result.resultLEAG.symptomPart[0]);
                        $(".resultLEAG").find(".symptomText li").text(data.result.resultLEAG.symptomText[0]);
                        $(".resultLEAG").find(".symptomMedical li").text(data.result.resultLEAG.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.LEAB00, .LEAB01, .LEAB04')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultLEAH");
                        $(".resultLEAH").find(".result-title").text(data.result.resultLEAH.resultTitle[0]);
                        $(".resultLEAH").find(".title-sub").text(data.result.resultLEAH.titleSub[0]);
                        $(".resultLEAH").find(".result-img").attr("src", data.result.resultLEAH.resultImg[0]);
                        $(".resultLEAH").find(".symptomA li").text(data.result.resultLEAH.symptomA[0]);
                        for(var count = 0; count < data.result.resultLEAH.symptomB.length; count++){
                            $(".resultLEAH .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultLEAH").find(".symptomB li").eq(i).text(data.result.resultLEAH.symptomB[i]);
                        });
                        $(".resultLEAH").find(".symptomPart li").text(data.result.resultLEAH.symptomPart[0]);
                        $(".resultLEAH").find(".symptomText li").text(data.result.resultLEAH.symptomText[0]);
                        $(".resultLEAH").find(".symptomMedical li").text(data.result.resultLEAH.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.LEAB08, .LEAB09, .LEAB10, .LEAB11, .LEAB12')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultLEAI");
                        $(".resultLEAI").find(".result-title").text(data.result.resultLEAI.resultTitle[0]);
                        $(".resultLEAI").find(".title-sub").text(data.result.resultLEAI.titleSub[0]);
                        $(".resultLEAI").find(".result-img").attr("src", data.result.resultLEAI.resultImg[0]);
                        $(".resultLEAI").find(".symptomA li").text(data.result.resultLEAI.symptomA[0]);
                        for(var count = 0; count < data.result.resultLEAI.symptomB.length; count++){
                            $(".resultLEAI .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultLEAI").find(".symptomB li").eq(i).text(data.result.resultLEAI.symptomB[i]);
                        });
                        $(".resultLEAI").find(".symptomPart li").text(data.result.resultLEAI.symptomPart[0]);
                        $(".resultLEAI").find(".symptomText li").text(data.result.resultLEAI.symptomText[0]);
                        $(".resultLEAI").find(".symptomMedical li").text(data.result.resultLEAI.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.LEAB07, .LEAB13, .LEAB14, .LEAB15, .LEAB16')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultLEAJ");
                        $(".resultLEAJ").find(".result-title").text(data.result.resultLEAJ.resultTitle[0]);
                        $(".resultLEAJ").find(".title-sub").text(data.result.resultLEAJ.titleSub[0]);
                        $(".resultLEAJ").find(".result-img").attr("src", data.result.resultLEAJ.resultImg[0]);
                        $(".resultLEAJ").find(".symptomA li").text(data.result.resultLEAJ.symptomA[0]);
                        for(var count = 0; count < data.result.resultLEAJ.symptomB.length; count++){
                            $(".resultLEAJ .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultLEAJ").find(".symptomB li").eq(i).text(data.result.resultLEAJ.symptomB[i]);
                        });
                        $(".resultLEAJ").find(".symptomPart li").text(data.result.resultLEAJ.symptomPart[0]);
                        $(".resultLEAJ").find(".symptomText li").text(data.result.resultLEAJ.symptomText[0]);
                        $(".resultLEAJ").find(".symptomMedical li").text(data.result.resultLEAJ.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.LEAB13, .LEAB14, .LEAB17, .LEAB18')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultLEAK");
                        $(".resultLEAK").find(".result-title").text(data.result.resultLEAK.resultTitle[0]);
                        $(".resultLEAK").find(".title-sub").text(data.result.resultLEAK.titleSub[0]);
                        $(".resultLEAK").find(".result-img").attr("src", data.result.resultLEAK.resultImg[0]);
                        $(".resultLEAK").find(".symptomA li").text(data.result.resultLEAK.symptomA[0]);
                        for(var count = 0; count < data.result.resultLEAK.symptomB.length; count++){
                            $(".resultLEAK .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultLEAK").find(".symptomB li").eq(i).text(data.result.resultLEAK.symptomB[i]);
                        });
                        $(".resultLEAK").find(".symptomPart li").text(data.result.resultLEAK.symptomPart[0]);
                        $(".resultLEAK").find(".symptomText li").text(data.result.resultLEAK.symptomText[0]);
                        $(".resultLEAK").find(".symptomMedical li").text(data.result.resultLEAK.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.LEAB02, .LEAB04, .LEAB08, .LEAB11, .LEAB12, .LEAB19')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultLEAL");
                        $(".resultLEAL").find(".result-title").text(data.result.resultLEAL.resultTitle[0]);
                        $(".resultLEAL").find(".title-sub").text(data.result.resultLEAL.titleSub[0]);
                        $(".resultLEAL").find(".result-img").attr("src", data.result.resultLEAL.resultImg[0]);
                        $(".resultLEAL").find(".symptomA li").text(data.result.resultLEAL.symptomA[0]);
                        for(var count = 0; count < data.result.resultLEAL.symptomB.length; count++){
                            $(".resultLEAL .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultLEAL").find(".symptomB li").eq(i).text(data.result.resultLEAL.symptomB[i]);
                        });
                        $(".resultLEAL").find(".symptomPart li").text(data.result.resultLEAL.symptomPart[0]);
                        $(".resultLEAL").find(".symptomText li").text(data.result.resultLEAL.symptomText[0]);
                        $(".resultLEAL").find(".symptomMedical li").text(data.result.resultLEAL.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.LEAB04, .LEAB05, .LEAB06, .LEAB07, .LEAB20, .LEAB21')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultLEAM");
                        $(".resultLEAM").find(".result-title").text(data.result.resultLEAM.resultTitle[0]);
                        $(".resultLEAM").find(".title-sub").text(data.result.resultLEAM.titleSub[0]);
                        $(".resultLEAM").find(".result-img").attr("src", data.result.resultLEAM.resultImg[0]);
                        $(".resultLEAM").find(".symptomA li").text(data.result.resultLEAM.symptomA[0]);
                        for(var count = 0; count < data.result.resultLEAM.symptomB.length; count++){
                            $(".resultLEAM .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultLEAM").find(".symptomB li").eq(i).text(data.result.resultLEAM.symptomB[i]);
                        });
                        $(".resultLEAM").find(".symptomPart li").text(data.result.resultLEAM.symptomPart[0]);
                        $(".resultLEAM").find(".symptomText li").text(data.result.resultLEAM.symptomText[0]);
                        $(".resultLEAM").find(".symptomMedical li").text(data.result.resultLEAM.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.LEAB13, .LEAB14, .LEAB22, .LEAB23')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultLEAN");
                        $(".resultLEAN").find(".result-title").text(data.result.resultLEAN.resultTitle[0]);
                        $(".resultLEAN").find(".title-sub").text(data.result.resultLEAN.titleSub[0]);
                        $(".resultLEAN").find(".result-img").attr("src", data.result.resultLEAN.resultImg[0]);
                        $(".resultLEAN").find(".symptomA li").text(data.result.resultLEAN.symptomA[0]);
                        for(var count = 0; count < data.result.resultLEAN.symptomB.length; count++){
                            $(".resultLEAN .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultLEAN").find(".symptomB li").eq(i).text(data.result.resultLEAN.symptomB[i]);
                        });
                        $(".resultLEAN").find(".symptomPart li").text(data.result.resultLEAN.symptomPart[0]);
                        $(".resultLEAN").find(".symptomText li").text(data.result.resultLEAN.symptomText[0]);
                        $(".resultLEAN").find(".symptomMedical li").text(data.result.resultLEAN.symptomMedical[0]);
                    
                    };


                    


                    if($(".search").is('.REAA00, .REAA01, .REAA02, .REAA03, .REAA04, .REAA05, .REAA06')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultREAA");
                        $(".resultREAA").find(".result-title").text(data.result.resultREAA.resultTitle[0]);
                        $(".resultREAA").find(".title-sub").text(data.result.resultREAA.titleSub[0]);
                        $(".resultREAA").find(".result-img").attr("src", data.result.resultREAA.resultImg[0]);
                        $(".resultREAA").find(".symptomA li").text(data.result.resultREAA.symptomA[0]);
                        for(var count = 0; count < data.result.resultREAA.symptomB.length; count++){
                            $(".resultREAA .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultREAA").find(".symptomB li").eq(i).text(data.result.resultREAA.symptomB[i]);
                        });
                        $(".resultREAA").find(".symptomPart li").text(data.result.resultREAA.symptomPart[0]);
                        $(".resultREAA").find(".symptomText li").text(data.result.resultREAA.symptomText[0]);
                        $(".resultREAA").find(".symptomMedical li").text(data.result.resultREAA.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.REAB00, .REAB01, .REAB02, .REAB03, .REAB04, .REAB05')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultREAB");
                        $(".resultREAB").find(".result-title").text(data.result.resultREAB.resultTitle[0]);
                        $(".resultREAB").find(".title-sub").text(data.result.resultREAB.titleSub[0]);
                        $(".resultREAB").find(".result-img").attr("src", data.result.resultREAB.resultImg[0]);
                        $(".resultREAB").find(".symptomA li").text(data.result.resultREAB.symptomA[0]);
                        for(var count = 0; count < data.result.resultREAB.symptomB.length; count++){
                            $(".resultREAB .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultREAB").find(".symptomB li").eq(i).text(data.result.resultREAB.symptomB[i]);
                        });
                        $(".resultREAB").find(".symptomPart li").text(data.result.resultREAB.symptomPart[0]);
                        $(".resultREAB").find(".symptomText li").text(data.result.resultREAB.symptomText[0]);
                        $(".resultREAB").find(".symptomMedical li").text(data.result.resultREAB.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.REAA06, .REAA07, .REAA08')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultREAB");
                        $(".resultREAB").find(".result-title").text(data.result.resultREAB.resultTitle[0]);
                        $(".resultREAB").find(".title-sub").text(data.result.resultREAB.titleSub[0]);
                        $(".resultREAB").find(".result-img").attr("src", data.result.resultREAB.resultImg[0]);
                        $(".resultREAB").find(".symptomA li").text(data.result.resultREAB.symptomA[0]);
                        for(var count = 0; count < data.result.resultREAB.symptomB.length; count++){
                            $(".resultREAB .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultREAB").find(".symptomB li").eq(i).text(data.result.resultREAB.symptomB[i]);
                        });
                        $(".resultREAB").find(".symptomPart li").text(data.result.resultREAB.symptomPart[0]);
                        $(".resultREAB").find(".symptomText li").text(data.result.resultREAB.symptomText[0]);
                        $(".resultREAB").find(".symptomMedical li").text(data.result.resultREAB.symptomMedical[0]);
                    
                    };





                    if($(".search").is('.DIAA00, .DIAA01, .DIAA02, .DIAA03, .DIAA04, .DIAA05, .DIAA06')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultDIAA");
                        $(".resultDIAA").find(".result-title").text(data.result.resultDIAA.resultTitle[0]);
                        $(".resultDIAA").find(".title-sub").text(data.result.resultDIAA.titleSub[0]);
                        $(".resultDIAA").find(".result-img").attr("src", data.result.resultDIAA.resultImg[0]);
                        $(".resultDIAA").find(".symptomA li").text(data.result.resultDIAA.symptomA[0]);
                        for(var count = 0; count < data.result.resultDIAA.symptomB.length; count++){
                            $(".resultDIAA .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultDIAA").find(".symptomB li").eq(i).text(data.result.resultDIAA.symptomB[i]);
                        });
                        $(".resultDIAA").find(".symptomPart li").text(data.result.resultDIAA.symptomPart[0]);
                        $(".resultDIAA").find(".symptomText li").text(data.result.resultDIAA.symptomText[0]);
                        $(".resultDIAA").find(".symptomMedical li").text(data.result.resultDIAA.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.DIAA00, .DIAA01, .DIAA02, .DIAA03, .DIAA04, .DIAA05')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultDIAB");
                        $(".resultDIAB").find(".result-title").text(data.result.resultDIAB.resultTitle[0]);
                        $(".resultDIAB").find(".title-sub").text(data.result.resultDIAB.titleSub[0]);
                        $(".resultDIAB").find(".result-img").attr("src", data.result.resultDIAB.resultImg[0]);
                        $(".resultDIAB").find(".symptomA li").text(data.result.resultDIAB.symptomA[0]);
                        for(var count = 0; count < data.result.resultDIAB.symptomB.length; count++){
                            $(".resultDIAB .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultDIAB").find(".symptomB li").eq(i).text(data.result.resultDIAB.symptomB[i]);
                        });
                        $(".resultDIAB").find(".symptomPart li").text(data.result.resultDIAB.symptomPart[0]);
                        $(".resultDIAB").find(".symptomText li").text(data.result.resultDIAB.symptomText[0]);
                        $(".resultDIAB").find(".symptomMedical li").text(data.result.resultDIAB.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.DIAA00, .DIAA01, .DIAA02, .DIAA03, .DIAA06, .DIAA07, .DIAA08, .DIAA09, .DIAA17')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultDIAC");
                        $(".resultDIAC").find(".result-title").text(data.result.resultDIAC.resultTitle[0]);
                        $(".resultDIAC").find(".title-sub").text(data.result.resultDIAC.titleSub[0]);
                        $(".resultDIAC").find(".result-img").attr("src", data.result.resultDIAC.resultImg[0]);
                        $(".resultDIAC").find(".symptomA li").text(data.result.resultDIAC.symptomA[0]);
                        for(var count = 0; count < data.result.resultDIAC.symptomB.length; count++){
                            $(".resultDIAC .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultDIAC").find(".symptomB li").eq(i).text(data.result.resultDIAC.symptomB[i]);
                        });
                        $(".resultDIAC").find(".symptomPart li").text(data.result.resultDIAC.symptomPart[0]);
                        $(".resultDIAC").find(".symptomText li").text(data.result.resultDIAC.symptomText[0]);
                        $(".resultDIAC").find(".symptomMedical li").text(data.result.resultDIAC.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.DIAA00, .DIAA01, .DIAA02, .DIAA03, .REAA04, .REAA10, .REAA11')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultDIAD");
                        $(".resultDIAD").find(".result-title").text(data.result.resultDIAD.resultTitle[0]);
                        $(".resultDIAD").find(".title-sub").text(data.result.resultDIAD.titleSub[0]);
                        $(".resultDIAD").find(".result-img").attr("src", data.result.resultDIAD.resultImg[0]);
                        $(".resultDIAD").find(".symptomA li").text(data.result.resultDIAD.symptomA[0]);
                        for(var count = 0; count < data.result.resultDIAD.symptomB.length; count++){
                            $(".resultDIAD .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultDIAD").find(".symptomB li").eq(i).text(data.result.resultDIAD.symptomB[i]);
                        });
                        $(".resultDIAD").find(".symptomPart li").text(data.result.resultDIAD.symptomPart[0]);
                        $(".resultDIAD").find(".symptomText li").text(data.result.resultDIAD.symptomText[0]);
                        $(".resultDIAD").find(".symptomMedical li").text(data.result.resultDIAD.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.DIAA00, .DIAA01, .DIAA02, .DIAA03, .REAA04, .DIAA09, .REAA12')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultDIAE");
                        $(".resultDIAE").find(".result-title").text(data.result.resultDIAE.resultTitle[0]);
                        $(".resultDIAE").find(".title-sub").text(data.result.resultDIAE.titleSub[0]);
                        $(".resultDIAE").find(".result-img").attr("src", data.result.resultDIAE.resultImg[0]);
                        $(".resultDIAE").find(".symptomA li").text(data.result.resultDIAE.symptomA[0]);
                        for(var count = 0; count < data.result.resultDIAE.symptomB.length; count++){
                            $(".resultDIAE .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultDIAE").find(".symptomB li").eq(i).text(data.result.resultDIAE.symptomB[i]);
                        });
                        $(".resultDIAE").find(".symptomPart li").text(data.result.resultDIAE.symptomPart[0]);
                        $(".resultDIAE").find(".symptomText li").text(data.result.resultDIAE.symptomText[0]);
                        $(".resultDIAE").find(".symptomMedical li").text(data.result.resultDIAE.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.DIAA00, .DIAA01, .DIAA02, .DIAA03, .REAA04, .DIAA05, .REAA12')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultDIAF");
                        $(".resultDIAF").find(".result-title").text(data.result.resultDIAF.resultTitle[0]);
                        $(".resultDIAF").find(".title-sub").text(data.result.resultDIAF.titleSub[0]);
                        $(".resultDIAF").find(".result-img").attr("src", data.result.resultDIAF.resultImg[0]);
                        $(".resultDIAF").find(".symptomA li").text(data.result.resultDIAF.symptomA[0]);
                        for(var count = 0; count < data.result.resultDIAF.symptomB.length; count++){
                            $(".resultDIAF .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultDIAF").find(".symptomB li").eq(i).text(data.result.resultDIAF.symptomB[i]);
                        });
                        $(".resultDIAF").find(".symptomPart li").text(data.result.resultDIAF.symptomPart[0]);
                        $(".resultDIAF").find(".symptomText li").text(data.result.resultDIAF.symptomText[0]);
                        $(".resultDIAF").find(".symptomMedical li").text(data.result.resultDIAF.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.DIAA00, .DIAA01, .DIAA02, .DIAA03, .REAA04')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultDIAG");
                        $(".resultDIAG").find(".result-title").text(data.result.resultDIAG.resultTitle[0]);
                        $(".resultDIAG").find(".title-sub").text(data.result.resultDIAG.titleSub[0]);
                        $(".resultDIAG").find(".result-img").attr("src", data.result.resultDIAG.resultImg[0]);
                        $(".resultDIAG").find(".symptomA li").text(data.result.resultDIAG.symptomA[0]);
                        for(var count = 0; count < data.result.resultDIAG.symptomB.length; count++){
                            $(".resultDIAG .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultDIAG").find(".symptomB li").eq(i).text(data.result.resultDIAG.symptomB[i]);
                        });
                        $(".resultDIAG").find(".symptomPart li").text(data.result.resultDIAG.symptomPart[0]);
                        $(".resultDIAG").find(".symptomText li").text(data.result.resultDIAG.symptomText[0]);
                        $(".resultDIAG").find(".symptomMedical li").text(data.result.resultDIAG.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.DIAA02, .DIAA04, .DIAA12, .DIAA13')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultDIAH");
                        $(".resultDIAH").find(".result-title").text(data.result.resultDIAH.resultTitle[0]);
                        $(".resultDIAH").find(".title-sub").text(data.result.resultDIAH.titleSub[0]);
                        $(".resultDIAH").find(".result-img").attr("src", data.result.resultDIAH.resultImg[0]);
                        $(".resultDIAH").find(".symptomA li").text(data.result.resultDIAH.symptomA[0]);
                        for(var count = 0; count < data.result.resultDIAH.symptomB.length; count++){
                            $(".resultDIAH .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultDIAH").find(".symptomB li").eq(i).text(data.result.resultDIAH.symptomB[i]);
                        });
                        $(".resultDIAH").find(".symptomPart li").text(data.result.resultDIAH.symptomPart[0]);
                        $(".resultDIAH").find(".symptomText li").text(data.result.resultDIAH.symptomText[0]);
                        $(".resultDIAH").find(".symptomMedical li").text(data.result.resultDIAH.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.REAA02, .REAA04, .REAA06, .REAA12, .REAA14')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultDIAI");
                        $(".resultDIAI").find(".result-title").text(data.result.resultDIAI.resultTitle[0]);
                        $(".resultDIAI").find(".title-sub").text(data.result.resultDIAI.titleSub[0]);
                        $(".resultDIAI").find(".result-img").attr("src", data.result.resultDIAI.resultImg[0]);
                        $(".resultDIAI").find(".symptomA li").text(data.result.resultDIAI.symptomA[0]);
                        for(var count = 0; count < data.result.resultDIAI.symptomB.length; count++){
                            $(".resultDIAI .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultDIAI").find(".symptomB li").eq(i).text(data.result.resultDIAI.symptomB[i]);
                        });
                        $(".resultDIAI").find(".symptomPart li").text(data.result.resultDIAI.symptomPart[0]);
                        $(".resultDIAI").find(".symptomText li").text(data.result.resultDIAI.symptomText[0]);
                        $(".resultDIAI").find(".symptomMedical li").text(data.result.resultDIAI.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.REAA02, .REAA04, .REAA12, .REAA15, .REAA16')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultDIAJ");
                        $(".resultDIAJ").find(".result-title").text(data.result.resultDIAJ.resultTitle[0]);
                        $(".resultDIAJ").find(".title-sub").text(data.result.resultDIAJ.titleSub[0]);
                        $(".resultDIAJ").find(".result-img").attr("src", data.result.resultDIAJ.resultImg[0]);
                        $(".resultDIAJ").find(".symptomA li").text(data.result.resultDIAJ.symptomA[0]);
                        for(var count = 0; count < data.result.resultDIAJ.symptomB.length; count++){
                            $(".resultDIAJ .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultDIAJ").find(".symptomB li").eq(i).text(data.result.resultDIAJ.symptomB[i]);
                        });
                        $(".resultDIAJ").find(".symptomPart li").text(data.result.resultDIAJ.symptomPart[0]);
                        $(".resultDIAJ").find(".symptomText li").text(data.result.resultDIAJ.symptomText[0]);
                        $(".resultDIAJ").find(".symptomMedical li").text(data.result.resultDIAJ.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.REAA02, .REAA03, .REAA04, .REAA09, .REAA12, .REAA18')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultDIAK");
                        $(".resultDIAK").find(".result-title").text(data.result.resultDIAK.resultTitle[0]);
                        $(".resultDIAK").find(".title-sub").text(data.result.resultDIAK.titleSub[0]);
                        $(".resultDIAK").find(".result-img").attr("src", data.result.resultDIAK.resultImg[0]);
                        $(".resultDIAK").find(".symptomA li").text(data.result.resultDIAK.symptomA[0]);
                        for(var count = 0; count < data.result.resultDIAK.symptomB.length; count++){
                            $(".resultDIAK .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultDIAK").find(".symptomB li").eq(i).text(data.result.resultDIAK.symptomB[i]);
                        });
                        $(".resultDIAK").find(".symptomPart li").text(data.result.resultDIAK.symptomPart[0]);
                        $(".resultDIAK").find(".symptomText li").text(data.result.resultDIAK.symptomText[0]);
                        $(".resultDIAK").find(".symptomMedical li").text(data.result.resultDIAK.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.DIAB00, .DIAB01, .DIAB02, .DIAB03, .DIAB04, .DIAB05, .DIAB06, .DIAB07')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultDIAL");
                        $(".resultDIAL").find(".result-title").text(data.result.resultDIAL.resultTitle[0]);
                        $(".resultDIAL").find(".title-sub").text(data.result.resultDIAL.titleSub[0]);
                        $(".resultDIAL").find(".result-img").attr("src", data.result.resultDIAL.resultImg[0]);
                        $(".resultDIAL").find(".symptomA li").text(data.result.resultDIAL.symptomA[0]);
                        for(var count = 0; count < data.result.resultDIAL.symptomB.length; count++){
                            $(".resultDIAL .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultDIAL").find(".symptomB li").eq(i).text(data.result.resultDIAL.symptomB[i]);
                        });
                        $(".resultDIAL").find(".symptomPart li").text(data.result.resultDIAL.symptomPart[0]);
                        $(".resultDIAL").find(".symptomText li").text(data.result.resultDIAL.symptomText[0]);
                        $(".resultDIAL").find(".symptomMedical li").text(data.result.resultDIAL.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.DIAB08, .DIAB09, .DIAB10, .DIAB11, .DIAB12, .DIAB13')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultDIAM");
                        $(".resultDIAM").find(".result-title").text(data.result.resultDIAM.resultTitle[0]);
                        $(".resultDIAM").find(".title-sub").text(data.result.resultDIAM.titleSub[0]);
                        $(".resultDIAM").find(".result-img").attr("src", data.result.resultDIAM.resultImg[0]);
                        $(".resultDIAM").find(".symptomA li").text(data.result.resultDIAM.symptomA[0]);
                        for(var count = 0; count < data.result.resultDIAM.symptomB.length; count++){
                            $(".resultDIAM .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultDIAM").find(".symptomB li").eq(i).text(data.result.resultDIAM.symptomB[i]);
                        });
                        $(".resultDIAM").find(".symptomPart li").text(data.result.resultDIAM.symptomPart[0]);
                        $(".resultDIAM").find(".symptomText li").text(data.result.resultDIAM.symptomText[0]);
                        $(".resultDIAM").find(".symptomMedical li").text(data.result.resultDIAM.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.DIAB08, .DIAB09, .DIAB10, .DIAB11, .DIAB12, .DIAB13, .DIAB14, .DIAB15, .DIAB16, .DIAB17')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultDIAN");
                        $(".resultDIAN").find(".result-title").text(data.result.resultDIAN.resultTitle[0]);
                        $(".resultDIAN").find(".title-sub").text(data.result.resultDIAN.titleSub[0]);
                        $(".resultDIAN").find(".result-img").attr("src", data.result.resultDIAN.resultImg[0]);
                        $(".resultDIAN").find(".symptomA li").text(data.result.resultDIAN.symptomA[0]);
                        for(var count = 0; count < data.result.resultDIAN.symptomB.length; count++){
                            $(".resultDIAN .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultDIAN").find(".symptomB li").eq(i).text(data.result.resultDIAN.symptomB[i]);
                        });
                        $(".resultDIAN").find(".symptomPart li").text(data.result.resultDIAN.symptomPart[0]);
                        $(".resultDIAN").find(".symptomText li").text(data.result.resultDIAN.symptomText[0]);
                        $(".resultDIAN").find(".symptomMedical li").text(data.result.resultDIAN.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.DIAB08, .DIAB09, .DIAB10, .DIAB11, .DIAB12, .DIAB13')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultDIAO");
                        $(".resultDIAO").find(".result-title").text(data.result.resultDIAO.resultTitle[0]);
                        $(".resultDIAO").find(".title-sub").text(data.result.resultDIAO.titleSub[0]);
                        $(".resultDIAO").find(".result-img").attr("src", data.result.resultDIAO.resultImg[0]);
                        $(".resultDIAO").find(".symptomA li").text(data.result.resultDIAO.symptomA[0]);
                        for(var count = 0; count < data.result.resultDIAO.symptomB.length; count++){
                            $(".resultDIAO .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultDIAO").find(".symptomB li").eq(i).text(data.result.resultDIAO.symptomB[i]);
                        });
                        $(".resultDIAO").find(".symptomPart li").text(data.result.resultDIAO.symptomPart[0]);
                        $(".resultDIAO").find(".symptomText li").text(data.result.resultDIAO.symptomText[0]);
                        $(".resultDIAO").find(".symptomMedical li").text(data.result.resultDIAO.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.DIAB08, .DIAB09, .DIAB10, .DIAB11, .DIAB13, .DIAB18, .DIAB19')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultDIAP");
                        $(".resultDIAP").find(".result-title").text(data.result.resultDIAP.resultTitle[0]);
                        $(".resultDIAP").find(".title-sub").text(data.result.resultDIAP.titleSub[0]);
                        $(".resultDIAP").find(".result-img").attr("src", data.result.resultDIAP.resultImg[0]);
                        $(".resultDIAP").find(".symptomA li").text(data.result.resultDIAP.symptomA[0]);
                        for(var count = 0; count < data.result.resultDIAP.symptomB.length; count++){
                            $(".resultDIAP .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultDIAP").find(".symptomB li").eq(i).text(data.result.resultDIAP.symptomB[i]);
                        });
                        $(".resultDIAP").find(".symptomPart li").text(data.result.resultDIAP.symptomPart[0]);
                        $(".resultDIAP").find(".symptomText li").text(data.result.resultDIAP.symptomText[0]);
                        $(".resultDIAP").find(".symptomMedical li").text(data.result.resultDIAP.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.DIAB08, .DIAB09, .DIAB10, .DIAB11, .DIAB13, .DIAB20')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultDIAQ");
                        $(".resultDIAQ").find(".result-title").text(data.result.resultDIAQ.resultTitle[0]);
                        $(".resultDIAQ").find(".title-sub").text(data.result.resultDIAQ.titleSub[0]);
                        $(".resultDIAQ").find(".result-img").attr("src", data.result.resultDIAQ.resultImg[0]);
                        $(".resultDIAQ").find(".symptomA li").text(data.result.resultDIAQ.symptomA[0]);
                        for(var count = 0; count < data.result.resultDIAQ.symptomB.length; count++){
                            $(".resultDIAQ .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultDIAQ").find(".symptomB li").eq(i).text(data.result.resultDIAQ.symptomB[i]);
                        });
                        $(".resultDIAQ").find(".symptomPart li").text(data.result.resultDIAQ.symptomPart[0]);
                        $(".resultDIAQ").find(".symptomText li").text(data.result.resultDIAQ.symptomText[0]);
                        $(".resultDIAQ").find(".symptomMedical li").text(data.result.resultDIAQ.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.DIAB08, .DIAB09, .DIAB10, .DIAB11, .DIAB12, .DIAB13, .DIAB20, .DIAB21')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultDIAR");
                        $(".resultDIAR").find(".result-title").text(data.result.resultDIAR.resultTitle[0]);
                        $(".resultDIAR").find(".title-sub").text(data.result.resultDIAR.titleSub[0]);
                        $(".resultDIAR").find(".result-img").attr("src", data.result.resultDIAR.resultImg[0]);
                        $(".resultDIAR").find(".symptomA li").text(data.result.resultDIAR.symptomA[0]);
                        for(var count = 0; count < data.result.resultDIAR.symptomB.length; count++){
                            $(".resultDIAR .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultDIAR").find(".symptomB li").eq(i).text(data.result.resultDIAR.symptomB[i]);
                        });
                        $(".resultDIAR").find(".symptomPart li").text(data.result.resultDIAR.symptomPart[0]);
                        $(".resultDIAR").find(".symptomText li").text(data.result.resultDIAR.symptomText[0]);
                        $(".resultDIAR").find(".symptomMedical li").text(data.result.resultDIAR.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.DIAB08, .DIAB09, .DIAB10, .DIAB11, .DIAB13, .DIAB18, .DIAB22')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultDIAS");
                        $(".resultDIAS").find(".result-title").text(data.result.resultDIAS.resultTitle[0]);
                        $(".resultDIAS").find(".title-sub").text(data.result.resultDIAS.titleSub[0]);
                        $(".resultDIAS").find(".result-img").attr("src", data.result.resultDIAS.resultImg[0]);
                        $(".resultDIAS").find(".symptomA li").text(data.result.resultDIAS.symptomA[0]);
                        for(var count = 0; count < data.result.resultDIAS.symptomB.length; count++){
                            $(".resultDIAS .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultDIAS").find(".symptomB li").eq(i).text(data.result.resultDIAS.symptomB[i]);
                        });
                        $(".resultDIAS").find(".symptomPart li").text(data.result.resultDIAS.symptomPart[0]);
                        $(".resultDIAS").find(".symptomText li").text(data.result.resultDIAS.symptomText[0]);
                        $(".resultDIAS").find(".symptomMedical li").text(data.result.resultDIAS.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.DIAB05, .DIAB08, .DIAB09, .DIAB10, .DIAB11, .DIAB13, .DIAB20, .DIAB22')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultDIAT");
                        $(".resultDIAT").find(".result-title").text(data.result.resultDIAT.resultTitle[0]);
                        $(".resultDIAT").find(".title-sub").text(data.result.resultDIAT.titleSub[0]);
                        $(".resultDIAT").find(".result-img").attr("src", data.result.resultDIAT.resultImg[0]);
                        $(".resultDIAT").find(".symptomA li").text(data.result.resultDIAT.symptomA[0]);
                        for(var count = 0; count < data.result.resultDIAT.symptomB.length; count++){
                            $(".resultDIAT .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultDIAT").find(".symptomB li").eq(i).text(data.result.resultDIAT.symptomB[i]);
                        });
                        $(".resultDIAT").find(".symptomPart li").text(data.result.resultDIAT.symptomPart[0]);
                        $(".resultDIAT").find(".symptomText li").text(data.result.resultDIAT.symptomText[0]);
                        $(".resultDIAT").find(".symptomMedical li").text(data.result.resultDIAT.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.DIAB08, .DIAB09, .DIAB10, .DIAB11, .DIAB12, .DIAB13, .DIAB22, .DIAB23')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultDIAU");
                        $(".resultDIAU").find(".result-title").text(data.result.resultDIAU.resultTitle[0]);
                        $(".resultDIAU").find(".title-sub").text(data.result.resultDIAU.titleSub[0]);
                        $(".resultDIAU").find(".result-img").attr("src", data.result.resultDIAU.resultImg[0]);
                        $(".resultDIAU").find(".symptomA li").text(data.result.resultDIAU.symptomA[0]);
                        for(var count = 0; count < data.result.resultDIAU.symptomB.length; count++){
                            $(".resultDIAU .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultDIAU").find(".symptomB li").eq(i).text(data.result.resultDIAU.symptomB[i]);
                        });
                        $(".resultDIAU").find(".symptomPart li").text(data.result.resultDIAU.symptomPart[0]);
                        $(".resultDIAU").find(".symptomText li").text(data.result.resultDIAU.symptomText[0]);
                        $(".resultDIAU").find(".symptomMedical li").text(data.result.resultDIAU.symptomMedical[0]);
                    
                    };

                    if($(".search").is('.DIAB08, .DIAB09, .DIAB10, .DIAB11, .DIAB13, .DIAB22, .DIAB24, .DIAB25')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultDIAV");
                        $(".resultDIAV").find(".result-title").text(data.result.resultDIAV.resultTitle[0]);
                        $(".resultDIAV").find(".title-sub").text(data.result.resultDIAV.titleSub[0]);
                        $(".resultDIAV").find(".result-img").attr("src", data.result.resultDIAV.resultImg[0]);
                        $(".resultDIAV").find(".symptomA li").text(data.result.resultDIAV.symptomA[0]);
                        for(var count = 0; count < data.result.resultDIAV.symptomB.length; count++){
                            $(".resultDIAV .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultDIAV").find(".symptomB li").eq(i).text(data.result.resultDIAV.symptomB[i]);
                        });
                        $(".resultDIAV").find(".symptomPart li").text(data.result.resultDIAV.symptomPart[0]);
                        $(".resultDIAV").find(".symptomText li").text(data.result.resultDIAV.symptomText[0]);
                        $(".resultDIAV").find(".symptomMedical li").text(data.result.resultDIAV.symptomMedical[0]);
                    
                    };
                    

                    $(".result-wrap").eq(0).remove();
                    
            },

            error:function(){

                console.log("error");

            }
        }); 
    };
});

$(".back").click(function(){

    location.reload();

});