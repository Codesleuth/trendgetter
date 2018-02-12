# trendgetter

A tool to fetch a [newline delimited list of JSON](http://ndjson.org/) objects representing the top list of starred JavaScript repositories on GitHub.

## Install

```
npm install -g trendgetter
```

## CLI

```
$ trendgetter -h
usage: cli.js [-h] [-v] [--pages PAGES] token

Grabs top starred JavaScript repos from the GitHub search API and writes them
to STDOUT

Positional arguments:
  token          A valid GitHub token.

Optional arguments:
  -h, --help     Show this help message and exit.
  -v, --version  Show program's version number and exit.
  --pages PAGES  The number of pages to fetch, set to -1 for all. Defaults to
                 2
```

Grab some trendy repos!

```
$ trendgetter 1234567890123456789012345678901234567890
{"id":28457823,"name":"freeCodeCamp","full_name":"freeCodeCamp/freeCodeCamp","owner" ...
```

Try format to CSV with [`csv-write-stream`](https://www.npmjs.org/package/csv-write-stream/):

```
$ npm i -g csv-write-stream
$ trendgetter 1234567890123456789012345678901234567890 | csv-write > results.csv
```

## License

MIT
