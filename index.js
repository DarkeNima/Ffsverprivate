export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const userAgent = request.headers.get("User-Agent") || "";

    // Browser එකට 403 පෙන්වන කොටස (Nginx Look)
    if (userAgent.includes("Mozilla") && !userAgent.includes("Dalvik") && !userAgent.includes("Garena")) {
      return new Response("<html><head><title>403 Forbidden</title></head><body><center><h1>403 Forbidden</h1></center><hr><center>nginx/1.20.1</center></body></html>", {
        status: 403,
        headers: { "content-type": "text/html" },
      });
    }

    // ගේම් එකට දෙන Response එක (Version Bypass)
    const responseData = {
      "is_server_open": true,
      "code": 2,
      "country_code": "IN",
      "server_url": "https://mute-firefly-5b34.nimsarahhnaviduhj.workers.dev/",
      "latest_release_version": "9.9.9",
      "remote_version": "9.9.9",
      "is_firewall_open": false,
      "garena_hint": false,
      "garena_login": false,
      "need_track_hotupdate": false,
      "gamevar": "var_name,comment,var_type,var_value\nANODisabledRegions,MTP,string,\"ALL\"\n",
      "client_ip": "127.0.0.1"
    };

    return new Response(JSON.stringify(responseData), {
      headers: { 
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
      },
    });
  },
};
