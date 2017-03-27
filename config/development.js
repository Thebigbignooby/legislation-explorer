// App config the for development environment.
// Do not require this directly. Use ./src/config instead.


const HOST = process.env.HOST || "localhost",
  apiBaseUrl = process.env.API_URL || `http://${HOST}:2000`,
  parameterApiBaseUrl = process.env.FLASK_API_URL || `http://${HOST}:5000`,
  gitHubProject = "openfisca/openfisca-france",
  gitWebpageUrl = "https://github.com/openfisca/legislation-explorer",
  piwikConfig = null,
  useCommitReferenceFromApi = true,
  websiteUrl = "https://www.openfisca.fr/"


export default {
  apiBaseUrl,
  gitHubProject,
  gitWebpageUrl,
  parameterApiBaseUrl,
  piwikConfig,
  useCommitReferenceFromApi,
  websiteUrl,
}
