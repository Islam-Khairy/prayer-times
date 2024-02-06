let selectedCountry;
let selectedCity;
let cityNameText = document.getElementById("cityName");
let citiesList = document.getElementById("cityDataList");    
let lastExistCity = "";
let spinner = document.getElementById("spinner");

let countries = [
{   
    country: {countryName: "مصر", enCountryName: "Egypt"},
    cities: [
        { cityName: "القاهرة", enCityName: "Cairo" },
        { cityName: "الجيزة", enCityName: "Giza" },
        { cityName: "الفيوم", enCityName: "Fayoum" },
        { cityName: "بني سويف", enCityName: "Beni Suef" },
        { cityName: "المنيا", enCityName: "Minya" },
        { cityName: "أسيوط", enCityName: "Assiut" },
        { cityName: "سوهاج", enCityName: "Sohag" },
        { cityName: "قنا", enCityName: "Qena" },
        { cityName: "الأقصر", enCityName: "Luxor" },
        { cityName: "أسوان", enCityName: "Aswan" },
        { cityName: "الوادي الجديد", enCityName: "New Valley" },
        { cityName: "مطروح", enCityName: "Matrouh" },
        { cityName: "الإسكندرية", enCityName: "Alexandria" },
        { cityName: "البحيرة", enCityName: "Beheira" },
        { cityName: "كفر الشيخ", enCityName: "Kafr El-Sheikh" },
        { cityName: "دمياط", enCityName: "Damietta" },
        { cityName: "الدقهلية", enCityName: "Dakahlia" },
        { cityName: "الغربية", enCityName: "Gharbia" },
        { cityName: "الشرقية", enCityName: "Sharqia" },
        { cityName: "المنوفية", enCityName: "Monufia" },
        { cityName: "القليوبية", enCityName: "Qalyubia" },
        { cityName: "السويس", enCityName: "Suez" },
        { cityName: "الإسماعيلية", enCityName: "Ismailia" },
        { cityName: "بورسعيد", enCityName: "Port Said" },
        { cityName: "شمال سيناء", enCityName: "Shamal Sina" },
        { cityName: "جنوب سيناء", enCityName: "South Sinai" },
    ]
},    
{
    country: {countryName: "السعودية", enCountryName: "Saudi Arabia"},
    cities: [
        { cityName: "الرياض", enCityName: "Riyadh" },
        { cityName: "جدة", enCityName: "Jeddah" },
        { cityName: "مكة المكرمة", enCityName: "Mecca" },
        { cityName: "المدينة المنورة", enCityName: "Medina" },
        { cityName: "الدمام", enCityName: "Dammam" },
        { cityName: "بريدة", enCityName: "Buraydah" },
        { cityName: "تبوك", enCityName: "Tabuk" },
        { cityName: "الاحساء", enCityName: "Al-Ahsa" },
        { cityName: "الطائف", enCityName: "Taif" },
        { cityName: "خميس مشيط", enCityName: "Khamis Mushait" },
        { cityName: "حائل", enCityName: "Hail" },
        { cityName: "نجران", enCityName: "Najran" },
        { cityName: "جازان", enCityName: "Jazan" },
        { cityName: "القصيم", enCityName: "Qasim" },
        { cityName: "الباحة", enCityName: "Al Bahah" },
        { cityName: "عرعر", enCityName: "Arar" },
        { cityName: "ينبع", enCityName: "Yanbu" },
        { cityName: "الجبيل", enCityName: "Jubail" },
        { cityName: "الخبر", enCityName: "Khobar" },
        { cityName: "حفر الباطن", enCityName: "Hafar Al-Batin" },
        { cityName: "ضباء", enCityName: "Duba" },
        { cityName: "رياض الخبراء", enCityName: "Riyadh Al Khabra" },
        { cityName: "تمير", enCityName: "Tumair" },
        { cityName: "العيينة", enCityName: "Al Uyaynah" },
        { cityName: "الشنان", enCityName: "Shunan" },
        { cityName: "أملج", enCityName: "Umluj" },
        { cityName: "مشهد", enCityName: "Mashhad" },
        { cityName: "القنفذة", enCityName: "Qunfudhah" },
        { cityName: "الوجه", enCityName: "Al Wajh" },
        { cityName: "الفيصلية", enCityName: "Al Faysaliyah" },
        { cityName: "بدر", enCityName: "Badr" },
        { cityName: "ضرما", enCityName: "Dhurma" },
        { cityName: "حريملاء", enCityName: "Huraymila" },
        { cityName: "عنك", enCityName: "Ank" },
        { cityName: "ميسان", enCityName: "Maysan" },
        { cityName: "رفحاء", enCityName: "Rafha" },
        { cityName: "حقل", enCityName: "Haql" },
        { cityName: "خليص", enCityName: "Khulais" },
        { cityName: "بقيق", enCityName: "Buqayq" },
        { cityName: "الزلفي", enCityName: "Zulfi" },
        { cityName: "الخرج", enCityName: "Al-Kharj" },
        { cityName: "الظهران", enCityName: "Dhahran" },
        { cityName: "عنيزة", enCityName: "Onaizah" },
        { cityName: "سكاكا", enCityName: "Sakaka" },
        { cityName: "الجموم", enCityName: "Al Jumum" },
        { cityName: "العلا", enCityName: "Al Ula" },
        { cityName: "وادي الدواسر", enCityName: "Wadi Al Dawasir" },
        { cityName: "الخفجي", enCityName: "Al Khafji" },
        { cityName: "صبيا", enCityName: "Sabya" },
        { cityName: "الأفلاج", enCityName: "Al Aflaj" },
        { cityName: "بيشة", enCityName: "Bisha" },
        { cityName: "سيهات", enCityName: "Sihat" },
        { cityName: "تاروت", enCityName: "Tarout" },
        { cityName: "الدرعية", enCityName: "Diriyah" },
        { cityName: "الملك فهد", enCityName: "King Fahd" },
        { cityName: "خيبر", enCityName: "Khaybar" },
        { cityName: "بلجرشي", enCityName: "Baljurashi" },
        { cityName: "القريات", enCityName: "Al Qurayyat" },
        { cityName: "عفيف", enCityName: "Afif" },
        { cityName: "بحرة", enCityName: "Bahrah" },
        { cityName: "ساجر", enCityName: "Sajir" },
        { cityName: "المظيلف", enCityName: "Al Muzahimiyah" },
        { cityName: "المندق", enCityName: "Al Mandaq" },
        { cityName: "قرية العليا", enCityName: "Al Olaya Village" },
        { cityName: "ضريب", enCityName: "Dhurayb" },
        
    ]
},
{
    country: {countryName: "اليمن", enCountryName: "Yemen"},
    cities: [
        { cityName: "صنعاء", enCityName: "Sana'a" },
        { cityName: "عدن", enCityName: "Aden" },
        { cityName: "تعز", enCityName: "Taiz" },
        { cityName: "الحديدة", enCityName: "Al Hudaydah" },
        { cityName: "إب", enCityName: "Ibb" },
        { cityName: "ذمار", enCityName: "Dhamar" },
        { cityName: "المكلا", enCityName: "Mukalla" },
        { cityName: "عتق", enCityName: "Ataq" },
        { cityName: "الغيظة", enCityName: "Al Ghaydah" },
        { cityName: "تريم", enCityName: "Tarim" },
        { cityName: "البيضاء", enCityName: "Al Bayda" },
        { cityName: "حجة", enCityName: "Hajjah" },
        { cityName: "الجوف", enCityName: "Al Jawf" },
        { cityName: "أبين", enCityName: "Abyan" },
        { cityName: "سيئون", enCityName: "Say'un" },
        { cityName: "مأرب", enCityName: "Marib" },
        { cityName: "سقطرى", enCityName: "Socotra" },
        { cityName: "رداع", enCityName: "Radā‘" },
        { cityName: "الحوطة", enCityName: "Al Hawtah" },
        { cityName: "شبوة", enCityName: "Shabwa" },
        { cityName: "لحج", enCityName: "Lahij" },
        { cityName: "حضرموت", enCityName: "Hadramaut" },
    ]
},
{
    country: {countryName: "عمان", enCountryName: "Oman"},
    cities: [
        { cityName: "مسقط", enCityName: "Muscat" },
        { cityName: "صلالة", enCityName: "Salalah" },
        { cityName: "صحار", enCityName: "Sohar" },
        { cityName: "نزوى", enCityName: "Nizwa" },
        { cityName: "صور", enCityName: "Sur" },
        { cityName: "البريمي", enCityName: "Al Buraimi" },
        { cityName: "الخابورة", enCityName: "Khaburah" },
        { cityName: "بهلاء", enCityName: "Bahla" },
        { cityName: "شناص", enCityName: "Shinas" },
        { cityName: "العين", enCityName: "Al Ain" },
        { cityName: "صحم", enCityName: "Saham" },
        { cityName: "المضيبي", enCityName: "Al Mudaybi" },
        { cityName: "بدية", enCityName: "Bidiyah" },
        { cityName: "ينقل", enCityName: "Yanqul" },
        { cityName: "المصنعة", enCityName: "Al Masnaah" },
        { cityName: "الرستاق", enCityName: "Rustaq" },
        { cityName: "عبري", enCityName: "Ibri" },
        { cityName: "مرباط", enCityName: "Mirbat" },
        { cityName: "السيب", enCityName: "Seeb" },
        { cityName: "مطرح", enCityName: "Matrah" },
        { cityName: "بوشر", enCityName: "Bawshar" },
        { cityName: "بركاء", enCityName: "Barka" },
        { cityName: "العوابي", enCityName: "Al Awabi" },
        { cityName: "السويق", enCityName: "Suwayq" },



    ]
},
{
    country: {countryName: "الإمارات", enCountryName: "United Arab Emirates"},
    cities: [
        { cityName: "أبوظبي", enCityName: "Abu Dhabi" },
        { cityName: "دبي", enCityName: "Dubai" },
        { cityName: "الشارقة", enCityName: "Sharjah" },
        { cityName: "عجمان", enCityName: "Ajman" },
        { cityName: "أم القيوين", enCityName: "Umm Al-Quwain" },
        { cityName: "رأس الخيمة", enCityName: "Ras Al Khaimah" },
        { cityName: "الفجيرة", enCityName: "Fujairah" },
        { cityName: "خورفكان", enCityName: "Khorfakkan" },
        { cityName: "العين", enCityName: "Al Ain" },
        { cityName: "دبا الحصن", enCityName: "Dibba Al-Hisn" },
        { cityName: "دبا الفجيرة", enCityName: "Dibba Al-Fujairah" },
        { cityName: "حتا", enCityName: "Hatta" },
        { cityName: "ليوا", enCityName: "Liwa" },
        { cityName: "خالدية", enCityName: "Khalidiya" },
        { cityName: "مدينة محمد بن زايد", enCityName: "Mohammed Bin Zayed City" },
        { cityName: "مدينة خليفة", enCityName: "Khalifa City" },
        { cityName: "مدينة زايد", enCityName: "Zayed City" },
        { cityName: "مصفوت", enCityName: "Masfoot" },
        { cityName: "جبل علي", enCityName: "Jebel Ali" },
        { cityName: "مدينة شخبوط", enCityName: "Shakhbout City" }
    ]
},
{
    country: {countryName: "قطر", enCountryName: "Qatar"},
    cities: [
        { cityName: "الدوحة", enCityName: "Doha" },
        { cityName: "الريان", enCityName: "Al Rayyan" },
        { cityName: "الوكرة", enCityName: "Al Wakrah" },
        { cityName: "الخور", enCityName: "Al Khor" },
        { cityName: "الخليج الغربي", enCityName: "Al Khawr" },
        { cityName: "الوجهة", enCityName: "Al Wukair" },
        { cityName: "الدحيل", enCityName: "Duhail" },
        { cityName: "أم صلال", enCityName: "Umm Salal" },
        { cityName: "مسيعيد", enCityName: "Mesaieed" },
        { cityName: "الشحانية", enCityName: "Al Shahaniya" },
        { cityName: "الذخيرة", enCityName: "Adh Dhakhirah" },
        { cityName: "الخريطيات", enCityName: "Al Kharaitiyat" },
        { cityName: "الجميلية", enCityName: "Al Jumayliyah" },
        { cityName: "مطار حمد الدولي", enCityName: "Hamad International Airport" }
    ]
},
{
    country: {countryName: "البحرين", enCountryName: "Bahrain"},
    cities: [
        { cityName: "المنامة", enCityName: "Manama" },
        { cityName: "المحرق", enCityName: "Muharraq" },
        { cityName: "جدحفص", enCityName: "Jidhafs" },
        { cityName: "الحد", enCityName: "Al Hidd" },
        { cityName: "سار", enCityName: "Sar" },
        { cityName: "عراد", enCityName: "Arad" },
        { cityName: "الرفاع", enCityName: "Riffa" },
        { cityName: "المقشع", enCityName: "Al Maqsha" },
        { cityName: "حمد", enCityName: "Hamad Town" },
        { cityName: "الحد", enCityName: "Al Hidd" },
        { cityName: "درة البحرين", enCityName: "Durrat Al Bahrain" },
        { cityName: "بسيتين", enCityName: "Busaiteen" },
        { cityName: "جفير", enCityName: "Juffair" },
        { cityName: "ديار المحرق", enCityName: "Diyar Al Muharraq" },
        { cityName: "دراز", enCityName: "Diraz" },


    ]
},
{
    country: {countryName: "الكويت", enCountryName: "Kuwait"},
    cities: [
        { cityName: "الكويت", enCityName: "Kuwait City" },
        { cityName: "الأحمدي", enCityName: "Al Ahmadi" },
        { cityName: "حولي", enCityName: "Hawalli" },
        { cityName: "الفراوانية", enCityName: "Al Farwaniyah" },
        { cityName: "الجهراء", enCityName: "Al Jahra" },
        { cityName: "العبدلية", enCityName: "Al Abdaliyah" },
        { cityName: "المنقف", enCityName: "Al Manqaf" },
        { cityName: "المنصورية", enCityName: "Mansouriya" },
        { cityName: "الرقة", enCityName: "Ar Riqqah" },
        { cityName: "الشعب", enCityName: "Al Sha'ab" },
        { cityName: "السالمية", enCityName: "Salmiya" },
        { cityName: "الصليبية", enCityName: "As Salibiyah" },
        { cityName: "المنصورية", enCityName: "Mansuriya" },
        { cityName: "القصور", enCityName: "Al Qusur" },
        { cityName: "العديلية", enCityName: "Al Adiliyah" },
        { cityName: "القيروان", enCityName: "Al Qairawan" },
        { cityName: "صباح السالم", enCityName: "Sabah Al-Salem" },
        { cityName: "جابر العلي", enCityName: "Jabir al Ali" }
    ]
},
{
    country: {countryName: "العراق", enCountryName: "Iraq"},
    cities: [
        { cityName: "بغداد", enCityName: "Baghdad" },
        { cityName: "البصرة", enCityName: "Basra" },
        { cityName: "الموصل", enCityName: "Mosul" },
        { cityName: "كركوك", enCityName: "Kirkuk" },
        { cityName: "الناصرية", enCityName: "Nasiriyah" },
        { cityName: "الحلة", enCityName: "Al Hillah" },
        { cityName: "ميسان", enCityName: "Maysan" },
        { cityName: "النجف", enCityName: "Najaf" },
        { cityName: "كربلاء", enCityName: "Karbala" },
        { cityName: "الديوانية", enCityName: "Diwaniyah" },
        { cityName: "السماوة", enCityName: "Samawah" },
        { cityName: "ذي قار", enCityName: "Dhi Qar" },
        { cityName: "بابل", enCityName: "Babil" },
        { cityName: "واسط", enCityName: "Wasit" },
        { cityName: "صلاح الدين", enCityName: "Salah ad Din" },
        { cityName: "ديالى", enCityName: "Diyala" },
        { cityName: "كركوك", enCityName: "Kirkuk" },
        { cityName: "نينوى", enCityName: "Nineveh" },
        { cityName: "القادسية", enCityName: "Al-Qadisiyyah" },
        { cityName: "السليمانية", enCityName: "Sulaymaniyah" },
        { cityName: "أربيل", enCityName: "Erbil" },
        { cityName: "دهوك", enCityName: "Duhok" },
        { cityName: "حلبجة", enCityName: "Halabja" },
        { cityName: "سامراء", enCityName: "Samaraa" }
    ]
},
{
    country: {countryName: "إيران", enCountryName: "Iran"},
    "cities": [
        { cityName: "طهران", enCityName: "Tehran" },
        { cityName: "مشهد", enCityName: "Mashhad" },
        { cityName: "اصفهان", enCityName: "Isfahan" },
        { cityName: "كرج", enCityName: "Karaj" },
        { cityName: "تبريز", enCityName: "Tabriz" },
        { cityName: "شيراز", enCityName: "Shiraz" },
        { cityName: "اهواز", enCityName: "Ahvaz" },
        { cityName: "قم", enCityName: "Qom" },
        { cityName: "كرمانشاه", enCityName: "Kermanshah" },
        { cityName: "اهر", enCityName: "Ahar" },
        { cityName: "اراك", enCityName: "Arak" },
        { cityName: "يزد", enCityName: "Yazd" },
        { cityName: "قزوين", enCityName: "Qazvin" },
        { cityName: "ساري", enCityName: "Sari" },
        { cityName: "رشت", enCityName: "Rasht" },
        { cityName: "كرمان", enCityName: "Kerman" },
        { cityName: "همدان", enCityName: "Hamadan" },
        { cityName: "اروميه", enCityName: "Urmia" },
        { cityName: "زاهدان", enCityName: "Zahedan" },
        { cityName: "اردبيل", enCityName: "Ardabil" },
        { cityName: "بندرعباس", enCityName: "Bandar Abbas" },
        { cityName: "بندر انزلي", enCityName: "Bandar Anzali" },
        { cityName: "ايلام", enCityName: "Ilam" },
        { cityName: "بوشهر", enCityName: "Bushehr" },
        { cityName: "خرم‌آباد", enCityName: "Khorramabad" },
    ]
},
{
    country: {countryName: "تركيا", enCountryName: "Turkey"},
    cities: [
        { cityName: "اسطنبول", enCityName: "Istanbul" },
        { cityName: "أنقرة", enCityName: "Ankara" },
        { cityName: "إزمير", enCityName: "Izmir" },
        { cityName: "بورصة", enCityName: "Bursa" },
        { cityName: "أنطاليا", enCityName: "Antalya" },
        { cityName: "أضنة", enCityName: "Adana" },
        { cityName: "كونيا", enCityName: "Konya" },
        { cityName: "آنطاكيا", enCityName: "Antakya" },
        { cityName: "مرسين", enCityName: "Mersin" },
        { cityName: "قيصري", enCityName: "Kayseri" },
        { cityName: "سامسون", enCityName: "Samsun" },
        { cityName: "ديار بكر", enCityName: "Diyarbakir" },
        { cityName: "إسكيشهير", enCityName: "Eskisehir" },
        { cityName: "غازي عنتاب", enCityName: "Gaziantep" },
        { cityName: "أورفة", enCityName: "Şanlıurfa" },
        { cityName: "أديامان", enCityName: "Adıyaman" },
        { cityName: "أفيون قره حصار", enCityName: "Afyonkarahisar" },
        { cityName: "باتمان", enCityName: "Batman" },
        { cityName: "أردهان", enCityName: "Ardahan" },
        { cityName: "بوردور", enCityName: "Burdur" },
        { cityName: "شانكيري", enCityName: "Cankiri" },
        { cityName: "كارابوك", enCityName: "Karabuk" },
        { cityName: "قيرق قلعة", enCityName: "Kirikkale" },
        { cityName: "كيرشههر", enCityName: "Kirsehir" },
        { cityName: "كيركلاريلي", enCityName: "Kirklareli" },
        { cityName: "قرطاع", enCityName: "Kartal" },
        { cityName: "ملاطيا", enCityName: "Malatya" },
        { cityName: "ماردين", enCityName: "Mardin" },
        { cityName: "نيدا", enCityName: "Nigde" },
        { cityName: "أرضن", enCityName: "Ardahan" },
        { cityName: "بينغول", enCityName: "Bingol" },
        { cityName: "أدرنة", enCityName: "Edirne" },
        { cityName: "إيلازيغ", enCityName: "Elazig" },
        { cityName: "إرزينجان", enCityName: "Erzincan" },
        { cityName: "إرزوروم", enCityName: "Erzurum" },
        { cityName: "هاكاري", enCityName: "Hakkari" },
        { cityName: "قارص", enCityName: "Kars" },
        { cityName: "كيليس", enCityName: "Kilis" },
        { cityName: "كوتاهيا", enCityName: "Kutahya" },
        { cityName: "مانيسا", enCityName: "Manisa" },
        { cityName: "أكساراي", enCityName: "Aksaray" },
        { cityName: "طرابزون", enCityName: "Trabzon" },
        { cityName: "تونجلي", enCityName: "Tunceli" },
        { cityName: "شانلي أورفا", enCityName: "Sanliurfa" },
        { cityName: "يوزغات", enCityName: "Yozgat" },
        { cityName: "زونجولداك", enCityName: "Zonguldak" },
        { cityName: "باليكسير", enCityName: "Balikesir" },
        { cityName: "بارتين", enCityName: "Bartin" },
        { cityName: "إسبارتا", enCityName: "Isparta" },
        { cityName: "أماسيا", enCityName: "Amasya" },
        { cityName: "أرتفين", enCityName: "Artvin" },
        { cityName: "دوزجه", enCityName: "Düzce" },
        { cityName: "غرصون", enCityName: "Giresun" },
        { cityName: "نيفشهير", enCityName: "Nevsehir" },
        { cityName: "قرقلر ايلي", enCityName: "Kirklareli" },
        { cityName: "قونيا", enCityName: "Konya" },
        { cityName: "موغلا", enCityName: "Mugla" },
        { cityName: "سكاريا", enCityName: "Sakarya" },
        { cityName: "سيرت", enCityName: "Siirt" },
        { cityName: "سينوب", enCityName: "Sinop" },
        { cityName: "تيكيرداغ", enCityName: "Tekirdag" },
        { cityName: "توكات", enCityName: "Tokat" },
        { cityName: "يالوفا", enCityName: "Yalova" },
        { cityName: "زونغولداق", enCityName: "Zonguldak" },
        { cityName: "ريزا", enCityName: "Rize" },
        { cityName: "دينيزلي", enCityName: "Denizli" },

    ]
},
{
    country: {countryName: "سوريا", enCountryName: "Syria"},
    cities: [
        { cityName: "دمشق", enCityName: "Damascus" },
        { cityName: "حلب", enCityName: "Aleppo" },
        { cityName: "حماة", enCityName: "Hama" },
        { cityName: "حمص", enCityName: "Homs" },
        { cityName: "اللاذقية", enCityName: "Latakia" },
        { cityName: "طرطوس", enCityName: "Tartus" },
        { cityName: "الرقة", enCityName: "Raqqa" },
        { cityName: "إدلب", enCityName: "Idlib" },
        { cityName: "درعا", enCityName: "Daraa" },
        { cityName: "الحسكة", enCityName: "Al-Hasakah" },
        { cityName: "سلمية", enCityName: "Salamiyah" },
        { cityName: "منبج", enCityName: "Manbij" },
        { cityName: "عفرين", enCityName: "Afrin" },
        { cityName: "جبلة", enCityName: "Jableh" },
        { cityName: "دير الزور", enCityName: "Deir ez-Zor" },
        { cityName: "القامشلي", enCityName: "Qamishli" },
        { cityName: "السويداء", enCityName: "As-Suwayda" },
        { cityName: "السلمية", enCityName: "Salamiyah" },
    ]
},
{
    country: {countryName: "لبنان", enCountryName: "Lebanon"},
    "cities": [
        { cityName: "بيروت", enCityName: "Beirut" },
        { cityName: "صيدا", enCityName: "Sidon" },
        { cityName: "النبطية", enCityName: "Nabatieh" },
        { cityName: "جونية", enCityName: "Jounieh" },
        { cityName: "زحلة", enCityName: "Zahle" },
        { cityName: "بعلبك", enCityNam: "Baalbek" },
        { cityName: "جبيل", enCityName: "Byblos" },
        { cityName: "السبتية", enCityName: "Saida" },
        { cityName: "المتن", enCityNam: "Matn" },
        { cityName: "بعبدا", enCityName: "Baabda" },
        { cityName: "عاليه", enCityName: "Aley" },
        { cityName: "صور", enCityName: "Tyre" },
        { cityName: "البترون", enCityName: "Batroun" },
        { cityName: "بشري", enCityName: "Bsharri" },
        { cityName: "كسروان", enCityName: "Keserwan" },
        { cityName: "ذوق مصبح", enCityName: "Zouk Mosbeh" },
        { cityName: "عكار", enCityName: "Akkar" },
        { cityName: "البقاع", enCityName: "Bekaa" },
        { cityName: "مرجعيون", enCityName: "Marjeyoun" },
        { cityName: "حاصبيا", enCityName: "Hasbaya" }
    ]
},
{
    country: {countryName: "الأردن", enCountryName: "Jordan"},
    cities: [
        { cityName: "عمان", enCityName: "Amman" },
        { cityName: "الزرقاء", enCityName: "Zarqa" },
        { cityName: "إربد", enCityName: "Irbid" },
        { cityName: "العقبة", enCityName: "Aqaba" },
        { cityName: "السلط", enCityName: "As-Salt" },
        { cityName: "معان", enCityName: "Ma'an" },
        { cityName: "الكرك", enCityName: "Karak" },
        { cityName: "مأدبا", enCityName: "Madaba" },
        { cityName: "المفرق", enCityName: "Mafraq" },
        { cityName: "جرش", enCityName: "Jerash" },
        { cityName: "عجلون", enCityName: "Ajloun" },
        { cityName: "الرمثا", enCityName: "Ar-Ramtha" },
        { cityName: "الطفيلة", enCityName: "Tafilah" },
        { cityName: "الشوبك", enCityName: "Shoubak" },
    ]
},
{
    country: {countryName: "فلسطين", enCountryName: "Palastine"},
    cities: [
        { cityName: "القدس", enCityName: "Jerusalem" },
        { cityName: "رام الله", enCityName: "Ramallah" },
        { cityName: "بيت لحم", enCityName: "Bethlehem" },
        { cityName: "نابلس", enCityName: "Nablus" },
        { cityName: "جنين", enCityName: "Jenin" },
        { cityName: "طولكرم", enCityName: "Tulkarm" },
        { cityName: "قلقيلية", enCityName: "Qalqilya" },
        { cityName: "سلفيت", enCityName: "Salfit" },
        { cityName: "غزة", enCityName: "Gaza" },
        { cityName: "بيت حانون", enCityName: "Beit Hanoun" },
        { cityName: "خان يونس", enCityName: "Khan Yunis" },
        { cityName: "دير البلح", enCityName: "Deir al-Balah" },
        { cityName: "رفح", enCityName: "Rafah" },
        { cityName: "أم الفحم", enCityName: "Umm al-Fahm" },
        { cityName: "اللد", enCityName: "Lod" },
        { cityName: "نيشر", enCityName: "Nesher" },
        { cityName: "رهط", enCityName: "Rahat" },
        { cityName: "أم خالد", enCityName: "Netanya" },
        { cityName: "بئر السبع", enCityName: "Beersheba" },
        { cityName: "أشدود", enCityName: "Ashdod" },
        { cityName: "قرية ملبّس", enCityName: "Petah Tikva" },
        { cityName: "قرية جريشة", enCityName: "Ramat Gan" },
        { cityName: "عسقلان", enCityName: "Ashkelon" },
        { cityName: "كفر سابا", enCityName: "Kfar Saba" },
        { cityName: "حيفا", enCityName: "Haifa" },
        { cityName: "الناصرة", enCityName: "Nazareth" },
        { cityName: "جت", enCityName: "Jatt" },
        { cityName: "جسر الزرقاء", enCityName: "Jisr az-Zarqa" },
        { cityName: "حولون", enCityName: "Holon" },
        { cityName: "يافا", enCityName: "Tel Aviv" },
        { cityName: "عكا", enCityName: "Acre" },
        { cityName: "نهاريا", enCityName: "Nahariya" },
        { cityName: "بني براك", enCityName: "Bnei Brak" },
        { cityName: "رحوفوت", enCityName: "Rehovot" },
        { cityName: "تمبل هيلز", enCityName: "Temple Hills" },
        { cityName: "كفر سابا", enCityName: "Kfar Saba" },
        { cityName: "كريات يام", enCityName: "Kiryat Yam" },
        { cityName: "جيفعاتايم", enCityName: "Giv'atayim" },
        { cityName: "كريات بياليك", enCityName: "Kiryat Bialik" },
        { cityName: "الخالصة", enCityName: "Kiryat Shmona" },
        { cityName: "رعنانا", enCityName: "Ra'anana" },
        { cityName: "بات يام", enCityName: "Bat Yam" },
        { cityName: "سخنين", enCityName: "Sakhnin" },
        { cityName: "بيت جالا", enCityName: "Beit Jala" },
        { cityName: "جباليا", enCityName: "Jabalia" },
        { cityName: "دير الحطب", enCityName: "Deir al-Hatab" },
        { cityName: "بيت ساحور", enCityName: "Beit Sahur" },
        { cityName: "بيت الشمس", enCityName: "Beit Shemesh" },
        { cityName: "سديروت", enCityName: "Sderot" },
        { cityName: "قلنسوة", enCityName: "Qalansawe" },
        { cityName: "أور يهودا", enCityName: "Or Yehuda" },
        { cityName: "الخليل", enCityName: "Kiryat Gat" }
    ]
},
{
    country: {countryName: "ليبيا", enCountryName: "Libya"},
    cities: [
        { cityName: "طرابلس", enCityName: "Tripoli" },
        { cityName: "بنغازي", enCityName: "Benghazi" },
        { cityName: "مصراتة", enCityName: "Misrata" },
        { cityName: "زوارة", enCityName: "Zuwara" },
        { cityName: "سبها", enCityName: "Sebha" },
        { cityName: "الخمس", enCityName: "Al Khums" },
        { cityName: "الزاوية", enCityName: "Zawiya" },
        { cityName: "درنة", enCityName: "Derna" },
        { cityName: "سرت", enCityName: "Sirte" },
        { cityName: "المرج", enCityName: "Al Marj" },
        { cityName: "يفرن", enCityName: "Yafran" },
        { cityName: "البيضاء", enCityName: "Al Bayda" },
        { cityName: "نالوت", enCityName: "Nalut" },
        { cityName: "غات", enCityName: "Ghat" },
        { cityName: "بني وليد", enCityName: "Bani Walid" },
        { cityName: "مرزق", enCityName: "Murzuq" },
        { cityName: "جالو", enCityName: "Jalu" },
        { cityName: "العزيزية", enCityName: "Al Aziziya" },
        { cityName: "زليتن", enCityName: "Zliten" },
        { cityName: "شحات", enCityName: "Shahhat" },
        { cityName: "طبرق", enCityName: "Tobruk" },
        { cityName: "أجدابيا", enCityName: "Ajdabiya" },
        { cityName: "الزنتان", enCityName: "Zintan" },
        { cityName: "مرزق", enCityName: "Murzuk" },
        { cityName: "ترهونة", enCityName: "Tarhuna" },
        { cityName: "الجميل", enCityName: "Jumayl" },
    ]
},
{
    country: {countryName: "تونس", enCountryName: "Tunisia"},
    cities: [
        { cityName: "تونس", enCityName: "Tunis" },
        { cityName: "صفاقس", enCityName: "Sfax" },
        { cityName: "سوسة", enCityName: "Sousse" },
        { cityName: "قابس", enCityName: "Gabes" },
        { cityName: "قفصة", enCityName: "Gafsa" },
        { cityName: "القيروان", enCityName: "Kairouan" },
        { cityName: "المهدية", enCityName: "Mahdia" },
        { cityName: "سيدي بوزيد", enCityName: "Sidi Bouzid" },
        { cityName: "توزر", enCityName: "Tozeur" },
        { cityName: "نابل", enCityName: "Nabeul" },
        { cityName: "زغوان", enCityName: "Zaghouan" },
        { cityName: "بن عروس", enCityName: "Ben Arous" },
        { cityName: "مدنين", enCityName: "Medenine" },
        { cityName: "تطاوين", enCityName: "Tataouine" },
        { cityName: "جندوبة", enCityName: "Jendouba" },
        { cityName: "باجة", enCityName: "Beja" },
        { cityName: "سليانة", enCityName: "Siliana" },
        { cityName: "القصرين", enCityName: "Kasserine" },
        { cityName: "الكاف", enCityName: "Le Kef" },
        { cityName: "أريانة", enCityName: "Ariana" },
        { cityName: "منوبة", enCityName: "Manouba" },
        { cityName: "المنستير", enCityName: "Monastir" },
        { cityName: "بنزرت", enCityName: "Bizerte" },
        { cityName: "باجة", enCityName: "Béja" },
    ]
},
{
    country: {countryName: "الجزائر", enCountryName: "Algeria"},
    cities: [
        { cityName: "الجزائر العاصمة", enCityName: "Algiers" },
        { cityName: "وهران", enCityName: "Oran" },
        { cityName: "قسنطينة", enCityName: "Constantine" },
        { cityName: "باتنة", enCityName: "Batna" },
        { cityName: "بسكرة", enCityName: "Biskra" },
        { cityName: "تلمسان", enCityName: "Tlemcen" },
        { cityName: "تيارت", enCityName: "Tiaret" },
        { cityName: "ورقلة", enCityName: "Ouargla" },
        { cityName: "سطيف", enCityName: "Setif" },
        { cityName: "مستغانم", enCityName: "Mostaganem" },
        { cityName: "سكيكدة", enCityName: "Skikda" },
        { cityName: "عنابة", enCityName: "Annaba" },
        { cityName: "بجاية", enCityName: "Bejaia" },
        { cityName: "تبسة", enCityName: "Tebessa" },
        { cityName: "بومرداس", enCityName: "Boumerdes" },
        { cityName: "معسكر", enCityName: "Mascara" },
        { cityName: "البويرة", enCityName: "Bouira" },
        { cityName: "ميلة", enCityName: "Mila" },
        { cityName: "أدرار", enCityName: "Adrar" },
        { cityName: "الشلف", enCityName: "Chlef" },
        { cityName: "الطارف", enCityName: "El Tarf" },
        { cityName: "قالمة", enCityName: "Guelma" },
        { cityName: "المدية", enCityName: "Medea" },
        { cityName: "سيدي بلعباس", enCityName: "Sidi Bel Abbes" },
        { cityName: "تيزي وزو", enCityName: "Tizi Ouzou" },
        { cityName: "خنشلة", enCityName: "Khenchela" },
        { cityName: "سوق أهراس", enCityName: "Souk Ahras" },
        { cityName: "تيندوف", enCityName: "Tindouf" },
        { cityName: "تيسمسيلت", enCityName: "Tissemsilt" },
        { cityName: "البيض", enCityName: "El Bayadh" },
        { cityName: "المسيلة", enCityName: "M'Sila" },
        { cityName: "البليدة", enCityName: "Blida" },
        { cityName: "الجلفة", enCityName: "Djelfa" },
        { cityName: "جيجل", enCityName: "Jijel" },
        { cityName: "تمنراست", enCityName: "Tamanrasset" },
        { cityName: "الوادي", enCityName: "El Oued" },
        { cityName: "تبسة", enCityName: "Tébessa" },

    ]
},
{
    country: {countryName: "المغرب", enCountryName: "Morocco"},
    cities: [
        { cityName: "الدار البيضاء", enCityName: "Casablanca" },
        { cityName: "الرباط", enCityName: "Rabat" },
        { cityName: "فاس", enCityName: "Fes" },
        { cityName: "مراكش", enCityName: "Marrakech" },
        { cityName: "طنجة", enCityName: "Tangier" },
        { cityName: "مكناس", enCityName: "Meknes" },
        { cityName: "أغادير", enCityName: "Agadir" },
        { cityName: "وجدة", enCityName: "Oujda" },
        { cityName: "الحسيمة", enCityName: "Al Hoceima" },
        { cityName: "العيون", enCityName: "Laayoune" },
        { cityName: "الناظور", enCityName: "Nador" },
        { cityName: "الجديدة", enCityName: "El Jadida" },
        { cityName: "سلا", enCityName: "Sale" },
        { cityName: "القنيطرة", enCityName: "Kenitra" },
        { cityName: "بني ملال", enCityName: "Beni Mellal" },
        { cityName: "تطوان", enCityName: "Tetouan" },
        { cityName: "خريبكة", enCityName: "Khouribga" },
        { cityName: "تاونات", enCityName: "Taounate" },
        { cityName: "سيدي قاسم", enCityName: "Sidi Kacem" },
        { cityName: "الصويرة", enCityName: "Essaouira" },
        { cityName: "المحمدية", enCityName: "Mohammedia" },
        { cityName: "بن سليمان", enCityName: "Ben Slimane" },
        { cityName: "الرشيدية", enCityName: "Errachidia" },
        { cityName: "تيفلت", enCityName: "Tiflet" },
        { cityName: "زاكورة", enCityName: "Zagora" },
        { cityName: "الفقيه بن صالح", enCityName: "Fquih Ben Salah" },
        { cityName: "تاوريرت", enCityName: "Taourirt" },
        { cityName: "بركان", enCityName: "Berkane" },
        { cityName: "سيدي سليمان", enCityName: "Sidi Slimane" },
        { cityName: "تازة", enCityName: "Taza" },
        { cityName: "خنيفرة", enCityName: "Khenifra" },
        { cityName: "بوجدور", enCityName: "Boujdour" },
        { cityName: "العرائش", enCityName: "Larache" },
        { cityName: "سيدي بنور", enCityName: "Sidi Bennour" },
        { cityName: "تيزنيت", enCityName: "Tiznit" },
        { cityName: "برشيد", enCityName: "Berrechid" },
        { cityName: "سيدي إفني", enCityName: "Sidi Ifni" },
        { cityName: "الفنيدق", enCityName: "Fnideq" },
        { cityName: "تمارة", enCityName: "Témara" },
        { cityName: "وادي زم", enCityName: "Oued Zem" },
        { cityName: "أزرو", enCityName: "Azrou" }
    ]
},
{
    country: {countryName: "موريتانيا", enCountryName: "Mauritania"},
    "cities": [
        { cityName: "نواكشوط", enCityName: "Nouakchott" },
        { cityName: "نواذيبو", enCityName: "Nouadhibou" },
        { cityName: "روصو", enCityName: "Rosso" },
        { cityName: "زويرات", enCityName: "Zouérat" },
        { cityName: "كيهيدي", enCityName: "Kaédi" },
        { cityName: "أطار", enCityName: "Atar" },
        { cityName: "سيلبابي", enCityName: "Selibaby" },
        { cityName: "ألاك", enCityName: "Aleg" },
        { cityName: "النعمة", enCityName: "Néma" },
        { cityName: "كيفه", enCityName: "Kiffa" },
        { cityName: "لعيون", enCityName: "Laayoune" },
    ]
},
{
    country: {countryName: "مالي", enCountryName: "Mali"},
    "cities": [
        { cityName: "باماكو", enCityName: "Bamako" },
        { cityName: "سيكاسو", enCityName: "Sikasso" },
        { cityName: "موبتي", enCityName: "Mopti" },
        { cityName: "كوليكورو", enCityName: "Koulikoro" },
        { cityName: "سيغو", enCityName: "Segou" },
        { cityName: "كايي", enCityName: "Kayes" },
        { cityName: "سان", enCityName: "San" },
        { cityName: "سيغون", enCityName: "Ségou" },
        { cityName: "مالي", enCityName: "Mali" },
        { cityName: "جاو", enCityName: "Gao" },
        { cityName: "تيمبكتو", enCityName: "Timbuktu" },
        { cityName: "تيساليت", enCityName: "Tessalit" },
        { cityName: "دير", enCityName: "Diré" },
        { cityName: "أنسوكو", enCityName: "Ansongo" },
        { cityName: "تامنراست", enCityName: "Tamanrasset" },
    ]
},
{
    country: {countryName: "السنغال", enCountryName: "Senegal"},
    "cities": [
        { cityName: "داكار", enCityName: "Dakar" },
        { cityName: "تيسي", enCityName: "Thiès" },
        { cityName: "كاولاك", enCityName: "Kaolack" },
        { cityName: "زيغينشور", enCityName: "Ziguinchor" },
        { cityName: "سانت لويس", enCityName: "Saint-Louis" },
        { cityName: "روفيسك", enCityName: "Rufisque" },
        { cityName: "فاتيك", enCityName: "Fatick" },
        { cityName: "مبور", enCityName: "Mbour" },
        { cityName: "لوغا", enCityName: "Louga" },
        { cityName: "تامباكوندا", enCityName: "Tambacounda" },
        { cityName: "ديوربيل", enCityName: "Diourbel" },
        { cityName: "كيبيمير", enCityName: "Kébémer" },
        { cityName: "ماتام", enCityName: "Matam" },
        { cityName: "كيدوغو", enCityName: "Kédougou" },
        { cityName: "سيدهيو", enCityName: "Sédhiou" },
        { cityName: "كفرين", enCityName: "Kaffrine" },
        { cityName: "واكام", enCityName: "Ouakam" },
        { cityName: "كولدا", enCityName: "Kolda" },
    ]
},
{
    country: {countryName: "غامبيا", enCountryName: "Gambia"},
    cities: [
        { cityName: "بانجول", enCityName: "Banjul" },
        { cityName: "سيريكوندا", enCityName: "Serekunda" },
        { cityName: "بريكاما", enCityName: "Brikama" },
        { cityName: "بروفوت", enCityName: "Brufut" },
        { cityName: "بوسومبالا", enCityName: "Busumbala" },
        { cityName: "كارنتابا", enCityName: "Karantaba" },
        { cityName: "كيريوان", enCityName: "Kerewan" },
        { cityName: "مانساكونكو", enCityName: "Mansa Konko" },
        { cityName: "كانيفينج", enCityName: "Kanifing" },
        { cityName: "لامين", enCityName: "Lamin" },
    ]
},
{
    country: {countryName: "غينيا", enCountryName: "Guinea"},
    "cities": [
        { cityName: "كوناكري", enCityName: "Conakry" },
        { cityName: "نزيريكوري", enCityName: "Nzérékoré" },
        { cityName: "كانكان", enCityName: "Kankan" },
        { cityName: "لابيه", enCityName: "Labe" },
        { cityName: "مامو", enCityName: "Mamou" },
        { cityName: "فريا", enCityName: "Fria" },
        { cityName: "سيغيري", enCityName: "Siguiri" },
        { cityName: "ماسنتا", enCityName: "Macenta" },
        { cityName: "كنديا", enCityName: "Kindia" },
        { cityName: "لولا", enCityName: "Lola" },
        { cityName: "بوكي", enCityName: "Boké" },
        { cityName: "تليملي", enCityName: "Télimélé" },
        { cityName: "فارانا", enCityName: "Faranah" },
        { cityName: "كيروان", enCityName: "Kérouané" },
        { cityName: "دابولا", enCityName: "Dabola" },
        { cityName: "جيكيدوغو", enCityName: "Gueckedou" },
        { cityName: "بيتا", enCityName: "Pita" },
        { cityName: "بوفا", enCityName: "Boffa" },
        { cityName: "توغيه ", enCityName: "Tougué" },
        { cityName: "كوندارا", enCityName: "Koundara" },
    ]
},
{
    country: {countryName: "سيراليون", enCountryName: "Sierra Leone"},
    "cities": [
        { cityName: "فريتاون", enCityName: "Freetown" },
        { cityName: "بو", enCityName: "Bo" },
        { cityName: "كنيما", enCityName: "Kenema" },
        { cityName: "ماكيني", enCityName: "Makeni" },        
        { cityName: "كونو", enCityName: "Kono" },
    ]
},
{
    country: {countryName: "ساحل العاج", enCountryName: "Ivory Coast"},
    cities: [
        { cityName: "أبيدجان", enCityName: "Abidjan" },
        { cityName: "بواكي", enCityName: "Bouaké" },
        { cityName: "دالوا", enCityName: "Daloa" },
        { cityName: "ياموسوكرو", enCityName: "Yamoussoukro" },
        { cityName: "سان پيدرو", enCityName: "San-Pédro" },
        { cityName: "بوندوكو", enCityName: "Bondoukou" },
        { cityName: "كورهوغو", enCityName: "Korhogo" },
        { cityName: "مان", enCityName: "Man" },
        { cityName: "أدزوپه", enCityName: "Adzopé" },
        { cityName: "أغبوفيل", enCityName: "Agboville" },
        { cityName: "اجنيبيليكرو", enCityName: "Agnibilekrou" },
        { cityName: "غاغنوا", enCityName: "Gagnoa" },
        { cityName: "سيكينسي", enCityName: "Sikensi" },
        { cityName: "ساساندرا", enCityName: "Sassandra" },
        { cityName: "دابو", enCityName: "Dabou" },
        { cityName: "جيكانو", enCityName: "Djékanou" },
        { cityName: "زوينولا", enCityName: "Zuénoula" },
        { cityName: "سوبري", enCityName: "Soubre" },
    ]
},
{
    country: {countryName: "الكاميرون", enCountryName: "Cameroon"},
    cities: [
        { cityName: "ياوندي", enCityName: "Yaoundé" },
        { cityName: "دوالا", enCityName: "Douala" },
        { cityName: "جاروا", enCityName: "Garoua" },
        { cityName: "كومبا", enCityName: "Kumba" },
        { cityName: "باميندا", enCityName: "Bamenda" },
        { cityName: "بويا", enCityName: "Buea" },
        { cityName: "نكونغسامبا", enCityName: "Nkongsamba" },
        { cityName: "ماروا", enCityName: "Maroua" },
        { cityName: "بيرا", enCityName: "Bira" },
        { cityName: "كومبي", enCityName: "Koumbi" },
        { cityName: "موا", enCityName: "Moa" },
        { cityName: "كريبي", enCityName: "Kribi" },
        { cityName: "تيكو", enCityName: "Tiko" },
        { cityName: "ليمبي", enCityName: "Limbe" },
        { cityName: "بامندجو", enCityName: "Bamendjou" },
        { cityName: "مبانجا", enCityName: "Mbanga" },
        { cityName: "مبودا", enCityName: "Mbouda" },
        { cityName: "مبينجوي", enCityName: "Mbengwi" },
        { cityName: "بافوسام", enCityName: "Bafoussam" },
    ]
},
{
    country: {countryName: "نيجريا", enCountryName: "Nigeria"},
    "cities": [
        { cityName: "أبوجا", enCityName: "Abuja" },
        { cityName: "لاجوس", enCityName: "Lagos" },
        { cityName: "كانو", enCityName: "Kano" },
        { cityName: "إيبادان", enCityName: "Ibadan" },
        { cityName: "كالابار", enCityName: "Calabar" },
        { cityName: "بورت هاركورت", enCityName: "Port Harcourt" },
        { cityName: "أويو", enCityName: "Oyo" },
        { cityName: "بينين سيتي", enCityName: "Benin City" },
        { cityName: "كادونا", enCityName: "Kaduna" },
        { cityName: "إيكيتي", enCityName: "Ekiti" },
        { cityName: "جوس", enCityName: "Jos" },
        { cityName: "كوارا", enCityName: "Kwara" },
        { cityName: "باوتشي", enCityName: "Bauchi" },
        { cityName: "مايدوجوري", enCityName: "Maiduguri" },
        { cityName: "كاتسينا", enCityName: "Katsina" },
        { cityName: "أكوا إيبوم", enCityName: "Akwa Ibom" },
        { cityName: "أونيتشا", enCityName: "Onitsha" },
        { cityName: "واري", enCityName: "Warri" },
        { cityName: "مينا", enCityName: "Minna" },
        { cityName: "زاريا", enCityName: "Zaria" },
        { cityName: "آبا", enCityName: "Aba" },
        { cityName: "أوشوغبو", enCityName: "Oshogbo" },
        { cityName: "جومبي", enCityName: "Gombe" },
        { cityName: "فونتوا", enCityName: "Funtua" },
        { cityName: "بيرنين كيبي", enCityName: "Birnin Kebbi" },
        { cityName: "يناجوا", enCityName: "Yenagoa" },
    ]
},
{
    country: {countryName: "النيجر", enCountryName: "Niger"},
    "cities": [
        { cityName: "نيامي", enCityName: "Niamey" },
        { cityName: "زندر", enCityName: "Zinder" },
        { cityName: "مرادي", enCityName: "Maradi" },
        { cityName: "أغاديس", enCityName: "Agadez" },
        { cityName: "تاهوا", enCityName: "Tahoua" },
        { cityName: "دوسو", enCityName: "Dosso" },
        { cityName: "ماداوا", enCityName: "Madaoua" },
        { cityName: "تيرا", enCityName: "Téra" },
        { cityName: "بيلما", enCityName: "Bilma" },
        { cityName: "كولو", enCityName: "Kollo" },
        { cityName: "غايا", enCityName: "Gaya" },
        { cityName: "آيرو", enCityName: "Ayorou" },
        { cityName: "نجيجمي", enCityName: "N'guigmi" },
        { cityName: "أرليت", enCityName: "Arlit" },
        { cityName: "ماغاريا", enCityName: "Magaria" },
        { cityName: "تيلابيري", enCityName: "Tillabéri" },
    ]
},
{
    country: {countryName: "تشاد", enCountryName: "Chad"},
    cities: [
        { cityName: "نجامينا", enCityName: "N'Djamena" },
        { cityName: "موندو", enCityName: "Moundou" },
        { cityName: "سرا", enCityName: "Sarh" },
        { cityName: "أبيشي", enCityName: "Abeche" },
        { cityName: "كيلو", enCityName: "Kelo" },
        { cityName: "أتي", enCityName: "Ati" },
        { cityName: "آم تيمان", enCityName: "Am Timan" },
        { cityName: "بوسو", enCityName: "Bousso" },
        { cityName: "فايا", enCityName: "Faya" },
        { cityName: "بوكورو", enCityName: "Bokoro" },
        { cityName: "بول", enCityName: "Bol" },
        { cityName: "جوندي", enCityName: "Goundi" },
        { cityName: "كوسيري", enCityName: "Kousseri" },
        { cityName: "دوبا", enCityName: "Doba" },
        { cityName: "مونجو", enCityName: "Mongo" },
    ]
},
{
    country: {countryName: "شمال السودان", enCountryName: "Sudan"},
    cities: [
        { cityName: "الخرطوم", enCityName: "Khartoum" },
        { cityName: "أم درمان", enCityName: "Omdurman" },
        { cityName: "بحري", enCityName: "Bahri" },
        { cityName: "كسلا", enCityName: "Kassala" },
        { cityName: "الفاو", enCityName: "Al Fao" },
        { cityName: "سنار", enCityName: "Sennar" },
        { cityName: "شندي", enCityName: "Shendi" },
        { cityName: "بورتسودان", enCityName: "Port Sudan" },
        { cityName: "عطبرة", enCityName: "Atbara" },
        { cityName: "الدينج", enCityName: "Dilling" },
        { cityName: "نيالا", enCityName: "Nyala" },
        { cityName: "القضارف", enCityName: "Al Qadarif" },
        { cityName: "سنجة", enCityName: "Singa" },
        { cityName: "القوز", enCityName: "Al Quoz" },
        { cityName: "باكا", enCityName: "Baka" },
        { cityName: "مدني", enCityName: "Medani" },
        { cityName: "العباسية", enCityName: "Al Abbasiyah" },
        { cityName: "الجزيرة", enCityName: "Al-Jazirah" },
        { cityName: "النيل الأبيض", enCityName: "White Nile" },
        { cityName: "النيل الأزرق", enCityName: "Blue Nile" },

    ]
},
{
    country: {countryName: "جنوب السودان", enCountryName: "Republic of South Sudan"},
    cities: [
        { cityName: "جوبا", enCityName: "Juba" },
        { cityName: "واو", enCityName: "Wau" },
        { cityName: "بور", enCityName: "Bor" },
        { cityName: "رمبيك", enCityName: "Rumbek" },
        { cityName: "أويل", enCityName: "Aweil" },
        { cityName: "ناصر", enCityName: "Nasir" },
        { cityName: "كايا", enCityName: "Kaya" },
        { cityName: "مايانج", enCityName: "Mayang" },
        { cityName: "يي", enCityName: "Yei" },
        { cityName: "توريت", enCityName: "Torit" },
        { cityName: "بينتيو", enCityName: "Bentiu" },
        { cityName: "كوجوك", enCityName: "Kuajok" },
        { cityName: "كاجو كاجي", enCityName: "Kajokeji" },
        { cityName: "أكوبو", enCityName: "Akobo" },
        { cityName: "ملكال", enCityName: "Malakal" },
        { cityName: "كبويتا", enCityName: "Kapoeta" },
        { cityName: "مايوم", enCityName: "Mayom" }
    ]
},
{
    country: {countryName: "جيبوتي", enCountryName: "Djibouti"},
    cities: [
        { cityName: "جيبوتي", enCityName: "Djibouti City" },
        { cityName: "أوبوك", enCityName: "Obock" },
        { cityName: "دورا", enCityName: "Dorra" },
        { cityName: "تاجوره", enCityName: "Tadjoura" },
        { cityName: "علي صبيح", enCityName: "Ali Sabieh" },
        { cityName: "دكيل", enCityName: "Dikhil" },
        { cityName: "آرتا", enCityName: "Arta" },
        { cityName: "غالافي", enCityName: "Galafi" },
        { cityName: "حلحول", enCityName: "Holhol" },
        { cityName: "بالهو", enCityName: "Balho" },
        { cityName: "دغلا", enCityName: "Dagla" },
        { cityName: "دوركا", enCityName: "Dourka" },
        { cityName: "غاليلاه", enCityName: "Galilelah" },
        { cityName: "لوكومبي", enCityName: "Lukumbe" },
        { cityName: "مينا", enCityName: "Mina" },
        { cityName: "أمبو", enCityName: "Ambou" },
        { cityName: "جوده", enCityName: "Goda" },
        { cityName: "غودوما", enCityName: "Goudouma" },
        { cityName: "راهيتو", enCityName: "Raheitou" }
    ]
},
{
    country: {countryName: "الصومال", enCountryName: "Somalia"},
    "cities": [
        { cityName: "مقديشو", enCityName: "Mogadishu" },
        { cityName: "هرجيسا", enCityName: "Hargeisa" },
        { cityName: "بوساسو", enCityName: "Bosaso" },
        { cityName: "كيسمايو", enCityName: "Kismayo" },
        { cityName: "بورما", enCityName: "Borama" },
        { cityName: "بربرة", enCityName: "Berbera" },
        { cityName: "جالكايو", enCityName: "Galkayo" },
        { cityName: "قرضو", enCityName: "Qardho" },
        { cityName: "بوراو", enCityName: "Burao" },
        { cityName: "جروي", enCityName: "Garoowe" },
        { cityName: "ماركا", enCityName: "Marka" },
        { cityName: "ميركا", enCityName: "Merca" },
        { cityName: "كريني", enCityName: "Keren" },
    ]
},
{
    country: {countryName: "أفغانستان", enCountryName: "Afghanistan"},
    cities: [
        { cityName: "كابول", enCityName: "Kabul" },
        { cityName: "قندهار", enCityName: "Kandahar" },
        { cityName: "هرات", enCityName: "Herat" },
        { cityName: "مزار الشريف", enCityName: "Mazar-i-Sharif" },
        { cityName: "كندوز", enCityName: "Kunduz" },
        { cityName: "جلال آباد", enCityName: "Jalalabad" },
        { cityName: "لشكر گاه", enCityName: "Lashkar Gah" },
        { cityName: "طالوقان", enCityName: "Taluqan" },
        { cityName: "پل خمری", enCityName: "Puli Khumri" },
        { cityName: "غزني", enCityName: "Ghazni" },
        { cityName: "شبرغان", enCityName: "Sheberghan" },
        { cityName: "باميان", enCityName: "Bamyan" },
        { cityName: "سرپل", enCityName: "Sar-e Pol" },
        { cityName: "فاره", enCityName: "Farah" },
        { cityName: "پکتیا", enCityName: "Paktia" },
        { cityName: "سمنگان", enCityName: "Samangan" },
        { cityName: "بغلان", enCityName: "Baghlan" },
        { cityName: "فارياب", enCityName: "Faryab" },
        { cityName: "بلخ", enCityName: "Balkh" },
        { cityName: "خوست", enCityName: "Khost" },
        { cityName: "بنجشير", enCityName: "Panjshir" },
        { cityName: "تخار", enCityName: "Takhar" },
        { cityName: "لوجر", enCityName: "Logar" },
        { cityName: "نيمروز", enCityName: "Nimroz" },
        { cityName: "كابيسا", enCityName: "Kapisa" },
        { cityName: "بدخشان", enCityName: "Badakhshan" },
    ]
},
{
    country: {countryName: "باكستان", enCountryName: "Pakistan"},
    "cities": [
        { cityName: "إسلام آباد", enCityName: "Islamabad" },
        { cityName: "كراتشي", enCityName: "Karachi" },
        { cityName: "لاهور", enCityName: "Lahore" },
        { cityName: "فيصل آباد", enCityName: "Faisalabad" },
        { cityName: "ملتان", enCityName: "Multan" },
        { cityName: "بهاولبور", enCityName: "Bahawalpur" },
        { cityName: "جوجرانوالا", enCityName: "Gujranwala" },
        { cityName: "غوجرات", enCityName: "Gujrat" },
        { cityName: "سکھر", enCityName: "Sukkur" },
        { cityName: "رحيم يار خان", enCityName: "Rahim Yar Khan" },
        { cityName: "سرگودها", enCityName: "Sargodha" },
        { cityName: "روالبندي", enCityName: "Rawalpindi" },
        { cityName: "جهلم", enCityName: "Jhelum" },
        { cityName: "بهالوال", enCityName: "Bhalwal" },
        { cityName: "سيالكوت", enCityName: "Sialkot" },
        { cityName: "رينالا", enCityName: "Renala Khurd" },
        { cityName: "شيخوبورا", enCityName: "Sheikhupura" },
        { cityName: "فيهاري", enCityName: "Vehari" },
        { cityName: "بهاولناغر", enCityName: "Bahawalnagar" },
        { cityName: "جوهر أباد", enCityName: "Jauharabad" },
        { cityName: "أتوك", enCityName: "Attock" },
        { cityName: "مردان", enCityName: "Mardan" },
        { cityName: "بانو", enCityName: "Bannu" },
        { cityName: "ديرا إسماعيل خان", enCityName: "Dera Ismail Khan" }
    ]
},
{
    country: {countryName: "طاجيكستان", enCountryName: "Tajikistan"},
    cities: [
        { cityName: "دوشنبه", enCityName: "Dushanbe" },
        { cityName: "خجند", enCityName: "Khujand" },
        { cityName: "كورغان تبه", enCityName: "Kurgan-Tyube" },
        { cityName: "پنجاكنت", enCityName: "Panjakent" },
        { cityName: "استرافشان", enCityName: "Istaravshan" },
        { cityName: "فخش", enCityName: "Vakhsh" },
        { cityName: "كولاب", enCityName: "Kŭlob" },
        { cityName: "مرغاب", enCityName: "Murgab" },
        { cityName: "دنگارا", enCityName: "Danghara" },
        { cityName: "تورسونزاده", enCityName: "Tursunzoda" },
        { cityName: "كولخوزوبود", enCityName: "Kolkhozobod" },
        { cityName: "تشكالوفسك", enCityName: "Chkalovsk" },
        { cityName: "جيرفاتول", enCityName: "Jirgatol" },
        { cityName: "نورك", enCityName: "Nurek" },
        { cityName: "كلانتر", enCityName: "Kalantyr" },
        { cityName: "كوبودييون", enCityName: "Qubodiyon" }
    ]
},
{
    country: {countryName: "قيرغيزستان", enCountryName: "Kyrgyzstan"},
    cities: [
        { cityName: "بيشكك", enCityName: "Bishkek" },
        { cityName: "اوش", enCityName: "Osh" },
        { cityName: "جالال‌ آباد", enCityName: "Jalal-Abad" },
        { cityName: "كاراكول", enCityName: "Karakol" },
        { cityName: "توكموك", enCityName: "Tokmok" },
        { cityName: "تالاس", enCityName: "Talas" },
        { cityName: "نارين", enCityName: "Naryn" },
        { cityName: "بازار-كورجون", enCityName: "Bazar-Korgon" },
        { cityName: "سوزاك", enCityName: "Suzak" },
        { cityName: "قره بالتا", enCityName: "Kara-Balta" },
        { cityName: "سوكولوك", enCityName: "Sokuluk" },
        { cityName: "مايلو سو", enCityName: "Mailuu-Suu" },
        { cityName: "باليكتشى", enCityName: "Balykchy" },
        { cityName: "كانت", enCityName: "Kant" },
        { cityName: "تاش-كومير", enCityName: "Tash-Kumyr" },
        { cityName: "أت‌-باشي", enCityName: "At-Bashy" },
        { cityName: "أرال", enCityName: "Aral" },
        { cityName: "اليتشفسك", enCityName: "Ilichevsk" }
    ]
},
{
    country: {countryName: "كازاخستان", enCountryName: "Kazakhstan"},
    cities: [
        { cityName: "استانا", enCityName: "Astana" },
        { cityName: "آلماتى", enCityName: "Almaty" },
        { cityName: "شيمكنت", enCityName: "Shymkent" },
        { cityName: "كارقندا", enCityName: "Karaganda" },
        { cityName: "اورال", enCityName: "Oral" },
        { cityName: "سيماى", enCityName: "Semey" },
        { cityName: "تاراز", enCityName: "Taraz" },
        { cityName: "بافلودار", enCityName: "Pavlodar" },
        { cityName: "تميرتاو", enCityName: "Temirtau" },
        { cityName: "اكتوبي", enCityName: "Aktobe" },
        { cityName: "كيزيلوردا", enCityName: "Kyzylorda" },
        { cityName: "پاڤلودار", enCityName: "Pavlodar" },
        { cityName: "بتروبافل", enCityName: "Petropavl" },
        { cityName: "كوكشيتو", enCityName: "Kokshetau" },
        { cityName: "رودني", enCityName: "Rudny" }
    ]
},
{
    "country": {countryName: "أوزبكستان", enCountryName: "Uzbekistan"},
    "cities": [
        { cityName: "طشقند", enCityName: "Tashkent" },
        { cityName: "سمرقند", enCityName: "Samarkand" },
        { cityName: "بخارى", enCityName: "Bukhara" },
        { cityName: "أورجينش", enCityName: "Urgench" },
        { cityName: "جيزاك", enCityName: "Jizzakh" },
        { cityName: "فرجانه", enCityName: "Fergana" },
        { cityName: "نمنجان", enCityName: "Namangan" },
        { cityName: "أندجان", enCityName: "Andijan" },
        { cityName: "نوكوس", enCityName: "Nukus" },
        { cityName: "نافوى", enCityName: "Navoiy" },
        { cityName: "مارغيلان", enCityName: "Margilan" },
        { cityName: "چيرچيك", enCityName: "Chirchiq" },
        { cityName: "قرشي", enCityName: "Qarshi" },
        { cityName: "قوقند", enCityName: "Kokand" },
        { cityName: "سرداريا", enCityName: "Sirdaryo" },
        { cityName: "كولستان", enCityName: "Guliston" },
        { cityName: "ديناو", enCityName: "Denau" },
        { cityName: "ترمذ", enCityName: "Termiz" }
    ]
},
{
    "country": {countryName: "تركمانستان", enCountryName: "Turkmenistan"},
    "cities": [
        { cityName: "عشق آباد", enCityName: "Ashgabat" },
        { cityName: "تركمن‌ باشي", enCityName: "Türkmenbaşy" },
        { cityName: "داش أغوز", enCityName: "Dashoguz" },
        { cityName: "مري", enCityName: "Mary" },
        { cityName: "تركمن‌ آباد", enCityName: "Türkmenabat" },
        { cityName: "بايرام ‌علي", enCityName: "Bayramaly" },
        { cityName: "بلخان آباد", enCityName: "Balkanabat" },
        { cityName: "عودان", enCityName: "Owadan" },
        { cityName: "غسانجيق", enCityName: "Gazanjyk" },
        { cityName: "كوبتداج", enCityName: "Köpetdag" },
        { cityName: "مرغاب", enCityName: "Murgap" },
        { cityName: "فاراب", enCityName: "Farap" },
        { cityName: "ليباب", enCityName: "Lebap" },
        { cityName: "ميايندهبه", enCityName: "Mayandepe" },
        { cityName: "نهراباد", enCityName: "Nahrabat" }
    ]
},
{
    country: {countryName: "أذربيجان", enCountryName: "Azerbaijan"},
    cities: [
        { cityName: "باكو", enCityName: "Baku" },
        { cityName: "جانجا", enCityName: "Ganja" },
        { cityName: "سومقاييت", enCityName: "Sumqayit" },
        { cityName: "لنكران", enCityName: "Lankaran" },
        { cityName: "شماخي", enCityName: "Shamakhi" },
        { cityName: "قوبا", enCityName: "Quba" },
        { cityName: "زقاتالا", enCityName: "Zaqatala" },
        { cityName: "جوبوستان", enCityName: "Qobustan" },
        { cityName: "ماردكان", enCityName: "Mardakan" },
        { cityName: "نفطجاله", enCityName: "Neftchala" }
    ]
},
{
    country: {countryName: "بنغلاديش", enCountryName: "Bangladesh"},
    cities: [
        { cityName: "دكا", enCityName: "Dhaka" },
        { cityName: "شطغرام", enCityName: "Chittagong" },
        { cityName: "خولنا", enCityName: "Khulna" },
        { cityName: "راجشاهي", enCityName: "Rajshahi" },
        { cityName: "سيلهت", enCityName: "Sylhet" },
        { cityName: "باريسال", enCityName: "Barisal" },
        { cityName: "بوغرا", enCityName: "Bogra" },
        { cityName: "رانغاماتي", enCityName: "Rangamati" },
        { cityName: "كوكس بازار", enCityName: "Cox's Bazar" },
        { cityName: "نارايانگانج", enCityName: "Narayanganj" },
        { cityName: "ميمينسينغ", enCityName: "Mymensingh" },
        { cityName: "فني", enCityName: "Feni" },
        { cityName: "جسور", enCityName: "Jessore" },
        { cityName: "ناتور", enCityName: "Natore" },
        { cityName: "راجباري", enCityName: "Rajbari" },
        { cityName: "رنكبور", enCityName: "Rangpur" },
        { cityName: "جهانجيرناجار", enCityName: "Jahangirnagar" },
        { cityName: "جامالپور", enCityName: "Jamalpur" }
    ]
},
{
    country: {countryName: "ماليزيا", enCountryName: "Malaysia"},
    "cities": [
        { cityName: "كوالالمبور", enCityName: "Kuala Lumpur" },
        { cityName: "جورج تاون", enCityName: "George Town" },
        { cityName: "إيبوه", enCityName: "Ipoh" },
        { cityName: "شاه علم", enCityName: "Shah Alam" },
        { cityName: "بيتالينغ جايا", enCityName: "Petaling Jaya" },
        { cityName: "جوهور بهارو", enCityName: "Johor Bahru" },
        { cityName: "كوتا كينابالو", enCityName: "Kota Kinabalu" },
        { cityName: "كوتا بهارو", enCityName: "Kota Bharu" },
        { cityName: "كوالا تريڠانو", enCityName: "Kuala Terengganu" },
        { cityName: "كوتا ساماراهان", enCityName: "Kota Samarahan" },
        { cityName: "سيرمبانغ", enCityName: "Seremban" },
        { cityName: "تايبينغ", enCityName: "Taiping" },
        { cityName: "كوانتان", enCityName: "Kuantan" },
        { cityName: "سيبو", enCityName: "Sibu" },
        { cityName: "ميري", enCityName: "Miri" },
        { cityName: "ألور ستار", enCityName: "Alor Setar" },
        { cityName: "راوانج", enCityName: "Rawang" },
        { cityName: "بوتراجايا", enCityName: "Putrajaya" },
        { cityName: "لابوان", enCityName: "Labuan" },
        { cityName: "بندر سيري بيغاوان", enCityName: "Bandar Seri Begawan" }
    ]
}, 
{
    country: {countryName: "إندونيسيا", enCountryName: "Indonesia"},
    "cities": [
        { cityName: "جاكرتا", enCityName: "Jakarta" },
        { cityName: "باندونج", enCityName: "Bandung" },
        { cityName: "سورابايا", enCityName: "Surabaya" },
        { cityName: "ميدان", enCityName: "Medan" },
        { cityName: "فاليمباغ", enCityName: "Palembang" },
        { cityName: "تانجيرانج", enCityName: "Tangerang" },
        { cityName: "سيمارانج", enCityName: "Semarang" },
        { cityName: "بانجارماسين", enCityName: "Banjarmasin" },
        { cityName: "ماكاسار", enCityName: "Makassar" },
        { cityName: "مانادو", enCityName: "Manado" },
        { cityName: "بادونج", enCityName: "Padang" },
        { cityName: "بيكانبارو", enCityName: "Pekanbaru" },
        { cityName: "ديبوك", enCityName: "Depok" },
        { cityName: "باليكبابان", enCityName: "Balikpapan" },
        { cityName: "سيماهي", enCityName: "Cimahi" },
        { cityName: "يوجياكارتا", enCityName: "Yogyakarta" },
        { cityName: "باندار لامبونج", enCityName: "Bandar Lampung" },
        { cityName: "سماريندا", enCityName: "Samarinda" },
        { cityName: "ماتارام", enCityName: "Mataram" },
        { cityName: "باتو", enCityName: "Batu" },
        { cityName: "كوتا بارو", enCityName: "Kota Baru" },
        { cityName: "بوجور", enCityName: "Bogor" },
        { cityName: "بينكولو", enCityName: "Bengkulu" },
        { cityName: "موجوكرتو", enCityName: "Mojokerto" }
    ]
}, 
{
    country: {countryName: "جزر القمر", enCountryName: "Comoros"},
    cities: [
        { cityName: "موروني", enCityName: "Moroni" },
        { cityName: "فومبوني", enCityName: "Fomboni" },
        { cityName: "ديموني", enCityName: "Dembeni" },
        { cityName: "بوياني", enCityName: "Boueni" },
        { cityName: "أنجوان", enCityName: "Anjouan" },
        { cityName: "موهيلي", enCityName: "Moheli" },
        { cityName: "موتسامودو", enCityName: "Moutsamoudou" },
    ]
},
{
    country: {
        countryName: "البوسنة والهرسك", enCountryName: "Bosnia and Herzegovina"
    },
    cities: [
        { cityName: "سراييفو", enCityName: "Sarajevo" },
        { cityName: "بانيالوكا", enCityName: "Banja Luka" },
        { cityName: "توزلا", enCityName: "Tuzla" },
        { cityName: "زينيتسا", enCityName: "Zenica" },
        { cityName: "موستار", enCityName: "Mostar" },
        { cityName: "برتشكو", enCityName: "Brčko" },
        { cityName: "بيهاتش", enCityName: "Bihać" },
        { cityName: "تريبيني", enCityName: "Trebinje" },
    ]
},
];

