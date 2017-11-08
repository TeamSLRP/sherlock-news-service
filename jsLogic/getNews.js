const request = require('request');

const key ='e81e0ae782944b61baa781f91d27841a';

module.exports.getNews = (source,callback) => {
  request({
    url: `https://newsapi.org/v1/articles?source=${source}&sortBy=top&apiKey=${key}`,
    json: true
  }, (error,response,body)=>{
    if(error){
      callback("Unable to connect to servers.");
    } else {
      callback(undefined,{
        source: source,
        heading1: body.articles[0].title,
        news1: body.articles[0].description,
        image1: body.articles[0].urlToImage,
        date1: body.articles[0].publishedAt,
        url1: body.articles[0].url,
        heading2: body.articles[1].title,
        news2: body.articles[1].description,
        image2: body.articles[1].urlToImage,
        date2: body.articles[1].publishedAt,
        url2: body.articles[1].url,
        heading3: body.articles[2].title,
        news3: body.articles[2].description,
        image3: body.articles[2].urlToImage,
        date3: body.articles[2].publishedAt,
        url3: body.articles[2].url,
        heading4: body.articles[3].title,
        news4: body.articles[3].description,
        image4: body.articles[3].urlToImage,
        date4: body.articles[3].publishedAt,
        url4: body.articles[3].url,
        heading5: body.articles[4].title,
        news5: body.articles[4].description,
        image5: body.articles[4].urlToImage,
        date5: body.articles[4].publishedAt,
        url5: body.articles[4].url,
        heading6: body.articles[5].title,
        news6: body.articles[5].description,
        image6: body.articles[5].urlToImage,
        date6: body.articles[5].publishedAt,
        url6: body.articles[5].url,
        heading7: body.articles[6].title,
        news7: body.articles[6].description,
        image7: body.articles[6].urlToImage,
        date7: body.articles[6].publishedAt,
        url7: body.articles[6].url,
        heading8: body.articles[7].title,
        news8: body.articles[7].description,
        image8: body.articles[7].urlToImage,
        date8: body.articles[7].publishedAt,
        url8: body.articles[7].url,
        heading9: body.articles[8].title,
        news9: body.articles[8].description,
        image9: body.articles[8].urlToImage,
        date9: body.articles[8].publishedAt,
        url9: body.articles[8].url,
        heading10: body.articles[9].title,
        news10: body.articles[9].description,
        image10: body.articles[9].urlToImage,
        date10: body.articles[9].publishedAt,
        url10: body.articles[9].url
      });
    }
  });
};
