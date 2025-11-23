function FindProxyForURL(url, host) {
  if (
    shExpMatch(host, "*.linkedin.com") ||
    shExpMatch(host, "*.instagram.com") ||
    shExpMatch(host, "instagram.com") ||
    shExpMatch(host, "*.openai.com") ||
    shExpMatch(host, "openai.com") ||
    shExpMatch(host, "*.chatgpt.com") ||
    shExpMatch(host, "chatgpt.com") ||
    shExpMatch(host, "*.youtube.com") ||
    shExpMatch(host, "youtube.com") ||
    shExpMatch(host, "*.youtube-nocookie.com") ||
    shExpMatch(host, "youtube-nocookie.com") ||
    shExpMatch(host, "*.youtu.be") ||
    shExpMatch(host, "youtu.be") ||
    shExpMatch(host, "*.googlevideo.com")
  ) {
    return "PROXY 194.87.227.114:3128";
  }
  return "DIRECT";
}
