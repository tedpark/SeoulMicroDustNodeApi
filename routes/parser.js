'use strict'

const request	 	= 	require("request");
const cheerio 	= 	require("cheerio");
const Iconv1 		= 	require('iconv').Iconv;
let 	array 		=		[];

request({uri: 'http://cleanair.seoul.go.kr/air_city.htm?method=measure', encoding: 'binary'}, function(error, response, body) {

				const strContents 	= 	new Buffer(body, 'binary');
        const iconv 				= 	new Iconv1('EUC-KR', 'UTF-8//TRANSLIT//IGNORE');
        const $ 						= 	cheerio.load(iconv.convert(strContents).toString());

  			$('.tbl2 tbody tr').each(function() {
				//eq(0) 괄호안의 숫자를 0~5 까지 순차적으로 지역, 미세먼지, 초미세먼지 순으로 받아오게 됩니다.
					let strArea 	= 	$(this).find("td").eq(0).text().replace(/\s+/, "");
					strArea 			= 	strArea.replace(/(\r\n|\n|\r)/gm,"");
          strArea 			= 	strArea.replace(/\s+/, "");

					let str10 		= 	$(this).find("td").eq(1).text().replace(/\s+/, "");
					str10 				= 	str10.replace(/(\r\n|\n|\r)/gm,"");
          str10				  = 	str10.replace(/\s+/, "");

					let areaArr	  =	  [];
					areaArr.push(strArea);
					areaArr.push(str10);

					array.push(areaArr);

				});
				console.log(array);
});

// function
module.exports = array;
