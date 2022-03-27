const cheerio = require('cheerio');
const axios = require('axios');


function get_junior() {
  const url = 'https://github.com/backend-br/vagas/issues?q=is%3Aopen+is%3Aissue+label%3AJunior'
  axios(url) 
  .then(response => {
    const git_page = response.data
    const $ = cheerio.load(git_page)
    const vagas = []

    $('.Link--primary ', git_page).each(function () {
      const vaga = $(this).text()
      const link_vaga = $(this).attr('href')
      vagas.push({
        vaga,
        link_vaga
      })
    })
    console.log(vagas)
  }).catch(err => console.log(err))
}



function get_geral() {
  const url_geral = 'https://github.com/backend-br/vagas/issues?q=is%3Aopen+is%3Aissue'

axios(url_geral) 
  .then(response => {
    const git_page = response.data
    const $ = cheerio.load(git_page)
    const vagas = []

    $('.Link--primary ', git_page).each(function () {
      const vaga = $(this).text()
      const link_vaga = $(this).attr('href')
      vagas.push({
        vaga,
        link_vaga
      })
    })
    console.log(vagas)
  }).catch(err => console.log(err))

}


get_junior()
get_geral()
