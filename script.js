let selectedCountry;
let selectedCity;
let cityText = document.getElementById("cityName");
let lastExistCity = ""

let countries = [    
{
        countryName: "مصر",
        cities: [
            { cityName: "القاهرة", engName: "Cairo" },
            { cityName: "الجيزة", engName: "Giza" },
            { cityName: "الإسكندرية", engName: "Alexandria" },
            { cityName: "الدقهلية", engName: "Dakahlia" },
            { cityName: "البحر الأحمر", engName: "Red Sea" },
            { cityName: "البحيرة", engName: "Beheira" },
            { cityName: "الفيوم", engName: "Fayoum" },
            { cityName: "الغربية", engName: "Gharbia" },
            { cityName: "الإسماعيلية", engName: "Ismailia" },
            { cityName: "المنيا", engName: "Minya" },
            { cityName: "المنوفية", engName: "Monufia" },
            { cityName: "القليوبية", engName: "Qalyubia" },
            { cityName: "الأقصر", engName: "Luxor" },
            { cityName: "الوادي الجديد", engName: "New Valley" },
            { cityName: "السويس", engName: "Suez" },
            { cityName: "الشرقية", engName: "Sharqia" },
            { cityName: "أسوان", engName: "Aswan" },
            { cityName: "أسيوط", engName: "Assiut" },
            { cityName: "بني سويف", engName: "Beni Suef" },
            { cityName: "بورسعيد", engName: "Port Said" },
            { cityName: "دمياط", engName: "Damietta" },
            { cityName: "جنوب سيناء", engName: "South Sinai" },
            { cityName: "كفر الشيخ", engName: "Kafr El-Sheikh" },
            { cityName: "مطروح", engName: "Matrouh" },
            { cityName: "قنا", engName: "Qena" },
            { cityName: "شمال سيناء", engName: "North Sinai" },
            { cityName: "سوهاج", engName: "Sohag" }
        ]
    
},
{
    countryName: "السعودية",
    cities: [
        { cityName: "الرياض", engName: "Riyadh" },
        { cityName: "جدة", engName: "Jeddah" },
        { cityName: "مكة المكرمة", engName: "Mecca" },
        { cityName: "المدينة المنورة", engName: "Medina" },
        { cityName: "الدمام", engName: "Dammam" },
        { cityName: "بريدة", engName: "Buraydah" },
        { cityName: "تبوك", engName: "Tabuk" },
        { cityName: "الاحساء", engName: "Al-Ahsa" },
        { cityName: "الطائف", engName: "Taif" },
        { cityName: "خميس مشيط", engName: "Khamis Mushait" },
        { cityName: "حائل", engName: "Hail" },
        { cityName: "نجران", engName: "Najran" },
        { cityName: "جازان", engName: "Jazan" },
        { cityName: "القصيم", engName: "Qassim" },
        { cityName: "الباحة", engName: "Al Baha" },
        { cityName: "عرعر", engName: "Arar" },
        { cityName: "ينبع", engName: "Yanbu" },
        { cityName: "الجبيل", engName: "Jubail" },
        { cityName: "الخبر", engName: "Khobar" },
        { cityName: "حفر الباطن", engName: "Hafar Al-Batin" },
        { cityName: "ضباء", engName: "Duba" },
        { cityName: "رياض الخبراء", engName: "Riyadh Al Khabra" },
        { cityName: "ظهران الجنوب", engName: "Dhahran Al Janub" },
        { cityName: "تمير", engName: "Tumair" },
        { cityName: "العيينة", engName: "Al Uyaynah" },
        { cityName: "الشنان", engName: "Shunan" },
        { cityName: "أملج", engName: "Umluj" },
        { cityName: "مشهد", engName: "Mashhad" },
        { cityName: "القنفذة", engName: "Qunfudhah" },
        { cityName: "الوجه", engName: "Al Wajh" },
        { cityName: "الفيصلية", engName: "Al Faysaliyah" },
        { cityName: "بدر", engName: "Badr" },
        { cityName: "ضرما", engName: "Dhurma" },
        { cityName: "حريملاء", engName: "Huraymila" },
        { cityName: "عنك", engName: "Ank" },
        { cityName: "ميسان", engName: "Maysan" },
        { cityName: "رفحاء", engName: "Rafha" },
        { cityName: "حقل", engName: "Haql" },
        { cityName: "خليص", engName: "Khulais" },
        { cityName: "بقيق", engName: "Buqayq" },
        { cityName: "الزلفي", engName: "Zulfi" },
        { cityName: "الخرج", engName: "Al-Kharj" },
        { cityName: "الظهران", engName: "Dhahran" },
        { cityName: "عنيزة", engName: "Onaizah" },
        { cityName: "سكاكا", engName: "Sakaka" },
        { cityName: "الجموم", engName: "Al Jumum" },
        { cityName: "العلا", engName: "Al Ula" },
        { cityName: "وادي الدواسر", engName: "Wadi Al Dawasir" },
        { cityName: "الخفجي", engName: "Al Khafji" },
        { cityName: "صبيا", engName: "Sabya" },
        { cityName: "الأفلاج", engName: "Al Aflaj" },
        { cityName: "بيشة", engName: "Bisha" },
        { cityName: "سيهات", engName: "Sihat" },
        { cityName: "تاروت", engName: "Tarout" },
        { cityName: "الدرعية", engName: "Diriyah" },
        { cityName: "الملك فهد", engName: "King Fahd" },
        { cityName: "خيبر", engName: "Khaybar" },
        { cityName: "بلجرشي", engName: "Baljurashi" },
        { cityName: "القريات", engName: "Al Qurayyat" },
        { cityName: "عفيف", engName: "Afif" },
        { cityName: "بحرة", engName: "Bahrah" },
        { cityName: "ساجر", engName: "Sajir" },
    ]
},
{
    countryName: "اليمن",
    cities: [
        { cityName: "صنعاء", engName: "Sana'a" },
        { cityName: "عدن", engName: "Aden" },
        { cityName: "تعز", engName: "Taiz" },
        { cityName: "الحديدة", engName: "Al Hudaydah" },
        { cityName: "إب", engName: "Ibb" },
        { cityName: "ذمار", engName: "Dhamar" },
        { cityName: "المكلا", engName: "Mukalla" },
        { cityName: "عتق", engName: "Ataq" },
        { cityName: "الغيظة", engName: "Al Ghaydah" },
        { cityName: "سيئون", engName: "Sayun" },
        { cityName: "تريم", engName: "Tarim" },
        { cityName: "البيضاء", engName: "Al Bayda" },
        { cityName: "حجة", engName: "Hajjah" },
        { cityName: "الجوف", engName: "Al Jawf" },
        { cityName: "أبين", engName: "Abyan" },
        { cityName: "ذمار", engName: "Dhamar" },
        { cityName: "عتق", engName: "Ataq" },
    ]
},
{
    countryName: "الإمارات",
    cities: [
        { cityName: "أبوظبي", engName: "Abu Dhabi" },
        { cityName: "دبي", engName: "Dubai" },
        { cityName: "الشارقة", engName: "Sharjah" },
        { cityName: "عجمان", engName: "Ajman" },
        { cityName: "أم القيوين", engName: "Umm Al-Quwain" },
        { cityName: "رأس الخيمة", engName: "Ras Al Khaimah" },
        { cityName: "الفجيرة", engName: "Fujairah" },
        { cityName: "خورفكان", engName: "Khorfakkan" },
        { cityName: "العين", engName: "Al Ain" },
        { cityName: "دبا الحصن", engName: "Dibba Al-Hisn" },
        { cityName: "دبا الفجيرة", engName: "Dibba Al-Fujairah" },
        { cityName: "حتا", engName: "Hatta" },
        { cityName: "ليوا", engName: "Liwa" },
        { cityName: "خالدية", engName: "Khalidiya" },
    ]
},
{
    countryName: "عمان",
    cities: [
        { cityName: "مسقط", engName: "Muscat" },
        { cityName: "صلالة", engName: "Salalah" },
        { cityName: "صحار", engName: "Sohar" },
        { cityName: "نزوى", engName: "Nizwa" },
        { cityName: "صور", engName: "Sur" },
        { cityName: "البريمي", engName: "Al Buraimi" },
        { cityName: "إبراء", engName: "Ibri" },
        { cityName: "الخابورة", engName: "Khaburah" },
        { cityName: "بهلاء", engName: "Bahla" },
        { cityName: "شناص", engName: "Shinas" },
        { cityName: "العين", engName: "Al Ain" },
        { cityName: "صحم", engName: "Saham" },
        { cityName: "المضيبي", engName: "Al Mudaybi" },
        { cityName: "بدية", engName: "Bidiyah" },
        { cityName: "ينقل", engName: "Yanqul" },
        { cityName: "المصنعة", engName: "Al Masnaah" },
        { cityName: "الرستاق", engName: "Rustaq" },
        { cityName: "عبري", engName: "Ibri" },
        { cityName: "مرباط", engName: "Mirbat" },
        { cityName: "السيب", engName: "Seeb" },
    ]
},
{
    countryName: "قطر",
    cities: [
        { cityName: "الدوحة", engName: "Doha" },
        { cityName: "الريان", engName: "Al Rayyan" },
        { cityName: "الوكرة", engName: "Al Wakrah" },
        { cityName: "الخور", engName: "Al Khor" },
        { cityName: "الخليج الغربي", engName: "Al Khawr" },
        { cityName: "الوجهة", engName: "Al Wukair" },
        { cityName: "الدحيل", engName: "Duhail" },
        { cityName: "أم صلال", engName: "Umm Salal" },
        { cityName: "مسيعيد", engName: "Mesaieed" },
        { cityName: "الشهانية", engName: "Al Shahaniya" },
    ]
},
{
    countryName: "البحرين",
    cities: [
        { cityName: "المنامة", engName: "Manama" },
        { cityName: "المحرق", engName: "Muharraq" },
        { cityName: "جدحفص", engName: "Jidhafs" },
        { cityName: "الحد", engName: "Al Hidd" },
        { cityName: "سار", engName: "Sar" },
        { cityName: "عراد", engName: "Arad" },
        { cityName: "الرفاع", engName: "Riffa" },
        { cityName: "المقشع", engName: "Al Maqsha" },
    ]
},
{
    countryName: "العراق",
    cities: [
        { cityName: "بغداد", engName: "Baghdad" },
        { cityName: "البصرة", engName: "Basra" },
        { cityName: "الموصل", engName: "Mosul" },
        { cityName: "كركوك", engName: "Kirkuk" },
        { cityName: "النجف", engName: "Najaf" },
        { cityName: "كربلاء", engName: "Karbala" },
        { cityName: "الديوانية", engName: "Diwaniyah" },
        { cityName: "السماوة", engName: "Samawah" },
        { cityName: "الديوانية", engName: "Diwaniyah" },
        { cityName: "ذي قار", engName: "Dhi Qar" },
        { cityName: "بابل", engName: "Babil" },
        { cityName: "واسط", engName: "Wasit" },
        { cityName: "ميسان", engName: "Maysan" },
        { cityName: "الأنبار", engName: "Anbar" },
        { cityName: "صلاح الدين", engName: "Salah ad Din" },
        { cityName: "ديالى", engName: "Diyala" },
        { cityName: "كركوك", engName: "Kirkuk" },
        { cityName: "نينوى", engName: "Nineveh" },
        { cityName: "القادسية", engName: "Al-Qadisiyyah" },
        { cityName: "السليمانية", engName: "Sulaymaniyah" },
        { cityName: "أربيل", engName: "Erbil" },
        { cityName: "دهوك", engName: "Duhok" },
        { cityName: "حلبجة", engName: "Halabja" },
    ]
},
{
    countryName: "سوريا",
    cities: [
        { cityName: "دمشق", engName: "Damascus" },
        { cityName: "حلب", engName: "Aleppo" },
        { cityName: "حماة", engName: "Hama" },
        { cityName: "حمص", engName: "Homs" },
        { cityName: "اللاذقية", engName: "Latakia" },
        { cityName: "طرطوس", engName: "Tartus" },
        { cityName: "الرقة", engName: "Raqqa" },
        { cityName: "إدلب", engName: "Idlib" },
        { cityName: "درعا", engName: "Daraa" },
        { cityName: "الحسكة", engName: "Al-Hasakah" },
        { cityName: "سلمية", engName: "Salamiyah" },
        { cityName: "منبج", engName: "Manbij" },
        { cityName: "عفرين", engName: "Afrin" },
        { cityName: "جبلة", engName: "Jableh" },
    ]
},
{
    countryName: "الأردن",
    cities: [
        { cityName: "عمان", engName: "Amman" },
        { cityName: "الزرقاء", engName: "Zarqa" },
        { cityName: "إربد", engName: "Irbid" },
        { cityName: "العقبة", engName: "Aqaba" },
        { cityName: "السلط", engName: "As-Salt" },
        { cityName: "معان", engName: "Ma'an" },
        { cityName: "الكرك", engName: "Karak" },
        { cityName: "مادبا", engName: "Madaba" },
        { cityName: "المفرق", engName: "Mafraq" },
        { cityName: "جرش", engName: "Jerash" },
        { cityName: "عجلون", engName: "Ajloun" },
    ]
},
{
    countryName: "فلسطين",
    cities: [
        { cityName: "القدس", engName: "Jerusalem" },
        { cityName: "رام الله", engName: "Ramallah" },
        { cityName: "بيت لحم", engName: "Bethlehem" },
        { cityName: "نابلس", engName: "Nablus" },
        { cityName: "جنين", engName: "Jenin" },
        { cityName: "طولكرم", engName: "Tulkarm" },
        { cityName: "قلقيلية", engName: "Qalqilya" },
        { cityName: "سلفيت", engName: "Salfit" },
        { cityName: "غزة", engName: "Gaza" },
        { cityName: "خان يونس", engName: "Khan Yunis" },
        { cityName: "دير البلح", engName: "Deir al-Balah" },
        { cityName: "رفح", engName: "Rafah" },
        { cityName: "أم الفحم", engName: "Umm al-Fahm" },
        { cityName: "اللد", engName: "Lod" },
        { cityName: "نيشر", engName: "Nesher" },
        { cityName: "رهط", engName: "Rahat" },
        { cityName: "أم خالد", engName: "Netanya" },
        { cityName: "بئر السبع", engName: "Beersheba" },
        { cityName: "أشدود", engName: "Ashdod" },
        { cityName: "بتاح تكفا", engName: "Petah Tikva" },
        { cityName: "رمات غان", engName: "Ramat Gan" },
        { cityName: "عسقلان", engName: "Ashkelon" },
        { cityName: "كفر سابا", engName: "Kfar Saba" },
        { cityName: "حيفا", engName: "Haifa" },
        { cityName: "الناصرة", engName: "Nazareth" },
        { cityName: "جت", engName: "Jatt" },
        { cityName: "جسر الزرقاء", engName: "Jisr az-Zarqa" },
        { cityName: "حولون", engName: "Holon" },
        { cityName: "يافا", engName: "Tel Aviv" },
        { cityName: "عكا", engName: "Acre" },
        { cityName: "نهاريا", engName: "Nahariya" },
        { cityName: "بني براك", engName: "Bnei Brak" },
        { cityName: "رحوفوت", engName: "Rehovot" },
        { cityName: "تمبل هيلز", engName: "Temple Hills" },
        { cityName: "كفر سابا", engName: "Kfar Saba" },
        { cityName: "كريات يام", engName: "Kiryat Yam" },
        { cityName: "جيفعاتايم", engName: "Giv'atayim" },
        { cityName: "كريات بياليك", engName: "Kiryat Bialik" },
        { cityName: "الخالصة", engName: "Kiryat Shmona" },
        { cityName: "رعنانا", engName: "Ra'anana" },
        { cityName: "بات يام", engName: "Bat Yam" },
        { cityName: "سخنين", engName: "Sakhnin" },
    ]
},
{
    countryName: "تركيا",
    cities: [
        { cityName: "اسطنبول", engName: "Istanbul" },
        { cityName: "أنقرة", engName: "Ankara" },
        { cityName: "إزمير", engName: "Izmir" },
        { cityName: "بورصة", engName: "Bursa" },
        { cityName: "أنطاليا", engName: "Antalya" },
        { cityName: "أدانا", engName: "Adana" },
        { cityName: "كونيا", engName: "Konya" },
        { cityName: "آنطاكيا", engName: "Antakya" },
        { cityName: "مرسين", engName: "Mersin" },
        { cityName: "قيصري", engName: "Kayseri" },
        { cityName: "سامسون", engName: "Samsun" },
        { cityName: "ديار بكر", engName: "Diyarbakir" },
        { cityName: "إسكيشهير", engName: "Eskisehir" },
        { cityName: "غازي عنتاب", engName: "Gaziantep" },
        { cityName: "أفيون قره حصار", engName: "Afyonkarahisar" },
        { cityName: "باتمان", engName: "Batman" },
        { cityName: "أردهان", engName: "Ardahan" },
        { cityName: "بوردور", engName: "Burdur" },
        { cityName: "شانكيري", engName: "Cankiri" },
        { cityName: "كارابوك", engName: "Karabuk" },
        { cityName: "قيرق قلعة", engName: "Kirikkale" },
        { cityName: "كيرشههر", engName: "Kirsehir" },
        { cityName: "كيركلاريلي", engName: "Kirklareli" },
        { cityName: "قرطاع", engName: "Kartal" },
        { cityName: "ملاطيا", engName: "Malatya" },
        { cityName: "ماردين", engName: "Mardin" },
        { cityName: "نيدا", engName: "Nigde" },
        { cityName: "أرضن", engName: "Ardahan" },
        { cityName: "بينغول", engName: "Bingol" },
        { cityName: "أدرنة", engName: "Edirne" },
        { cityName: "إيلازيغ", engName: "Elazig" },
        { cityName: "إرزينجان", engName: "Erzincan" },
        { cityName: "إرزوروم", engName: "Erzurum" },
        { cityName: "هاكاري", engName: "Hakkari" },
        { cityName: "قارص", engName: "Kars" },
        { cityName: "كيليس", engName: "Kilis" },
        { cityName: "كوتاهيا", engName: "Kutahya" },
        { cityName: "مانيسا", engName: "Manisa" },
        { cityName: "أكساراي", engName: "Aksaray" },
        { cityName: "طرابزون", engName: "Trabzon" },
        { cityName: "تونجلي", engName: "Tunceli" },
        { cityName: "شانلي أورفا", engName: "Sanliurfa" },
        { cityName: "يوزغات", engName: "Yozgat" },
        { cityName: "زونجولداك", engName: "Zonguldak" },
        { cityName: "باليكسير", engName: "Balikesir" },
        { cityName: "بارتين", engName: "Bartin" },
        { cityName: "إسبارتا", engName: "Isparta" },
        { cityName: "أماسيا", engName: "Amasya" },
        { cityName: "أرتفين", engName: "Artvin" },
        { cityName: "دوزجه", engName: "Düzce" },
        { cityName: "غرصون", engName: "Giresun" },
        { cityName: "نيفشهير", engName: "Nevsehir" },
        { cityName: "قرقلر ايلي", engName: "Kirklareli" },
        { cityName: "قونيا", engName: "Konya" },
        { cityName: "موغلا", engName: "Mugla" },
        { cityName: "سكاريا", engName: "Sakarya" },
        { cityName: "سيرت", engName: "Siirt" },
        { cityName: "سينوب", engName: "Sinop" },
        { cityName: "تيكيرداغ", engName: "Tekirdag" },
        { cityName: "توكات", engName: "Tokat" },
        { cityName: "يالوفا", engName: "Yalova" },
        { cityName: "زونغولداق", engName: "Zonguldak" },
    ]
},
{
    countryName: "شمال السودان",
    cities: [
        { cityName: "الخرطوم", engName: "Khartoum" },
        { cityName: "أم درمان", engName: "Omdurman" },
        { cityName: "بحري", engName: "Bahri" },
        { cityName: "كسلا", engName: "Kassala" },
        { cityName: "الفاو", engName: "Al Fao" },
        { cityName: "سنار", engName: "Sennar" },
        { cityName: "شندي", engName: "Shendi" },
        { cityName: "بورتسودان", engName: "Port Sudan" },
        { cityName: "عطبرة", engName: "Atbara" },
        { cityName: "الدينج", engName: "Dilling" },
        { cityName: "نيالا", engName: "Nyala" },
        { cityName: "القضارف", engName: "Al Qadarif" },
        { cityName: "سنجة", engName: "Singa" },
        { cityName: "القوز", engName: "Al Quoz" },
        { cityName: "باكا", engName: "Baka" },
        { cityName: "مدني", engName: "Medani" },
        { cityName: "العباسية", engName: "Al Abbasiyah" },
    ]
},
{
    countryName: "جنوب السودان",
    cities: [
        { cityName: "جوبا", engName: "Juba" },
        { cityName: "بور", engName: "Bor" },
        { cityName: "رمبيك", engName: "Rumbek" },
        { cityName: "ناصر", engName: "Nasir" },
        { cityName: "كايا", engName: "Kaya" },
        { cityName: "مايانج", engName: "Mayang" },
    ]
},
{
    countryName: "ليبيا",
    cities: [
        { cityName: "طرابلس", engName: "Tripoli" },
        { cityName: "بنغازي", engName: "Benghazi" },
        { cityName: "مصراتة", engName: "Misrata" },
        { cityName: "زوارة", engName: "Zuwara" },
        { cityName: "سبها", engName: "Sebha" },
        { cityName: "الخمس", engName: "Al Khums" },
        { cityName: "الزاوية", engName: "Zawiya" },
        { cityName: "درنة", engName: "Derna" },
        { cityName: "سرت", engName: "Sirte" },
        { cityName: "المرج", engName: "Al Marj" },
        { cityName: "يفرن", engName: "Yafran" },
        { cityName: "البيضاء", engName: "Al Bayda" },
        { cityName: "نالوت", engName: "Nalut" },
        { cityName: "غات", engName: "Ghat" },
        { cityName: "بني وليد", engName: "Bani Walid" },
        { cityName: "مرزق", engName: "Murzuq" },
        { cityName: "جالو", engName: "Jalu" },
        { cityName: "العزيزية", engName: "Al Aziziya" },
        { cityName: "زليتن", engName: "Zliten" },
        { cityName: "شحات", engName: "Shahhat" },
    ]
},
{
    countryName: "الجزائر",
    cities: [
        { cityName: "الجزائر العاصمة", engName: "Algiers" },
        { cityName: "وهران", engName: "Oran" },
        { cityName: "قسنطينة", engName: "Constantine" },
        { cityName: "باتنة", engName: "Batna" },
        { cityName: "بسكرة", engName: "Biskra" },
        { cityName: "تلمسان", engName: "Tlemcen" },
        { cityName: "تيارت", engName: "Tiaret" },
        { cityName: "ورقلة", engName: "Ouargla" },
        { cityName: "سطيف", engName: "Setif" },
        { cityName: "مستغانم", engName: "Mostaganem" },
        { cityName: "سكيكدة", engName: "Skikda" },
        { cityName: "عنابة", engName: "Annaba" },
        { cityName: "بجاية", engName: "Bejaia" },
        { cityName: "تبسة", engName: "Tebessa" },
        { cityName: "بومرداس", engName: "Boumerdes" },
        { cityName: "معسكر", engName: "Mascara" },
        { cityName: "البويرة", engName: "Bouira" },
        { cityName: "ميلة", engName: "Mila" },
        { cityName: "أدرار", engName: "Adrar" },
        { cityName: "الشلف", engName: "Chlef" },
        { cityName: "الطارف", engName: "El Tarf" },
        { cityName: "قالمة", engName: "Guelma" },
        { cityName: "المدية", engName: "Medea" },
        { cityName: "سيدي بلعباس", engName: "Sidi Bel Abbes" },
        { cityName: "تيزي وزو", engName: "Tizi Ouzou" },
        { cityName: "خنشلة", engName: "Khenchela" },
        { cityName: "سوق أهراس", engName: "Souk Ahras" },
        { cityName: "تيندوف", engName: "Tindouf" },
        { cityName: "تيسمسيلت", engName: "Tissemsilt" },
        { cityName: "البيض", engName: "El Bayadh" },
        { cityName: "المسيلة", engName: "M'Sila" },
        { cityName: "البليدة", engName: "Blida" },
        { cityName: "الجلفة", engName: "Djelfa" },
        { cityName: "جيجل", engName: "Jijel" },
        { cityName: "تمنراست", engName: "Tamanrasset" },
        { cityName: "الوادي", engName: "El Oued" },
    ]
},
{
    countryName: "تونس",
    cities: [
        { cityName: "تونس", engName: "Tunis" },
        { cityName: "صفاقس", engName: "Sfax" },
        { cityName: "سوسة", engName: "Sousse" },
        { cityName: "قابس", engName: "Gabes" },
        { cityName: "قفصة", engName: "Gafsa" },
        { cityName: "القيروان", engName: "Kairouan" },
        { cityName: "المهدية", engName: "Mahdia" },
        { cityName: "الكاف", engName: "Kef" },
        { cityName: "سيدي بوزيد", engName: "Sidi Bouzid" },
        { cityName: "توزر", engName: "Tozeur" },
        { cityName: "نابل", engName: "Nabeul" },
        { cityName: "زغوان", engName: "Zaghouan" },
        { cityName: "بن عروس", engName: "Ben Arous" },
        { cityName: "مدنين", engName: "Medenine" },
        { cityName: "تطاوين", engName: "Tataouine" },
        { cityName: "جندوبة", engName: "Jendouba" },
        { cityName: "باجة", engName: "Beja" },
        { cityName: "سليانة", engName: "Siliana" },
        { cityName: "القصرين", engName: "Kasserine" },
        { cityName: "الكاف", engName: "Le Kef" },
        { cityName: "أريانة", engName: "Ariana" },
        { cityName: "منوبة", engName: "Manouba" },
    ]
},
{
    countryName: "المغرب",
    cities: [
        { cityName: "الدار البيضاء", engName: "Casablanca" },
        { cityName: "الرباط", engName: "Rabat" },
        { cityName: "فاس", engName: "Fes" },
        { cityName: "مراكش", engName: "Marrakech" },
        { cityName: "طنجة", engName: "Tangier" },
        { cityName: "مكناس", engName: "Meknes" },
        { cityName: "أغادير", engName: "Agadir" },
        { cityName: "وجدة", engName: "Oujda" },
        { cityName: "الحسيمة", engName: "Al Hoceima" },
        { cityName: "العيون", engName: "Laayoune" },
        { cityName: "الناظور", engName: "Nador" },
        { cityName: "الجديدة", engName: "El Jadida" },
        { cityName: "سلا", engName: "Sale" },
        { cityName: "القنيطرة", engName: "Kenitra" },
        { cityName: "بني ملال", engName: "Beni Mellal" },
        { cityName: "تطوان", engName: "Tetouan" },
        { cityName: "خريبكة", engName: "Khouribga" },
        { cityName: "تاونات", engName: "Taounate" },
        { cityName: "سيدي قاسم", engName: "Sidi Kacem" },
        { cityName: "الصويرة", engName: "Essaouira" },
        { cityName: "المحمدية", engName: "Mohammedia" },
        { cityName: "بن سليمان", engName: "Ben Slimane" },
        { cityName: "الرشيدية", engName: "Errachidia" },
        { cityName: "تيفلت", engName: "Tiflet" },
        { cityName: "زاكورة", engName: "Zagora" },
        { cityName: "الفقيه بن صالح", engName: "Fquih Ben Salah" },
        { cityName: "تاوريرت", engName: "Taourirt" },
        { cityName: "بركان", engName: "Berkane" },
        { cityName: "سيدي سليمان", engName: "Sidi Slimane" },
        { cityName: "تازة", engName: "Taza" },
        { cityName: "خنيفرة", engName: "Khenifra" },
        { cityName: "بوجدور", engName: "Boujdour" },
        { cityName: "العرائش", engName: "Larache" },
        { cityName: "سيدي بنور", engName: "Sidi Bennour" },
        { cityName: "تيزنيت", engName: "Tiznit" },
        { cityName: "برشيد", engName: "Berrechid" },
        { cityName: "سيدي إفني", engName: "Sidi Ifni" },
        { cityName: "الفنيدق", engName: "Fnideq" },
        { cityName: "تمارة", engName: "Témara" },
    ]
},
{
    countryName: "أفغانستان",
    cities: [
        { cityName: "كابول", engName: "Kabul" },
        { cityName: "قندهار", engName: "Kandahar" },
        { cityName: "هرات", engName: "Herat" },
        { cityName: "مزار الشريف", engName: "Mazar-i-Sharif" },
        { cityName: "كندوز", engName: "Kunduz" },
        { cityName: "جلال آباد", engName: "Jalalabad" },
        { cityName: "لشكر گاه", engName: "Lashkar Gah" },
        { cityName: "طالوقان", engName: "Taluqan" },
        { cityName: "پل خمری", engName: "Puli Khumri" },
        { cityName: "غزني", engName: "Ghazni" },
        { cityName: "شبرغان", engName: "Sheberghan" },
        { cityName: "باميان", engName: "Bamyan" },
        { cityName: "سرپل", engName: "Sar-e Pol" },
        { cityName: "فاره", engName: "Farah" },
        { cityName: "پکتیا", engName: "Paktia" },
        { cityName: "سمنگان", engName: "Samangan" },
    ]
},
{
    countryName: "جزر القمر",
    cities: [
        { cityName: "موروني", engName: "Moroni" },
        { cityName: "فومبوني", engName: "Fomboni" },
        { cityName: "ديموني", engName: "Dembeni" },
        { cityName: "بوياني", engName: "Boueni" },
    ]
},
{
    "countryName": "غينيا",
    "cities": [
        { "cityName": "كوناكري", "engName": "Conakry" },
        { "cityName": "نزيريكوري", "engName": "Nzérékoré" },
        { "cityName": "كانكان", "engName": "Kankan" },
        { "cityName": "لابيه", "engName": "Labe" },
        { "cityName": "مامو", "engName": "Mamou" },
        { "cityName": "بوكي", "engName": "Boke" },
        { "cityName": "فريا", "engName": "Fria" },
        { "cityName": "سيغيري", "engName": "Siguiri" },
        { "cityName": "ماسنتا", "engName": "Macenta" },
        { "cityName": "كنديا", "engName": "Kindia" },
        { "cityName": "لولا", "engName": "Lola" },
    ]
},
{
    "countryName": "إندونيسيا",
    "cities": [
        { "cityName": "جاكرتا", "engName": "Jakarta" },
        { "cityName": "باندونج", "engName": "Bandung" },
        { "cityName": "سورابايا", "engName": "Surabaya" },
        { "cityName": "ميدان", "engName": "Medan" },
        { "cityName": "فاليمباغ", "engName": "Palembang" },
        { "cityName": "تانجيرانج", "engName": "Tangerang" },
        { "cityName": "سيمارانج", "engName": "Semarang" },
        { "cityName": "بانجارماسين", "engName": "Banjarmasin" },
        { "cityName": "ماكاسار", "engName": "Makassar" },
        { "cityName": "مانادو", "engName": "Manado" },
        { "cityName": "بادونج", "engName": "Padang" },
        { "cityName": "بيكانبارو", "engName": "Pekanbaru" },
        { "cityName": "ديبوك", "engName": "Depok" },
        { "cityName": "باليكبابان", "engName": "Balikpapan" },
        { "cityName": "سيماهي", "engName": "Cimahi" },
        { "cityName": "يوجياكارتا", "engName": "Yogyakarta" },
        { "cityName": "باندار لامبونج", "engName": "Bandar Lampung" },
        { "cityName": "سماريندا", "engName": "Samarinda" },
        { "cityName": "ماتارام", "engName": "Mataram" },
        { "cityName": "باتو", "engName": "Batu" },
        { "cityName": "كوتا بارو", "engName": "Kota Baru" },
        { "cityName": "بوجور", "engName": "Bogor" },
        { "cityName": "بينكولو", "engName": "Bengkulu" },
        { "cityName": "موجوكرتو", "engName": "Mojokerto" }
    ]
},
{
    "countryName": "إيران",
    "cities": [
        { "cityName": "طهران", "engName": "Tehran" },
        { "cityName": "مشهد", "engName": "Mashhad" },
        { "cityName": "اصفهان", "engName": "Isfahan" },
        { "cityName": "كرج", "engName": "Karaj" },
        { "cityName": "تبريز", "engName": "Tabriz" },
        { "cityName": "شيراز", "engName": "Shiraz" },
        { "cityName": "اهواز", "engName": "Ahvaz" },
        { "cityName": "قم", "engName": "Qom" },
        { "cityName": "كرمانشاه", "engName": "Kermanshah" },
        { "cityName": "اهر", "engName": "Ahar" },
        { "cityName": "اراك", "engName": "Arak" },
        { "cityName": "يزد", "engName": "Yazd" },
        { "cityName": "قزوين", "engName": "Qazvin" },
        { "cityName": "ساري", "engName": "Sari" },
        { "cityName": "رشت", "engName": "Rasht" },
        { "cityName": "كرمان", "engName": "Kerman" },
        { "cityName": "همدان", "engName": "Hamadan" },
        { "cityName": "اروميه", "engName": "Urmia" },
        { "cityName": "زاهدان", "engName": "Zahedan" },
        { "cityName": "اردبيل", "engName": "Ardabil" },
        { "cityName": "بندرعباس", "engName": "Bandar Abbas" },
        { "cityName": "بندر انزلي", "engName": "Bandar Anzali" },
        { "cityName": "ايلام", "engName": "Ilam" },
        { "cityName": "بوشهر", "engName": "Bushehr" },
        { "cityName": "خرم‌آباد", "engName": "Khorramabad" },
    ]
},
{
    "countryName": "لبنان",
    "cities": [
        { "cityName": "بيروت", "engName": "Beirut" },
        { "cityName": "صيدا", "engName": "Sidon" },
        { "cityName": "النبطية", "engName": "Nabatieh" },
        { "cityName": "جونية", "engName": "Jounieh" },
        { "cityName": "زحلة", "engName": "Zahle" },
        { "cityName": "بعلبك", "engName": "Baalbek" },
        { "cityName": "جبيل", "engName": "Byblos" },
        { "cityName": "السبتية", "engName": "Saida" },
        { "cityName": "المتن", "engName": "Matn" },
        { "cityName": "بعبدا", "engName": "Baabda" },
        { "cityName": "عاليه", "engName": "Aley" },
        { "cityName": "صور", "engName": "Tyre" },
    ]
},
{
    "countryName": "ماليزيا",
    "cities": [
        { "cityName": "كوالالمبور", "engName": "Kuala Lumpur" },
        { "cityName": "جورج تاون", "engName": "George Town" },
        { "cityName": "إيبوه", "engName": "Ipoh" },
        { "cityName": "شاه علم", "engName": "Shah Alam" },
        { "cityName": "بيتالينغ جايا", "engName": "Petaling Jaya" },
        { "cityName": "جوهور بهارو", "engName": "Johor Bahru" },
        { "cityName": "كوتا كينابالو", "engName": "Kota Kinabalu" },
        { "cityName": "كوتا بهارو", "engName": "Kota Bharu" },
        { "cityName": "كوالا تريڠانو", "engName": "Kuala Terengganu" },
        { "cityName": "كوتا ساماراهان", "engName": "Kota Samarahan" },
        { "cityName": "سيرمبانغ", "engName": "Seremban" },
        { "cityName": "تايبينغ", "engName": "Taiping" },
        { "cityName": "كوانتان", "engName": "Kuantan" },
        { "cityName": "سيبو", "engName": "Sibu" },
        { "cityName": "ميري", "engName": "Miri" },
        { "cityName": "ألور ستار", "engName": "Alor Setar" },
        { "cityName": "راوانج", "engName": "Rawang" },
        { "cityName": "بوتراجايا", "engName": "Putrajaya" },
        { "cityName": "لابوان", "engName": "Labuan" },
        { "cityName": "بندر سيري بيغاوان", "engName": "Bandar Seri Begawan" }
    ]
},
{
    "countryName": "مالي",
    "cities": [
        { "cityName": "باماكو", "engName": "Bamako" },
        { "cityName": "سيكاسو", "engName": "Sikasso" },
        { "cityName": "موبتي", "engName": "Mopti" },
        { "cityName": "كوليكورو", "engName": "Koulikoro" },
        { "cityName": "سيغو", "engName": "Segou" },
        { "cityName": "كايي", "engName": "Kayes" },
        { "cityName": "سان", "engName": "San" },
        { "cityName": "سيغون", "engName": "Ségou" },
        { "cityName": "مالي", "engName": "Mali" },
        { "cityName": "جاو", "engName": "Gao" },
        { "cityName": "تيمبكتو", "engName": "Timbuktu" },
        { "cityName": "تيساليت", "engName": "Tessalit" },
        { "cityName": "دير", "engName": "Diré" },
        { "cityName": "أنسوكو", "engName": "Ansongo" },
        { "cityName": "تامنراست", "engName": "Tamanrasset" },
    ]
},
{
    "countryName": "موريتانيا",
    "cities": [
        { "cityName": "نواكشوط", "engName": "Nouakchott" },
        { "cityName": "نواذيبو", "engName": "Nouadhibou" },
        { "cityName": "روصو", "engName": "Rosso" },
        { "cityName": "زويرات", "engName": "Zouérat" },
        { "cityName": "كيهيدي", "engName": "Kaédi" },
        { "cityName": "أطار", "engName": "Atar" },
        { "cityName": "سيلبابي", "engName": "Selibaby" },
        { "cityName": "ألاك", "engName": "Aleg" },
        { "cityName": "النعمة", "engName": "Néma" },
        { "cityName": "كيفه", "engName": "Kiffa" },
        { "cityName": "لعيون", "engName": "Laayoune" },
    ]
},
{
    "countryName": "النيجر",
    "cities": [
        { "cityName": "نيامي", "engName": "Niamey" },
        { "cityName": "زندر", "engName": "Zinder" },
        { "cityName": "مرادي", "engName": "Maradi" },
        { "cityName": "أغاديس", "engName": "Agadez" },
        { "cityName": "تاهوا", "engName": "Tahoua" },
        { "cityName": "دوسو", "engName": "Dosso" },
        { "cityName": "ماداوا", "engName": "Madaoua" },
        { "cityName": "تيرا", "engName": "Téra" },
        { "cityName": "بيلما", "engName": "Bilma" },
        { "cityName": "كولو", "engName": "Kollo" },
        { "cityName": "غايا", "engName": "Gaya" },
        { "cityName": "آيرو", "engName": "Ayorou" },
        { "cityName": "نجيجمي", "engName": "N'guigmi" },
        { "cityName": "أرليت", "engName": "Arlit" },
        { "cityName": "ماغاريا", "engName": "Magaria" },
        { "cityName": "تيلابيري", "engName": "Tillabéri" },
    ]
},
{
    "countryName": "نيجيريا",
    "cities": [
        { "cityName": "أبوجا", "engName": "Abuja" },
        { "cityName": "لاجوس", "engName": "Lagos" },
        { "cityName": "كانو", "engName": "Kano" },
        { "cityName": "إيبادان", "engName": "Ibadan" },
        { "cityName": "كالابار", "engName": "Calabar" },
        { "cityName": "بورت هاركورت", "engName": "Port Harcourt" },
        { "cityName": "أويو", "engName": "Oyo" },
        { "cityName": "بينين سيتي", "engName": "Benin City" },
        { "cityName": "كادونا", "engName": "Kaduna" },
        { "cityName": "إيكيتي", "engName": "Ekiti" },
        { "cityName": "جوس", "engName": "Jos" },
        { "cityName": "كوارا", "engName": "Kwara" },
        { "cityName": "باوتشي", "engName": "Bauchi" },
        { "cityName": "مايدوجوري", "engName": "Maiduguri" },
        { "cityName": "كاتسينا", "engName": "Katsina" },
        { "cityName": "أكوا إيبوم", "engName": "Akwa Ibom" },
        { "cityName": "أونيتشا", "engName": "Onitsha" },
        { "cityName": "واري", "engName": "Warri" },
        { "cityName": "مينا", "engName": "Minna" },
        { "cityName": "زاريا", "engName": "Zaria" },
        { "cityName": "آبا", "engName": "Aba" },
        { "cityName": "أوشوغبو", "engName": "Oshogbo" },
        { "cityName": "جومبي", "engName": "Gombe" },
        { "cityName": "فونتوا", "engName": "Funtua" },
        { "cityName": "بيرنين كيبي", "engName": "Birnin Kebbi" },
        { "cityName": "يناجوا", "engName": "Yenagoa" },
    ]
},
{
    "countryName": "باكستان",
    "cities": [
        { "cityName": "إسلام آباد", "engName": "Islamabad" },
        { "cityName": "كراتشي", "engName": "Karachi" },
        { "cityName": "لاهور", "engName": "Lahore" },
        { "cityName": "فيصل آباد", "engName": "Faisalabad" },
        { "cityName": "ملتان", "engName": "Multan" },
        { "cityName": "بهاولبور", "engName": "Bahawalpur" },
        { "cityName": "جوجرانوالا", "engName": "Gujranwala" },
        { "cityName": "غوجرات", "engName": "Gujrat" },
        { "cityName": "سکھر", "engName": "Sukkur" },
        { "cityName": "رحيم يار خان", "engName": "Rahim Yar Khan" },
        { "cityName": "سرگودها", "engName": "Sargodha" },
        { "cityName": "روالبندي", "engName": "Rawalpindi" },
        { "cityName": "جهلم", "engName": "Jhelum" },
        { "cityName": "بهالوال", "engName": "Bhalwal" },
        { "cityName": "سيالكوت", "engName": "Sialkot" },
        { "cityName": "رينالا", "engName": "Renala Khurd" },
        { "cityName": "شيخوبورا", "engName": "Sheikhupura" },
        { "cityName": "فيهاري", "engName": "Vehari" },
        { "cityName": "بهاولناغر", "engName": "Bahawalnagar" },
        { "cityName": "جوهر أباد", "engName": "Jauharabad" },
        { "cityName": "أتوك", "engName": "Attock" },
        { "cityName": "مردان", "engName": "Mardan" },
        { "cityName": "بانو", "engName": "Bannu" },
        { "cityName": "ديرا إسماعيل خان", "engName": "Dera Ismail Khan" }
    ]
},
{
    "countryName": "السنغال",
    "cities": [
        { "cityName": "داكار", "engName": "Dakar" },
        { "cityName": "تيسي", "engName": "Thiès" },
        { "cityName": "كاولاك", "engName": "Kaolack" },
        { "cityName": "زيغينشور", "engName": "Ziguinchor" },
        { "cityName": "سانت لويس", "engName": "Saint-Louis" },
        { "cityName": "روفيسك", "engName": "Rufisque" },
        { "cityName": "فاتيك", "engName": "Fatick" },
        { "cityName": "مبور", "engName": "Mbour" },
        { "cityName": "لوغا", "engName": "Louga" },
        { "cityName": "تامباكوندا", "engName": "Tambacounda" },
        { "cityName": "ديوربيل", "engName": "Diourbel" },
        { "cityName": "كيبيمير", "engName": "Kébémer" },
        { "cityName": "ماتام", "engName": "Matam" },
        { "cityName": "كيدوغو", "engName": "Kédougou" },
        { "cityName": "سيدهيو", "engName": "Sédhiou" },
        { "cityName": "كفرين", "engName": "Kaffrine" },
        { "cityName": "واكام", "engName": "Ouakam" },
        { "cityName": "كولدا", "engName": "Kolda" },
    ]
},
{
    "countryName": "سيراليون",
    "cities": [
        { "cityName": "فريتاون", "engName": "Freetown" },
        { "cityName": "بو", "engName": "Bo" },
        { "cityName": "كنيما", "engName": "Kenema" },
        { "cityName": "ماكيني", "engName": "Makeni" },        
        { "cityName": "كونو", "engName": "Kono" },
    ]
},
{
    "countryName": "الصومال",
    "cities": [
        { "cityName": "مقديشو", "engName": "Mogadishu" },
        { "cityName": "هرجيسا", "engName": "Hargeisa" },
        { "cityName": "بوساسو", "engName": "Bosaso" },
        { "cityName": "كيسمايو", "engName": "Kismayo" },
        { "cityName": "بورما", "engName": "Borama" },
        { "cityName": "بربرة", "engName": "Berbera" },
        { "cityName": "جالكايو", "engName": "Galkayo" },
        { "cityName": "قرضو", "engName": "Qardho" },
        { "cityName": "بوراو", "engName": "Burao" },
        { "cityName": "جروي", "engName": "Garoowe" },
        { "cityName": "ماركا", "engName": "Marka" },
        { "cityName": "ميركا", "engName": "Merca" },
        { "cityName": "كريني", "engName": "Keren" },
    ]
}
];


