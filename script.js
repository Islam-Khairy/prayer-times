
let selectedCountry;
let selectedCity;
let cityText = document.getElementById("cityName");
let citiesList = document.getElementById("cityDataList");    
let lastExistCity = "";

let countries = [
{
    country: {countryName: "مصر", enCountryName: "Egypt"},
    cities: [
        { cityName: "القاهرة", enCityName: "Cairo" },
        { cityName: "الجيزة", enCityName: "Giza" },
        { cityName: "الإسكندرية", enCityName: "Alexandria" },
        { cityName: "الدقهلية", enCityName: "Dakahlia" },
        { cityName: "البحر الأحمر", enCityName: "Red Sea" },
        { cityName: "البحيرة", enCityName: "Beheira" },
        { cityName: "الفيوم", enCityName: "Fayoum" },
        { cityName: "الغربية", enCityName: "Gharbia" },
        { cityName: "الإسماعيلية", enCityName: "Ismailia" },
        { cityName: "المنيا", enCityName: "Minya" },
        { cityName: "المنوفية", enCityName: "Monufia" },
        { cityName: "القليوبية", enCityName: "Qalyubia" },
        { cityName: "الأقصر", enCityName: "Luxor" },
        { cityName: "الوادي الجديد", enCityName: "New Valley" },
        { cityName: "السويس", enCityName: "Suez" },
        { cityName: "الشرقية", enCityName: "Sharqia" },
        { cityName: "أسوان", enCityName: "Aswan" },
        { cityName: "أسيوط", enCityName: "Assiut" },
        { cityName: "بني سويف", enCityName: "Beni Suef" },
        { cityName: "بورسعيد", enCityName: "Port Said" },
        { cityName: "دمياط", enCityName: "Damietta" },
        { cityName: "جنوب سيناء", enCityName: "South Sinai" },
        { cityName: "كفر الشيخ", enCityName: "Kafr El-Sheikh" },
        { cityName: "مطروح", enCityName: "Matrouh" },
        { cityName: "قنا", enCityName: "Qena" },
        { cityName: "شمال سيناء", enCityName: "North Sinai" },
        { cityName: "سوهاج", enCityName: "Sohag" }
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
        { cityName: "القصيم", enCityName: "Qassim" },
        { cityName: "الباحة", enCityName: "Al Baha" },
        { cityName: "عرعر", enCityName: "Arar" },
        { cityName: "ينبع", enCityName: "Yanbu" },
        { cityName: "الجبيل", enCityName: "Jubail" },
        { cityName: "الخبر", enCityName: "Khobar" },
        { cityName: "حفر الباطن", enCityName: "Hafar Al-Batin" },
        { cityName: "ضباء", enCityName: "Duba" },
        { cityName: "رياض الخبراء", enCityName: "Riyadh Al Khabra" },
        { cityName: "ظهران الجنوب", enCityName: "Dhahran Al Janub" },
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
        { cityName: "سيئون", enCityName: "Sayun" },
        { cityName: "تريم", enCityName: "Tarim" },
        { cityName: "البيضاء", enCityName: "Al Bayda" },
        { cityName: "حجة", enCityName: "Hajjah" },
        { cityName: "الجوف", enCityName: "Al Jawf" },
        { cityName: "أبين", enCityName: "Abyan" },
        { cityName: "ذمار", enCityName: "Dhamar" },
        { cityName: "عتق", enCityName: "Ataq" },
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
        { cityName: "إبراء", enCityName: "Ibri" },
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
        { cityName: "الشهانية", enCityName: "Al Shahaniya" },
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
    ]
},
{
    country: {countryName: "العراق", enCountryName: "Iraq"},
    cities: [
        { cityName: "بغداد", enCityName: "Baghdad" },
        { cityName: "البصرة", enCityName: "Basra" },
        { cityName: "الموصل", enCityName: "Mosul" },
        { cityName: "كركوك", enCityName: "Kirkuk" },
        { cityName: "النجف", enCityName: "Najaf" },
        { cityName: "كربلاء", enCityName: "Karbala" },
        { cityName: "الديوانية", enCityName: "Diwaniyah" },
        { cityName: "السماوة", enCityName: "Samawah" },
        { cityName: "الديوانية", enCityName: "Diwaniyah" },
        { cityName: "ذي قار", enCityName: "Dhi Qar" },
        { cityName: "بابل", enCityName: "Babil" },
        { cityName: "واسط", enCityName: "Wasit" },
        { cityName: "ميسان", enCityName: "Maysan" },
        { cityName: "الأنبار", enCityName: "Anbar" },
        { cityName: "صلاح الدين", enCityName: "Salah ad Din" },
        { cityName: "ديالى", enCityName: "Diyala" },
        { cityName: "كركوك", enCityName: "Kirkuk" },
        { cityName: "نينوى", enCityName: "Nineveh" },
        { cityName: "القادسية", enCityName: "Al-Qadisiyyah" },
        { cityName: "السليمانية", enCityName: "Sulaymaniyah" },
        { cityName: "أربيل", enCityName: "Erbil" },
        { cityName: "دهوك", enCityName: "Duhok" },
        { cityName: "حلبجة", enCityName: "Halabja" },
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
        { cityName: "مادبا", enCityName: "Madaba" },
        { cityName: "المفرق", enCityName: "Mafraq" },
        { cityName: "جرش", enCityName: "Jerash" },
        { cityName: "عجلون", enCityName: "Ajloun" },
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
        { cityName: "بتاح تكفا", enCityName: "Petah Tikva" },
        { cityName: "رمات غان", enCityName: "Ramat Gan" },
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
        { cityName: "أدانا", enCityName: "Adana" },
        { cityName: "كونيا", enCityName: "Konya" },
        { cityName: "آنطاكيا", enCityName: "Antakya" },
        { cityName: "مرسين", enCityName: "Mersin" },
        { cityName: "قيصري", enCityName: "Kayseri" },
        { cityName: "سامسون", enCityName: "Samsun" },
        { cityName: "ديار بكر", enCityName: "Diyarbakir" },
        { cityName: "إسكيشهير", enCityName: "Eskisehir" },
        { cityName: "غازي عنتاب", enCityName: "Gaziantep" },
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
    ]
},
{
    country: {countryName: "جنوب السودان", enCountryName: "South Sudan"},
    cities: [
        { cityName: "جوبا", enCityName: "Juba" },
        { cityName: "بور", enCityName: "Bor" },
        { cityName: "رمبيك", enCityName: "Rumbek" },
        { cityName: "ناصر", enCityName: "Nasir" },
        { cityName: "كايا", enCityName: "Kaya" },
        { cityName: "مايانج", enCityName: "Mayang" },
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
    ]
},
{
    country: {countryName: "الجزائر", enCountryName: "Algirea"},
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
        { cityName: "الكاف", enCityName: "Kef" },
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
    ]
},
{
    country: {countryName: "المغرب", enCountryName: "morocco"},
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
    ]
},
{
    country: {countryName: "جزر القمر", enCountryName: "Comoros"},
    cities: [
        { cityName: "موروني", enCityName: "Moroni" },
        { cityName: "فومبوني", enCityName: "Fomboni" },
        { cityName: "ديموني", enCityName: "Dembeni" },
        { cityName: "بوياني", enCityName: "Boueni" },
    ]
},
{
    country: {countryName: "غينيا", enCountryName: "Guinea"},
    "cities": [
        { "cityName": "كوناكري", "enCityName": "Conakry" },
        { "cityName": "نزيريكوري", "enCityName": "Nzérékoré" },
        { "cityName": "كانكان", "enCityName": "Kankan" },
        { "cityName": "لابيه", "enCityName": "Labe" },
        { "cityName": "مامو", "enCityName": "Mamou" },
        { "cityName": "بوكي", "enCityName": "Boke" },
        { "cityName": "فريا", "enCityName": "Fria" },
        { "cityName": "سيغيري", "enCityName": "Siguiri" },
        { "cityName": "ماسنتا", "enCityName": "Macenta" },
        { "cityName": "كنديا", "enCityName": "Kindia" },
        { "cityName": "لولا", "enCityName": "Lola" },
    ]
},
{
    country: {countryName: "إندونيسيا", enCountryName: "Indonesia"},
    "cities": [
        { "cityName": "جاكرتا", "enCityName": "Jakarta" },
        { "cityName": "باندونج", "enCityName": "Bandung" },
        { "cityName": "سورابايا", "enCityName": "Surabaya" },
        { "cityName": "ميدان", "enCityName": "Medan" },
        { "cityName": "فاليمباغ", "enCityName": "Palembang" },
        { "cityName": "تانجيرانج", "enCityName": "Tangerang" },
        { "cityName": "سيمارانج", "enCityName": "Semarang" },
        { "cityName": "بانجارماسين", "enCityName": "Banjarmasin" },
        { "cityName": "ماكاسار", "enCityName": "Makassar" },
        { "cityName": "مانادو", "enCityName": "Manado" },
        { "cityName": "بادونج", "enCityName": "Padang" },
        { "cityName": "بيكانبارو", "enCityName": "Pekanbaru" },
        { "cityName": "ديبوك", "enCityName": "Depok" },
        { "cityName": "باليكبابان", "enCityName": "Balikpapan" },
        { "cityName": "سيماهي", "enCityName": "Cimahi" },
        { "cityName": "يوجياكارتا", "enCityName": "Yogyakarta" },
        { "cityName": "باندار لامبونج", "enCityName": "Bandar Lampung" },
        { "cityName": "سماريندا", "enCityName": "Samarinda" },
        { "cityName": "ماتارام", "enCityName": "Mataram" },
        { "cityName": "باتو", "enCityName": "Batu" },
        { "cityName": "كوتا بارو", "enCityName": "Kota Baru" },
        { "cityName": "بوجور", "enCityName": "Bogor" },
        { "cityName": "بينكولو", "enCityName": "Bengkulu" },
        { "cityName": "موجوكرتو", "enCityName": "Mojokerto" }
    ]
},
{
    country: {countryName: "إيران", enCountryName: "Iran"},
    "cities": [
        { "cityName": "طهران", "enCityName": "Tehran" },
        { "cityName": "مشهد", "enCityName": "Mashhad" },
        { "cityName": "اصفهان", "enCityName": "Isfahan" },
        { "cityName": "كرج", "enCityName": "Karaj" },
        { "cityName": "تبريز", "enCityName": "Tabriz" },
        { "cityName": "شيراز", "enCityName": "Shiraz" },
        { "cityName": "اهواز", "enCityName": "Ahvaz" },
        { "cityName": "قم", "enCityName": "Qom" },
        { "cityName": "كرمانشاه", "enCityName": "Kermanshah" },
        { "cityName": "اهر", "enCityName": "Ahar" },
        { "cityName": "اراك", "enCityName": "Arak" },
        { "cityName": "يزد", "enCityName": "Yazd" },
        { "cityName": "قزوين", "enCityName": "Qazvin" },
        { "cityName": "ساري", "enCityName": "Sari" },
        { "cityName": "رشت", "enCityName": "Rasht" },
        { "cityName": "كرمان", "enCityName": "Kerman" },
        { "cityName": "همدان", "enCityName": "Hamadan" },
        { "cityName": "اروميه", "enCityName": "Urmia" },
        { "cityName": "زاهدان", "enCityName": "Zahedan" },
        { "cityName": "اردبيل", "enCityName": "Ardabil" },
        { "cityName": "بندرعباس", "enCityName": "Bandar Abbas" },
        { "cityName": "بندر انزلي", "enCityName": "Bandar Anzali" },
        { "cityName": "ايلام", "enCityName": "Ilam" },
        { "cityName": "بوشهر", "enCityName": "Bushehr" },
        { "cityName": "خرم‌آباد", "enCityName": "Khorramabad" },
    ]
},
{
    country: {countryName: "لبنان", enCountryName: "Lebanon"},
    "cities": [
        { "cityName": "بيروت", "enCityName": "Beirut" },
        { "cityName": "صيدا", "enCityName": "Sidon" },
        { "cityName": "النبطية", "enCityName": "Nabatieh" },
        { "cityName": "جونية", "enCityName": "Jounieh" },
        { "cityName": "زحلة", "enCityName": "Zahle" },
        { "cityName": "بعلبك", "enCityName": "Baalbek" },
        { "cityName": "جبيل", "enCityName": "Byblos" },
        { "cityName": "السبتية", "enCityName": "Saida" },
        { "cityName": "المتن", "enCityName": "Matn" },
        { "cityName": "بعبدا", "enCityName": "Baabda" },
        { "cityName": "عاليه", "enCityName": "Aley" },
        { "cityName": "صور", "enCityName": "Tyre" },
    ]
},
{
    country: {countryName: "ماليزيا", enCountryName: "Malaysia"},
    "cities": [
        { "cityName": "كوالالمبور", "enCityName": "Kuala Lumpur" },
        { "cityName": "جورج تاون", "enCityName": "George Town" },
        { "cityName": "إيبوه", "enCityName": "Ipoh" },
        { "cityName": "شاه علم", "enCityName": "Shah Alam" },
        { "cityName": "بيتالينغ جايا", "enCityName": "Petaling Jaya" },
        { "cityName": "جوهور بهارو", "enCityName": "Johor Bahru" },
        { "cityName": "كوتا كينابالو", "enCityName": "Kota Kinabalu" },
        { "cityName": "كوتا بهارو", "enCityName": "Kota Bharu" },
        { "cityName": "كوالا تريڠانو", "enCityName": "Kuala Terengganu" },
        { "cityName": "كوتا ساماراهان", "enCityName": "Kota Samarahan" },
        { "cityName": "سيرمبانغ", "enCityName": "Seremban" },
        { "cityName": "تايبينغ", "enCityName": "Taiping" },
        { "cityName": "كوانتان", "enCityName": "Kuantan" },
        { "cityName": "سيبو", "enCityName": "Sibu" },
        { "cityName": "ميري", "enCityName": "Miri" },
        { "cityName": "ألور ستار", "enCityName": "Alor Setar" },
        { "cityName": "راوانج", "enCityName": "Rawang" },
        { "cityName": "بوتراجايا", "enCityName": "Putrajaya" },
        { "cityName": "لابوان", "enCityName": "Labuan" },
        { "cityName": "بندر سيري بيغاوان", "enCityName": "Bandar Seri Begawan" }
    ]
},
{
    country: {countryName: "Mali", enCountryName: "Mali"},
    "cities": [
        { "cityName": "باماكو", "enCityName": "Bamako" },
        { "cityName": "سيكاسو", "enCityName": "Sikasso" },
        { "cityName": "موبتي", "enCityName": "Mopti" },
        { "cityName": "كوليكورو", "enCityName": "Koulikoro" },
        { "cityName": "سيغو", "enCityName": "Segou" },
        { "cityName": "كايي", "enCityName": "Kayes" },
        { "cityName": "سان", "enCityName": "San" },
        { "cityName": "سيغون", "enCityName": "Ségou" },
        { "cityName": "مالي", "enCityName": "Mali" },
        { "cityName": "جاو", "enCityName": "Gao" },
        { "cityName": "تيمبكتو", "enCityName": "Timbuktu" },
        { "cityName": "تيساليت", "enCityName": "Tessalit" },
        { "cityName": "دير", "enCityName": "Diré" },
        { "cityName": "أنسوكو", "enCityName": "Ansongo" },
        { "cityName": "تامنراست", "enCityName": "Tamanrasset" },
    ]
},
{
    country: {countryName: "موريتانيا", enCountryName: "Mauritania"},
    "cities": [
        { "cityName": "نواكشوط", "enCityName": "Nouakchott" },
        { "cityName": "نواذيبو", "enCityName": "Nouadhibou" },
        { "cityName": "روصو", "enCityName": "Rosso" },
        { "cityName": "زويرات", "enCityName": "Zouérat" },
        { "cityName": "كيهيدي", "enCityName": "Kaédi" },
        { "cityName": "أطار", "enCityName": "Atar" },
        { "cityName": "سيلبابي", "enCityName": "Selibaby" },
        { "cityName": "ألاك", "enCityName": "Aleg" },
        { "cityName": "النعمة", "enCityName": "Néma" },
        { "cityName": "كيفه", "enCityName": "Kiffa" },
        { "cityName": "لعيون", "enCityName": "Laayoune" },
    ]
},
{
    country: {countryName: "النيجر", enCountryName: "Niger"},
    "cities": [
        { "cityName": "نيامي", "enCityName": "Niamey" },
        { "cityName": "زندر", "enCityName": "Zinder" },
        { "cityName": "مرادي", "enCityName": "Maradi" },
        { "cityName": "أغاديس", "enCityName": "Agadez" },
        { "cityName": "تاهوا", "enCityName": "Tahoua" },
        { "cityName": "دوسو", "enCityName": "Dosso" },
        { "cityName": "ماداوا", "enCityName": "Madaoua" },
        { "cityName": "تيرا", "enCityName": "Téra" },
        { "cityName": "بيلما", "enCityName": "Bilma" },
        { "cityName": "كولو", "enCityName": "Kollo" },
        { "cityName": "غايا", "enCityName": "Gaya" },
        { "cityName": "آيرو", "enCityName": "Ayorou" },
        { "cityName": "نجيجمي", "enCityName": "N'guigmi" },
        { "cityName": "أرليت", "enCityName": "Arlit" },
        { "cityName": "ماغاريا", "enCityName": "Magaria" },
        { "cityName": "تيلابيري", "enCityName": "Tillabéri" },
    ]
},
{
    country: {countryName: "نيجريا", enCountryName: "Nigeria"},
    "cities": [
        { "cityName": "أبوجا", "enCityName": "Abuja" },
        { "cityName": "لاجوس", "enCityName": "Lagos" },
        { "cityName": "كانو", "enCityName": "Kano" },
        { "cityName": "إيبادان", "enCityName": "Ibadan" },
        { "cityName": "كالابار", "enCityName": "Calabar" },
        { "cityName": "بورت هاركورت", "enCityName": "Port Harcourt" },
        { "cityName": "أويو", "enCityName": "Oyo" },
        { "cityName": "بينين سيتي", "enCityName": "Benin City" },
        { "cityName": "كادونا", "enCityName": "Kaduna" },
        { "cityName": "إيكيتي", "enCityName": "Ekiti" },
        { "cityName": "جوس", "enCityName": "Jos" },
        { "cityName": "كوارا", "enCityName": "Kwara" },
        { "cityName": "باوتشي", "enCityName": "Bauchi" },
        { "cityName": "مايدوجوري", "enCityName": "Maiduguri" },
        { "cityName": "كاتسينا", "enCityName": "Katsina" },
        { "cityName": "أكوا إيبوم", "enCityName": "Akwa Ibom" },
        { "cityName": "أونيتشا", "enCityName": "Onitsha" },
        { "cityName": "واري", "enCityName": "Warri" },
        { "cityName": "مينا", "enCityName": "Minna" },
        { "cityName": "زاريا", "enCityName": "Zaria" },
        { "cityName": "آبا", "enCityName": "Aba" },
        { "cityName": "أوشوغبو", "enCityName": "Oshogbo" },
        { "cityName": "جومبي", "enCityName": "Gombe" },
        { "cityName": "فونتوا", "enCityName": "Funtua" },
        { "cityName": "بيرنين كيبي", "enCityName": "Birnin Kebbi" },
        { "cityName": "يناجوا", "enCityName": "Yenagoa" },
    ]
},
{
    country: {countryName: "باكستان", enCountryName: "Pakistan"},
    "cities": [
        { "cityName": "إسلام آباد", "enCityName": "Islamabad" },
        { "cityName": "كراتشي", "enCityName": "Karachi" },
        { "cityName": "لاهور", "enCityName": "Lahore" },
        { "cityName": "فيصل آباد", "enCityName": "Faisalabad" },
        { "cityName": "ملتان", "enCityName": "Multan" },
        { "cityName": "بهاولبور", "enCityName": "Bahawalpur" },
        { "cityName": "جوجرانوالا", "enCityName": "Gujranwala" },
        { "cityName": "غوجرات", "enCityName": "Gujrat" },
        { "cityName": "سکھر", "enCityName": "Sukkur" },
        { "cityName": "رحيم يار خان", "enCityName": "Rahim Yar Khan" },
        { "cityName": "سرگودها", "enCityName": "Sargodha" },
        { "cityName": "روالبندي", "enCityName": "Rawalpindi" },
        { "cityName": "جهلم", "enCityName": "Jhelum" },
        { "cityName": "بهالوال", "enCityName": "Bhalwal" },
        { "cityName": "سيالكوت", "enCityName": "Sialkot" },
        { "cityName": "رينالا", "enCityName": "Renala Khurd" },
        { "cityName": "شيخوبورا", "enCityName": "Sheikhupura" },
        { "cityName": "فيهاري", "enCityName": "Vehari" },
        { "cityName": "بهاولناغر", "enCityName": "Bahawalnagar" },
        { "cityName": "جوهر أباد", "enCityName": "Jauharabad" },
        { "cityName": "أتوك", "enCityName": "Attock" },
        { "cityName": "مردان", "enCityName": "Mardan" },
        { "cityName": "بانو", "enCityName": "Bannu" },
        { "cityName": "ديرا إسماعيل خان", "enCityName": "Dera Ismail Khan" }
    ]
},
{
    country: {countryName: "السنغال", enCountryName: "Senegal"},
    "cities": [
        { "cityName": "داكار", "enCityName": "Dakar" },
        { "cityName": "تيسي", "enCityName": "Thiès" },
        { "cityName": "كاولاك", "enCityName": "Kaolack" },
        { "cityName": "زيغينشور", "enCityName": "Ziguinchor" },
        { "cityName": "سانت لويس", "enCityName": "Saint-Louis" },
        { "cityName": "روفيسك", "enCityName": "Rufisque" },
        { "cityName": "فاتيك", "enCityName": "Fatick" },
        { "cityName": "مبور", "enCityName": "Mbour" },
        { "cityName": "لوغا", "enCityName": "Louga" },
        { "cityName": "تامباكوندا", "enCityName": "Tambacounda" },
        { "cityName": "ديوربيل", "enCityName": "Diourbel" },
        { "cityName": "كيبيمير", "enCityName": "Kébémer" },
        { "cityName": "ماتام", "enCityName": "Matam" },
        { "cityName": "كيدوغو", "enCityName": "Kédougou" },
        { "cityName": "سيدهيو", "enCityName": "Sédhiou" },
        { "cityName": "كفرين", "enCityName": "Kaffrine" },
        { "cityName": "واكام", "enCityName": "Ouakam" },
        { "cityName": "كولدا", "enCityName": "Kolda" },
    ]
},
{
    country: {countryName: "سيراليون", enCountryName: "Sierra Leone"},
    "cities": [
        { "cityName": "فريتاون", "enCityName": "Freetown" },
        { "cityName": "بو", "enCityName": "Bo" },
        { "cityName": "كنيما", "enCityName": "Kenema" },
        { "cityName": "ماكيني", "enCityName": "Makeni" },        
        { "cityName": "كونو", "enCityName": "Kono" },
    ]
},
{
    country: {countryName: "الصومال", enCountryName: "Somalia"},
    "cities": [
        { "cityName": "مقديشو", "enCityName": "Mogadishu" },
        { "cityName": "هرجيسا", "enCityName": "Hargeisa" },
        { "cityName": "بوساسو", "enCityName": "Bosaso" },
        { "cityName": "كيسمايو", "enCityName": "Kismayo" },
        { "cityName": "بورما", "enCityName": "Borama" },
        { "cityName": "بربرة", "enCityName": "Berbera" },
        { "cityName": "جالكايو", "enCityName": "Galkayo" },
        { "cityName": "قرضو", "enCityName": "Qardho" },
        { "cityName": "بوراو", "enCityName": "Burao" },
        { "cityName": "جروي", "enCityName": "Garoowe" },
        { "cityName": "ماركا", "enCityName": "Marka" },
        { "cityName": "ميركا", "enCityName": "Merca" },
        { "cityName": "كريني", "enCityName": "Keren" },
    ]
}
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

