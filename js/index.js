$(document).ready(function(){
    
    // sec1
    var sec1_arr = [ //[이미지, 타이틀, 내용]
        ["if_vector_65_02_473778.png", "What is a “InvestPlan”?", "A InvestPlan group is an organization that builds or buys a group of properties and then sells them to investors as rental properties."],
        ["if_vector_65_07_473788.png", "Breaking Down “InvestPlan", "These groups provide a service for rental properties that is similar to mutual funds in that investors can reap some of the benefits of owning rental properties without having to manage them."],
        ["if_vector_65_14_473802.png", "Incredible Strategy & Analisys", "In exchange for finding tenants, handling maintenance and other responsibilities, the organization receives a portion of the investors' monthly rent proceeds."]
    ];
    for(i in sec1_arr){
        $("#sec1 .wrap").append(`
            <div class="cont">
                <div class="img_part">
                    <img src="./img/${sec1_arr[i][0]}" alt="">
                </div>
                <div class="txt_part">
                    <h3>${sec1_arr[i][1]}</h3>
                    <p>${sec1_arr[i][2]}</p>
                </div>
            </div>
        `);
    }

    // sec3
    var sec3_arr = [ //[이미지, 타이틀, 내용]
        ["invest-01.jpg", "Newyork in USA", "Our vision is to be one of the most trusted providers of investment management expertise and long-term financial security."],
        ["invest-02.jpg", "Tokyo in Japan", "Japan is transforming – the world’s third largest economy is actively opening its doors to foreign business. It is creating the best possible environment for..."],
        ["invest-03.jpg", "Sydney in Australia", "The Australian Government welcomes foreign investment. As the Australian Government's investment promotion agency, Austrade works to inform ..."],
        ["invest-04.jpg", "Istanbul in Turkey", "If you are looking to raise money for a fund or build relationships for future opportunities, then this is the place to be."]
    ];
    for(i in sec3_arr){
        $("#sec3 .wrap").append(`
            <div class="cont">
                <div class="img_part">
                    <img src="./img/${sec3_arr[i][0]}" alt="">
                </div>
                <div class="txt_part">
                    <h3>${sec3_arr[i][1]}</h3>
                    <p>${sec3_arr[i][2]}</p>
                    <div class="arrow">
                        <a href="" onclick="return false;"><img src="./img/arrow_right.png" alt=""></a>
                    </div>
                </div>
            </div>
        `);
    }
        
    
    // sec4
    var sec4_arr = [
        "m_01.jpg", 
        "m_02.jpg", 
        "m_03.jpg", 
        "m_04.jpg", 
        "m_05.jpg", 
        "m_06.jpg", 
        "m_07.jpg", 
        "m_08.jpg", 
        "m_09.jpg", 
        "m_10.jpg", 
    ];
    
    for(v of sec4_arr){
        $("#sec4 .wrap").append(`<div class="managers">
        <a href="#" onclick="return false;"><img src="./img/managers/${v}" alt=""></a>
    </div>`)
    }





});