function FindProxyForURL(url, host) {
    var PROXY = "PROXY 194.87.227.114:3128";

    if (
        dnsDomainIs(host, "openai.com") ||
        dnsDomainIs(host, "chatgpt.com") ||
        dnsDomainIs(host, "oaiusercontent.com") ||
        dnsDomainIs(host, "oaistatic.com") ||
        dnsDomainIs(host, "ai.com") ||
        dnsDomainIs(host, "youtube.com") ||
        dnsDomainIs(host, "googleapis.com") ||
        dnsDomainIs(host, "googlevideo.com") ||
        dnsDomainIs(host, "ytimg.com") ||
        dnsDomainIs(host, "gstatic.com") ||
        dnsDomainIs(host, "instagram.com") ||
        dnsDomainIs(host, "instagr.am")  ||
        dnsDomainIs(host, "cdninstagram.com")) ||

        dnsDomainIs(host, "instagram.com") ||
        dnsDomainIs(host, "i.instagram.com") ||
        dnsDomainIs(host, "graph.instagram.com") ||

        dnsDomainIs(host, "cdninstagram.com") ||
        dnsDomainIs(host, "instagramcdn.com") ||

        dnsDomainIs(host, "facebook.com") ||
        dnsDomainIs(host, "fb.com") ||
        dnsDomainIs(host, "facebook.net") ||
        dnsDomainIs(host, "fbcdn.net") ||

        dnsDomainIs(host, "fbsbx.com") ||
        dnsDomainIs(host, "tfbnw.net")
        

    ) {
        return PROXY;
    }
    return "DIRECT";
}
