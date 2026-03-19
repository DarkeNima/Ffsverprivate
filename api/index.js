export default function handler(req, res) {
  // ගේම් එකෙන් එන විස්තර සර්වර් එකේ ලොග් කරනවා
  console.log("--- New Request Received ---");
  console.log("Method:", req.method);
  console.log("Path:", req.url);
  console.log("User-Agent:", req.headers['user-agent']);
  console.log("Headers:", JSON.stringify(req.headers));

  const responseData = {
    "is_server_open": true,
    "code": 2,
    "country_code": "IN",
    "server_url": "https://ffsverprivate.vercel.app/",
    "latest_release_version": "",
    "remote_version": "",
    "cdn_url": "",
    "appstore_url": "http://www.freefiremobile.com/",
    "is_firewall_open": false,
    "gamevar": "var_name,comment,var_type,var_value\nANODisabledRegions,MTP,string,\"ALL\"\n",
    "client_ip": "127.0.0.1"
  };

  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Server', 'nginx/1.20.1');
  res.setHeader('X-Powered-By', 'PHP/7.4.33');
  res.status(200).json(responseData);
}
