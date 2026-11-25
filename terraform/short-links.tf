# ============ Short links: moshikseetloo.com/<name> -> anywhere ============
# Printed QR codes (e.g. on name cards) point at a short link here, so the
# destination can change later without reprinting. To add or repoint a link,
# edit short_links and apply. 302 (not 301) so browsers never cache it for good.
# Every other path passes straight through to the site.

variable "short_links" {
  description = "Short link name (lower case, no slashes) -> destination URL"
  type        = map(string)
  default = {
    moodie = "https://www.youtube.com/watch?v=wT4fdmme1rU"
  }
}

resource "aws_cloudfront_function" "short_links" {
  name    = "portfolio-short-links"
  runtime = "cloudfront-js-2.0"
  comment = "Redirects moshikseetloo.com/<name> short links"
  publish = true
  code    = <<-EOT
    var LINKS = ${jsonencode(var.short_links)};
    function handler(event) {
      var request = event.request;
      var key = request.uri.toLowerCase();
      while (key.length > 1 && key.charAt(key.length - 1) === '/') {
        key = key.slice(0, -1);
      }
      key = key.slice(1);
      var target = Object.prototype.hasOwnProperty.call(LINKS, key) ? LINKS[key] : null;
      if (target) {
        return {
          statusCode: 302,
          statusDescription: 'Found',
          headers: {
            location: { value: target },
            'cache-control': { value: 'no-store' }
          }
        };
      }
      return request;
    }
  EOT
}