const arabicMonths = {
    1: "يناير",
    2: "فبراير",
    3: "مارس",
    4: "أبريل",
    5: "مايو",
    6: "يونيو",
    7: "يوليو",
    8: "أغسطس",
    9: "سبتمبر",
    10: "أكتوبر",
    11: "نوفمبر",
    12: "ديسمبر"
};

function getAdjustments(enCountryName, enCityName) { 
    const countryAdjustments = {
        "Egypt": { "Asr": 1, "Isha": -10 },
        "Saudi Arabia": { "Asr": 2,"Fajr": 5 },
        "Yemen": { "Fajr": 5 },
        "Oman": { "Fajr": 5 },
        "United Arab Emirates": { "Fajr": 5 },
        "Qatar": { "Fajr": 4 },
        "Bahrain": { "Fajr": 5 },
        "Kuwait": { "Fajr": 5 },
        "Iraq": { "Fajr": 5, "Isha": -8 },
        "Turkey": { "Fajr": 7, "Isha": -3 },
        "Syria": { "Fajr": -55, "Sunrise": -59, "Dhuhr": -59, "Asr": -58, "Maghrib": -60, "Isha": -60 },
        "Lebanon": { "Fajr": 8, "Isha": -10 },
        "Jordan": { "Fajr": -54, "Sunrise": -60, "Dhuhr": -59, "Asr": -59, "Maghrib": -60, "Isha": -60 },
        "Palastine": { "Fajr": 8, "Isha": -11 },
        "Libya": { "Isha": -10 },
        "Tunisia": { "Fajr": 8, "Asr": 2, "Isha": -4 },
        "Algeria": { "Fajr": 7, "Asr": 2, "Isha": -7 },
        "Morocco": { "Fajr": -53, "Sunrise": -60, "Dhuhr": -60, "Asr": -58, "Maghrib": -60, "Isha": -69 },
        "Mauritania": { "Fajr": 7, "Isha": -19 },
        "Mali": { "Fajr": 7, "Isha": -21 },
        "Senegal": { "Fajr": 6, "Isha": -20 },
        "Gambia": { "Fajr": 7, "Isha": -21 },
        "Guinea": { "Fajr": 7, "Isha": -21 },
        "Sierra Leone": { "Fajr": 7, "Isha": -22 },
        "Ivory Coast": { "Fajr": 7, "Isha": -22 },
        "Cameroon": { "Fajr": 7, "Isha": -22 },
        "Nigeria": { "Asr": -2, "Isha": -21 },
        "Niger": { "Fajr": 6, "Isha": -20 },
        "Chad": { "Fajr": 7, "Isha": -21 },
        "Sudan": { "Isha": -18 },
        "Republic of South Sudan": { "Isha": -20 },
        "Djibouti": { "Fajr": 7, "Isha": -21 },
        "Somalia": { "Fajr": 7, "Asr": 2, "Isha": -23 },
        "Iran": { "Fajr": 8, "Isha": -8 },
        "Afghanistan": { "Fajr": 7, "Asr": 2, "Isha": -4 },
        "Pakistan": { "Fajr": 8, "Asr": 45, "Isha": -6 },
        "Tajikistan": { "Fajr": 9, "Asr": 2, "Isha": -5 },
        "Kyrgyzstan": { "Fajr": 8, "Asr": 2, "Isha": 2 },
        "Kazakhstan": { "Fajr": 8, "Asr": 3, "Isha": 2 },
        "Uzbekistan": { "Fajr": 8, "Asr": 2, "Isha": -3 },
        "Turkmenistan": { "Fajr": 7, "Asr": 1, "Isha": -7 },
        "Azerbaijan": { "Fajr": 6, "Asr": 1, "Isha": -2 },
        "Bangladesh": { "Fajr": 7, "Asr": 1, "Isha": -12 },
        "Malaysia": { "Fajr": 6, "Asr": 1, "Isha": -18 },
        "Indonesia": { "Fajr": 7, "Asr": 1, "Isha": -17 },
        "Comoros": { "Fajr": 7, "Asr": 1, "Isha": -20 },
        "Bosnia and Herzegovina": { "Fajr": 8, "Asr": 2, "Isha": 3 },
    };

    const citySpecificAdjustments = {
        "Egypt": {
            "Cairo": { "Fajr": 1, "Sunrise": 0, "Isha": -1 },
            "Fayoum": { "Fajr": 1, "Sunrise": 1, "Dhuhr": 1, "Isha": -1 },
            "Beni Suef": { "Fajr": -1, "Sunrise": -1, "Dhuhr": -1, "Asr": -2, "Maghrib": -2, "Isha": -3 },
            "Minya": { "Fajr": -2, "Sunrise": -3, "Dhuhr": -2, "Asr": -2, "Maghrib": -2, "Isha": -4 },
            "Assiut": {"Fajr": 1, "Dhuhr": -1, "Asr": -1, "Maghrib": -1, "Isha": -3},
            "Sohag": { "Fajr": 1, "Maghrib": -1, "Isha": -4 },
            "Qena": { "Sunrise": -1, "Asr": -1, "Isha": -4 },
            "Luxor": { "Dhuhr": 1, "Asr": -1, "Isha": -4 },
            "Aswan": { "Fajr": 1, "Dhuhr": 1, "Isha": -5 },
            "New Valley": {"Fajr": -1, "Sunrise": -2, "Dhuhr": -2, "Asr": -2, "Maghrib": -2, "Isha": -6},
            "Matrouh": { "Fajr": 1, "Asr": -1},
            "Alexandria": { "Fajr": 1, "Maghrib": -1 },
            "Beheira": { "Fajr": 2, "Sunrise": 2, "Dhuhr": 1, "Maghrib": -1 },            
            "Kafr El-Sheikh": { "Fajr": 4, "Sunrise": 4, "Dhuhr": 4, "Asr": 3, "Maghrib": 2, "Isha": 3 },
            "Dakahlia": { "Sunrise": -1, "Isha": 1 },
            "Sharqia": { "Fajr": 1, "Sunrise": 1, "Dhuhr": 1, "Isha": 1 },
            "Suez": { "Fajr": 1, "Isha": -1 },
            "Shamal Sina": { "Fajr": 1, "Sunrise": 1, "Dhuhr": -1, "Asr": -3, "Maghrib": -3, "Isha": -2 },
            "South Sinai": { "Sunrise": -1, "Maghrib": -1, "Isha": -2 },
        },
        "Saudi Arabia": {    
            "Al-Ahsa": { "Fajr": 6, "Sunrise": 8, "Dhuhr": 4, "Asr": -1, "Maghrib": -1, "Isha": -1 },
            "Hail": { "Fajr": -5, "Sunrise": -5, "Dhuhr": -3, "Asr": -4, "Maghrib": -2, "Isha": -2 },
            "Najran": { "Fajr": 4, "Sunrise": 4, "Dhuhr": 6, "Asr": 5, "Maghrib": 7, "Isha": 7 },
            "Qasim": { "Fajr": -3, "Sunrise": -3, "Dhuhr": -2, "Asr": -3, "Maghrib": -2, "Isha": -2 },
            "Riyadh Al Khabra": { "Fajr": -5, "Sunrise": -6, "Dhuhr": -4, "Asr": -6, "Maghrib": -5, "Isha": -5 },
            "Tumair": { "Fajr": -4, "Sunrise": -2, "Dhuhr": -3, "Asr": -5, "Maghrib": -4, "Isha": -4 },
        }
    };

    const adjustments = {};

    if (enCountryName in countryAdjustments) {
        Object.assign(adjustments, countryAdjustments[enCountryName]);
    }

    if (enCityName && enCountryName in citySpecificAdjustments && enCityName in citySpecificAdjustments[enCountryName]) {
        Object.entries(citySpecificAdjustments[enCountryName][enCityName]).forEach(([prayer, adjustment]) => {
            adjustments[prayer] = (adjustments[prayer] || 0) + adjustment;
        });
    }

    return adjustments;
}