function fillCountries() {
    const countriesList = document.getElementById("countryDatalist");
    const citiesList = document.getElementById("cityDatalist");
    const countryInput = document.getElementById("countryInput");
    const citiesInput = document.getElementById("cityInput");

    countries.forEach((country) => {
        const countryOption = document.createElement("option");
        let countryName = country.countryName;
        countryOption.value = countryName;
        countryOption.textContent = countryName;
        countriesList.appendChild(countryOption);
    });


    let timeoutId;

    countryInput.addEventListener("input", () => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            const enteredCountry = countryInput.value.trim();
            selectedCountry = countries.find(
                (country) => country.countryName === enteredCountry
            );

            if (selectedCountry) {
                fillCities(selectedCountry.cities);
            } else {
                selectedCity = null;
                cityText.value = "";
                citiesInput.value = "";
                citiesList.innerHTML = "";
            }
        }, 300);
    });
}

function fillCities(cityArr) {

    const citiesList = document.getElementById("cityDatalist");
    citiesList.innerHTML = "";
    cityArr.forEach((city) => {
        const cityOption = document.createElement("option");
        let cityName = city.cityName;
        cityOption.value = cityName;
        cityOption.textContent = cityName;
        citiesList.appendChild(cityOption);
    });

    const citiesInput = document.getElementById("cityInput");
    let timeoutId;

    citiesInput.addEventListener("input", () => {
        clearTimeout(timeoutId);
        const enteredCity = citiesInput.value.trim();
        selectedCity = cityArr.find((city) => city.cityName === enteredCity);
        timeoutId = setTimeout(() => {            
            if (selectedCity) {
                getPrayerTimes(selectedCity.engName, selectedCity);
            }
        }, 300);
    });
}



