'use strict'
const express = require('express');
const router = express.Router();
const parser = require('./parser');

const request	 	= 	require("request");
const cheerio 	= 	require("cheerio");
const Iconv1 		= 	require('iconv').Iconv;

/* GET home page. */
router.get('/', function(req, res, next) {

	request({uri: 'http://cleanair.seoul.go.kr/air_city.htm?method=measure', encoding: 'binary'}, function(error, response, body) {
          let array 		      =		[];
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

						let str2 			= 	$(this).find("td").eq(2).text().replace(/\s+/, "");
						str2 					= 	str2.replace(/(\r\n|\n|\r)/gm,"");
	          str2				  = 	str2.replace(/\s+/, "");

						let areaArr	  =	  [];

						areaArr.push(strArea);
						areaArr.push(str10);
						areaArr.push(str2);

						array.push(areaArr);

          });

          res.json({"dust": array});
	});

});

module.exports = router;
