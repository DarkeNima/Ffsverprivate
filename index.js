export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const userAgent = request.headers.get("User-Agent") || "";

    // 1. Browser එකකින් ආවොත් 403 පෙන්වන්න (අර Private Server එකේ වගේමයි)
    if (userAgent.includes("Mozilla") && !userAgent.includes("Dalvik") && !userAgent.includes("Garena")) {
      return new Response("<html><head><title>403 Forbidden</title></head><body><center><h1>403 Forbidden</h1></center><hr><center>nginx/1.20.1</center></body></html>", {
        status: 403,
        headers: { "content-type": "text/html" },
      });
    }

    // 2. ගේම් එකෙන් එන ඕනෑම Request එකකට (404 නොවී) මේ JSON එක දෙන්න
    const responseData = {
      "is_server_open": true,
      "code": 2,
      "country_code": "IN",
      "server_url": "https://mute-firefly-5b34.nimsarahhnaviduhj.workers.dev/",
      "latest_release_version": "1.222.1",
      "remote_version": "1.222.1",
      "cdn_url": "",
      "appstore_url": "http://www.freefiremobile.com/",
      "is_firewall_open": false,
      "garena_hint": false,
      "garena_login": false,
      "is_review_server": false,
      "need_track_hotupdate": false,
      "gamevar": "var_name,comment,var_type,var_value\nvar_name,comment,\"var_type float, int, bool\",var_value\nANODisabledRegions,\u5173\u95edMTP\u7684\u5730\u533a,string,\"IND,NA\"\nANODisabledClientVariant,ANODisabledClientVariant,string,\"ClientUsingVersion_MAX_HPE,ClientUsingVersion_FFI,ClientUsingVersion_MAX|IND,ClientUsingVersion_MAX|NA,ClientUsingVersion_NORMAL|NA\"\nEnableMtpLiteDataRegion,mtp\u8f7b\u7279\u5f81\u5f00\u5173,string,\"BR,EUROPE,ID,ME,US,RU,SAC,SG,TH,TW,VN,PK,ZA,BD\"\nANOEmulatorCheckDisbaledClientVariant,ANOEmulatorCheckDisbaledClientVariant,string,\"ClientUsingVersion_FFI,ClientUsingVersion_MAX,ClientUsingVersion_NORMAL\"\nForceTutorial_ChangeHudABTest,fps\u6d41\u7a0b\u4e2d\u6253\u5f00hud\u9009\u62e9\u754c\u9762\u7684\u6982\u7387,float,-1\n",
      "client_ip": "127.0.0.1"
    };

    return new Response(JSON.stringify(responseData), {
      headers: { 
        "content-type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*" 
      },
    });
  },
};
