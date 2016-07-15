const Util = require('util');

const Code = require('code');
const Lab = require('lab');

const Defaults = require('eslint/conf/eslint.json');
const Local = require('../');

var lab = exports.lab = Lab.script();

var before = lab.before;
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

describe('rules', function () {
  var rules;

  before(function (done) {
    rules = Local.plugins.reduce(function (acc, name) {
      // eslint-disable-next-line global-require
      const Plugin = require(Util.format('eslint-plugin-%s', name));
      return acc.concat(Object.keys(Plugin.rules).map(function (rule) {
        return [name, rule].join('/');
      }));
    }, []).concat(Object.keys(Defaults.rules));
    done();
  });

  it('defines all rules', function (done) {
    rules.forEach(function (rule) {
      expect(Object.keys(Local.rules)).to.include(rule);
    });
    done();
  });

  it('does not define other rules', function (done) {
    Object.keys(Local.rules).forEach(function (rule) {
      expect(rules).to.include(rule);
    });
    done();
  });
});
