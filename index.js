const fs = require("fs")
const markdownpdf = require("markdown-pdf")
 
fs.createReadStream("./test.md")
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream("./test.pdf"))
 