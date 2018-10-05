const {expect} = require('chai');
const rewire = require('rewire');

const action = rewire('../../src/actions/wayback-machine');

const archiveRequest = require('../fixtures/wayback-archive.json');
const alexaRequest = require('../fixtures/wayback-alexa.xml');
const mockApp = require('../_utils/mocking/platforms/app');
const mockDialog = require('../_utils/mocking/dialog');

describe('actions', () => {
  describe('wayback machine', () => {
    let app;
    let dialog;

    beforeEach(() => {
      app = mockApp();
      dialog = mockDialog();
      action.__set__('dialog', dialog);
    });

    it('check to see that overall action eventually returns a promise', () => {
      action.handler(app);
      expect(Promise.resolve()).to.be.a('promise');
    });

    it('check to see that archiveEngine is working', () => {
      let obj = { earliestYear: 0, latestYear: 0, totalUniqueURLs: 0 };
      let result;

      action.__set__('archiveEngine', function (a, b) {
        result = action.archiveEngine(archiveRequest, obj);
        expect(result).to.change(obj, 'earliestYear');
        expect(result).to.change(obj, 'latestYear');
        expect(result).to.change(obj, 'totalUniqueURLs');
      });
    });

    it('check to see that alexaEngine is working', () => {
      let obj = { alexaWorldRank: 0 };
      let result;

      action.__set__('alexaEngine', function (a, b) {
        result = action.alexaEngine(alexaRequest, obj);
        expect(result).to.change(obj, 'alexaWorldRank');
      });
    });

    it('check to see that xmlConverter is working', () => {
      let result;

      action.__set__('xmlConverter', function (a) {
        result = action.xmlConverter(alexaRequest);
        expect(result).to.not.throw('The XML parser didn\'t work.');
      });
    });
  });
});
