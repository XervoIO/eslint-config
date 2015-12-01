const Util = require('util');

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

  it('defines all plugin rules', function (done) {
    var plugin, rule;

    Local.plugins.forEach(function (name) {
      plugin = require(Util.format('eslint-plugin-%s', name));
      Object.keys(plugin.rules).forEach(function (key) {
        rule = Util.format('%s/%s', name, key);
        expect(Local.rules.hasOwnProperty(rule)).to.be.true();
      });
    });

    done();
  });
});