function fillPrayerTimes(id, time) {
    document.getElementById(id).innerHTML = time;
}

function getPrayerTimes(engName, selectedCity) {
    const apiKey = "eacd572bf6mshec8f80c9dfb7929p10a7e8jsn6dfce5805332";

    cityText.textContent = lastExistCity || selectedCity.cityName;

    fetch(`https://muslimsalat.p.rapidapi.com/${engName}.json`, {

        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'muslimsalat.p.rapidapi.com'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {

        if (data && data.items && data.items.length > 0 && data.items[0].date_for) {
            let prayerTimes = data.items[0];

            prayerTimes.fajr = prayerTimes.fajr.replace("am", "ص").replace("pm", "م");
            prayerTimes.shurooq = prayerTimes.shurooq.replace("am", "ص").replace("pm", "م");
            prayerTimes.dhuhr = prayerTimes.dhuhr.replace("am", "ص").replace("pm", "م");
            prayerTimes.asr = prayerTimes.asr.replace("am", "ص").replace("pm", "م");
            prayerTimes.maghrib = prayerTimes.maghrib.replace("am", "ص").replace("pm", "م");
            prayerTimes.isha = prayerTimes.isha.replace("am", "ص").replace("pm", "م");

            fillPrayerTimes("Fajr", prayerTimes.fajr);
            fillPrayerTimes("Shuruq", prayerTimes.shurooq);
            fillPrayerTimes("Dhuhr", prayerTimes.dhuhr);
            fillPrayerTimes("Asr", prayerTimes.asr);
            fillPrayerTimes("Maghrib", prayerTimes.maghrib);
            fillPrayerTimes("Isha", prayerTimes.isha);

            const dayElement = document.getElementById("day");
            dayElement.textContent = prayerTimes.date_for;

            lastExistCity = selectedCity.cityName;
            cityText.textContent = lastExistCity;

        } else {
            if (lastExistCity) {
                cityText.textContent = lastExistCity;
            }

            Swal.fire({
                title: 'عذراً',
                text: '.مواقيت الصلاة غير متوفرة لهذه المنطقة',
            });
        }
    })
    .catch(error => {
        if (lastExistCity) {
            cityText.textContent = lastExistCity;
        }

        Swal.fire({
            title: 'عذراً',
            text: '.مواقيت الصلاة غير متوفرة لهذه المنطقة',
        });
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


