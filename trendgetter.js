const request = require('request-promise-native')

async function getPage(token, pageNum, pageSize) {
  return await request({
    baseUrl: 'https://api.github.com',
    uri: '/search/repositories',
    qs: {
      q: 'stars:>1 language:JavaScript',
      sort: 'stars',
      order: 'desc',
      per_page: pageSize || 100,
      page: pageNum || 1
    },
    headers: {
      'User-Agent': 'Codesleuth/trendgetter',
    },
    auth: {
      bearer: token
    }
  })
}

async function getPages (token, limit = -1) {
  const pageSize = 100
  let currentPage = 1
  let morePages = true

  while (morePages && (limit === -1 || currentPage < limit)) {
    const response = await getPage(token, currentPage, pageSize)
    const obj = JSON.parse(response)

    morePages = obj.items.length > 0

    obj.items.forEach((item) => {
      process.stdout.write(JSON.stringify(item))
      process.stdout.write('\n')
    })

    currentPage += 1
  }

}

module.exports = function (args) {
  getPages(args.token, args.pages)
}
