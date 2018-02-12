#!/usr/bin/env node

const ArgumentParser = require('argparse').ArgumentParser
const trendgetter = require('./')
const packageInfo = require('./package')

const argparser = new ArgumentParser({
  addHelp: true,
  description: packageInfo.description + ' and writes them to STDOUT',
  version: packageInfo.version
})

argparser.addArgument(['token'], {
  help: 'A valid GitHub token.'
})
argparser.addArgument(['--pages'], {
  help: 'The number of pages to fetch, set to -1 for all. Defaults to 2',
  defaultValue: 2
})

const args = argparser.parseArgs()

trendgetter(args)