function adjustPrayerTimes(prayerTimes, enCityName, enCountryName) {
    const adjustments = getAdjustments(enCountryName, enCityName);

    const adjustedPrayerTimes = { ...prayerTimes };

    for (let prayer in adjustments) {
        if (adjustments.hasOwnProperty(prayer)) {
            if (adjustedPrayerTimes.hasOwnProperty(prayer)) {
                adjustedPrayerTimes[prayer] = addMinutes(prayerTimes[prayer], adjustments[prayer]);
            }
        }
    }

    return adjustedPrayerTimes;
}

function handlePrayerTimesData(data, enCityName, enCountryName, selectedCity) {
    try {
        const timings = data?.data?.timings;
        const date = data?.data?.date;

        if (!timings || !date) {
            throw new Error("Undefined or unexpected data structure");
        }

        const adjustedTimings = adjustPrayerTimes(timings, enCityName, enCountryName);     
        renderPrayerTimes(adjustedTimings);
        updateUI(date, selectedCity);
    } catch (error) {
        handlePrayerTimesError();
    }
}

function renderPrayerTimes(prayerTimes) {
    for (let prayer in prayerTimes) {
        if (prayerTimes.hasOwnProperty(prayer)) {
            const element = document.getElementById(prayer);
            if (element) {
                element.textContent = convertTimeFormat(prayerTimes[prayer]);
            }
        }
    }
}

