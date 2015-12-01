const Code = require('code');
const Lab = require('lab');

const Defaults = require('eslint/conf/eslint.json')
const Local = require('../eslintrc')

var lab = exports.lab = Lab.script();

var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

describe('rules', function () {
  it('defines all default rules', function (done) {
    Object.keys(Defaults.rules).forEach(function (key) {
      expect(Local.rules.hasOwnProperty(key)).to.be.true();
    });

    done();
  });
});
