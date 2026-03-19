export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const userAgent = request.headers.get("User-Agent") || "";

    // Browser එකට 403 පෙන්වන කොටස (Nginx Style)
    if (userAgent.includes("Mozilla") && !userAgent.includes("Dalvik") && !userAgent.includes("Garena")) {
      return new Response("<html><head><title>403 Forbidden</title></head><body><center><h1>403 Forbidden</h1></center><hr><center>nginx/1.20.1</center></body></html>", {
        status: 403,
        headers: { 
          "Content-Type": "text/html",
          "Server": "nginx/1.20.1" // මෙතනත් අපි Nginx විදිහටම පෙන්වනවා
        },
      });
    }

    // ගේම් එක රවට්ටන නියම JSON එක
    const responseData = {
      "is_server_open": true,
      "code": 2,
      "country_code": "IN",
      "server_url": "https://mute-firefly-5b34.nimsarahhnaviduhj.workers.dev/",
      "latest_release_version": "",  // මේවා හිස්ව තියන්න
      "remote_version": "",          // මේවා හිස්ව තියන්න
      "cdn_url": "",
      "appstore_url": "http://www.freefiremobile.com/",
      "is_firewall_open": false,
      "garena_hint": false,
      "garena_login": false,
      "is_review_server": false,
      "need_track_hotupdate": false,
      "gamevar": "var_name,comment,var_type,var_value\nvar_name,comment,\"var_type float, int, bool\",var_value\nANODisabledRegions,关闭MTP的地区,string,\"IND,NA\"\nANODisabledClientVariant,ANODisabledClientVariant,string,\"ClientUsingVersion_MAX_HPE,ClientUsingVersion_FFI,ClientUsingVersion_MAX|IND,ClientUsingVersion_MAX|NA,ClientUsingVersion_NORMAL|NA\"\nEnableMtpLiteDataRegion,mtp轻特征开关,string,\"BR,EUROPE,ID,ME,US,RU,SAC,SG,TH,TW,VN,PK,ZA,BD\"\nANOEmulatorCheckDisbaledClientVariant,ANOEmulatorCheckDisbaledClientVariant,string,\"ClientUsingVersion_FFI,ClientUsingVersion_MAX,ClientUsingVersion_NORMAL\"\nForceTutorial_ChangeHudABTest,fps流程中打开hud选择界面的概率,float,-1\n",
      "client_ip": "127.0.0.1"
    };

    // Nginx Headers එක්කම ගේම් එකට Response එක යැවීම
    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: { 
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Server": "nginx/1.20.1",          // ගේම් එකට පෙන්වන්නේ Nginx සර්වර් එකක් කියලා
        "X-Powered-By": "PHP/7.4.33",      // තවත් රියල් කරලා පෙන්වන්න
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0", // පරණ දත්ත ගන්න එක නවත්තන්න
        "Pragma": "no-cache",
        "Connection": "keep-alive"
      },
    });
  },
};
