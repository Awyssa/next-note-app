const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) =>
{
	const isDev = phase === PHASE_DEVELOPMENT_SERVER;

	return {
		env: {
			isDev,
			API_BASEPATH: isDev ? "http://localhost:3000" : process.env.URL_BASE
		},
	};
};
