
const translations = {
    vi: {
        rv: "Review" ,
        cust: "Chăm Sóc Khách Hàng",
        nw: "Tin Tức",
        vid: "Videos",
        about : "Về Chúng Tôi",
        ab : "HA Huỳnh Anh Beauty là nơi cung cấp các dịch vụ chăm sóc sắc đẹp tại Thành phố Hồ Chí Minh. Chúng tôi tự hào với nhân viên chuyên nghiệp và giàu kinh nghiệm, luôn sẵn sàng mang đến cho khách hàng những trải nghiệm tốt nhất. Tại HA Huỳnh Anh Beauty, chúng tôi cam kết sử dụng các sản phẩm an toàn, chất lượng cao, và các phương pháp làm đẹp hiện đại để chăm sóc làn da và vẻ đẹp của bạn.",
        service : "Dịch Vụ",
        ser : "Chúng tôi cung cấp một loạt các dịch vụ chăm sóc sắc đẹp bao gồm chăm sóc da mặt, điều trị mụn, làm sáng da, trẻ hóa da, và các liệu pháp thư giãn. Mỗi dịch vụ của chúng tôi đều được thiết kế để đáp ứng nhu cầu cụ thể của từng khách hàng, giúp bạn cảm thấy thoải mái và tự tin với làn da tươi trẻ và khỏe mạnh.",
        contact : "Liên Hệ",
        con: "Địa chỉ: 256/18 Hàn Hải Nguyên, Phường 9, Quận 11, Thành Phố Hồ Chí Minh", 
        con2: "Điện thoại: Zalo 093 266 9866", 
        con3: "Email:",
        con4: "Chúng tôi luôn sẵn sàng lắng nghe và tư vấn cho bạn. Hãy liên hệ với chúng tôi để biết thêm chi tiết về các dịch vụ và đặt lịch hẹn.",
        rv_pag: "Review",
        pag_para: "Khách hàng của chúng tôi luôn đánh giá cao chất lượng dịch vụ và sự chuyên nghiệp của đội ngũ nhân viên. Dưới đây là một số nhận xét từ những khách hàng đã trải nghiệm dịch vụ tại HA Huỳnh Anh Beauty."
    },
    en: {
        rv: "Review" ,
        cust: "Customers",
        nw: "News",
        vid: "Videos",
        about : "About Me",
        ab : "HA Huỳnh Anh Beauty is a premier provider of beauty care services in Ho Chi Minh City. We take pride and dedicated to our professional and experienced staff who are always ready to offer customers the best possible experience. At HA Huỳnh Anh Beauty, we are committed to using safe, high-quality products and modern beauty techniques to care for your skin and enhance your beauty.",
        service : "Services",
        ser : "We offer a wide range of beauty care services including facial treatments, acne treatments, skin brightening, skin rejuvenation, and relaxation therapies. Each of our services is designed to meet the specific needs of each customer, helping you feel comfortable and confident with fresh and healthy skin." ,
        contact : "Contact Me",
        con: "Address: 256/18 Han Hai Nguyen, Ward 9, District 11, Ho Chi Minh City",
        con2: "Phone: Zalo 093 266 9866",
        con3: "Email:",
        con4: "We are always ready to listen and provide advice. Contact us for more details about our services and to schedule an appointment.",
        rv_pag: "Review",
        pag_para:  "BBOur customers consistently appreciate the quality of our services and the professionalism of our staff. Below are some reviews from clients who have experienced services at HA Huỳnh Anh Beauty."
    }

}
const languageSelectop = document.querySelector("select");

let review = document.getElementById("review");                 //Review box
let customer = document.getElementById("customer");             //Customer Me para
let news = document.getElementById("news");                     //News box
let video = document.getElementById("video");                   //Video Box
let h_about = document.getElementById("h_about");               //About Me box
let a_par = document.getElementById("a_par");                   //About Me para
let h_service = document.getElementById("h_service");           //Service box
let ser_par = document.getElementById("ser_par");               //Service para
let h_con = document.getElementById("h_con");                   //Contact box
let con_par = document.getElementById("con_par");               //Contact para
let con_par2 = document.getElementById("con_par2");             //Contact para2
let con_par3 = document.getElementById("con_par3");             //Contact para3
let con_par4 = document.getElementById("con_par4");             //Contact para3
let rv_style = document.getElementById("rv_style");             //Review page
let rv_par = document.getElementById("rv_par");                 //Review para
 

languageSelectop.addEventListener("change",(event) => {
    setLanguage(event.target.value)
})

const setLanguage = (language) => {
    if(language == "en"){
        review.innerText = translations.en.rv;
        customer.innerText = translations.en.cust;
        news.innerText = translations.en.nw;
        video.innerText = translations.en.vid;
        h_about.innerText = translations.en.about;
        a_par.innerText = translations.en.ab;
        h_service.innerText = translations.en.service;
        ser_par.innerText = translations.en.ser;
        h_con.innerText = translations.en.contact;
        con_par.innerText = translations.en.con;
        con_par2.innerText = translations.en.con2;
        con_par3.innerText = translations.en.con3;
        con_par4.innerText = translations.en.con4;
        rv_style.innerText = translations.en.rv_pag;
        rv_par.innerText = translations.en.pag_para;


    }else if(language == "vi"){ 
        review.innerText = translations.vi.rv;
        customer.innerText = translations.vi.cust;
        news.innerText = translations.vi.nw;
        video.innerText = translations.vi.vid; 
        h_about.innerText = translations.vi.about;
        a_par.innerText = translations.vi.ab;
        h_service.innerText = translations.vi.service;
        ser_par.innerText = translations.vi.ser;
        h_con.innerText = translations.vi.contact;
        con_par.innerText = translations.vi.con;
        con_par2.innerText = translations.vi.con2;
        con_par3.innerText = translations.vi.con3;
        con_par4.innerText = translations.vi.con4;
        rv_style.innerText = translations.vi.rv_pag;
        rv_par.innerText = translations.vi.pag_para;
    }
}
