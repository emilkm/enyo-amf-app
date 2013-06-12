#!bin/bash
echo "*** Running JSHint" &&
jshint . &&
echo "*** Running amfx tests with phantomjs" &&
phantomjs lib/amfx/tools/test/ajax/phantomjs-test.js
