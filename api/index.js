export default function handler(req, res) {
  const responseData = {
    "is_server_open": true,
    "code": 2,
    "country_code": "IN",
    "server_url": "https://ffsverprivate.vercel.app/",
    "latest_release_version": "1.103.1", 
    "remote_version": "1.103.1",
    "cdn_url": "https://ffsverprivate.vercel.app/",
    "appstore_url": "http://www.freefiremobile.com/",
    "is_firewall_open": false,
    "garena_hint": false,
    "garena_login": false,
    "is_review_server": false,
    "need_track_hotupdate": false,
    "gamevar": "ANODisabledRegions,string,\"ALL\"",
    "client_ip": "127.0.0.1"
  };

  // Headers ටික අර වැඩ කරන සර්වර් එකේ වගේම හදමු
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Server', 'nginx/1.20.1');
  res.setHeader('X-Powered-By', 'PHP/7.4.33');
  res.setHeader('Connection', 'keep-alive');
  
  return res.status(200).json(responseData);
}