function handlePrayerTimesError(error) {
    let errorMessage = '.مواقيت الصلاة غير متوفرة لهذه المنطقة';

    if (error instanceof TypeError && error.message === 'Failed to fetch') {
        errorMessage = 'يرجى التحقق من اتصالك بالإنترنت';
    } else if (error instanceof Error && error.message === 'Timeout') {
        errorMessage = 'انتهى الوقت المحدد للإستجابة، يُرجى إعادة المحاولة';
    }

    Swal.fire({
        icon: 'error',
        title: 'عفواً',
        text: errorMessage,
        customClass: {
            popup: 'error-message',
        }
    });
}

function updateUI(date, selectedCity) {
    const today = document.getElementById("day");
    today.textContent = `${date.hijri.weekday.ar}`;

    const gregorianDate = document.getElementById("gregorian");
    const numericMonth = parseInt(date.gregorian.month.number, 10);
    const arabicMonth = arabicMonths[numericMonth];
    const gregorianParts = date.gregorian.date.split('-');
    gregorianDate.textContent = `${gregorianParts[0]} ${arabicMonth} ${gregorianParts[2]}`;

    const hijriDate = document.getElementById("hijri");
    let hijriDay = date.hijri.day;
    let hijriMonth = date.hijri.month.ar;
    let hijriYear = date.hijri.year;
    if (hijriDay === 1) {
        hijriDate.style.display = "none";
    }
    hijriDay--;
    hijriDate.textContent = `${hijriDay} ${hijriMonth} ${hijriYear}`;

    if (selectedCity) {
        lastExistCity = selectedCity.cityName;
        cityNameText.textContent = lastExistCity;
    }
}

