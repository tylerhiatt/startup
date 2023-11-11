# Basic Markdown Language Syntax

## Styling Text
- **this is bold text**
- _this is italicized text_
- ~~this text has a strike through it~~
- **bold with _italicized text_**
- ***this text is bold and italicized***
- This is a <sub>subscript</sub> text
- This is a <sup>superscript</sup> text

Text that is not a quote
> Text that is a quote

## Links
This is a link to the [README.md](https://github.com/tylerhiatt/startup/blob/0664745902d5a11085191eba0f12555b2b856b25/README.md)

See [this gihub page](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) for more markdwon language syntax tips.

# Website and Domain notes
- SSH into the Server
➜  ssh -i [key pair file] ubuntu@[ip address]

- Elastic IP Address: 54.208.238.109
- Domain Name: https://fernwehsup.com

- Modify Caddy file to make website secure under https, i.e.
myfunkychickens.click {
   root * /usr/share/caddy
   file_server
   header Cache-Control no-store
   header -etag
   header -server
   }


startup.myfunkychickens.click {
   reverse_proxy * localhost:4000
   header Cache-Control no-store
   header -server
   header -etag
   header Access-Control-Allow-Origin *
}

simon.myfunkychickens.click {
   reverse_proxy * localhost:3000
   header Cache-Control no-store
   header -server
   header -etag
   header Access-Control-Allow-Origin *
}
- sudo service caddy restart

- Great resource Websites:
   - https://www.pexels.com - free pictures
   - https://canva.com - brainstorming design website

