function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.linkedin.com")) {
    return "PROXY 194.87.227.114:3128";
  }
  return "DIRECT";
}