function addMinutes(timeString, minutesToAdd) {
    const [hours, minutes] = timeString.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + minutesToAdd;
    const newHours = (Math.floor(totalMinutes / 60) % 24 + 24) % 24;
    const newMinutes = totalMinutes % 60;
    return `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`;
}

function fillPrayerTimes(id, time) {
    const element = document.getElementById(id);
    if (element && id !== "Sunset" && id !== "Imsak" && id !== "Midnight" && id !== "Firstthird" && id !== "Lastthird") {
        element.textContent = time;
    } else {
    }
}

function convertTimeFormat(timeString) {
    const [hours, minutes] = timeString.split(':').map(Number);
    const meridiem = hours >= 12 ? 'م' : 'ص'; 
    const twelveHourFormat = hours % 12 || 12;
    return `${twelveHourFormat}:${String(minutes).padStart(2, '0')} ${meridiem}`;
}

function getPrayerTimes(enCityName, enCountryName, selectedCity) {
    spinner.style.display = "block";

    fetchPrayerTimesFromAPI(enCityName, enCountryName)
        .then(data => {        
            handlePrayerTimesData(data, enCityName, enCountryName, selectedCity);
            spinner.style.display = "none";
        })
        .catch(error => {
            handlePrayerTimesError(error);
            spinner.style.display = "none"; 
        });
}

