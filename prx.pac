function FindProxyForURL(url, host) {
  if (
    shExpMatch(host, "*.linkedin.com") ||
    shExpMatch(host, "*.instagram.com") ||
    shExpMatch(host, "instagram.com") ||
    shExpMatch(host, "*.openai.com") ||
    shExpMatch(host, "openai.com")
  ) {
    return "PROXY 194.87.227.114:3128";
  }
  return "DIRECT";
}
