export default function handler(req, res) {
  // සර්වර් එකේ response එක - මෙතන server_url එකටත් IP එකම පාවිච්චි කරනවා
  const responseData = {
    "is_server_open": true,
    "code": 2,
    "country_code": "IN",
    "server_url": "http://76.76.21.21/", 
    "latest_release_version": "1.103.1",
    "remote_version": "1.103.1",
    "cdn_url": "http://76.76.21.21/",
    "appstore_url": "http://www.freefiremobile.com/",
    "is_firewall_open": false,
    "garena_hint": false,
    "garena_login": false,
    "is_review_server": false,
    "need_track_hotupdate": false,
    "gamevar": "var_name,comment,var_type,var_value\nANODisabledRegions,MTP,string,\"IND,NA\"\n",
    "client_ip": "127.0.0.1"
  };

  // Nginx සර්වර් එකක් වගේ පෙනෙන්න අවශ්‍ය Headers
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Server', 'nginx/1.20.1');
  res.setHeader('X-Powered-By', 'PHP/7.4.33');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

  return res.status(200).json(responseData);
}
