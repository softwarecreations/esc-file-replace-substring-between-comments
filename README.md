# esc-file-replace-substring-between-comments
Replace substring (all lines) between comments in a file.

## Installation

1. `npm install esc-file-replace-substring-between-comments`

## Use
```JavaScript
import fileReplaceSubstringBetweenComments from 'esc-file-replace-substring-between-comments';
fs.writeFileSync(filePath, '#blah\n192.168.0.1 blah.local\n');
fileReplaceSubstringBetweenComments(filePath, 'example.org', '10.0.0.1 server.example.org\n10.0.0.2 web.example.org\n10.0.0.3 dns.example.org', 'append');
```
Resulting file
```
#blah
192.168.0.1 blah.local

#example.org starts
10.0.0.1 server.lan
10.0.0.2 web.lan
10.0.0.3 dns.lan
#example.org ends
```

## Project goals
* No external dependencies
* No nonsense
* Reliable, no radical changes will ever happen.
* Small, simple, easy to audit, yourself

If I have ideas for something different, I'll make a new package rather than make breaking changes.

## Detailed test and screenshot
(see `test.mjs` for details)
```JavaScript
fs.writeFileSync(filePath, '#blah\n192.168.0.1 blah.local\n');

show();

fileReplaceSubstringBetweenComments(filePath, 'example.org', '10.0.0.1 server.example.org\n10.0.0.2 web.example.org\n10.0.0.3 dns.example.org', 'append');

show();

fileReplaceSubstringBetweenComments(filePath, 'example.org', '10.0.0.1 my-server.example.org\n10.0.0.20 my-web.example.org\n10.0.0.30 my-dns.example.org');

show();
```
(the grey text is the show function, showing the full file as is, magenta text is the module's default output)

![image](https://github.com/user-attachments/assets/4f709ccd-8606-4043-9b23-51d45928d285)

## console.log override-able
Pass in your own logging functions for
* Changed
* Not found (disabled by default)
* Unchanged (disabled by default)

## See also
* https://www.npmjs.com/package/esc-file-replace-substring
* https://www.npmjs.com/package/esc-file-replace-contents
* https://www.npmjs.com/package/esc-read-file-without-comments
* https://www.npmjs.com/package/esc-get-data-from-json-file

## Notes
Have fun!

### Say thanks
Star the repo
https://github.com/softwarecreations/esc-file-replace-substring-between-comments

### PR's or issues
Welcome

### License
MIT
