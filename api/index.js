export default function handler(req, res) {
  // සර්වර් එකට Request එකක් එනවාද කියලා බලන්න
  console.log("Game connecting from:", req.headers['user-agent']);

  const responseData = {
    "is_server_open": true,
    "code": 2,
    "country_code": "IN",
    "server_url": "https://ffsverprivate.vercel.app/",
    "latest_release_version": "9.9.9", // ලොකු අංකයක් දෙන්න
    "remote_version": "9.9.9",         // ලොකු අංකයක් දෙන්න
    "cdn_url": "https://ffsverprivate.vercel.app/",
    "appstore_url": "https://ffsverprivate.vercel.app/",
    "is_firewall_open": false,
    "gamevar": "ANODisabledRegions,string,\"ALL\""
  };

  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Server', 'nginx/1.20.1');
  res.status(200).json(responseData);
}
