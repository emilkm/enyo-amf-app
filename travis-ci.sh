#!bin/bash
echo "*** Running JSHint" &&
jshint . &&
echo "*** Running amfx tests with phantomjs" &&
phantomjs lib/amfx/tools/test/amfx/phantomjs-test.js