function fillPrayerTimes(id, time) {
    document.getElementById(id).textContent = time;
}

function getPrayerTimes(enCityName, enCountryName, selectedCity) {
    const url = `http://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(enCityName)}&country=${encodeURIComponent(enCountryName)}&method=8`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data && data.data.timings) {
                let prayerTimes = data.data.timings;
                let date = data.data.date;

                fillPrayerTimes("Fajr", convertTo12HourFormat(prayerTimes.Fajr));
                fillPrayerTimes("Shuruq", convertTo12HourFormat(prayerTimes.Sunrise));
                fillPrayerTimes("Dhuhr", convertTo12HourFormat(prayerTimes.Dhuhr));
                fillPrayerTimes("Asr", convertTo12HourFormat(prayerTimes.Asr));
                fillPrayerTimes("Maghrib", convertTo12HourFormat(prayerTimes.Maghrib));
                fillPrayerTimes("Isha", convertTo12HourFormat(prayerTimes.Isha));

                const day = document.getElementById("day");
                day.textContent = `${date.hijri.weekday.ar}`;

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

                lastExistCity = selectedCity.cityName;
                cityText.textContent = lastExistCity;
            } else {
                Swal.fire({
                    title: 'عذراً',
                    text: '.مواقيت الصلاة غير متوفرة لهذه المنطقة',
                });
            }
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'خطأ',
                text: 'يرجى التحقق من اتصالك بالإنترنت',
                customClass: {
                    popup: 'error-message'
                }
            });

            if (lastExistCity) {
                cityText.textContent = lastExistCity;
            }
        });
}

function convertTo12HourFormat(hours24) {
    const [hours, minutes] = hours24.split(':').map(Number);
    const period = hours >= 12 ? 'م' : 'ص'; 
    const paddedMins = String(minutes).padStart(2, '0');
    const hours12 = hours % 12 || 12;
    return `${hours12}:${paddedMins} ${period}`;
}


document.addEventListener("DOMContentLoaded", () => {
    fillCountries();
});

var typed = new Typed('.footer', {
strings: ['Generated with ❤️ by Islam Khairy'],
typeSpeed: 100,
backSpeed: 100,
backDelay: 2000,
});