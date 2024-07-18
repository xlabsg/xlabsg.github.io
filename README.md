# Creation from PDF
1. Reference https://github.com/pdf2htmlEX/pdf2htmlEX
1. https://github.com/pdf2htmlEX/pdf2htmlEX/wiki/Download-Docker-Image
1. `docker pull pdf2htmlex/pdf2htmlex:0.18.8.rc2-master-20200820-alpine-3.12.0-x86_64`
1. `docker run -ti --rm -v ~/pdfdir:/pdf -w /pdf pdf2htmlex/pdf2htmlex:0.18.8.rc2-master-20200820-alpine-3.12.0-x86_64 --zoom 1.0 pdfname.pdf`
1. Add navbar, navbar.css and zoom.js to the html file.
1. Configure style or initial_scale by youself. Or add any other more features.