function fetchPrayerTimesFromAPI(enCityName, enCountryName) {
    const url = `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(enCityName)}&country=${encodeURIComponent(enCountryName)}&method=8`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}

function handleCitySelection(selectedCity, enCountryName) {
    if (selectedCity) {
        fetchPrayerTimesFromAPI(selectedCity.enCityName, enCountryName);
    }
}

function fillCities(cityArr, enCountryName) {
    const cityInput = document.getElementById("cityInput");

    citiesList.innerHTML = ""; 

    cityArr.forEach((city) => {
        const cityOption = document.createElement("option");
        cityOption.value = city.cityName;
        cityOption.textContent = city.cityName;
        citiesList.appendChild(cityOption);
    });

    let timeoutId;

    cityInput.addEventListener("mousedown", (event) => {
        event.preventDefault();
        cityInput.value = "";
        const options = citiesList.querySelectorAll('option');
        options.forEach(option => {
            option.style.display = 'block';
        });
        cityInput.focus();
    });

    cityInput.addEventListener("input", () => {
        clearTimeout(timeoutId);
        const enteredCity = cityInput.value.trim();
        const selectedCity = cityArr.find((city) => city.cityName === enteredCity);
    
        if (selectedCity) {
            if (enCountryName) {
                getPrayerTimes(selectedCity.enCityName, enCountryName, selectedCity);
            }
        }        
    });
}

