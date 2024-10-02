'use strict';

import os from 'os';
import fs from 'fs';
import path from 'path';
// import fileReplaceSubstringBetweenComments from 'esc-file-replace-substring';
import fileReplaceSubstringBetweenComments from './main.mjs';

const filePath = path.join(os.tmpdir(), 'esc-file-replace-substring-between-comments.txt');

const show = () => console.log('---\n' + fs.readFileSync(filePath) + '---');

// let's try stuff

fs.writeFileSync(filePath, '#blah\n192.168.0.1 blah.local\n');

show();

fileReplaceSubstringBetweenComments(filePath, 'example.org', '10.0.0.1 server.lan\n10.0.0.2 web.lan\n10.0.0.3 dns.lan', 'append');

show();

fileReplaceSubstringBetweenComments(filePath, 'example.org', '10.0.0.1 my-server.lan\n10.0.0.20 my-web.lan\n10.0.0.30 my-dns.lan');

show();
