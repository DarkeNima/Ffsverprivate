export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname.includes("/live/ver.php")) {
      const responseData = {
        "is_server_open": true,
        "code": 2,
        "country_code": "SL",
        "server_url": "https://mute-firefly-5b34.nimsarahhnaviduhj.workers.dev/",
        "latest_release_version": "1.104.1",
        "remote_version": "1.104.1",
        "is_firewall_open": false,
        "garena_hint": false,
        "need_track_hotupdate": false,
        "gamevar": "ANODisabledRegions,string,\"ALL\""
      };

      return new Response(JSON.stringify(responseData), {
        headers: { "content-type": "application/json;charset=UTF-8" },
      });
    }

    return new Response(JSON.stringify({ "status": "success", "message": "Server is Live" }), {
      headers: { "content-type": "application/json" },
    });
  },
};
