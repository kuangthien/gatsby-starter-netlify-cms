const API_URL = process.env.REACT_APP_API_URL

const STATIC_ASSETS_URL =
  navigator.userAgent !== 'ReactSnap'
    ? `${process.env.REACT_APP_ROOT_SITE_URL}contentJson/`
    : `http://localhost:45678/contentJson/`

const SITE_TITLE = 'AhaQuiz.com'
const ROOT_SITE_URL = process.env.REACT_APP_ROOT_SITE_URL

export { API_URL, SITE_TITLE, STATIC_ASSETS_URL, ROOT_SITE_URL }
