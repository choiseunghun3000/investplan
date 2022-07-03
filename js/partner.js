$(document).ready(function(){
    
    // section_01 top_part
    var top_part_arr = [ //[내용]
        ["With our affiliate program, you can make money by referring clients to InvestPlan LTD investment platform. Promote our website by placing our banners or text ads on your website, blog or just put the affiliate link in message forum signatures, email signatures or any other places."],
        ["Our partner affiliate program applies to all of our members from the moment they sign up for an account with us simply share your referral link with friends, and you’ll earn 9% commission at level first from their active deposit. Any additional investment made by your branch will create 3% commission at level second and 1% commission at level third. Commission is credited to your account balance instantly, without any delays."],
        ["Regional Representatives provides you with the opportunity to earn up to 19% commission. Support and advertise our project in your region, become our partner, and you will be financially awarded. An active deposit is needed for you to earn an affiliate commission."]
    ];
    for(v in top_part_arr){
        $("#section_01 .cont .top_part").append(`   
            <p>${top_part_arr[v]}</p>
        `);
    }

    // section_01 bottom_part
    var bottom_part_arr = [ //[타이틀, 내용, 버튼, 이미지]
        ["<span>13%</span> Commission for Partners", "As an standard user, you are able to earn an incentive amount of 9% - 3% - 1% commission per invesment of your referrals. Standard members are not required to have any active investment, or account balance in order to be able to earn from their referrals.", "Get Started Now", "partner.png"],
        ["<span>19%</span> Commission for Representatives", "You are able to become a global representative from all over the world and take advantages of 12% - 4% - 2% - 1% referral commission. In particular, you do not need an active deposit to register for a regional representative. Please fill out the form below.", "Representative Form", "representative.png"],
    ];
    for(i in bottom_part_arr){
        $("#section_01 .cont .bottom_part").append(`
        <div class="box">
            <div class="txt_part">
                <h3>${bottom_part_arr[i][0]}</h3>
                <p>${bottom_part_arr[i][1]}</p>
            </div>
            <div class="img_part">
                <button>${bottom_part_arr[i][2]}</button>
                <img src="./img/sub/${bottom_part_arr[i][3]}" alt="">
            </div>   
        </div>
        `);
    }
        
    
    // section_02
    var section_02_arr = [
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
    
    for(v of section_02_arr){
        $("#section_02 .represent").append(`<a href="#" onclick="return false;"><img src="./img/managers/${v}" alt=""></a>`)
    }





});