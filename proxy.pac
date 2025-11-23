function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.linkedin.com")) {
    return "PROXY proxy.example.com:3128";
  }
  return "DIRECT";
}
