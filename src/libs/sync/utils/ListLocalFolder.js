import readdirp from 'readdirp'

function ListLocalFolder(folderPath) {
  let results = []
  return new Promise(resolve => {
    readdirp(folderPath, {
      type: 'all', alwaysStat: true
    }).on('data', (entry) => {
      results.push(entry)
    }).on('warn', entry => {
      console.log('WARNING', entry)
    }).on('error', (err) => {
      console.log('error', err.message)
    }).on('end', () => {
      resolve(results)
    })
  })
}

export default ListLocalFolder