function fillCountries() {
    const countriesList = document.getElementById("countryDataList");    
    const countryInput = document.getElementById("countryInput");

    countries.forEach((countryObject) => {
        const countryOption = document.createElement("option");
        let countryName = countryObject.country.countryName;
        countryOption.value = countryName;
        countryOption.textContent = countryName;
        countriesList.appendChild(countryOption);
    });

    let timeoutId;

    countryInput.addEventListener("mousedown", (event) => {
        event.preventDefault();
        countryInput.value = "";
        cityInput.value = "";
        const options = countriesList.querySelectorAll('option');
        options.forEach(option => {
            option.style.display = 'block';
        });
        countryInput.focus();
    });


    countryInput.addEventListener("input", () => {
        clearTimeout(timeoutId);
    
        timeoutId = setTimeout(() => {
            const enteredCountry = countryInput.value.trim();
            selectedCountry = countries.find(
                (countryObject) => countryObject.country.countryName === enteredCountry
            );
    
            if (selectedCountry) {
                citiesList.innerHTML = "";
                fillCities(selectedCountry.cities, selectedCountry.country.enCountryName); 
            } else {  
                citiesList.innerHTML = "";          
                cityInput.value = "";                
            }
        }, 300);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    fillCountries();
});

var typed = new Typed('.footer', {
strings: ['Generated with ❤️ by Islam Khairy'],
typeSpeed: 100,
backSpeed: 100,
backDelay: 2000,
loop: true
});