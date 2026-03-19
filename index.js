export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // ඕනෑම .php ඉල්ලීමකට (ver.php, client_ver.php ආදී)
    if (url.pathname.endsWith(".php")) {
      const responseData = {
        "is_server_open": true,
        "code": 2,
        "country_code": "SG", // Singapore වලට වෙනස් කළා (Garena විදිහටම)
        "server_url": "https://mute-firefly-5b34.nimsarahhnaviduhj.workers.dev/",
        "latest_release_version": "1.222.1",
        "remote_version": "1.222.1",
        "is_firewall_open": false,
        "garena_hint": false,
        "need_track_hotupdate": false,
        "gamevar": "ANODisabledRegions,string,\"NONE\"" // මේක "NONE" කළා
      };

      return new Response(JSON.stringify(responseData), {
        headers: { 
          "content-type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*" 
        },
      });
    }

    return new Response(JSON.stringify({ "status": "online" }), {
      headers: { "content-type": "application/json" },
    });
  },
};
